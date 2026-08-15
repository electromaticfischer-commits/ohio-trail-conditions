const assert = require('assert');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'js', 'app.js'), 'utf8');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const sql = fs.readFileSync(path.join(root, 'supabase', 'v76-comprehensive-catalog.sql'), 'utf8');
const audit = JSON.parse(fs.readFileSync(path.join(root, 'data', 'v76-five-state-catalog-audit.json'), 'utf8'));
const trails = JSON.parse(source.match(/^const baseTrails=(.+);$/m)[1]);
const profiles = JSON.parse(source.match(/^const soilProfiles=(.+);$/m)[1]);
const inline = html.match(/<script>([\s\S]*?)<\/script>/)[1].trim();
const additions = Object.values(audit.states)
  .flatMap(state => state.entries)
  .filter(entry => entry.decision === 'add')
  .map(entry => entry.proposed);

assert.strictEqual(trails.length, 299, 'V76.1 must contain 299 riding systems');
assert.deepStrictEqual(
  Object.fromEntries(['OH','WV','IN','PA','MI'].map(code => [
    code,
    trails.filter(trail => (trail.stateCode || 'OH') === code).length
  ])),
  {OH:49,WV:34,IN:40,PA:91,MI:85}
);
assert.strictEqual(additions.length, 149, 'V76 audit must approve 149 additions');
assert.strictEqual(new Set(trails.map(trail => trail.id)).size, trails.length, 'Trail IDs must remain unique');
assert(additions.every(addition => trails.some(trail => trail.id === addition.id)), 'Approved addition missing from packaged catalog');
assert(additions.every(addition => profiles[addition.id]), 'Approved addition missing a soil profile');
assert(additions.every(addition => addition.routeSource?.name === 'MTB Project riding area'), 'MTB-specific source metadata missing');
assert(additions.every(addition => Number.isFinite(addition.lat) && Number.isFinite(addition.lon)), 'Riding-area center missing');
assert(html.includes('<span>v78.2</span>'), 'Visible current version missing');
assert.strictEqual(inline, source.trim(), 'Inline application script does not match js/app.js');
assert.strictEqual((sql.match(/insert into public\.trail_systems/g) || []).length, 149, 'Supabase trail upsert count is incorrect');
assert.strictEqual((sql.match(/insert into public\.trail_soil_profiles/g) || []).length, 149, 'Supabase soil upsert count is incorrect');
assert(!source.includes('Mapped trail length:'), 'Trail-length display returned');
assert(source.includes("supabaseRpc('get_latest_trail_weather',{p_trail_ids:null})"), 'Shared weather cache loading missing');
assert(!source.slice(source.indexOf('async function load(focusTrail=null)'), source.indexOf('function locate(')).includes('fetchTrail('), 'Per-trail live weather loading returned');
assert(html.includes('<option value="all" selected>All states</option>'), 'Default all-state discovery option missing');

for (const state of Object.values(audit.states)) {
  assert(state.entries.every(entry => ['add','retain-existing','exclude'].includes(entry.decision)), 'Unresolved audit decision remains');
}

console.log('V76 comprehensive five-state catalog tests passed.');
