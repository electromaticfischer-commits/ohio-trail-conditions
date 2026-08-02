-- V77.6 keeps ordinary community conditions current while allowing
-- slower-to-resolve trail hazards to remain visible longer.
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
  with active_reports as (
    select *
    from public.trail_reports
    where updated_at >= now() - interval '48 hours'
       or (
         'Fallen trees' = any(observations)
         and updated_at >= now() - interval '7 days'
       )
       or (
         'Trail maintenance' = any(observations)
         and updated_at >= now() - interval '14 days'
       )
  ),
  recent_reports as (
    select *
    from public.trail_reports
    where updated_at >= now() - interval '48 hours'
  ),
  totals as (
    select r.trail_id, count(*) total_reports, max(r.updated_at) latest_report_at
    from active_reports r
    group by r.trail_id
  ),
  recommendation_counts as (
    select x.trail_id,
      jsonb_object_agg(x.recommendation, x.count order by x.recommendation) recommendations
    from (
      select r.trail_id, r.recommendation, count(*) count
      from recent_reports r
      where r.recommendation is not null
      group by r.trail_id, r.recommendation
    ) x
    group by x.trail_id
  ),
  observation_events as (
    select r.trail_id, o.observation
    from recent_reports r
    cross join lateral unnest(r.observations) o(observation)
    where o.observation not in ('Fallen trees', 'Trail maintenance')

    union all

    select r.trail_id, 'Fallen trees'
    from public.trail_reports r
    where 'Fallen trees' = any(r.observations)
      and r.updated_at >= now() - interval '7 days'

    union all

    select r.trail_id, 'Trail maintenance'
    from public.trail_reports r
    where 'Trail maintenance' = any(r.observations)
      and r.updated_at >= now() - interval '14 days'
  ),
  observation_counts as (
    select x.trail_id,
      jsonb_object_agg(x.observation, x.count order by x.observation) observations
    from (
      select trail_id, observation, count(*) count
      from observation_events
      group by trail_id, observation
    ) x
    group by x.trail_id
  )
  select
    t.trail_id,
    t.total_reports,
    coalesce(rc.recommendations, '{}'::jsonb),
    coalesce(oc.observations, '{}'::jsonb),
    t.latest_report_at
  from totals t
  left join recommendation_counts rc using (trail_id)
  left join observation_counts oc using (trail_id)
  order by t.trail_id;
$$;

revoke all on function public.get_community_trail_reports() from public;
grant execute on function public.get_community_trail_reports() to anon, authenticated;
