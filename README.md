# Ohio Trail Conditions NOAA Repair Build

## V55 compact weather line

- Baseline: V54.
- Adds a compact `Humidity …%, wind … mph.` line to each card using the existing live values.
- The rainfall sampling description, 24-hour range, source, and weather-center coordinates remain hidden.
- Important weather failures and rainfall warnings remain visible.
- The underlying NOAA data, calculations, diagnostics, Developer Mode, shared trail catalog, and community reports are unchanged.

V55 verification results:

- Browser: all 39 cards displayed the compact humidity/wind line.
- No card displayed the removed rainfall-sampling, range, source, or weather-center text.
- No unavailable rainfall card displayed green, and the browser produced no warnings or errors.
- JavaScript syntax, inline-script parity, card-display, administrator publishing, shared-report, rainfall-aging, and NOAA request-contract checks passed.

## V54 card cleanup

- Baseline: V53.
- Removes the technical rainfall-sampling, 24-hour range, humidity, wind, source, and weather-center paragraph from every trail card.
- Important weather failures and rainfall warnings remain visible.
- The underlying NOAA data, calculations, diagnostics, Developer Mode, shared trail catalog, and community reports are unchanged.

V54 verification results:

- Browser: all 39 cards loaded, with no technical rainfall paragraph and no empty paragraph space on any card.
- Important unavailable-rainfall safeguards remained active; no unavailable card displayed green.
- The browser produced no warnings or errors.
- JavaScript syntax, inline-script parity, card-cleanup, administrator publishing, shared-report, rainfall-aging, and NOAA request-contract checks passed.

## V53 administrator publishing

- Baseline: V52.
- The Developer button now opens a Supabase administrator login.
- Authorized administrators can add, edit, hide, restore, and archive trails; each saved change is published directly to the shared Supabase catalog.
- Regular visitors remain account-free and read-only.
- The administrator session is kept in that browser until sign-out or expiration.
- NOAA rainfall retrieval, rainfall aging, rideability, readiness, community reporting, map overlays, and trail-card calculations are unchanged from V52.

V53 verification results:

- Supabase reports all 3 administrator functions installed.
- Live public-security checks passed: unauthenticated users could read all 39 shared trails but could not call either administrator publishing function.
- Browser: all 39 trail cards loaded; Manage trails and Sign out stayed hidden for a public visitor.
- Browser: the Developer button opened the administrator login, and invalid credentials were rejected without exposing Manage trails.
- No unavailable or unverified rainfall card displayed green, and a clean browser load produced no warnings or errors.
- Live NOAA checks passed at Columbus, Cleveland, and Cincinnati for 12/24/48/72 hours at product time `2026-07-26T00:00:00Z`.
- JavaScript syntax, inline-script parity, administrator publishing, shared-report, rainfall-aging, and NOAA request-contract checks passed.

Not verified:

- A successful administrator login and authenticated publish require the administrator's private email and password. Those credentials were not requested or accessed during packaging.

## V52 shared trails and community reports

- Baseline: V51.
- Loads 39 shared trail records from Supabase, including 3 newly added trails and 15 edited built-in trails from `ohio-trail-edits.json`.
- Retains the packaged trail catalog as an automatic fallback if shared trail data cannot load.
- Shares the existing overall recommendation and observation selections with every user; no account, email, name, comment, or location is collected.
- Gives each browser one editable report per trail. Reopening the panel restores its selections; selecting a checked recommendation again clears it; `Remove my report` deletes the entire report.
- Displays recommendation and observation tallies from the last 48 hours separately from the NOAA-calculated rating.
- Community reports do not alter rainfall, rideability, readiness, or official-closure handling.

V52 verification results:

- Live Supabase API: 39 trails loaded; report save, reopen, update, public tally, removal, and post-removal verification passed.
- Raw rider-report rows were not publicly readable, and an invalid recommendation was rejected.
- Browser: all 39 cards loaded, including A.W.Marion, Starhill, and The Wilds.
- Browser report workflow: `Absolutely` and `Perfect traction` were saved, restored after reopening, displayed in the public tally, and removed successfully.
- The temporary browser and API test reports were removed.
- No unavailable or unverified rainfall card displayed green.
- No browser warnings or errors occurred.
- JavaScript syntax, inline-script parity, shared-report integration, rainfall-aging, NOAA request-contract, and ZIP-integrity checks passed.
- NOAA retrieval and condition-calculation source matched V51 exactly.
- Live NOAA checks passed at Columbus, Cleveland, and Cincinnati for 12/24/48/72 hours at product time `2026-07-26T00:00:00Z`.

Not changed:

- NOAA point rainfall, 25-point weighting, 12/24-hour overlays, rainfall aging, rideability, readiness, safeguards, trail-card calculations, and official links.
- Developer Mode catalog edits still save locally. Publishing future catalog edits to everyone requires updating the Supabase trail table.

## V51 card cleanup

- Baseline: V50.
- Removes the trail-specific `Notes:` sentence from every condition card.
- Keeps the rainfall sampling range, humidity, wind, source, and weather coordinates visible.
- Displays `total rain` and `last 72 hr` as separate lines with consistent spacing.
- Rainfall retrieval, rainfall aging, rideability, readiness, safeguards, trail data, overlays, and management behavior are unchanged from V50.

V51 verification results:

- All 36 cards loaded in the browser.
- No card displayed a `Notes:` section.
- The rain labels rendered as separate block lines with a 2-pixel gap.
- No unavailable or unverified trail displayed green.
- No browser warnings or errors occurred.
- JavaScript syntax, inline-script syntax, rainfall-aging, NOAA request-contract, and ZIP-integrity checks passed.

## V50 rainfall-aging calibration

- Baseline: V49.
- Replaces overlapping 12/24/48/72-hour rain penalties with four non-overlapping age bands: 0–12, 12–24, 24–48, and 48–72 hours.
- Each rainfall amount is now counted once. Recent rain keeps the strongest penalty while older rain fades progressively.
- The lingering-moisture penalty now follows the age of the rainfall instead of treating the entire 72-hour total as equally recent.
- NOAA retrieval, 25-point weighting, missing-data safeguards, trail characteristics, status thresholds, weather drying inputs, cards, management tools, and overlays are unchanged.

V50 verification results:

- A simulated recent 0.50-inch storm remained likely wet, including at Alum Creek's higher rain sensitivity.
- A simulated 0.50-inch storm occurring 24–48 hours earlier recovered to green under otherwise dry weather.
- Missing or untrusted rainfall still withholds rideability and cannot produce green.
- Live NOAA 12/24/48/72-hour requests succeeded at Columbus, Cleveland, and Cincinnati with valid monotonic totals and product time `2026-07-25T23:00:00Z`.
- The independent weather comparison accepted the current dry NOAA fields.
- Browser results: Alum Creek Phase 1 was green at 100%, Alum Creek Phase 2 was green at 98%, and Lake Hope was green at 100%.
- All 36 trail cards loaded from NOAA MRMS with no unavailable cards, unsafe green cards, browser warnings, or browser errors.
- JavaScript syntax, inline-script syntax, NOAA request-contract, rainfall-aging, and ZIP-integrity checks passed.

Not verified:

- No currently wet trail was available during the live browser test. Recent-wet behavior was therefore verified with a deterministic half-inch regression scenario.
- Rider observations at additional trails are still needed to refine trail-specific sensitivity and drying factors.

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
