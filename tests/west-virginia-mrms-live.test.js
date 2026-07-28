const fs = require('fs');
const path = require('path');
const vm = require('vm');

const source = fs.readFileSync(path.join(__dirname, 'mrms-live.test.js'), 'utf8');
const updated = source.replace(
  /const locations=\[[\s\S]*?\];/,
  `const locations=[
  {name:'Mountwood Park',lat:39.242685,lon:-81.298476},
  {name:'Canaan Valley',lat:39.019713,lon:-79.468813},
  {name:'Snowshoe',lat:38.422782,lon:-79.990415}
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
