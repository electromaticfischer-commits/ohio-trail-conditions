-- Nationwide trail-data foundation for Ohio Mountain Bike Trail Conditions.
-- Additive and repeatable: existing Ohio records and rider reports are preserved.

begin;

create schema if not exists extensions;
create extension if not exists postgis with schema extensions;

create table if not exists public.trail_systems (
  id text primary key,
  name text not null,
  country_code text not null default 'US',
  state_code text,
  region text,
  listing_type text not null default 'Trail system',
  record_status text not null default 'Active',
  location extensions.geography(Point, 4326) not null,
  weather_location extensions.geography(Point, 4326),
  data jsonb not null default '{}'::jsonb,
  geometry_version integer not null default 1,
  updated_at timestamptz not null default now(),
  updated_by uuid references auth.users(id) on delete set null,
  constraint valid_country_code check (country_code ~ '^[A-Z]{2}$'),
  constraint valid_state_code check (state_code is null or state_code ~ '^[A-Z]{2}$')
);

create index if not exists trail_systems_location_gix
  on public.trail_systems using gist (location);
create index if not exists trail_systems_state_status_idx
  on public.trail_systems (country_code, state_code, record_status);
create index if not exists trail_systems_name_idx
  on public.trail_systems (lower(name));

create table if not exists public.trail_routes (
  id bigint generated always as identity primary key,
  trail_id text not null references public.trail_systems(id) on delete cascade,
  geometry_version integer not null,
  route extensions.geometry(MultiLineString, 4326) not null,
  source_name text not null,
  source_id text,
  source_url text,
  source_license text,
  review_status text not null default 'pending',
  route_miles double precision,
  imported_at timestamptz not null default now(),
  reviewed_at timestamptz,
  reviewed_by uuid references auth.users(id) on delete set null,
  unique (trail_id, geometry_version),
  constraint valid_route_review_status check (
    review_status in ('pending', 'approved', 'rejected', 'superseded')
  )
);

create index if not exists trail_routes_geometry_gix
  on public.trail_routes using gist (route);
create index if not exists trail_routes_trail_review_idx
  on public.trail_routes (trail_id, review_status, geometry_version desc);

create table if not exists public.trail_soil_profiles (
  trail_id text not null references public.trail_systems(id) on delete cascade,
  geometry_version integer not null,
  profile jsonb not null,
  confidence text not null,
  usable_samples integer not null,
  research_location extensions.geography(Point, 4326),
  source_name text not null default 'USDA NRCS SSURGO',
  calculated_at timestamptz not null default now(),
  developer_override jsonb,
  overridden_at timestamptz,
  overridden_by uuid references auth.users(id) on delete set null,
  primary key (trail_id, geometry_version),
  constraint valid_soil_confidence check (
    confidence in ('Low', 'Medium', 'Medium-high', 'High')
  ),
  constraint valid_usable_samples check (usable_samples between 0 and 1000)
);

create index if not exists trail_soil_profiles_latest_idx
  on public.trail_soil_profiles (trail_id, geometry_version desc);

create table if not exists public.trail_weather_snapshots (
  trail_id text not null references public.trail_systems(id) on delete cascade,
  observed_at timestamptz not null,
  rain_12 numeric,
  rain_24 numeric,
  rain_48 numeric,
  rain_72 numeric,
  temperature_f numeric,
  humidity_percent numeric,
  wind_mph numeric,
  source_name text not null,
  source_timestamp timestamptz,
  data_quality text not null,
  diagnostics jsonb not null default '{}'::jsonb,
  primary key (trail_id, observed_at),
  constraint valid_weather_quality check (
    data_quality in ('trusted', 'fallback', 'uncertain', 'unavailable')
  )
);

create index if not exists trail_weather_latest_idx
  on public.trail_weather_snapshots (trail_id, observed_at desc);

