# Ohio Trail Conditions NOAA Repair Build

## V49 valid-dry-field correction

- A fully validated NOAA all-zero/dry field is now accepted when Open-Meteo also reports less than 0.005 inch over 72 hours.
- If NOAA reports a dry field while Open-Meteo reports meaningful rainfall, the existing unavailable/fallback safeguards remain active.
- This prevents legitimate dry locations such as Hueston Woods from being marked unavailable without allowing missing or conflicting wet-weather data to become green.
- Rainfall retrieval, weighting, rideability, readiness, drying, overlays, trail cards, and trail data are unchanged from V48.

V49 verification results:

- Hueston Woods loaded from live NOAA MRMS as 0.00 inches over 72 hours, `Likely good`, and 100% rideability.
- All 36 trail cards loaded; no unavailable or unverified rainfall card displayed green.
- No browser warnings or errors occurred.
- JavaScript syntax, NOAA request-contract tests, and live 12/24/48/72-hour checks at Columbus, Cleveland, and Cincinnati passed.
- Live NOAA totals remained monotonic at all three test locations.

## V48 rainfall overlays

- Adds separate 12-hour and 24-hour NOAA rainfall buttons to the map.
- Each overlay queries the live catalog and locks `exportImage` to the current `conus_QPE_12H` or `conus_QPE_24H` raster ID.
- Uses NOAA's matching `rft_12hr` or `rft_24hr` renderer.
- Selecting the active period again hides the overlay; selecting the other period switches the map image.
- Point rainfall retrieval, rainfall weighting, rideability, readiness, drying, trail cards, and trail data are unchanged from V47.

V48 overlay test results:

- Direct NOAA 12-hour image: HTTP 200, PNG, 800×640; nearly transparent because the current 12-hour field is essentially dry.
- Direct NOAA 24-hour image: HTTP 200, PNG, 800×640; colored rainfall pixels present across Ohio.
- Browser 12-hour overlay: loaded 609×518 from the current locked `conus_QPE_12H` raster.
- Browser 24-hour overlay: loaded 609×518 from the current locked `conus_QPE_24H` raster.
- Switching periods correctly deactivated 12 hours and activated 24 hours.
- All 36 trail cards loaded; 35 used live NOAA point rainfall; no browser warnings or errors occurred; unverified rainfall did not produce a green condition.

## V47 data-selection change

- Valid, internally consistent NOAA MRMS rainfall is now the primary source even when Open-Meteo reports a substantially different storm total.
- Source disagreement remains visible as a warning and in Developer Mode, but no longer replaces valid NOAA data with cached NOAA or Open-Meteo data.
- NOAA's normal hourly update can briefly leave products one hour apart; that one-hour skew is accepted, while larger timestamp differences are rejected.
- NOAA errors, missing samples, invalid numeric values, inconsistent rolling totals, and implausible drops still trigger the existing safeguards and fallbacks.
- Rainfall weighting, rideability, readiness, drying, trail data, and map behavior are unchanged from V46.

V47 browser regression results:

- All 36 trail cards loaded with no browser errors.
- 33 cards used live NOAA MRMS data; none used the cached-NOAA workaround.
- 15 NOAA/Open-Meteo disagreements displayed a warning while retaining NOAA.
- One trail remained unavailable through the pre-existing safety checks.
- No trail with unverified rainfall displayed a green condition.
- Baileys displayed NOAA's 1.48-inch total as Marginal, 45% rideability, and approximately 11 hours until ready.

## NOAA point-rainfall correction

This build starts from V41 and makes one focused change to NOAA point-rainfall retrieval:

- Queries NOAA's current catalog for `conus_QPE_12H`, `conus_QPE_24H`, `conus_QPE_48H`, and `conus_QPE_72H`.
- Locks each 25-point `getSamples` request to the exact live raster object ID returned by that catalog query.
- Verifies that all four products share the same valid timestamp, all 25 samples return, and every sample came from the selected raster.
- Preserves the existing millimeter-to-inch conversion at the raw pixel boundary. A live Columbus check returned 17.1 mm (0.673 in) for 48/72 hours, closely matching an independent 0.681-inch Open-Meteo total.
- The map overlay is intentionally unchanged.
- Rainfall scoring, readiness math, fallback handling, trail data, map behavior, and card layout were not intentionally changed.

## Test report

Baseline: V41.

Automated checks completed:

- JavaScript syntax check for `js/app.js`.
- JavaScript syntax check for the inline application script in `index.html`.
- Static endpoint-contract regression tests for exact NOAA product names, catalog lookup, raster-ID locking, and absence of the obsolete point-sampling selector.
- Rain safeguard regression checklist remains included.

Live results at NOAA valid time `2026-07-22T20:00:00Z` (25 samples per period):

- Columbus: 12h 0.000, 24h 0.138, 48h 0.772, 72h 0.772 inches.
- Cleveland: 12h 0.000, 24h 0.071, 48h 0.969, 72h 0.969 inches.
- Cincinnati: 12h 0.000, 24h 0.000, 48h 0.874, 72h 0.874 inches.
- All live requests returned HTTP success with no hidden error object, numeric samples, the expected locked raster ID, and monotonic rolling totals.
- Browser load: all 36 trail cards rendered; NOAA data was accepted where it passed the existing safeguards; no browser errors occurred; missing/untrusted rainfall did not produce a green card.
- V41 CSS and trail data matched byte-for-byte after the repair.

Not verified:

- The map overlay was intentionally not tested or changed in this point-data repair.
