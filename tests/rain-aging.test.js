const fs = require('fs');
const assert = require('assert');

const path = require('path');
const source = fs.readFileSync(path.join(__dirname, '..', 'js', 'app.js'), 'utf8');
const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const inlineScript = html.match(/<script>([\s\S]*?)<\/script>/)[1];

function scoreRain({r12, r24, r48, r72, sensitivity = 1}) {
  const mm12 = r12 * 25.4;
  const mm24 = r24 * 25.4;
  const mm48 = r48 * 25.4;
  const mm72 = r72 * 25.4;
  const rain0to12 = mm12;
  const rain12to24 = Math.max(0, mm24 - mm12);
  const rain24to48 = Math.max(0, mm48 - mm24);
  const rain48to72 = Math.max(0, mm72 - mm48);
  const rain = (rain0to12 * 5 + rain12to24 * 2.4 + rain24to48 * .8 + rain48to72 * .25) * sensitivity;
  const lingeringMoisture = rain0to12 + rain12to24 * .75 + rain24to48 * .4 + rain48to72 * .15;
  const saturation = Math.min(22, lingeringMoisture * .75 * sensitivity);
  return Math.min(100, rain + saturation);
}

assert(source.includes('const rain12to24=Math.max(0,mm24-mm12);'));
assert(source.includes('const rain24to48=Math.max(0,mm48-mm24);'));
assert(source.includes('const rain48to72=Math.max(0,mm72-mm48);'));
assert(!source.includes('mm12*5+mm24*2.4+mm48*.8+mm72*.25'));
assert(source.includes("rideability:rainSource==='Untrusted precipitation data'?null:computedRideability"));
assert(inlineScript.includes('const rain12to24=Math.max(0,mm24-mm12);'));
assert(inlineScript.includes('const lingeringMoisture=rain0to12+rain12to24*.75+rain24to48*.4+rain48to72*.15;'));
assert.doesNotThrow(() => new Function(inlineScript), 'Inline application script must have valid JavaScript syntax');

const recentHalfInch = scoreRain({r12: .5, r24: .5, r48: .5, r72: .5});
const halfInch24to48HoursOld = scoreRain({r12: 0, r24: 0, r48: .5, r72: .5});
const halfInch48to72HoursOld = scoreRain({r12: 0, r24: 0, r48: 0, r72: .5});
const recentHalfInchAtAlumCreek = scoreRain({r12: .5, r24: .5, r48: .5, r72: .5, sensitivity: 1.28});

assert(recentHalfInch >= 63, 'Recent half-inch rain must remain likely wet');
assert(recentHalfInchAtAlumCreek >= recentHalfInch, 'Rain-sensitive trails must not recover faster than average trails');
assert(halfInch24to48HoursOld < 24, 'A half-inch storm older than 24 hours should permit green under otherwise dry weather');
assert(halfInch48to72HoursOld < halfInch24to48HoursOld, 'Rain penalty must diminish with age');
assert.strictEqual(scoreRain({r12: 0, r24: 0, r48: 0, r72: 0}), 0);

console.log('Rain-aging regression tests passed.');
