const assert = require('assert');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'js', 'app.js'), 'utf8');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const audit = JSON.parse(fs.readFileSync(path.join(root, 'data', 'v761-packaged-sync-audit.json'), 'utf8'));
const trails = JSON.parse(source.match(/^const baseTrails=(.+);$/m)[1]);
const profiles = JSON.parse(source.match(/^const soilProfiles=(.+);$/m)[1]);
const inline = html.match(/<script>([\s\S]*?)<\/script>/)[1].trim();
const additions = ['a-w-marion-mrwzgndf', 'the-wilds-mrx0vsah'];
const blockedShared = ['germantown', 'lake-vesuvius', 'mikes', 'starhill-mrwzkfre'];

assert.strictEqual(trails.length, 299, 'V76.1 must contain 299 packaged riding systems');
assert.strictEqual(trails.filter(trail => (trail.stateCode || 'OH') === 'OH').length, 49, 'V76.1 must contain 49 packaged Ohio systems');
assert(additions.every(id => trails.some(trail => trail.id === id)), 'Approved shared system was not packaged');
assert(additions.every(id => profiles[id] && profiles[id].source.includes('USDA NRCS')), 'Packaged shared system is missing researched soil data');
assert(additions.every(id => trails.find(trail => trail.id === id).soilProfile), 'Packaged record is missing its embedded soil profile');
assert(['germantown', 'lake-vesuvius', 'mikes'].every(id => !trails.some(trail => trail.id === id)), 'Retired listing returned to the packaged catalog');
assert(!trails.some(trail => trail.id === 'starhill-mrwzkfre'), 'Duplicate Starhill shared ID was packaged');
assert(source.includes(`const RETIRED_CATALOG_IDS=['${blockedShared.join("','")}']`), 'Shared retirement and duplicate guard is incomplete');
assert.strictEqual(new Set(trails.map(trail => trail.id)).size, trails.length, 'Packaged IDs must remain unique');
assert.strictEqual(audit.mathChanged, false, 'Catalog sync must not change condition math');
assert(html.includes('<span>v77.5</span>'), 'Visible current version missing');
assert.strictEqual(inline, source.trim(), 'Inline application script does not match js/app.js');

console.log('V76.1 packaged catalog sync tests passed.');
