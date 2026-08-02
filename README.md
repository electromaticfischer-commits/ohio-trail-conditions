# Ohio Trail Conditions NOAA Repair Build

## V77.2 persistent map markers

Baseline: V77.1.

- The state menu filters the trail cards without moving or zooming the map.
- Trails already loaded on the map stay visible when a state is selected.
- Selecting a state still loads its complete packaged trail catalog.
- Rainfall, rideability, readiness, soil, weather, and trail data are unchanged.

## V77.1 state map framing

Baseline: V77.0.

- Selecting a state loads every packaged trail in that state before filtering.
- The map automatically frames the selected state's complete trail catalog, so
  trails outside the previous map view do not appear to disappear.
- Returning to All states preserves the existing automatic map-discovery
  behavior.
- Rainfall, rideability, readiness, soil, weather, and trail data are unchanged.

## V77.0 shared weather and automatic discovery

Baseline: V76.1.

- NOAA MRMS and Open-Meteo weather are refreshed centrally in Supabase every
  hour, in five staggered state jobs.
- The browser loads one shared weather snapshot instead of making separate
  weather requests for every trail.
- The rainfall, soil, rideability, and readiness formulas remain in the
  browser and use the same V76.1 coefficients.
- If location permission was already granted, every trail within 75 miles is
  shown. There is no result cap.
- Moving or zooming the map automatically adds trails in the visible area.
  Trails already loaded stay available and are not duplicated.
- All five states are the default view; the state menu remains available as a
  filter.
- Fifteen verified trails present in the packaged V76.1 catalog were synced
  into the shared catalog before the cache was refreshed.
- Shared weather older than three hours is rejected, and unavailable
  precipitation still withholds rideability.

Backend files:

- `supabase/v77-shared-weather-cache.sql`
- `supabase/v77-packaged-catalog-sync.sql`
- `supabase/functions/weather-refresh/index.ts`

Verification:

- 303 active shared records refreshed: 301 trusted, 2 guarded fallbacks, 0
  unavailable.
- All cached records had numeric 12/24/48/72-hour rainfall, current NOAA
  timestamps, and no rainfall-ordering violations.
- Live browser test loaded 258 trails in the opening map view with no
  unavailable cards; one zoom-out automatically expanded to all 299 packaged
  trails while retaining the original cards.

## V76.1 packaged catalog sync

Baseline: V76.0.

- Compares the active shared Supabase catalog with the packaged five-state catalog.
- Adds A.W.Marion and The Wilds, the two valid active systems that existed only
  in the shared catalog.
- Keeps Germantown, Lake Vesuvius, and Mike's Bike Park retired.
- Suppresses the duplicate shared Starhill record because Forry Preserve /
  Star Hill is already packaged.
- Expands the packaged catalog from 297 to 299 systems, including 49 in Ohio.
- Does not change rainfall, rideability, readiness, soil, or community-report
  calculations.

## V76 comprehensive five-state catalog

Baseline: V75.1.

- Expands the packaged catalog from 148 to 297 mountain-bike riding systems:
  Ohio 47, West Virginia 34, Indiana 40, Pennsylvania 91, and Michigan 85.
- Audits 689 MTB Project directory entries and records an explicit add, retain,
  or exclude decision in `data/v76-five-state-catalog-audit.json`.
- Uses one card per named riding area; directory containers, locality
  aggregates, aliases, individual fragments, non-MTB uses, and access conflicts
  are excluded.
- Adds 17-point USDA soil research for every new center. Low-confidence or
  unavailable results retain neutral factors and remain adjustable in
  Developer Mode.
- Loads live weather only for the selected state with two bounded workers,
  preventing the expanded catalog from overwhelming NOAA and Open-Meteo.
- Does not change rainfall, rideability, readiness, or community-report math.

Run `supabase/v76-comprehensive-catalog.sql` once so the shared catalog includes
the 149 additions.

## V74 Michigan expansion

Baseline: V73.

- Adds 38 Michigan DNR mountain-bike trail systems grouped with the state’s Recreation Search facility IDs.
- Uses official Michigan DNR trail geometry for centers and 17-point USDA soil sampling.
- Excludes malformed and rail-trail-only facility groups from the mountain-bike catalog.
- Keeps unavailable USDA coverage neutral and low-confidence rather than guessing a soil type.
- Adds Michigan to the state filter and expands the shared-catalog boundary for both peninsulas.
- Preserves V73 rainfall, rideability, readiness, map, and community-report behavior.

