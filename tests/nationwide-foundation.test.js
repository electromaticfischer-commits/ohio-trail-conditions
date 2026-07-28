const assert = require('assert');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const sql = fs.readFileSync(path.join(root, 'supabase/nationwide-foundation.sql'), 'utf8');
const seed = fs.readFileSync(path.join(root, 'supabase/v70-soil-profile-seed.sql'), 'utf8');
const app = fs.readFileSync(path.join(root, 'js/app.js'), 'utf8');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');

for (const table of [
  'trail_systems',
  'trail_routes',
  'trail_soil_profiles',
  'trail_weather_snapshots',
  'trail_reports'
]) {
  assert(sql.includes(`create table if not exists public.${table}`), `${table} is missing`);
}

assert(sql.includes('using gist (location)'), 'trail locations need a spatial index');
assert(sql.includes('using gist (route)'), 'trail routes need a spatial index');
assert(sql.includes('get_trails_in_bounds'), 'bounded trail query is missing');
assert(sql.includes('sync_legacy_trail_to_nationwide'), 'legacy synchronization is missing');
assert(sql.includes('insert into public.trail_reports'), 'report migration is missing');
assert(!/\bdrop table\b/i.test(sql), 'foundation must not drop existing tables');
assert(!/\btruncate\b/i.test(sql), 'foundation must not truncate existing data');

assert(app.includes("supabaseRpc('get_trails_in_bounds'"), 'app does not use the bounded catalog');
assert(app.includes("supabaseRpc('get_ohio_trails')"), 'legacy fallback is missing');
assert(app.indexOf("supabaseRpc('get_trails_in_bounds'") < app.indexOf("supabaseRpc('get_ohio_trails')"), 'nationwide query must be attempted first');
assert(html.includes('id="countryCode"') && html.includes('id="stateCode"'), 'nationwide location fields are missing');
assert(seed.includes("('mountwood', 1"), 'Mountwood soil seed is missing');
assert(seed.includes('"confidence":"Medium"'), 'Mountwood should no longer use the stale Low-confidence profile');
assert(seed.includes('"soilLat":39.243461') && seed.includes('"soilLon":-81.302303'), 'Mountwood soil research coordinates do not match the live trail center');

console.log('Nationwide foundation regression tests passed.');
