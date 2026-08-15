const fs = require('fs');
const path = require('path');
const assert = require('assert');

const folder = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(folder, 'index.html'), 'utf8');
const source = fs.readFileSync(path.join(folder, 'js', 'app.js'), 'utf8');
const inline = html.match(/<script>([\s\S]*?)<\/script>/)[1].trim();

assert(!html.includes('5-mile distance-weighted NOAA radar sampling, rider reports'), 'Technical subtitle remains');
assert(!html.includes('Community reports and authorized Developer Mode trail changes are shared.'), 'Advisory banner remains');
assert(!html.includes('<div class="notice">'), 'Notice container remains');
assert(html.includes('assets/crust-logo.png'), 'CRUST logo is missing');
assert(html.includes('<div class="header-updated">Conditions refreshed <span id="updated">–</span></div>'), 'Last-refreshed time is not in the header');
assert.strictEqual(inline, source.trim(), 'Inline application script does not match js/app.js');

console.log('Header-cleanup regression tests passed.');
