const assert = require('assert');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'js', 'app.js'), 'utf8');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const audit = JSON.parse(fs.readFileSync(path.join(root, 'data', 'v774-duplicate-audit.json'), 'utf8'));
const sql = fs.readFileSync(path.join(root, 'supabase', 'v774-catalog-deduplication.sql'), 'utf8');
const inline = html.match(/<script>([\s\S]*?)<\/script>/)[1].trim();

assert.strictEqual(inline, source.trim(), 'Inline application script must match js/app.js');
assert(html.includes('<span>v77.4</span>'), 'Visible V77.4 version missing');
assert(!html.includes('leaflet.markercluster'), 'Numbered marker clustering returned');
assert(source.includes("'alum-p2'"), 'Retired Alum Creek phase ID is missing');
assert(source.includes("name:'Alum Creek Trail System'"), 'Canonical Alum Creek riding-area name is missing');
assert(source.includes("baseTrails.filter(t=>!RETIRED_CATALOG_IDS.includes(t.id))"), 'Packaged duplicate guard is missing');
assert(source.includes("sharedTrails.filter(t=>!RETIRED_CATALOG_IDS.includes(t.id))"), 'Shared duplicate guard is missing');
assert.strictEqual(audit.scope.sameStatePairsWithinFiveMiles, 53, 'Duplicate review scope changed');
assert.strictEqual(audit.result.distinctNearbyPairsRetained, 52, 'Nearby distinct riding-area decisions changed');
assert.deepStrictEqual(audit.result.retiredIds, ['alum-p2'], 'Unexpected duplicate retirement');
assert.strictEqual(audit.mathChanged, false, 'Duplicate cleanup must not change condition math');
assert(sql.includes("where id = 'alum-p2'"), 'Supabase duplicate archive statement missing');
assert(sql.includes("where id = 'alum-p1'"), 'Supabase retained-record update missing');

console.log('V77.4 duplicate consolidation tests passed.');
