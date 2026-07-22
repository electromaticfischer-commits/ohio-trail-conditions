
(function(){
  const layers=[];
  function layer(){return {addTo(){layers.push(this);return this},bindPopup(){return this},openPopup(){return this},bindTooltip(){return this},on(){return this},remove(){return this}}}
  function map(){return {setView(){return this},getZoom(){return 7},getSize(){return{x:800,y:600}},getBounds(){return{getWest:()=>-85,getSouth:()=>38,getEast:()=>-80,getNorth:()=>42}},addControl(){return this},on(){return this},removeLayer(){return this},invalidateSize(){return this}}}
  function Control(){}
  Control.extend=function(def){function C(){this.options=def.options||{}};C.prototype.onAdd=def.onAdd;return C};
  window.L={map,tileLayer:layer,circleMarker:layer,marker:layer,imageOverlay:layer,Control,DomUtil:{create(tag,cls,parent){const el=document.createElement(tag);el.className=cls||'';if(parent)parent.appendChild(el);return el}},DomEvent:{disableClickPropagation(){},on(el,event,fn){el.addEventListener(event,fn)}}};
})();
