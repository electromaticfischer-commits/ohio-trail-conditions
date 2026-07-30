-- V77 shared hourly weather cache.
-- Additive and repeatable. Existing trail, soil, and rider-report data is preserved.

begin;

create extension if not exists pgcrypto with schema extensions;
create extension if not exists pg_cron with schema pg_catalog;
create extension if not exists pg_net with schema extensions;
create extension if not exists supabase_vault with schema vault;

alter table public.trail_weather_snapshots
  add column if not exists result jsonb not null default '{}'::jsonb;

create index if not exists trail_weather_quality_time_idx
  on public.trail_weather_snapshots (data_quality, observed_at desc);

create table if not exists public.weather_refresh_config (
  id boolean primary key default true check (id),
  token_hash text not null,
  updated_at timestamptz not null default now()
);

alter table public.weather_refresh_config enable row level security;
revoke all on public.weather_refresh_config from public, anon, authenticated;

create or replace function public.verify_weather_refresh_token(p_token text)
returns boolean
language sql
stable
security definer
set search_path = public, extensions
as $$
  select exists (
    select 1
    from public.weather_refresh_config
    where id
      and token_hash = encode(digest(coalesce(p_token, ''), 'sha256'), 'hex')
  );
$$;

revoke all on function public.verify_weather_refresh_token(text) from public;
grant execute on function public.verify_weather_refresh_token(text) to service_role;

create or replace function public.get_weather_refresh_trails(p_state text)
returns table(
  id text,
  name text,
  state_code text,
  lat double precision,
  lon double precision,
  weather_lat double precision,
  weather_lon double precision,
  data jsonb,
  previous_observed_at timestamptz,
  previous_quality text,
  previous_result jsonb
)
language sql
stable
security definer
set search_path = public, extensions
as $$
  select
    t.id,
    t.name,
    t.state_code,
    ST_Y(t.location::geometry),
    ST_X(t.location::geometry),
    ST_Y(coalesce(t.weather_location, t.location)::geometry),
    ST_X(coalesce(t.weather_location, t.location)::geometry),
    t.data,
    previous.observed_at,
    previous.data_quality,
    previous.result
  from public.trail_systems t
  left join lateral (
    select s.observed_at, s.data_quality, s.result
    from public.trail_weather_snapshots s
    where s.trail_id = t.id
    order by s.observed_at desc
    limit 1
  ) previous on true
  where t.state_code = upper(p_state)
    and t.record_status not in ('Hidden', 'Archived', 'Permanently closed')
  order by t.id;
$$;

revoke all on function public.get_weather_refresh_trails(text) from public;
grant execute on function public.get_weather_refresh_trails(text) to service_role;

create or replace function public.get_latest_trail_weather(p_trail_ids text[] default null)
returns table(
  trail_id text,
  observed_at timestamptz,
  data_quality text,
  result jsonb
)
language sql
stable
security definer
set search_path = public
as $$
  select distinct on (s.trail_id)
    s.trail_id,
    s.observed_at,
    s.data_quality,
    s.result
  from public.trail_weather_snapshots s
  where p_trail_ids is null or s.trail_id = any(p_trail_ids)
  order by s.trail_id, s.observed_at desc;
$$;

revoke all on function public.get_latest_trail_weather(text[]) from public;
grant execute on function public.get_latest_trail_weather(text[]) to anon, authenticated;

do $$
declare
  refresh_token text;
  project_url text := 'https://woaqvcgrtvypifgxmtoh.supabase.co';
  publishable_key text := 'sb_publishable_qkvJh45ZskcVb_kSQ7dQUA_sAqOBfuU';
begin
  if not exists (select 1 from vault.secrets where name = 'weather_refresh_token') then
    refresh_token := encode(extensions.gen_random_bytes(32), 'hex');
    perform vault.create_secret(refresh_token, 'weather_refresh_token');
  else
    select decrypted_secret into refresh_token
    from vault.decrypted_secrets
    where name = 'weather_refresh_token';
  end if;

  insert into public.weather_refresh_config (id, token_hash, updated_at)
  values (true, encode(extensions.digest(refresh_token, 'sha256'), 'hex'), now())
  on conflict (id) do update set
    token_hash = excluded.token_hash,
    updated_at = excluded.updated_at;

  if not exists (select 1 from vault.secrets where name = 'weather_project_url') then
    perform vault.create_secret(project_url, 'weather_project_url');
  end if;
  if not exists (select 1 from vault.secrets where name = 'weather_publishable_key') then
    perform vault.create_secret(publishable_key, 'weather_publishable_key');
  end if;
end
$$;

select cron.schedule(
  'weather-refresh-oh',
  '6 * * * *',
  $$
  select net.http_post(
    url := (select decrypted_secret from vault.decrypted_secrets where name = 'weather_project_url') || '/functions/v1/weather-refresh',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'apikey', (select decrypted_secret from vault.decrypted_secrets where name = 'weather_publishable_key'),
      'x-weather-refresh-token', (select decrypted_secret from vault.decrypted_secrets where name = 'weather_refresh_token')
    ),
    body := '{"state":"OH"}'::jsonb
  );
  $$
);

select cron.schedule(
  'weather-refresh-wv',
  '8 * * * *',
  $$
  select net.http_post(
    url := (select decrypted_secret from vault.decrypted_secrets where name = 'weather_project_url') || '/functions/v1/weather-refresh',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'apikey', (select decrypted_secret from vault.decrypted_secrets where name = 'weather_publishable_key'),
      'x-weather-refresh-token', (select decrypted_secret from vault.decrypted_secrets where name = 'weather_refresh_token')
    ),
    body := '{"state":"WV"}'::jsonb
  );
  $$
);

select cron.schedule(
  'weather-refresh-in',
  '10 * * * *',
  $$
  select net.http_post(
    url := (select decrypted_secret from vault.decrypted_secrets where name = 'weather_project_url') || '/functions/v1/weather-refresh',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'apikey', (select decrypted_secret from vault.decrypted_secrets where name = 'weather_publishable_key'),
      'x-weather-refresh-token', (select decrypted_secret from vault.decrypted_secrets where name = 'weather_refresh_token')
    ),
    body := '{"state":"IN"}'::jsonb
  );
  $$
);

select cron.schedule(
  'weather-refresh-pa',
  '12 * * * *',
  $$
  select net.http_post(
    url := (select decrypted_secret from vault.decrypted_secrets where name = 'weather_project_url') || '/functions/v1/weather-refresh',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'apikey', (select decrypted_secret from vault.decrypted_secrets where name = 'weather_publishable_key'),
      'x-weather-refresh-token', (select decrypted_secret from vault.decrypted_secrets where name = 'weather_refresh_token')
    ),
    body := '{"state":"PA"}'::jsonb
  );
  $$
);

select cron.schedule(
  'weather-refresh-mi',
  '14 * * * *',
  $$
  select net.http_post(
    url := (select decrypted_secret from vault.decrypted_secrets where name = 'weather_project_url') || '/functions/v1/weather-refresh',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'apikey', (select decrypted_secret from vault.decrypted_secrets where name = 'weather_publishable_key'),
      'x-weather-refresh-token', (select decrypted_secret from vault.decrypted_secrets where name = 'weather_refresh_token')
    ),
    body := '{"state":"MI"}'::jsonb
  );
  $$
);

commit;

select
  (select count(*) from cron.job where jobname like 'weather-refresh-%') as scheduled_state_jobs,
  (select count(*) from public.trail_weather_snapshots) as existing_snapshots,
  (select count(*) from public.weather_refresh_config) as refresh_configuration;
