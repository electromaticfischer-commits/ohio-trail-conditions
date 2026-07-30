const assert = require('assert');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'js', 'app.js'), 'utf8');
const previous = fs.readFileSync(path.join(root, '..', 'ohio-trail-conditions-v70', 'js', 'app.js'), 'utf8');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const sql = fs.readFileSync(path.join(root, 'supabase', 'v71-west-virginia-expansion.sql'), 'utf8');
const trails = JSON.parse(source.match(/^const baseTrails=(.+);$/m)[1]);
const profiles = JSON.parse(source.match(/^const soilProfiles=(.+);$/m)[1]);
const inline = html.match(/<script>([\s\S]*?)<\/script>/)[1].trim();

function section(text, start, end) {
  return text.slice(text.indexOf(start), text.indexOf(end));
}

const westVirginia = trails.filter(trail => trail.stateCode === 'WV');
assert.strictEqual(westVirginia.length, 16, 'Current catalog must package 16 verified West Virginia systems');
assert(westVirginia.every(trail => trail.official && Number.isFinite(trail.lengthMiles)), 'WV source or mileage missing');
assert(westVirginia.every(trail => profiles[trail.id]), 'WV soil profile missing');
assert(westVirginia.filter(trail => profiles[trail.id].confidence === 'Low').every(trail => profiles[trail.id].samplingMethod), 'Low-confidence soil must expose its sampling method');
assert(html.includes('id="stateFilter"'), 'State filter missing');
assert(html.includes('v75.0'), 'Visible current version missing');
assert(html.includes('<h1>Mountain Bike Trail Conditions</h1>'), 'Nationwide title missing');
assert(source.includes('p_east:-77.5'), 'West Virginia catalog bounds missing');
assert(source.includes("state==='all'||r.stateCode===state"), 'State filtering is not applied');
assert.strictEqual(inline, source.trim(), 'Inline application script does not match js/app.js');
assert((sql.match(/insert into public\.trail_systems/g) || []).length === 13, 'SQL trail count is not 13');
assert((sql.match(/insert into public\.trail_routes/g) || []).length === 13, 'SQL route count is not 13');
assert((sql.match(/insert into public\.trail_soil_profiles/g) || []).length === 13, 'SQL soil count is not 13');

assert.strictEqual(
  section(source, 'function statusFrom', 'function getVotes'),
  section(previous, 'function statusFrom', 'function getVotes'),
  'Rideability/status calculations changed from V70',
);
assert.strictEqual(
  section(source, 'const MRMS_SERVICE_URL', 'async function fetchOpenMeteo'),
  section(previous, 'const MRMS_SERVICE_URL', 'async function fetchOpenMeteo'),
  'NOAA rainfall retrieval changed from V70',
);

console.log('West Virginia V71 expansion tests passed.');
