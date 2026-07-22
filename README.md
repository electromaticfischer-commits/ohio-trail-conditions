# Ohio Trail Conditions V41

## NOAA query correction

V41 makes one focused change to V40's NOAA request layer:

- MRMS `getSamples` requests now filter the raster catalog using NOAA's documented **GIS Subset** field (`idp_subset`), such as `mrms_12h_co` and `mrms_72h_co`.
- The unsupported `renderingRule` parameter was removed from `getSamples`. The NOAA service form and ArcGIS endpoint contract list `mosaicRule` for `getSamples`, but do not list `renderingRule`; including it caused the API response “Invalid or missing input parameters.”
- The 24-hour map overlay still uses both a CONUS mosaic filter and the 24-hour renderer because `exportImage` supports both parameters.
- Rainfall scoring, readiness math, fallback handling, trail data, map behavior, and card layout were not intentionally changed.

## Test report

Baseline: V40.

Automated checks completed:

- JavaScript syntax check for `js/app.js`.
- JavaScript syntax check for the inline application script in `index.html`.
- Static endpoint-contract regression test confirming:
  - `idp_subset` is used instead of `name`;
  - `getSamples` contains no `renderingRule`;
  - the map overlay retains its supported renderer.
- Rain safeguard regression checklist remains included.

Not verified in the build environment:

- A live browser call to NOAA. The execution container cannot resolve external DNS. Developer diagnostics remain enabled so the live response, URL, sample count, and any API error can be inspected immediately in the browser.
