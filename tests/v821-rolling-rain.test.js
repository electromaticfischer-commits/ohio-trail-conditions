const assert = require('assert');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const client = fs.readFileSync(path.join(root, 'js', 'app.js'), 'utf8');
const edge = fs.readFileSync(path.join(root, 'supabase', 'functions', 'weather-refresh', 'index.ts'), 'utf8');
const model = fs.readFileSync(path.join(root, 'supabase', 'functions', '_shared', 'moisture-model.js'), 'utf8');

function abruptDrop(current, cached, ageHours = 4) {
  const old72 = Number(cached.r72) || 0;
  const new72 = Number(current.r72) || 0;
  const allowedRatio = ageHours <= 6 ? .55 : ageHours <= 12 ? .35 : .20;
  const expiringTail = Math.max(0, old72 - (Number(cached.r48) || 0));
  const unexplainedDrop = Math.max(0, old72 - new72 - expiringTail);
  return old72 >= .20 && new72 < old72 * allowedRatio && unexplainedDrop > .15;
}

assert.equal(
  abruptDrop({r12:.35,r24:.36,r48:.36,r72:.36},{r12:.35,r24:.35,r48:.35,r72:1.35}),
  false,
  'Rain aging out of the 48–72-hour band must be accepted as a legitimate rollover'
);
assert.equal(
  abruptDrop({r12:.1,r24:.1,r48:.1,r72:.1},{r12:1.35,r24:1.35,r48:1.35,r72:1.35}),
  true,
  'A collapse that cannot be explained by an expiring rainfall band must still be rejected'
);
assert(client.includes('const expiringTail=Math.max(0,old72-(Number(cached.r48)||0))'),'Client rollover safeguard missing');
assert(edge.includes('const expiringTail = Math.max(0, old72 - (Number(cached.r48) || 0))'),'Shared weather rollover safeguard missing');
assert(edge.includes("rainSource === 'Last trustworthy NOAA MRMS reading' ? 'trusted' : quality"),'Held NOAA totals must remain authoritative in the moisture model');
assert(model.includes("MOISTURE_MODEL_VERSION = 'v82-active-2'"),'V82.1 active model version missing');
assert(model.includes(': latestTotal >= .25 ? 18'),'Moderate-event recovery floor missing');

console.log('V82.1 rolling-rain consistency tests passed.');
