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
assert(html.includes('<span>v82.0</span>'),'Visible V82.0 version missing');

const context={
  formatInches:value=>`${Number(value||0).toFixed(2)}"`,
  elapsedLabel:hours=>hours<48?`${Math.floor(hours)} hr ago`:`${Math.floor(hours/24)} days ago`
};
vm.createContext(context);
vm.runInContext(source.slice(source.indexOf('function olderRainAmount('),source.indexOf('function sampleHeatmapSvg(')),context);

const alum={rain12:.01,rain24:.01,rain72:.99,rain168:2.63,rideability:20,status:{key:'red'},sensitivity:1.28,maxRain1h:1.22,stormRecovery:{tier:'significant'},stormHistory:{lastRainAt:new Date(Date.now()-12*3600000).toISOString(),peakRain1h:1.22,peakRain72:.99,dryingWeatherFactor:.82},soilProfile:{dominantSoil:'Silt Loam',secondarySoil:'Clay Loam',soilDryingFactor:.9},effectiveDrying:.9};
const alumRain=context.rainfallSummaryHtml(alum);
assert(alumRain.includes('0.01"')&&alumRain.includes('0.99"'),'12/24/72-hour amounts must be displayed');
assert(alumRain.includes('storm-active'),'The 72-hour amount must be emphasized while the storm is inside that window');
assert(alumRain.includes('3–7 days ago')&&alumRain.includes('1.64"'),'Recent rain must not hide a meaningful 3–7-day storm');
const alumAssessment=context.modelAssessment(alum);
assert(alumAssessment.includes('intense downpour'));
assert(alumAssessment.includes('earlier-week rain'));
assert(alumAssessment.includes('rain-sensitive clay tread'));

const seal={rain12:.01,rain24:.01,rain72:1.54,rain168:2.02,rideability:55,status:{key:'orange'},sensitivity:1.02,maxRain1h:.43,stormHistory:{peakRain1h:.43,dryingWeatherFactor:.87},soilProfile:{dominantSoil:'Silt Loam',secondarySoil:'Loam',soilDryingFactor:.94},effectiveDrying:.94};
const sealAssessment=context.modelAssessment(seal);
assert(sealAssessment.includes('Recovery is farther along'));
assert(sealAssessment.includes('rain fell more gradually'));
assert(sealAssessment.includes('less rain-sensitive'));

const olderStorm={...seal,rain72:.08,rain168:3.08,stormRecovery:{tier:'severe'},stormHistory:{...seal.stormHistory,lastRainAt:new Date(Date.now()-96*3600000).toISOString(),peakRain72:3}};
const olderRain=context.rainfallSummaryHtml(olderStorm);
assert(olderRain.includes('4 days ago')&&olderRain.includes('3.00"'),'A meaningful prior storm must show its age and total after it leaves the 72-hour window');
const separatedStorm={...alum,priorStormHistory:{lastRainAt:new Date(Date.now()-108*3600000).toISOString(),eventRain:1.57,peakRain1h:.61}};
const separatedRain=context.rainfallSummaryHtml(separatedStorm);
assert(separatedRain.includes('4 days ago')&&separatedRain.includes('1.57"'),'A separately tracked earlier storm must remain visible after newer rain');
const isolated={...seal,rain72:.1,rain168:.24,stormRecovery:{tier:'routine'},stormHistory:{...seal.stormHistory,lastRainAt:new Date(Date.now()-96*3600000).toISOString(),peakRain72:.1}};
assert(!context.rainfallSummaryHtml(isolated).includes('event-tile'),'Small earlier rain must not add noise');
const unavailable=context.rainfallSummaryHtml({...seal,rideability:null});
assert(unavailable.includes('Rainfall unavailable')&&unavailable.includes('could not be verified'));

assert(source.includes('${rainfallSummaryHtml(r)}'));
assert(source.includes('<div class="model-assessment">${modelAssessment(r)}</div>'));
assert(css.includes('.rain-periods')&&css.includes('.model-assessment'));

console.log('V79.0 rainfall-context tests passed.');
