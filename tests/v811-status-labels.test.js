const assert=require('assert');
const fs=require('fs');
const path=require('path');
const vm=require('vm');

const root=path.join(__dirname,'..');
const source=fs.readFileSync(path.join(root,'js','app.js'),'utf8');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const model=fs.readFileSync(path.join(root,'supabase','functions','_shared','moisture-model.js'),'utf8');
const inline=html.match(/<script>([\s\S]*?)<\/script>/)[1].trim();
const context={};
vm.createContext(context);
vm.runInContext(`${source.match(/function statusFrom\([^\n]+/)[0]}\n${source.match(/function rideColor\([^\n]+/)[0]}\nglobalThis.statusFrom=statusFrom;globalThis.rideColor=rideColor;`,context);

assert.deepStrictEqual(JSON.parse(JSON.stringify(context.statusFrom(23,60))),{key:'green',label:'Likely good'});
assert.deepStrictEqual(JSON.parse(JSON.stringify(context.statusFrom(24,60))),{key:'yellow',label:'Use caution'});
assert.deepStrictEqual(JSON.parse(JSON.stringify(context.statusFrom(42,60))),{key:'yellow',label:'Use caution'});
assert.deepStrictEqual(JSON.parse(JSON.stringify(context.statusFrom(43,60))),{key:'orange',label:'Wait'});
assert.deepStrictEqual(JSON.parse(JSON.stringify(context.statusFrom(62,60))),{key:'orange',label:'Wait'});
assert.deepStrictEqual(JSON.parse(JSON.stringify(context.statusFrom(63,60))),{key:'red',label:'Likely wet'});
assert.strictEqual(context.rideColor(76),'#ffd400','76% must remain caution yellow');
assert.strictEqual(context.rideColor(77),'#237a43','77% must begin likely-good green');
assert(html.includes('<option value="orange">Wait</option>'),'Wait filter label missing');
assert(html.includes('<span>v81.1</span>'),'Visible V81.1 version missing');
assert(model.includes("return {key: 'orange', label: 'Wait'}"),'Shared model still emits the old orange label');
assert(source.includes("shadow.status.key==='orange'?'Wait':shadow.status.label"),'Cached orange status is not normalized');
assert.strictEqual(inline,source.trim(),'Inline application script does not match js/app.js');

console.log('V81.1 status-label tests passed.');
