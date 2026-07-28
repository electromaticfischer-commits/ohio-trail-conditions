const fs = require('fs');
const path = require('path');
const assert = require('assert');

const folder = path.join(__dirname, '..');
const source = fs.readFileSync(path.join(folder, 'js', 'app.js'), 'utf8');
const html = fs.readFileSync(path.join(folder, 'index.html'), 'utf8');
const previous = fs.readFileSync(path.join(folder, '..', 'ohio-trail-conditions-v51', 'js', 'app.js'), 'utf8');
const inline = html.match(/<script>([\s\S]*?)<\/script>/)[1].trim();

function section(text, start, end) {
  return text.slice(text.indexOf(start), text.indexOf(end));
}

assert.strictEqual(
  section(source, 'function statusFrom', 'function getVotes'),
  section(previous, 'function statusFrom', 'function getVotes'),
  'Status thresholds or unit handling changed from V51'
);
assert.strictEqual(
  section(source, 'const MRMS_SERVICE_URL', 'async function fetchOpenMeteo'),
  section(previous, 'const MRMS_SERVICE_URL', 'async function fetchOpenMeteo'),
  'NOAA retrieval or condition calculations changed from V51'
);
assert.strictEqual(inline, source.trim(), 'Inline application script does not match js/app.js');
assert(source.includes("supabaseRpc('get_ohio_trails')"));
assert(source.includes("supabaseRpc('get_community_trail_reports')"));
assert(source.includes("supabaseRpc('get_my_trail_report'"));
assert(source.includes("supabaseRpc('save_my_trail_report'"));
assert(source.includes("supabaseRpc('remove_my_trail_report'"));
assert(source.includes('current.value===value?null:value'), 'Selected recommendation must be removable');
assert(source.includes('data-remove-report'), 'Report removal control is missing');
assert(source.includes('Community Reports'));
assert(source.includes('communityReportHeading'));
assert.doesNotThrow(() => new Function(inline), 'Inline application script must have valid JavaScript syntax');

console.log('Shared-report integration regression tests passed.');
