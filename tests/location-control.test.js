const fs = require('fs');
const path = require('path');
const assert = require('assert');

const folder = path.join(__dirname, '..');
const source = fs.readFileSync(path.join(folder, 'js', 'app.js'), 'utf8');
const html = fs.readFileSync(path.join(folder, 'index.html'), 'utf8');
const previous = fs.readFileSync(path.join(folder, '..', 'ohio-trail-conditions-v59', 'js', 'app.js'), 'utf8');
const inline = html.match(/<script>([\s\S]*?)<\/script>/)[1].trim();

function section(text, start, end) {
  return text.slice(text.indexOf(start), text.indexOf(end));
}

const toolbar = html.slice(html.indexOf('<div class="toolbar">'), html.indexOf('<div class="summary">'));
assert(!toolbar.includes('id="locate"'), 'Location button remains in toolbar');
assert(html.includes('<button id="locate" class="metric trail-metric metric-action"'));
assert(html.includes('<b id="nearestTrail">Use location</b><span>Nearest trail</span>'));
assert(source.includes("label.textContent='Locating…'"));
assert(source.includes("label.textContent='Use location'"));
assert.strictEqual(
  section(source, 'function statusFrom', 'function getVotes'),
  section(previous, 'function statusFrom', 'function getVotes'),
  'Condition calculations changed from V59'
);
assert.strictEqual(
  section(source, 'const MRMS_SERVICE_URL', 'function escapeHtml'),
  section(previous, 'const MRMS_SERVICE_URL', 'function escapeHtml'),
  'NOAA retrieval changed from V59'
);
assert.strictEqual(inline, source.trim(), 'Inline application script does not match js/app.js');

console.log('Location-control regression tests passed.');