Run `supabase/v74-michigan-expansion.sql` once before publishing the site so the shared catalog includes Michigan.

## V73 Pennsylvania expansion

Baseline: V72.

- Adds all 25 Pennsylvania state-park trail systems where mountain biking is marked `Promoted` in the official Pennsylvania DCNR trail layer.
- Uses monthly updated DCNR GPS geometry for trail-network centers and 17-point USDA soil sampling.
- Adds Pennsylvania to the state filter and expands the shared-catalog boundary eastward.
- Keeps trail mileage out of the interface and shared records.
- Preserves V72 rainfall, rideability, readiness, map, and community-report behavior.

Run `supabase/v73-pennsylvania-expansion.sql` once before publishing the site so the shared catalog includes Pennsylvania.

## V72 Indiana expansion

Baseline: V71.

- Adds 25 verified Indiana mountain-bike trail systems.
- Uses active mountain-bike records from the Indiana DNR Trails Inventory for trail-network centers and internal geometry.
- Uses 17 distributed mapped-route locations for USDA soil research.
- Adds Indiana to the state filter and expands the shared-catalog boundary westward.
- Keeps trail mileage out of the interface and shared records.
- Preserves V71 rainfall, rideability, readiness, map, and community-report behavior.

Run `supabase/v72-indiana-expansion.sql` once before publishing the site so the shared catalog includes Indiana.

## V71 West Virginia expansion

Baseline: V70.

- Adds 13 verified public West Virginia mountain-bike trail systems to the current site.
- Uses route geometry from the official West Virginia Trail Inventory for 11 systems and
  OpenStreetMap mountain-bike geometry for Cacapon and Snowshoe.
- Samples USDA NRCS soil at 17 evenly distributed locations along each mapped trail network,
  with low-confidence results kept neutral and available for Developer Mode adjustment.
- Adds an Ohio/West Virginia state filter, widens the live catalog bounds, changes the scalable
  site title to `Mountain Bike Trail Conditions`, and corrects the footer version to `v71.0`.
- Preserves the V70 rainfall, rideability, readiness, rider-report, and developer-publishing math.

V71 data migration:

1. The V70 nationwide foundation must already be installed.
2. Run `supabase/v71-west-virginia-expansion.sql`.
3. Confirm the result lists 13 active West Virginia systems with route and soil records.

V71 verification:

- West Virginia inventory access, state filtering, packaged fallback, inline-script parity,
  database row counts, route metadata, soil metadata, and unchanged V70 calculation contracts
  are covered by `tests/west-virginia-expansion.test.js`.

## V70 nationwide data foundation

Baseline: V69.

- Adds an additive PostGIS migration for indexed trail centers, route geometry,
  versioned soil profiles, weather snapshots, and nationwide rider reports.
- Preserves and synchronizes the existing `ohio_trails`,
  `ohio_trail_reports`, administrator access, and current report behavior.
- Attempts the bounded nationwide catalog first and falls back to the existing
  Ohio catalog until the migration is installed.
- Adds country and state codes to Developer Mode for future trail additions.
- Rebuilds all 39 USDA profiles from the current live Supabase trail centers.
- Stores the exact research coordinate with every packaged and database soil
  profile so a stale profile cannot silently follow a moved trail.
- Corrects Mountwood's stale soil research from Low confidence at the old
  packaged coordinate to Medium confidence at its current live location.
- Does not change rainfall weighting, rideability thresholds, readiness
  calculations, card layout, map behavior, or community-report selections.

Supabase rollout order:

1. `supabase/nationwide-foundation.sql`
2. `supabase/v70-soil-profile-seed.sql`

V70 verification:

- The live Supabase migration completed with 39/39 legacy trails copied to the
  nationwide index and all 3 existing rider reports preserved.
- The live bounded catalog returned 39 trails and 39 coordinate-linked soil
  profiles.
- Mountwood returned its current live center, `WV` state code, Medium
  confidence, 9/17 usable samples, and a silt-loam profile.
- The browser rendered all 39 cards from the migrated service; none displayed
  unavailable weather.
- Live NOAA 12/24/48/72-hour checks passed in Columbus, Cleveland, and
  Cincinnati, including rolling-total ordering.
- Live USDA, rainfall safeguards, shared reports, administrator publishing,
  location controls, card cleanup, JavaScript syntax, and ZIP integrity
  checks passed.

## V69 automatic USDA soil profiles

