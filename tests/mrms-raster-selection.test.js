const fs = require('fs');
const path = require('path');
const app = fs.readFileSync(path.join(__dirname, '..', 'js', 'app.js'), 'utf8');
const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const sources = [app, html];

// NOAA's live catalog uses conus_QPE_* product names. Resolve their current
// object IDs, then lock each sampling request to the selected raster.
for (const source of sources) {
 for (const product of ['conus_QPE_12H', 'conus_QPE_24H', 'conus_QPE_48H', 'conus_QPE_72H']) {
  if (!source.includes(product)) throw new Error(`Missing live MRMS product ${product}`);
 }
 if (!source.includes("mosaicMethod:'esriMosaicLockRaster'")) {
   throw new Error('getSamples request does not lock the selected raster ID');
 }
 if (!source.includes('lockRasterIds:[product.objectId]')) {
   throw new Error('getSamples request is not using the catalog object ID');
 }
 if (source.includes("if(sourceDisagreement(mrms,fallback))return")) {
   throw new Error('Open-Meteo disagreement still rejects valid NOAA data');
 }
 if (!source.includes("valid NOAA radar data is being used as the primary source")) {
   throw new Error('NOAA-primary disagreement notice is missing');
 }
}
if (app.includes("mrms_24h_co")) throw new Error('Obsolete overlay catalog selector remains');

// getSamples supports mosaicRule but not renderingRule. A renderingRule on this
// endpoint produced NOAA's "Invalid or missing input parameters" response.
const fetchStart = app.indexOf('async function fetchMrmsPeriod');
const fetchEnd = app.indexOf('async function fetchMrmsRain', fetchStart);
const fetchBlock = app.slice(fetchStart, fetchEnd);
if (fetchBlock.includes('renderingRule')) {
  throw new Error('getSamples request incorrectly includes renderingRule');
}
if (fetchBlock.includes("mrms_${hours}h_co")) throw new Error('Obsolete MRMS catalog name remains in point sampling');

// exportImage accepts both parameters. Both overlay periods use the matching
// live locked raster and duration-specific renderer.
const fetchStart2 = app.indexOf('async function fetchMrmsPeriod');
const preFetch = app.slice(0, fetchStart2);
if (!preFetch.includes("renderingRule:JSON.stringify({rasterFunction:`rft_${hours}hr`})")) throw new Error('Overlay renderer is not duration-specific');
if (!preFetch.includes("mosaicMethod:'esriMosaicLockRaster'")) throw new Error('Overlay does not lock its live raster ID');
if (!preFetch.includes("[12,24].forEach")) throw new Error('12-hour and 24-hour overlay controls are missing');
console.log('MRMS endpoint-contract regression checks passed.');
