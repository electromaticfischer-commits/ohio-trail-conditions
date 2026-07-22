const baseTrails=[{"id":"alum-p1","name":"Alum Creek Phase 1","region":"Central Ohio","lat":40.1989,"lon":-82.944,"sensitivity":1.28,"drying":0.78,"canopy":0.85,"drainage":"Slow","official":"https://www.combomtb.com/trail-conditions","note":"Rain-sensitive clay and high traffic can keep this trail soft.","mtbProject":"https://www.mtbproject.com/search?q=Alum%20Creek%20Phase%201"},{"id":"alum-p2","name":"Alum Creek Phase 2","region":"Central Ohio","lat":40.224,"lon":-82.955,"sensitivity":1.22,"drying":0.82,"canopy":0.84,"drainage":"Slow","official":"https://www.combomtb.com/trail-conditions","note":"Natural-surface singletrack that can remain wet after storms.","mtbProject":"https://www.mtbproject.com/search?q=Alum%20Creek%20Phase%202"},{"id":"chestnut","name":"Chestnut Ridge Metro Park","region":"Central Ohio","lat":39.8096,"lon":-82.7508,"sensitivity":1.16,"drying":0.9,"canopy":0.82,"drainage":"Medium-slow","official":"https://www.combomtb.com/trail-conditions","note":"Clay-rich sections may stay soft after nearby pavement has dried.","mtbProject":"https://www.mtbproject.com/search?q=Chestnut%20Ridge%20Metro%20Park"},{"id":"great-seal","name":"Great Seal State Park","region":"South-Central Ohio","lat":39.4028,"lon":-82.9413,"sensitivity":1.02,"drying":1.02,"canopy":0.82,"drainage":"Variable","official":"https://www.combomtb.com/trail-conditions","note":"Slopes drain faster than low areas, so conditions vary by section.","mtbProject":"https://www.mtbproject.com/search?q=Great%20Seal%20State%20Park"},{"id":"mohican","name":"Mohican MTB Trail","region":"North-Central Ohio","lat":40.6155,"lon":-82.3169,"sensitivity":1.0,"drying":0.96,"canopy":0.9,"drainage":"Medium","official":"https://www.ridemohican.com/","note":"A long route with substantial local variation in surface conditions.","mtbProject":"https://www.mtbproject.com/search?q=Mohican%20MTB%20Trail"},{"id":"baileys","name":"Baileys Trail System","region":"Southeast Ohio","lat":39.3987,"lon":-82.1307,"sensitivity":0.78,"drying":1.18,"canopy":0.76,"drainage":"Faster","official":"https://baileystrailsystem.org/trail-conditions/","note":"Purpose-built surfaces generally recover faster than legacy clay trails.","mtbProject":"https://www.mtbproject.com/search?q=Baileys%20Trail%20System"},{"id":"john-bryan","name":"John Bryan State Park","region":"Southwest Ohio","lat":39.7895,"lon":-83.8742,"sensitivity":1.2,"drying":0.82,"canopy":0.92,"drainage":"Slow","official":"https://www.mvmba.bike/trails","note":"Shaded natural surface can remain damp well after rain ends.","mtbProject":"https://www.mtbproject.com/search?q=John%20Bryan%20State%20Park"},{"id":"momba","name":"MoMBA / Huffman MetroPark","region":"Dayton Area","lat":39.8026,"lon":-84.0946,"sensitivity":1.04,"drying":0.96,"canopy":0.78,"drainage":"Medium","official":"https://www.mvmba.bike/trails","note":"Purpose-built loops with mixed soils and variable shade.","mtbProject":"https://www.mtbproject.com/search?q=MoMBA%20/%20Huffman%20MetroPark"},{"id":"germantown","name":"Germantown MetroPark","region":"Dayton Area","lat":39.637,"lon":-84.397,"sensitivity":1.1,"drying":0.88,"canopy":0.88,"drainage":"Medium-slow","official":"https://www.mvmba.bike/trails","note":"Wooded natural-surface trail with slower drying in low areas.","mtbProject":"https://www.mtbproject.com/search?q=Germantown%20MetroPark"},{"id":"mikes","name":"Mike's Bike Park","region":"Dayton Area","lat":39.7918,"lon":-84.1945,"sensitivity":0.35,"drying":1.35,"canopy":0.35,"drainage":"All-weather","official":"https://www.mvmba.bike/trails","note":"An urban bike facility that is much less rain-sensitive than woodland singletrack.","mtbProject":"https://www.mtbproject.com/search?q=Mike's%20Bike%20Park"},{"id":"caesar","name":"Caesar Creek State Park","region":"Southwest Ohio","lat":39.5151,"lon":-84.0528,"sensitivity":1.1,"drying":0.9,"canopy":0.84,"drainage":"Medium-slow","official":"https://www.mvmba.bike/trails","note":"Mixed-use natural trails can retain moisture after substantial rain.","mtbProject":"https://www.mtbproject.com/search?q=Caesar%20Creek%20State%20Park"},{"id":"east-fork","name":"East Fork State Park","region":"Cincinnati Area","lat":39.0172,"lon":-84.1302,"sensitivity":1.15,"drying":0.84,"canopy":0.86,"drainage":"Slow","official":"https://coramtb.org/","note":"Clay-heavy soils are often slow to recover after precipitation.","mtbProject":"https://www.mtbproject.com/search?q=East%20Fork%20State%20Park"},{"id":"harbin","name":"Harbin Park","region":"Cincinnati Area","lat":39.3309,"lon":-84.5602,"sensitivity":1.02,"drying":1.0,"canopy":0.72,"drainage":"Medium","official":"https://coramtb.org/","note":"Shorter urban trail system with mixed exposure and drainage.","mtbProject":"https://www.mtbproject.com/search?q=Harbin%20Park"},{"id":"huston","name":"Hueston Woods State Park","region":"Southwest Ohio","lat":39.5708,"lon":-84.7455,"sensitivity":1.13,"drying":0.84,"canopy":0.9,"drainage":"Slow","official":"https://coramtb.org/","note":"Heavily wooded natural trail with prolonged dampness after storms.","mtbProject":"https://www.mtbproject.com/search?q=Hueston%20Woods%20State%20Park"},{"id":"mitchell","name":"Mitchell Memorial Forest","region":"Cincinnati Area","lat":39.1641,"lon":-84.7743,"sensitivity":1.08,"drying":0.9,"canopy":0.85,"drainage":"Medium-slow","official":"https://coramtb.org/","note":"Wooded trail conditions depend strongly on recent rain and humidity.","mtbProject":"https://www.mtbproject.com/search?q=Mitchell%20Memorial%20Forest"},{"id":"mount-airy","name":"Mount Airy Forest","region":"Cincinnati Area","lat":39.177,"lon":-84.567,"sensitivity":1.1,"drying":0.88,"canopy":0.88,"drainage":"Medium-slow","official":"https://coramtb.org/","note":"Urban forest singletrack with shaded, moisture-retaining sections.","mtbProject":"https://www.mtbproject.com/search?q=Mount%20Airy%20Forest"},{"id":"bedford","name":"Bedford Singletrack","region":"Northeast Ohio","lat":41.3655,"lon":-81.5745,"sensitivity":1.04,"drying":0.95,"canopy":0.84,"drainage":"Medium","official":"https://www.clevelandmetroparks.com/parks/visit/activities/mountain-biking/trail-status","note":"Purpose-built Cleveland Metroparks singletrack with official status reporting.","mtbProject":"https://www.mtbproject.com/search?q=Bedford%20Singletrack"},{"id":"royalview","name":"Royalview Trail","region":"Northeast Ohio","lat":41.3146,"lon":-81.8128,"sensitivity":1.0,"drying":1.0,"canopy":0.8,"drainage":"Medium","official":"https://www.clevelandmetroparks.com/parks/visit/activities/mountain-biking/trail-status","note":"Designed singletrack that generally drains better than older trails.","mtbProject":"https://www.mtbproject.com/search?q=Royalview%20Trail"},{"id":"east-rim","name":"East Rim Trail","region":"Northeast Ohio","lat":41.2448,"lon":-81.5486,"sensitivity":0.96,"drying":1.05,"canopy":0.8,"drainage":"Medium-fast","official":"https://www.clevelandmetroparks.com/parks/visit/activities/mountain-biking/trail-status","note":"Purpose-built trail with managed closures and relatively good drainage.","mtbProject":"https://www.mtbproject.com/search?q=East%20Rim%20Trail"},{"id":"hampton","name":"Hampton Hills","region":"Northeast Ohio","lat":41.1458,"lon":-81.605,"sensitivity":1.08,"drying":0.92,"canopy":0.86,"drainage":"Medium-slow","official":"https://www.camba.us/","note":"Wooded rolling terrain with locally wet lower sections.","mtbProject":"https://www.mtbproject.com/search?q=Hampton%20Hills"},{"id":"vultures","name":"Vulture's Knob","region":"Northeast Ohio","lat":40.9215,"lon":-81.9386,"sensitivity":0.96,"drying":1.04,"canopy":0.78,"drainage":"Medium-fast","official":"https://www.vulturesknobmtb.com/","note":"Privately managed trail system; check operator status before traveling.","mtbProject":"https://www.mtbproject.com/search?q=Vulture's%20Knob"},{"id":"reagan","name":"Reagan Park","region":"Northeast Ohio","lat":41.1446,"lon":-81.8451,"sensitivity":1.03,"drying":0.96,"canopy":0.78,"drainage":"Medium","official":"https://www.camba.us/","note":"Compact trail system with variable drainage by loop.","mtbProject":"https://www.mtbproject.com/search?q=Reagan%20Park"},{"id":"west-branch","name":"West Branch State Park","region":"Northeast Ohio","lat":41.145,"lon":-81.105,"sensitivity":1.08,"drying":0.91,"canopy":0.86,"drainage":"Medium-slow","official":"https://www.camba.us/","note":"Wooded lakeside terrain can remain saturated after prolonged rainfall.","mtbProject":"https://www.mtbproject.com/search?q=West%20Branch%20State%20Park"},{"id":"quail-hollow","name":"Quail Hollow Park","region":"Northeast Ohio","lat":40.9896,"lon":-81.306,"sensitivity":1.1,"drying":0.88,"canopy":0.88,"drainage":"Medium-slow","official":"https://www.camba.us/","note":"Shaded natural trails may dry slowly in humid conditions.","mtbProject":"https://www.mtbproject.com/search?q=Quail%20Hollow%20Park"},{"id":"findley","name":"Findley State Park","region":"North-Central Ohio","lat":41.1286,"lon":-82.2181,"sensitivity":1.05,"drying":0.93,"canopy":0.84,"drainage":"Medium","official":"https://ohiodnr.gov/go-and-do/plan-a-visit/find-a-property/findley-state-park","note":"Wooded state-park loops with mixed soil and drainage.","mtbProject":"https://www.mtbproject.com/search?q=Findley%20State%20Park"},{"id":"horns-hill","name":"Horns Hill Bike Park","region":"Central Ohio","lat":40.1008,"lon":-82.3921,"sensitivity":0.82,"drying":1.14,"canopy":0.7,"drainage":"Fast","official":"https://www.hornshillbikepark.com/","note":"Gravity-oriented purpose-built trails; operator status should control.","mtbProject":"https://www.mtbproject.com/search?q=Horns%20Hill%20Bike%20Park"},{"id":"dillon","name":"Dillon State Park","region":"East-Central Ohio","lat":39.993,"lon":-82.0957,"sensitivity":1.07,"drying":0.92,"canopy":0.84,"drainage":"Medium-slow","official":"https://ohiodnr.gov/go-and-do/plan-a-visit/find-a-property/dillon-state-park","note":"Rolling wooded trail network with moisture-prone low areas.","mtbProject":"https://www.mtbproject.com/search?q=Dillon%20State%20Park"},{"id":"strouds","name":"Strouds Run State Park","region":"Southeast Ohio","lat":39.334,"lon":-82.017,"sensitivity":1.04,"drying":0.98,"canopy":0.87,"drainage":"Medium","official":"https://www.athensbicycleclub.org/","note":"Ridge and hollow terrain creates substantial variation in drying.","mtbProject":"https://www.mtbproject.com/search?q=Strouds%20Run%20State%20Park"},{"id":"sells","name":"Sells Park / Athens Trail Network","region":"Southeast Ohio","lat":39.3297,"lon":-82.082,"sensitivity":0.98,"drying":1.04,"canopy":0.82,"drainage":"Medium-fast","official":"https://www.athensbicycleclub.org/","note":"Extensive connected network with varied construction and exposure.","mtbProject":"https://www.mtbproject.com/search?q=Sells%20Park%20/%20Athens%20Trail%20Network"},{"id":"lake-hope","name":"Lake Hope State Park","region":"Southeast Ohio","lat":39.331,"lon":-82.357,"sensitivity":1.0,"drying":1.0,"canopy":0.9,"drainage":"Medium","official":"https://ohiodnr.gov/go-and-do/plan-a-visit/find-a-property/lake-hope-state-park","note":"Large forested network where conditions can vary greatly by ridge and hollow.","mtbProject":"https://www.mtbproject.com/search?q=Lake%20Hope%20State%20Park"},{"id":"scioto","name":"Scioto Trail State Park","region":"South-Central Ohio","lat":39.228,"lon":-82.951,"sensitivity":1.0,"drying":1.0,"canopy":0.88,"drainage":"Variable","official":"https://ohiodnr.gov/go-and-do/plan-a-visit/find-a-property/scioto-trail-state-park","note":"Backcountry-style terrain with variable surfaces and limited condition reporting.","mtbProject":"https://www.mtbproject.com/search?q=Scioto%20Trail%20State%20Park"},{"id":"oak-openings","name":"Oak Openings Preserve","region":"Northwest Ohio","lat":41.554,"lon":-83.846,"sensitivity":0.92,"drying":1.08,"canopy":0.66,"drainage":"Medium-fast","official":"https://metroparkstoledo.com/","note":"Sandy soils and open exposure can allow relatively quick drying.","mtbProject":"https://www.mtbproject.com/search?q=Oak%20Openings%20Preserve"},{"id":"jermain","name":"Jermain Park MTB Trail","region":"Northwest Ohio","lat":41.678,"lon":-83.593,"sensitivity":1.02,"drying":0.96,"canopy":0.72,"drainage":"Medium","official":"https://metroparkstoledo.com/","note":"Urban singletrack with mixed exposure and compact soils.","mtbProject":"https://www.mtbproject.com/search?q=Jermain%20Park%20MTB%20Trail"},{"id":"van-buren","name":"Van Buren State Park","region":"Northwest Ohio","lat":41.132,"lon":-83.65,"sensitivity":1.08,"drying":0.9,"canopy":0.82,"drainage":"Medium-slow","official":"https://ohiodnr.gov/go-and-do/plan-a-visit/find-a-property/van-buren-state-park","note":"Flat terrain can dry slowly after widespread rain.","mtbProject":"https://www.mtbproject.com/search?q=Van%20Buren%20State%20Park"},{"id":"mountwood","name":"Mountwood Park","region":"Ohio Valley / WV Border","lat":39.2017,"lon":-81.4225,"sensitivity":0.98,"drying":1.02,"canopy":0.86,"drainage":"Medium","official":"https://www.mountwoodpark.org/","note":"Included as a common Ohio-rider destination just across the state line.","mtbProject":"https://www.mtbproject.com/search?q=Mountwood%20Park"},{"id":"lake-vesuvius","name":"Lake Vesuvius Recreation Area","region":"Southern Ohio","lat":38.6,"lon":-82.631,"sensitivity":1.02,"drying":0.98,"canopy":0.9,"drainage":"Variable","official":"https://www.fs.usda.gov/recarea/wayne/recarea/?recid=6226","note":"Remote forest trails with limited real-time status information.","mtbProject":"https://www.mtbproject.com/search?q=Lake%20Vesuvius%20Recreation%20Area"}];
const sensitivityLabels={".75":"Low",".9":"Medium-low","1":"Medium","1.15":"Medium-high","1.3":"High"};
const dryingLabels={".7":"Very slow",".85":"Slow","1":"Average","1.15":"Fast","1.3":"Very fast"};
const canopyLabels={".35":"Open",".6":"Partial",".82":"Mostly shaded",".95":"Fully shaded"};
const drainageFactors={"Very poor":.82,"Poor":.9,"Average":1,"Good":1.1,"Excellent":1.2,"All-weather":1.35};
function normalizeDrainage(value){
 const text=String(value||'').toLowerCase();
 if(text.includes('all-weather'))return 'All-weather';
 if(text.includes('very poor'))return 'Very poor';
 if(text==='slow'||text.includes('medium-slow')||text.includes('poor'))return 'Poor';
 if(text.includes('fast')||text.includes('faster')||text.includes('good'))return 'Good';
 if(text.includes('excellent'))return 'Excellent';
 return 'Average';
}
function closestLabel(value,labels){const n=Number(value);return Object.entries(labels).sort((a,b)=>Math.abs(Number(a[0])-n)-Math.abs(Number(b[0])-n))[0]?.[1]||'Unknown'}
function shortSurface(value){return String(value).replace('Clay-heavy natural soil','Clay-heavy').replace('Loam/topsoil','Loam').replace('Sandy soil','Sandy').replace('Silty soil','Silty').replace('Rocky natural surface','Rocky').replace('Gravel/crushed stone','Gravel').replace('Machine-built aggregate','Aggregate').replace('Boardwalk/wood features','Wood features')}
function trailCharacteristics(t){const surfaces=Array.isArray(t.surfaces)&&t.surfaces.length?t.surfaces.map(shortSurface).join(' • '):'Not specified';return `<div class="characteristics"><strong>Trail characteristics</strong><span><b>Surface:</b> ${surfaces}</span><span><b>Rain sensitivity:</b> ${closestLabel(t.sensitivity,sensitivityLabels)}</span><span><b>Drying rate:</b> ${closestLabel(t.drying,dryingLabels)}</span><span><b>Canopy:</b> ${closestLabel(t.canopy,canopyLabels)}</span></div>`}
let results=[],markers=[],userLocation=null,userMarker=null,pickMode=false,pickTarget='access',pickMarker=null,selectedTrailId=null;
let customTrails=readJSON('customTrails',[]);
let developerMode=readJSON('developerMode',false);
let hiddenTrailIds=readJSON('hiddenTrailIds',[]);
let deletedTrailIds=readJSON('deletedTrailIds',[]);
let builtInOverrides=readJSON('builtInOverrides',{});
function readJSON(k,f){try{return JSON.parse(localStorage.getItem(k)||JSON.stringify(f))}catch(e){return f}}
function effectiveBaseTrail(t){return builtInOverrides[t.id]?{...t,...builtInOverrides[t.id],id:t.id}:t}
function allManagedTrails(){return [...baseTrails.map(t=>({...effectiveBaseTrail(t),source:'Built-in'})),...customTrails.map(t=>({...t,source:'Custom'}))]}
function catalog(){return allManagedTrails().filter(t=>!hiddenTrailIds.includes(t.id)&&!deletedTrailIds.includes(t.id)&&!['Hidden','Archived','Permanently closed'].includes(t.recordStatus))}
const map=L.map('map').setView([40.05,-82.75],7);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:18,attribution:'&copy; OpenStreetMap contributors'}).addTo(map);
let precipitationOverlay=null;
let precipitationEnabled=false;
const PRECIP_IMAGE_URL='https://mapservices.weather.noaa.gov/raster/rest/services/obs/mrms_qpe/ImageServer/exportImage';
function precipitationImageUrl(bounds){
  const size=map.getSize();
  const params=new URLSearchParams({
    f:'image',
    bbox:[bounds.getWest(),bounds.getSouth(),bounds.getEast(),bounds.getNorth()].join(','),
    bboxSR:'4326',
    imageSR:'4326',
    size:`${Math.max(300,Math.round(size.x))},${Math.max(300,Math.round(size.y))}`,
    format:'png32',
    transparent:'true',
    interpolation:'RSP_BilinearInterpolation',
    mosaicRule:JSON.stringify({mosaicMethod:'esriMosaicAttribute',where:"idp_subset = 'mrms_24h_co'",sortField:'idp_subset',sortValue:'mrms_24h_co',ascending:true}),
    renderingRule:JSON.stringify({rasterFunction:'rft_24hr'})
  });
  return `${PRECIP_IMAGE_URL}?${params.toString()}`;
}
function refreshPrecipitationOverlay(){
  if(!precipitationEnabled)return;
  const bounds=map.getBounds();
  const url=precipitationImageUrl(bounds);
  if(precipitationOverlay)map.removeLayer(precipitationOverlay);
  precipitationOverlay=L.imageOverlay(url,bounds,{opacity:.58,interactive:false,zIndex:250,errorOverlayUrl:''}).addTo(map);
}
const PrecipControl=L.Control.extend({
  options:{position:'topright'},
  onAdd(){
    const box=L.DomUtil.create('div','leaflet-bar');
    const button=L.DomUtil.create('button','',box);
    button.type='button';
    button.title='Show or hide NOAA 24-hour precipitation';
    button.setAttribute('aria-pressed','false');
    button.style.cssText='background:#fff;padding:8px 10px;border:0;border-radius:4px;font:700 12px system-ui;cursor:pointer;';
    button.textContent='24h rain';
    L.DomEvent.disableClickPropagation(box);
    L.DomEvent.on(button,'click',()=>{
      precipitationEnabled=!precipitationEnabled;
      button.setAttribute('aria-pressed',String(precipitationEnabled));
      button.style.background=precipitationEnabled?'#173f2a':'#fff';
      button.style.color=precipitationEnabled?'#fff':'#172019';
      if(precipitationEnabled)refreshPrecipitationOverlay();
      else if(precipitationOverlay){map.removeLayer(precipitationOverlay);precipitationOverlay=null;}
    });
    return box;
  }
});
map.addControl(new PrecipControl());
map.on('moveend zoomend',()=>{if(precipitationEnabled)refreshPrecipitationOverlay()});
setTimeout(()=>map.invalidateSize(),250);window.addEventListener('resize',()=>map.invalidateSize());
function trailWeatherLat(t){const n=Number(t.weatherLat);return Number.isFinite(n)?n:Number(t.lat)}
function trailWeatherLon(t){const n=Number(t.weatherLon);return Number.isFinite(n)?n:Number(t.lon)}
function updateLocationStatus(){
  const lat=Number(document.getElementById('lat').value),lon=Number(document.getElementById('lon').value);
  const weatherLat=Number(document.getElementById('weatherLat').value),weatherLon=Number(document.getElementById('weatherLon').value);
  document.getElementById('accessLocationStatus').textContent=Number.isFinite(lat)&&Number.isFinite(lon)&&document.getElementById('lat').value!==''?`Access: ${lat.toFixed(5)}, ${lon.toFixed(5)}`:'No access location selected';
  document.getElementById('weatherLocationStatus').textContent=Number.isFinite(weatherLat)&&Number.isFinite(weatherLon)&&document.getElementById('weatherLat').value!==''?`Weather: ${weatherLat.toFixed(5)}, ${weatherLon.toFixed(5)}`:'No weather center selected';
}
function beginPickMode(target='access'){
  pickMode=true;pickTarget=target;
  document.body.classList.add('map-picking');
  document.getElementById('pickBannerTitle').textContent=target==='weather'?'Choose the trail-system weather center':'Choose the access / parking location';
  document.getElementById('pickBanner').classList.add('show');
  document.getElementById('trailDialog').close();
  map.invalidateSize();
}
function cancelPickMode(){pickMode=false;document.body.classList.remove('map-picking');document.getElementById('pickBanner').classList.remove('show')}
function completePick(latlng){
  const isWeather=pickTarget==='weather';
  document.getElementById(isWeather?'weatherLat':'lat').value=latlng.lat.toFixed(6);
  document.getElementById(isWeather?'weatherLon':'lon').value=latlng.lng.toFixed(6);
  if(!isWeather&&!document.getElementById('weatherLat').value){
    document.getElementById('weatherLat').value=latlng.lat.toFixed(6);
    document.getElementById('weatherLon').value=latlng.lng.toFixed(6);
  }
  if(pickMarker)map.removeLayer(pickMarker);
  pickMarker=L.marker(latlng).addTo(map).bindPopup(isWeather?'Weather center':'Trail access').openPopup();
  cancelPickMode();updateLocationStatus();document.getElementById('trailDialog').showModal();
}
function copyAccessToWeather(){
  document.getElementById('weatherLat').value=document.getElementById('lat').value;
  document.getElementById('weatherLon').value=document.getElementById('lon').value;
  updateLocationStatus();
}
map.on('click',e=>{if(pickMode)completePick(e.latlng)});
window.addEventListener('keydown',e=>{if(e.key==='Escape'&&pickMode)cancelPickMode()});

