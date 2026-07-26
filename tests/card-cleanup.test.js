const fs = require('fs');
const path = require('path');
const assert = require('assert');

const folder = path.join(__dirname, '..');
const source = fs.readFileSync(path.join(folder, 'js', 'app.js'), 'utf8');
const html = fs.readFileSync(path.join(folder, 'index.html'), 'utf8');
const previous = fs.readFileSync(path.join(folder, '..', 'ohio-trail-conditions-v53', 'js', 'app.js'), 'utf8');
const inline = html.match(/<script>([\s\S]*?)<\/script>/)[1].trim();

function section(text, start, end) {
  return text.slice(text.indexOf(start), text.indexOf(end));
}

assert.strictEqual(
  section(source, 'function statusFrom', 'function getVotes'),
  section(previous, 'function statusFrom', 'function getVotes'),
  'Status thresholds or unit handling changed from V53'
);
assert.strictEqual(
  section(source, 'const MRMS_SERVICE_URL', 'function escapeHtml'),
  section(previous, 'const MRMS_SERVICE_URL', 'function escapeHtml'),
  'NOAA retrieval or condition calculations changed from V53'
);
assert.strictEqual(inline, source.trim(), 'Inline application script does not match js/app.js');
assert(!source.includes("'Rainfall sampled across a '"), 'Technical rainfall paragraph is still rendered on cards');
assert(!source.includes("'. Weather center: '+"), 'Weather-center paragraph is still rendered on cards');
assert(source.includes("'Humidity '+Math.round(r.humidity)+'%, wind '+Math.round(r.wind)+' mph.'"), 'Short humidity and wind line is missing');
assert(source.includes("r.rainWarning||''"), 'Important card warnings must remain visible');
assert.doesNotThrow(() => new Function(inline), 'Inline application script must have valid JavaScript syntax');

console.log('Card-cleanup regression tests passed.');
