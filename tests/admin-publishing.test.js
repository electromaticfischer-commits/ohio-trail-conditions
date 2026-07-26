const fs = require('fs');
const path = require('path');
const assert = require('assert');

const folder = path.join(__dirname, '..');
const source = fs.readFileSync(path.join(folder, 'js', 'app.js'), 'utf8');
const html = fs.readFileSync(path.join(folder, 'index.html'), 'utf8');
const previous = fs.readFileSync(path.join(folder, '..', 'ohio-trail-conditions-v52', 'js', 'app.js'), 'utf8');
const inline = html.match(/<script>([\s\S]*?)<\/script>/)[1].trim();

function section(text, start, end) {
  return text.slice(text.indexOf(start), text.indexOf(end));
}

assert.strictEqual(
  section(source, 'function statusFrom', 'function getVotes'),
  section(previous, 'function statusFrom', 'function getVotes'),
  'Status thresholds or unit handling changed from V52'
);
assert.strictEqual(
  section(source, 'const MRMS_SERVICE_URL', 'function escapeHtml'),
  section(previous, 'const MRMS_SERVICE_URL', 'function escapeHtml'),
  'NOAA retrieval or condition calculations changed from V52'
);
assert.strictEqual(inline, source.trim(), 'Inline application script does not match js/app.js');
assert(source.includes("authRequest('token?grant_type=password'"), 'Administrator password sign-in is missing');
assert(source.includes("supabaseRpc('is_ohio_trail_admin'"), 'Administrator role verification is missing');
assert(source.includes("adminRpc('admin_upsert_ohio_trail'"), 'Shared trail publishing is missing');
assert(source.includes("adminRpc('admin_set_ohio_trail_status'"), 'Shared visibility publishing is missing');
assert(source.includes("manage.hidden=!(adminAuthenticated&&developerMode)"), 'Manage trails must remain hidden from public users');
assert(source.includes("if(!adminAuthenticated){openAdminLogin();return}"), 'Developer access must require sign-in');
assert(source.includes("p_status:'Archived'"), 'Shared archive behavior is missing');
assert.doesNotThrow(() => new Function(inline), 'Inline application script must have valid JavaScript syntax');

console.log('Administrator publishing regression tests passed.');