function haversine(a,b,c,d){const R=3958.8,p=Math.PI/180,da=(c-a)*p,dl=(d-b)*p;const x=Math.sin(da/2)**2+Math.cos(a*p)*Math.cos(c*p)*Math.sin(dl/2)**2;return 2*R*Math.asin(Math.sqrt(x))}
function timeMs(value){
  const n=Number(value);
  if(Number.isFinite(n))return n>1e12?n:n*1000;
  return new Date(value).getTime();
}
function sumRange(v,t,h){const n=Date.now();return (v||[]).reduce((s,x,i)=>{const z=timeMs((t||[])[i]);return z<=n&&z>=n-h*3600000?s+(Number(x)||0):s},0)}
function avgRange(v,t,h){const n=Date.now();let s=0,c=0;(v||[]).forEach((x,i)=>{const z=timeMs((t||[])[i]);if(z<=n&&z>=n-h*3600000){s+=Number(x)||0;c++}});return c?s/c:0}
function lastRainLabel(values,times){
  const now=Date.now();
  let latest=null;
  (values||[]).forEach((value,i)=>{
    const when=timeMs((times||[])[i]);
    if(Number.isFinite(when)&&when<=now&&Number(value)>=0.005&&(latest===null||when>latest))latest=when;
  });
  if(latest===null)return '72+ hr ago';
  const hours=Math.max(0,Math.floor((now-latest)/3600000));
  if(hours<1)return 'Now';
  return `${hours} hr ago`;
}
function statusFrom(score,temp){if(temp<34&&score>32)return{key:'blue',label:'Freeze-thaw risk'};if(score<24)return{key:'green',label:'Likely good'};if(score<43)return{key:'yellow',label:'Use caution'};if(score<63)return{key:'orange',label:'Marginal'};return{key:'red',label:'Likely wet'}}
function readyEstimate(score,d){if(score<24)return'Now';const h=Math.max(4,Math.round((score-20)/(2.4*d)));return h<24?`~${h} hr`:`~${Math.ceil(h/24)} day${Math.ceil(h/24)>1?'s':''}`}
function rideColor(r){if(r>=76)return'#237a43';if(r>=58)return'#ffd400';if(r>=38)return'#ef7b22';return'#c53131'}
function formatInches(value){
  const n=Number(value);
  if(!Number.isFinite(n)||n<0)return 'Unavailable';
  return n.toFixed(2)+'\"';
}
function validMrmsRainInches(value){
  const rawMillimeters=Number(value);
  // NOAA describes the rendered MRMS product in inches, but getSamples
  // returns the underlying raster pixel values in millimeters. Convert once
  // here at the API boundary. Negative values are MRMS no-data flags.
  if(!Number.isFinite(rawMillimeters)||rawMillimeters<0||rawMillimeters>1000)return null;
  const inches=rawMillimeters/25.4;
  // A rolling 72-hour total above 20 inches in Ohio is almost certainly a
  // units/product error, so reject it instead of displaying a false value.
  return inches<=20?inches:null;
}
function getVotes(id){return readJSON('trailVote:'+id,null)}
function saveVote(id,value){
 const current=getVotes(id)||{};
 localStorage.setItem('trailVote:'+id,JSON.stringify({value,observations:current.observations||[],time:Date.now()}));
 render(); reopenReport(id)
}
function toggleObservation(id,observation){
 const current=getVotes(id)||{value:null,observations:[]};
 const observations=Array.isArray(current.observations)?[...current.observations]:[];
 const next=observations.includes(observation)?observations.filter(x=>x!==observation):[...observations,observation];
 localStorage.setItem('trailVote:'+id,JSON.stringify({value:current.value,observations:next,time:Date.now()}));
 render(); reopenReport(id)
}
function reopenReport(id){
 requestAnimationFrame(()=>{
  const panel=document.querySelector(`[data-report-panel="${id}"]`);
  const btn=document.querySelector(`[data-report-toggle="${id}"]`);
  if(panel&&btn){panel.classList.add('open');btn.setAttribute('aria-expanded','true')}
 })
}
const MRMS_URL='https://mapservices.weather.noaa.gov/raster/rest/services/obs/mrms_qpe/ImageServer/getSamples';
const RAIN_INNER_RADIUS_MILES=2;
const RAIN_OUTER_RADIUS_MILES=5;

