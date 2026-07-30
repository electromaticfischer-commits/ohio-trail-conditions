const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'js', 'app.js'), 'utf8');
const context = {};
vm.createContext(context);
vm.runInContext(`${source.split('\n')[0]};globalThis.trails=baseTrails`, context);

const ids = new Set([
  'in-creekside-trails',
  'mi-addison-oaks',
  'mi-glacial-hills',
  'mi-marquette-ntn-south',
  'oh-camp-tuscazoar',
  'oh-forry-star-hill',
  'oh-lake-milton',
  'oh-tar-hollow',
  'oh-troy-mtb',
  'pa-bald-eagle-state-forest',
  'pa-michaux-state-forest',
  'pa-rothrock-state-forest',
  'wv-arrowhead',
  'wv-barboursville',
  'wv-big-bear'
]);
const trails = context.trails.filter(trail => ids.has(trail.id));
if (trails.length !== ids.size) throw new Error(`Expected ${ids.size} packaged trails, found ${trails.length}`);
const literal = value => `'${String(value ?? '').replaceAll("'", "''")}'`;
const rows = trails.map(trail => `(
  ${literal(trail.id)}, ${literal(trail.name)}, ${literal(trail.countryCode || 'US')},
  ${literal(trail.stateCode || 'OH')}, ${literal(trail.region)}, ${literal(trail.listingType || 'Trail system')}, 'Active',
  ST_SetSRID(ST_MakePoint(${Number(trail.lon)}, ${Number(trail.lat)}), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(${Number(trail.weatherLon ?? trail.lon)}, ${Number(trail.weatherLat ?? trail.lat)}), 4326)::extensions.geography,
  ${literal(JSON.stringify({...trail, recordStatus: 'Active'}))}::jsonb,
  ${Number(trail.geometryVersion) || 1}
)`).join(',\n');

const sql = `-- V77 syncs verified packaged trails that were absent from the shared catalog.
-- Existing records and community reports are preserved.
begin;
insert into public.trail_systems
  (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values
${rows}
on conflict (id) do update set
  name=excluded.name,
  country_code=excluded.country_code,
  state_code=excluded.state_code,
  region=excluded.region,
  listing_type=excluded.listing_type,
  record_status=excluded.record_status,
  location=excluded.location,
  weather_location=excluded.weather_location,
  data=excluded.data,
  geometry_version=excluded.geometry_version,
  updated_at=now();
commit;
select state_code, count(*) from public.trail_systems
where record_status not in ('Hidden','Archived','Permanently closed')
group by state_code order by state_code;
`;
fs.writeFileSync(path.join(root, 'supabase', 'v77-packaged-catalog-sync.sql'), sql);
console.log(`Generated shared-catalog upserts for ${trails.length} verified packaged trails.`);
