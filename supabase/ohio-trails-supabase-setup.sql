-- Ohio Trail Conditions shared data and rider-report setup
-- Generated from V51 plus ohio-trail-edits.json.
-- Safe to run again: trail records are updated and database objects are replaced idempotently.

begin;

create table if not exists public.ohio_trails (
  id text primary key,
  data jsonb not null,
  updated_at timestamptz not null default now()
);

create table if not exists public.ohio_trail_reports (
  trail_id text not null references public.ohio_trails(id) on delete cascade,
  reporter_token uuid not null,
  recommendation text,
  observations text[] not null default '{}',
  updated_at timestamptz not null default now(),
  primary key (trail_id, reporter_token),
  constraint valid_recommendation check (
    recommendation is null or recommendation in (
      'Absolutely',
      'Yes — a few wet spots',
      'Rideable — expect mud',
      'I''d wait',
      'Closed'
    )
  ),
  constraint valid_observations check (
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
  constraint report_has_selection check (
    recommendation is not null or cardinality(observations) > 0
  )
);

alter table public.ohio_trails enable row level security;
alter table public.ohio_trail_reports enable row level security;

revoke all on public.ohio_trails from anon, authenticated;
revoke all on public.ohio_trail_reports from anon, authenticated;

create or replace function public.get_ohio_trails()
returns table(data jsonb)
language sql
stable
security definer
set search_path = public
as $$
  select t.data
  from public.ohio_trails t
  order by t.data->>'name';
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
  from public.ohio_trail_reports r
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
  if not exists (select 1 from public.ohio_trails where id = p_trail_id) then
    raise exception 'Unknown trail';
  end if;
  if p_recommendation is not null and p_recommendation not in (
    'Absolutely',
    'Yes — a few wet spots',
    'Rideable — expect mud',
    'I''d wait',
    'Closed'
  ) then
    raise exception 'Invalid recommendation';
  end if;
  if not cleaned_observations <@ array[
    'A few puddles',
    'Frequent puddles',
    'Tires picked up mud',
    'Soft sections',
    'Creek crossings high',
    'Fallen trees',
    'Trail maintenance',
    'Dusty',
    'Perfect traction'
  ]::text[] then
    raise exception 'Invalid observation';
  end if;
  if p_recommendation is null and cardinality(cleaned_observations) = 0 then
    raise exception 'A report must contain at least one selection';
  end if;

  insert into public.ohio_trail_reports (
    trail_id, reporter_token, recommendation, observations, updated_at
  ) values (
    p_trail_id, p_reporter_token, p_recommendation, cleaned_observations, now()
  )
  on conflict (trail_id, reporter_token)
  do update set
    recommendation = excluded.recommendation,
    observations = excluded.observations,
    updated_at = now();
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
    select *
    from public.ohio_trail_reports
    where updated_at >= now() - interval '48 hours'
  ),
  totals as (
    select r.trail_id, count(*) total_reports, max(r.updated_at) latest_report_at
    from recent r
    group by r.trail_id
  ),
  recommendation_counts as (
    select x.trail_id, jsonb_object_agg(x.recommendation, x.count order by x.recommendation) recommendations
    from (
      select r.trail_id, r.recommendation, count(*) count
      from recent r
      where r.recommendation is not null
      group by r.trail_id, r.recommendation
    ) x
    group by x.trail_id
  ),
  observation_counts as (
    select x.trail_id, jsonb_object_agg(x.observation, x.count order by x.observation) observations
    from (
      select r.trail_id, o.observation, count(*) count
      from recent r
      cross join lateral unnest(r.observations) o(observation)
      group by r.trail_id, o.observation
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

revoke all on function public.get_ohio_trails() from public;
revoke all on function public.get_my_trail_report(text, uuid) from public;
revoke all on function public.save_my_trail_report(text, uuid, text, text[]) from public;
revoke all on function public.remove_my_trail_report(text, uuid) from public;
revoke all on function public.get_community_trail_reports() from public;

grant execute on function public.get_ohio_trails() to anon, authenticated;
grant execute on function public.get_my_trail_report(text, uuid) to anon, authenticated;
grant execute on function public.save_my_trail_report(text, uuid, text, text[]) to anon, authenticated;
grant execute on function public.remove_my_trail_report(text, uuid) to anon, authenticated;
grant execute on function public.get_community_trail_reports() to anon, authenticated;

insert into public.ohio_trails (id, data)
values
  ('a-w-marion-mrwzgndf', '{"id":"a-w-marion-mrwzgndf","name":"A.W.Marion","aliases":"","listingType":"Trail system","region":"Central Ohio","lat":39.633553,"lon":-82.884343,"weatherLat":39.631067,"weatherLon":-82.875051,"organization":"","recordStatus":"Active","official":"","mtbProject":"","trailforksUrl":"","sensitivity":1.15,"drying":0.85,"canopy":0.82,"drainage":"Poor","surfaces":["Clay-heavy natural soil","Silty soil","Rocky natural surface"],"note":"","dateVerified":"2026-07-23"}'::jsonb),
  ('alum-p1', '{"id":"alum-p1","name":"Alum Creek Phase 1","region":"Central Ohio","lat":40.199428,"lon":-82.937965,"sensitivity":1.3,"drying":0.85,"canopy":0.82,"drainage":"Poor","official":"https://www.combomtb.com/trail-conditions","note":"Rain-sensitive clay and high traffic can keep this trail soft.","mtbProject":"https://www.mtbproject.com/search?q=Alum%20Creek%20Phase%201","aliases":"","listingType":"Trail system","weatherLat":40.202308,"weatherLon":-82.937794,"organization":"","recordStatus":"Active","trailforksUrl":"","surfaces":["Clay-heavy natural soil"],"dateVerified":"2026-07-23"}'::jsonb),
  ('alum-p2', '{"id":"alum-p2","name":"Alum Creek Phase 2","region":"Central Ohio","lat":40.240322,"lon":-82.962742,"sensitivity":1,"drying":1,"canopy":0.82,"drainage":"Good","official":"https://www.combomtb.com/trail-conditions","note":"Natural-surface singletrack that can remain wet after storms.","mtbProject":"https://www.mtbproject.com/search?q=Alum%20Creek%20Phase%202","aliases":"","listingType":"Trail system","weatherLat":40.244672,"weatherLon":-82.956476,"organization":"","recordStatus":"Active","trailforksUrl":"","surfaces":["Clay-heavy natural soil"],"dateVerified":"2026-07-25"}'::jsonb),
  ('baileys', '{"id":"baileys","name":"Baileys Trail System","region":"Southeast Ohio","lat":39.3987,"lon":-82.1307,"sensitivity":0.75,"drying":1.15,"canopy":0.82,"drainage":"Good","official":"https://baileystrailsystem.org/trail-conditions/","note":"Purpose-built surfaces generally recover faster than legacy clay trails.","mtbProject":"https://www.mtbproject.com/search?q=Baileys%20Trail%20System","aliases":"","listingType":"Trail system","weatherLat":39.427997,"weatherLon":-82.149525,"organization":"","recordStatus":"Active","trailforksUrl":"","surfaces":["Clay-heavy natural soil"],"dateVerified":"2026-07-23"}'::jsonb),
  ('bedford', '{"id":"bedford","name":"Bedford Singletrack","region":"Northeast Ohio","lat":41.3655,"lon":-81.5745,"sensitivity":1.04,"drying":0.95,"canopy":0.84,"drainage":"Medium","official":"https://www.clevelandmetroparks.com/parks/visit/activities/mountain-biking/trail-status","note":"Purpose-built Cleveland Metroparks singletrack with official status reporting.","mtbProject":"https://www.mtbproject.com/search?q=Bedford%20Singletrack"}'::jsonb),
  ('caesar', '{"id":"caesar","name":"Caesar Creek State Park","region":"Southwest Ohio","lat":39.522844,"lon":-83.977447,"sensitivity":1.15,"drying":0.85,"canopy":0.82,"drainage":"Poor","official":"https://www.mvmba.bike/trails","note":"Mixed-use natural trails can retain moisture after substantial rain.","mtbProject":"https://www.mtbproject.com/search?q=Caesar%20Creek%20State%20Park","aliases":"","listingType":"Trail system","weatherLat":39.513336,"weatherLon":-83.978806,"organization":"","recordStatus":"Active","trailforksUrl":"","surfaces":["Clay-heavy natural soil"],"dateVerified":"2026-07-23"}'::jsonb),
  ('chestnut', '{"id":"chestnut","name":"Chestnut Ridge Metro Park","region":"Central Ohio","lat":39.80947,"lon":-82.770717,"sensitivity":1.15,"drying":0.85,"canopy":0.82,"drainage":"Poor","official":"https://www.combomtb.com/trail-conditions","note":"Clay-rich sections may stay soft after nearby pavement has dried.","mtbProject":"https://www.mtbproject.com/search?q=Chestnut%20Ridge%20Metro%20Park","aliases":"","listingType":"Trail system","weatherLat":39.806839,"weatherLon":-82.76526,"organization":"","recordStatus":"Active","trailforksUrl":"","surfaces":["Clay-heavy natural soil"],"dateVerified":"2026-07-23"}'::jsonb),
  ('dillon', '{"id":"dillon","name":"Dillon State Park","region":"East-Central Ohio","lat":40.018202,"lon":-82.11623,"sensitivity":1,"drying":1,"canopy":0.82,"drainage":"Average","official":"https://ohiodnr.gov/go-and-do/plan-a-visit/find-a-property/dillon-state-park","note":"Rolling wooded trail network with moisture-prone low areas.","mtbProject":"https://www.mtbproject.com/search?q=Dillon%20State%20Park","aliases":"","listingType":"Trail system","weatherLat":40.008827,"weatherLon":-82.106838,"organization":"","recordStatus":"Active","trailforksUrl":"","surfaces":["Clay-heavy natural soil","Silty soil","Rocky natural surface"],"dateVerified":"2026-07-24"}'::jsonb),
  ('east-fork', '{"id":"east-fork","name":"East Fork State Park","region":"Cincinnati Area","lat":39.0172,"lon":-84.1302,"sensitivity":1.15,"drying":0.84,"canopy":0.86,"drainage":"Slow","official":"https://coramtb.org/","note":"Clay-heavy soils are often slow to recover after precipitation.","mtbProject":"https://www.mtbproject.com/search?q=East%20Fork%20State%20Park"}'::jsonb),
  ('east-rim', '{"id":"east-rim","name":"East Rim Trail","region":"Northeast Ohio","lat":41.2448,"lon":-81.5486,"sensitivity":0.96,"drying":1.05,"canopy":0.8,"drainage":"Medium-fast","official":"https://www.clevelandmetroparks.com/parks/visit/activities/mountain-biking/trail-status","note":"Purpose-built trail with managed closures and relatively good drainage.","mtbProject":"https://www.mtbproject.com/search?q=East%20Rim%20Trail"}'::jsonb),
  ('findley', '{"id":"findley","name":"Findley State Park","region":"North-Central Ohio","lat":41.1286,"lon":-82.2181,"sensitivity":1.05,"drying":0.93,"canopy":0.84,"drainage":"Medium","official":"https://ohiodnr.gov/go-and-do/plan-a-visit/find-a-property/findley-state-park","note":"Wooded state-park loops with mixed soil and drainage.","mtbProject":"https://www.mtbproject.com/search?q=Findley%20State%20Park"}'::jsonb),
  ('germantown', '{"id":"germantown","name":"Germantown MetroPark","region":"Dayton Area","lat":39.637,"lon":-84.397,"sensitivity":1.1,"drying":0.88,"canopy":0.88,"drainage":"Medium-slow","official":"https://www.mvmba.bike/trails","note":"Wooded natural-surface trail with slower drying in low areas.","mtbProject":"https://www.mtbproject.com/search?q=Germantown%20MetroPark"}'::jsonb),
  ('great-seal', '{"id":"great-seal","name":"Great Seal State Park","region":"South-Central Ohio","lat":39.366972,"lon":-82.938026,"sensitivity":1,"drying":1,"canopy":0.82,"drainage":"Average","official":"https://www.combomtb.com/trail-conditions","note":"Slopes drain faster than low areas, so conditions vary by section.","mtbProject":"https://www.mtbproject.com/search?q=Great%20Seal%20State%20Park","aliases":"","listingType":"Trail system","weatherLat":39.377947,"weatherLon":-82.931442,"organization":"","recordStatus":"Active","trailforksUrl":"","surfaces":["Clay-heavy natural soil","Silty soil","Rocky natural surface"],"dateVerified":"2026-07-23"}'::jsonb),
  ('hampton', '{"id":"hampton","name":"Hampton Hills","region":"Northeast Ohio","lat":41.1458,"lon":-81.605,"sensitivity":1.08,"drying":0.92,"canopy":0.86,"drainage":"Medium-slow","official":"https://www.camba.us/","note":"Wooded rolling terrain with locally wet lower sections.","mtbProject":"https://www.mtbproject.com/search?q=Hampton%20Hills"}'::jsonb),
  ('harbin', '{"id":"harbin","name":"Harbin Park","region":"Cincinnati Area","lat":39.318757,"lon":-84.574517,"sensitivity":1,"drying":1,"canopy":0.82,"drainage":"Average","official":"https://coramtb.org/","note":"Shorter urban trail system with mixed exposure and drainage.","mtbProject":"https://www.mtbproject.com/search?q=Harbin%20Park","aliases":"","listingType":"Trail system","weatherLat":39.319637,"weatherLon":-84.574585,"organization":"","recordStatus":"Active","trailforksUrl":"","surfaces":[],"dateVerified":"2026-07-23"}'::jsonb),
  ('horns-hill', '{"id":"horns-hill","name":"Horns Hill Bike Park","region":"Central Ohio","lat":40.1008,"lon":-82.3921,"sensitivity":0.82,"drying":1.14,"canopy":0.7,"drainage":"Fast","official":"https://www.hornshillbikepark.com/","note":"Gravity-oriented purpose-built trails; operator status should control.","mtbProject":"https://www.mtbproject.com/search?q=Horns%20Hill%20Bike%20Park"}'::jsonb),
  ('huston', '{"id":"huston","name":"Hueston Woods State Park","region":"Southwest Ohio","lat":39.590998,"lon":-84.766953,"sensitivity":1.15,"drying":0.85,"canopy":0.95,"drainage":"Poor","official":"https://coramtb.org/","note":"Heavily wooded natural trail with prolonged dampness after storms.","mtbProject":"https://www.mtbproject.com/search?q=Hueston%20Woods%20State%20Park","aliases":"","listingType":"Trail system","weatherLat":39.592562,"weatherLon":-84.759121,"organization":"","recordStatus":"Active","trailforksUrl":"","surfaces":["Clay-heavy natural soil"],"dateVerified":"2026-07-23"}'::jsonb),
  ('jermain', '{"id":"jermain","name":"Jermain Park MTB Trail","region":"Northwest Ohio","lat":41.678,"lon":-83.593,"sensitivity":1.02,"drying":0.96,"canopy":0.72,"drainage":"Medium","official":"https://metroparkstoledo.com/","note":"Urban singletrack with mixed exposure and compact soils.","mtbProject":"https://www.mtbproject.com/search?q=Jermain%20Park%20MTB%20Trail"}'::jsonb),
  ('john-bryan', '{"id":"john-bryan","name":"John Bryan State Park","region":"Southwest Ohio","lat":39.789928,"lon":-83.859497,"sensitivity":1.15,"drying":0.85,"canopy":0.95,"drainage":"Poor","official":"https://www.mvmba.bike/trails","note":"Shaded natural surface can remain damp well after rain ends.","mtbProject":"https://www.mtbproject.com/search?q=John%20Bryan%20State%20Park","aliases":"","listingType":"Trail system","weatherLat":39.792211,"weatherLon":-83.858314,"organization":"","recordStatus":"Active","trailforksUrl":"","surfaces":["Clay-heavy natural soil"],"dateVerified":"2026-07-23"}'::jsonb),
  ('lake-hope', '{"id":"lake-hope","name":"Lake Hope State Park","region":"Southeast Ohio","lat":39.320096,"lon":-82.357088,"sensitivity":1,"drying":1,"canopy":0.95,"drainage":"Average","official":"https://ohiodnr.gov/go-and-do/plan-a-visit/find-a-property/lake-hope-state-park","note":"Large forested network where conditions can vary greatly by ridge and hollow.","mtbProject":"https://www.mtbproject.com/search?q=Lake%20Hope%20State%20Park","aliases":"","listingType":"Trail system","weatherLat":39.343439,"weatherLon":-82.350082,"organization":"","recordStatus":"Active","trailforksUrl":"","surfaces":[],"dateVerified":"2026-07-23"}'::jsonb),
  ('lake-vesuvius', '{"id":"lake-vesuvius","name":"Lake Vesuvius Recreation Area","region":"Southern Ohio","lat":38.6,"lon":-82.631,"sensitivity":1.02,"drying":0.98,"canopy":0.9,"drainage":"Variable","official":"https://www.fs.usda.gov/recarea/wayne/recarea/?recid=6226","note":"Remote forest trails with limited real-time status information.","mtbProject":"https://www.mtbproject.com/search?q=Lake%20Vesuvius%20Recreation%20Area"}'::jsonb),
  ('mikes', '{"id":"mikes","name":"Mike''s Bike Park","region":"Dayton Area","lat":39.7918,"lon":-84.1945,"sensitivity":0.35,"drying":1.35,"canopy":0.35,"drainage":"All-weather","official":"https://www.mvmba.bike/trails","note":"An urban bike facility that is much less rain-sensitive than woodland singletrack.","mtbProject":"https://www.mtbproject.com/search?q=Mike''s%20Bike%20Park"}'::jsonb),
  ('mitchell', '{"id":"mitchell","name":"Mitchell Memorial Forest","region":"Cincinnati Area","lat":39.190549,"lon":-84.719653,"sensitivity":1.15,"drying":0.85,"canopy":0.82,"drainage":"Poor","official":"https://coramtb.org/","note":"Wooded trail conditions depend strongly on recent rain and humidity.","mtbProject":"https://www.mtbproject.com/search?q=Mitchell%20Memorial%20Forest","aliases":"","listingType":"Trail system","weatherLat":39.184896,"weatherLon":-84.722543,"organization":"","recordStatus":"Active","trailforksUrl":"","surfaces":[],"dateVerified":"2026-07-23"}'::jsonb),
  ('mohican', '{"id":"mohican","name":"Mohican MTB Trail","region":"North-Central Ohio","lat":40.607385,"lon":-82.258101,"sensitivity":1,"drying":1,"canopy":0.95,"drainage":"Average","official":"https://www.ridemohican.com/","note":"A long route with substantial local variation in surface conditions.","mtbProject":"https://www.mtbproject.com/search?q=Mohican%20MTB%20Trail","aliases":"","listingType":"Trail system","weatherLat":40.611892,"weatherLon":-82.300644,"organization":"","recordStatus":"Active","trailforksUrl":"","surfaces":["Clay-heavy natural soil","Silty soil","Rocky natural surface"],"dateVerified":"2026-07-23"}'::jsonb),
  ('momba', '{"id":"momba","name":"MoMBA / Huffman MetroPark","region":"Dayton Area","lat":39.814142,"lon":-84.094791,"sensitivity":1,"drying":1,"canopy":0.82,"drainage":"Average","official":"https://www.mvmba.bike/trails","note":"Purpose-built loops with mixed soils and variable shade.","mtbProject":"https://www.mtbproject.com/search?q=MoMBA%20/%20Huffman%20MetroPark","aliases":"","listingType":"Trail system","weatherLat":39.810355,"weatherLon":-84.092317,"organization":"","recordStatus":"Active","trailforksUrl":"","surfaces":["Clay-heavy natural soil","Sandy soil","Rocky natural surface"],"dateVerified":"2026-07-23"}'::jsonb),
  ('mount-airy', '{"id":"mount-airy","name":"Mount Airy Forest","region":"Cincinnati Area","lat":39.177,"lon":-84.567,"sensitivity":1.1,"drying":0.88,"canopy":0.88,"drainage":"Medium-slow","official":"https://coramtb.org/","note":"Urban forest singletrack with shaded, moisture-retaining sections.","mtbProject":"https://www.mtbproject.com/search?q=Mount%20Airy%20Forest"}'::jsonb),
  ('mountwood', '{"id":"mountwood","name":"Mountwood Park","region":"Ohio Valley / WV Border","lat":39.2017,"lon":-81.4225,"sensitivity":0.98,"drying":1.02,"canopy":0.86,"drainage":"Medium","official":"https://www.mountwoodpark.org/","note":"Included as a common Ohio-rider destination just across the state line.","mtbProject":"https://www.mtbproject.com/search?q=Mountwood%20Park"}'::jsonb),
  ('oak-openings', '{"id":"oak-openings","name":"Oak Openings Preserve","region":"Northwest Ohio","lat":41.554,"lon":-83.846,"sensitivity":0.92,"drying":1.08,"canopy":0.66,"drainage":"Medium-fast","official":"https://metroparkstoledo.com/","note":"Sandy soils and open exposure can allow relatively quick drying.","mtbProject":"https://www.mtbproject.com/search?q=Oak%20Openings%20Preserve"}'::jsonb),
  ('quail-hollow', '{"id":"quail-hollow","name":"Quail Hollow Park","region":"Northeast Ohio","lat":40.9896,"lon":-81.306,"sensitivity":1.1,"drying":0.88,"canopy":0.88,"drainage":"Medium-slow","official":"https://www.camba.us/","note":"Shaded natural trails may dry slowly in humid conditions.","mtbProject":"https://www.mtbproject.com/search?q=Quail%20Hollow%20Park"}'::jsonb),
  ('reagan', '{"id":"reagan","name":"Reagan Park","region":"Northeast Ohio","lat":41.1446,"lon":-81.8451,"sensitivity":1.03,"drying":0.96,"canopy":0.78,"drainage":"Medium","official":"https://www.camba.us/","note":"Compact trail system with variable drainage by loop.","mtbProject":"https://www.mtbproject.com/search?q=Reagan%20Park"}'::jsonb),
  ('royalview', '{"id":"royalview","name":"Royalview Trail","region":"Northeast Ohio","lat":41.3146,"lon":-81.8128,"sensitivity":1,"drying":1,"canopy":0.8,"drainage":"Medium","official":"https://www.clevelandmetroparks.com/parks/visit/activities/mountain-biking/trail-status","note":"Designed singletrack that generally drains better than older trails.","mtbProject":"https://www.mtbproject.com/search?q=Royalview%20Trail"}'::jsonb),
  ('scioto', '{"id":"scioto","name":"Scioto Trail State Park","region":"South-Central Ohio","lat":39.228,"lon":-82.951,"sensitivity":1,"drying":1,"canopy":0.88,"drainage":"Variable","official":"https://ohiodnr.gov/go-and-do/plan-a-visit/find-a-property/scioto-trail-state-park","note":"Backcountry-style terrain with variable surfaces and limited condition reporting.","mtbProject":"https://www.mtbproject.com/search?q=Scioto%20Trail%20State%20Park"}'::jsonb),
  ('sells', '{"id":"sells","name":"Sells Park / Athens Trail Network","region":"Southeast Ohio","lat":39.3297,"lon":-82.082,"sensitivity":0.98,"drying":1.04,"canopy":0.82,"drainage":"Medium-fast","official":"https://www.athensbicycleclub.org/","note":"Extensive connected network with varied construction and exposure.","mtbProject":"https://www.mtbproject.com/search?q=Sells%20Park%20/%20Athens%20Trail%20Network"}'::jsonb),
  ('starhill-mrwzkfre', '{"id":"starhill-mrwzkfre","name":"Starhill","aliases":"","listingType":"Trail system","region":"Central Ohio","lat":40.023718,"lon":-82.438574,"weatherLat":40.026378,"weatherLon":-82.42012,"organization":"","recordStatus":"Active","official":"","mtbProject":"","trailforksUrl":"","sensitivity":0.9,"drying":1.15,"canopy":0.82,"drainage":"Excellent","surfaces":["Clay-heavy natural soil","Silty soil","Rocky natural surface"],"note":"","dateVerified":"2026-07-23"}'::jsonb),
  ('strouds', '{"id":"strouds","name":"Strouds Run State Park","region":"Southeast Ohio","lat":39.334,"lon":-82.017,"sensitivity":1,"drying":1,"canopy":0.82,"drainage":"Average","official":"https://www.athensbicycleclub.org/","note":"Ridge and hollow terrain creates substantial variation in drying.","mtbProject":"https://www.mtbproject.com/search?q=Strouds%20Run%20State%20Park","aliases":"","listingType":"Trail system","weatherLat":39.348793,"weatherLon":-82.031651,"organization":"","recordStatus":"Active","trailforksUrl":"","surfaces":[],"dateVerified":"2026-07-23"}'::jsonb),
  ('the-wilds-mrx0vsah', '{"id":"the-wilds-mrx0vsah","name":"The Wilds","aliases":"","listingType":"Trail system","region":"Central Ohio","lat":39.877643,"lon":-81.74033,"weatherLat":39.875532,"weatherLon":-81.725492,"organization":"","recordStatus":"Active","official":"","mtbProject":"","trailforksUrl":"","sensitivity":1,"drying":1,"canopy":0.82,"drainage":"Average","surfaces":[],"note":"","dateVerified":"2026-07-23"}'::jsonb),
  ('van-buren', '{"id":"van-buren","name":"Van Buren State Park","region":"Northwest Ohio","lat":41.132,"lon":-83.65,"sensitivity":1.08,"drying":0.9,"canopy":0.82,"drainage":"Medium-slow","official":"https://ohiodnr.gov/go-and-do/plan-a-visit/find-a-property/van-buren-state-park","note":"Flat terrain can dry slowly after widespread rain.","mtbProject":"https://www.mtbproject.com/search?q=Van%20Buren%20State%20Park"}'::jsonb),
  ('vultures', '{"id":"vultures","name":"Vulture''s Knob","region":"Northeast Ohio","lat":40.9215,"lon":-81.9386,"sensitivity":0.96,"drying":1.04,"canopy":0.78,"drainage":"Medium-fast","official":"https://www.vulturesknobmtb.com/","note":"Privately managed trail system; check operator status before traveling.","mtbProject":"https://www.mtbproject.com/search?q=Vulture''s%20Knob"}'::jsonb),
  ('west-branch', '{"id":"west-branch","name":"West Branch State Park","region":"Northeast Ohio","lat":41.145,"lon":-81.105,"sensitivity":1.08,"drying":0.91,"canopy":0.86,"drainage":"Medium-slow","official":"https://www.camba.us/","note":"Wooded lakeside terrain can remain saturated after prolonged rainfall.","mtbProject":"https://www.mtbproject.com/search?q=West%20Branch%20State%20Park"}'::jsonb)
on conflict (id)
do update set data = excluded.data, updated_at = now();

-- Soil texture, natural drainage, and drying factors are researched and
-- packaged with V67. Remove the earlier manually guessed fields while keeping
-- every other catalog edit intact.
update public.ohio_trails
set data = data - 'surface' - 'surfaces' - 'drying' - 'drainage'
where
  data ? 'surface'
  or data ? 'surfaces'
  or data ? 'drying'
  or data ? 'drainage';

commit;
