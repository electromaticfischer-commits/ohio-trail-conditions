const assert=require('assert');
const fs=require('fs');
const path=require('path');
const vm=require('vm');

const root=path.join(__dirname,'..');
const source=fs.readFileSync(path.join(root,'js','app.js'),'utf8');
const css=fs.readFileSync(path.join(root,'css','styles.css'),'utf8');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const inline=html.match(/<script>([\s\S]*?)<\/script>/)[1].trim();
assert.strictEqual(inline,source.trim(),'Inline application script must match js/app.js');
assert(html.includes('<span>v78.2</span>'),'Visible V78.2 version missing');

const context={formatInches:value=>`${Number(value||0).toFixed(2)}"`};
vm.createContext(context);
vm.runInContext(source.slice(source.indexOf('function olderRainAmount('),source.indexOf('function sampleHeatmapSvg(')),context);

const alum={rain12:.01,rain24:.01,rain72:.99,rain168:2.63,rideability:20,status:{key:'red'},sensitivity:1.28,maxRain1h:1.22,stormHistory:{peakRain1h:1.22,dryingWeatherFactor:.82},soilProfile:{dominantSoil:'Silt Loam',secondarySoil:'Clay Loam',soilDryingFactor:.9},effectiveDrying:.9};
const alumRain=context.rainfallSummaryHtml(alum);
assert(alumRain.includes('0.01"')&&alumRain.includes('0.99"'),'12/24/72-hour amounts must be displayed');
assert(alumRain.includes('Plus 1.64" from 3–7 days ago'),'Material earlier-week rain must be displayed');
const alumAssessment=context.modelAssessment(alum);
assert(alumAssessment.includes('intense downpour'));
assert(alumAssessment.includes('earlier-week rain'));
assert(alumAssessment.includes('rain-sensitive clay tread'));

const seal={rain12:.01,rain24:.01,rain72:1.54,rain168:2.02,rideability:55,status:{key:'orange'},sensitivity:1.02,maxRain1h:.43,stormHistory:{peakRain1h:.43,dryingWeatherFactor:.87},soilProfile:{dominantSoil:'Silt Loam',secondarySoil:'Loam',soilDryingFactor:.94},effectiveDrying:.94};
const sealAssessment=context.modelAssessment(seal);
assert(sealAssessment.includes('Recovery is farther along'));
assert(sealAssessment.includes('rain fell more gradually'));
assert(sealAssessment.includes('less rain-sensitive'));

const isolated={...seal,rain72:.1,rain168:.24};
assert(!context.rainfallSummaryHtml(isolated).includes('3–7 days ago'),'Small earlier rain must not add noise');
const unavailable=context.rainfallSummaryHtml({...seal,rideability:null});
assert(unavailable.includes('Rainfall unavailable')&&unavailable.includes('could not be verified'));

assert(source.includes('${rainfallSummaryHtml(r)}'));
assert(source.includes('<strong>Model assessment</strong><span>${modelAssessment(r)}</span>'));
assert(css.includes('.rain-periods')&&css.includes('.model-assessment'));

console.log('V78.2 rainfall-context tests passed.');
