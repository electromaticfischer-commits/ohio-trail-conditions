const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const appPath = path.join(root, 'js', 'app.js');
const trailDataPath = path.join(root, 'js', 'trail-data.js');
const source = fs.readFileSync(appPath, 'utf8');
const trails = JSON.parse(source.match(/^const baseTrails=(.+);$/m)[1]);
const profiles = JSON.parse(source.match(/^const soilProfiles=(.+);$/m)[1]);

const bluegrass = 'https://kymbabluegrass.org/trails';
const southwest = 'https://kymba.org/bowlinggreen/';
const louisville = 'https://kymba.org/louisville/';
const stateParks = 'https://parks.ky.gov/things-to-do/trails/mountain-bike-destinations';
const mtbProject = 'https://www.mtbproject.com/directory/8008333/kentucky';

const seeds = [
  ['ky-silver-creek-bike-park','Silver Creek Bike Park','Berea',37.5687,-84.2869,'Bike park',bluegrass,'KYMBA Bluegrass'],
  ['ky-capitol-view-park','Capitol View Park','Frankfort',38.179228,-84.870889,'Trail system',bluegrass,'KYMBA Bluegrass'],
  ['ky-deer-haven-park','Deer Haven Park','Lexington',38.009524,-84.389278,'Trail system',bluegrass,'KYMBA Bluegrass'],
  ['ky-veterans-park','Veterans Park','Lexington',37.955108,-84.503522,'Trail system',bluegrass,'KYMBA Bluegrass'],
  ['ky-knucklehead','Knucklehead Trails','Versailles',38.040929,-84.818338,'Trail system',bluegrass,'KYMBA Bluegrass / Life Adventure Center'],
  ['ky-skullbuster','Skullbuster','Scott County',38.329407,-84.626672,'Trail system',bluegrass,'KYMBA Bluegrass'],
  ['ky-west-sixth-farm','West Sixth Farm','Franklin County',38.279631,-84.854351,'Trail system',bluegrass,'KYMBA Bluegrass / West Sixth Farm'],
  ['ky-waverly-park','Waverly Park','Louisville',38.128511,-85.831492,'Trail system',louisville,'KYMBA Louisville'],
  ['ky-cherokee-seneca','Cherokee / Seneca Park Trails','Louisville',38.233442,-85.681581,'Trail system',louisville,'KYMBA Louisville'],
  ['ky-fort-duffield','Fort Duffield','West Point',37.99169,-85.945443,'Trail system',louisville,'KYMBA Louisville'],
  ['ky-silo-center-bike-park','Silo Center Bike Park','Louisville',38.115245,-85.533749,'Bike park',louisville,'KYMBA Louisville / The Parklands'],
  ['ky-turkey-run-park','Turkey Run Park','Louisville',38.120467,-85.528326,'Trail system',louisville,'KYMBA Louisville / The Parklands'],
  ['ky-briar-hill-park','Briar Hill Park','Oldham County',38.3548,-85.4577,'Trail system',louisville,'KYMBA Louisville'],
  ['ky-devou-park','Devou Park','Northern Kentucky',39.079196,-84.535035,'Trail system','https://coratrails.org/trails','Cincinnati Off-Road Alliance'],
  ['ky-england-idlewild','England-Idlewild Park','Northern Kentucky',39.041879,-84.733472,'Trail system','https://coratrails.org/trails','Cincinnati Off-Road Alliance'],
  ['ky-rudy-mine-ben-hawes','Rudy Mine Trails at Ben Hawes Park','Owensboro',37.785618,-87.202492,'Trail system',southwest,'Southwest KYMBA / Owensboro Parks'],
  ['ky-low-hollow','Low Hollow at Riverfront Bike Park','Bowling Green',37.002054,-86.423984,'Trail system',southwest,'Southwest KYMBA / Bowling Green Parks'],
  ['ky-big-hollow','Big Hollow at Mammoth Cave','Mammoth Cave',37.206132,-86.138402,'Trail system','https://www.nps.gov/maca/planyourvisit/bicycling.htm','National Park Service / Southwest KYMBA'],
  ['ky-brier-creek','Brier Creek Trail System','Nolin Lake',37.297529,-86.212486,'Trail system','https://parks.ky.gov/explore/brier-creek-trail-system-8137','Kentucky State Parks / Southwest KYMBA'],
  ['ky-grapevine-lake','Grapevine Lake Trail System','Madisonville',37.298894,-87.481042,'Trail system',southwest,'Southwest KYMBA'],
  ['ky-twisted-oliver','Twisted Oliver','Barren River Lake',36.887203,-86.125178,'Trail system',southwest,'Southwest KYMBA'],
  ['ky-cave-creek','Cave Creek Trail','Rough River Lake',37.6157,-86.5008,'Trail system',southwest,'Southwest KYMBA'],
  ['ky-pennyrile','Pennyrile Forest MTB Trails','Pennyrile Forest',37.073133,-87.663355,'Trail system',southwest,'Kentucky State Parks / Southwest KYMBA'],
  ['ky-highlander','Highlander Trail System','Barren River Lake',36.861359,-86.060804,'Trail system',southwest,'Kentucky State Parks / Southwest KYMBA'],
  ['ky-lbl-canal-loop','Land Between the Lakes — Canal Loop','Western Kentucky',36.970825,-88.198876,'Trail system',stateParks,'US Forest Service / Kentucky State Parks'],
  ['ky-bo-beckett','Bo Beckett Memorial Trail System','Kentucky Lake',36.991128,-88.280291,'Trail system',stateParks,'Kentucky State Parks'],
  ['ky-livingston-county','Livingston County Trail System','Western Kentucky',37.036259,-88.270328,'Trail system',mtbProject,'MTB Project riding-area reference'],
  ['ky-hammond-creek','Hammond Creek at Lee Jones Park','Eddyville',37.079816,-88.084018,'Trail system',mtbProject,'MTB Project riding-area reference'],
  ['ky-mcdougal-lake','McDougal Lake Trail System','Central Kentucky',37.553733,-85.689901,'Trail system',mtbProject,'MTB Project riding-area reference'],
  ['ky-green-river-lake','Green River Lake Trail System','Central Kentucky',37.273064,-85.322568,'Trail system',stateParks,'Kentucky State Parks'],
  ['ky-pulaski-county-park','Pulaski County Park Trail System','Somerset',37.066799,-84.700576,'Trail system',stateParks,'Pulaski County / Kentucky State Parks'],
  ['ky-cave-run-limestone','Cave Run Lake / Limestone Loop','Eastern Kentucky',38.123719,-83.524376,'Trail system',stateParks,'US Forest Service / Kentucky State Parks'],
  ['ky-laurel-lake-forty-five','Laurel Lake — The Forty 5','Southern Kentucky',36.962787,-84.272421,'Trail system',stateParks,'US Forest Service / Kentucky State Parks'],
  ['ky-sugarcamp-mountain','Sugarcamp Mountain Trail System','Eastern Kentucky',37.695729,-82.755171,'Trail system',stateParks,'Kentucky State Parks'],
  ['ky-big-south-fork','Big South Fork — Kentucky Trail','Southern Kentucky',36.60632,-84.648312,'Trail system','https://www.nps.gov/biso/planyourvisit/mountainbikeriding.htm','National Park Service'],
  ['ky-michael-tygart','Michael Tygart Loop at Greenbo Lake','Northeast Kentucky',38.488103,-82.890462,'Trail system','https://parks.ky.gov/explore/michael-tygart-loop-trail-8002','Kentucky State Parks']
];

