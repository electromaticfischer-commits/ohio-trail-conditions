const fs=require('fs');
const path=require('path');
const assert=require('assert');
const folder=path.join(__dirname,'..');
const source=fs.readFileSync(path.join(folder,'js','app.js'),'utf8');
const html=fs.readFileSync(path.join(folder,'index.html'),'utf8');

assert(source.includes('function mrmsLastRainLabel('));
assert(source.includes("if(r12>=threshold)return 'Within 12 hr'"));
assert(source.includes("if(r24-r12>=threshold)return '12–24 hr ago'"));
assert(source.includes("if(r48-r24>=threshold)return '1–2 days ago'"));
assert(source.includes("if(r72-r48>=threshold)return '2–3 days ago'"));
assert(source.includes('Temperature ${Math.round(r.temperature)}°F, humidity ${Math.round(r.humidity)}%, wind ${Math.round(r.wind)} mph.'));
assert(source.includes('<div class="explain">${weatherSummary(r)}</div>'));
assert(!source.includes("<div class=\"explain\">${r.weatherError?'Live weather"));
assert.strictEqual(html.match(/<script>([\s\S]*?)<\/script>/)[1].trim(),source.trim());

console.log('Weather-card cleanup regression tests passed.');