create table if not exists public.trail_reports (
  trail_id text not null references public.trail_systems(id) on delete cascade,
  reporter_token uuid not null,
  recommendation text,
  observations text[] not null default '{}',
  updated_at timestamptz not null default now(),
  primary key (trail_id, reporter_token),
  constraint nationwide_valid_recommendation check (
    recommendation is null or recommendation in (
      'Absolutely',
      'Yes — a few wet spots',
      'Rideable — expect mud',
      'I''d wait',
      'Closed'
    )
  ),
  constraint nationwide_valid_observations check (
    observations <@ array[
      'A few puddles',
      'Frequent puddles',
      'Tires picked up mud',
      'Soft sections',
      'Creek crossings high',
      'Fallen trees',
      'Trail maintenance',
      'Dusty',
      'Perfect traction'
    ]::text[]
  ),
  constraint nationwide_report_has_selection check (
    recommendation is not null or cardinality(observations) > 0
  )
);

create index if not exists trail_reports_recent_idx
  on public.trail_reports (updated_at desc, trail_id);

alter table public.trail_systems enable row level security;
alter table public.trail_routes enable row level security;
alter table public.trail_soil_profiles enable row level security;
alter table public.trail_weather_snapshots enable row level security;
alter table public.trail_reports enable row level security;

revoke all on public.trail_systems from anon, authenticated;
revoke all on public.trail_routes from anon, authenticated;
revoke all on public.trail_soil_profiles from anon, authenticated;
revoke all on public.trail_weather_snapshots from anon, authenticated;
revoke all on public.trail_reports from anon, authenticated;

create or replace function public.sync_legacy_trail_to_nationwide()
returns trigger
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  clean_data jsonb := new.data - 'surface' - 'surfaces' - 'drying' - 'drainage';
  trail_lat double precision := (clean_data->>'lat')::double precision;
  trail_lon double precision := (clean_data->>'lon')::double precision;
  weather_lat double precision := coalesce(nullif(clean_data->>'weatherLat', '')::double precision, trail_lat);
  weather_lon double precision := coalesce(nullif(clean_data->>'weatherLon', '')::double precision, trail_lon);
  resolved_state text := upper(coalesce(nullif(clean_data->>'stateCode', ''), case when new.id = 'mountwood' then 'WV' else 'OH' end));
begin
  insert into public.trail_systems (
    id, name, country_code, state_code, region, listing_type, record_status,
    location, weather_location, data, updated_at, updated_by
  ) values (
    new.id,
    clean_data->>'name',
    upper(coalesce(nullif(clean_data->>'countryCode', ''), 'US')),
    resolved_state,
    clean_data->>'region',
    coalesce(nullif(clean_data->>'listingType', ''), 'Trail system'),
    coalesce(nullif(clean_data->>'recordStatus', ''), 'Active'),
    ST_SetSRID(ST_MakePoint(trail_lon, trail_lat), 4326)::geography,
    ST_SetSRID(ST_MakePoint(weather_lon, weather_lat), 4326)::geography,
    clean_data || jsonb_build_object('stateCode', resolved_state, 'countryCode', 'US'),
    new.updated_at,
    new.updated_by
  )
  on conflict (id) do update set
    name = excluded.name,
    country_code = excluded.country_code,
    state_code = excluded.state_code,
    region = excluded.region,
    listing_type = excluded.listing_type,
    record_status = excluded.record_status,
    location = excluded.location,
    weather_location = excluded.weather_location,
    data = excluded.data,
    updated_at = excluded.updated_at,
    updated_by = excluded.updated_by;
  return new;
end;
$$;

drop trigger if exists sync_ohio_trail_to_nationwide on public.ohio_trails;
create trigger sync_ohio_trail_to_nationwide
after insert or update on public.ohio_trails
for each row execute function public.sync_legacy_trail_to_nationwide();

-- Copy all existing live records without changing or deleting the source rows.
update public.ohio_trails set updated_at = updated_at;

