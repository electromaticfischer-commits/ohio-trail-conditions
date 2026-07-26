const fs = require('fs');
const path = require('path');
const assert = require('assert');

const folder = path.join(__dirname, '..');
const source = fs.readFileSync(path.join(folder, 'js', 'app.js'), 'utf8');
const html = fs.readFileSync(path.join(folder, 'index.html'), 'utf8');
const previous = fs.readFileSync(path.join(folder, '..', 'ohio-trail-conditions-v60', 'js', 'app.js'), 'utf8');
const inline = html.match(/<script>([\s\S]*?)<\/script>/)[1].trim();

function section(text, start, end) {
  return text.slice(text.indexOf(start), text.indexOf(end));
}

assert(source.includes("return {title:'Community Reports',summary:'Be the first to report conditions.'}"));
assert(source.includes("title:`Community Reports${age?` — ${age}`:''}`"));
assert(source.includes("['Yes — a few wet spots','A few wet spots']"));
assert(source.includes("['Rideable — expect mud','Expect mud']"));
assert(source.includes('<div class="community-title">Would you ride it?</div>'));
assert(source.includes('<div class="observation-label">What did you notice?</div>'));
assert(source.includes('Saved and shared'));
assert(!source.includes('Shared with everyone'));
assert(!source.includes('You reported:'));
assert(!source.includes('communityReportHtml'));
assert(source.includes("observation==='Perfect traction'"));
assert.strictEqual(
  section(source, 'function statusFrom', 'function getVotes'),
  section(previous, 'function statusFrom', 'function getVotes'),
  'Condition calculations changed from V60'
);
assert.strictEqual(
  section(source, 'const MRMS_SERVICE_URL', 'function escapeHtml'),
  section(previous, 'const MRMS_SERVICE_URL', 'function escapeHtml'),
  'NOAA retrieval changed from V60'
);
assert.strictEqual(inline, source.trim(), 'Inline application script does not match js/app.js');

console.log('Community-simplification regression tests passed.');
