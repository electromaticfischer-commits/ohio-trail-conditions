const assert = require('assert');
const fs = require('fs');
const vm = require('vm');

const source = fs.readFileSync(require('path').join(__dirname, '../js/app.js'), 'utf8');
const start = source.indexOf("const USDA_SOIL_ENDPOINT=");
const end = source.indexOf("const engineeredDryingFactors=");
assert(start >= 0 && end > start, 'automatic USDA soil code is present');

const context = { Date, Error, JSON, Map, Math, Number, Object, String };
vm.createContext(context);
vm.runInContext(
  "function haversine(a,b,c,d){const R=3959,p=Math.PI/180,x=(c-a)*p,y=(d-b)*p,q=Math.sin(x/2)**2+Math.cos(a*p)*Math.cos(c*p)*Math.sin(y/2)**2;return 2*R*Math.asin(Math.sqrt(q))}\n" +
  source.slice(start, end).replace(/async function researchSoilProfile[\s\S]*?function profileMatchesTrailLocation/, 'function profileMatchesTrailLocation'),
  context
);

assert.strictEqual(context.profileMatchesTrailLocation(null, { lat: 40, lon: -82 }, {}), false, 'new trails require research');
assert.strictEqual(context.profileMatchesTrailLocation({ dominantSoil: 'Loam' }, { lat: 40, lon: -82 }, { lat: 40, lon: -82 }), true, 'unchanged trail location keeps existing profile');
assert.strictEqual(context.profileMatchesTrailLocation({ dominantSoil: 'Loam' }, { lat: 40.01, lon: -82 }, { lat: 40, lon: -82 }), false, 'changed trail location requires research');
assert.strictEqual(context.profileMatchesTrailLocation({ soilLat: 40, soilLon: -82 }, { lat: 40, lon: -82, weatherLat: 41 }, { lat: 40, lon: -82, weatherLat: 40 }), true, 'weather center changes do not require soil research');

const records = Array.from({ length: 17 }, (_, index) => ({
  sample_key: `sample-${index}`,
  texdesc: index < 12 ? 'silt loam' : 'clay loam',
  drainagecl: 'Well drained',
  comppct_r: 70,
  rvindicator: 'Yes'
}));
const profile = context.summarizeSoilRecords(records, 40.2, -82.9);
assert.strictEqual(profile.dominantSoil, 'Silt Loam');
assert.strictEqual(profile.sampleCoverage, '17/17');
assert.strictEqual(profile.confidence, 'High');
assert.strictEqual(profile.soilLat, 40.2);
assert.strictEqual(profile.soilLon, -82.9);
assert(profile.soilDryingFactor > 0.9 && profile.soilDryingFactor < 1, 'soil coefficient is calculated from texture and drainage');
console.log('Automatic USDA soil tests passed.');