const soilCode = source.slice(source.indexOf("const USDA_SOIL_ENDPOINT="), source.indexOf('function profileMatchesTrailLocation'));
const soilContext = {fetch, console};
vm.createContext(soilContext);
vm.runInContext(`${soilCode}\nglobalThis.researchSoilProfile=researchSoilProfile;`, soilContext);

const escapeSql = value => `'${String(value).replaceAll("'", "''")}'`;
const neutralProfile = trail => ({
  dominantSoil:'Undetermined', secondarySoil:null, naturalDrainage:'Unknown', soilDryingFactor:1,
  textureFactor:1, drainageFactor:1, confidence:'Low', sampleCoverage:'0/17',
  soilLat:trail.lat, soilLon:trail.lon, source:'USDA NRCS SSURGO via Soil Data Access',
  researchedAt:new Date().toISOString(), samplingMethod:'17 distributed riding-area samples; no usable automatic result, so neutral factors and Developer Mode adjustment remain available.'
});

async function main(){
  const kentucky=[];
  for(const [id,name,region,lat,lon,listingType,official,organization] of seeds){
    const trail={id,name,region:region.includes('Kentucky')?region:`${region}, Kentucky`,countryCode:'US',stateCode:'KY',listingType,recordStatus:'Active',lat,lon,weatherLat:lat,weatherLon:lon,sensitivity:1,canopy:.82,official,organization,note:'Verified natural-surface mountain-bike riding system. Posted land-manager closures and rules control.',geometryVersion:1,routeSource:{name:organization.includes('MTB Project')?'MTB Project riding area':'Kentucky mountain-bike organization or land manager',url:official,license:'Linked public riding-area reference'},dateVerified:'2026-08-16'};
    try{
      trail.soilProfile=await soilContext.researchSoilProfile(lat,lon);
      trail.soilProfile.samplingMethod='17 distributed center-area locations around the verified riding-area center';
      console.log(`${name}: ${trail.soilProfile.dominantSoil} (${trail.soilProfile.sampleCoverage})`);
    }catch(error){
      trail.soilProfile=neutralProfile(trail);
      trail.soilProfile.limitation=error.message;
      console.warn(`${name}: neutral soil fallback — ${error.message}`);
    }
    kentucky.push(trail);
    profiles[id]=trail.soilProfile;
  }

  const merged=[...trails.filter(trail=>trail.stateCode!=='KY'),...kentucky].sort((a,b)=>(a.stateCode||'OH').localeCompare(b.stateCode||'OH')||a.name.localeCompare(b.name));
  const updateDataFile=file=>{
    const text=fs.readFileSync(file,'utf8');
    const next=text
      .replace(/^const baseTrails=.+;$/m,`const baseTrails=${JSON.stringify(merged)};`)
      .replace(/^const soilProfiles=.+;$/m,`const soilProfiles=${JSON.stringify(profiles)};`);
    fs.writeFileSync(file,next);
  };
  updateDataFile(appPath);
  updateDataFile(trailDataPath);

  const sqlRows=kentucky.map(trail=>{
    const profile=trail.soilProfile;
    const usable=Number.parseInt(profile.sampleCoverage,10)||0;
    return `insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)\nvalues (${escapeSql(trail.id)}, ${escapeSql(trail.name)}, 'US', 'KY', ${escapeSql(trail.region)}, ${escapeSql(trail.listingType)}, 'Active', ST_SetSRID(ST_MakePoint(${trail.lon}, ${trail.lat}), 4326)::extensions.geography, ST_SetSRID(ST_MakePoint(${trail.weatherLon}, ${trail.weatherLat}), 4326)::extensions.geography, ${escapeSql(JSON.stringify(trail))}::jsonb, 1)\non conflict (id) do update set name=excluded.name, country_code=excluded.country_code, state_code=excluded.state_code, region=excluded.region, listing_type=excluded.listing_type, record_status=excluded.record_status, location=excluded.location, weather_location=excluded.weather_location, data=excluded.data, geometry_version=excluded.geometry_version, updated_at=now();\n\ninsert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)\nvalues (${escapeSql(trail.id)}, 1, ${escapeSql(JSON.stringify(profile))}::jsonb, ${escapeSql(profile.confidence)}, ${usable}, ST_SetSRID(ST_MakePoint(${trail.lon}, ${trail.lat}), 4326)::extensions.geography, 'USDA NRCS SSURGO')\non conflict (trail_id, geometry_version) do update set profile=excluded.profile, confidence=excluded.confidence, usable_samples=excluded.usable_samples, research_location=excluded.research_location, source_name=excluded.source_name, calculated_at=now();`;
  }).join('\n\n');
  const schedule=`do $$\ndeclare existing_job bigint;\nbegin\n  select jobid into existing_job from cron.job where jobname='weather-refresh-ky';\n  if existing_job is not null then perform cron.unschedule(existing_job); end if;\nend $$;\n\nselect cron.schedule(\n  'weather-refresh-ky',\n  '16 * * * *',\n  $schedule$\n  select net.http_post(\n    url := (select decrypted_secret from vault.decrypted_secrets where name = 'weather_project_url') || '/functions/v1/weather-refresh',\n    headers := jsonb_build_object(\n      'Content-Type', 'application/json',\n      'apikey', (select decrypted_secret from vault.decrypted_secrets where name = 'weather_publishable_key'),\n      'x-weather-refresh-token', (select decrypted_secret from vault.decrypted_secrets where name = 'weather_refresh_token')\n    ),\n    body := '{"state":"KY"}'::jsonb,\n    timeout_milliseconds := 120000\n  );\n  $schedule$\n);`;
  const sql=`-- V81: curated Kentucky mountain-bike riding systems. Existing trails and rider reports are preserved.\nbegin;\n\n${sqlRows}\n\n${schedule}\n\ncommit;\n\nselect state_code, count(*) from public.trail_systems where record_status not in ('Hidden','Archived','Permanently closed') group by state_code order by state_code;\n`;
  fs.writeFileSync(path.join(root,'supabase','v81-kentucky-expansion.sql'),sql);
  fs.writeFileSync(path.join(root,'data','v81-kentucky-catalog.json'),JSON.stringify({version:'81.0',generatedAt:new Date().toISOString(),count:kentucky.length,trails:kentucky},null,2)+'\n');
  console.log(`Kentucky catalog generated: ${kentucky.length} systems; packaged total ${merged.length}.`);
}

main().catch(error=>{console.error(error);process.exitCode=1});