- New trails automatically research a 17-point USDA NRCS SSURGO soil profile before publishing.
- Moving a trail's access/location point automatically refreshes that soil profile.
- Changing only the rainfall weather center does not change soil.
- The researched profile is stored with the shared Supabase trail record and is used by every visitor.
- If USDA cannot verify a new or relocated trail, the trail is not published with a guessed or neutral soil value.

V69 verification:

- The live USDA service returned HTTP 200 and browser CORS permission.
- The exact app calculation returned Silt Loam, Moderately well drained,
  factor 0.90, with 16/17 usable samples at an Ohio test location.
- Trigger tests passed for a new trail, a moved trail, an unchanged trail, and
  a weather-center-only change.
- All 39 live trail cards rendered in the browser with no unavailable cards.
- Live NOAA 12/24/48/72-hour checks passed at Columbus, Cleveland, and
  Cincinnati; rolling totals remained ordered.
- Rainfall safeguards, card cleanup, community reports, location controls,
  administrator publishing, and JavaScript syntax tests passed.

## V68 sticky rider observations

Baseline: V67.

- Keeps `Trail maintenance` as a supported rider observation.
- Updates the anonymous rider's local report immediately after every click.
- Serializes rapid report changes per trail so an older request cannot
  overwrite a newer combination.
- Each rapid click now builds on the newest local selections.
- If sharing fails, the selections remain saved in that browser and the user
  receives an accurate message that sharing did not complete.
- Community warning summaries still prioritize fallen trees, trail
  maintenance, and high creek crossings.

V68 verification:

- A controlled rapid-click test selected Fallen trees, Trail maintenance, and
  Perfect traction without waiting between clicks.
- All three were immediately present in the local report.
- The three database requests ran one at a time.
- The final shared payload contained all three observations.
- Community alert, shared-report, rainfall safeguard, and NOAA request-contract
  regression tests passed.
- JavaScript source and inline-script syntax passed.

## V67 researched soil is authoritative

Baseline: V66.

V67 removes the manually guessed `surface`, `surfaces`, `drying`, and
`drainage` fields. Names, access and weather coordinates, links, canopy, rain
sensitivity, notes, status, administration data, and rider reports are
preserved.

- Refreshed USDA SSURGO research using the corrected live Supabase coordinates.
- Expanded coverage from 36 built-in trails to all 39 currently shared trails,
  including A.W. Marion, Starhill, and The Wilds.
- Research is now the sole natural-soil/drying source.
- Developer Mode no longer asks for surface, drainage, or drying guesses.
- A future trail without a researched profile receives a neutral soil factor
  rather than inheriting a guessed value.
- Mountwood's sparse federal coverage is still labeled Low confidence and now
  receives the neutral factor instead of its former guessed factor.
- Purpose-built construction adjustments remain separate from natural soil.
- Added `supabase/v67-remove-guessed-soil.sql` for the one-time shared-database
  cleanup. It removes only the four obsolete keys.
- Updated the administrator save function so future edits cannot restore those
  obsolete keys.

V67 verification:

- 39/39 live shared trail coordinates were sampled.
- 38/39 profiles had adequate area coverage; Mountwood remained Low confidence.
- All 36 packaged records contain zero guessed soil fields.
- All three soil controls were removed from Developer Mode.
- The database cleanup targets only the four obsolete JSON keys.
- The controlled two-inch storm safeguard passed for every packaged trail.
- Missing-rain safeguards remain present and unchanged.
- JavaScript source and inline-script syntax passed.

## V66 researched soil-aware drying

Baseline: V65.

V66 intentionally changes only the modeled drying adjustment. Measured NOAA
rainfall, rainfall weighting, humidity/wind/temperature inputs, rideability
thresholds, readiness formula, trail cards, reports, map, and administration
behavior retain their V65 logic.

### What changed

- Added a USDA NRCS SSURGO soil profile for all 36 built-in trail systems.
- Sampled 17 mapped points around each trail center: the center plus eight
  compass points at 0.5 mile and 1 mile.
- Stored dominant/secondary surface texture, natural drainage, confidence,
  coverage, and a soil drying factor.
- Replaced the previous subjective `drying × drainage` natural-soil adjustment
  with one documented coefficient: 65% surface texture behavior plus 35% NRCS
  natural drainage class, bounded to 0.65–1.30.
- The coefficient changes modeled drying only. It never changes measured rain.
- Retained a separate, bounded construction advantage for the existing
  purpose-built/all-weather systems.
- Mountwood has only 1/17 usable SSURGO samples; it is labeled Low confidence
  and continues to use its V65 drying value.
