import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root=path.join(path.dirname(fileURLToPath(import.meta.url)),'..');
const modelSource=fs.readFileSync(path.join(root,'supabase','functions','_shared','moisture-model.js'),'utf8');
const {calculateShadowMoisture,stormEventsFromHourly,trailHydrology}=await import(`data:text/javascript;base64,${Buffer.from(modelSource).toString('base64')}`);
const now=Date.UTC(2026,7,15,17);

function hourlyWith(events,{humidity=72,wind=5,solar=250,evap=.004,vpd=.8}={}){
  const time=[],precipitation=[],relative_humidity_2m=[],wind_speed_10m=[],shortwave_radiation=[];
  const evapotranspiration=[],et0_fao_evapotranspiration=[],vapour_pressure_deficit=[];
  for(let offset=-14*24;offset<=120;offset++){
    const timestamp=now+offset*3600000;
    time.push(timestamp/1000);
    precipitation.push(events.filter(event=>event.offset===offset).reduce((sum,event)=>sum+event.rain,0));
    relative_humidity_2m.push(humidity);wind_speed_10m.push(wind);shortwave_radiation.push(solar);
    evapotranspiration.push(evap);et0_fao_evapotranspiration.push(evap);vapour_pressure_deficit.push(vpd);
  }
  return{time,precipitation,relative_humidity_2m,wind_speed_10m,shortwave_radiation,evapotranspiration,et0_fao_evapotranspiration,vapour_pressure_deficit};
}

function spreadStorm(total,endOffset,hours=6){
  return Array.from({length:hours},(_,index)=>({offset:endOffset-hours+1+index,rain:total/hours}));
}

const chestnut={sensitivity:1.16,canopy:.82,effectiveDrying:.93,soilProfile:{dominantSoil:'Silt Loam',secondarySoil:'Clay Loam',soilDryingFactor:.93,confidence:'High'}};
const greatSeal={sensitivity:1.02,canopy:.82,effectiveDrying:.94,soilProfile:{dominantSoil:'Silt Loam',secondarySoil:'Loam',soilDryingFactor:.94,confidence:'High'}};
const chestnutHourly=hourlyWith([...spreadStorm(6.35,-96,12),...spreadStorm(.5,-18,4)],{humidity:84,wind:4,solar:190,evap:.0025,vpd:.45});
const sealHourly=hourlyWith([...spreadStorm(.74,-96,8),...spreadStorm(1.29,-30,8)],{humidity:82,wind:4,solar:210,evap:.003,vpd:.55});
const chestnutModel=calculateShadowMoisture({trail:chestnut,historicalHourly:chestnutHourly,forecastHourly:chestnutHourly,authoritativeRainfall:{r72:.5},rainQuality:'trusted',now});
const sealModel=calculateShadowMoisture({trail:greatSeal,historicalHourly:sealHourly,forecastHourly:sealHourly,authoritativeRainfall:{r72:1.29},rainQuality:'trusted',now});

assert.equal(chestnutModel.shadowOnly,true,'V80 must remain shadow-only');
assert(chestnutModel.subsurfaceSaturation>sealModel.subsurfaceSaturation,'Six inches on clay must retain more subsurface saturation than the smaller Great Seal event');
assert(chestnutModel.rideability<sealModel.rideability,'Chestnut must not rate drier than Great Seal in the comparison event');
assert(chestnutModel.biggestStorm.totalRain>6,'The older Chestnut storm must survive newer rain');
assert(chestnutModel.readyAt,'Forecast readiness must be calculated when forecast data exists');

const events=stormEventsFromHourly(chestnutHourly,now,14);
assert.equal(events.length,2,'Storms separated by twelve dry hours must remain distinct');
assert(events[0].totalRain>6&&events[1].totalRain>=.49,'Both older and newer rain events must be retained');

const fast=trailHydrology({sensitivity:.9,canopy:.25,effectiveDrying:1.25,soilProfile:{dominantSoil:'Sand'}});
const slow=trailHydrology(chestnut);
assert(fast.subsurfaceHalfLifeHours<slow.subsurfaceHalfLifeHours,'Fast-draining tread must recover faster than clay-sensitive tread');

const lighter=calculateShadowMoisture({trail:chestnut,historicalHourly:hourlyWith(spreadStorm(2,-96,8)),forecastHourly:hourlyWith([]),now});
const heavier=calculateShadowMoisture({trail:chestnut,historicalHourly:hourlyWith(spreadStorm(6,-96,8)),forecastHourly:hourlyWith([]),now});
assert(heavier.rideability<lighter.rideability,'More rain of the same age must never improve rideability');

