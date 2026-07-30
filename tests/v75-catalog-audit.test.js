const assert = require('assert');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'js', 'app.js'), 'utf8');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const sql = fs.readFileSync(path.join(root, 'supabase', 'v75-trailforks-catalog.sql'), 'utf8');
const trails = JSON.parse(source.match(/^const baseTrails=(.+);$/m)[1]);
const profiles = JSON.parse(source.match(/^const soilProfiles=(.+);$/m)[1]);
const inline = html.match(/<script>([\s\S]*?)<\/script>/)[1].trim();
const newIds = ['oh-forry-star-hill','oh-camp-tuscazoar','oh-troy-mtb','oh-lake-milton','oh-tar-hollow','wv-big-bear','wv-arrowhead','wv-barboursville','in-creekside-trails','pa-michaux-state-forest','pa-bald-eagle-state-forest','pa-rothrock-state-forest','mi-marquette-ntn-south','mi-addison-oaks','mi-glacial-hills'];

assert(trails.length >= 148, 'V75 baseline catalog entries must remain present');
assert.deepStrictEqual(Object.fromEntries(['OH','WV','IN','PA','MI'].map(code=>[code,trails.filter(t=>(t.stateCode||'OH')===code).length >= {OH:37,WV:16,IN:26,PA:28,MI:41}[code]])),{OH:true,WV:true,IN:true,PA:true,MI:true});
assert(newIds.every(id=>trails.some(trail=>trail.id===id)), 'One or more approved additions are missing');
assert(['germantown','lake-vesuvius','mikes'].every(id=>!trails.some(trail=>trail.id===id)), 'Retired listing remains packaged');
assert(newIds.every(id=>profiles[id] && profiles[id].confidence!=='Low'), 'Every addition needs meaningful USDA soil coverage');
assert(newIds.every(id=>{const trail=trails.find(item=>item.id===id);return trail.official&&trail.organization&&trail.trailforksUrl&&trail.routeSource?.url}), 'Addition source metadata is incomplete');
assert.strictEqual(new Set(trails.map(trail=>trail.id)).size,trails.length,'Trail IDs must be unique');
assert(html.includes('<span>v76.0</span>'),'Visible current version missing');
assert(source.includes("sharedTrails.filter(t=>!['germantown','lake-vesuvius','mikes'].includes(t.id))"),'Shared catalog retirement guard missing');
assert.strictEqual(inline,source.trim(),'Inline application script does not match js/app.js');
assert((sql.match(/insert into public\.trail_systems/g)||[]).length===15,'V75 SQL trail count is not 15');
assert((sql.match(/insert into public\.trail_soil_profiles/g)||[]).length===15,'V75 SQL soil count is not 15');
assert(sql.includes("where id in ('germantown', 'lake-vesuvius', 'mikes')"),'Retirement migration missing');
assert(!source.includes('Mapped trail length:'),'Trail length display returned');

console.log('V75 catalog audit tests passed.');