- Trail Information now shows mapped soil, natural drainage, soil confidence,
  rain sensitivity, and canopy.

Research audit files:

- `data/trail-soil-profiles.json`
- `data/trail-soil-usda-raw.json`

Authoritative sources:

- USDA NRCS SSURGO: https://www.nrcs.usda.gov/resources/data-and-reports/soil-survey-geographic-database-ssurgo
- USDA Soil Data Access: https://sdmdataaccess.nrcs.usda.gov/
- Soil Data Access web-service documentation: https://sdmdataaccess.nrcs.usda.gov/WebServiceHelp.aspx

### V66 test report

- USDA lookup: 36/36 built-in trails returned mapped data; 35/36 had enough
  surrounding usable samples for the new factor.
- Profile regression: 36/36 profiles present; all coefficients within the
  documented bounds.
- Known profile checks passed: Lake Hope sandy loam and Oak Openings sand are
  faster; Alum Phase 2 silt loam/poor drainage and Mount Airy clay loam are
  slower.
- Severe-storm safeguard passed: every built-in trail remains Likely wet after
  a controlled 2-inch recent-rain scenario.
- Missing-rain safeguard passed: unavailable rainfall still withholds
  rideability and displays Rain data unavailable.
- Rainfall equation comparison passed: V65 and V66 rainfall weighting is
  identical.
- JavaScript source and inline-script syntax passed.
- Direct NOAA checks passed at product time `2026-07-28T16:00:00Z` for all
  12/24/48/72-hour periods at Columbus, Cleveland, and Cincinnati. Every
  response was HTTP 200, returned the locked duration-specific raster, had a
  valid numeric millimeter sample, converted to inches, and satisfied rolling
  total ordering. Point totals were Columbus 1.00", Cleveland 0.07", and
  Cincinnati 0.00"/0.19"/0.19"/0.20".
- Independent comparison: Open-Meteo's Columbus grid totaled about 0.33" over
  the comparable recent period versus NOAA's 1.00" point value. This material
  disagreement is documented rather than treated as proof that either source
  is exact; the existing V65 source-disagreement safeguard remains unchanged.
- Live browser load passed: all 39 currently shared trail cards rendered; none
  showed Rain data unavailable; measurable recent storms remained wet where
  appropriate; the soil details remained collapsed under Trail Information.
- Same-weather V65/V66 comparison after NOAA's hourly catalog rollover: 30
  cards had identical displayed rideability; nine differed by only one or two
  percentage points; no condition color changed. Current heavy rainfall
  correctly dominates the comparatively modest soil drying adjustment.
- During the exact hourly NOAA catalog rollover, the first browser load
  temporarily used the existing Open-Meteo fallback because no unique 12-hour
  raster was available. A reload after the rollover completed had no browser
  warnings and returned the normal NOAA-backed values. This inherited source
  behavior was documented but not changed in this soil-only build.

Known limitation: SSURGO describes mapped natural soils, not the exact trail
tread, imported aggregate, compaction, drainage work, or every ridge/hollow
within a large trail system. Community reports and official closures should
continue to override the prediction.

## V65 weather-card accuracy and cleanup

- Baseline: V64.
- Uses NOAA's rolling 12/24/48/72-hour bands for the displayed last-rain age whenever NOAA supplies the rainfall total.
- Prevents a NOAA total from being paired with an unrelated Open-Meteo last-rain label.
- Normal cards display only temperature, humidity, and wind; NOAA/source comparison messages remain available only in Developer diagnostics.
- Adds the latest available hourly temperature from the existing Open-Meteo response.
- Rainfall totals, rideability calculations, safeguards, community reports, and map behavior are unchanged.

V65 verification results:

- Browser live audit: all 39 trail cards loaded; none displayed unavailable rainfall.
- Great Seal displayed `Within 12 hr`, 0.92 inches over 72 hours, `Likely wet`, and approximately two days until ready.
- No card paired `3+ days ago` with measurable NOAA 72-hour rainfall after the correction.
- Normal cards contained no NOAA, radar, Open-Meteo, or source-comparison wording.
- Normal cards displayed temperature, humidity, and wind; Great Seal displayed 72°F, 88%, and 7 mph during the audit.
- Direct NOAA checks passed for 12/24/48/72 hours at Columbus, Cleveland, and Cincinnati at product time `2026-07-28T13:00:00Z`, with valid numeric and monotonic totals.
- The browser produced no warnings or errors during the 39-trail audit.

