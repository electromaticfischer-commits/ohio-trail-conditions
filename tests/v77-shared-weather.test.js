const assert = require('assert');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'js', 'app.js'), 'utf8');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const sql = fs.readFileSync(path.join(root, 'supabase', 'v77-shared-weather-cache.sql'), 'utf8');
const edge = fs.readFileSync(path.join(root, 'supabase', 'functions', 'weather-refresh', 'index.ts'), 'utf8');
const inline = html.match(/<script>([\s\S]*?)<\/script>/)[1].trim();

assert.strictEqual(inline, source.trim(), 'Inline application script must match js/app.js');
assert(html.includes('<option value="all" selected>All states</option>'), 'All-states view must be the default');
assert(html.includes('<span>v77.6</span>'), 'Visible V77.6 version missing');

assert(source.includes("supabaseRpc('get_latest_trail_weather',{p_trail_ids:null})"), 'Frontend must load the shared weather cache');
const loadSection = source.slice(source.indexOf('async function load(focusTrail=null)'), source.indexOf('function locate('));
assert(!loadSection.includes('fetchTrail('), 'Initial loading must not make one weather request per trail');
assert(loadSection.includes('haversine(userLocation.lat,userLocation.lon,t.lat,t.lon)<=75'), 'Initial location discovery must include every trail within 75 miles');
assert(source.includes('mapDiscoveryTimer=setTimeout(()=>discoverMapArea(),450)'), 'Moving the map must automatically discover its visible trails');
assert(source.includes('if(loadedTrailIds.has(trail.id))return'), 'Previously loaded trails must be retained without duplicates');
assert(source.includes("const stateTrails=catalog().filter(t=>t.stateCode===selectedState)"), 'Selecting a state must load its complete packaged catalog');
assert(source.includes("map.fitBounds(L.latLngBounds(locations),{padding:[28,28]})"), 'State selection must frame its complete trail catalog');
assert(source.includes('markers.forEach(m=>map.removeLayer(m));markers=[];'), 'Filtered dots must be rebuilt without stale states');
assert(source.includes('.addTo(map);'), 'Trail dots must be added directly to the map');
assert(!html.includes('leaflet.markercluster'), 'Numbered marker clustering must remain removed');
assert(source.includes("document.getElementById('stateFilter').addEventListener('change',selectState)"), 'State filter must use complete-state selection behavior');
assert(source.includes("age>3*3600000"), 'Stale shared weather must be rejected');
assert(source.includes("row.data_quality==='unavailable'"), 'Unavailable precipitation must withhold rideability');

const scoringFormula = 'const rain=(rain0to12*5+rain12to24*2.4+rain24to48*.8+rain48to72*.25)*sensitivity;';
assert.strictEqual(source.split(scoringFormula).length - 1, 2, 'Cached and direct paths must use the same rainfall scoring formula');

assert(sql.includes('create or replace function public.get_latest_trail_weather'), 'Latest-weather RPC missing');
assert.strictEqual((sql.match(/select cron\.schedule\(/g) || []).length, 5, 'One hourly refresh job is required for each state');
assert(edge.includes('const NOAA_TRAIL_BATCH = 30'), 'NOAA batching contract changed');
assert(edge.includes('weights: [...inner.map(() => 0.70 / inner.length), ...outer.map(() => 0.30 / outer.length)]'), '25-point weighting contract changed');
assert(edge.includes('hours === 24 ? stats.sampleDetails : undefined'), '24-hour diagnostics samples missing');
assert(edge.includes("quality = 'unavailable'"), 'Unavailable-data safeguard missing');

console.log('V77 shared weather and discovery tests passed.');
