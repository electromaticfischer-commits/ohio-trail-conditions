const assert=require('assert');
const fs=require('fs');
const path=require('path');

const root=path.join(__dirname,'..');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const css=fs.readFileSync(path.join(root,'css','styles.css'),'utf8');
const logo=path.join(root,'assets','crust-logo.png');

assert(fs.existsSync(logo),'Supplied CRUST logo asset is missing');
assert(fs.statSync(logo).size>100000,'CRUST logo asset appears incomplete');
assert(html.includes('assets/crust-logo.png?v=82.1'),'Header does not reference the V82.1 logo');
assert(html.includes('alt="CRUST — Chasing perfect dirt."'),'Updated logo description is missing');
assert(html.includes('<span>v82.2</span>'),'Visible V82.2 version missing');
assert(css.includes('height:100px;max-width:56vw'),'Desktop logo sizing is missing');
assert(css.includes('height:74px;max-width:78vw'),'Mobile logo sizing is missing');

console.log('V82.2 logo tests passed.');
