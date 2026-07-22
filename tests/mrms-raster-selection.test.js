const fs = require('fs');
const path = require('path');
const app = fs.readFileSync(path.join(__dirname, '..', 'js', 'app.js'), 'utf8');

// NOAA's catalog identifies the regional/duration raster in idp_subset.
if (!app.includes("where:`idp_subset = 'mrms_${hours}h_co'`")) {
  throw new Error('Dynamic MRMS query does not filter the GIS Subset field');
}
if (!app.includes("where:\"idp_subset = 'mrms_24h_co'\"")) {
  throw new Error('24-hour map overlay does not filter the CONUS GIS Subset');
}

// getSamples supports mosaicRule but not renderingRule. A renderingRule on this
// endpoint produced NOAA's "Invalid or missing input parameters" response.
const fetchStart = app.indexOf('async function fetchMrmsPeriod');
const fetchEnd = app.indexOf('async function fetchMrmsRain', fetchStart);
const fetchBlock = app.slice(fetchStart, fetchEnd);
if (fetchBlock.includes('renderingRule')) {
  throw new Error('getSamples request incorrectly includes renderingRule');
}
if (!fetchBlock.includes("mosaicMethod:'esriMosaicAttribute'")) {
  throw new Error('getSamples request is missing its mosaic method');
}

// exportImage does accept both parameters; preserve its renderer.
const fetchStart2 = app.indexOf('async function fetchMrmsPeriod');
const preFetch = app.slice(0, fetchStart2);
if (!preFetch.includes("rasterFunction:'rft_24hr'")) {
  throw new Error('24-hour map overlay is missing its renderer');
}
console.log('MRMS endpoint-contract regression checks passed.');
