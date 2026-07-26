const fs=require('fs');
const path=require('path');
const source=fs.readFileSync(path.join(__dirname,'..','js','app.js'),'utf8');
const css=fs.readFileSync(path.join(__dirname,'..','css','styles.css'),'utf8');

for(const observation of ['Fallen trees','Trail maintenance','Creek crossings high']){
  if(!source.includes(`['${observation}'`))throw new Error(`${observation} is not prioritized`);
}
if(!source.includes('.slice(0,2)'))throw new Error('Collapsed alerts are not limited to two observations');
if(!source.includes('class="community-alert">${communityHeading.alert}'))throw new Error('Collapsed warning line is missing');
if(source.includes('class="community-alert">⚠'))throw new Error('Warning icon remains');
if(!source.includes('`<strong>${label(Number(observationCounts[value]))}</strong> (${Number(observationCounts[value])})`'))throw new Error('Warning label/count formatting is incorrect');
if(!css.includes('.community-alert'))throw new Error('Collapsed warning styling is missing');

console.log('Community observation-alert regression tests passed.');
