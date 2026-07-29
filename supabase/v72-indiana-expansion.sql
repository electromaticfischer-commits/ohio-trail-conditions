-- V72: verified Indiana mountain-bike trail systems.
-- Requires the V70 nationwide foundation. Existing trails and rider reports are preserved.
-- Official route geometry was used for centers and soil research but is not stored or published.

begin;

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('in-brown-county', 'Brown County State Park', 'US', 'IN', 'South-Central Indiana', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-86.233634, 39.172975), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-86.233634, 39.172975), 4326)::extensions.geography,
  '{"id":"in-brown-county","name":"Brown County State Park","region":"South-Central Indiana","countryCode":"US","stateCode":"IN","listingType":"Trail system","recordStatus":"Active","lat":39.172975,"lon":-86.233634,"weatherLat":39.172975,"weatherLon":-86.233634,"sensitivity":1,"canopy":0.82,"official":"https://www.in.gov/dnr/state-parks/parks-lakes/brown-county-state-park/","organization":"Brown County State Park","note":"Public mountain-bike access and mapped trail location verified through the Indiana DNR Trails Inventory.","geometryVersion":1,"routeSource":{"name":"Indiana DNR Trails Inventory","url":"https://www.in.gov/dnr/state-parks/recreation/trails/indiana-trail-finder/","license":"Indiana Department of Natural Resources public trails inventory"},"dateVerified":"2026-07-28","soilProfile":{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":0.96,"textureFactor":0.9,"drainageFactor":1.07,"confidence":"High","sampleCoverage":"17/17","soilLat":39.172975,"soilLon":-86.233634,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:14.616Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('in-brown-county', 1, '{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":0.96,"textureFactor":0.9,"drainageFactor":1.07,"confidence":"High","sampleCoverage":"17/17","soilLat":39.172975,"soilLon":-86.233634,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:14.616Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'High', 17,
  ST_SetSRID(ST_MakePoint(-86.233634, 39.172975), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('in-fort-harrison', 'Fort Harrison State Park', 'US', 'IN', 'Indianapolis Area', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-86.026042, 39.865069), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-86.026042, 39.865069), 4326)::extensions.geography,
  '{"id":"in-fort-harrison","name":"Fort Harrison State Park","region":"Indianapolis Area","countryCode":"US","stateCode":"IN","listingType":"Trail system","recordStatus":"Active","lat":39.865069,"lon":-86.026042,"weatherLat":39.865069,"weatherLon":-86.026042,"sensitivity":1,"canopy":0.82,"official":"https://www.in.gov/dnr/state-parks/parks-lakes/fort-harrison-state-park/","organization":"Fort Harrison State Park","note":"Public mountain-bike access and mapped trail location verified through the Indiana DNR Trails Inventory.","geometryVersion":1,"routeSource":{"name":"Indiana DNR Trails Inventory","url":"https://www.in.gov/dnr/state-parks/recreation/trails/indiana-trail-finder/","license":"Indiana Department of Natural Resources public trails inventory"},"dateVerified":"2026-07-28","soilProfile":{"dominantSoil":"Silt Loam","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":0.98,"textureFactor":0.95,"drainageFactor":1.03,"confidence":"Medium-high","sampleCoverage":"17/17","soilLat":39.865069,"soilLon":-86.026042,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:16.683Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('in-fort-harrison', 1, '{"dominantSoil":"Silt Loam","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":0.98,"textureFactor":0.95,"drainageFactor":1.03,"confidence":"Medium-high","sampleCoverage":"17/17","soilLat":39.865069,"soilLon":-86.026042,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:16.683Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'Medium-high', 17,
  ST_SetSRID(ST_MakePoint(-86.026042, 39.865069), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('in-harmonie', 'Harmonie State Park', 'US', 'IN', 'Southwest Indiana', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-87.962337, 38.04831), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-87.962337, 38.04831), 4326)::extensions.geography,
  '{"id":"in-harmonie","name":"Harmonie State Park","region":"Southwest Indiana","countryCode":"US","stateCode":"IN","listingType":"Trail system","recordStatus":"Active","lat":38.04831,"lon":-87.962337,"weatherLat":38.04831,"weatherLon":-87.962337,"sensitivity":1,"canopy":0.82,"official":"https://www.in.gov/dnr/state-parks/parks-lakes/harmonie-state-park/","organization":"Harmonie State Park","note":"Public mountain-bike access and mapped trail location verified through the Indiana DNR Trails Inventory.","geometryVersion":1,"routeSource":{"name":"Indiana DNR Trails Inventory","url":"https://www.in.gov/dnr/state-parks/recreation/trails/indiana-trail-finder/","license":"Indiana Department of Natural Resources public trails inventory"},"dateVerified":"2026-07-28","soilProfile":{"dominantSoil":"Silt Loam","secondarySoil":"Sand","naturalDrainage":"Well drained","soilDryingFactor":0.98,"textureFactor":0.93,"drainageFactor":1.09,"confidence":"High","sampleCoverage":"17/17","soilLat":38.04831,"soilLon":-87.962337,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:18.576Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('in-harmonie', 1, '{"dominantSoil":"Silt Loam","secondarySoil":"Sand","naturalDrainage":"Well drained","soilDryingFactor":0.98,"textureFactor":0.93,"drainageFactor":1.09,"confidence":"High","sampleCoverage":"17/17","soilLat":38.04831,"soilLon":-87.962337,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:18.576Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'High', 17,
  ST_SetSRID(ST_MakePoint(-87.962337, 38.04831), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('in-obannon-woods', 'O''Bannon Woods State Park', 'US', 'IN', 'Southern Indiana', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-86.275146, 38.185634), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-86.275146, 38.185634), 4326)::extensions.geography,
  '{"id":"in-obannon-woods","name":"O''Bannon Woods State Park","region":"Southern Indiana","countryCode":"US","stateCode":"IN","listingType":"Trail system","recordStatus":"Active","lat":38.185634,"lon":-86.275146,"weatherLat":38.185634,"weatherLon":-86.275146,"sensitivity":1,"canopy":0.82,"official":"https://www.in.gov/dnr/state-parks/parks-lakes/obannon-woods-state-park/","organization":"O''Bannon Woods State Park / Harrison-Crawford State Forest","note":"Public mountain-bike access and mapped trail location verified through the Indiana DNR Trails Inventory.","geometryVersion":1,"routeSource":{"name":"Indiana DNR Trails Inventory","url":"https://www.in.gov/dnr/state-parks/recreation/trails/indiana-trail-finder/","license":"Indiana Department of Natural Resources public trails inventory"},"dateVerified":"2026-07-28","soilProfile":{"dominantSoil":"Silt Loam","secondarySoil":"Clay Loam","naturalDrainage":"Well drained","soilDryingFactor":0.95,"textureFactor":0.89,"drainageFactor":1.06,"confidence":"High","sampleCoverage":"17/17","soilLat":38.185634,"soilLon":-86.275146,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:20.246Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('in-obannon-woods', 1, '{"dominantSoil":"Silt Loam","secondarySoil":"Clay Loam","naturalDrainage":"Well drained","soilDryingFactor":0.95,"textureFactor":0.89,"drainageFactor":1.06,"confidence":"High","sampleCoverage":"17/17","soilLat":38.185634,"soilLon":-86.275146,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:20.246Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'High', 17,
  ST_SetSRID(ST_MakePoint(-86.275146, 38.185634), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('in-potato-creek', 'Potato Creek State Park', 'US', 'IN', 'North-Central Indiana', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-86.357082, 41.559337), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-86.357082, 41.559337), 4326)::extensions.geography,
  '{"id":"in-potato-creek","name":"Potato Creek State Park","region":"North-Central Indiana","countryCode":"US","stateCode":"IN","listingType":"Trail system","recordStatus":"Active","lat":41.559337,"lon":-86.357082,"weatherLat":41.559337,"weatherLon":-86.357082,"sensitivity":1,"canopy":0.82,"official":"https://www.in.gov/dnr/state-parks/parks-lakes/potato-creek-state-park/","organization":"Potato Creek State Park","note":"Public mountain-bike access and mapped trail location verified through the Indiana DNR Trails Inventory.","geometryVersion":1,"routeSource":{"name":"Indiana DNR Trails Inventory","url":"https://www.in.gov/dnr/state-parks/recreation/trails/indiana-trail-finder/","license":"Indiana Department of Natural Resources public trails inventory"},"dateVerified":"2026-07-28","soilProfile":{"dominantSoil":"Sandy Loam","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":1.13,"textureFactor":1.17,"drainageFactor":1.06,"confidence":"High","sampleCoverage":"17/17","soilLat":41.559337,"soilLon":-86.357082,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:22.160Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('in-potato-creek', 1, '{"dominantSoil":"Sandy Loam","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":1.13,"textureFactor":1.17,"drainageFactor":1.06,"confidence":"High","sampleCoverage":"17/17","soilLat":41.559337,"soilLon":-86.357082,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:22.160Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'High', 17,
  ST_SetSRID(ST_MakePoint(-86.357082, 41.559337), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('in-spring-mill', 'Spring Mill State Park', 'US', 'IN', 'South-Central Indiana', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-86.407725, 38.73495), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-86.407725, 38.73495), 4326)::extensions.geography,
  '{"id":"in-spring-mill","name":"Spring Mill State Park","region":"South-Central Indiana","countryCode":"US","stateCode":"IN","listingType":"Trail system","recordStatus":"Active","lat":38.73495,"lon":-86.407725,"weatherLat":38.73495,"weatherLon":-86.407725,"sensitivity":1,"canopy":0.82,"official":"https://www.in.gov/dnr/state-parks/parks-lakes/spring-mill-state-park/","organization":"Spring Mill State Park","note":"Public mountain-bike access and mapped trail location verified through the Indiana DNR Trails Inventory.","geometryVersion":1,"routeSource":{"name":"Indiana DNR Trails Inventory","url":"https://www.in.gov/dnr/state-parks/recreation/trails/indiana-trail-finder/","license":"Indiana Department of Natural Resources public trails inventory"},"dateVerified":"2026-07-28","soilProfile":{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":0.96,"textureFactor":0.9,"drainageFactor":1.08,"confidence":"High","sampleCoverage":"17/17","soilLat":38.73495,"soilLon":-86.407725,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:24.141Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('in-spring-mill', 1, '{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":0.96,"textureFactor":0.9,"drainageFactor":1.08,"confidence":"High","sampleCoverage":"17/17","soilLat":38.73495,"soilLon":-86.407725,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:24.141Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'High', 17,
  ST_SetSRID(ST_MakePoint(-86.407725, 38.73495), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('in-versailles', 'Versailles State Park', 'US', 'IN', 'Southeast Indiana', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-85.242057, 39.090913), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-85.242057, 39.090913), 4326)::extensions.geography,
  '{"id":"in-versailles","name":"Versailles State Park","region":"Southeast Indiana","countryCode":"US","stateCode":"IN","listingType":"Trail system","recordStatus":"Active","lat":39.090913,"lon":-85.242057,"weatherLat":39.090913,"weatherLon":-85.242057,"sensitivity":1,"canopy":0.82,"official":"https://www.in.gov/dnr/state-parks/parks-lakes/versailles-state-park/","organization":"Versailles State Park","note":"Public mountain-bike access and mapped trail location verified through the Indiana DNR Trails Inventory.","geometryVersion":1,"routeSource":{"name":"Indiana DNR Trails Inventory","url":"https://www.in.gov/dnr/state-parks/recreation/trails/indiana-trail-finder/","license":"Indiana Department of Natural Resources public trails inventory"},"dateVerified":"2026-07-28","soilProfile":{"dominantSoil":"Silt Loam","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":0.96,"textureFactor":0.9,"drainageFactor":1.07,"confidence":"Medium-high","sampleCoverage":"17/17","soilLat":39.090913,"soilLon":-85.242057,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:25.851Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('in-versailles', 1, '{"dominantSoil":"Silt Loam","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":0.96,"textureFactor":0.9,"drainageFactor":1.07,"confidence":"Medium-high","sampleCoverage":"17/17","soilLat":39.090913,"soilLon":-85.242057,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:25.851Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'Medium-high', 17,
  ST_SetSRID(ST_MakePoint(-85.242057, 39.090913), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('in-salamonie', 'Salamonie Lake', 'US', 'IN', 'Northeast Indiana', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-85.609551, 40.763172), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-85.609551, 40.763172), 4326)::extensions.geography,
  '{"id":"in-salamonie","name":"Salamonie Lake","region":"Northeast Indiana","countryCode":"US","stateCode":"IN","listingType":"Trail system","recordStatus":"Active","lat":40.763172,"lon":-85.609551,"weatherLat":40.763172,"weatherLon":-85.609551,"sensitivity":1,"canopy":0.82,"official":"https://www.in.gov/dnr/state-parks/parks-lakes/salamonie-lake/","organization":"Salamonie Reservoir","note":"Public mountain-bike access and mapped trail location verified through the Indiana DNR Trails Inventory.","geometryVersion":1,"routeSource":{"name":"Indiana DNR Trails Inventory","url":"https://www.in.gov/dnr/state-parks/recreation/trails/indiana-trail-finder/","license":"Indiana Department of Natural Resources public trails inventory"},"dateVerified":"2026-07-28","soilProfile":{"dominantSoil":"Silt Loam","secondarySoil":"Loam","naturalDrainage":"Moderately well drained","soilDryingFactor":0.92,"textureFactor":0.9,"drainageFactor":0.96,"confidence":"Medium-high","sampleCoverage":"17/17","soilLat":40.763172,"soilLon":-85.609551,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:32.541Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('in-salamonie', 1, '{"dominantSoil":"Silt Loam","secondarySoil":"Loam","naturalDrainage":"Moderately well drained","soilDryingFactor":0.92,"textureFactor":0.9,"drainageFactor":0.96,"confidence":"Medium-high","sampleCoverage":"17/17","soilLat":40.763172,"soilLon":-85.609551,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:32.541Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'Medium-high', 17,
  ST_SetSRID(ST_MakePoint(-85.609551, 40.763172), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('in-interlake', 'Interlake State Recreation Area', 'US', 'IN', 'Southwest Indiana', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-87.225627, 38.22166), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-87.225627, 38.22166), 4326)::extensions.geography,
  '{"id":"in-interlake","name":"Interlake State Recreation Area","region":"Southwest Indiana","countryCode":"US","stateCode":"IN","listingType":"Trail system","recordStatus":"Active","lat":38.22166,"lon":-87.225627,"weatherLat":38.22166,"weatherLon":-87.225627,"sensitivity":1,"canopy":0.82,"official":"https://www.in.gov/dnr/state-parks/parks-lakes/interlake-state-recreation-area/","organization":"Interlake Off-road State Recreation Area","note":"Public mountain-bike access and mapped trail location verified through the Indiana DNR Trails Inventory.","geometryVersion":1,"routeSource":{"name":"Indiana DNR Trails Inventory","url":"https://www.in.gov/dnr/state-parks/recreation/trails/indiana-trail-finder/","license":"Indiana Department of Natural Resources public trails inventory"},"dateVerified":"2026-07-28","soilProfile":{"dominantSoil":"Silt Loam","secondarySoil":"Clay Loam","naturalDrainage":"Well drained","soilDryingFactor":0.94,"textureFactor":0.84,"drainageFactor":1.12,"confidence":"High","sampleCoverage":"17/17","soilLat":38.22166,"soilLon":-87.225627,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:34.583Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('in-interlake', 1, '{"dominantSoil":"Silt Loam","secondarySoil":"Clay Loam","naturalDrainage":"Well drained","soilDryingFactor":0.94,"textureFactor":0.84,"drainageFactor":1.12,"confidence":"High","sampleCoverage":"17/17","soilLat":38.22166,"soilLon":-87.225627,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:34.583Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'High', 17,
  ST_SetSRID(ST_MakePoint(-87.225627, 38.22166), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('in-clark-deam-lake', 'Clark State Forest / Deam Lake', 'US', 'IN', 'Southern Indiana', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-85.860304, 38.472052), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-85.860304, 38.472052), 4326)::extensions.geography,
  '{"id":"in-clark-deam-lake","name":"Clark State Forest / Deam Lake","region":"Southern Indiana","countryCode":"US","stateCode":"IN","listingType":"Trail system","recordStatus":"Active","lat":38.472052,"lon":-85.860304,"weatherLat":38.472052,"weatherLon":-85.860304,"sensitivity":1,"canopy":0.82,"official":"https://www.in.gov/dnr/forestry/properties/clark-state-forest/","organization":"Deam Lake State Recreation Area","note":"Public mountain-bike access and mapped trail location verified through the Indiana DNR Trails Inventory.","geometryVersion":1,"routeSource":{"name":"Indiana DNR Trails Inventory","url":"https://www.in.gov/dnr/state-parks/recreation/trails/indiana-trail-finder/","license":"Indiana Department of Natural Resources public trails inventory"},"dateVerified":"2026-07-28","soilProfile":{"dominantSoil":"Silt Loam","secondarySoil":"Clay Loam","naturalDrainage":"Well drained","soilDryingFactor":0.91,"textureFactor":0.84,"drainageFactor":1.04,"confidence":"High","sampleCoverage":"17/17","soilLat":38.472052,"soilLon":-85.860304,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:36.326Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('in-clark-deam-lake', 1, '{"dominantSoil":"Silt Loam","secondarySoil":"Clay Loam","naturalDrainage":"Well drained","soilDryingFactor":0.91,"textureFactor":0.84,"drainageFactor":1.04,"confidence":"High","sampleCoverage":"17/17","soilLat":38.472052,"soilLon":-85.860304,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:36.326Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'High', 17,
  ST_SetSRID(ST_MakePoint(-85.860304, 38.472052), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('in-ferdinand', 'Ferdinand State Forest', 'US', 'IN', 'Southwest Indiana', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-86.775229, 38.267574), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-86.775229, 38.267574), 4326)::extensions.geography,
  '{"id":"in-ferdinand","name":"Ferdinand State Forest","region":"Southwest Indiana","countryCode":"US","stateCode":"IN","listingType":"Trail system","recordStatus":"Active","lat":38.267574,"lon":-86.775229,"weatherLat":38.267574,"weatherLon":-86.775229,"sensitivity":1,"canopy":0.82,"official":"https://www.in.gov/dnr/forestry/properties/ferdinand-state-forest/","organization":"Ferdinand/Pike State Forest","note":"Public mountain-bike access and mapped trail location verified through the Indiana DNR Trails Inventory.","geometryVersion":1,"routeSource":{"name":"Indiana DNR Trails Inventory","url":"https://www.in.gov/dnr/state-parks/recreation/trails/indiana-trail-finder/","license":"Indiana Department of Natural Resources public trails inventory"},"dateVerified":"2026-07-28","soilProfile":{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":0.96,"textureFactor":0.9,"drainageFactor":1.07,"confidence":"High","sampleCoverage":"17/17","soilLat":38.267574,"soilLon":-86.775229,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:38.576Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('in-ferdinand', 1, '{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":0.96,"textureFactor":0.9,"drainageFactor":1.07,"confidence":"High","sampleCoverage":"17/17","soilLat":38.267574,"soilLon":-86.775229,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:38.576Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'High', 17,
  ST_SetSRID(ST_MakePoint(-86.775229, 38.267574), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('in-jackson-washington', 'Jackson-Washington State Forest', 'US', 'IN', 'South-Central Indiana', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-86.055664, 38.837981), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-86.055664, 38.837981), 4326)::extensions.geography,
  '{"id":"in-jackson-washington","name":"Jackson-Washington State Forest","region":"South-Central Indiana","countryCode":"US","stateCode":"IN","listingType":"Trail system","recordStatus":"Active","lat":38.837981,"lon":-86.055664,"weatherLat":38.837981,"weatherLon":-86.055664,"sensitivity":1,"canopy":0.82,"official":"https://www.in.gov/dnr/forestry/properties/jackson-washington-state-forest/","organization":"Jackson-Washington State Forest","note":"Public mountain-bike access and mapped trail location verified through the Indiana DNR Trails Inventory.","geometryVersion":1,"routeSource":{"name":"Indiana DNR Trails Inventory","url":"https://www.in.gov/dnr/state-parks/recreation/trails/indiana-trail-finder/","license":"Indiana Department of Natural Resources public trails inventory"},"dateVerified":"2026-07-28","soilProfile":{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":0.95,"textureFactor":0.9,"drainageFactor":1.04,"confidence":"High","sampleCoverage":"17/17","soilLat":38.837981,"soilLon":-86.055664,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:40.239Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('in-jackson-washington', 1, '{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":0.95,"textureFactor":0.9,"drainageFactor":1.04,"confidence":"High","sampleCoverage":"17/17","soilLat":38.837981,"soilLon":-86.055664,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:40.239Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'High', 17,
  ST_SetSRID(ST_MakePoint(-86.055664, 38.837981), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('in-martin', 'Martin State Forest', 'US', 'IN', 'South-Central Indiana', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-86.741544, 38.704538), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-86.741544, 38.704538), 4326)::extensions.geography,
  '{"id":"in-martin","name":"Martin State Forest","region":"South-Central Indiana","countryCode":"US","stateCode":"IN","listingType":"Trail system","recordStatus":"Active","lat":38.704538,"lon":-86.741544,"weatherLat":38.704538,"weatherLon":-86.741544,"sensitivity":1,"canopy":0.82,"official":"https://www.in.gov/dnr/forestry/properties/martin-state-forest/","organization":"Martin State Forest","note":"Public mountain-bike access and mapped trail location verified through the Indiana DNR Trails Inventory.","geometryVersion":1,"routeSource":{"name":"Indiana DNR Trails Inventory","url":"https://www.in.gov/dnr/state-parks/recreation/trails/indiana-trail-finder/","license":"Indiana Department of Natural Resources public trails inventory"},"dateVerified":"2026-07-28","soilProfile":{"dominantSoil":"Silt Loam","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":0.97,"textureFactor":0.91,"drainageFactor":1.08,"confidence":"High","sampleCoverage":"17/17","soilLat":38.704538,"soilLon":-86.741544,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:42.266Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('in-martin', 1, '{"dominantSoil":"Silt Loam","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":0.97,"textureFactor":0.91,"drainageFactor":1.08,"confidence":"High","sampleCoverage":"17/17","soilLat":38.704538,"soilLon":-86.741544,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:42.266Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'High', 17,
  ST_SetSRID(ST_MakePoint(-86.741544, 38.704538), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('in-owen-putnam', 'Owen-Putnam State Forest', 'US', 'IN', 'West-Central Indiana', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-86.861467, 39.39439), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-86.861467, 39.39439), 4326)::extensions.geography,
  '{"id":"in-owen-putnam","name":"Owen-Putnam State Forest","region":"West-Central Indiana","countryCode":"US","stateCode":"IN","listingType":"Trail system","recordStatus":"Active","lat":39.39439,"lon":-86.861467,"weatherLat":39.39439,"weatherLon":-86.861467,"sensitivity":1,"canopy":0.82,"official":"https://www.in.gov/dnr/forestry/properties/owen-putnam-state-forest/","organization":"Owen-Putnam State Forest","note":"Public mountain-bike access and mapped trail location verified through the Indiana DNR Trails Inventory.","geometryVersion":1,"routeSource":{"name":"Indiana DNR Trails Inventory","url":"https://www.in.gov/dnr/state-parks/recreation/trails/indiana-trail-finder/","license":"Indiana Department of Natural Resources public trails inventory"},"dateVerified":"2026-07-28","soilProfile":{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Moderately well drained","soilDryingFactor":0.94,"textureFactor":0.9,"drainageFactor":1.01,"confidence":"High","sampleCoverage":"17/17","soilLat":39.39439,"soilLon":-86.861467,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:44.415Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('in-owen-putnam', 1, '{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Moderately well drained","soilDryingFactor":0.94,"textureFactor":0.9,"drainageFactor":1.01,"confidence":"High","sampleCoverage":"17/17","soilLat":39.39439,"soilLon":-86.861467,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:44.415Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'High', 17,
  ST_SetSRID(ST_MakePoint(-86.861467, 39.39439), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('in-starve-hollow', 'Starve Hollow State Recreation Area', 'US', 'IN', 'South-Central Indiana', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-86.073391, 38.812926), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-86.073391, 38.812926), 4326)::extensions.geography,
  '{"id":"in-starve-hollow","name":"Starve Hollow State Recreation Area","region":"South-Central Indiana","countryCode":"US","stateCode":"IN","listingType":"Trail system","recordStatus":"Active","lat":38.812926,"lon":-86.073391,"weatherLat":38.812926,"weatherLon":-86.073391,"sensitivity":1,"canopy":0.82,"official":"https://www.in.gov/dnr/forestry/properties/starve-hollow-state-recreation-area/","organization":"Starve Hollow State Recreation Area","note":"Public mountain-bike access and mapped trail location verified through the Indiana DNR Trails Inventory.","geometryVersion":1,"routeSource":{"name":"Indiana DNR Trails Inventory","url":"https://www.in.gov/dnr/state-parks/recreation/trails/indiana-trail-finder/","license":"Indiana Department of Natural Resources public trails inventory"},"dateVerified":"2026-07-28","soilProfile":{"dominantSoil":"Silt Loam","secondarySoil":"Clay Loam","naturalDrainage":"Well drained","soilDryingFactor":0.93,"textureFactor":0.88,"drainageFactor":1.02,"confidence":"High","sampleCoverage":"17/17","soilLat":38.812926,"soilLon":-86.073391,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:46.089Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('in-starve-hollow', 1, '{"dominantSoil":"Silt Loam","secondarySoil":"Clay Loam","naturalDrainage":"Well drained","soilDryingFactor":0.93,"textureFactor":0.88,"drainageFactor":1.02,"confidence":"High","sampleCoverage":"17/17","soilLat":38.812926,"soilLon":-86.073391,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:46.089Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'High', 17,
  ST_SetSRID(ST_MakePoint(-86.073391, 38.812926), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('in-yellowwood', 'Yellowwood State Forest', 'US', 'IN', 'South-Central Indiana', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-86.299761, 39.12662), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-86.299761, 39.12662), 4326)::extensions.geography,
  '{"id":"in-yellowwood","name":"Yellowwood State Forest","region":"South-Central Indiana","countryCode":"US","stateCode":"IN","listingType":"Trail system","recordStatus":"Active","lat":39.12662,"lon":-86.299761,"weatherLat":39.12662,"weatherLon":-86.299761,"sensitivity":1,"canopy":0.82,"official":"https://www.in.gov/dnr/forestry/properties/yellowwood-state-forest/","organization":"City of Indianapolis / Brown County State Park","note":"Public mountain-bike access and mapped trail location verified through the Indiana DNR Trails Inventory.","geometryVersion":1,"routeSource":{"name":"Indiana DNR Trails Inventory","url":"https://www.in.gov/dnr/state-parks/recreation/trails/indiana-trail-finder/","license":"Indiana Department of Natural Resources public trails inventory"},"dateVerified":"2026-07-28","soilProfile":{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":0.96,"textureFactor":0.9,"drainageFactor":1.06,"confidence":"High","sampleCoverage":"17/17","soilLat":39.12662,"soilLon":-86.299761,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:47.760Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('in-yellowwood', 1, '{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":0.96,"textureFactor":0.9,"drainageFactor":1.06,"confidence":"High","sampleCoverage":"17/17","soilLat":39.12662,"soilLon":-86.299761,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:47.760Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'High', 17,
  ST_SetSRID(ST_MakePoint(-86.299761, 39.12662), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('in-griffin', 'Griffin Bike Park', 'US', 'IN', 'West-Central Indiana', 'Bike park', 'Active',
  ST_SetSRID(ST_MakePoint(-87.360303, 39.337816), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-87.360303, 39.337816), 4326)::extensions.geography,
  '{"id":"in-griffin","name":"Griffin Bike Park","region":"West-Central Indiana","countryCode":"US","stateCode":"IN","listingType":"Bike park","recordStatus":"Active","lat":39.337816,"lon":-87.360303,"weatherLat":39.337816,"weatherLon":-87.360303,"sensitivity":1,"canopy":0.82,"official":"https://www.vigocounty.in.gov/department/index.php?structureid=32","organization":"Vigo County Park and Recreation Department / Griffin Bike Park","note":"Public mountain-bike access and mapped trail location verified through the Indiana DNR Trails Inventory.","geometryVersion":1,"routeSource":{"name":"Indiana DNR Trails Inventory","url":"https://www.in.gov/dnr/state-parks/recreation/trails/indiana-trail-finder/","license":"Indiana Department of Natural Resources public trails inventory"},"dateVerified":"2026-07-28","soilProfile":{"dominantSoil":"Silt Loam","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":0.96,"textureFactor":0.91,"drainageFactor":1.05,"confidence":"High","sampleCoverage":"17/17","soilLat":39.337816,"soilLon":-87.360303,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:49.540Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('in-griffin', 1, '{"dominantSoil":"Silt Loam","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":0.96,"textureFactor":0.91,"drainageFactor":1.05,"confidence":"High","sampleCoverage":"17/17","soilLat":39.337816,"soilLon":-87.360303,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:49.540Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'High', 17,
  ST_SetSRID(ST_MakePoint(-87.360303, 39.337816), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('in-town-run', 'Town Run Trail Park', 'US', 'IN', 'Indianapolis Area', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-86.084273, 39.918312), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-86.084273, 39.918312), 4326)::extensions.geography,
  '{"id":"in-town-run","name":"Town Run Trail Park","region":"Indianapolis Area","countryCode":"US","stateCode":"IN","listingType":"Trail system","recordStatus":"Active","lat":39.918312,"lon":-86.084273,"weatherLat":39.918312,"weatherLon":-86.084273,"sensitivity":1,"canopy":0.82,"official":"https://www.indy.gov/activity/find-a-park","organization":"Indy Parks Greenways","note":"Public mountain-bike access and mapped trail location verified through the Indiana DNR Trails Inventory.","geometryVersion":1,"routeSource":{"name":"Indiana DNR Trails Inventory","url":"https://www.in.gov/dnr/state-parks/recreation/trails/indiana-trail-finder/","license":"Indiana Department of Natural Resources public trails inventory"},"dateVerified":"2026-07-28","soilProfile":{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":0.96,"textureFactor":0.9,"drainageFactor":1.08,"confidence":"Medium","sampleCoverage":"11/17","soilLat":39.918312,"soilLon":-86.084273,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:51.450Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('in-town-run', 1, '{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":0.96,"textureFactor":0.9,"drainageFactor":1.08,"confidence":"Medium","sampleCoverage":"11/17","soilLat":39.918312,"soilLon":-86.084273,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:51.450Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'Medium', 11,
  ST_SetSRID(ST_MakePoint(-86.084273, 39.918312), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('in-southwestway', 'Southwestway Park', 'US', 'IN', 'Indianapolis Area', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-86.240469, 39.654009), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-86.240469, 39.654009), 4326)::extensions.geography,
  '{"id":"in-southwestway","name":"Southwestway Park","region":"Indianapolis Area","countryCode":"US","stateCode":"IN","listingType":"Trail system","recordStatus":"Active","lat":39.654009,"lon":-86.240469,"weatherLat":39.654009,"weatherLon":-86.240469,"sensitivity":1,"canopy":0.82,"official":"https://www.indy.gov/activity/find-a-park","organization":"Indy Parks Department","note":"Public mountain-bike access and mapped trail location verified through the Indiana DNR Trails Inventory.","geometryVersion":1,"routeSource":{"name":"Indiana DNR Trails Inventory","url":"https://www.in.gov/dnr/state-parks/recreation/trails/indiana-trail-finder/","license":"Indiana Department of Natural Resources public trails inventory"},"dateVerified":"2026-07-28","soilProfile":{"dominantSoil":"Silt Loam","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":0.94,"textureFactor":0.94,"drainageFactor":0.94,"confidence":"High","sampleCoverage":"17/17","soilLat":39.654009,"soilLon":-86.240469,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:53.222Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('in-southwestway', 1, '{"dominantSoil":"Silt Loam","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":0.94,"textureFactor":0.94,"drainageFactor":0.94,"confidence":"High","sampleCoverage":"17/17","soilLat":39.654009,"soilLon":-86.240469,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:53.222Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'High', 17,
  ST_SetSRID(ST_MakePoint(-86.240469, 39.654009), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('in-rangeline', 'Rangeline Nature Preserve', 'US', 'IN', 'East-Central Indiana', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-85.637916, 40.099791), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-85.637916, 40.099791), 4326)::extensions.geography,
  '{"id":"in-rangeline","name":"Rangeline Nature Preserve","region":"East-Central Indiana","countryCode":"US","stateCode":"IN","listingType":"Trail system","recordStatus":"Active","lat":40.099791,"lon":-85.637916,"weatherLat":40.099791,"weatherLon":-85.637916,"sensitivity":1,"canopy":0.82,"official":"https://www.cityofanderson.com/Facilities/Facility/Details/Rangeline-Nature-Preserve-12","organization":"Anderson Parks and Recreation Department","note":"Public mountain-bike access and mapped trail location verified through the Indiana DNR Trails Inventory.","geometryVersion":1,"routeSource":{"name":"Indiana DNR Trails Inventory","url":"https://www.in.gov/dnr/state-parks/recreation/trails/indiana-trail-finder/","license":"Indiana Department of Natural Resources public trails inventory"},"dateVerified":"2026-07-28","soilProfile":{"dominantSoil":"Silt Loam","secondarySoil":"Clay Loam","naturalDrainage":"Well drained","soilDryingFactor":0.93,"textureFactor":0.85,"drainageFactor":1.08,"confidence":"Low","sampleCoverage":"6/17","soilLat":40.099791,"soilLon":-85.637916,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:55.068Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('in-rangeline', 1, '{"dominantSoil":"Silt Loam","secondarySoil":"Clay Loam","naturalDrainage":"Well drained","soilDryingFactor":0.93,"textureFactor":0.85,"drainageFactor":1.08,"confidence":"Low","sampleCoverage":"6/17","soilLat":40.099791,"soilLon":-85.637916,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:55.068Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'Low', 6,
  ST_SetSRID(ST_MakePoint(-85.637916, 40.099791), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('in-winona-lake', 'Winona Lake Trail System', 'US', 'IN', 'North-Central Indiana', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-85.813957, 41.215231), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-85.813957, 41.215231), 4326)::extensions.geography,
  '{"id":"in-winona-lake","name":"Winona Lake Trail System","region":"North-Central Indiana","countryCode":"US","stateCode":"IN","listingType":"Trail system","recordStatus":"Active","lat":41.215231,"lon":-85.813957,"weatherLat":41.215231,"weatherLon":-85.813957,"sensitivity":1,"canopy":0.82,"official":"https://winonalaketrails.com/","organization":"City of Indianapolis","note":"Public mountain-bike access and mapped trail location verified through the Indiana DNR Trails Inventory.","geometryVersion":1,"routeSource":{"name":"Indiana DNR Trails Inventory","url":"https://www.in.gov/dnr/state-parks/recreation/trails/indiana-trail-finder/","license":"Indiana Department of Natural Resources public trails inventory"},"dateVerified":"2026-07-28","soilProfile":{"dominantSoil":"Sandy Loam","secondarySoil":"Sand","naturalDrainage":"Well drained","soilDryingFactor":1.14,"textureFactor":1.24,"drainageFactor":0.94,"confidence":"High","sampleCoverage":"17/17","soilLat":41.215231,"soilLon":-85.813957,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:56.702Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('in-winona-lake', 1, '{"dominantSoil":"Sandy Loam","secondarySoil":"Sand","naturalDrainage":"Well drained","soilDryingFactor":1.14,"textureFactor":1.24,"drainageFactor":0.94,"confidence":"High","sampleCoverage":"17/17","soilLat":41.215231,"soilLon":-85.813957,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:56.702Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'High', 17,
  ST_SetSRID(ST_MakePoint(-85.813957, 41.215231), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('in-imagination-glen', 'Imagination Glen — Outback Trail', 'US', 'IN', 'Northwest Indiana', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-87.137999, 41.591113), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-87.137999, 41.591113), 4326)::extensions.geography,
  '{"id":"in-imagination-glen","name":"Imagination Glen — Outback Trail","region":"Northwest Indiana","countryCode":"US","stateCode":"IN","listingType":"Trail system","recordStatus":"Active","lat":41.591113,"lon":-87.137999,"weatherLat":41.591113,"weatherLon":-87.137999,"sensitivity":1,"canopy":0.82,"official":"https://www.portagein.gov/Facilities/Facility/Details/Imagination-Glen-Park-7","organization":"Portage Park and Recreation Department","note":"Public mountain-bike access and mapped trail location verified through the Indiana DNR Trails Inventory.","geometryVersion":1,"routeSource":{"name":"Indiana DNR Trails Inventory","url":"https://www.in.gov/dnr/state-parks/recreation/trails/indiana-trail-finder/","license":"Indiana Department of Natural Resources public trails inventory"},"dateVerified":"2026-07-28","soilProfile":{"dominantSoil":"Silt Loam","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":0.91,"textureFactor":0.94,"drainageFactor":0.86,"confidence":"High","sampleCoverage":"17/17","soilLat":41.591113,"soilLon":-87.137999,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:58.236Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('in-imagination-glen', 1, '{"dominantSoil":"Silt Loam","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":0.91,"textureFactor":0.94,"drainageFactor":0.86,"confidence":"High","sampleCoverage":"17/17","soilLat":41.591113,"soilLon":-87.137999,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:58.236Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'High', 17,
  ST_SetSRID(ST_MakePoint(-87.137999, 41.591113), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('in-rum-village', 'Rum Village Mountain Bike Trails', 'US', 'IN', 'North-Central Indiana', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-86.275554, 41.645127), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-86.275554, 41.645127), 4326)::extensions.geography,
  '{"id":"in-rum-village","name":"Rum Village Mountain Bike Trails","region":"North-Central Indiana","countryCode":"US","stateCode":"IN","listingType":"Trail system","recordStatus":"Active","lat":41.645127,"lon":-86.275554,"weatherLat":41.645127,"weatherLon":-86.275554,"sensitivity":1,"canopy":0.82,"official":"https://sbvpa.org/parks/rum-village-park/","organization":"South Bend Venues Parks & Arts","note":"Public mountain-bike access and mapped trail location verified through the Indiana DNR Trails Inventory.","geometryVersion":1,"routeSource":{"name":"Indiana DNR Trails Inventory","url":"https://www.in.gov/dnr/state-parks/recreation/trails/indiana-trail-finder/","license":"Indiana Department of Natural Resources public trails inventory"},"dateVerified":"2026-07-28","soilProfile":{"dominantSoil":"Sandy Loam","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":1.14,"textureFactor":1.17,"drainageFactor":1.06,"confidence":"High","sampleCoverage":"16/17","soilLat":41.645127,"soilLon":-86.275554,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:59.955Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('in-rum-village', 1, '{"dominantSoil":"Sandy Loam","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":1.14,"textureFactor":1.17,"drainageFactor":1.06,"confidence":"High","sampleCoverage":"16/17","soilLat":41.645127,"soilLon":-86.275554,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:59.955Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'High', 16,
  ST_SetSRID(ST_MakePoint(-86.275554, 41.645127), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('in-franke-park', 'Franke Park Trails', 'US', 'IN', 'Northeast Indiana', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-85.160635, 41.109589), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-85.160635, 41.109589), 4326)::extensions.geography,
  '{"id":"in-franke-park","name":"Franke Park Trails","region":"Northeast Indiana","countryCode":"US","stateCode":"IN","listingType":"Trail system","recordStatus":"Active","lat":41.109589,"lon":-85.160635,"weatherLat":41.109589,"weatherLon":-85.160635,"sensitivity":1,"canopy":0.82,"official":"https://www.fortwayneparks.org/parks/park-page-links/36-parks/park-page-links/118-franke-park.html","organization":"Fort Wayne Parks and Recreation Department","note":"Public mountain-bike access and mapped trail location verified through the Indiana DNR Trails Inventory.","geometryVersion":1,"routeSource":{"name":"Indiana DNR Trails Inventory","url":"https://www.in.gov/dnr/state-parks/recreation/trails/indiana-trail-finder/","license":"Indiana Department of Natural Resources public trails inventory"},"dateVerified":"2026-07-28","soilProfile":{"dominantSoil":"Silt Loam","secondarySoil":"Clay Loam","naturalDrainage":"Moderately well drained","soilDryingFactor":0.89,"textureFactor":0.89,"drainageFactor":0.89,"confidence":"High","sampleCoverage":"17/17","soilLat":41.109589,"soilLon":-85.160635,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:44:02.974Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('in-franke-park', 1, '{"dominantSoil":"Silt Loam","secondarySoil":"Clay Loam","naturalDrainage":"Moderately well drained","soilDryingFactor":0.89,"textureFactor":0.89,"drainageFactor":0.89,"confidence":"High","sampleCoverage":"17/17","soilLat":41.109589,"soilLon":-85.160635,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:44:02.974Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'High', 17,
  ST_SetSRID(ST_MakePoint(-85.160635, 41.109589), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('in-wapahani', 'Wapahani Mountain Bike Park', 'US', 'IN', 'Bloomington Area', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-86.569467, 39.141888), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-86.569467, 39.141888), 4326)::extensions.geography,
  '{"id":"in-wapahani","name":"Wapahani Mountain Bike Park","region":"Bloomington Area","countryCode":"US","stateCode":"IN","listingType":"Trail system","recordStatus":"Active","lat":39.141888,"lon":-86.569467,"weatherLat":39.141888,"weatherLon":-86.569467,"sensitivity":1,"canopy":0.82,"official":"https://bloomington.in.gov/parks/parks/wapahani","organization":"Bloomington Park and Recreation Department","note":"Public mountain-bike access and mapped trail location verified through the Indiana DNR Trails Inventory.","geometryVersion":1,"routeSource":{"name":"Indiana DNR Trails Inventory","url":"https://www.in.gov/dnr/state-parks/recreation/trails/indiana-trail-finder/","license":"Indiana Department of Natural Resources public trails inventory"},"dateVerified":"2026-07-28","soilProfile":{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":0.96,"textureFactor":0.9,"drainageFactor":1.08,"confidence":"High","sampleCoverage":"17/17","soilLat":39.141888,"soilLon":-86.569467,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:44:04.557Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('in-wapahani', 1, '{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":0.96,"textureFactor":0.9,"drainageFactor":1.08,"confidence":"High","sampleCoverage":"17/17","soilLat":39.141888,"soilLon":-86.569467,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:44:04.557Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'High', 17,
  ST_SetSRID(ST_MakePoint(-86.569467, 39.141888), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

commit;

select state_code, count(*) as active_trails
from public.trail_systems
where record_status = 'Active' and state_code in ('OH', 'WV', 'IN')
group by state_code
order by state_code;

select t.id, t.name, t.region, s.confidence, s.usable_samples
from public.trail_systems t
join public.trail_soil_profiles s on s.trail_id = t.id and s.geometry_version = t.geometry_version
where t.state_code = 'IN'
order by t.name;