const MRMS_CACHE_PREFIX='mrmsValid:';
const MRMS_ZERO_HOLD_MS=24*60*60*1000;
const MRMS_RAIN_EPSILON=.005;
const MRMS_MONOTONIC_TOLERANCE=.03;
const MRMS_MIN_STORM_TOTAL=.20;
const MRMS_MAX_SOURCE_RATIO=3.0;
function mrmsCacheKey(trailId){return MRMS_CACHE_PREFIX+trailId}
function readMrmsCache(trailId){
  const cached=readJSON(mrmsCacheKey(trailId),null);
  if(!cached||!Number.isFinite(Number(cached.savedAt)))return null;
  return cached;
}
function writeMrmsCache(trailId,rainfall){
  const payload={savedAt:Date.now(),r12:rainfall.r12,r24:rainfall.r24,r48:rainfall.r48,r72:rainfall.r72,r24Min:rainfall.r24Min,r24Max:rainfall.r24Max,r72Min:rainfall.r72Min,r72Max:rainfall.r72Max,sampleRadius:rainfall.sampleRadius,sampleCount:rainfall.sampleCount,lastRain:rainfall.lastRain||null};
  localStorage.setItem(mrmsCacheKey(trailId),JSON.stringify(payload));
}
function mrmsAllZero(rainfall){
  return [rainfall.r12,rainfall.r24,rainfall.r48,rainfall.r72].every(value=>(Number(value)||0)<MRMS_RAIN_EPSILON);
}
function meaningfulRain(rainfall){return (Number(rainfall?.r72)||0)>=MRMS_RAIN_EPSILON}
function rainfallOrderingInvalid(r){
  const values=[Number(r.r12)||0,Number(r.r24)||0,Number(r.r48)||0,Number(r.r72)||0];
  return values.some((value,index)=>index>0&&value+MRMS_MONOTONIC_TOLERANCE<values[index-1]);
}
function abruptMrmsDrop(current,cached){
  if(!cached||!meaningfulRain(cached))return false;
  const age=Date.now()-Number(cached.savedAt);
  if(!Number.isFinite(age)||age<0||age>MRMS_ZERO_HOLD_MS)return false;
  const old72=Number(cached.r72)||0,new72=Number(current.r72)||0;
  if(old72<MRMS_MIN_STORM_TOTAL)return false;
  const allowedRatio=age<=6*3600000?.55:age<=12*3600000?.35:.20;
  return new72<old72*allowedRatio && old72-new72>.15;
}
function sourceDisagreement(mrms,openMeteo){
  const a=Number(mrms?.r72)||0,b=Number(openMeteo?.r72)||0;
  if(Math.max(a,b)<MRMS_MIN_STORM_TOTAL)return false;
  if(Math.min(a,b)<MRMS_RAIN_EPSILON)return true;
  return Math.max(a,b)/Math.min(a,b)>MRMS_MAX_SOURCE_RATIO;
}
function describeMrmsProblem(mrms,cached,fallback){
  if(mrmsAllZero(mrms))return 'NOAA returned an all-zero precipitation field.';
  if(rainfallOrderingInvalid(mrms))return 'NOAA rolling totals were internally inconsistent (12/24/48/72-hour ordering failed).';
  if(abruptMrmsDrop(mrms,cached))return 'NOAA rainfall dropped implausibly compared with the last trustworthy reading.';
  if(sourceDisagreement(mrms,fallback))return 'NOAA and Open-Meteo disagreed substantially about the recent storm total.';
  return '';
}


