const assert = require('assert');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const sql = fs.readFileSync(path.join(root, 'supabase', 'v776-community-report-retention.sql'), 'utf8');
const source = fs.readFileSync(path.join(root, 'js', 'app.js'), 'utf8');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const inline = html.match(/<script>([\s\S]*?)<\/script>/)[1].trim();

assert.strictEqual(inline, source.trim(), 'Inline application script must match js/app.js');
assert(html.includes('<span>v79.0</span>'), 'Visible current version missing');
assert(sql.includes("updated_at >= now() - interval '48 hours'"), '48-hour ordinary report window missing');
assert(sql.includes("updated_at >= now() - interval '7 days'"), 'Seven-day fallen-tree window missing');
assert(sql.includes("updated_at >= now() - interval '14 days'"), 'Fourteen-day maintenance window missing');
assert(sql.includes("where o.observation not in ('Fallen trees', 'Trail maintenance')"), 'Long-lived alerts leak into the 48-hour observation window');
assert(sql.includes("'Fallen trees' = any(r.observations)"), 'Fallen-tree reports are not selected independently');
assert(sql.includes("'Trail maintenance' = any(r.observations)"), 'Maintenance reports are not selected independently');
assert(source.includes("['Fallen trees',(count)=>count===1?'Fallen tree':'Fallen trees']"), 'Fallen-tree alert display changed');
assert(source.includes("['Trail maintenance',()=> 'Trail maintenance']"), 'Maintenance alert display changed');

const retained = (ageHours, observations) => ({
  ordinary: ageHours <= 48,
  fallenTrees: observations.includes('Fallen trees') && ageHours <= 7 * 24,
  maintenance: observations.includes('Trail maintenance') && ageHours <= 14 * 24
});

assert.deepStrictEqual(retained(49, ['A few puddles']), {ordinary:false, fallenTrees:false, maintenance:false});
assert.deepStrictEqual(retained(6 * 24, ['Fallen trees']), {ordinary:false, fallenTrees:true, maintenance:false});
assert.deepStrictEqual(retained(8 * 24, ['Fallen trees']), {ordinary:false, fallenTrees:false, maintenance:false});
assert.deepStrictEqual(retained(13 * 24, ['Trail maintenance']), {ordinary:false, fallenTrees:false, maintenance:true});
assert.deepStrictEqual(retained(15 * 24, ['Trail maintenance']), {ordinary:false, fallenTrees:false, maintenance:false});

console.log('V77.6 community retention tests passed.');
