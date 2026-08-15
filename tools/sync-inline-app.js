const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const app = fs.readFileSync(path.join(root, 'js', 'app.js'), 'utf8').trim();
const indexPath = path.join(root, 'index.html');
const html = fs.readFileSync(indexPath, 'utf8');
const updated = html.replace(/<script>([\s\S]*?)<\/script>/, `<script>\n${app}\n</script>`);

if (updated === html) throw new Error('Inline application script was not replaced');
fs.writeFileSync(indexPath, updated);
console.log('Inline application script synchronized.');
