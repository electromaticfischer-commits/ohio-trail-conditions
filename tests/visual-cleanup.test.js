const fs=require('fs');
const path=require('path');
const assert=require('assert');
const folder=path.join(__dirname,'..');
const html=fs.readFileSync(path.join(folder,'index.html'),'utf8');
const source=fs.readFileSync(path.join(folder,'js','app.js'),'utf8');
const css=fs.readFileSync(path.join(folder,'css','styles.css'),'utf8');

assert(html.includes('<title>CRUST | Mountain Bike Trail Conditions</title>'));
assert(!html.includes('id="goodCount"'));
assert(!html.includes('id="bestTrail"'));
assert(!html.includes('id="nearestTrail"'));
assert(source.includes('`<span><strong>${label}</strong> (${Number(counts[value])})</span>`'));
assert(css.includes('--bg:#e9ede9'));
assert(css.includes('.community-summary strong'));

console.log('Visual-cleanup regression tests passed.');