const mohican={sensitivity:1.03,canopy:.9,effectiveDrying:.95,soilProfile:{dominantSoil:'Silt Loam',secondarySoil:'Clay Loam',soilDryingFactor:.95,confidence:'High'}};
const mohicanHourly=hourlyWith([
  ...spreadStorm(2.087,-120,6),
  {offset:-8,rain:.048}
],{humidity:92,wind:3.7,solar:120,evap:.0015,vpd:.25});
const mohicanModel=calculateShadowMoisture({
  trail:mohican,
  historicalHourly:mohicanHourly,
  forecastHourly:mohicanHourly,
  authoritativeRainfall:{r12:.89,r24:.98,r48:1.34,r72:1.37},
  rainQuality:'trusted',
  now
});
assert.equal(mohicanModel.rainBalance.balanced,true,'NOAA rainfall must balance exactly into the model ledger');
assert.equal(mohicanModel.rainBalance.target72,1.37,'The full NOAA 72-hour total must be retained');
assert.equal(mohicanModel.rainBalance.allocated72,1.37,'The model must allocate every authoritative inch');
assert.deepEqual(mohicanModel.rainBalance.bands.map(item=>item.target),[.89,.09,.36,.03],'Rolling totals must become exact non-overlapping bands');
assert(mohicanModel.rideability<58,'Mohican must not appear mostly recovered during the documented recent storm');
assert.notEqual(mohicanModel.readyAt,new Date(now).toISOString(),'Significant 12-hour rain must not display Ready Now');
assert(Math.abs(mohicanModel.cardStorm.totalRain-2.087)<.001,'The earlier storm tile and explanation must use the same event ledger');

for(const sourceRain of [0,.01,.137,1.37,13.7]){
  const mismatchHourly=hourlyWith(sourceRain?spreadStorm(sourceRain,-8,4):[],{humidity:90,wind:3,solar:100,evap:.001,vpd:.2});
  const mismatch=calculateShadowMoisture({trail:mohican,historicalHourly:mismatchHourly,forecastHourly:mismatchHourly,authoritativeRainfall:{r12:1.37,r24:1.37,r48:1.37,r72:1.37},rainQuality:'trusted',now});
  assert.equal(mismatch.rainBalance.allocated72,1.37,`NOAA balance must survive a ${sourceRain} inch timing-source total`);
}
const traceBand=calculateShadowMoisture({trail:mohican,historicalHourly:hourlyWith([]),forecastHourly:hourlyWith([]),authoritativeRainfall:{r12:1,r24:1.1,r48:1.2,r72:1.2039},rainQuality:'trusted',now});
assert.equal(traceBand.rainBalance.balanced,true,'Trace-sized NOAA bands must remain in exact rainfall balance');
assert.equal(traceBand.rainBalance.allocated72,1.2039,'A sub-threshold band must not disappear from the moisture ledger');

const source=fs.readFileSync(path.join(root,'js','app.js'),'utf8');
const edge=fs.readFileSync(path.join(root,'supabase','functions','weather-refresh','index.ts'),'utf8');
const sql=fs.readFileSync(path.join(root,'supabase','v80-shadow-moisture-model.sql'),'utf8');
assert(source.includes("if(!developerMode||!r.shadowModel)return ''"),'Detailed model diagnostics must remain hidden outside Developer Mode');
assert(source.includes('V80 is the active card rating'),'Developer diagnostics must identify V80 as active');
assert(source.includes("moistureModel:shadow?'v80':'v79-fallback'"),'Fresh V80 snapshots must drive the public card with a transitional V79 fallback');
assert(edge.includes('calculateShadowMoisture'),'Shared weather worker must calculate V80 centrally');
assert(edge.includes("params.set('forecast_days', '6')"),'Readiness must receive at least five forecast days');
assert(edge.includes('fetchTimed'),'External weather calls must have a bounded timeout');
assert(edge.includes("'Open-Meteo combined history and forecast'"),'Weather timeout diagnostics must identify the failed source');
assert(edge.includes("params.set('past_days', String(MOISTURE_HISTORY_DAYS))"),'One combined request must supply the 14-day model history');
assert(!edge.includes('historical-forecast-api.open-meteo.com'),'The slow separate historical service must not return');
assert(edge.includes('const OPEN_METEO_BATCH = 20'),'Historical weather batches must remain small enough to return reliably');
assert(edge.includes('Promise.all(chunks(trails, OPEN_METEO_BATCH).map'),'State weather batches must load concurrently');
assert(edge.includes('Number(b.idp_validendtime) - Number(a.idp_validendtime)'),'NOAA catalog rollovers must select the newest raster');
assert(edge.includes('savePreviousSnapshots'),'A short external outage must retain the last verified snapshot');
assert(edge.includes('PREVIOUS_SNAPSHOT_HOLD_MS = 12'),'Delayed-weather fallback must remain time limited');
assert(edge.includes('weatherLastVerifiedAt'),'Repeated fallback refreshes must not reset the verified-data age');
assert(source.includes('Update delayed; showing the last verified weather.'),'Delayed weather must be disclosed on the card');
assert(source.includes("const shadow=r.shadowModel"),'The card must read storm context from the active moisture ledger');
assert(!modelSource.includes('clamp(.25, 4, target / measured)'),'The rainfall-loss scaling ceiling must not return');
assert(sql.includes('create table if not exists public.trail_storm_events'),'Persistent storm-event ledger missing');
assert(sql.includes('create table if not exists public.trail_moisture_states'),'Persistent moisture state missing');

console.log(JSON.stringify({
  chestnut:{rideability:chestnutModel.rideability,surface:chestnutModel.surfaceMoisture,subsurface:chestnutModel.subsurfaceSaturation},
  greatSeal:{rideability:sealModel.rideability,surface:sealModel.surfaceMoisture,subsurface:sealModel.subsurfaceSaturation},
  mohican:{rideability:mohicanModel.rideability,status:mohicanModel.status.label,readyAt:mohicanModel.readyAt,rainBalance:mohicanModel.rainBalance}
},null,2));
console.log('V80 shadow-moisture tests passed.');
