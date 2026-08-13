const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'js', 'app.js'), 'utf8');
const edge = fs.readFileSync(path.join(root, 'supabase', 'functions', 'weather-refresh', 'index.ts'), 'utf8');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const inline = html.match(/<script>([\s\S]*?)<\/script>/)[1].trim();
assert.strictEqual(inline, source.trim(), 'Inline application script must match js/app.js');
assert(html.includes('<span>v78.0</span>'), 'Visible V78.0 version missing');

const start = source.indexOf('function statusFrom(');
const end = source.indexOf('function rideColor(');
const context = {Date};
vm.createContext(context);
vm.runInContext(source.slice(start, end), context);

const hoursAgo = hours => new Date(Date.now() - hours * 3600000).toISOString();
const trail = {sensitivity: 1, canopy: 0.82};
const slowClay = {sensitivity: 1.15, canopy: 0.9};
const weather = (peakRain24, peakRain72, hours = 1, extra = {}) => ({
  rain24: peakRain24, rain72: peakRain72, lastRainAt: hoursAgo(hours),
  stormHistory: {lastRainAt: hoursAgo(hours), peakRain24, peakRain72, peakRain1h: 0, antecedentRain168: 0, dryingWeatherFactor: 1, ...extra}
});

assert.strictEqual(context.stormRecovery(trail, weather(0.2, 0.3), 1).active, false, 'Routine rain must keep the existing calculation');
assert.strictEqual(context.stormRecovery(trail, weather(1.0, 1.1), 1).tier, 'significant');
assert.strictEqual(context.stormRecovery(trail, weather(1.8, 2.1), 1).tier, 'heavy');
const severe = context.stormRecovery(slowClay, weather(2.2, 3.0), 0.9);
assert.strictEqual(severe.tier, 'severe', 'Clay-sensitive trails must enter severe recovery near 2–2.5 inches');
assert(severe.requiredHours >= 60 && severe.remainingHours > 48, 'Severe recovery must retain its minimum floor');
const extreme = context.stormRecovery(trail, weather(3.5, 4.2), 1);
assert.strictEqual(extreme.tier, 'extreme');
assert(extreme.requiredHours >= 96, 'Extreme recovery must retain at least four days');
const oneHour = context.stormRecovery(trail, weather(1.1, 1.1, 1, {peakRain1h: 1.05}), 1);
assert.strictEqual(oneHour.tier, 'severe', 'One inch in one hour must trigger severe recovery');
const saturated = context.stormRecovery(trail, weather(0.9, 1.1, 1, {antecedentRain168: 2.5}), 1);
assert.strictEqual(saturated.tier, 'heavy', 'Prior saturation plus new rain must escalate recovery');
assert(context.stormRecovery(trail, weather(2.0, 2.4), 1).requiredHours <= severe.requiredHours, 'More vulnerable soil must not recover faster');

const protectedModel = context.applyStormRecovery(slowClay, weather(2.2, 3.0, 24), 0.9, 10, 75);
assert(protectedModel.rideability < 76, 'A severe event must not become green after only 24 hours');
assert.notStrictEqual(protectedModel.ready, 'Now');

assert(edge.includes("dateUtc(Date.now() - 8 * 86400000)"), 'Historical request must cover the prior week');
assert(edge.includes('stormHistory: history'), 'Shared cache must publish persistent storm history');
assert(edge.includes('peakRain1h'), 'One-hour intensity must be retained');
assert(source.includes("row.data_quality==='unavailable'"), 'Missing rainfall must still withhold rideability');

console.log('V78 severe-storm recovery tests passed.');
