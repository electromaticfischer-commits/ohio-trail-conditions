const assert = require('assert');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'js', 'app.js'), 'utf8');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const sql = fs.readFileSync(path.join(root, 'supabase', 'v74-michigan-expansion.sql'), 'utf8');
const trails = JSON.parse(source.match(/^const baseTrails=(.+);$/m)[1]);
const profiles = JSON.parse(source.match(/^const soilProfiles=(.+);$/m)[1]);
const inline = html.match(/<script>([\s\S]*?)<\/script>/)[1].trim();

const michigan = trails.filter(trail => trail.stateCode === 'MI');
assert.strictEqual(michigan.length, 85, 'Current catalog must package 85 verified Michigan systems');
assert.strictEqual(new Set(michigan.map(trail => trail.id)).size, 85, 'Michigan IDs must be unique');
assert(michigan.every(trail => trail.official && trail.organization), 'Michigan source metadata missing');
assert(michigan.every(trail => Number.isFinite(trail.lat) && Number.isFinite(trail.lon)), 'Michigan center missing');
assert(michigan.every(trail => Number.isFinite(trail.weatherLat) && Number.isFinite(trail.weatherLon)), 'Michigan weather center missing');
assert(michigan.every(trail => !Object.hasOwn(trail, 'lengthMiles')), 'Trail mileage must not be published');
assert(michigan.every(trail => profiles[trail.id]), 'Michigan soil profile missing');
assert(michigan.filter(trail => profiles[trail.id].dominantSoil === 'Undetermined').every(trail => profiles[trail.id].confidence === 'Low'), 'Undetermined soil must remain low confidence');
assert(michigan.filter(trail => profiles[trail.id].confidence === 'Low').every(trail => profiles[trail.id].sampleCoverage), 'Low-confidence soil must expose sample coverage');

assert(html.includes('<option value="MI">Michigan</option>'), 'Michigan state filter missing');
assert(html.includes('<span>v78.1</span>'), 'Visible current version missing');
assert(source.includes('p_west:-90.5') && source.includes('p_north:48'), 'Michigan catalog boundary missing');
assert.strictEqual(inline, source.trim(), 'Inline application script does not match js/app.js');
assert(!source.includes('Mapped trail length:'), 'Trail length display returned');
assert((sql.match(/insert into public\.trail_systems/g) || []).length === 38, 'SQL trail count is not 38');
assert((sql.match(/insert into public\.trail_routes/g) || []).length === 0, 'Michigan route geometry must not be deployed');
assert((sql.match(/insert into public\.trail_soil_profiles/g) || []).length === 38, 'SQL soil count is not 38');
assert(!sql.includes('route_miles'), 'SQL must not publish route mileage');

console.log('Michigan V74 expansion tests passed.');
