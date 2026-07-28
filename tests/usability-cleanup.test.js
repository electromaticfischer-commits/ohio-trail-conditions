const fs = require('fs');
const path = require('path');
const assert = require('assert');

const folder = path.join(__dirname, '..');
const source = fs.readFileSync(path.join(folder, 'js', 'app.js'), 'utf8');
const html = fs.readFileSync(path.join(folder, 'index.html'), 'utf8');
const previous = fs.readFileSync(path.join(folder, '..', 'ohio-trail-conditions-v56', 'js', 'app.js'), 'utf8');
const inline = html.match(/<script>([\s\S]*?)<\/script>/)[1].trim();

function section(text, start, end) {
  return text.slice(text.indexOf(start), text.indexOf(end));
}

assert.strictEqual(
  section(source, 'function statusFrom', 'function readyEstimate'),
  section(previous, 'function statusFrom', 'function readyEstimate'),
  'Status calculation changed from V56'
);
assert.strictEqual(
  section(source, 'const MRMS_SERVICE_URL', 'async function fetchOpenMeteo'),
  section(previous, 'const MRMS_SERVICE_URL', 'async function fetchOpenMeteo'),
  'NOAA retrieval or condition calculations changed from V56'
);
assert(source.includes("if(value<48)return `${value} hr ago`"));
assert(source.includes("return `${days}${plus?'+':''} days ago`"));
assert(source.includes('Ready now'));
assert(html.includes('<option value="recent-report">Recently reported</option>'));
assert(source.includes('communityReportHeading'));
assert(source.includes('<details class="trail-links"><summary>Trail information</summary>'));
assert(source.includes("function rainfallDiagnosticsPanel(r){\n  if(!developerMode)return '';"));
assert.strictEqual(inline, source.trim(), 'Inline application script does not match js/app.js');
assert.doesNotThrow(() => new Function(inline));

console.log('Usability-cleanup regression tests passed.');