## V64 community count formatting

- Baseline: V63.
- Displays each Community Reports attribute in bold followed by its regular-weight user count in parentheses, such as `I'd wait (1)`.
- Uses the same formatting for notable observations, such as `Fallen trees (2)`, and removes the warning icon.
- Community-report data, aggregation, observation alerts, weather data, and trail calculations are unchanged.

## V63 visual cleanup

- Baseline: V62.
- Renames the site `Ohio Mountain Bike Trail Conditions` and moves the refreshed time into the header.
- Removes the large condition-count, best-trail, nearest-trail, and refreshed summary cards.
- Keeps location as a compact toolbar action and silently reuses location only when the browser has already granted permission.
- Displays Community Report labels first with the count afterward in bold.
- Darkens the page background slightly so the white trail cards have clearer separation.
- Weather data, condition calculations, community-report storage, and report aggregation are unchanged.

V63 verification results:

- Browser: all 39 trail cards loaded.
- The page title and header displayed `Ohio Mountain Bike Trail Conditions`, with the refresh time in the header.
- No large summary-card container rendered; the compact `Find trails near me` control rendered with the filters.
- Lake Hope displayed `I'd wait 1`, with only `1` bold, followed by its fallen-tree and maintenance alert.
- The page background rendered as the intended darker gray-green (`rgb(233, 237, 233)`).
- Visual-cleanup, location, header, community-report, community-alert, ready-card, collapsed-information, usability, administrator-publishing, rainfall-aging, safeguard, and NOAA request-contract regressions passed.
- NOAA point-rainfall code and trail calculations match the live-tested V62 baseline.

## V62 community observation alerts

- Baseline: V61.
- Shows recent fallen-tree, trail-maintenance, and high-creek observations directly in the collapsed Community Reports control.
- Prioritizes fallen trees and maintenance, shows counts, and limits the collapsed alert to two observations.
- Routine surface observations remain available in the expanded report without adding clutter to every collapsed card.
- Community-report storage, aggregation period, weather data, and trail calculations are unchanged.

V62 verification results:

- Browser: all 39 trail cards loaded.
- Lake Hope's collapsed summary displayed `1 I'd wait` followed by `⚠ 2 Fallen trees · 2 Trail maintenance`.
- Only the trail with notable maintenance observations displayed an alert; routine surface observations did not create collapsed warnings.
- Community-alert, community-report, location, ready-card, collapsed-information, usability, administrator-publishing, rainfall-aging, safeguard, and NOAA request-contract regressions passed.
- NOAA point-rainfall code and calculations match the live-tested V61 baseline.

## V61 simplified community reports

- Baseline: V60.
- Collapsed report controls show `Community Reports — [age]` and the recommendation totals.
- Trails without reports show `Community Reports` and `Be the first to report conditions.`
- Removes the duplicated expanded community summary, repeated selection instructions, `Shared with everyone`, and `You reported` sentence.
- Uses shorter editor headings and recommendation labels while preserving the existing stored report values.
- Displays `Saved and shared` with the existing remove control after a report is saved.
- Prevents `Perfect traction` from remaining selected with wet-surface observations.
- Report storage, 48-hour aggregation, trail calculations, weather data, and community reports remain separate from the calculated rating.

V61 verification results:

- Browser: all 39 trail cards loaded with no warnings or errors.
- A trail without reports displayed `Community Reports` and `Be the first to report conditions.`
- A trail with a current report displayed `Community Reports — now` and `1 I'd wait`.
- The expanded editor displayed the shortened recommendation labels and headings without the duplicated community summary or instructions.
- Static regressions passed for community reports, location control, ready-card cleanup, collapsed trail information, usability, administrator publishing, shared reports, rainfall aging, rainfall safeguards, and the NOAA request contract.
- Live NOAA checks passed for 12/24/48/72-hour data at Columbus, Cleveland, and Cincinnati; all returned 0.000 inches at product time `2026-07-26T02:00:00Z`.
- Live database security passed: unauthenticated trail publishing was denied and all 39 shared trails remained readable.
- The locally owned `Saved and shared` state was verified by automated checks but was not changed in the browser because that would alter a public report.

## V60 location control

- Baseline: V59.
- Moves `Use my location` from the toolbar into the `Nearest trail / Use location` summary card.
- The summary card becomes the location button and displays the nearest trail after location is shared.
- Distance calculations, sorting, map behavior, data, and condition calculations are unchanged.

V60 verification results:

