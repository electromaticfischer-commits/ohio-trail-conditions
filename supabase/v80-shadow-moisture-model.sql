-- V80 shadow moisture model.
-- Additive and repeatable. Public V79 ratings remain unchanged.

begin;

create table if not exists public.trail_storm_events (
  trail_id text not null references public.trail_systems(id) on delete cascade,
  event_started_at timestamptz not null,
  event_ended_at timestamptz not null,
  total_rain numeric not null,
  peak_rain_1h numeric not null default 0,
  source_name text,
  data_quality text not null,
  model_version text not null,
  updated_at timestamptz not null default now(),
  primary key (trail_id, event_started_at),
  constraint valid_storm_event_dates check (event_ended_at >= event_started_at),
  constraint valid_storm_event_rain check (total_rain >= 0 and peak_rain_1h >= 0),
  constraint valid_storm_event_quality check (data_quality in ('trusted', 'fallback', 'uncertain', 'unavailable'))
);

create index if not exists trail_storm_events_recent_idx
  on public.trail_storm_events (trail_id, event_ended_at desc);

create table if not exists public.trail_moisture_states (
  trail_id text primary key references public.trail_systems(id) on delete cascade,
  model_version text not null,
  calculated_at timestamptz not null,
  surface_moisture numeric not null,
  subsurface_saturation numeric not null,
  wetness_score numeric not null,
  rideability numeric not null,
  status jsonb not null,
  ready_at timestamptz,
  confidence text not null,
  details jsonb not null default '{}'::jsonb,
  constraint valid_surface_moisture check (surface_moisture between 0 and 100),
  constraint valid_subsurface_saturation check (subsurface_saturation between 0 and 100),
  constraint valid_shadow_wetness check (wetness_score between 0 and 100),
  constraint valid_shadow_rideability check (rideability between 0 and 100),
  constraint valid_shadow_confidence check (confidence in ('Low', 'Medium', 'Medium-high', 'High'))
);

create index if not exists trail_moisture_states_time_idx
  on public.trail_moisture_states (calculated_at desc);

alter table public.trail_storm_events enable row level security;
alter table public.trail_moisture_states enable row level security;
revoke all on public.trail_storm_events from public, anon, authenticated;
revoke all on public.trail_moisture_states from public, anon, authenticated;
grant all on public.trail_storm_events to service_role;
grant all on public.trail_moisture_states to service_role;

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
    case
      when soil.profile is null then t.data
      else coalesce(t.data, '{}'::jsonb) || jsonb_build_object(
        'soilProfile', coalesce(soil.developer_override, soil.profile)
      )
    end,
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
  left join lateral (
    select p.profile, p.developer_override
    from public.trail_soil_profiles p
    where p.trail_id = t.id
    order by p.geometry_version desc
    limit 1
  ) soil on true
  where t.state_code = upper(p_state)
    and t.record_status not in ('Hidden', 'Archived', 'Permanently closed')
  order by t.id;
$$;

revoke all on function public.get_weather_refresh_trails(text) from public;
grant execute on function public.get_weather_refresh_trails(text) to service_role;

create or replace function public.get_shadow_moisture_comparison(p_state text default null)
returns table(
  trail_id text,
  trail_name text,
  state_code text,
  calculated_at timestamptz,
  model_version text,
  rideability numeric,
  wetness_score numeric,
  surface_moisture numeric,
  subsurface_saturation numeric,
  ready_at timestamptz,
  confidence text,
  details jsonb
)
language sql
stable
security definer
set search_path = public
as $$
  select
    t.id,
    t.name,
    t.state_code,
    m.calculated_at,
    m.model_version,
    m.rideability,
    m.wetness_score,
    m.surface_moisture,
    m.subsurface_saturation,
    m.ready_at,
    m.confidence,
    m.details
  from public.trail_systems t
  join public.trail_moisture_states m on m.trail_id = t.id
  where p_state is null or t.state_code = upper(p_state)
  order by t.state_code, t.name;
$$;

revoke all on function public.get_shadow_moisture_comparison(text) from public, anon;
grant execute on function public.get_shadow_moisture_comparison(text) to authenticated;

-- The expanded 14-day calculation normally takes longer than pg_net's
-- five-second default. Keep the existing hourly schedules, but allow each
-- refresh request to finish and record its real response.
do $$
declare
  item record;
  v_job_id bigint;
  v_command text;
begin
  for item in
    select * from (values
      ('OH', 'weather-refresh-oh'),
      ('WV', 'weather-refresh-wv'),
      ('IN', 'weather-refresh-in'),
      ('PA', 'weather-refresh-pa'),
      ('MI', 'weather-refresh-mi')
    ) as jobs(state_code, job_name)
  loop
    select jobid into v_job_id from cron.job where jobname = item.job_name;
    if v_job_id is not null then
      v_command := format($command$
        select net.http_post(
          url := (select decrypted_secret from vault.decrypted_secrets where name = 'weather_project_url') || '/functions/v1/weather-refresh',
          headers := jsonb_build_object(
            'Content-Type', 'application/json',
            'apikey', (select decrypted_secret from vault.decrypted_secrets where name = 'weather_publishable_key'),
            'x-weather-refresh-token', (select decrypted_secret from vault.decrypted_secrets where name = 'weather_refresh_token')
          ),
          body := jsonb_build_object('state', %L),
          timeout_milliseconds := 120000
        );
      $command$, item.state_code);
      perform cron.alter_job(job_id := v_job_id, command := v_command);
    end if;
  end loop;
end
$$;

commit;

select
  (select count(*) from public.trail_storm_events) as stored_storm_events,
  (select count(*) from public.trail_moisture_states) as shadow_moisture_states;