function ringPoints(lat,lon,radiusMiles,count){
  const latMiles=69.0;
  const lonMiles=Math.max(1,69.172*Math.cos(Number(lat)*Math.PI/180));
  const points=[];
  for(let i=0;i<count;i++){
    const angle=(i/count)*Math.PI*2;
    points.push([
      Number(lon)+(Math.sin(angle)*radiusMiles/lonMiles),
      Number(lat)+(Math.cos(angle)*radiusMiles/latMiles)
    ]);
  }
  return points;
}
function rainfallSamplePoints(lat,lon){
  // Center + an 8-point two-mile ring + a 16-point five-mile ring.
  // Inner points carry 70% of the result and the outer ring carries 30%,
  // preserving local accuracy while representing a larger trail system.
  const inner=[[Number(lon),Number(lat)],...ringPoints(lat,lon,RAIN_INNER_RADIUS_MILES,8)];
  const outer=ringPoints(lat,lon,RAIN_OUTER_RADIUS_MILES,16);
  return{
    points:[...inner,...outer],
    weights:[...inner.map(()=>0.70/inner.length),...outer.map(()=>0.30/outer.length)]
  };
}
function weightedMedian(entries){
  const sorted=entries.slice().sort((a,b)=>a.value-b.value);
  const total=sorted.reduce((sum,e)=>sum+e.weight,0);
  let cumulative=0;
  for(const entry of sorted){
    cumulative+=entry.weight;
    if(cumulative>=total/2)return entry.value;
  }
  return sorted[sorted.length-1].value;
}
function rainStats(values,weights){
  const entries=[];
  values.forEach((value,i)=>{
    const clean=validMrmsRainInches(value);
    if(clean!==null)entries.push({value:clean,weight:Number(weights[i])||0,raw:Number(value)});
  });
  if(!entries.length)throw new Error('MRMS returned no usable rainfall samples');
  const weightTotal=entries.reduce((sum,e)=>sum+e.weight,0)||1;
  entries.forEach(e=>e.weight/=weightTotal);
  const sortedValues=entries.map(e=>e.value).sort((a,b)=>a-b);
  const average=entries.reduce((sum,e)=>sum+e.value*e.weight,0);
  const rawValues=entries.map(e=>e.raw).filter(Number.isFinite);
  return{
    median:weightedMedian(entries), average, min:sortedValues[0], max:sortedValues[sortedValues.length-1], count:entries.length,
    rawMin:Math.min(...rawValues), rawMax:Math.max(...rawValues), rawPreview:rawValues.slice(0,8)
  };
}
async function fetchMrmsPeriod(lat,lon,hours){
  const samplePlan=rainfallSamplePoints(lat,lon);
  const geometry={points:samplePlan.points,spatialReference:{wkid:4326}};
  const params=new URLSearchParams({
    f:'json',
    geometryType:'esriGeometryMultipoint',
    geometry:JSON.stringify(geometry),
    returnFirstValueOnly:'true',
    interpolation:'RSP_NearestNeighbor',
    mosaicRule:JSON.stringify({mosaicMethod:'esriMosaicAttribute',where:`idp_subset = 'mrms_${hours}h_co'`,sortField:'idp_subset',sortValue:`mrms_${hours}h_co`,ascending:true})
  });
  const requestUrl=`${MRMS_URL}?${params.toString()}`;
  const started=Date.now();
  const response=await fetch(requestUrl);
  if(!response.ok)throw new Error(`MRMS ${hours} hr request failed (HTTP ${response.status})`);
  const data=await response.json();
  if(data.error)throw new Error(data.error.message||'MRMS service error');
  const samples=Array.isArray(data.samples)?data.samples:[];
  const values=samples.map(sample=>sample?.value ?? sample?.values?.[0]);
  const sampleDetails=samplePlan.points.map((point,i)=>({
    lon:point[0],lat:point[1],weight:samplePlan.weights[i],raw:Number(values[i]),inches:validMrmsRainInches(values[i])
  }));
  return {...rainStats(values,samplePlan.weights),hours,httpStatus:response.status,durationMs:Date.now()-started,requestUrl,returnedSamples:samples.length,sampleDetails,rawResponse:data};
}

async function fetchMrmsRain(lat,lon){
  const periods=[12,24,48,72];
  const stats=await Promise.all(periods.map(h=>fetchMrmsPeriod(lat,lon,h)));
  const result={sampleRadius:RAIN_OUTER_RADIUS_MILES,sampleCount:stats[0]?.count||0,diagnostics:{ok:true,updatedAt:new Date().toISOString(),periods:stats}};
  periods.forEach((h,i)=>{
    result[`r${h}`]=stats[i].median; result[`r${h}Avg`]=stats[i].average; result[`r${h}Min`]=stats[i].min; result[`r${h}Max`]=stats[i].max;
  });
  return result;
}

async function fetchOpenMeteo(t){
  const p=new URLSearchParams({
    latitude:trailWeatherLat(t),
    longitude:trailWeatherLon(t),
    hourly:'temperature_2m,relative_humidity_2m,precipitation,cloud_cover,wind_speed_10m',
    past_hours:'18',
    forecast_hours:'48',
    temperature_unit:'fahrenheit',
    precipitation_unit:'inch',
    wind_speed_unit:'mph',
    timeformat:'unixtime',
    timezone:'GMT'
  });
  const res=await fetch('https://api.open-meteo.com/v1/forecast?'+p);
  if(!res.ok)throw Error('Current weather request failed');
  const json=await res.json();
  return json.hourly;
}
function isoDateUtc(ms){return new Date(ms).toISOString().slice(0,10)}
async function fetchHistoricalOpenMeteo(t){
  const now=Date.now();
  const p=new URLSearchParams({
    latitude:trailWeatherLat(t),
    longitude:trailWeatherLon(t),
    hourly:'precipitation',
    start_date:isoDateUtc(now-4*86400000),
    end_date:isoDateUtc(now),
    precipitation_unit:'inch',
    timeformat:'unixtime',
    timezone:'GMT'
  });
  const res=await fetch('https://historical-forecast-api.open-meteo.com/v1/forecast?'+p);
  if(!res.ok)throw Error(`Historical weather request failed (HTTP ${res.status})`);
  const json=await res.json();
  if(!json.hourly||!Array.isArray(json.hourly.time)||!Array.isArray(json.hourly.precipitation))throw Error('Historical weather response was incomplete');
  return json.hourly;
}
function rainfallFromHourly(hourly){
  const r12=sumRange(hourly.precipitation,hourly.time,12);
  const r24=sumRange(hourly.precipitation,hourly.time,24);
  const r48=sumRange(hourly.precipitation,hourly.time,48);
  const r72=sumRange(hourly.precipitation,hourly.time,72);
  return {r12,r24,r48,r72,r24Min:r24,r24Max:r24,r72Min:r72,r72Max:r72,sampleRadius:0,sampleCount:1,lastRain:lastRainLabel(hourly.precipitation,hourly.time)};
}

