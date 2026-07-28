-- Ohio Trail Conditions administrator publishing setup
-- Authorizes only the supplied Supabase Auth user to publish trail changes.

begin;

create table if not exists public.ohio_trail_admins (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

alter table public.ohio_trails
  add column if not exists updated_by uuid references auth.users(id) on delete set null;

alter table public.ohio_trail_admins enable row level security;
revoke all on public.ohio_trail_admins from anon, authenticated;

insert into public.ohio_trail_admins (user_id)
values ('520178b7-fefc-4970-95b4-8c9c9dda1bd1')
on conflict (user_id) do nothing;

create or replace function public.is_ohio_trail_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.ohio_trail_admins a
    where a.user_id = (select auth.uid())
  );
$$;

create or replace function public.admin_upsert_ohio_trail(p_data jsonb)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  clean_data jsonb := p_data - 'surface' - 'surfaces' - 'drying' - 'drainage';
  trail_id text := nullif(trim(clean_data->>'id'), '');
  trail_name text := nullif(trim(clean_data->>'name'), '');
  trail_lat double precision;
  trail_lon double precision;
begin
  if not public.is_ohio_trail_admin() then
    raise exception 'Administrator access required';
  end if;
  if trail_id is null or trail_name is null then
    raise exception 'Trail ID and name are required';
  end if;
  begin
    trail_lat := (clean_data->>'lat')::double precision;
    trail_lon := (clean_data->>'lon')::double precision;
  exception when others then
    raise exception 'Valid trail coordinates are required';
  end;
  if trail_lat not between -90 and 90 or trail_lon not between -180 and 180 then
    raise exception 'Trail coordinates are outside the valid range';
  end if;

  insert into public.ohio_trails (id, data, updated_at, updated_by)
  values (trail_id, clean_data, now(), (select auth.uid()))
  on conflict (id)
  do update set
    data = excluded.data,
    updated_at = now(),
    updated_by = (select auth.uid());

  return clean_data;
end;
$$;

create or replace function public.admin_set_ohio_trail_status(
  p_trail_id text,
  p_status text
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  updated_data jsonb;
begin
  if not public.is_ohio_trail_admin() then
    raise exception 'Administrator access required';
  end if;
  if p_status not in ('Active', 'Hidden', 'Archived', 'Temporarily closed', 'Seasonally closed', 'Permanently closed') then
    raise exception 'Invalid trail status';
  end if;

  update public.ohio_trails
  set
    data = jsonb_set(data, '{recordStatus}', to_jsonb(p_status), true),
    updated_at = now(),
    updated_by = (select auth.uid())
  where id = p_trail_id
  returning data into updated_data;

  if updated_data is null then
    raise exception 'Unknown trail';
  end if;
  return updated_data;
end;
$$;

revoke all on function public.is_ohio_trail_admin() from public;
revoke all on function public.admin_upsert_ohio_trail(jsonb) from public;
revoke all on function public.admin_set_ohio_trail_status(text, text) from public;

grant execute on function public.is_ohio_trail_admin() to authenticated;
grant execute on function public.admin_upsert_ohio_trail(jsonb) to authenticated;
grant execute on function public.admin_set_ohio_trail_status(text, text) to authenticated;

commit;

-- Installation checks. These return one row each when setup is correct.
select
  'authorized administrator' as check_name,
  user_id
from public.ohio_trail_admins
where user_id = '520178b7-fefc-4970-95b4-8c9c9dda1bd1';

select
  'administrator functions installed' as check_name,
  count(*) as function_count
from pg_proc
where pronamespace = 'public'::regnamespace
  and proname in (
    'is_ohio_trail_admin',
    'admin_upsert_ohio_trail',
    'admin_set_ohio_trail_status'
  );
