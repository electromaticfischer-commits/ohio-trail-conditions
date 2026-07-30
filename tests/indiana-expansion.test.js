const assert = require('assert');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'js', 'app.js'), 'utf8');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const sql = fs.readFileSync(path.join(root, 'supabase', 'v72-indiana-expansion.sql'), 'utf8');
const trails = JSON.parse(source.match(/^const baseTrails=(.+);$/m)[1]);
const profiles = JSON.parse(source.match(/^const soilProfiles=(.+);$/m)[1]);
const inline = html.match(/<script>([\s\S]*?)<\/script>/)[1].trim();

const indiana = trails.filter(trail => trail.stateCode === 'IN');
assert.strictEqual(indiana.length, 40, 'Current catalog must package 40 verified Indiana systems');
assert(indiana.every(trail => trail.official && trail.organization), 'Indiana source metadata missing');
assert(indiana.every(trail => Number.isFinite(trail.lat) && Number.isFinite(trail.lon)), 'Indiana center missing');
assert(indiana.every(trail => Number.isFinite(trail.weatherLat) && Number.isFinite(trail.weatherLon)), 'Indiana weather center missing');
assert(indiana.every(trail => !Object.hasOwn(trail, 'lengthMiles')), 'Trail mileage must not be published');
assert(indiana.every(trail => profiles[trail.id]), 'Indiana soil profile missing');
assert(indiana.every(trail => /route|riding-area/.test(profiles[trail.id].samplingMethod)), 'Indiana soil sampling method missing');
assert(indiana.filter(trail => profiles[trail.id].confidence === 'Low').every(trail => profiles[trail.id].sampleCoverage), 'Low-confidence soil must expose sample coverage');

assert(html.includes('<option value="IN">Indiana</option>'), 'Indiana state filter missing');
assert(html.includes('<span>v76.1</span>'), 'Visible current version missing');
assert(source.includes('p_west:-90.5'), 'Current five-state catalog boundary missing');
assert.strictEqual(inline, source.trim(), 'Inline application script does not match js/app.js');
assert(!source.includes('Mapped trail length:'), 'Trail length display returned');
assert((sql.match(/insert into public\.trail_systems/g) || []).length === 25, 'SQL trail count is not 25');
assert((sql.match(/insert into public\.trail_routes/g) || []).length === 0, 'Indiana route geometry must not be deployed');
assert((sql.match(/insert into public\.trail_soil_profiles/g) || []).length === 25, 'SQL soil count is not 25');
assert(!sql.includes('route_miles'), 'SQL must not publish route mileage');

console.log('Indiana V72 expansion tests passed.');