async function fetchTrail(t){
  const h=await fetchOpenMeteo(t);
  let historicalHourly=null;
  let historicalError='';
  try{historicalHourly=await fetchHistoricalOpenMeteo(t)}catch(error){historicalError=String(error?.message||error)}
  const liveFallback=rainfallFromHourly(h);
  const fallback=historicalHourly?rainfallFromHourly(historicalHourly):liveFallback;
  const historicalAvailable=!!historicalHourly;

  let rainfall=fallback;
  let rainSource='Open-Meteo fallback';
  let rainWarning='';
  let rainDiagnostics={ok:false,updatedAt:new Date().toISOString(),error:'Not attempted',historicalFallback:historicalAvailable?'available':('unavailable'+(historicalError?': '+historicalError:''))};
  let rainDataUncertain=false;
  const cached=readMrmsCache(t.id);
  const cacheAge=cached?Date.now()-Number(cached.savedAt):Infinity;

  try{
    const mrmsRainfall=await fetchMrmsRain(trailWeatherLat(t),trailWeatherLon(t));
    rainDiagnostics={...mrmsRainfall.diagnostics,historicalFallback:historicalAvailable?'available':('unavailable'+(historicalError?': '+historicalError:''))};
    const problem=describeMrmsProblem(mrmsRainfall,cached,fallback);

    if(!problem){
      rainfall={...mrmsRainfall,lastRain:fallback.lastRain};
      rainSource='NOAA MRMS radar · distance-weighted 5-mile sampling';
      writeMrmsCache(t.id,rainfall);
    }else if(cached&&cacheAge<=MRMS_ZERO_HOLD_MS&&meaningfulRain(cached)){
      rainfall={...cached,lastRain:cached.lastRain||fallback.lastRain};
      rainSource='Last trustworthy NOAA MRMS reading';
      rainDataUncertain=true;
      const ageMinutes=Math.max(1,Math.round(cacheAge/60000));
      const ageLabel=ageMinutes<60?ageMinutes+' min':Math.round(ageMinutes/60)+' hr';
      rainWarning=`${problem} Holding the last trustworthy NOAA reading from ${ageLabel} ago. `;
      rainDiagnostics={...rainDiagnostics,degraded:true,degradedReason:problem,safeguardSource:'Last trustworthy NOAA MRMS reading',cachedAt:new Date(Number(cached.savedAt)).toISOString(),candidate:{r12:mrmsRainfall.r12,r24:mrmsRainfall.r24,r48:mrmsRainfall.r48,r72:mrmsRainfall.r72},fallback:{r12:fallback.r12,r24:fallback.r24,r48:fallback.r48,r72:fallback.r72}};
    }else if(historicalAvailable&&!rainfallOrderingInvalid(fallback)){
      rainfall={...fallback};
      rainSource=historicalAvailable?'Open-Meteo historical forecast':'Open-Meteo live fallback';
      rainDataUncertain=true;
      rainWarning=`${problem} No trustworthy NOAA history was available, so ${historicalAvailable?'Open-Meteo historical hourly precipitation':'Open-Meteo live fallback'} is being used. `;
      rainDiagnostics={...rainDiagnostics,degraded:true,degradedReason:problem,safeguardSource:historicalAvailable?'Open-Meteo historical forecast':'Open-Meteo live fallback',candidate:{r12:mrmsRainfall.r12,r24:mrmsRainfall.r24,r48:mrmsRainfall.r48,r72:mrmsRainfall.r72},fallback:{r12:fallback.r12,r24:fallback.r24,r48:fallback.r48,r72:fallback.r72}};
    }else{
      rainDataUncertain=true;
      rainfall={...fallback};
      rainSource='Untrusted precipitation data';
      rainWarning=`${problem} Rainfall cannot be verified; rideability is withheld until data recovers. `;
      rainDiagnostics={...rainDiagnostics,degraded:true,degradedReason:problem,safeguardSource:'No source accepted',candidate:{r12:mrmsRainfall.r12,r24:mrmsRainfall.r24,r48:mrmsRainfall.r48,r72:mrmsRainfall.r72},fallback:{r12:fallback.r12,r24:fallback.r24,r48:fallback.r48,r72:fallback.r72}};
    }
  }catch(error){
    rainDiagnostics={ok:false,updatedAt:new Date().toISOString(),error:String(error?.message||error)};
    if(cached&&cacheAge<=MRMS_ZERO_HOLD_MS&&meaningfulRain(cached)){
      rainfall={...cached,lastRain:cached.lastRain||fallback.lastRain};
      rainSource='Last trustworthy NOAA MRMS reading';
      rainDataUncertain=true;
      rainWarning='NOAA radar was unavailable; holding the last trustworthy NOAA reading. ';
    }else if(meaningfulRain(fallback)){
      rainfall={...fallback};
      rainSource=historicalAvailable?'Open-Meteo historical forecast':'Open-Meteo live fallback';
      rainDataUncertain=true;
      rainWarning=historicalAvailable?'NOAA radar was unavailable; using Open-Meteo historical hourly precipitation. ':'NOAA radar was unavailable; using Open-Meteo live fallback cautiously. ';
    }else{
      rainDataUncertain=true;
      rainWarning='Rainfall data could not be verified. ';
    }
    console.warn('MRMS fallback for',t.name,error);
  }

  const {r12,r24,r48,r72}=rainfall;
  const hum=avgRange(h.relative_humidity_2m,h.time,12);
  const wind=avgRange(h.wind_speed_10m,h.time,12);
  const cloud=avgRange(h.cloud_cover,h.time,12);
  const temps=h.temperature_2m.filter((_,i)=>{
    const x=timeMs(h.time[i]);
    return x<=Date.now()&&x>=Date.now()-43200000;
  });
  const temp=temps.length?Math.min(...temps):50;
  const sensitivity=Number(t.sensitivity||1),drying=Number(t.drying||1),canopy=Number(t.canopy||.82);
  const drainage=normalizeDrainage(t.drainage);
  const effectiveDrying=drying*(drainageFactors[drainage]||1);
  const mm12=r12*25.4, mm24=r24*25.4, mm48=r48*25.4, mm72=r72*25.4;
  const rain=(mm12*5+mm24*2.4+mm48*.8+mm72*.25)*sensitivity;
  const sat=Math.min(22,mm72*.75*sensitivity);
  const hp=Math.max(0,(hum-68)*.28)*canopy;
  const cp=Math.max(0,(cloud-55)*.08)*canopy;
  const dry=(Math.max(0,wind-3)*.55+Math.max(0,temp-55)*.16)*effectiveDrying;
  const cold=temp<38?(38-temp)*1.05:0;
  const score=Math.max(0,Math.min(100,rain+sat+hp+cp+cold-dry));
  const lastRain=rainDataUncertain&&rainSource==='Untrusted precipitation data'?'Uncertain':(rainfall.lastRain||fallback.lastRain);
  const computedRideability=Math.round(100-score);
  const computedStatus=statusFrom(score,temp);
  const computedReady=readyEstimate(score,effectiveDrying);

  return{
    ...t,
    rain12:r12,rain24:r24,rain48:r48,rain72:r72,lastRain,
    rain24Min:rainfall.r24Min ?? r24,rain24Max:rainfall.r24Max ?? r24,
    rain72Min:rainfall.r72Min ?? r72,rain72Max:rainfall.r72Max ?? r72,
    rainSampleRadius:rainfall.sampleRadius||0,rainSampleCount:rainfall.sampleCount||1,
    rainSource,rainWarning,rainDiagnostics,rainDataUncertain,
    humidity:hum,wind,tempMin:temp,score,
    rideability:rainSource==='Untrusted precipitation data'?null:computedRideability,
    status:rainSource==='Untrusted precipitation data'?{key:'yellow',label:'Rain data unavailable'}:computedStatus,
    ready:rainSource==='Untrusted precipitation data'?'Check official status':computedReady,
    distance:userLocation?haversine(userLocation.lat,userLocation.lon,t.lat,t.lon):null
  };
}
function escapeHtml(value){return String(value??'').replace(/[&<>"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch]))}
function sampleHeatmapSvg(period){
  const points=Array.isArray(period?.sampleDetails)?period.sampleDetails:[];
  if(!points.length)return '<p class="diag-muted">No sample-point data available.</p>';
  const usable=points.filter(p=>Number.isFinite(p.inches));
  const max=Math.max(...usable.map(p=>p.inches),0.01),min=Math.min(...usable.map(p=>p.inches),0);
  const lats=points.map(p=>p.lat),lons=points.map(p=>p.lon);
  const minLat=Math.min(...lats),maxLat=Math.max(...lats),minLon=Math.min(...lons),maxLon=Math.max(...lons);
  const px=p=>20+((p.lon-minLon)/(maxLon-minLon||1))*220;
  const py=p=>240-(20+((p.lat-minLat)/(maxLat-minLat||1))*220);
  const circles=points.map((p,i)=>{
    const ratio=Number.isFinite(p.inches)?(p.inches-min)/(max-min||1):0;
    const light=88-ratio*46;
    const fill=Number.isFinite(p.inches)?`hsl(205 78% ${light}%)`:'#bbb';
    const radius=i===0?7:(i<9?5.5:4.5);
    const label=Number.isFinite(p.inches)?`${p.inches.toFixed(2)} in`:'No data';
    return `<circle cx="${px(p).toFixed(1)}" cy="${py(p).toFixed(1)}" r="${radius}" fill="${fill}" stroke="#173f2a" stroke-width="1"><title>Sample ${i+1}: ${label}; weight ${(p.weight*100).toFixed(1)}%</title></circle>`;
  }).join('');
  return `<div class="sample-map"><svg viewBox="0 0 260 260" role="img" aria-label="Rainfall sampling heat map">${circles}<circle cx="130" cy="130" r="2" fill="#fff" stroke="#173f2a"/></svg><div><b>24-hour sample map</b><span>Darker points received more rain. Center and inner-ring samples carry 70% of the result; the outer ring carries 30%.</span><span>Range: ${formatInches(min)}–${formatInches(max)}</span></div></div>`;
}
function developerDetails(d){
  if(!developerMode||!d.ok)return '';
  const p24=(d.periods||[]).find(p=>p.hours===24)||(d.periods||[])[0];
  if(!p24)return '';
  const raw=JSON.stringify(p24.rawResponse,null,2);
  return `<div class="developer-details"><h4>Developer details</h4>${sampleHeatmapSvg(p24)}<div class="dev-stats"><span><b>Weighted median</b>${formatInches(p24.median)}</span><span><b>Weighted average</b>${formatInches(p24.average)}</span><span><b>Minimum</b>${formatInches(p24.min)}</span><span><b>Maximum</b>${formatInches(p24.max)}</span></div><details><summary>Exact NOAA request URL</summary><pre>${escapeHtml(p24.requestUrl)}</pre></details><details><summary>Raw NOAA JSON response</summary><pre>${escapeHtml(raw)}</pre></details><details><summary>All 25 sample points</summary><div class="diag-table-wrap"><table><thead><tr><th>#</th><th>Latitude</th><th>Longitude</th><th>Weight</th><th>Raw</th><th>Inches</th></tr></thead><tbody>${(p24.sampleDetails||[]).map((p,i)=>`<tr><td>${i+1}</td><td>${p.lat.toFixed(5)}</td><td>${p.lon.toFixed(5)}</td><td>${(p.weight*100).toFixed(1)}%</td><td>${Number.isFinite(p.raw)?p.raw.toFixed(3):'No data'}</td><td>${Number.isFinite(p.inches)?p.inches.toFixed(3):'No data'}</td></tr>`).join('')}</tbody></table></div></details></div>`;
}
function rainfallDiagnosticsPanel(r){
  if(!developerMode)return '';
  const d=r.rainDiagnostics||{};
  const updated=d.updatedAt?new Date(d.updatedAt).toLocaleString():'Unknown';
  const coords=`${trailWeatherLat(r).toFixed(5)}, ${trailWeatherLon(r).toFixed(5)}`;
  if(!d.ok){
    return `<details class="rain-diagnostics"><summary>Rainfall diagnostics</summary><div class="diag-status diag-error">NOAA MRMS failed — Open-Meteo fallback is displayed</div><dl><dt>Weather coordinates</dt><dd>${coords}</dd><dt>Error</dt><dd>${escapeHtml(d.error||'Unknown error')}</dd><dt>Attempted</dt><dd>${updated}</dd><dt>Fallback 24 hr</dt><dd>${formatInches(r.rain24)}</dd><dt>Fallback 72 hr</dt><dd>${formatInches(r.rain72)}</dd></dl></details>`;
  }
  const rows=(d.periods||[]).map(p=>`<tr><td>${p.hours} hr</td><td>${p.httpStatus}</td><td>${p.returnedSamples}/${p.count}</td><td>${Number(p.rawMin).toFixed(3)}–${Number(p.rawMax).toFixed(3)}</td><td>${formatInches(p.median)}</td><td>${p.durationMs} ms</td></tr>`).join('');
  const diagClass=d.degraded?'diag-warning':'diag-ok';
  const diagText=d.degraded?'NOAA responded, but precipitation data was rejected':'NOAA MRMS data accepted';
  const safeguard=d.degraded?`<dt>Safeguard</dt><dd>${escapeHtml(d.degradedReason||'Suspicious all-zero precipitation field detected.')} ${d.safeguardSource?`Using ${escapeHtml(d.safeguardSource)}.`:''}</dd>`:'';
  return `<details class="rain-diagnostics"><summary>Rainfall diagnostics</summary><div class="diag-status ${diagClass}">${diagText}</div><dl><dt>Weather coordinates</dt><dd>${coords}</dd><dt>Updated</dt><dd>${updated}</dd><dt>Conversion</dt><dd>Raw raster value ÷ 25.4 = inches</dd>${safeguard}<dt>Historical fallback</dt><dd>${escapeHtml(d.historicalFallback||'not checked')}</dd><dt>Developer mode</dt><dd>${developerMode?'On — expanded technical data is available below':'Off'}</dd></dl><div class="diag-table-wrap"><table><thead><tr><th>Period</th><th>HTTP</th><th>Samples</th><th>Raw range</th><th>Median used</th><th>Time</th></tr></thead><tbody>${rows}</tbody></table></div>${developerDetails(d)}</details>`;
}

function currentDistance(trail){
  if(!userLocation) return null;
  const lat=Number(trail.lat),lon=Number(trail.lon);
  if(!Number.isFinite(lat)||!Number.isFinite(lon)) return null;
  return haversine(userLocation.lat,userLocation.lon,lat,lon);
}
function sortedFiltered(){
  const q=document.getElementById('search').value.toLowerCase();
  const f=document.getElementById('statusFilter').value;
  const s=document.getElementById('sort').value;

  let a=results
    .map(r=>({...r,distance:currentDistance(r)}))
    .filter(r=>(f==='all'||r.status.key===f)&&([r.name,r.region,r.aliases||''].join(' ').toLowerCase().includes(q)));

  if(s==='distance'){
    a.sort((x,y)=>{
      const xd=Number.isFinite(x.distance)?x.distance:Infinity;
      const yd=Number.isFinite(y.distance)?y.distance:Infinity;
      return xd-yd || x.name.localeCompare(y.name);
    });
  }else if(s==='rideability'){
    a.sort((x,y)=>(Number.isFinite(y.rideability)?y.rideability:-1)-(Number.isFinite(x.rideability)?x.rideability:-1));
  }else{
    a.sort((x,y)=>x.name.localeCompare(y.name));
  }
  return a;
}
function selectTrail(id,{moveMap=true,scrollCard=false}={}){
  const trail=results.find(r=>r.id===id);
  if(!trail)return;
  selectedTrailId=id;

  document.querySelectorAll('.trail.map-selected').forEach(card=>card.classList.remove('map-selected'));
  const card=document.getElementById(`trail-card-${id}`);
  if(card){
    card.classList.add('map-selected');
    if(scrollCard)card.scrollIntoView({behavior:'smooth',block:'center'});
  }

  markers.forEach(marker=>{
    const selected=marker.trailId===id;
    if(marker.setStyle)marker.setStyle({radius:selected?11:8,weight:selected?4:2});
    if(selected)marker.bringToFront?.();
  });

  const lat=trailWeatherLat(trail),lon=trailWeatherLon(trail);
  if(moveMap&&Number.isFinite(lat)&&Number.isFinite(lon)){
    map.flyTo([lat,lon],Math.max(map.getZoom(),12),{duration:.65});
  }
  const marker=markers.find(m=>m.trailId===id);
  if(marker)marker.openPopup();
}

function render(){
  if(userLocation){
    results=results.map(r=>({...r,distance:currentDistance(r)}));
  }
  const arr=sortedFiltered();document.getElementById('trailList').innerHTML=arr.length?arr.map(r=>{const vote=getVotes(r.id);return `<article class="trail" id="trail-card-${r.id}" data-trail-card="${r.id}"><div class="trail-top"><div><h2><button type="button" class="trail-name-btn" data-select-trail="${r.id}" aria-label="Show ${r.name} on map">${r.name}</button></h2><div class="sub">${r.region} · ${r.distance==null?'Distance unavailable':r.distance.toFixed(1)+' mi away'}</div></div><span class="badge ${r.status.key}">${r.status.label}</span></div><div class="facts"><div class="fact"><b>${r.lastRain||'Unknown'}</b><span>last rain</span></div><div class="fact"><b>${formatInches(r.rain72)}</b><span>total rain</span><small>last 72 hr</small></div><div class="fact"><b>${r.ready}</b><span>ready in</span></div></div><div class="ride-row"><span>Rideability</span><span>${r.rideability==null?'Unavailable':r.rideability+'%'}</span></div><div class="bar"><div style="width:${r.rideability==null?0:r.rideability}%;background:${r.rideability==null?'#a0a8a3':rideColor(r.rideability)}"></div></div>${trailCharacteristics(r)}<div class="explain">${r.weatherError?'Live weather could not be loaded for this trail. ':''}${r.rainWarning||''}${r.note?'<b>Notes:</b> '+r.note+' ':''}${r.weatherError?'':'Rainfall sampled across a '+r.rainSampleRadius+'-mile trail area. 24-hour range: '+formatInches(r.rain24Min)+'–'+formatInches(r.rain24Max)+'. Humidity '+Math.round(r.humidity)+'%, wind '+Math.round(r.wind)+' mph. Rain source: '+(r.rainSource||'unknown')+'. Weather center: '+trailWeatherLat(r).toFixed(4)+', '+trailWeatherLon(r).toFixed(4)+'.'}</div>${rainfallDiagnosticsPanel(r)}<div class="links">${r.official?`<a href="${r.official}" target="_blank">Official status</a>`:''}${r.mtbProject?`<a href="${r.mtbProject}" target="_blank">MTB Project</a>`:''}${r.trailforksUrl?`<a href="${r.trailforksUrl}" target="_blank">Trailforks</a>`:''}<a href="https://www.google.com/maps/search/?api=1&query=${r.lat},${r.lon}" target="_blank">Directions</a></div><div class="community">
<button type="button" class="report-toggle" data-report-toggle="${r.id}" aria-expanded="false">
  <span>${vote?'Update your trail report':'Report trail conditions'}</span>
  <span class="chev">⌄</span>
</button>
<div class="report-panel" data-report-panel="${r.id}">
  <div class="community-title"><span>Overall ride recommendation <small style="font-weight:500;color:var(--muted)">(choose one)</small></span><span>${vote?'Saved on this device':'No report yet'}</span></div>
  <div class="vote-buttons" data-id="${r.id}" role="radiogroup" aria-label="Overall ride recommendation">
  ${[
  ['Absolutely','Great conditions. Worth the drive.'],
  ['Yes — a few wet spots','Rideable with a few puddles or soft areas.'],
  ['Rideable — expect mud','Rideable, but expect cleanup afterward.'],
  ["I'd wait",'Too many wet or soft sections today.'],
  ['Closed','Officially closed or should not be ridden.']
  ].map(([v,tip])=>`<button type="button" data-vote="${v}" role="radio" aria-checked="${vote&&vote.value===v?'true':'false'}" title="${tip}" class="${vote&&vote.value===v?'selected':''}">${v}</button>`).join('')}
  </div>
  <div class="observation-wrap" data-observe-id="${r.id}">
    <div class="observation-label">Additional observations <span style="font-weight:500">(choose any that apply)</span></div>
    <div class="observation-buttons">
    ${['A few puddles','Frequent puddles','Tires picked up mud','Soft sections','Creek crossings high','Fallen trees','Trail maintenance','Dusty','Perfect traction'].map(o=>`<button type="button" data-observation="${o}" aria-pressed="${vote&&Array.isArray(vote.observations)&&vote.observations.includes(o)?'true':'false'}" class="${vote&&Array.isArray(vote.observations)&&vote.observations.includes(o)?'selected':''}">${o}</button>`).join('')}
    </div>
  </div>
  <div class="community-result">${vote?`You reported: ${vote.value||'No recommendation'}${vote.observations&&vote.observations.length?'. '+vote.observations.join(', '):''}`:'Choose one overall recommendation, then select any additional observations that apply.'}</div>
</div>
</div></article>`}).join(''):'<div class="loading">No trails match.</div>';
document.querySelectorAll('[data-select-trail]').forEach(btn=>btn.addEventListener('click',()=>selectTrail(btn.dataset.selectTrail,{moveMap:true,scrollCard:false})));
document.querySelectorAll('[data-vote]').forEach(b=>b.addEventListener('click',()=>saveVote(b.closest('[data-id]').dataset.id,b.dataset.vote)));
document.querySelectorAll('[data-observation]').forEach(b=>b.addEventListener('click',()=>toggleObservation(b.closest('[data-observe-id]').dataset.observeId,b.dataset.observation)));
document.querySelectorAll('[data-report-toggle]').forEach(btn=>btn.addEventListener('click',()=>{
  const id=btn.dataset.reportToggle;
  const panel=document.querySelector(`[data-report-panel="${id}"]`);
  const open=!panel.classList.contains('open');
  panel.classList.toggle('open',open);
  btn.setAttribute('aria-expanded',String(open));
}));
markers.forEach(m=>map.removeLayer(m));markers=[];
arr.forEach(r=>{
  const m=L.circleMarker([trailWeatherLat(r),trailWeatherLon(r)],{
    radius:8,
    weight:2,
    color:'#fff',
    fillColor:rideColor(r.rideability),
    fillOpacity:.95
  })
  .bindTooltip(`<b>${r.name}</b><br>${r.rideability}% rideability`,{
    direction:'top',
    offset:[0,-8],
    opacity:.96,
    sticky:true
  })
  .bindPopup(`<b>${r.name}</b><br>${r.rideability}% rideability${r.distance!=null?'<br>'+r.distance.toFixed(1)+' miles away':''}`)
  .addTo(map);

  m.trailId=r.id;
  m.on('click',()=>selectTrail(r.id,{moveMap:false,scrollCard:true}));
  markers.push(m);
});
if(selectedTrailId&&arr.some(r=>r.id===selectedTrailId))selectTrail(selectedTrailId,{moveMap:false,scrollCard:false});
document.getElementById('goodCount').textContent=results.filter(r=>r.status.key==='green').length;const best=[...results].filter(r=>Number.isFinite(r.rideability)).sort((a,b)=>b.rideability-a.rideability)[0];document.getElementById('bestTrail').textContent=best?best.name:'–';const near=[...results].filter(r=>r.distance!=null).sort((a,b)=>a.distance-b.distance)[0];document.getElementById('nearestTrail').textContent=near?near.name:'Use location';setTimeout(()=>map.invalidateSize(),100)}
async function load(focusTrail=null){
  document.getElementById('trailList').innerHTML='<div class="loading">Loading live weather for Ohio trails…</div>';
  const trails=catalog();
  const settled=await Promise.allSettled(trails.map(fetchTrail));

  results=settled.map((item,index)=>{
    if(item.status==='fulfilled') return item.value;
    const t=trails[index];
    return {
      ...t,
      rain12:0,
      lastRain:'Unknown',
      rain24:0,
      rain48:0,
      rain72:0,
      rain24Min:0, rain24Max:0, rain72Min:0, rain72Max:0, rainSampleRadius:0, rainSampleCount:0,
      rainSource:'Unavailable',
      rainWarning:'Rain data unavailable. ',
      humidity:0,
      wind:0,
      tempMin:50,
      score:0,
      rideability:null,
      status:{key:'yellow',label:'Weather unavailable'},
      ready:'Check official status',
      distance:userLocation?haversine(userLocation.lat,userLocation.lon,t.lat,t.lon):null,
      weatherError:true
    };
  });

  document.getElementById('updated').textContent=new Date().toLocaleTimeString([],{hour:'numeric',minute:'2-digit'});
  render();
  renderAdmin();

  if(focusTrail)selectTrail(focusTrail.id,{moveMap:true,scrollCard:false});
}
function locate(){const b=document.getElementById('locate');if(!navigator.geolocation){alert('Location is not supported in this browser.');return}b.textContent='Locating…';navigator.geolocation.getCurrentPosition(pos=>{userLocation={lat:pos.coords.latitude,lon:pos.coords.longitude};results=results.map(r=>({...r,distance:haversine(userLocation.lat,userLocation.lon,r.lat,r.lon)}));if(userMarker)map.removeLayer(userMarker);userMarker=L.circleMarker([userLocation.lat,userLocation.lon],{radius:8,color:'#173f2a',fillColor:'#fff',fillOpacity:1,weight:3}).bindPopup('Your location').addTo(map);map.setView([userLocation.lat,userLocation.lon],8);b.textContent='Location enabled';document.getElementById('sort').value='distance';render()},()=>{b.textContent='Use my location';alert('Location was not shared.')})}
function slug(s){return s.toLowerCase().trim().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')+'-'+Date.now().toString(36)}
function clearExistingSelectOptions(){
 document.querySelectorAll('option[data-existing-value="true"]').forEach(option=>option.remove());
}
function setNearestSelectValue(selectId,value,fallback){
 const select=document.getElementById(selectId);
 const target=Number(value);
 const numericOptions=[...select.options].filter(option=>Number.isFinite(Number(option.value)));
 if(!Number.isFinite(target)||!numericOptions.length){select.value=String(fallback);return;}
 const nearest=numericOptions.reduce((best,option)=>Math.abs(Number(option.value)-target)<Math.abs(Number(best.value)-target)?option:best,numericOptions[0]);
 select.value=nearest.value;
}
function clearPickState(removeMarker=true){
 pickMode=false;
 document.body.classList.remove('map-picking');
 document.getElementById('pickBanner').classList.remove('show');
 if(removeMarker&&pickMarker){map.removeLayer(pickMarker);pickMarker=null}
}
function setFormMode(editing,name=''){
 document.getElementById('trailDialogTitle').textContent=editing?`Edit ${name||'trail'}`:'Manage trail catalog';
 document.getElementById('saveTrailButton').textContent=editing?'Save changes':'Save trail';
}
function resetForm(){
 clearExistingSelectOptions();
 document.getElementById('trailForm').reset();
 document.getElementById('editingId').value='';
 document.getElementById('lat').value='';
 document.getElementById('lon').value='';
 document.getElementById('weatherLat').value='';
 document.getElementById('weatherLon').value='';
 document.querySelectorAll('#surfaceChecks input').forEach(x=>x.checked=false);
 clearPickState(true);
 setFormMode(false);
 updateLocationStatus();
}
function formTrail(){const surfaces=[...document.querySelectorAll('#surfaceChecks input:checked')].map(x=>x.value);const existing=document.getElementById('editingId').value;return{id:existing||slug(document.getElementById('trailName').value),name:document.getElementById('trailName').value.trim(),aliases:document.getElementById('aliases').value.trim(),listingType:document.getElementById('listingType').value,region:document.getElementById('region').value,lat:Number(document.getElementById('lat').value),lon:Number(document.getElementById('lon').value),weatherLat:Number(document.getElementById('weatherLat').value),weatherLon:Number(document.getElementById('weatherLon').value),organization:document.getElementById('organization').value.trim(),recordStatus:document.getElementById('recordStatus').value,official:document.getElementById('officialUrl').value.trim(),mtbProject:document.getElementById('mtbUrl').value.trim(),trailforksUrl:document.getElementById('trailforksUrl').value.trim(),sensitivity:Number(document.getElementById('sensitivity').value),drying:Number(document.getElementById('drying').value),canopy:Number(document.getElementById('canopy').value),drainage:document.getElementById('drainage').value,surfaces,note:document.getElementById('notes').value.trim(),dateVerified:new Date().toISOString().slice(0,10)}}
async function saveTrail(e){
  e.preventDefault();
  const button=document.getElementById('saveTrailButton');
  const originalText=button.textContent;
  const t=formTrail();

  if(!t.name){alert('Please enter a trail name.');document.getElementById('trailName').focus();return;}
  if(!Number.isFinite(t.lat)||!Number.isFinite(t.lon)||document.getElementById('lat').value===''||document.getElementById('lon').value===''){
    alert('Please choose the access / parking location before saving.');return;
  }
  if(!Number.isFinite(t.weatherLat)||!Number.isFinite(t.weatherLon)||document.getElementById('weatherLat').value===''||document.getElementById('weatherLon').value===''){
    alert('Please choose the trail-system weather center before saving.');return;
  }

  button.disabled=true;
  button.textContent='Saving…';
  try{
    const base=baseTrails.find(x=>x.id===t.id);
    const existingRecord=allManagedTrails().find(x=>x.id===t.id)||{};
    const savedTrail={...existingRecord,...t,id:t.id};
    delete savedTrail.source;

    if(base){
      // Store only a complete, merged record so older built-in metadata is not lost.
      builtInOverrides[t.id]=savedTrail;
      localStorage.setItem('builtInOverrides',JSON.stringify(builtInOverrides));
    }else{
      const i=customTrails.findIndex(x=>x.id===t.id);
      if(i>=0) customTrails[i]=savedTrail; else customTrails.push(savedTrail);
      localStorage.setItem('customTrails',JSON.stringify(customTrails));
    }
    hiddenTrailIds=hiddenTrailIds.filter(id=>id!==t.id);
    deletedTrailIds=deletedTrailIds.filter(id=>id!==t.id);
    localStorage.setItem('hiddenTrailIds',JSON.stringify(hiddenTrailIds));
    localStorage.setItem('deletedTrailIds',JSON.stringify(deletedTrailIds));

    // Update the visible record immediately instead of waiting for every Ohio
    // trail's weather request to finish before the edited card changes.
    const previousResult=results.find(x=>x.id===savedTrail.id);
    if(previousResult){
      results=results.map(x=>x.id===savedTrail.id?{...x,...savedTrail}:x);
      render();
    }

    clearPickState(true);
    const dialog=document.getElementById('trailDialog');
    if(dialog.open)dialog.close();
    resetForm();

    // Refresh this trail's weather and model values independently. A weather
    // failure must not undo or hide the catalog edit that was just saved.
    try{
      const refreshed=await fetchTrail(savedTrail);
      results=results.map(x=>x.id===savedTrail.id?refreshed:x);
      if(!results.some(x=>x.id===savedTrail.id))results.push(refreshed);
      render();
      map.setView([trailWeatherLat(savedTrail),trailWeatherLon(savedTrail)],Math.max(map.getZoom(),11));
      const marker=markers.find(m=>m.trailId===savedTrail.id);
      if(marker)marker.openPopup();
    }catch(weatherError){
      console.warn('Trail saved, but weather refresh failed',weatherError);
      if(!previousResult){
        results.push({...savedTrail,rain12:0,lastRain:'Unknown',rain24:0,rain48:0,rain72:0,rain24Min:0,rain24Max:0,rain72Min:0,rain72Max:0,rainSampleRadius:0,rainSampleCount:0,rainSource:'Unavailable',rainWarning:'Rain data unavailable. ',humidity:0,wind:0,tempMin:50,score:0,rideability:null,status:{key:'yellow',label:'Weather unavailable'},ready:'Check official status',weatherError:true});
        render();
      }
    }
    renderAdmin();
    alert(`${savedTrail.name} was saved.`);
  }catch(error){
    console.error('Could not save trail',error);
    alert('The trail could not be saved. Your form has been left intact so you can try again.');
  }finally{
    button.disabled=false;
    button.textContent=originalText;
  }
}
function setSelectTextValue(selectId,value,fallback){
 const select=document.getElementById(selectId);
 const wanted=value||fallback;
 const existing=[...select.options].find(option=>option.value===wanted);
 if(existing){select.value=wanted;return;}
 const option=document.createElement('option');
 option.value=wanted;
 option.textContent=`${wanted} — existing value`;
 option.dataset.existingValue='true';
 select.appendChild(option);
 select.value=wanted;
}
function populateTrailForm(t){
 clearPickState(true);
 clearExistingSelectOptions();
 document.getElementById('trailForm').reset();
 setFormMode(true,t.name||'trail');
 document.getElementById('editingId').value=t.id||'';
 document.getElementById('trailName').value=t.name||'';
 document.getElementById('aliases').value=Array.isArray(t.aliases)?t.aliases.join(', '):(t.aliases||'');
 setSelectTextValue('listingType',t.listingType,'Trail system');
 setSelectTextValue('region',t.region,'Central Ohio');
 document.getElementById('lat').value=t.lat??'';
 document.getElementById('lon').value=t.lon??'';
 document.getElementById('weatherLat').value=trailWeatherLat(t)??'';
 document.getElementById('weatherLon').value=trailWeatherLon(t)??'';
 document.getElementById('organization').value=t.organization||'';
 document.getElementById('recordStatus').value=['Active','Temporarily closed','Seasonally closed','Permanently closed'].includes(t.recordStatus)?t.recordStatus:'Active';
 document.getElementById('officialUrl').value=t.official||t.officialUrl||'';
 document.getElementById('mtbUrl').value=t.mtbProject||t.mtbUrl||'';
 document.getElementById('trailforksUrl').value=t.trailforksUrl||t.trailforks||'';
 setNearestSelectValue('sensitivity',t.sensitivity??1,1);
 setNearestSelectValue('drying',t.drying??1,1);
 setNearestSelectValue('canopy',t.canopy??.82,.82);
 document.getElementById('drainage').value=normalizeDrainage(t.drainage);
 document.getElementById('notes').value=t.note||t.notes||'';
 const storedSurfaces=Array.isArray(t.surfaces)?t.surfaces:(t.surface?[t.surface]:[]);
 document.querySelectorAll('#surfaceChecks input').forEach(input=>input.checked=storedSurfaces.includes(input.value));
 updateLocationStatus();
 if(Number.isFinite(Number(t.lat))&&Number.isFinite(Number(t.lon))){
   pickMarker=L.marker([trailWeatherLat(t),trailWeatherLon(t)]).addTo(map).bindPopup((t.name||'Trail')+' weather center');
 }
 const dialog=document.getElementById('trailDialog');
 if(!dialog.open)dialog.showModal();
 dialog.scrollTop=0;
 document.querySelector('.modal-body')?.scrollTo({top:0,behavior:'auto'});
}
function editTrail(id){const t=allManagedTrails().find(x=>x.id===id);if(t)populateTrailForm(t)}
function setHidden(id,hidden){
 hiddenTrailIds=hidden?[...new Set([...hiddenTrailIds,id])]:hiddenTrailIds.filter(x=>x!==id);
 localStorage.setItem('hiddenTrailIds',JSON.stringify(hiddenTrailIds));
 load();
}
function deleteTrail(id){
 const custom=customTrails.some(t=>t.id===id);
 const name=(allManagedTrails().find(t=>t.id===id)||{}).name||'this trail';
 if(!confirm(`Delete ${name} from the app? You can restore built-in trails later from Manage trails.`))return;
 hiddenTrailIds=hiddenTrailIds.filter(x=>x!==id);
 if(custom){
   customTrails=customTrails.filter(x=>x.id!==id);
   localStorage.setItem('customTrails',JSON.stringify(customTrails));
 }else{
   deletedTrailIds=[...new Set([...deletedTrailIds,id])];
   localStorage.setItem('deletedTrailIds',JSON.stringify(deletedTrailIds));
 }
 localStorage.setItem('hiddenTrailIds',JSON.stringify(hiddenTrailIds));
 load();
}
function restoreDeleted(id){deletedTrailIds=deletedTrailIds.filter(x=>x!==id);localStorage.setItem('deletedTrailIds',JSON.stringify(deletedTrailIds));load()}
function resetBuiltIn(id){
 const base=baseTrails.find(t=>t.id===id);if(!base)return;
 if(!confirm(`Reset ${base.name} to its original built-in information?`))return;
 delete builtInOverrides[id];
 localStorage.setItem('builtInOverrides',JSON.stringify(builtInOverrides));
 load();
}
function renderAdmin(){
 const q=(document.getElementById('adminSearch')?.value||'').trim().toLowerCase();
 const rows=allManagedTrails()
  .filter(t=>!q||[t.name,t.region,t.aliases||'',t.source].join(' ').toLowerCase().includes(q))
  .sort((a,b)=>a.name.localeCompare(b.name))
  .map(t=>{
    const hidden=hiddenTrailIds.includes(t.id),deleted=deletedTrailIds.includes(t.id),edited=t.source==='Built-in'&&Boolean(builtInOverrides[t.id]);
    const state=deleted?'Deleted':hidden?'Hidden':'Visible';
    const actions=deleted
      ? `<button type="button" data-restore="${t.id}">Restore</button>`
      : `<button type="button" data-edit="${t.id}">Edit</button><button type="button" data-hide="${t.id}">${hidden?'Show':'Hide'}</button>${edited?`<button type="button" data-reset="${t.id}">Reset</button>`:''}<button type="button" class="danger" data-delete="${t.id}">Delete</button>`;
    return `<div class="admin-row ${hidden?'is-hidden':''} ${deleted?'is-deleted':''}"><div><strong><span class="status-dot"></span>${t.name}</strong><br><small>${t.source}${edited?' · edited':''} · ${state} · ${t.region||'Region unavailable'}</small></div><div class="admin-actions">${actions}</div></div>`;
  });
 document.getElementById('adminRows').innerHTML=rows.join('')||'<p><small>No matching trails.</small></p>';
 document.querySelectorAll('[data-edit]').forEach(b=>b.onclick=()=>editTrail(b.dataset.edit));
 document.querySelectorAll('[data-hide]').forEach(b=>b.onclick=()=>setHidden(b.dataset.hide,!hiddenTrailIds.includes(b.dataset.hide)));
 document.querySelectorAll('[data-delete]').forEach(b=>b.onclick=()=>deleteTrail(b.dataset.delete));
 document.querySelectorAll('[data-restore]').forEach(b=>b.onclick=()=>restoreDeleted(b.dataset.restore));
 document.querySelectorAll('[data-reset]').forEach(b=>b.onclick=()=>resetBuiltIn(b.dataset.reset));
}
function exportData(){const blob=new Blob([JSON.stringify({customTrails,hiddenTrailIds,deletedTrailIds,builtInOverrides},null,2)],{type:'application/json'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='ohio-trail-edits.json';a.click();URL.revokeObjectURL(a.href)}
document.getElementById('search').addEventListener('input',render);document.getElementById('statusFilter').addEventListener('change',render);document.getElementById('sort').addEventListener('change',render);document.getElementById('locate').addEventListener('click',locate);
function updateDeveloperUI(){const b=document.getElementById('developerMode'),manage=document.getElementById('manage');b.textContent=developerMode?'Developer: On':'Developer';b.setAttribute('aria-pressed',String(developerMode));b.classList.toggle('is-active',developerMode);manage.hidden=!developerMode}
document.getElementById('developerMode').addEventListener('click',()=>{developerMode=!developerMode;localStorage.setItem('developerMode',JSON.stringify(developerMode));updateDeveloperUI();render()});updateDeveloperUI();
document.getElementById('manage').onclick=()=>{clearPickState(true);renderAdmin();updateLocationStatus();const d=document.getElementById('trailDialog');if(!d.open)d.showModal()};document.getElementById('adminSearch')?.addEventListener('input',renderAdmin);document.getElementById('closeDialog').onclick=()=>{clearPickState(true);document.getElementById('trailDialog').close();resetForm()};document.getElementById('trailForm').onsubmit=saveTrail;document.getElementById('resetForm').onclick=resetForm;document.getElementById('pickAccessOnMap').onclick=()=>beginPickMode('access');document.getElementById('pickWeatherOnMap').onclick=()=>beginPickMode('weather');document.getElementById('copyAccessToWeather').onclick=copyAccessToWeather;document.getElementById('cancelPick').onclick=()=>{clearPickState(false);const d=document.getElementById('trailDialog');if(!d.open)d.showModal()};document.getElementById('exportTrails').onclick=exportData;document.getElementById('importTrails').onchange=e=>{const f=e.target.files[0];if(!f)return;const reader=new FileReader();reader.onload=()=>{try{const d=JSON.parse(reader.result);customTrails=Array.isArray(d.customTrails)?d.customTrails:[];hiddenTrailIds=Array.isArray(d.hiddenTrailIds)?d.hiddenTrailIds:[];deletedTrailIds=Array.isArray(d.deletedTrailIds)?d.deletedTrailIds:[];builtInOverrides=d.builtInOverrides&&typeof d.builtInOverrides==='object'?d.builtInOverrides:{};localStorage.setItem('customTrails',JSON.stringify(customTrails));localStorage.setItem('hiddenTrailIds',JSON.stringify(hiddenTrailIds));localStorage.setItem('deletedTrailIds',JSON.stringify(deletedTrailIds));localStorage.setItem('builtInOverrides',JSON.stringify(builtInOverrides));load();alert('Trail edits imported.')}catch(err){alert('That file could not be imported.')}};reader.readAsText(f)};
document.getElementById('trailDialog').addEventListener('cancel',()=>{clearPickState(true);resetForm()});
load();
