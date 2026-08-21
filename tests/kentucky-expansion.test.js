const assert = require('assert');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'js', 'app.js'), 'utf8');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const worker = fs.readFileSync(path.join(root, 'supabase', 'functions', 'weather-refresh', 'index.ts'), 'utf8');
const sql = fs.readFileSync(path.join(root, 'supabase', 'v81-kentucky-expansion.sql'), 'utf8');
const catalog = JSON.parse(fs.readFileSync(path.join(root, 'data', 'v81-kentucky-catalog.json'), 'utf8'));
const trails = JSON.parse(source.match(/^const baseTrails=(.+);$/m)[1]);
const profiles = JSON.parse(source.match(/^const soilProfiles=(.+);$/m)[1]);
const inline = html.match(/<script>([\s\S]*?)<\/script>/)[1].trim();
const kentucky = trails.filter(trail => trail.stateCode === 'KY');

assert.strictEqual(trails.length, 335, 'V81 must contain 335 packaged riding systems');
assert.strictEqual(kentucky.length, 36, 'Kentucky must contain 36 network-level riding systems');
assert.strictEqual(catalog.count, 36, 'Kentucky catalog audit count is incorrect');
assert.strictEqual(new Set(kentucky.map(trail => trail.id)).size, 36, 'Kentucky IDs must be unique');
assert(kentucky.every(trail => trail.official && trail.organization && trail.routeSource?.url), 'Kentucky source metadata missing');
assert(kentucky.every(trail => Number.isFinite(trail.lat) && Number.isFinite(trail.lon)), 'Kentucky center missing');
assert(kentucky.every(trail => trail.lat >= 36.3 && trail.lat <= 39.2 && trail.lon >= -89.7 && trail.lon <= -81.8), 'Kentucky center outside expected bounds');
assert(kentucky.every(trail => profiles[trail.id] && trail.soilProfile), 'Kentucky soil profile missing');
assert(kentucky.every(trail => /^\d+\/17$/.test(profiles[trail.id].sampleCoverage)), 'Kentucky soil coverage missing');
assert(!kentucky.some(trail => Object.hasOwn(trail, 'lengthMiles')), 'Trail mileage must not be published');
assert(kentucky.some(trail => trail.id === 'ky-cherokee-seneca'), 'Combined Cherokee / Seneca system missing');
assert.strictEqual(kentucky.filter(trail => /Cherokee|Seneca/.test(trail.name)).length, 1, 'Cherokee and Seneca must not be duplicated');
assert(kentucky.some(trail => trail.id === 'ky-rudy-mine-ben-hawes'), 'Rudy Mine / Ben Hawes system missing');

assert(html.includes('<option value="KY">Kentucky</option>'), 'Kentucky state filter missing');
assert(html.includes('<span>v82.1</span>'), 'Visible V82.1 version missing');
assert(source.includes('p_south:36.3'), 'Kentucky catalog boundary missing');
assert(worker.includes("'MI', 'KY'"), 'Kentucky weather worker support missing');
assert.strictEqual(inline, source.trim(), 'Inline application script does not match js/app.js');
assert.strictEqual((sql.match(/insert into public\.trail_systems/g) || []).length, 36, 'Kentucky SQL trail count is incorrect');
assert.strictEqual((sql.match(/insert into public\.trail_soil_profiles/g) || []).length, 36, 'Kentucky SQL soil count is incorrect');
assert(sql.includes("'weather-refresh-ky'"), 'Kentucky weather schedule missing');
assert(sql.includes('timeout_milliseconds := 120000'), 'Kentucky refresh timeout missing');

console.log('Kentucky V81 expansion tests passed.');
