const assert = require('assert');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'js', 'app.js'), 'utf8');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const audit = JSON.parse(fs.readFileSync(path.join(root, 'data', 'v775-duplicate-audit.json'), 'utf8'));
const trails = JSON.parse(source.match(/^const baseTrails=(.+);$/m)[1]);
const inline = html.match(/<script>([\s\S]*?)<\/script>/)[1].trim();

assert.strictEqual(inline, source.trim(), 'Inline application script must match js/app.js');
assert(html.includes('<span>v82.1</span>'), 'Visible current version missing');
assert(!html.includes('leaflet.markercluster'), 'Numbered marker clustering returned');
assert(trails.some(trail => trail.id === 'alum-p1' && trail.name === 'Alum Creek Phase 1'), 'Alum Creek Phase 1 is missing');
assert(trails.some(trail => trail.id === 'alum-p2' && trail.name === 'Alum Creek Phase 2'), 'Alum Creek Phase 2 is missing');
assert(!source.match(/^const RETIRED_CATALOG_IDS=.*$/m)[0].includes('alum-p2'), 'Alum Creek Phase 2 is incorrectly retired');
assert.strictEqual(audit.scope.sameStatePairsWithinFiveMiles, 53, 'Duplicate review scope changed');
assert.strictEqual(audit.result.distinctNearbyPairsRetained, 53, 'Nearby official trail decisions changed');
assert.deepStrictEqual(audit.result.retiredIds, [], 'An official nearby trail was incorrectly retired');
assert.strictEqual(audit.mathChanged, false, 'Duplicate audit must not change condition math');

console.log('V77.5 duplicate audit tests passed.');
