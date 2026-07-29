-- V73: verified Pennsylvania mountain-bike trail systems.
-- Requires the V70 nationwide foundation. Existing trails and rider reports are preserved.
-- Official route geometry was used for centers and soil research but is not stored or published.

begin;

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('pa-big-elk-creek', 'Big Elk Creek State Park', 'US', 'PA', 'Southeast Pennsylvania', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-75.861347, 39.736141), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-75.861347, 39.736141), 4326)::extensions.geography,
  '{"id":"pa-big-elk-creek","name":"Big Elk Creek State Park","region":"Southeast Pennsylvania","countryCode":"US","stateCode":"PA","listingType":"Trail system","recordStatus":"Active","lat":39.736141,"lon":-75.861347,"weatherLat":39.736141,"weatherLon":-75.861347,"sensitivity":1,"canopy":0.82,"official":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","organization":"Pennsylvania Department of Conservation and Natural Resources","note":"Promoted mountain-bike access and mapped trail location verified through Pennsylvania DCNR.","geometryVersion":1,"routeSource":{"name":"Pennsylvania DCNR State Park Trails","url":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","license":"Commonwealth of Pennsylvania public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Loam","secondarySoil":"Silt Loam","naturalDrainage":"Well drained","soilDryingFactor":1,"textureFactor":0.98,"drainageFactor":1.04,"confidence":"High","sampleCoverage":"17/17","soilLat":39.736141,"soilLon":-75.861347,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:13:54.116Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('pa-big-elk-creek', 1, '{"dominantSoil":"Loam","secondarySoil":"Silt Loam","naturalDrainage":"Well drained","soilDryingFactor":1,"textureFactor":0.98,"drainageFactor":1.04,"confidence":"High","sampleCoverage":"17/17","soilLat":39.736141,"soilLon":-75.861347,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:13:54.116Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'High', 17,
  ST_SetSRID(ST_MakePoint(-75.861347, 39.736141), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('pa-blue-knob', 'Blue Knob State Park', 'US', 'PA', 'South-Central Pennsylvania', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-78.589074, 40.288334), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-78.589074, 40.288334), 4326)::extensions.geography,
  '{"id":"pa-blue-knob","name":"Blue Knob State Park","region":"South-Central Pennsylvania","countryCode":"US","stateCode":"PA","listingType":"Trail system","recordStatus":"Active","lat":40.288334,"lon":-78.589074,"weatherLat":40.288334,"weatherLon":-78.589074,"sensitivity":1,"canopy":0.82,"official":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","organization":"Pennsylvania Department of Conservation and Natural Resources","note":"Promoted mountain-bike access and mapped trail location verified through Pennsylvania DCNR.","geometryVersion":1,"routeSource":{"name":"Pennsylvania DCNR State Park Trails","url":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","license":"Commonwealth of Pennsylvania public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":0.96,"textureFactor":0.9,"drainageFactor":1.08,"confidence":"High","sampleCoverage":"17/17","soilLat":40.288334,"soilLon":-78.589074,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:13:55.784Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('pa-blue-knob', 1, '{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":0.96,"textureFactor":0.9,"drainageFactor":1.08,"confidence":"High","sampleCoverage":"17/17","soilLat":40.288334,"soilLon":-78.589074,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:13:55.784Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'High', 17,
  ST_SetSRID(ST_MakePoint(-78.589074, 40.288334), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('pa-codorus', 'Codorus State Park', 'US', 'PA', 'Southeast Pennsylvania', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-76.927814, 39.786049), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-76.927814, 39.786049), 4326)::extensions.geography,
  '{"id":"pa-codorus","name":"Codorus State Park","region":"Southeast Pennsylvania","countryCode":"US","stateCode":"PA","listingType":"Trail system","recordStatus":"Active","lat":39.786049,"lon":-76.927814,"weatherLat":39.786049,"weatherLon":-76.927814,"sensitivity":1,"canopy":0.82,"official":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","organization":"Pennsylvania Department of Conservation and Natural Resources","note":"Promoted mountain-bike access and mapped trail location verified through Pennsylvania DCNR.","geometryVersion":1,"routeSource":{"name":"Pennsylvania DCNR State Park Trails","url":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","license":"Commonwealth of Pennsylvania public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Silt Loam","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":1.01,"textureFactor":0.94,"drainageFactor":1.13,"confidence":"High","sampleCoverage":"17/17","soilLat":39.786049,"soilLon":-76.927814,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:13:57.458Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('pa-codorus', 1, '{"dominantSoil":"Silt Loam","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":1.01,"textureFactor":0.94,"drainageFactor":1.13,"confidence":"High","sampleCoverage":"17/17","soilLat":39.786049,"soilLon":-76.927814,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:13:57.458Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'High', 17,
  ST_SetSRID(ST_MakePoint(-76.927814, 39.786049), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('pa-delaware-canal', 'Delaware Canal State Park', 'US', 'PA', 'Eastern Pennsylvania', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-74.999956, 40.407405), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-74.999956, 40.407405), 4326)::extensions.geography,
  '{"id":"pa-delaware-canal","name":"Delaware Canal State Park","region":"Eastern Pennsylvania","countryCode":"US","stateCode":"PA","listingType":"Trail system","recordStatus":"Active","lat":40.407405,"lon":-74.999956,"weatherLat":40.407405,"weatherLon":-74.999956,"sensitivity":1,"canopy":0.82,"official":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","organization":"Pennsylvania Department of Conservation and Natural Resources","note":"Promoted mountain-bike access and mapped trail location verified through Pennsylvania DCNR.","geometryVersion":1,"routeSource":{"name":"Pennsylvania DCNR State Park Trails","url":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","license":"Commonwealth of Pennsylvania public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Loam","secondarySoil":"Silt Loam","naturalDrainage":"Well drained","soilDryingFactor":1,"textureFactor":1,"drainageFactor":1,"confidence":"Medium-high","sampleCoverage":"16/17","soilLat":40.407405,"soilLon":-74.999956,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:13:59.170Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('pa-delaware-canal', 1, '{"dominantSoil":"Loam","secondarySoil":"Silt Loam","naturalDrainage":"Well drained","soilDryingFactor":1,"textureFactor":1,"drainageFactor":1,"confidence":"Medium-high","sampleCoverage":"16/17","soilLat":40.407405,"soilLon":-74.999956,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:13:59.170Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'Medium-high', 16,
  ST_SetSRID(ST_MakePoint(-74.999956, 40.407405), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('pa-evansburg', 'Evansburg State Park', 'US', 'PA', 'Southeast Pennsylvania', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-75.430109, 40.164928), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-75.430109, 40.164928), 4326)::extensions.geography,
  '{"id":"pa-evansburg","name":"Evansburg State Park","region":"Southeast Pennsylvania","countryCode":"US","stateCode":"PA","listingType":"Trail system","recordStatus":"Active","lat":40.164928,"lon":-75.430109,"weatherLat":40.164928,"weatherLon":-75.430109,"sensitivity":1,"canopy":0.82,"official":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","organization":"Pennsylvania Department of Conservation and Natural Resources","note":"Promoted mountain-bike access and mapped trail location verified through Pennsylvania DCNR.","geometryVersion":1,"routeSource":{"name":"Pennsylvania DCNR State Park Trails","url":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","license":"Commonwealth of Pennsylvania public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Loam","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":1.03,"textureFactor":1,"drainageFactor":1.08,"confidence":"High","sampleCoverage":"17/17","soilLat":40.164928,"soilLon":-75.430109,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:01.536Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('pa-evansburg', 1, '{"dominantSoil":"Loam","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":1.03,"textureFactor":1,"drainageFactor":1.08,"confidence":"High","sampleCoverage":"17/17","soilLat":40.164928,"soilLon":-75.430109,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:01.536Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'High', 17,
  ST_SetSRID(ST_MakePoint(-75.430109, 40.164928), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('pa-french-creek', 'French Creek State Park', 'US', 'PA', 'Southeast Pennsylvania', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-75.774067, 40.217897), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-75.774067, 40.217897), 4326)::extensions.geography,
  '{"id":"pa-french-creek","name":"French Creek State Park","region":"Southeast Pennsylvania","countryCode":"US","stateCode":"PA","listingType":"Trail system","recordStatus":"Active","lat":40.217897,"lon":-75.774067,"weatherLat":40.217897,"weatherLon":-75.774067,"sensitivity":1,"canopy":0.82,"official":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","organization":"Pennsylvania Department of Conservation and Natural Resources","note":"Promoted mountain-bike access and mapped trail location verified through Pennsylvania DCNR.","geometryVersion":1,"routeSource":{"name":"Pennsylvania DCNR State Park Trails","url":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","license":"Commonwealth of Pennsylvania public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Loam","secondarySoil":"Silt Loam","naturalDrainage":"Well drained","soilDryingFactor":1.01,"textureFactor":0.98,"drainageFactor":1.07,"confidence":"High","sampleCoverage":"17/17","soilLat":40.217897,"soilLon":-75.774067,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:03.066Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('pa-french-creek', 1, '{"dominantSoil":"Loam","secondarySoil":"Silt Loam","naturalDrainage":"Well drained","soilDryingFactor":1.01,"textureFactor":0.98,"drainageFactor":1.07,"confidence":"High","sampleCoverage":"17/17","soilLat":40.217897,"soilLon":-75.774067,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:03.066Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'High', 17,
  ST_SetSRID(ST_MakePoint(-75.774067, 40.217897), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('pa-gouldsboro', 'Gouldsboro State Park', 'US', 'PA', 'Northeast Pennsylvania', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-75.476949, 41.221578), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-75.476949, 41.221578), 4326)::extensions.geography,
  '{"id":"pa-gouldsboro","name":"Gouldsboro State Park","region":"Northeast Pennsylvania","countryCode":"US","stateCode":"PA","listingType":"Trail system","recordStatus":"Active","lat":41.221578,"lon":-75.476949,"weatherLat":41.221578,"weatherLon":-75.476949,"sensitivity":1,"canopy":0.82,"official":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","organization":"Pennsylvania Department of Conservation and Natural Resources","note":"Promoted mountain-bike access and mapped trail location verified through Pennsylvania DCNR.","geometryVersion":1,"routeSource":{"name":"Pennsylvania DCNR State Park Trails","url":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","license":"Commonwealth of Pennsylvania public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Loam","secondarySoil":"Sandy Loam","naturalDrainage":"Moderately well drained","soilDryingFactor":1.04,"textureFactor":1.1,"drainageFactor":0.93,"confidence":"Medium","sampleCoverage":"9/17","soilLat":41.221578,"soilLon":-75.476949,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:04.691Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('pa-gouldsboro', 1, '{"dominantSoil":"Loam","secondarySoil":"Sandy Loam","naturalDrainage":"Moderately well drained","soilDryingFactor":1.04,"textureFactor":1.1,"drainageFactor":0.93,"confidence":"Medium","sampleCoverage":"9/17","soilLat":41.221578,"soilLon":-75.476949,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:04.691Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'Medium', 9,
  ST_SetSRID(ST_MakePoint(-75.476949, 41.221578), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('pa-lackawanna', 'Lackawanna State Park', 'US', 'PA', 'Northeast Pennsylvania', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-75.702932, 41.567773), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-75.702932, 41.567773), 4326)::extensions.geography,
  '{"id":"pa-lackawanna","name":"Lackawanna State Park","region":"Northeast Pennsylvania","countryCode":"US","stateCode":"PA","listingType":"Trail system","recordStatus":"Active","lat":41.567773,"lon":-75.702932,"weatherLat":41.567773,"weatherLon":-75.702932,"sensitivity":1,"canopy":0.82,"official":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","organization":"Pennsylvania Department of Conservation and Natural Resources","note":"Promoted mountain-bike access and mapped trail location verified through Pennsylvania DCNR.","geometryVersion":1,"routeSource":{"name":"Pennsylvania DCNR State Park Trails","url":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","license":"Commonwealth of Pennsylvania public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Loam","secondarySoil":"Silt Loam","naturalDrainage":"Somewhat poorly drained","soilDryingFactor":0.95,"textureFactor":0.98,"drainageFactor":0.88,"confidence":"Medium","sampleCoverage":"11/17","soilLat":41.567773,"soilLon":-75.702932,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:06.558Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('pa-lackawanna', 1, '{"dominantSoil":"Loam","secondarySoil":"Silt Loam","naturalDrainage":"Somewhat poorly drained","soilDryingFactor":0.95,"textureFactor":0.98,"drainageFactor":0.88,"confidence":"Medium","sampleCoverage":"11/17","soilLat":41.567773,"soilLon":-75.702932,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:06.558Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'Medium', 11,
  ST_SetSRID(ST_MakePoint(-75.702932, 41.567773), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('pa-laurel-hill', 'Laurel Hill State Park', 'US', 'PA', 'South-Central Pennsylvania', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-79.246041, 40.015222), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-79.246041, 40.015222), 4326)::extensions.geography,
  '{"id":"pa-laurel-hill","name":"Laurel Hill State Park","region":"South-Central Pennsylvania","countryCode":"US","stateCode":"PA","listingType":"Trail system","recordStatus":"Active","lat":40.015222,"lon":-79.246041,"weatherLat":40.015222,"weatherLon":-79.246041,"sensitivity":1,"canopy":0.82,"official":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","organization":"Pennsylvania Department of Conservation and Natural Resources","note":"Promoted mountain-bike access and mapped trail location verified through Pennsylvania DCNR.","geometryVersion":1,"routeSource":{"name":"Pennsylvania DCNR State Park Trails","url":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","license":"Commonwealth of Pennsylvania public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":0.93,"textureFactor":0.9,"drainageFactor":1,"confidence":"Medium-high","sampleCoverage":"12/17","soilLat":40.015222,"soilLon":-79.246041,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:08.388Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('pa-laurel-hill', 1, '{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":0.93,"textureFactor":0.9,"drainageFactor":1,"confidence":"Medium-high","sampleCoverage":"12/17","soilLat":40.015222,"soilLon":-79.246041,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:08.388Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'Medium-high', 12,
  ST_SetSRID(ST_MakePoint(-79.246041, 40.015222), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('pa-lehigh-gorge', 'Lehigh Gorge State Park', 'US', 'PA', 'Northeast Pennsylvania', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-75.768516, 41.04835), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-75.768516, 41.04835), 4326)::extensions.geography,
  '{"id":"pa-lehigh-gorge","name":"Lehigh Gorge State Park","region":"Northeast Pennsylvania","countryCode":"US","stateCode":"PA","listingType":"Trail system","recordStatus":"Active","lat":41.04835,"lon":-75.768516,"weatherLat":41.04835,"weatherLon":-75.768516,"sensitivity":1,"canopy":0.82,"official":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","organization":"Pennsylvania Department of Conservation and Natural Resources","note":"Promoted mountain-bike access and mapped trail location verified through Pennsylvania DCNR.","geometryVersion":1,"routeSource":{"name":"Pennsylvania DCNR State Park Trails","url":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","license":"Commonwealth of Pennsylvania public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Sandy Loam","secondarySoil":"Loam","naturalDrainage":"Moderately well drained","soilDryingFactor":1.07,"textureFactor":1.1,"drainageFactor":1.02,"confidence":"Medium","sampleCoverage":"9/17","soilLat":41.04835,"soilLon":-75.768516,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:10.016Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('pa-lehigh-gorge', 1, '{"dominantSoil":"Sandy Loam","secondarySoil":"Loam","naturalDrainage":"Moderately well drained","soilDryingFactor":1.07,"textureFactor":1.1,"drainageFactor":1.02,"confidence":"Medium","sampleCoverage":"9/17","soilLat":41.04835,"soilLon":-75.768516,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:10.016Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'Medium', 9,
  ST_SetSRID(ST_MakePoint(-75.768516, 41.04835), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('pa-marsh-creek', 'Marsh Creek State Park', 'US', 'PA', 'Southeast Pennsylvania', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-75.731037, 40.074005), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-75.731037, 40.074005), 4326)::extensions.geography,
  '{"id":"pa-marsh-creek","name":"Marsh Creek State Park","region":"Southeast Pennsylvania","countryCode":"US","stateCode":"PA","listingType":"Trail system","recordStatus":"Active","lat":40.074005,"lon":-75.731037,"weatherLat":40.074005,"weatherLon":-75.731037,"sensitivity":1,"canopy":0.82,"official":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","organization":"Pennsylvania Department of Conservation and Natural Resources","note":"Promoted mountain-bike access and mapped trail location verified through Pennsylvania DCNR.","geometryVersion":1,"routeSource":{"name":"Pennsylvania DCNR State Park Trails","url":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","license":"Commonwealth of Pennsylvania public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Loam","secondarySoil":"Silt Loam","naturalDrainage":"Well drained","soilDryingFactor":1.04,"textureFactor":0.99,"drainageFactor":1.12,"confidence":"High","sampleCoverage":"17/17","soilLat":40.074005,"soilLon":-75.731037,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:11.782Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('pa-marsh-creek', 1, '{"dominantSoil":"Loam","secondarySoil":"Silt Loam","naturalDrainage":"Well drained","soilDryingFactor":1.04,"textureFactor":0.99,"drainageFactor":1.12,"confidence":"High","sampleCoverage":"17/17","soilLat":40.074005,"soilLon":-75.731037,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:11.782Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'High', 17,
  ST_SetSRID(ST_MakePoint(-75.731037, 40.074005), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('pa-nockamixon', 'Nockamixon State Park', 'US', 'PA', 'Eastern Pennsylvania', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-75.188269, 40.489207), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-75.188269, 40.489207), 4326)::extensions.geography,
  '{"id":"pa-nockamixon","name":"Nockamixon State Park","region":"Eastern Pennsylvania","countryCode":"US","stateCode":"PA","listingType":"Trail system","recordStatus":"Active","lat":40.489207,"lon":-75.188269,"weatherLat":40.489207,"weatherLon":-75.188269,"sensitivity":1,"canopy":0.82,"official":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","organization":"Pennsylvania Department of Conservation and Natural Resources","note":"Promoted mountain-bike access and mapped trail location verified through Pennsylvania DCNR.","geometryVersion":1,"routeSource":{"name":"Pennsylvania DCNR State Park Trails","url":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","license":"Commonwealth of Pennsylvania public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Somewhat poorly drained","soilDryingFactor":0.88,"textureFactor":0.9,"drainageFactor":0.83,"confidence":"High","sampleCoverage":"17/17","soilLat":40.489207,"soilLon":-75.188269,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:13.394Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('pa-nockamixon', 1, '{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Somewhat poorly drained","soilDryingFactor":0.88,"textureFactor":0.9,"drainageFactor":0.83,"confidence":"High","sampleCoverage":"17/17","soilLat":40.489207,"soilLon":-75.188269,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:13.394Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'High', 17,
  ST_SetSRID(ST_MakePoint(-75.188269, 40.489207), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('pa-ohiopyle', 'Ohiopyle State Park', 'US', 'PA', 'South-Central Pennsylvania', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-79.483916, 39.846908), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-79.483916, 39.846908), 4326)::extensions.geography,
  '{"id":"pa-ohiopyle","name":"Ohiopyle State Park","region":"South-Central Pennsylvania","countryCode":"US","stateCode":"PA","listingType":"Trail system","recordStatus":"Active","lat":39.846908,"lon":-79.483916,"weatherLat":39.846908,"weatherLon":-79.483916,"sensitivity":1,"canopy":0.82,"official":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","organization":"Pennsylvania Department of Conservation and Natural Resources","note":"Promoted mountain-bike access and mapped trail location verified through Pennsylvania DCNR.","geometryVersion":1,"routeSource":{"name":"Pennsylvania DCNR State Park Trails","url":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","license":"Commonwealth of Pennsylvania public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":0.96,"textureFactor":0.9,"drainageFactor":1.08,"confidence":"Medium","sampleCoverage":"11/17","soilLat":39.846908,"soilLon":-79.483916,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:14.938Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('pa-ohiopyle', 1, '{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":0.96,"textureFactor":0.9,"drainageFactor":1.08,"confidence":"Medium","sampleCoverage":"11/17","soilLat":39.846908,"soilLon":-79.483916,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:14.938Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'Medium', 11,
  ST_SetSRID(ST_MakePoint(-79.483916, 39.846908), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('pa-oil-creek', 'Oil Creek State Park', 'US', 'PA', 'North-Central Pennsylvania', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-79.657339, 41.564179), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-79.657339, 41.564179), 4326)::extensions.geography,
  '{"id":"pa-oil-creek","name":"Oil Creek State Park","region":"North-Central Pennsylvania","countryCode":"US","stateCode":"PA","listingType":"Trail system","recordStatus":"Active","lat":41.564179,"lon":-79.657339,"weatherLat":41.564179,"weatherLon":-79.657339,"sensitivity":1,"canopy":0.82,"official":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","organization":"Pennsylvania Department of Conservation and Natural Resources","note":"Promoted mountain-bike access and mapped trail location verified through Pennsylvania DCNR.","geometryVersion":1,"routeSource":{"name":"Pennsylvania DCNR State Park Trails","url":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","license":"Commonwealth of Pennsylvania public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Loam","secondarySoil":"Silt Loam","naturalDrainage":"Well drained","soilDryingFactor":0.98,"textureFactor":0.96,"drainageFactor":1.01,"confidence":"High","sampleCoverage":"17/17","soilLat":41.564179,"soilLon":-79.657339,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:16.469Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('pa-oil-creek', 1, '{"dominantSoil":"Loam","secondarySoil":"Silt Loam","naturalDrainage":"Well drained","soilDryingFactor":0.98,"textureFactor":0.96,"drainageFactor":1.01,"confidence":"High","sampleCoverage":"17/17","soilLat":41.564179,"soilLon":-79.657339,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:16.469Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'High', 17,
  ST_SetSRID(ST_MakePoint(-79.657339, 41.564179), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('pa-promised-land', 'Promised Land State Park', 'US', 'PA', 'Northeast Pennsylvania', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-75.221476, 41.319995), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-75.221476, 41.319995), 4326)::extensions.geography,
  '{"id":"pa-promised-land","name":"Promised Land State Park","region":"Northeast Pennsylvania","countryCode":"US","stateCode":"PA","listingType":"Trail system","recordStatus":"Active","lat":41.319995,"lon":-75.221476,"weatherLat":41.319995,"weatherLon":-75.221476,"sensitivity":1,"canopy":0.82,"official":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","organization":"Pennsylvania Department of Conservation and Natural Resources","note":"Promoted mountain-bike access and mapped trail location verified through Pennsylvania DCNR.","geometryVersion":1,"routeSource":{"name":"Pennsylvania DCNR State Park Trails","url":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","license":"Commonwealth of Pennsylvania public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Loam","secondarySoil":"Sandy Loam","naturalDrainage":"Somewhat poorly drained","soilDryingFactor":1.01,"textureFactor":1.05,"drainageFactor":0.92,"confidence":"Medium","sampleCoverage":"11/17","soilLat":41.319995,"soilLon":-75.221476,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:18.114Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('pa-promised-land', 1, '{"dominantSoil":"Loam","secondarySoil":"Sandy Loam","naturalDrainage":"Somewhat poorly drained","soilDryingFactor":1.01,"textureFactor":1.05,"drainageFactor":0.92,"confidence":"Medium","sampleCoverage":"11/17","soilLat":41.319995,"soilLon":-75.221476,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:18.114Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'Medium', 11,
  ST_SetSRID(ST_MakePoint(-75.221476, 41.319995), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('pa-prompton', 'Prompton State Park', 'US', 'PA', 'Northeast Pennsylvania', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-75.335026, 41.612947), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-75.335026, 41.612947), 4326)::extensions.geography,
  '{"id":"pa-prompton","name":"Prompton State Park","region":"Northeast Pennsylvania","countryCode":"US","stateCode":"PA","listingType":"Trail system","recordStatus":"Active","lat":41.612947,"lon":-75.335026,"weatherLat":41.612947,"weatherLon":-75.335026,"sensitivity":1,"canopy":0.82,"official":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","organization":"Pennsylvania Department of Conservation and Natural Resources","note":"Promoted mountain-bike access and mapped trail location verified through Pennsylvania DCNR.","geometryVersion":1,"routeSource":{"name":"Pennsylvania DCNR State Park Trails","url":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","license":"Commonwealth of Pennsylvania public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Loam","secondarySoil":"Silt Loam","naturalDrainage":"Moderately well drained","soilDryingFactor":0.98,"textureFactor":0.99,"drainageFactor":0.96,"confidence":"Medium","sampleCoverage":"10/17","soilLat":41.612947,"soilLon":-75.335026,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:19.748Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('pa-prompton', 1, '{"dominantSoil":"Loam","secondarySoil":"Silt Loam","naturalDrainage":"Moderately well drained","soilDryingFactor":0.98,"textureFactor":0.99,"drainageFactor":0.96,"confidence":"Medium","sampleCoverage":"10/17","soilLat":41.612947,"soilLon":-75.335026,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:19.748Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'Medium', 10,
  ST_SetSRID(ST_MakePoint(-75.335026, 41.612947), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('pa-pymatuning', 'Pymatuning State Park', 'US', 'PA', 'Northwest Pennsylvania', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-80.446113, 41.609896), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-80.446113, 41.609896), 4326)::extensions.geography,
  '{"id":"pa-pymatuning","name":"Pymatuning State Park","region":"Northwest Pennsylvania","countryCode":"US","stateCode":"PA","listingType":"Trail system","recordStatus":"Active","lat":41.609896,"lon":-80.446113,"weatherLat":41.609896,"weatherLon":-80.446113,"sensitivity":1,"canopy":0.82,"official":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","organization":"Pennsylvania Department of Conservation and Natural Resources","note":"Promoted mountain-bike access and mapped trail location verified through Pennsylvania DCNR.","geometryVersion":1,"routeSource":{"name":"Pennsylvania DCNR State Park Trails","url":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","license":"Commonwealth of Pennsylvania public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Silt Loam","secondarySoil":"Loam","naturalDrainage":"Somewhat poorly drained","soilDryingFactor":0.91,"textureFactor":0.93,"drainageFactor":0.87,"confidence":"High","sampleCoverage":"16/17","soilLat":41.609896,"soilLon":-80.446113,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:21.291Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('pa-pymatuning', 1, '{"dominantSoil":"Silt Loam","secondarySoil":"Loam","naturalDrainage":"Somewhat poorly drained","soilDryingFactor":0.91,"textureFactor":0.93,"drainageFactor":0.87,"confidence":"High","sampleCoverage":"16/17","soilLat":41.609896,"soilLon":-80.446113,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:21.291Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'High', 16,
  ST_SetSRID(ST_MakePoint(-80.446113, 41.609896), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('pa-ralph-stover', 'Ralph Stover State Park', 'US', 'PA', 'Eastern Pennsylvania', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-75.098506, 40.435425), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-75.098506, 40.435425), 4326)::extensions.geography,
  '{"id":"pa-ralph-stover","name":"Ralph Stover State Park","region":"Eastern Pennsylvania","countryCode":"US","stateCode":"PA","listingType":"Trail system","recordStatus":"Active","lat":40.435425,"lon":-75.098506,"weatherLat":40.435425,"weatherLon":-75.098506,"sensitivity":1,"canopy":0.82,"official":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","organization":"Pennsylvania Department of Conservation and Natural Resources","note":"Promoted mountain-bike access and mapped trail location verified through Pennsylvania DCNR.","geometryVersion":1,"routeSource":{"name":"Pennsylvania DCNR State Park Trails","url":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","license":"Commonwealth of Pennsylvania public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Loam","secondarySoil":"Silt Loam","naturalDrainage":"Well drained","soilDryingFactor":0.99,"textureFactor":0.96,"drainageFactor":1.04,"confidence":"High","sampleCoverage":"17/17","soilLat":40.435425,"soilLon":-75.098506,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:22.814Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('pa-ralph-stover', 1, '{"dominantSoil":"Loam","secondarySoil":"Silt Loam","naturalDrainage":"Well drained","soilDryingFactor":0.99,"textureFactor":0.96,"drainageFactor":1.04,"confidence":"High","sampleCoverage":"17/17","soilLat":40.435425,"soilLon":-75.098506,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:22.814Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'High', 17,
  ST_SetSRID(ST_MakePoint(-75.098506, 40.435425), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('pa-salt-springs', 'Salt Springs State Park', 'US', 'PA', 'Northeast Pennsylvania', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-75.870365, 41.906724), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-75.870365, 41.906724), 4326)::extensions.geography,
  '{"id":"pa-salt-springs","name":"Salt Springs State Park","region":"Northeast Pennsylvania","countryCode":"US","stateCode":"PA","listingType":"Trail system","recordStatus":"Active","lat":41.906724,"lon":-75.870365,"weatherLat":41.906724,"weatherLon":-75.870365,"sensitivity":1,"canopy":0.82,"official":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","organization":"Pennsylvania Department of Conservation and Natural Resources","note":"Promoted mountain-bike access and mapped trail location verified through Pennsylvania DCNR.","geometryVersion":1,"routeSource":{"name":"Pennsylvania DCNR State Park Trails","url":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","license":"Commonwealth of Pennsylvania public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Silt Loam","secondarySoil":"Loam","naturalDrainage":"Somewhat poorly drained","soilDryingFactor":0.92,"textureFactor":0.92,"drainageFactor":0.93,"confidence":"Medium","sampleCoverage":"9/17","soilLat":41.906724,"soilLon":-75.870365,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:24.599Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('pa-salt-springs', 1, '{"dominantSoil":"Silt Loam","secondarySoil":"Loam","naturalDrainage":"Somewhat poorly drained","soilDryingFactor":0.92,"textureFactor":0.92,"drainageFactor":0.93,"confidence":"Medium","sampleCoverage":"9/17","soilLat":41.906724,"soilLon":-75.870365,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:24.599Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'Medium', 9,
  ST_SetSRID(ST_MakePoint(-75.870365, 41.906724), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('pa-shawnee', 'Shawnee State Park', 'US', 'PA', 'South-Central Pennsylvania', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-78.615539, 40.046808), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-78.615539, 40.046808), 4326)::extensions.geography,
  '{"id":"pa-shawnee","name":"Shawnee State Park","region":"South-Central Pennsylvania","countryCode":"US","stateCode":"PA","listingType":"Trail system","recordStatus":"Active","lat":40.046808,"lon":-78.615539,"weatherLat":40.046808,"weatherLon":-78.615539,"sensitivity":1,"canopy":0.82,"official":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","organization":"Pennsylvania Department of Conservation and Natural Resources","note":"Promoted mountain-bike access and mapped trail location verified through Pennsylvania DCNR.","geometryVersion":1,"routeSource":{"name":"Pennsylvania DCNR State Park Trails","url":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","license":"Commonwealth of Pennsylvania public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Moderately well drained","soilDryingFactor":0.93,"textureFactor":0.9,"drainageFactor":0.99,"confidence":"High","sampleCoverage":"17/17","soilLat":40.046808,"soilLon":-78.615539,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:26.219Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('pa-shawnee', 1, '{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Moderately well drained","soilDryingFactor":0.93,"textureFactor":0.9,"drainageFactor":0.99,"confidence":"High","sampleCoverage":"17/17","soilLat":40.046808,"soilLon":-78.615539,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:26.219Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'High', 17,
  ST_SetSRID(ST_MakePoint(-78.615539, 40.046808), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('pa-susquehannock', 'Susquehannock State Park', 'US', 'PA', 'Southeast Pennsylvania', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-76.343361, 39.846577), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-76.343361, 39.846577), 4326)::extensions.geography,
  '{"id":"pa-susquehannock","name":"Susquehannock State Park","region":"Southeast Pennsylvania","countryCode":"US","stateCode":"PA","listingType":"Trail system","recordStatus":"Active","lat":39.846577,"lon":-76.343361,"weatherLat":39.846577,"weatherLon":-76.343361,"sensitivity":1,"canopy":0.82,"official":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","organization":"Pennsylvania Department of Conservation and Natural Resources","note":"Promoted mountain-bike access and mapped trail location verified through Pennsylvania DCNR.","geometryVersion":1,"routeSource":{"name":"Pennsylvania DCNR State Park Trails","url":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","license":"Commonwealth of Pennsylvania public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":0.96,"textureFactor":0.9,"drainageFactor":1.08,"confidence":"High","sampleCoverage":"17/17","soilLat":39.846577,"soilLon":-76.343361,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:27.700Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('pa-susquehannock', 1, '{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":0.96,"textureFactor":0.9,"drainageFactor":1.08,"confidence":"High","sampleCoverage":"17/17","soilLat":39.846577,"soilLon":-76.343361,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:27.700Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'High', 17,
  ST_SetSRID(ST_MakePoint(-76.343361, 39.846577), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('pa-swatara', 'Swatara State Park', 'US', 'PA', 'Eastern Pennsylvania', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-76.540528, 40.491238), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-76.540528, 40.491238), 4326)::extensions.geography,
  '{"id":"pa-swatara","name":"Swatara State Park","region":"Eastern Pennsylvania","countryCode":"US","stateCode":"PA","listingType":"Trail system","recordStatus":"Active","lat":40.491238,"lon":-76.540528,"weatherLat":40.491238,"weatherLon":-76.540528,"sensitivity":1,"canopy":0.82,"official":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","organization":"Pennsylvania Department of Conservation and Natural Resources","note":"Promoted mountain-bike access and mapped trail location verified through Pennsylvania DCNR.","geometryVersion":1,"routeSource":{"name":"Pennsylvania DCNR State Park Trails","url":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","license":"Commonwealth of Pennsylvania public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":0.96,"textureFactor":0.9,"drainageFactor":1.08,"confidence":"High","sampleCoverage":"17/17","soilLat":40.491238,"soilLon":-76.540528,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:29.585Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('pa-swatara', 1, '{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":0.96,"textureFactor":0.9,"drainageFactor":1.08,"confidence":"High","sampleCoverage":"17/17","soilLat":40.491238,"soilLon":-76.540528,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:29.585Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'High', 17,
  ST_SetSRID(ST_MakePoint(-76.540528, 40.491238), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('pa-tobyhanna', 'Tobyhanna State Park', 'US', 'PA', 'Northeast Pennsylvania', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-75.409995, 41.207698), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-75.409995, 41.207698), 4326)::extensions.geography,
  '{"id":"pa-tobyhanna","name":"Tobyhanna State Park","region":"Northeast Pennsylvania","countryCode":"US","stateCode":"PA","listingType":"Trail system","recordStatus":"Active","lat":41.207698,"lon":-75.409995,"weatherLat":41.207698,"weatherLon":-75.409995,"sensitivity":1,"canopy":0.82,"official":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","organization":"Pennsylvania Department of Conservation and Natural Resources","note":"Promoted mountain-bike access and mapped trail location verified through Pennsylvania DCNR.","geometryVersion":1,"routeSource":{"name":"Pennsylvania DCNR State Park Trails","url":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","license":"Commonwealth of Pennsylvania public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Sand","secondarySoil":"Silt Loam","naturalDrainage":"Moderately well drained","soilDryingFactor":1.05,"textureFactor":1.13,"drainageFactor":0.91,"confidence":"Low","sampleCoverage":"2/17","soilLat":41.207698,"soilLon":-75.409995,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:31.118Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('pa-tobyhanna', 1, '{"dominantSoil":"Sand","secondarySoil":"Silt Loam","naturalDrainage":"Moderately well drained","soilDryingFactor":1.05,"textureFactor":1.13,"drainageFactor":0.91,"confidence":"Low","sampleCoverage":"2/17","soilLat":41.207698,"soilLon":-75.409995,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:31.118Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'Low', 2,
  ST_SetSRID(ST_MakePoint(-75.409995, 41.207698), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('pa-white-clay-creek', 'White Clay Creek Preserve', 'US', 'PA', 'Southeast Pennsylvania', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-75.774121, 39.748509), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-75.774121, 39.748509), 4326)::extensions.geography,
  '{"id":"pa-white-clay-creek","name":"White Clay Creek Preserve","region":"Southeast Pennsylvania","countryCode":"US","stateCode":"PA","listingType":"Trail system","recordStatus":"Active","lat":39.748509,"lon":-75.774121,"weatherLat":39.748509,"weatherLon":-75.774121,"sensitivity":1,"canopy":0.82,"official":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","organization":"Pennsylvania Department of Conservation and Natural Resources","note":"Promoted mountain-bike access and mapped trail location verified through Pennsylvania DCNR.","geometryVersion":1,"routeSource":{"name":"Pennsylvania DCNR State Park Trails","url":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","license":"Commonwealth of Pennsylvania public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Loam","secondarySoil":"Silt Loam","naturalDrainage":"Well drained","soilDryingFactor":1.01,"textureFactor":0.97,"drainageFactor":1.07,"confidence":"High","sampleCoverage":"16/17","soilLat":39.748509,"soilLon":-75.774121,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:32.984Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('pa-white-clay-creek', 1, '{"dominantSoil":"Loam","secondarySoil":"Silt Loam","naturalDrainage":"Well drained","soilDryingFactor":1.01,"textureFactor":0.97,"drainageFactor":1.07,"confidence":"High","sampleCoverage":"16/17","soilLat":39.748509,"soilLon":-75.774121,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:32.984Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'High', 16,
  ST_SetSRID(ST_MakePoint(-75.774121, 39.748509), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('pa-yellow-creek', 'Yellow Creek State Park', 'US', 'PA', 'Central Pennsylvania', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-79.029965, 40.575524), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-79.029965, 40.575524), 4326)::extensions.geography,
  '{"id":"pa-yellow-creek","name":"Yellow Creek State Park","region":"Central Pennsylvania","countryCode":"US","stateCode":"PA","listingType":"Trail system","recordStatus":"Active","lat":40.575524,"lon":-79.029965,"weatherLat":40.575524,"weatherLon":-79.029965,"sensitivity":1,"canopy":0.82,"official":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","organization":"Pennsylvania Department of Conservation and Natural Resources","note":"Promoted mountain-bike access and mapped trail location verified through Pennsylvania DCNR.","geometryVersion":1,"routeSource":{"name":"Pennsylvania DCNR State Park Trails","url":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","license":"Commonwealth of Pennsylvania public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":0.93,"textureFactor":0.9,"drainageFactor":1,"confidence":"High","sampleCoverage":"15/17","soilLat":40.575524,"soilLon":-79.029965,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:34.599Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('pa-yellow-creek', 1, '{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":0.93,"textureFactor":0.9,"drainageFactor":1,"confidence":"High","sampleCoverage":"15/17","soilLat":40.575524,"soilLon":-79.029965,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:34.599Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'High', 15,
  ST_SetSRID(ST_MakePoint(-79.029965, 40.575524), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

commit;

select state_code, count(*) as active_trails
from public.trail_systems
where record_status = 'Active' and state_code in ('OH', 'WV', 'IN', 'PA')
group by state_code
order by state_code;

select t.id, t.name, t.region, s.confidence, s.usable_samples
from public.trail_systems t
join public.trail_soil_profiles s on s.trail_id = t.id and s.geometry_version = t.geometry_version
where t.state_code = 'PA'
order by t.name;
