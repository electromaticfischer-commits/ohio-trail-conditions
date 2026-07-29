const fs = require('fs');
const path = require('path');
const vm = require('vm');

const source = fs.readFileSync(path.join(__dirname, 'mrms-live.test.js'), 'utf8');
const updated = source.replace(
  /const locations=\[[\s\S]*?\];/,
  `const locations=[
  {name:'Fort Custer Recreation Area',lat:42.318107,lon:-85.332670},
  {name:'Pinckney Recreation Area',lat:42.414159,lon:-84.001570},
  {name:'Craig Lake State Park',lat:46.612469,lon:-88.185308}
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
