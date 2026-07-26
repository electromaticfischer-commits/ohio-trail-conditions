const fs = require('fs');
const path = require('path');
const assert = require('assert');

const folder = path.join(__dirname, '..');
const source = fs.readFileSync(path.join(folder, 'js', 'app.js'), 'utf8');
const html = fs.readFileSync(path.join(folder, 'index.html'), 'utf8');
const previous = fs.readFileSync(path.join(folder, '..', 'ohio-trail-conditions-v58', 'js', 'app.js'), 'utf8');
const inline = html.match(/<script>([\s\S]*?)<\/script>/)[1].trim();

function section(text, start, end) {
  return text.slice(text.indexOf(start), text.indexOf(end));
}

assert(source.includes("if(ready==='Now')return '<div class=\"fact\"><b>Ready now</b></div>'"));
assert(!source.includes('<span>condition estimate</span>'));
assert(source.includes('<span>estimated ready</span>'));
assert.strictEqual(
  section(source, 'function statusFrom', 'function getVotes'),
  section(previous, 'function statusFrom', 'function getVotes'),
  'Condition calculations changed from V58'
);
assert.strictEqual(
  section(source, 'const MRMS_SERVICE_URL', 'function escapeHtml'),
  section(previous, 'const MRMS_SERVICE_URL', 'function escapeHtml'),
  'NOAA retrieval changed from V58'
);
assert.strictEqual(inline, source.trim(), 'Inline application script does not match js/app.js');

console.log('Ready-card cleanup regression tests passed.');
