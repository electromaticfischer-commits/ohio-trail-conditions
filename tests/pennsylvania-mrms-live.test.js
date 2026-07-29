const fs = require('fs');
const path = require('path');
const vm = require('vm');

const source = fs.readFileSync(path.join(__dirname, 'mrms-live.test.js'), 'utf8');
const updated = source.replace(
  /const locations=\[[\s\S]*?\];/,
  `const locations=[
  {name:'Ohiopyle State Park',lat:39.846908,lon:-79.483916},
  {name:'French Creek State Park',lat:40.217897,lon:-75.774067},
  {name:'Lackawanna State Park',lat:41.567773,lon:-75.702932}
];`,
);

vm.runInNewContext(updated, {
  console,
  Error,
  fetch,
  JSON,
  Math,
  Number,
  Object,
  URLSearchParams,
  Date,
  process,
});
