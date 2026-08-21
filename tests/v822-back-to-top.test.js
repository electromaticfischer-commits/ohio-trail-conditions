const assert = require('assert');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const app = fs.readFileSync(path.join(root, 'js', 'app.js'), 'utf8');
const css = fs.readFileSync(path.join(root, 'css', 'styles.css'), 'utf8');

assert(html.includes('id="backToTop"'),'Back-to-top control missing');
assert(html.includes('aria-label="Back to top"'),'Back-to-top accessible name missing');
assert(html.includes('<span>v82.2</span>'),'Visible V82.2 version missing');
assert(app.includes("window.scrollTo({top:0,behavior:reduceMotion?'auto':'smooth'})"),'Smooth top navigation missing');
assert(app.includes("window.addEventListener('scroll',updateBackToTop,{passive:true})"),'Passive scroll visibility handler missing');
assert(app.includes('window.innerWidth>700'),'Mobile-only visibility guard missing');
assert(css.includes('.back-to-top:not([hidden])'),'Mobile display rule missing');
assert(css.includes('env(safe-area-inset-bottom)'),'Phone safe-area spacing missing');
assert(css.includes('@media(prefers-reduced-motion:reduce)'),'Reduced-motion styling missing');

console.log('V82.2 mobile back-to-top tests passed.');
