-- V74: verified Michigan DNR mountain-bike trail systems.
-- Requires the V70 nationwide foundation. Existing trails and rider reports are preserved.
-- Official route geometry was used for centers and soil research but is not stored or published.

begin;

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('mi-bald-mountain-recreation-area', 'Bald Mountain Recreation Area', 'US', 'MI', 'East Michigan', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-83.208284, 42.772374), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-83.208284, 42.772374), 4326)::extensions.geography,
  '{"id":"mi-bald-mountain-recreation-area","name":"Bald Mountain Recreation Area","region":"East Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":42.772374,"lon":-83.208284,"weatherLat":42.772374,"weatherLon":-83.208284,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Sandy Loam","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":1.12,"textureFactor":1.14,"drainageFactor":1.09,"confidence":"Medium-high","sampleCoverage":"17/17","soilLat":42.772374,"soilLon":-83.208284,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:23:43.161Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('mi-bald-mountain-recreation-area', 1, '{"dominantSoil":"Sandy Loam","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":1.12,"textureFactor":1.14,"drainageFactor":1.09,"confidence":"Medium-high","sampleCoverage":"17/17","soilLat":42.772374,"soilLon":-83.208284,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:23:43.161Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'Medium-high', 17,
  ST_SetSRID(ST_MakePoint(-83.208284, 42.772374), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('mi-bass-river-recreation-area', 'Bass River Recreation Area', 'US', 'MI', 'West Michigan', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-86.036269, 43.016046), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-86.036269, 43.016046), 4326)::extensions.geography,
  '{"id":"mi-bass-river-recreation-area","name":"Bass River Recreation Area","region":"West Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":43.016046,"lon":-86.036269,"weatherLat":43.016046,"weatherLon":-86.036269,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Sand","secondarySoil":"Sandy Loam","naturalDrainage":"Excessively drained","soilDryingFactor":1.26,"textureFactor":1.33,"drainageFactor":1.14,"confidence":"High","sampleCoverage":"16/17","soilLat":43.016046,"soilLon":-86.036269,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:23:45.107Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('mi-bass-river-recreation-area', 1, '{"dominantSoil":"Sand","secondarySoil":"Sandy Loam","naturalDrainage":"Excessively drained","soilDryingFactor":1.26,"textureFactor":1.33,"drainageFactor":1.14,"confidence":"High","sampleCoverage":"16/17","soilLat":43.016046,"soilLon":-86.036269,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:23:45.107Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'High', 16,
  ST_SetSRID(ST_MakePoint(-86.036269, 43.016046), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('mi-black-mountain-pathway', 'Black Mountain Pathway', 'US', 'MI', 'Northeast Lower Michigan', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-84.247697, 45.516677), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-84.247697, 45.516677), 4326)::extensions.geography,
  '{"id":"mi-black-mountain-pathway","name":"Black Mountain Pathway","region":"Northeast Lower Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":45.516677,"lon":-84.247697,"weatherLat":45.516677,"weatherLon":-84.247697,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Sand","secondarySoil":"Sandy Loam","naturalDrainage":"Well drained","soilDryingFactor":1.27,"textureFactor":1.34,"drainageFactor":1.15,"confidence":"Medium-high","sampleCoverage":"12/17","soilLat":45.516677,"soilLon":-84.247697,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:23:46.733Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('mi-black-mountain-pathway', 1, '{"dominantSoil":"Sand","secondarySoil":"Sandy Loam","naturalDrainage":"Well drained","soilDryingFactor":1.27,"textureFactor":1.34,"drainageFactor":1.15,"confidence":"Medium-high","sampleCoverage":"12/17","soilLat":45.516677,"soilLon":-84.247697,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:23:46.733Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'Medium-high', 12,
  ST_SetSRID(ST_MakePoint(-84.247697, 45.516677), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('mi-brighton-recreation-area', 'Brighton Recreation Area', 'US', 'MI', 'Southeast Michigan', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-83.821278, 42.505352), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-83.821278, 42.505352), 4326)::extensions.geography,
  '{"id":"mi-brighton-recreation-area","name":"Brighton Recreation Area","region":"Southeast Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":42.505352,"lon":-83.821278,"weatherLat":42.505352,"weatherLon":-83.821278,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Sandy Loam","secondarySoil":"Sand","naturalDrainage":"Well drained","soilDryingFactor":1.18,"textureFactor":1.24,"drainageFactor":1.08,"confidence":"High","sampleCoverage":"17/17","soilLat":42.505352,"soilLon":-83.821278,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:23:48.577Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('mi-brighton-recreation-area', 1, '{"dominantSoil":"Sandy Loam","secondarySoil":"Sand","naturalDrainage":"Well drained","soilDryingFactor":1.18,"textureFactor":1.24,"drainageFactor":1.08,"confidence":"High","sampleCoverage":"17/17","soilLat":42.505352,"soilLon":-83.821278,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:23:48.577Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'High', 17,
  ST_SetSRID(ST_MakePoint(-83.821278, 42.505352), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('mi-cheboygan-state-park', 'Cheboygan State Park', 'US', 'MI', 'Northeast Lower Michigan', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-84.415088, 45.664089), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-84.415088, 45.664089), 4326)::extensions.geography,
  '{"id":"mi-cheboygan-state-park","name":"Cheboygan State Park","region":"Northeast Lower Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":45.664089,"lon":-84.415088,"weatherLat":45.664089,"weatherLon":-84.415088,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Sand","secondarySoil":null,"naturalDrainage":"Somewhat poorly drained","soilDryingFactor":1.25,"textureFactor":1.35,"drainageFactor":1.06,"confidence":"Medium","sampleCoverage":"10/17","soilLat":45.664089,"soilLon":-84.415088,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:23:49.907Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('mi-cheboygan-state-park', 1, '{"dominantSoil":"Sand","secondarySoil":null,"naturalDrainage":"Somewhat poorly drained","soilDryingFactor":1.25,"textureFactor":1.35,"drainageFactor":1.06,"confidence":"Medium","sampleCoverage":"10/17","soilLat":45.664089,"soilLon":-84.415088,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:23:49.907Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'Medium', 10,
  ST_SetSRID(ST_MakePoint(-84.415088, 45.664089), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('mi-clear-lake-state-park', 'Clear Lake State Park', 'US', 'MI', 'Northeast Lower Michigan', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-84.18188, 45.1285), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-84.18188, 45.1285), 4326)::extensions.geography,
  '{"id":"mi-clear-lake-state-park","name":"Clear Lake State Park","region":"Northeast Lower Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":45.1285,"lon":-84.18188,"weatherLat":45.1285,"weatherLon":-84.18188,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Sand","secondarySoil":null,"naturalDrainage":"Excessively drained","soilDryingFactor":1.3,"textureFactor":1.35,"drainageFactor":1.27,"confidence":"Low","sampleCoverage":"4/17","soilLat":45.1285,"soilLon":-84.18188,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:23:51.444Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('mi-clear-lake-state-park', 1, '{"dominantSoil":"Sand","secondarySoil":null,"naturalDrainage":"Excessively drained","soilDryingFactor":1.3,"textureFactor":1.35,"drainageFactor":1.27,"confidence":"Low","sampleCoverage":"4/17","soilLat":45.1285,"soilLon":-84.18188,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:23:51.444Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'Low', 4,
  ST_SetSRID(ST_MakePoint(-84.18188, 45.1285), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('mi-craig-lake-state-park', 'Craig Lake State Park', 'US', 'MI', 'Western Upper Peninsula', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-88.185308, 46.612469), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-88.185308, 46.612469), 4326)::extensions.geography,
  '{"id":"mi-craig-lake-state-park","name":"Craig Lake State Park","region":"Western Upper Peninsula","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":46.612469,"lon":-88.185308,"weatherLat":46.612469,"weatherLon":-88.185308,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Undetermined","secondarySoil":null,"naturalDrainage":"Unknown","soilDryingFactor":1,"textureFactor":1,"drainageFactor":1,"confidence":"Low","sampleCoverage":"0/17","soilLat":46.612469,"soilLon":-88.185308,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:23:53.365Z","samplingMethod":"No usable SSURGO samples; neutral factors retained for Developer Mode review"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('mi-craig-lake-state-park', 1, '{"dominantSoil":"Undetermined","secondarySoil":null,"naturalDrainage":"Unknown","soilDryingFactor":1,"textureFactor":1,"drainageFactor":1,"confidence":"Low","sampleCoverage":"0/17","soilLat":46.612469,"soilLon":-88.185308,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:23:53.365Z","samplingMethod":"No usable SSURGO samples; neutral factors retained for Developer Mode review"}'::jsonb, 'Low', 0,
  ST_SetSRID(ST_MakePoint(-88.185308, 46.612469), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('mi-fayette-historic-state-park', 'Fayette Historic State Park', 'US', 'MI', 'Northwest Lower Michigan', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-86.663418, 45.71791), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-86.663418, 45.71791), 4326)::extensions.geography,
  '{"id":"mi-fayette-historic-state-park","name":"Fayette Historic State Park","region":"Northwest Lower Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":45.71791,"lon":-86.663418,"weatherLat":45.71791,"weatherLon":-86.663418,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Sandy Loam","secondarySoil":"Sand","naturalDrainage":"Well drained","soilDryingFactor":1.17,"textureFactor":1.21,"drainageFactor":1.1,"confidence":"Medium-high","sampleCoverage":"12/17","soilLat":45.71791,"soilLon":-86.663418,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:23:54.669Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('mi-fayette-historic-state-park', 1, '{"dominantSoil":"Sandy Loam","secondarySoil":"Sand","naturalDrainage":"Well drained","soilDryingFactor":1.17,"textureFactor":1.21,"drainageFactor":1.1,"confidence":"Medium-high","sampleCoverage":"12/17","soilLat":45.71791,"soilLon":-86.663418,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:23:54.669Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'Medium-high', 12,
  ST_SetSRID(ST_MakePoint(-86.663418, 45.71791), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('mi-fort-custer-recreation-area', 'Fort Custer Recreation Area', 'US', 'MI', 'South-Central Michigan', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-85.33267, 42.318107), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-85.33267, 42.318107), 4326)::extensions.geography,
  '{"id":"mi-fort-custer-recreation-area","name":"Fort Custer Recreation Area","region":"South-Central Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":42.318107,"lon":-85.33267,"weatherLat":42.318107,"weatherLon":-85.33267,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Sandy Loam","secondarySoil":"Sand","naturalDrainage":"Well drained","soilDryingFactor":1.19,"textureFactor":1.24,"drainageFactor":1.1,"confidence":"High","sampleCoverage":"17/17","soilLat":42.318107,"soilLon":-85.33267,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:23:56.260Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('mi-fort-custer-recreation-area', 1, '{"dominantSoil":"Sandy Loam","secondarySoil":"Sand","naturalDrainage":"Well drained","soilDryingFactor":1.19,"textureFactor":1.24,"drainageFactor":1.1,"confidence":"High","sampleCoverage":"17/17","soilLat":42.318107,"soilLon":-85.33267,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:23:56.260Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'High', 17,
  ST_SetSRID(ST_MakePoint(-85.33267, 42.318107), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('mi-hartwick-pines-state-park', 'Hartwick Pines State Park', 'US', 'MI', 'Northeast Lower Michigan', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-84.679252, 44.749783), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-84.679252, 44.749783), 4326)::extensions.geography,
  '{"id":"mi-hartwick-pines-state-park","name":"Hartwick Pines State Park","region":"Northeast Lower Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":44.749783,"lon":-84.679252,"weatherLat":44.749783,"weatherLon":-84.679252,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Sand","secondarySoil":"Sandy Loam","naturalDrainage":"Excessively drained","soilDryingFactor":1.29,"textureFactor":1.34,"drainageFactor":1.21,"confidence":"Medium-high","sampleCoverage":"12/17","soilLat":44.749783,"soilLon":-84.679252,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:23:57.794Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('mi-hartwick-pines-state-park', 1, '{"dominantSoil":"Sand","secondarySoil":"Sandy Loam","naturalDrainage":"Excessively drained","soilDryingFactor":1.29,"textureFactor":1.34,"drainageFactor":1.21,"confidence":"Medium-high","sampleCoverage":"12/17","soilLat":44.749783,"soilLon":-84.679252,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:23:57.794Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'Medium-high', 12,
  ST_SetSRID(ST_MakePoint(-84.679252, 44.749783), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('mi-highland-recreation-area', 'Highland Recreation Area', 'US', 'MI', 'Southeast Michigan', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-83.579151, 42.628558), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-83.579151, 42.628558), 4326)::extensions.geography,
  '{"id":"mi-highland-recreation-area","name":"Highland Recreation Area","region":"Southeast Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":42.628558,"lon":-83.579151,"weatherLat":42.628558,"weatherLon":-83.579151,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Sand","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":1.19,"textureFactor":1.25,"drainageFactor":1.08,"confidence":"High","sampleCoverage":"17/17","soilLat":42.628558,"soilLon":-83.579151,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:23:59.406Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('mi-highland-recreation-area', 1, '{"dominantSoil":"Sand","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":1.19,"textureFactor":1.25,"drainageFactor":1.08,"confidence":"High","sampleCoverage":"17/17","soilLat":42.628558,"soilLon":-83.579151,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:23:59.406Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'High', 17,
  ST_SetSRID(ST_MakePoint(-83.579151, 42.628558), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('mi-hoeft-state-park-chippewa-hills', 'Hoeft State Park / Chippewa Hills', 'US', 'MI', 'Northeast Lower Michigan', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-83.692781, 44.938436), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-83.692781, 44.938436), 4326)::extensions.geography,
  '{"id":"mi-hoeft-state-park-chippewa-hills","name":"Hoeft State Park / Chippewa Hills","region":"Northeast Lower Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":44.938436,"lon":-83.692781,"weatherLat":44.938436,"weatherLon":-83.692781,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Sand","secondarySoil":"Sandy Loam","naturalDrainage":"Moderately well drained","soilDryingFactor":1.21,"textureFactor":1.31,"drainageFactor":1.02,"confidence":"High","sampleCoverage":"17/17","soilLat":44.938436,"soilLon":-83.692781,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:00.838Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('mi-hoeft-state-park-chippewa-hills', 1, '{"dominantSoil":"Sand","secondarySoil":"Sandy Loam","naturalDrainage":"Moderately well drained","soilDryingFactor":1.21,"textureFactor":1.31,"drainageFactor":1.02,"confidence":"High","sampleCoverage":"17/17","soilLat":44.938436,"soilLon":-83.692781,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:00.838Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'High', 17,
  ST_SetSRID(ST_MakePoint(-83.692781, 44.938436), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('mi-holly-recreation-area', 'Holly Recreation Area', 'US', 'MI', 'East Michigan', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-83.582757, 42.827607), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-83.582757, 42.827607), 4326)::extensions.geography,
  '{"id":"mi-holly-recreation-area","name":"Holly Recreation Area","region":"East Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":42.827607,"lon":-83.582757,"weatherLat":42.827607,"weatherLon":-83.582757,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Sandy Loam","secondarySoil":"Sand","naturalDrainage":"Well drained","soilDryingFactor":1.17,"textureFactor":1.23,"drainageFactor":1.05,"confidence":"Medium-high","sampleCoverage":"17/17","soilLat":42.827607,"soilLon":-83.582757,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:02.403Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('mi-holly-recreation-area', 1, '{"dominantSoil":"Sandy Loam","secondarySoil":"Sand","naturalDrainage":"Well drained","soilDryingFactor":1.17,"textureFactor":1.23,"drainageFactor":1.05,"confidence":"Medium-high","sampleCoverage":"17/17","soilLat":42.827607,"soilLon":-83.582757,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:02.403Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'Medium-high', 17,
  ST_SetSRID(ST_MakePoint(-83.582757, 42.827607), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('mi-ionia-state-recreation-area', 'Ionia State Recreation Area', 'US', 'MI', 'Central Michigan', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-85.139489, 42.954863), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-85.139489, 42.954863), 4326)::extensions.geography,
  '{"id":"mi-ionia-state-recreation-area","name":"Ionia State Recreation Area","region":"Central Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":42.954863,"lon":-85.139489,"weatherLat":42.954863,"weatherLon":-85.139489,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Sandy Loam","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":1.1,"textureFactor":1.18,"drainageFactor":0.94,"confidence":"High","sampleCoverage":"16/17","soilLat":42.954863,"soilLon":-85.139489,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:04.235Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('mi-ionia-state-recreation-area', 1, '{"dominantSoil":"Sandy Loam","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":1.1,"textureFactor":1.18,"drainageFactor":0.94,"confidence":"High","sampleCoverage":"16/17","soilLat":42.954863,"soilLon":-85.139489,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:04.235Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'High', 16,
  ST_SetSRID(ST_MakePoint(-85.139489, 42.954863), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('mi-island-lake-recreation-area', 'Island Lake Recreation Area', 'US', 'MI', 'Southeast Michigan', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-83.716703, 42.504208), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-83.716703, 42.504208), 4326)::extensions.geography,
  '{"id":"mi-island-lake-recreation-area","name":"Island Lake Recreation Area","region":"Southeast Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":42.504208,"lon":-83.716703,"weatherLat":42.504208,"weatherLon":-83.716703,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Sand","secondarySoil":"Sandy Loam","naturalDrainage":"Well drained","soilDryingFactor":1.21,"textureFactor":1.29,"drainageFactor":1.06,"confidence":"High","sampleCoverage":"16/17","soilLat":42.504208,"soilLon":-83.716703,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:06.063Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('mi-island-lake-recreation-area', 1, '{"dominantSoil":"Sand","secondarySoil":"Sandy Loam","naturalDrainage":"Well drained","soilDryingFactor":1.21,"textureFactor":1.29,"drainageFactor":1.06,"confidence":"High","sampleCoverage":"16/17","soilLat":42.504208,"soilLon":-83.716703,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:06.063Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'High', 16,
  ST_SetSRID(ST_MakePoint(-83.716703, 42.504208), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('mi-lakeport-state-park', 'Lakeport State Park', 'US', 'MI', 'East Michigan', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-82.492937, 43.124505), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-82.492937, 43.124505), 4326)::extensions.geography,
  '{"id":"mi-lakeport-state-park","name":"Lakeport State Park","region":"East Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":43.124505,"lon":-82.492937,"weatherLat":43.124505,"weatherLon":-82.492937,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Sand","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":1.26,"textureFactor":1.35,"drainageFactor":1.08,"confidence":"High","sampleCoverage":"17/17","soilLat":43.124505,"soilLon":-82.492937,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:07.416Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('mi-lakeport-state-park', 1, '{"dominantSoil":"Sand","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":1.26,"textureFactor":1.35,"drainageFactor":1.08,"confidence":"High","sampleCoverage":"17/17","soilLat":43.124505,"soilLon":-82.492937,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:07.416Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'High', 17,
  ST_SetSRID(ST_MakePoint(-82.492937, 43.124505), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('mi-little-presque-isle-multi-use-pathway', 'Little Presque Isle Multi Use Pathway', 'US', 'MI', 'Western Upper Peninsula', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-87.491599, 46.621613), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-87.491599, 46.621613), 4326)::extensions.geography,
  '{"id":"mi-little-presque-isle-multi-use-pathway","name":"Little Presque Isle Multi Use Pathway","region":"Western Upper Peninsula","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":46.621613,"lon":-87.491599,"weatherLat":46.621613,"weatherLon":-87.491599,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Sand","secondarySoil":null,"naturalDrainage":"Excessively drained","soilDryingFactor":1.3,"textureFactor":1.35,"drainageFactor":1.25,"confidence":"Medium","sampleCoverage":"8/17","soilLat":46.621613,"soilLon":-87.491599,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:09.043Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('mi-little-presque-isle-multi-use-pathway', 1, '{"dominantSoil":"Sand","secondarySoil":null,"naturalDrainage":"Excessively drained","soilDryingFactor":1.3,"textureFactor":1.35,"drainageFactor":1.25,"confidence":"Medium","sampleCoverage":"8/17","soilLat":46.621613,"soilLon":-87.491599,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:09.043Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'Medium', 8,
  ST_SetSRID(ST_MakePoint(-87.491599, 46.621613), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('mi-ludington-state-park', 'Ludington State Park', 'US', 'MI', 'West Michigan', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-86.511324, 44.046511), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-86.511324, 44.046511), 4326)::extensions.geography,
  '{"id":"mi-ludington-state-park","name":"Ludington State Park","region":"West Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":44.046511,"lon":-86.511324,"weatherLat":44.046511,"weatherLon":-86.511324,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Sand","secondarySoil":null,"naturalDrainage":"Excessively drained","soilDryingFactor":1.3,"textureFactor":1.35,"drainageFactor":1.2,"confidence":"High","sampleCoverage":"17/17","soilLat":44.046511,"soilLon":-86.511324,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:10.519Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('mi-ludington-state-park', 1, '{"dominantSoil":"Sand","secondarySoil":null,"naturalDrainage":"Excessively drained","soilDryingFactor":1.3,"textureFactor":1.35,"drainageFactor":1.2,"confidence":"High","sampleCoverage":"17/17","soilLat":44.046511,"soilLon":-86.511324,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:10.519Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'High', 17,
  ST_SetSRID(ST_MakePoint(-86.511324, 44.046511), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('mi-maybury-state-park', 'Maybury State Park', 'US', 'MI', 'Southeast Michigan', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-83.521474, 42.427011), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-83.521474, 42.427011), 4326)::extensions.geography,
  '{"id":"mi-maybury-state-park","name":"Maybury State Park","region":"Southeast Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":42.427011,"lon":-83.521474,"weatherLat":42.427011,"weatherLon":-83.521474,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Sand","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":1.25,"textureFactor":1.35,"drainageFactor":1.07,"confidence":"High","sampleCoverage":"17/17","soilLat":42.427011,"soilLon":-83.521474,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:12.234Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('mi-maybury-state-park', 1, '{"dominantSoil":"Sand","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":1.25,"textureFactor":1.35,"drainageFactor":1.07,"confidence":"High","sampleCoverage":"17/17","soilLat":42.427011,"soilLon":-83.521474,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:12.234Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'High', 17,
  ST_SetSRID(ST_MakePoint(-83.521474, 42.427011), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('mi-menominee-river-state-recreation-area', 'Menominee River State Recreation Area', 'US', 'MI', 'Western Upper Peninsula', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-87.951616, 45.7602), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-87.951616, 45.7602), 4326)::extensions.geography,
  '{"id":"mi-menominee-river-state-recreation-area","name":"Menominee River State Recreation Area","region":"Western Upper Peninsula","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":45.7602,"lon":-87.951616,"weatherLat":45.7602,"weatherLon":-87.951616,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Sand","secondarySoil":"Sandy Loam","naturalDrainage":"Excessively drained","soilDryingFactor":1.3,"textureFactor":1.31,"drainageFactor":1.27,"confidence":"High","sampleCoverage":"17/17","soilLat":45.7602,"soilLon":-87.951616,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:14.046Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('mi-menominee-river-state-recreation-area', 1, '{"dominantSoil":"Sand","secondarySoil":"Sandy Loam","naturalDrainage":"Excessively drained","soilDryingFactor":1.3,"textureFactor":1.31,"drainageFactor":1.27,"confidence":"High","sampleCoverage":"17/17","soilLat":45.7602,"soilLon":-87.951616,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:14.046Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'High', 17,
  ST_SetSRID(ST_MakePoint(-87.951616, 45.7602), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('mi-mike-levine-lakelands-trail-state-park', 'Mike Levine Lakelands Trail State Park', 'US', 'MI', 'South-Central Michigan', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-84.166469, 42.422696), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-84.166469, 42.422696), 4326)::extensions.geography,
  '{"id":"mi-mike-levine-lakelands-trail-state-park","name":"Mike Levine Lakelands Trail State Park","region":"South-Central Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":42.422696,"lon":-84.166469,"weatherLat":42.422696,"weatherLon":-84.166469,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Sandy Loam","secondarySoil":"Sand","naturalDrainage":"Well drained","soilDryingFactor":1.14,"textureFactor":1.25,"drainageFactor":0.94,"confidence":"High","sampleCoverage":"14/17","soilLat":42.422696,"soilLon":-84.166469,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:15.771Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('mi-mike-levine-lakelands-trail-state-park', 1, '{"dominantSoil":"Sandy Loam","secondarySoil":"Sand","naturalDrainage":"Well drained","soilDryingFactor":1.14,"textureFactor":1.25,"drainageFactor":0.94,"confidence":"High","sampleCoverage":"14/17","soilLat":42.422696,"soilLon":-84.166469,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:15.771Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'High', 14,
  ST_SetSRID(ST_MakePoint(-84.166469, 42.422696), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('mi-ortonville-recreation-area', 'Ortonville Recreation Area', 'US', 'MI', 'East Michigan', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-83.432213, 42.872699), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-83.432213, 42.872699), 4326)::extensions.geography,
  '{"id":"mi-ortonville-recreation-area","name":"Ortonville Recreation Area","region":"East Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":42.872699,"lon":-83.432213,"weatherLat":42.872699,"weatherLon":-83.432213,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Sand","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":1.21,"textureFactor":1.3,"drainageFactor":1.05,"confidence":"High","sampleCoverage":"17/17","soilLat":42.872699,"soilLon":-83.432213,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:17.368Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('mi-ortonville-recreation-area', 1, '{"dominantSoil":"Sand","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":1.21,"textureFactor":1.3,"drainageFactor":1.05,"confidence":"High","sampleCoverage":"17/17","soilLat":42.872699,"soilLon":-83.432213,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:17.368Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'High', 17,
  ST_SetSRID(ST_MakePoint(-83.432213, 42.872699), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('mi-petoskey-state-park', 'Petoskey State Park', 'US', 'MI', 'Northeast Lower Michigan', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-84.912994, 45.393413), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-84.912994, 45.393413), 4326)::extensions.geography,
  '{"id":"mi-petoskey-state-park","name":"Petoskey State Park","region":"Northeast Lower Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":45.393413,"lon":-84.912994,"weatherLat":45.393413,"weatherLon":-84.912994,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Sand","secondarySoil":null,"naturalDrainage":"Excessively drained","soilDryingFactor":1.3,"textureFactor":1.35,"drainageFactor":1.3,"confidence":"High","sampleCoverage":"17/17","soilLat":45.393413,"soilLon":-84.912994,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:18.914Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('mi-petoskey-state-park', 1, '{"dominantSoil":"Sand","secondarySoil":null,"naturalDrainage":"Excessively drained","soilDryingFactor":1.3,"textureFactor":1.35,"drainageFactor":1.3,"confidence":"High","sampleCoverage":"17/17","soilLat":45.393413,"soilLon":-84.912994,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:18.914Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'High', 17,
  ST_SetSRID(ST_MakePoint(-84.912994, 45.393413), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('mi-pinckney-recreation-area', 'Pinckney Recreation Area', 'US', 'MI', 'South-Central Michigan', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-84.00157, 42.414159), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-84.00157, 42.414159), 4326)::extensions.geography,
  '{"id":"mi-pinckney-recreation-area","name":"Pinckney Recreation Area","region":"South-Central Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":42.414159,"lon":-84.00157,"weatherLat":42.414159,"weatherLon":-84.00157,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Sand","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":1.22,"textureFactor":1.3,"drainageFactor":1.08,"confidence":"High","sampleCoverage":"17/17","soilLat":42.414159,"soilLon":-84.00157,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:20.711Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('mi-pinckney-recreation-area', 1, '{"dominantSoil":"Sand","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":1.22,"textureFactor":1.3,"drainageFactor":1.08,"confidence":"High","sampleCoverage":"17/17","soilLat":42.414159,"soilLon":-84.00157,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:20.711Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'High', 17,
  ST_SetSRID(ST_MakePoint(-84.00157, 42.414159), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('mi-pontiac-lake-recreation-area', 'Pontiac Lake Recreation Area', 'US', 'MI', 'Southeast Michigan', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-83.465872, 42.685164), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-83.465872, 42.685164), 4326)::extensions.geography,
  '{"id":"mi-pontiac-lake-recreation-area","name":"Pontiac Lake Recreation Area","region":"Southeast Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":42.685164,"lon":-83.465872,"weatherLat":42.685164,"weatherLon":-83.465872,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Sand","secondarySoil":"Sandy Loam","naturalDrainage":"Well drained","soilDryingFactor":1.22,"textureFactor":1.31,"drainageFactor":1.07,"confidence":"High","sampleCoverage":"17/17","soilLat":42.685164,"soilLon":-83.465872,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:22.295Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('mi-pontiac-lake-recreation-area', 1, '{"dominantSoil":"Sand","secondarySoil":"Sandy Loam","naturalDrainage":"Well drained","soilDryingFactor":1.22,"textureFactor":1.31,"drainageFactor":1.07,"confidence":"High","sampleCoverage":"17/17","soilLat":42.685164,"soilLon":-83.465872,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:22.295Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'High', 17,
  ST_SetSRID(ST_MakePoint(-83.465872, 42.685164), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('mi-pretty-lake-pathway', 'Pretty Lake Pathway', 'US', 'MI', 'Eastern Upper Peninsula', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-85.670624, 46.599668), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-85.670624, 46.599668), 4326)::extensions.geography,
  '{"id":"mi-pretty-lake-pathway","name":"Pretty Lake Pathway","region":"Eastern Upper Peninsula","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":46.599668,"lon":-85.670624,"weatherLat":46.599668,"weatherLon":-85.670624,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Sand","secondarySoil":null,"naturalDrainage":"Excessively drained","soilDryingFactor":1.3,"textureFactor":1.35,"drainageFactor":1.3,"confidence":"Low","sampleCoverage":"1/17","soilLat":46.599668,"soilLon":-85.670624,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:23.726Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('mi-pretty-lake-pathway', 1, '{"dominantSoil":"Sand","secondarySoil":null,"naturalDrainage":"Excessively drained","soilDryingFactor":1.3,"textureFactor":1.35,"drainageFactor":1.3,"confidence":"Low","sampleCoverage":"1/17","soilLat":46.599668,"soilLon":-85.670624,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:23.726Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'Low', 1,
  ST_SetSRID(ST_MakePoint(-85.670624, 46.599668), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('mi-proud-lake-recreation-area', 'Proud Lake Recreation Area', 'US', 'MI', 'Southeast Michigan', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-83.563012, 42.568119), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-83.563012, 42.568119), 4326)::extensions.geography,
  '{"id":"mi-proud-lake-recreation-area","name":"Proud Lake Recreation Area","region":"Southeast Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":42.568119,"lon":-83.563012,"weatherLat":42.568119,"weatherLon":-83.563012,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Sand","secondarySoil":"Sandy Loam","naturalDrainage":"Well drained","soilDryingFactor":1.21,"textureFactor":1.28,"drainageFactor":1.09,"confidence":"Medium-high","sampleCoverage":"17/17","soilLat":42.568119,"soilLon":-83.563012,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:25.300Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('mi-proud-lake-recreation-area', 1, '{"dominantSoil":"Sand","secondarySoil":"Sandy Loam","naturalDrainage":"Well drained","soilDryingFactor":1.21,"textureFactor":1.28,"drainageFactor":1.09,"confidence":"Medium-high","sampleCoverage":"17/17","soilLat":42.568119,"soilLon":-83.563012,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:25.300Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'Medium-high', 17,
  ST_SetSRID(ST_MakePoint(-83.563012, 42.568119), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('mi-rifle-river-state-recreation-area', 'Rifle River State Recreation Area', 'US', 'MI', 'Northeast Lower Michigan', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-84.026624, 44.39222), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-84.026624, 44.39222), 4326)::extensions.geography,
  '{"id":"mi-rifle-river-state-recreation-area","name":"Rifle River State Recreation Area","region":"Northeast Lower Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":44.39222,"lon":-84.026624,"weatherLat":44.39222,"weatherLon":-84.026624,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Sand","secondarySoil":"Sandy Loam","naturalDrainage":"Well drained","soilDryingFactor":1.24,"textureFactor":1.32,"drainageFactor":1.1,"confidence":"Medium","sampleCoverage":"10/17","soilLat":44.39222,"soilLon":-84.026624,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:26.874Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('mi-rifle-river-state-recreation-area', 1, '{"dominantSoil":"Sand","secondarySoil":"Sandy Loam","naturalDrainage":"Well drained","soilDryingFactor":1.24,"textureFactor":1.32,"drainageFactor":1.1,"confidence":"Medium","sampleCoverage":"10/17","soilLat":44.39222,"soilLon":-84.026624,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:26.874Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'Medium', 10,
  ST_SetSRID(ST_MakePoint(-84.026624, 44.39222), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('mi-rockport-recreation-area', 'Rockport Recreation Area', 'US', 'MI', 'Northeast Lower Michigan', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-83.394261, 45.205232), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-83.394261, 45.205232), 4326)::extensions.geography,
  '{"id":"mi-rockport-recreation-area","name":"Rockport Recreation Area","region":"Northeast Lower Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":45.205232,"lon":-83.394261,"weatherLat":45.205232,"weatherLon":-83.394261,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Sandy Loam","secondarySoil":"Loam","naturalDrainage":"Excessively drained","soilDryingFactor":1.15,"textureFactor":1.15,"drainageFactor":1.14,"confidence":"Medium-high","sampleCoverage":"13/17","soilLat":45.205232,"soilLon":-83.394261,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:28.297Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('mi-rockport-recreation-area', 1, '{"dominantSoil":"Sandy Loam","secondarySoil":"Loam","naturalDrainage":"Excessively drained","soilDryingFactor":1.15,"textureFactor":1.15,"drainageFactor":1.14,"confidence":"Medium-high","sampleCoverage":"13/17","soilLat":45.205232,"soilLon":-83.394261,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:28.297Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'Medium-high', 13,
  ST_SetSRID(ST_MakePoint(-83.394261, 45.205232), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('mi-seven-lakes-state-park', 'Seven Lakes State Park', 'US', 'MI', 'East Michigan', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-83.672142, 42.81124), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-83.672142, 42.81124), 4326)::extensions.geography,
  '{"id":"mi-seven-lakes-state-park","name":"Seven Lakes State Park","region":"East Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":42.81124,"lon":-83.672142,"weatherLat":42.81124,"weatherLon":-83.672142,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Loam","secondarySoil":"Clay Loam","naturalDrainage":"Well drained","soilDryingFactor":1,"textureFactor":0.95,"drainageFactor":1.08,"confidence":"High","sampleCoverage":"17/17","soilLat":42.81124,"soilLon":-83.672142,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:29.997Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('mi-seven-lakes-state-park', 1, '{"dominantSoil":"Loam","secondarySoil":"Clay Loam","naturalDrainage":"Well drained","soilDryingFactor":1,"textureFactor":0.95,"drainageFactor":1.08,"confidence":"High","sampleCoverage":"17/17","soilLat":42.81124,"soilLon":-83.672142,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:29.997Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'High', 17,
  ST_SetSRID(ST_MakePoint(-83.672142, 42.81124), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('mi-sleepy-hollow-state-park', 'Sleepy Hollow State Park', 'US', 'MI', 'Central Michigan', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-84.410457, 42.939252), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-84.410457, 42.939252), 4326)::extensions.geography,
  '{"id":"mi-sleepy-hollow-state-park","name":"Sleepy Hollow State Park","region":"Central Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":42.939252,"lon":-84.410457,"weatherLat":42.939252,"weatherLon":-84.410457,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Loam","secondarySoil":"Sandy Loam","naturalDrainage":"Well drained","soilDryingFactor":0.99,"textureFactor":1.02,"drainageFactor":0.94,"confidence":"High","sampleCoverage":"17/17","soilLat":42.939252,"soilLon":-84.410457,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:31.816Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('mi-sleepy-hollow-state-park', 1, '{"dominantSoil":"Loam","secondarySoil":"Sandy Loam","naturalDrainage":"Well drained","soilDryingFactor":0.99,"textureFactor":1.02,"drainageFactor":0.94,"confidence":"High","sampleCoverage":"17/17","soilLat":42.939252,"soilLon":-84.410457,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:31.816Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'High', 17,
  ST_SetSRID(ST_MakePoint(-84.410457, 42.939252), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('mi-south-higgins-lake-state-park', 'South Higgins Lake State Park', 'US', 'MI', 'Northeast Lower Michigan', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-84.668391, 44.419782), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-84.668391, 44.419782), 4326)::extensions.geography,
  '{"id":"mi-south-higgins-lake-state-park","name":"South Higgins Lake State Park","region":"Northeast Lower Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":44.419782,"lon":-84.668391,"weatherLat":44.419782,"weatherLon":-84.668391,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Sand","secondarySoil":null,"naturalDrainage":"Somewhat excessively drained","soilDryingFactor":1.26,"textureFactor":1.35,"drainageFactor":1.09,"confidence":"Low","sampleCoverage":"4/17","soilLat":44.419782,"soilLon":-84.668391,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:33.329Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('mi-south-higgins-lake-state-park', 1, '{"dominantSoil":"Sand","secondarySoil":null,"naturalDrainage":"Somewhat excessively drained","soilDryingFactor":1.26,"textureFactor":1.35,"drainageFactor":1.09,"confidence":"Low","sampleCoverage":"4/17","soilLat":44.419782,"soilLon":-84.668391,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:33.329Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'Low', 4,
  ST_SetSRID(ST_MakePoint(-84.668391, 44.419782), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('mi-sterling-state-park', 'Sterling State Park', 'US', 'MI', 'Southeast Michigan', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-83.3554, 41.910537), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-83.3554, 41.910537), 4326)::extensions.geography,
  '{"id":"mi-sterling-state-park","name":"Sterling State Park","region":"Southeast Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":41.910537,"lon":-83.3554,"weatherLat":41.910537,"weatherLon":-83.3554,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Sand","secondarySoil":"Clay Loam","naturalDrainage":"Very poorly drained","soilDryingFactor":0.96,"textureFactor":1.15,"drainageFactor":0.62,"confidence":"Medium-high","sampleCoverage":"12/17","soilLat":41.910537,"soilLon":-83.3554,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:34.699Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('mi-sterling-state-park', 1, '{"dominantSoil":"Sand","secondarySoil":"Clay Loam","naturalDrainage":"Very poorly drained","soilDryingFactor":0.96,"textureFactor":1.15,"drainageFactor":0.62,"confidence":"Medium-high","sampleCoverage":"12/17","soilLat":41.910537,"soilLon":-83.3554,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:34.699Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'Medium-high', 12,
  ST_SetSRID(ST_MakePoint(-83.3554, 41.910537), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('mi-thompson-s-harbor-state-park', 'Thompson''s Harbor State Park', 'US', 'MI', 'Northeast Lower Michigan', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-83.567573, 45.347823), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-83.567573, 45.347823), 4326)::extensions.geography,
  '{"id":"mi-thompson-s-harbor-state-park","name":"Thompson''s Harbor State Park","region":"Northeast Lower Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":45.347823,"lon":-83.567573,"weatherLat":45.347823,"weatherLon":-83.567573,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Sandy Loam","secondarySoil":"Loam","naturalDrainage":"Somewhat poorly drained","soilDryingFactor":1.11,"textureFactor":1.17,"drainageFactor":0.99,"confidence":"Medium","sampleCoverage":"14/17","soilLat":45.347823,"soilLon":-83.567573,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:36.297Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('mi-thompson-s-harbor-state-park', 1, '{"dominantSoil":"Sandy Loam","secondarySoil":"Loam","naturalDrainage":"Somewhat poorly drained","soilDryingFactor":1.11,"textureFactor":1.17,"drainageFactor":0.99,"confidence":"Medium","sampleCoverage":"14/17","soilLat":45.347823,"soilLon":-83.567573,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:36.297Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'Medium', 14,
  ST_SetSRID(ST_MakePoint(-83.567573, 45.347823), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('mi-van-riper-state-park', 'Van Riper State Park', 'US', 'MI', 'Western Upper Peninsula', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-87.9935, 46.53055), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-87.9935, 46.53055), 4326)::extensions.geography,
  '{"id":"mi-van-riper-state-park","name":"Van Riper State Park","region":"Western Upper Peninsula","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":46.53055,"lon":-87.9935,"weatherLat":46.53055,"weatherLon":-87.9935,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":0.94,"textureFactor":0.9,"drainageFactor":1.01,"confidence":"Low","sampleCoverage":"5/17","soilLat":46.53055,"soilLon":-87.9935,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:37.939Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('mi-van-riper-state-park', 1, '{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":0.94,"textureFactor":0.9,"drainageFactor":1.01,"confidence":"Low","sampleCoverage":"5/17","soilLat":46.53055,"soilLon":-87.9935,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:37.939Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'Low', 5,
  ST_SetSRID(ST_MakePoint(-87.9935, 46.53055), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('mi-waterloo-recreation-area', 'Waterloo Recreation Area', 'US', 'MI', 'South-Central Michigan', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-84.089813, 42.358059), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-84.089813, 42.358059), 4326)::extensions.geography,
  '{"id":"mi-waterloo-recreation-area","name":"Waterloo Recreation Area","region":"South-Central Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":42.358059,"lon":-84.089813,"weatherLat":42.358059,"weatherLon":-84.089813,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Sand","secondarySoil":"Sandy Loam","naturalDrainage":"Well drained","soilDryingFactor":1.25,"textureFactor":1.34,"drainageFactor":1.08,"confidence":"High","sampleCoverage":"17/17","soilLat":42.358059,"soilLon":-84.089813,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:39.982Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('mi-waterloo-recreation-area', 1, '{"dominantSoil":"Sand","secondarySoil":"Sandy Loam","naturalDrainage":"Well drained","soilDryingFactor":1.25,"textureFactor":1.34,"drainageFactor":1.08,"confidence":"High","sampleCoverage":"17/17","soilLat":42.358059,"soilLon":-84.089813,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:39.982Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'High', 17,
  ST_SetSRID(ST_MakePoint(-84.089813, 42.358059), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('mi-wilderness-state-park', 'Wilderness State Park', 'US', 'MI', 'Northeast Lower Michigan', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-84.888054, 45.74473), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-84.888054, 45.74473), 4326)::extensions.geography,
  '{"id":"mi-wilderness-state-park","name":"Wilderness State Park","region":"Northeast Lower Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":45.74473,"lon":-84.888054,"weatherLat":45.74473,"weatherLon":-84.888054,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Sand","secondarySoil":null,"naturalDrainage":"Excessively drained","soilDryingFactor":1.24,"textureFactor":1.35,"drainageFactor":1.03,"confidence":"High","sampleCoverage":"17/17","soilLat":45.74473,"soilLon":-84.888054,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:41.620Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('mi-wilderness-state-park', 1, '{"dominantSoil":"Sand","secondarySoil":null,"naturalDrainage":"Excessively drained","soilDryingFactor":1.24,"textureFactor":1.35,"drainageFactor":1.03,"confidence":"High","sampleCoverage":"17/17","soilLat":45.74473,"soilLon":-84.888054,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:41.620Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'High', 17,
  ST_SetSRID(ST_MakePoint(-84.888054, 45.74473), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

insert into public.trail_systems (id, name, country_code, state_code, region, listing_type, record_status, location, weather_location, data, geometry_version)
values ('mi-yankee-springs-recreation-area', 'Yankee Springs Recreation Area', 'US', 'MI', 'South-Central Michigan', 'Trail system', 'Active',
  ST_SetSRID(ST_MakePoint(-85.469336, 42.623125), 4326)::extensions.geography,
  ST_SetSRID(ST_MakePoint(-85.469336, 42.623125), 4326)::extensions.geography,
  '{"id":"mi-yankee-springs-recreation-area","name":"Yankee Springs Recreation Area","region":"South-Central Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":42.623125,"lon":-85.469336,"weatherLat":42.623125,"weatherLon":-85.469336,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29","soilProfile":{"dominantSoil":"Sand","secondarySoil":null,"naturalDrainage":"Somewhat excessively drained","soilDryingFactor":1.28,"textureFactor":1.35,"drainageFactor":1.16,"confidence":"High","sampleCoverage":"17/17","soilLat":42.623125,"soilLon":-85.469336,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:43.416Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}}'::jsonb, 1)
on conflict (id) do update set
  name = excluded.name, country_code = excluded.country_code, state_code = excluded.state_code,
  region = excluded.region, listing_type = excluded.listing_type, record_status = excluded.record_status,
  location = excluded.location, weather_location = excluded.weather_location, data = excluded.data,
  geometry_version = excluded.geometry_version, updated_at = now();

insert into public.trail_soil_profiles (trail_id, geometry_version, profile, confidence, usable_samples, research_location, source_name)
values ('mi-yankee-springs-recreation-area', 1, '{"dominantSoil":"Sand","secondarySoil":null,"naturalDrainage":"Somewhat excessively drained","soilDryingFactor":1.28,"textureFactor":1.35,"drainageFactor":1.16,"confidence":"High","sampleCoverage":"17/17","soilLat":42.623125,"soilLon":-85.469336,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:43.416Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"}'::jsonb, 'High', 17,
  ST_SetSRID(ST_MakePoint(-85.469336, 42.623125), 4326)::extensions.geography, 'USDA NRCS SSURGO')
on conflict (trail_id, geometry_version) do update set
  profile = excluded.profile, confidence = excluded.confidence, usable_samples = excluded.usable_samples,
  research_location = excluded.research_location, source_name = excluded.source_name, calculated_at = now();

commit;

select state_code, count(*) as active_trails
from public.trail_systems
where record_status = 'Active' and state_code in ('OH', 'WV', 'IN', 'PA', 'MI')
group by state_code
order by state_code;

select t.id, t.name, t.region, s.confidence, s.usable_samples
from public.trail_systems t
join public.trail_soil_profiles s on s.trail_id = t.id and s.geometry_version = t.geometry_version
where t.state_code = 'MI'
order by t.name;
