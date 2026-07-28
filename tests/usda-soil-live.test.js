const assert = require('assert');
const fs = require('fs');
const vm = require('vm');

const source = fs.readFileSync(require('path').join(__dirname, '../js/app.js'), 'utf8');
const start = source.indexOf("const USDA_SOIL_ENDPOINT=");
const end = source.indexOf("const engineeredDryingFactors=");
const context = { Date, Error, fetch, JSON, Map, Math, Number, Object, String };
vm.createContext(context);
vm.runInContext(
  "function haversine(a,b,c,d){const R=3959,p=Math.PI/180,x=(c-a)*p,y=(d-b)*p,q=Math.sin(x/2)**2+Math.cos(a*p)*Math.cos(c*p)*Math.sin(y/2)**2;return 2*R*Math.asin(Math.sqrt(q))}\n" +
  source.slice(start, end),
  context
);

(async () => {
  const profile = await context.researchSoilProfile(40.199428, -82.937965);
  assert(profile.dominantSoil && profile.dominantSoil !== 'Unknown', 'dominant soil missing');
  assert(Number(profile.sampleCoverage.split('/')[0]) > 0, 'no usable samples');
  assert(profile.soilDryingFactor >= 0.65 && profile.soilDryingFactor <= 1.3, 'factor outside documented bounds');
  assert.strictEqual(profile.soilLat, 40.199428);
  assert.strictEqual(profile.soilLon, -82.937965);
  console.log(`USDA live check passed: ${profile.dominantSoil}, ${profile.naturalDrainage}, factor ${profile.soilDryingFactor}, coverage ${profile.sampleCoverage}.`);
})().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
