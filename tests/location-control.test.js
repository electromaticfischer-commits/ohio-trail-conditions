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

const toolbar = html.slice(html.indexOf('<div class="toolbar">'), html.indexOf('<div class="layout">'));
assert(toolbar.includes('id="locate"'), 'Compact location button is missing from toolbar');
assert(html.includes('<button id="locate" class="location-control" type="button">Find trails near me</button>'));
assert(!html.includes('<div class="summary">'), 'Large summary cards remain');
assert(source.includes("b.textContent='Locating…'"));
assert(source.includes("permission.state==='granted'"), 'Previously granted location is not reused');
assert.strictEqual(
  section(source, 'function statusFrom', 'function getVotes'),
  section(previous, 'function statusFrom', 'function getVotes'),
  'Condition calculations changed from V59'
);
assert.strictEqual(
  section(source, 'const MRMS_SERVICE_URL', 'async function fetchOpenMeteo'),
  section(previous, 'const MRMS_SERVICE_URL', 'async function fetchOpenMeteo'),
  'NOAA retrieval changed from V59'
);
assert.strictEqual(inline, source.trim(), 'Inline application script does not match js/app.js');

console.log('Location-control regression tests passed.');
