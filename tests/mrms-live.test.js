const SERVICE='https://mapservices.weather.noaa.gov/raster/rest/services/obs/mrms_qpe/ImageServer';
const products={12:'conus_QPE_12H',24:'conus_QPE_24H',48:'conus_QPE_48H',72:'conus_QPE_72H'};
const locations=[
  {name:'Columbus',lat:39.9612,lon:-82.9988},
  {name:'Cleveland',lat:41.4993,lon:-81.6944},
  {name:'Cincinnati',lat:39.1031,lon:-84.5120}
];

function ringPoints(lat,lon,radiusMiles,count){
  const lonMiles=Math.max(1,69.172*Math.cos(lat*Math.PI/180));
  return Array.from({length:count},(_,i)=>{
    const angle=(i/count)*Math.PI*2;
    return [lon+Math.sin(angle)*radiusMiles/lonMiles,lat+Math.cos(angle)*radiusMiles/69];
  });
}
function samplePoints(lat,lon){
  return [[lon,lat],...ringPoints(lat,lon,2,8),...ringPoints(lat,lon,5,16)];
}
async function jsonGet(url,params){
  const response=await fetch(`${url}?${new URLSearchParams(params)}`);
  if(!response.ok)throw new Error(`HTTP ${response.status} from ${url}`);
  const data=await response.json();
  if(data.error)throw new Error(`Service error: ${JSON.stringify(data.error)}`);
  return data;
}

(async()=>{
  const names=Object.values(products);
  const catalog=await jsonGet(`${SERVICE}/query`,{
    f:'json',where:names.map(name=>`idp_subset = '${name}'`).join(' OR '),
    outFields:'objectid,name,idp_subset,idp_validendtime',returnGeometry:'false'
  });
  const rasters={};
  for(const [hours,name] of Object.entries(products)){
    const matches=catalog.features.filter(feature=>feature.attributes.idp_subset===name);
    if(matches.length!==1)throw new Error(`${name}: expected one catalog item, received ${matches.length}`);
    rasters[hours]=matches[0].attributes;
  }
  const validTimes=Object.values(rasters).map(item=>item.idp_validendtime);
  if(Math.max(...validTimes)-Math.min(...validTimes)>60*60*1000)throw new Error('The four products differ by more than one hour');

  for(const location of locations){
    const totals=[];
    for(const hours of [12,24,48,72]){
      const raster=rasters[hours];
      const points=samplePoints(location.lat,location.lon);
      const data=await jsonGet(`${SERVICE}/getSamples`,{
        f:'json',geometryType:'esriGeometryMultipoint',
        geometry:JSON.stringify({points,spatialReference:{wkid:4326}}),
        returnFirstValueOnly:'true',interpolation:'RSP_NearestNeighbor',
        mosaicRule:JSON.stringify({mosaicMethod:'esriMosaicLockRaster',lockRasterIds:[raster.objectid]})
      });
      if(data.samples.length!==25)throw new Error(`${location.name} ${hours}h: received ${data.samples.length} samples`);
      if(data.samples.some(sample=>sample.rasterId!==raster.objectid))throw new Error(`${location.name} ${hours}h: wrong raster ID`);
      const inches=data.samples.map(sample=>Number(sample.value)/25.4).filter(value=>Number.isFinite(value)&&value>=0);
      if(!inches.length)throw new Error(`${location.name} ${hours}h: no numeric samples`);
      inches.sort((a,b)=>a-b);
      totals.push(inches[Math.floor(inches.length/2)]);
    }
    for(let i=1;i<totals.length;i++){
      if(totals[i]+0.03<totals[i-1])throw new Error(`${location.name}: rolling totals are not monotonic: ${totals.join(', ')}`);
    }
    console.log(`${location.name}: ${totals.map((value,i)=>`${[12,24,48,72][i]}h=${value.toFixed(3)} in`).join(', ')}`);
  }
  console.log(`MRMS live checks passed; product times ${[...new Set(validTimes)].map(value=>new Date(value).toISOString()).join(', ')}.`);
})().catch(error=>{console.error(error);process.exit(1)});