insert into public.trail_reports (
  trail_id, reporter_token, recommendation, observations, updated_at
)
select trail_id, reporter_token, recommendation, observations, updated_at
from public.ohio_trail_reports
on conflict (trail_id, reporter_token) do update set
  recommendation = excluded.recommendation,
  observations = excluded.observations,
  updated_at = greatest(public.trail_reports.updated_at, excluded.updated_at);

create or replace function public.get_trails_in_bounds(
  p_west double precision,
  p_south double precision,
  p_east double precision,
  p_north double precision,
  p_state text default null,
  p_limit integer default 500
)
returns table(data jsonb)
language sql
stable
security definer
set search_path = public, extensions
as $$
  select
    t.data ||
    jsonb_build_object(
      'id', t.id,
      'name', t.name,
      'countryCode', t.country_code,
      'stateCode', t.state_code,
      'region', t.region,
      'listingType', t.listing_type,
      'recordStatus', t.record_status,
      'lat', ST_Y(t.location::geometry),
      'lon', ST_X(t.location::geometry),
      'weatherLat', ST_Y(coalesce(t.weather_location, t.location)::geometry),
      'weatherLon', ST_X(coalesce(t.weather_location, t.location)::geometry),
      'geometryVersion', t.geometry_version,
      'soilProfile', coalesce(s.profile, t.data->'soilProfile')
    ) as data
  from public.trail_systems t
  left join lateral (
    select sp.profile
    from public.trail_soil_profiles sp
    where sp.trail_id = t.id
      and sp.geometry_version = t.geometry_version
    limit 1
  ) s on true
  where t.location::geometry && ST_MakeEnvelope(p_west, p_south, p_east, p_north, 4326)
    and (p_state is null or t.state_code = upper(p_state))
    and t.record_status not in ('Hidden', 'Archived', 'Permanently closed')
  order by t.name
  limit least(greatest(coalesce(p_limit, 500), 1), 2000);
$$;

create or replace function public.get_trail_route(p_trail_id text)
returns table(
  trail_id text,
  geometry_version integer,
  geojson jsonb,
  source_name text,
  source_url text,
  source_license text,
  route_miles double precision
)
language sql
stable
security definer
set search_path = public, extensions
as $$
  select
    r.trail_id,
    r.geometry_version,
    ST_AsGeoJSON(r.route, 6)::jsonb,
    r.source_name,
    r.source_url,
    r.source_license,
    r.route_miles
  from public.trail_routes r
  where r.trail_id = p_trail_id
    and r.review_status = 'approved'
  order by r.geometry_version desc
  limit 1;
$$;

create or replace function public.get_my_trail_report(
  p_trail_id text,
  p_reporter_token uuid
)
returns table(
  recommendation text,
  observations text[],
  updated_at timestamptz
)
language sql
stable
security definer
set search_path = public
as $$
  select r.recommendation, r.observations, r.updated_at
  from public.trail_reports r
  where r.trail_id = p_trail_id
    and r.reporter_token = p_reporter_token;
$$;

create or replace function public.save_my_trail_report(
  p_trail_id text,
  p_reporter_token uuid,
  p_recommendation text,
  p_observations text[]
)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  cleaned_observations text[] := coalesce(p_observations, '{}'::text[]);
begin
  if p_reporter_token is null then
    raise exception 'A reporter token is required';
  end if;
  if not exists (select 1 from public.trail_systems where id = p_trail_id) then
    raise exception 'Unknown trail';
  end if;
  if p_recommendation is not null and p_recommendation not in (
    'Absolutely', 'Yes — a few wet spots', 'Rideable — expect mud', 'I''d wait', 'Closed'
  ) then
    raise exception 'Invalid recommendation';
  end if;
  if not cleaned_observations <@ array[
    'A few puddles', 'Frequent puddles', 'Tires picked up mud', 'Soft sections',
    'Creek crossings high', 'Fallen trees', 'Trail maintenance', 'Dusty', 'Perfect traction'
  ]::text[] then
    raise exception 'Invalid observation';
  end if;
  if p_recommendation is null and cardinality(cleaned_observations) = 0 then
    raise exception 'A report must contain at least one selection';
  end if;

  insert into public.trail_reports (
    trail_id, reporter_token, recommendation, observations, updated_at
  ) values (
    p_trail_id, p_reporter_token, p_recommendation, cleaned_observations, now()
  )
  on conflict (trail_id, reporter_token) do update set
    recommendation = excluded.recommendation,
    observations = excluded.observations,
    updated_at = now();

  if exists (select 1 from public.ohio_trails where id = p_trail_id) then
    insert into public.ohio_trail_reports (
      trail_id, reporter_token, recommendation, observations, updated_at
    ) values (
      p_trail_id, p_reporter_token, p_recommendation, cleaned_observations, now()
    )
    on conflict (trail_id, reporter_token) do update set
      recommendation = excluded.recommendation,
      observations = excluded.observations,
      updated_at = now();
  end if;