- Browser: exactly one location control rendered inside the four-card summary, with `Use location / Nearest trail`.
- No location control remained in the toolbar.
- All 39 trail cards loaded and the browser produced no warnings or errors.
- JavaScript syntax, inline-script parity, location-control, ready-card, collapsed-information, usability, rainfall-aging, safeguard, and NOAA request-contract checks passed.

## V59 ready-card cleanup

- Baseline: V58.
- Removes the `condition estimate` subtitle when a card displays `Ready now`.
- Wet-trail readiness estimates, unavailable-status wording, data, and calculations are unchanged.

V59 verification results:

- Browser: all 39 current ready cards displayed `Ready now` with no subtitle or empty subtitle element.
- All 39 collapsed Trail information sections remained intact.
- The browser produced no warnings or errors.
- JavaScript syntax, inline-script parity, ready-card, collapsed-information, usability, rainfall-aging, safeguard, and NOAA request-contract checks passed.

## V58 collapsed trail information

- Baseline: V57.
- Moves the complete Trail characteristics block inside the collapsed `Trail information` section, above the official and mapping links.
- Condition facts, rideability, humidity/wind, rider reports, data sources, and calculations are unchanged.

V58 verification results:

- Browser: all 39 cards loaded with Trail characteristics hidden while each `Trail information` section was collapsed.
- Opening `Trail information` displayed the characteristics followed by the available trail links.
- No Trail characteristics block remained outside its collapsed section.
- The browser produced no warnings or errors.
- JavaScript syntax, inline-script parity, collapsed-information, usability, administrator, shared-report, rainfall-aging, safeguard, and NOAA request-contract checks passed.

## V57 usability cleanup

- Baseline: V56.
- Shows rainfall ages of 48 hours or more in days.
- Replaces `Now / ready in` with the clearer `Ready now / condition estimate`.
- Gives long trail names more room in the top summary.
- Adds a compact rider-report tally and freshness label before the report panel.
- Adds `Recently reported` sorting.
- Consolidates card links under `Trail information`.
- Keeps rainfall diagnostics exclusive to authenticated Developer Mode.
- NOAA retrieval, rainfall aging, rideability, readiness calculations, safeguards, shared trails, and report storage are unchanged.

V57 verification results:

- Browser: all 39 cards loaded; every older rain age displayed in days, with no high-hour labels remaining.
- All currently dry cards displayed `Ready now`; the former `ready in` label was absent.
- All 39 cards displayed compact report freshness and a working `Trail information` menu.
- `Recently reported` sorting was selectable and rainfall diagnostics were absent for public visitors.
- The top summary, map, compact humidity/wind line, and administrator gate remained intact.
- The browser produced no warnings or errors.
- Live NOAA 12/24/48/72-hour checks passed at Columbus, Cleveland, and Cincinnati at product time `2026-07-26T01:00:00Z`.
- Live Supabase security passed: 39 shared trails remained readable and unauthenticated publishing remained blocked.
- JavaScript syntax, inline-script parity, usability, header, card, administrator, shared-report, rainfall-aging, safeguard, and NOAA request-contract checks passed.

## V56 header cleanup

- Baseline: V55.
- Removes the technical subtitle beneath the site title.
- Removes the large advisory banner above the summary.
- Weather data, calculations, warnings, cards, diagnostics, Developer Mode, shared trails, and community reports are unchanged.

V56 verification results:

- Browser: the title remained, while the subtitle and advisory banner were absent.
- The summary, map, all 39 cards, and all 39 compact humidity/wind lines rendered correctly.
- The browser produced no warnings or errors.
- JavaScript syntax, inline-script parity, header-cleanup, card-display, administrator publishing, shared-report, rainfall-aging, and NOAA request-contract checks passed.

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
# V75 — Five-state mountain-bike catalog audit

- Added 15 verified natural-surface mountain-bike riding areas across Ohio, West Virginia, Indiana, Pennsylvania, and Michigan.
- Retired Germantown MetroPark, Lake Vesuvius Recreation Area, and Mike's Bike Park from the active catalog. Existing database history and rider reports are preserved.
- Every addition links to an official land-manager source and a Trailforks riding area.
- Every addition received a fresh 17-location USDA SSURGO soil check with at least medium confidence.
- The active catalog now contains 148 systems: Ohio 37, West Virginia 16, Indiana 26, Pennsylvania 28, and Michigan 41.
- Rainfall retrieval, weather aging, rideability, readiness, community reporting, and card calculations were not changed.
