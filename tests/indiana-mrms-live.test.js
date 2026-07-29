const fs = require('fs');
const path = require('path');
const vm = require('vm');

const source = fs.readFileSync(path.join(__dirname, 'mrms-live.test.js'), 'utf8');
const updated = source.replace(
  /const locations=\[[\s\S]*?\];/,
  `const locations=[
  {name:'Brown County State Park',lat:39.172975,lon:-86.233634},
  {name:'Town Run Trail Park',lat:39.918312,lon:-86.084273},
  {name:'Imagination Glen',lat:41.591113,lon:-87.137999}
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
