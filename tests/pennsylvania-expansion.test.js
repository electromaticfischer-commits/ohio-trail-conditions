const assert = require('assert');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'js', 'app.js'), 'utf8');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const sql = fs.readFileSync(path.join(root, 'supabase', 'v73-pennsylvania-expansion.sql'), 'utf8');
const trails = JSON.parse(source.match(/^const baseTrails=(.+);$/m)[1]);
const profiles = JSON.parse(source.match(/^const soilProfiles=(.+);$/m)[1]);
const inline = html.match(/<script>([\s\S]*?)<\/script>/)[1].trim();

const pennsylvania = trails.filter(trail => trail.stateCode === 'PA');
assert.strictEqual(pennsylvania.length, 91, 'Current catalog must package 91 verified Pennsylvania systems');
assert(pennsylvania.every(trail => trail.official && trail.organization), 'Pennsylvania source metadata missing');
assert(pennsylvania.every(trail => Number.isFinite(trail.lat) && Number.isFinite(trail.lon)), 'Pennsylvania center missing');
assert(pennsylvania.every(trail => Number.isFinite(trail.weatherLat) && Number.isFinite(trail.weatherLon)), 'Pennsylvania weather center missing');
assert(pennsylvania.every(trail => !Object.hasOwn(trail, 'lengthMiles')), 'Trail mileage must not be published');
assert(pennsylvania.every(trail => profiles[trail.id]), 'Pennsylvania soil profile missing');
assert(pennsylvania.every(trail => /route|riding-area/.test(profiles[trail.id].samplingMethod)), 'Pennsylvania soil sampling method missing');
assert(pennsylvania.filter(trail => profiles[trail.id].confidence === 'Low').every(trail => profiles[trail.id].sampleCoverage), 'Low-confidence soil must expose sample coverage');

assert(html.includes('<option value="PA">Pennsylvania</option>'), 'Pennsylvania state filter missing');
assert(html.includes('<span>v80.0</span>'), 'Visible current version missing');
assert(source.includes('p_east:-74.5'), 'Pennsylvania catalog boundary missing');
assert.strictEqual(inline, source.trim(), 'Inline application script does not match js/app.js');
assert(!source.includes('Mapped trail length:'), 'Trail length display returned');
assert((sql.match(/insert into public\.trail_systems/g) || []).length === 25, 'SQL trail count is not 25');
assert((sql.match(/insert into public\.trail_routes/g) || []).length === 0, 'Pennsylvania route geometry must not be deployed');
assert((sql.match(/insert into public\.trail_soil_profiles/g) || []).length === 25, 'SQL soil count is not 25');
assert(!sql.includes('route_miles'), 'SQL must not publish route mileage');

console.log('Pennsylvania V73 expansion tests passed.');
