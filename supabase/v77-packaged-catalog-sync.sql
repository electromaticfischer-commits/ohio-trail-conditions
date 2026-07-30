-- V77 syncs verified packaged trails that were absent from the shared catalog.
-- Existing records and community reports are preserved.
begin;
insert into public.trail_systems
  (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values
(
  'in-creekside-trails', 'Creekside Trails', 'US',
  'IN', 'Northwest Indiana', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-87.102578, 41.479166), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-87.102578, 41.479166), 4326)::extensions.geography,
  '{"id":"in-creekside-trails","name":"Creekside Trails","region":"Northwest Indiana","stateCode":"IN","lat":41.479166,"lon":-87.102578,"official":"https://valpoparks.org/551/Creekside-Trails","organization":"Valpo Parks","trailforksUrl":"https://www.trailforks.com/region/creekside-trails/","routeSource":{"name":"Trailforks riding area","url":"https://www.trailforks.com/region/creekside-trails/","license":"Linked riding-area reference"},"note":"Municipal soft-surface mountain-bike network open when weather conditions permit.","countryCode":"US","listingType":"Trail system","recordStatus":"Active","weatherLat":41.479166,"weatherLon":-87.102578,"sensitivity":1,"canopy":0.82,"geometryVersion":1,"dateVerified":"2026-07-30","soilProfile":{"dominantSoil":"Silt Loam","secondarySoil":"Sandy Loam","naturalDrainage":"Moderately well drained","soilDryingFactor":1,"textureFactor":1.03,"drainageFactor":0.94,"confidence":"Medium-high","sampleCoverage":"15/17","soilLat":41.479166,"soilLon":-87.102578,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-30T20:25:22.983Z","samplingMethod":"17 distributed center-area locations around verified riding-area center"}}'::jsonb,
  1
),
(
  'mi-addison-oaks', 'Addison Oaks County Park', 'US',
  'MI', 'Southeast Michigan', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-83.159419, 42.801353), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-83.159419, 42.801353), 4326)::extensions.geography,
  '{"id":"mi-addison-oaks","name":"Addison Oaks County Park","region":"Southeast Michigan","stateCode":"MI","lat":42.801353,"lon":-83.159419,"official":"https://www.oakgov.com/community/oakland-county-parks/parks-trails/addison-oaks/","organization":"Oakland County Parks","trailforksUrl":"https://www.trailforks.com/region/addison-oaks-county-park-11251/","routeSource":{"name":"Trailforks riding area","url":"https://www.trailforks.com/region/addison-oaks-county-park-11251/","license":"Linked riding-area reference"},"note":"County park with an established natural-surface mountain-bike trail network.","countryCode":"US","listingType":"Trail system","recordStatus":"Active","weatherLat":42.801353,"weatherLon":-83.159419,"sensitivity":1,"canopy":0.82,"geometryVersion":1,"dateVerified":"2026-07-30","soilProfile":{"dominantSoil":"Loam","secondarySoil":"Sandy Loam","naturalDrainage":"Well drained","soilDryingFactor":1.05,"textureFactor":1.11,"drainageFactor":0.93,"confidence":"Medium-high","sampleCoverage":"12/17","soilLat":42.801353,"soilLon":-83.159419,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-30T20:25:25.024Z","samplingMethod":"17 distributed center-area locations around verified riding-area center"}}'::jsonb,
  1
),
(
  'mi-glacial-hills', 'Glacial Hills Pathway', 'US',
  'MI', 'Northern Michigan', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-85.246327, 44.995716), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-85.246327, 44.995716), 4326)::extensions.geography,
  '{"id":"mi-glacial-hills","name":"Glacial Hills Pathway","region":"Northern Michigan","stateCode":"MI","lat":44.995716,"lon":-85.246327,"official":"https://glacialhillstrails.org/","organization":"Glacial Hills Trails","trailforksUrl":"https://www.trailforks.com/region/glacial-hills-pathway/","routeSource":{"name":"Trailforks riding area","url":"https://www.trailforks.com/region/glacial-hills-pathway/","license":"Linked riding-area reference"},"note":"Purpose-built natural-surface trail network with shared hiking and mountain-bike access.","countryCode":"US","listingType":"Trail system","recordStatus":"Active","weatherLat":44.995716,"weatherLon":-85.246327,"sensitivity":1,"canopy":0.82,"geometryVersion":1,"dateVerified":"2026-07-30","soilProfile":{"dominantSoil":"Sand","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":1.26,"textureFactor":1.35,"drainageFactor":1.08,"confidence":"High","sampleCoverage":"15/17","soilLat":44.995716,"soilLon":-85.246327,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-30T20:25:25.331Z","samplingMethod":"17 distributed center-area locations around verified riding-area center"}}'::jsonb,
  1
),
(
  'mi-marquette-ntn-south', 'Marquette NTN South Trails', 'US',
  'MI', 'Upper Peninsula', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-87.421, 46.482), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-87.421, 46.482), 4326)::extensions.geography,
  '{"id":"mi-marquette-ntn-south","name":"Marquette NTN South Trails","region":"Upper Peninsula","stateCode":"MI","lat":46.482,"lon":-87.421,"official":"https://www.noquetrails.org/south-trails/","organization":"Noquemanon Trail Network","trailforksUrl":"https://www.trailforks.com/region/marquette-ntn-south-trails/","routeSource":{"name":"Trailforks riding area","url":"https://www.trailforks.com/region/marquette-ntn-south-trails/","license":"Linked riding-area reference"},"note":"Purpose-built community singletrack network with managed trail access.","countryCode":"US","listingType":"Trail system","recordStatus":"Active","weatherLat":46.482,"weatherLon":-87.421,"sensitivity":1,"canopy":0.82,"geometryVersion":1,"dateVerified":"2026-07-30","soilProfile":{"dominantSoil":"Sandy Loam","secondarySoil":"Sand","naturalDrainage":"Well drained","soilDryingFactor":1.21,"textureFactor":1.27,"drainageFactor":1.08,"confidence":"Medium","sampleCoverage":"10/17","soilLat":46.482,"soilLon":-87.421,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-30T20:25:24.682Z","samplingMethod":"17 distributed center-area locations around verified riding-area center"}}'::jsonb,
  1
),
(
  'oh-camp-tuscazoar', 'Camp Tuscazoar', 'US',
  'OH', 'East-Central Ohio', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-81.397554, 40.566821), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-81.397554, 40.566821), 4326)::extensions.geography,
  '{"id":"oh-camp-tuscazoar","name":"Camp Tuscazoar","region":"East-Central Ohio","stateCode":"OH","lat":40.566821,"lon":-81.397554,"official":"https://tuscazoar.org/tour/","organization":"Camp Tuscazoar Foundation","trailforksUrl":"https://www.trailforks.com/region/camp-tuscazoar/","routeSource":{"name":"Trailforks riding area","url":"https://www.trailforks.com/region/camp-tuscazoar/","license":"Linked riding-area reference"},"note":"Natural-surface trail network; the land manager asks riders not to use wet trails.","countryCode":"US","listingType":"Trail system","recordStatus":"Active","weatherLat":40.566821,"weatherLon":-81.397554,"sensitivity":1,"canopy":0.82,"geometryVersion":1,"dateVerified":"2026-07-30","soilProfile":{"dominantSoil":"Silt Loam","secondarySoil":"Clay Loam","naturalDrainage":"Well drained","soilDryingFactor":0.96,"textureFactor":0.91,"drainageFactor":1.06,"confidence":"High","sampleCoverage":"16/17","soilLat":40.566821,"soilLon":-81.397554,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-30T20:25:19.812Z","samplingMethod":"17 distributed center-area locations around verified riding-area center"}}'::jsonb,
  1
),
(
  'oh-forry-star-hill', 'Forry Preserve / Star Hill', 'US',
  'OH', 'Central Ohio', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-82.432424, 40.026615), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-82.432424, 40.026615), 4326)::extensions.geography,
  '{"id":"oh-forry-star-hill","name":"Forry Preserve / Star Hill","region":"Central Ohio","stateCode":"OH","lat":40.026615,"lon":-82.432424,"official":"https://explorelc.org/directory/forry-preserve","organization":"City of Heath / COMBO","trailforksUrl":"https://www.trailforks.com/region/the-trails-of-forry-preserve-star-hill/","routeSource":{"name":"Trailforks riding area","url":"https://www.trailforks.com/region/the-trails-of-forry-preserve-star-hill/","license":"Linked riding-area reference"},"note":"Public natural-surface mountain-bike network managed with local trail partners.","countryCode":"US","listingType":"Trail system","recordStatus":"Active","weatherLat":40.026615,"weatherLon":-82.432424,"sensitivity":1,"canopy":0.82,"geometryVersion":1,"dateVerified":"2026-07-30","soilProfile":{"dominantSoil":"Silt Loam","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":0.96,"textureFactor":0.92,"drainageFactor":1.03,"confidence":"High","sampleCoverage":"17/17","soilLat":40.026615,"soilLon":-82.432424,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-30T20:25:19.205Z","samplingMethod":"17 distributed center-area locations around verified riding-area center"}}'::jsonb,
  1
),
(
  'oh-lake-milton', 'Lake Milton State Park', 'US',
  'OH', 'Northeast Ohio', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-80.9724, 41.0611), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-80.9724, 41.0611), 4326)::extensions.geography,
  '{"id":"oh-lake-milton","name":"Lake Milton State Park","region":"Northeast Ohio","stateCode":"OH","lat":41.0611,"lon":-80.9724,"official":"https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/parks/parkmaps/lakemiltonmountainbikemap.pdf","organization":"Ohio Department of Natural Resources","trailforksUrl":"https://www.trailforks.com/region/lake-milton-state-park-18876/","routeSource":{"name":"Trailforks riding area","url":"https://www.trailforks.com/region/lake-milton-state-park-18876/","license":"Linked riding-area reference"},"note":"Official natural-surface mountain-bike loop south of Lake Milton.","countryCode":"US","listingType":"Trail system","recordStatus":"Active","weatherLat":41.0611,"weatherLon":-80.9724,"sensitivity":1,"canopy":0.82,"geometryVersion":1,"dateVerified":"2026-07-30","soilProfile":{"dominantSoil":"Silt Loam","secondarySoil":"Clay Loam","naturalDrainage":"Poorly drained","soilDryingFactor":0.86,"textureFactor":0.88,"drainageFactor":0.82,"confidence":"High","sampleCoverage":"15/17","soilLat":41.0611,"soilLon":-80.9724,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-30T20:25:20.735Z","samplingMethod":"17 distributed center-area locations around verified riding-area center"}}'::jsonb,
  1
),
(
  'oh-tar-hollow', 'Tar Hollow State Forest', 'US',
  'OH', 'South-Central Ohio', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-82.750114, 39.357657), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-82.750114, 39.357657), 4326)::extensions.geography,
  '{"id":"oh-tar-hollow","name":"Tar Hollow State Forest","region":"South-Central Ohio","stateCode":"OH","lat":39.357657,"lon":-82.750114,"official":"https://ohiodnr.gov/go-and-do/plan-a-visit/find-a-property/tar-hollow-state-forest","organization":"Ohio Department of Natural Resources","trailforksUrl":"https://www.trailforks.com/region/tar-hollow-state-forest/","routeSource":{"name":"Trailforks riding area","url":"https://www.trailforks.com/region/tar-hollow-state-forest/","license":"Linked riding-area reference"},"note":"Backcountry state-forest riding with variable drainage across ridges and hollows.","countryCode":"US","listingType":"Trail system","recordStatus":"Active","weatherLat":39.357657,"weatherLon":-82.750114,"sensitivity":1,"canopy":0.82,"geometryVersion":1,"dateVerified":"2026-07-30","soilProfile":{"dominantSoil":"Silt Loam","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":0.97,"textureFactor":0.91,"drainageFactor":1.08,"confidence":"Medium","sampleCoverage":"11/17","soilLat":39.357657,"soilLon":-82.750114,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-30T20:25:21.070Z","samplingMethod":"17 distributed center-area locations around verified riding-area center"}}'::jsonb,
  1
),
(
  'oh-troy-mtb', 'Troy Mountain Bike Area', 'US',
  'OH', 'Dayton Area', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-84.208175, 40.05806), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-84.208175, 40.05806), 4326)::extensions.geography,
  '{"id":"oh-troy-mtb","name":"Troy Mountain Bike Area","region":"Dayton Area","stateCode":"OH","lat":40.05806,"lon":-84.208175,"official":"https://www.mvmba.bike/Trails","organization":"City of Troy / MVMBA","trailforksUrl":"https://www.trailforks.com/region/troy-mountain-bike-area/","routeSource":{"name":"Trailforks riding area","url":"https://www.trailforks.com/region/troy-mountain-bike-area/","license":"Linked riding-area reference"},"note":"Purpose-built mountain-bike loops at Duke Park with weather-sensitive natural surfaces.","countryCode":"US","listingType":"Trail system","recordStatus":"Active","weatherLat":40.05806,"weatherLon":-84.208175,"sensitivity":1,"canopy":0.82,"geometryVersion":1,"dateVerified":"2026-07-30","soilProfile":{"dominantSoil":"Loam","secondarySoil":"Silt Loam","naturalDrainage":"Well drained","soilDryingFactor":1,"textureFactor":0.97,"drainageFactor":1.06,"confidence":"High","sampleCoverage":"16/17","soilLat":40.05806,"soilLon":-84.208175,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-30T20:25:20.319Z","samplingMethod":"17 distributed center-area locations around verified riding-area center"}}'::jsonb,
  1
),
(
  'pa-bald-eagle-state-forest', 'Bald Eagle State Forest', 'US',
  'PA', 'Central Pennsylvania', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-77.276583, 40.896912), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-77.276583, 40.896912), 4326)::extensions.geography,
  '{"id":"pa-bald-eagle-state-forest","name":"Bald Eagle State Forest","region":"Central Pennsylvania","stateCode":"PA","lat":40.896912,"lon":-77.276583,"official":"https://www.pa.gov/agencies/dcnr/recreation/where-to-go/state-forests/find-a-forest/bald-eagle","organization":"Pennsylvania DCNR","trailforksUrl":"https://www.trailforks.com/region/bald-eagle-state-forest/","routeSource":{"name":"Trailforks riding area","url":"https://www.trailforks.com/region/bald-eagle-state-forest/","license":"Linked riding-area reference"},"note":"Large state-forest riding area with natural surfaces and varied elevation.","countryCode":"US","listingType":"Trail system","recordStatus":"Active","weatherLat":40.896912,"weatherLon":-77.276583,"sensitivity":1,"canopy":0.82,"geometryVersion":1,"dateVerified":"2026-07-30","soilProfile":{"dominantSoil":"Loam","secondarySoil":"Sandy Loam","naturalDrainage":"Well drained","soilDryingFactor":1.09,"textureFactor":1.09,"drainageFactor":1.08,"confidence":"Medium","sampleCoverage":"9/17","soilLat":40.896912,"soilLon":-77.276583,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-30T20:25:24.009Z","samplingMethod":"17 distributed center-area locations around verified riding-area center"}}'::jsonb,
  1
),
(
  'pa-michaux-state-forest', 'Michaux State Forest', 'US',
  'PA', 'South Central Pennsylvania', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-77.500806, 39.822917), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-77.500806, 39.822917), 4326)::extensions.geography,
  '{"id":"pa-michaux-state-forest","name":"Michaux State Forest","region":"South Central Pennsylvania","stateCode":"PA","lat":39.822917,"lon":-77.500806,"official":"https://www.pa.gov/agencies/dcnr/recreation/where-to-go/state-forests/find-a-forest/michaux/mountain-biking","organization":"Pennsylvania DCNR","trailforksUrl":"https://www.trailforks.com/region/michaux-state-forest/","routeSource":{"name":"Trailforks riding area","url":"https://www.trailforks.com/region/michaux-state-forest/","license":"Linked riding-area reference"},"note":"Extensive state-forest shared-use mountain-bike network; official closures control.","countryCode":"US","listingType":"Trail system","recordStatus":"Active","weatherLat":39.822917,"weatherLon":-77.500806,"sensitivity":1,"canopy":0.82,"geometryVersion":1,"dateVerified":"2026-07-30","soilProfile":{"dominantSoil":"Loam","secondarySoil":"Silt Loam","naturalDrainage":"Well drained","soilDryingFactor":1.01,"textureFactor":0.99,"drainageFactor":1.04,"confidence":"High","sampleCoverage":"14/17","soilLat":39.822917,"soilLon":-77.500806,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-30T20:25:23.495Z","samplingMethod":"17 distributed center-area locations around verified riding-area center"}}'::jsonb,
  1
),
(
  'pa-rothrock-state-forest', 'Rothrock State Forest', 'US',
  'PA', 'Central Pennsylvania', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-77.714351, 40.679728), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-77.714351, 40.679728), 4326)::extensions.geography,
  '{"id":"pa-rothrock-state-forest","name":"Rothrock State Forest","region":"Central Pennsylvania","stateCode":"PA","lat":40.679728,"lon":-77.714351,"official":"https://www.pa.gov/agencies/dcnr/recreation/where-to-go/state-forests/find-a-forest/rothrock","organization":"Pennsylvania DCNR","trailforksUrl":"https://www.trailforks.com/region/rothrock-state-forest/","routeSource":{"name":"Trailforks riding area","url":"https://www.trailforks.com/region/rothrock-state-forest/","license":"Linked riding-area reference"},"note":"Major state-forest mountain-bike destination with rocky, weather-sensitive trails.","countryCode":"US","listingType":"Trail system","recordStatus":"Active","weatherLat":40.679728,"weatherLon":-77.714351,"sensitivity":1,"canopy":0.82,"geometryVersion":1,"dateVerified":"2026-07-30","soilProfile":{"dominantSoil":"Sandy Loam","secondarySoil":"Sand","naturalDrainage":"Well drained","soilDryingFactor":1.16,"textureFactor":1.22,"drainageFactor":1.05,"confidence":"Medium","sampleCoverage":"11/17","soilLat":40.679728,"soilLon":-77.714351,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-30T20:25:24.329Z","samplingMethod":"17 distributed center-area locations around verified riding-area center"}}'::jsonb,
  1
),
(
  'wv-arrowhead', 'Arrowhead Trails — New River Gorge', 'US',
  'WV', 'New River Gorge', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-81.075, 38.006), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-81.075, 38.006), 4326)::extensions.geography,
  '{"id":"wv-arrowhead","name":"Arrowhead Trails — New River Gorge","region":"New River Gorge","stateCode":"WV","lat":38.006,"lon":-81.075,"official":"https://www.nps.gov/neri/planyourvisit/bicycling.htm","organization":"National Park Service","trailforksUrl":"https://www.trailforks.com/region/arrowhead-trails/","routeSource":{"name":"Trailforks riding area","url":"https://www.trailforks.com/region/arrowhead-trails/","license":"Linked riding-area reference"},"note":"Purpose-built National Park Service mountain-bike loops near Fayetteville.","countryCode":"US","listingType":"Trail system","recordStatus":"Active","weatherLat":38.006,"weatherLon":-81.075,"sensitivity":1,"canopy":0.82,"geometryVersion":1,"dateVerified":"2026-07-30","soilProfile":{"dominantSoil":"Silt Loam","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":0.97,"textureFactor":0.91,"drainageFactor":1.07,"confidence":"Medium","sampleCoverage":"9/17","soilLat":38.006,"soilLon":-81.075,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-30T20:25:21.803Z","samplingMethod":"17 distributed center-area locations around verified riding-area center"}}'::jsonb,
  1
),
(
  'wv-barboursville', 'Barboursville Park', 'US',
  'WV', 'Metro Valley', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-82.305855, 38.39195), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-82.305855, 38.39195), 4326)::extensions.geography,
  '{"id":"wv-barboursville","name":"Barboursville Park","region":"Metro Valley","stateCode":"WV","lat":38.39195,"lon":-82.305855,"official":"https://barboursvillepark.org/amenities/","organization":"Village of Barboursville","trailforksUrl":"https://www.trailforks.com/region/barboursville-park/","routeSource":{"name":"Trailforks riding area","url":"https://www.trailforks.com/region/barboursville-park/","license":"Linked riding-area reference"},"note":"Large municipal hiking and mountain-biking trail network.","countryCode":"US","listingType":"Trail system","recordStatus":"Active","weatherLat":38.39195,"weatherLon":-82.305855,"sensitivity":1,"canopy":0.82,"geometryVersion":1,"dateVerified":"2026-07-30","soilProfile":{"dominantSoil":"Silt Loam","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":0.98,"textureFactor":0.95,"drainageFactor":1.03,"confidence":"Medium-high","sampleCoverage":"13/17","soilLat":38.39195,"soilLon":-82.305855,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-30T20:25:22.471Z","samplingMethod":"17 distributed center-area locations around verified riding-area center"}}'::jsonb,
  1
),
(
  'wv-big-bear', 'Big Bear Lake Trail Center', 'US',
  'WV', 'Mountaineer Country', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-79.6222, 39.6087), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-79.6222, 39.6087), 4326)::extensions.geography,
  '{"id":"wv-big-bear","name":"Big Bear Lake Trail Center","region":"Mountaineer Country","stateCode":"WV","lat":39.6087,"lon":-79.6222,"official":"https://bikebigbearwv.com/","organization":"Big Bear Lake Trail Center","trailforksUrl":"https://www.trailforks.com/region/big-bear-lake-trail-center/","routeSource":{"name":"Trailforks riding area","url":"https://www.trailforks.com/region/big-bear-lake-trail-center/","license":"Linked riding-area reference"},"note":"Privately managed mountain-bike network; fees, hours, and seasonal rules may apply.","countryCode":"US","listingType":"Trail system","recordStatus":"Active","weatherLat":39.6087,"weatherLon":-79.6222,"sensitivity":1,"canopy":0.82,"geometryVersion":1,"dateVerified":"2026-07-30","soilProfile":{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":0.93,"textureFactor":0.9,"drainageFactor":0.98,"confidence":"Medium","sampleCoverage":"8/17","soilLat":39.6087,"soilLon":-79.6222,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-30T20:25:21.445Z","samplingMethod":"17 distributed center-area locations around verified riding-area center"}}'::jsonb,
  1
)
on conflict (id) do update set
  name=excluded.name,
  country_code=excluded.country_code,
  state_code=excluded.state_code,
  region=excluded.region,
  listing_type=excluded.listing_type,
  record_status=excluded.record_status,
  location=excluded.location,
  weather_location=excluded.weather_location,
  data=excluded.data,
  geometry_version=excluded.geometry_version,
  updated_at=now();
commit;
select state_code, count(*) from public.trail_systems
where record_status not in ('Hidden','Archived','Permanently closed')
group by state_code order by state_code;