end;
$$;

create or replace function public.remove_my_trail_report(
  p_trail_id text,
  p_reporter_token uuid
)
returns void
language sql
security definer
set search_path = public
as $$
  delete from public.trail_reports
  where trail_id = p_trail_id
    and reporter_token = p_reporter_token;
  delete from public.ohio_trail_reports
  where trail_id = p_trail_id
    and reporter_token = p_reporter_token;
$$;

create or replace function public.get_community_trail_reports()
returns table(
  trail_id text,
  total_reports bigint,
  recommendations jsonb,
  observations jsonb,
  latest_report_at timestamptz
)
language sql
stable
security definer
set search_path = public
as $$
  with recent as (
    select * from public.trail_reports
    where updated_at >= now() - interval '48 hours'
  ),
  totals as (
    select r.trail_id, count(*) total_reports, max(r.updated_at) latest_report_at
    from recent r group by r.trail_id
  ),
  recommendation_counts as (
    select x.trail_id, jsonb_object_agg(x.recommendation, x.count order by x.recommendation) recommendations
    from (
      select r.trail_id, r.recommendation, count(*) count
      from recent r where r.recommendation is not null
      group by r.trail_id, r.recommendation
    ) x group by x.trail_id
  ),
  observation_counts as (
    select x.trail_id, jsonb_object_agg(x.observation, x.count order by x.observation) observations
    from (
      select r.trail_id, o.observation, count(*) count
      from recent r cross join lateral unnest(r.observations) o(observation)
      group by r.trail_id, o.observation
    ) x group by x.trail_id
  )
  select t.trail_id, t.total_reports,
    coalesce(rc.recommendations, '{}'::jsonb),
    coalesce(oc.observations, '{}'::jsonb),
    t.latest_report_at
  from totals t
  left join recommendation_counts rc using (trail_id)
  left join observation_counts oc using (trail_id)
  order by t.trail_id;
$$;

revoke all on function public.get_trails_in_bounds(double precision, double precision, double precision, double precision, text, integer) from public;
revoke all on function public.get_trail_route(text) from public;
revoke all on function public.get_my_trail_report(text, uuid) from public;
revoke all on function public.save_my_trail_report(text, uuid, text, text[]) from public;
revoke all on function public.remove_my_trail_report(text, uuid) from public;
revoke all on function public.get_community_trail_reports() from public;

grant execute on function public.get_trails_in_bounds(double precision, double precision, double precision, double precision, text, integer) to anon, authenticated;
grant execute on function public.get_trail_route(text) to anon, authenticated;
grant execute on function public.get_my_trail_report(text, uuid) to anon, authenticated;
grant execute on function public.save_my_trail_report(text, uuid, text, text[]) to anon, authenticated;
grant execute on function public.remove_my_trail_report(text, uuid) to anon, authenticated;
grant execute on function public.get_community_trail_reports() to anon, authenticated;

commit;

select
  (select count(*) from public.ohio_trails) as legacy_trails,
  (select count(*) from public.trail_systems) as nationwide_trails,
  (select count(*) from public.ohio_trail_reports) as legacy_reports,
  (select count(*) from public.trail_reports) as nationwide_reports;
