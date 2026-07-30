const baseTrails=[{"id":"alum-p1","name":"Alum Creek Phase 1","region":"Central Ohio","lat":40.1989,"lon":-82.944,"sensitivity":1.28,"canopy":0.85,"official":"https://www.combomtb.com/trail-conditions","note":"Rain-sensitive clay and high traffic can keep this trail soft.","mtbProject":"https://www.mtbproject.com/search?q=Alum%20Creek%20Phase%201"},{"id":"alum-p2","name":"Alum Creek Phase 2","region":"Central Ohio","lat":40.224,"lon":-82.955,"sensitivity":1.22,"canopy":0.84,"official":"https://www.combomtb.com/trail-conditions","note":"Natural-surface singletrack that can remain wet after storms.","mtbProject":"https://www.mtbproject.com/search?q=Alum%20Creek%20Phase%202"},{"id":"chestnut","name":"Chestnut Ridge Metro Park","region":"Central Ohio","lat":39.8096,"lon":-82.7508,"sensitivity":1.16,"canopy":0.82,"official":"https://www.combomtb.com/trail-conditions","note":"Clay-rich sections may stay soft after nearby pavement has dried.","mtbProject":"https://www.mtbproject.com/search?q=Chestnut%20Ridge%20Metro%20Park"},{"id":"great-seal","name":"Great Seal State Park","region":"South-Central Ohio","lat":39.4028,"lon":-82.9413,"sensitivity":1.02,"canopy":0.82,"official":"https://www.combomtb.com/trail-conditions","note":"Slopes drain faster than low areas, so conditions vary by section.","mtbProject":"https://www.mtbproject.com/search?q=Great%20Seal%20State%20Park"},{"id":"mohican","name":"Mohican MTB Trail","region":"North-Central Ohio","lat":40.6155,"lon":-82.3169,"sensitivity":1,"canopy":0.9,"official":"https://www.ridemohican.com/","note":"A long route with substantial local variation in surface conditions.","mtbProject":"https://www.mtbproject.com/search?q=Mohican%20MTB%20Trail"},{"id":"baileys","name":"Baileys Trail System","region":"Southeast Ohio","lat":39.3987,"lon":-82.1307,"sensitivity":0.78,"canopy":0.76,"official":"https://baileystrailsystem.org/trail-conditions/","note":"Purpose-built surfaces generally recover faster than legacy clay trails.","mtbProject":"https://www.mtbproject.com/search?q=Baileys%20Trail%20System"},{"id":"john-bryan","name":"John Bryan State Park","region":"Southwest Ohio","lat":39.7895,"lon":-83.8742,"sensitivity":1.2,"canopy":0.92,"official":"https://www.mvmba.bike/trails","note":"Shaded natural surface can remain damp well after rain ends.","mtbProject":"https://www.mtbproject.com/search?q=John%20Bryan%20State%20Park"},{"id":"momba","name":"MoMBA / Huffman MetroPark","region":"Dayton Area","lat":39.8026,"lon":-84.0946,"sensitivity":1.04,"canopy":0.78,"official":"https://www.mvmba.bike/trails","note":"Purpose-built loops with mixed soils and variable shade.","mtbProject":"https://www.mtbproject.com/search?q=MoMBA%20/%20Huffman%20MetroPark"},{"id":"caesar","name":"Caesar Creek State Park","region":"Southwest Ohio","lat":39.5151,"lon":-84.0528,"sensitivity":1.1,"canopy":0.84,"official":"https://www.mvmba.bike/trails","note":"Mixed-use natural trails can retain moisture after substantial rain.","mtbProject":"https://www.mtbproject.com/search?q=Caesar%20Creek%20State%20Park"},{"id":"east-fork","name":"East Fork State Park","region":"Cincinnati Area","lat":39.0172,"lon":-84.1302,"sensitivity":1.15,"canopy":0.86,"official":"https://coramtb.org/","note":"Clay-heavy soils are often slow to recover after precipitation.","mtbProject":"https://www.mtbproject.com/search?q=East%20Fork%20State%20Park"},{"id":"harbin","name":"Harbin Park","region":"Cincinnati Area","lat":39.3309,"lon":-84.5602,"sensitivity":1.02,"canopy":0.72,"official":"https://coramtb.org/","note":"Shorter urban trail system with mixed exposure and drainage.","mtbProject":"https://www.mtbproject.com/search?q=Harbin%20Park"},{"id":"huston","name":"Hueston Woods State Park","region":"Southwest Ohio","lat":39.5708,"lon":-84.7455,"sensitivity":1.13,"canopy":0.9,"official":"https://coramtb.org/","note":"Heavily wooded natural trail with prolonged dampness after storms.","mtbProject":"https://www.mtbproject.com/search?q=Hueston%20Woods%20State%20Park"},{"id":"mitchell","name":"Mitchell Memorial Forest","region":"Cincinnati Area","lat":39.1641,"lon":-84.7743,"sensitivity":1.08,"canopy":0.85,"official":"https://coramtb.org/","note":"Wooded trail conditions depend strongly on recent rain and humidity.","mtbProject":"https://www.mtbproject.com/search?q=Mitchell%20Memorial%20Forest"},{"id":"mount-airy","name":"Mount Airy Forest","region":"Cincinnati Area","lat":39.177,"lon":-84.567,"sensitivity":1.1,"canopy":0.88,"official":"https://coramtb.org/","note":"Urban forest singletrack with shaded, moisture-retaining sections.","mtbProject":"https://www.mtbproject.com/search?q=Mount%20Airy%20Forest"},{"id":"bedford","name":"Bedford Singletrack","region":"Northeast Ohio","lat":41.3655,"lon":-81.5745,"sensitivity":1.04,"canopy":0.84,"official":"https://www.clevelandmetroparks.com/parks/visit/activities/mountain-biking/trail-status","note":"Purpose-built Cleveland Metroparks singletrack with official status reporting.","mtbProject":"https://www.mtbproject.com/search?q=Bedford%20Singletrack"},{"id":"royalview","name":"Royalview Trail","region":"Northeast Ohio","lat":41.3146,"lon":-81.8128,"sensitivity":1,"canopy":0.8,"official":"https://www.clevelandmetroparks.com/parks/visit/activities/mountain-biking/trail-status","note":"Designed singletrack that generally drains better than older trails.","mtbProject":"https://www.mtbproject.com/search?q=Royalview%20Trail"},{"id":"east-rim","name":"East Rim Trail","region":"Northeast Ohio","lat":41.2448,"lon":-81.5486,"sensitivity":0.96,"canopy":0.8,"official":"https://www.clevelandmetroparks.com/parks/visit/activities/mountain-biking/trail-status","note":"Purpose-built trail with managed closures and relatively good drainage.","mtbProject":"https://www.mtbproject.com/search?q=East%20Rim%20Trail"},{"id":"hampton","name":"Hampton Hills","region":"Northeast Ohio","lat":41.1458,"lon":-81.605,"sensitivity":1.08,"canopy":0.86,"official":"https://www.camba.us/","note":"Wooded rolling terrain with locally wet lower sections.","mtbProject":"https://www.mtbproject.com/search?q=Hampton%20Hills"},{"id":"vultures","name":"Vulture's Knob","region":"Northeast Ohio","lat":40.9215,"lon":-81.9386,"sensitivity":0.96,"canopy":0.78,"official":"https://www.vulturesknobmtb.com/","note":"Privately managed trail system; check operator status before traveling.","mtbProject":"https://www.mtbproject.com/search?q=Vulture's%20Knob"},{"id":"reagan","name":"Reagan Park","region":"Northeast Ohio","lat":41.1446,"lon":-81.8451,"sensitivity":1.03,"canopy":0.78,"official":"https://www.camba.us/","note":"Compact trail system with variable drainage by loop.","mtbProject":"https://www.mtbproject.com/search?q=Reagan%20Park"},{"id":"west-branch","name":"West Branch State Park","region":"Northeast Ohio","lat":41.145,"lon":-81.105,"sensitivity":1.08,"canopy":0.86,"official":"https://www.camba.us/","note":"Wooded lakeside terrain can remain saturated after prolonged rainfall.","mtbProject":"https://www.mtbproject.com/search?q=West%20Branch%20State%20Park"},{"id":"quail-hollow","name":"Quail Hollow Park","region":"Northeast Ohio","lat":40.9896,"lon":-81.306,"sensitivity":1.1,"canopy":0.88,"official":"https://www.camba.us/","note":"Shaded natural trails may dry slowly in humid conditions.","mtbProject":"https://www.mtbproject.com/search?q=Quail%20Hollow%20Park"},{"id":"findley","name":"Findley State Park","region":"North-Central Ohio","lat":41.1286,"lon":-82.2181,"sensitivity":1.05,"canopy":0.84,"official":"https://ohiodnr.gov/go-and-do/plan-a-visit/find-a-property/findley-state-park","note":"Wooded state-park loops with mixed soil and drainage.","mtbProject":"https://www.mtbproject.com/search?q=Findley%20State%20Park"},{"id":"horns-hill","name":"Horns Hill Bike Park","region":"Central Ohio","lat":40.1008,"lon":-82.3921,"sensitivity":0.82,"canopy":0.7,"official":"https://www.hornshillbikepark.com/","note":"Gravity-oriented purpose-built trails; operator status should control.","mtbProject":"https://www.mtbproject.com/search?q=Horns%20Hill%20Bike%20Park"},{"id":"dillon","name":"Dillon State Park","region":"East-Central Ohio","lat":39.993,"lon":-82.0957,"sensitivity":1.07,"canopy":0.84,"official":"https://ohiodnr.gov/go-and-do/plan-a-visit/find-a-property/dillon-state-park","note":"Rolling wooded trail network with moisture-prone low areas.","mtbProject":"https://www.mtbproject.com/search?q=Dillon%20State%20Park"},{"id":"strouds","name":"Strouds Run State Park","region":"Southeast Ohio","lat":39.334,"lon":-82.017,"sensitivity":1.04,"canopy":0.87,"official":"https://www.athensbicycleclub.org/","note":"Ridge and hollow terrain creates substantial variation in drying.","mtbProject":"https://www.mtbproject.com/search?q=Strouds%20Run%20State%20Park"},{"id":"sells","name":"Sells Park / Athens Trail Network","region":"Southeast Ohio","lat":39.3297,"lon":-82.082,"sensitivity":0.98,"canopy":0.82,"official":"https://www.athensbicycleclub.org/","note":"Extensive connected network with varied construction and exposure.","mtbProject":"https://www.mtbproject.com/search?q=Sells%20Park%20/%20Athens%20Trail%20Network"},{"id":"lake-hope","name":"Lake Hope State Park","region":"Southeast Ohio","lat":39.331,"lon":-82.357,"sensitivity":1,"canopy":0.9,"official":"https://ohiodnr.gov/go-and-do/plan-a-visit/find-a-property/lake-hope-state-park","note":"Large forested network where conditions can vary greatly by ridge and hollow.","mtbProject":"https://www.mtbproject.com/search?q=Lake%20Hope%20State%20Park"},{"id":"scioto","name":"Scioto Trail State Park","region":"South-Central Ohio","lat":39.228,"lon":-82.951,"sensitivity":1,"canopy":0.88,"official":"https://ohiodnr.gov/go-and-do/plan-a-visit/find-a-property/scioto-trail-state-park","note":"Backcountry-style terrain with variable surfaces and limited condition reporting.","mtbProject":"https://www.mtbproject.com/search?q=Scioto%20Trail%20State%20Park"},{"id":"oak-openings","name":"Oak Openings Preserve","region":"Northwest Ohio","lat":41.554,"lon":-83.846,"sensitivity":0.92,"canopy":0.66,"official":"https://metroparkstoledo.com/","note":"Sandy soils and open exposure can allow relatively quick drying.","mtbProject":"https://www.mtbproject.com/search?q=Oak%20Openings%20Preserve"},{"id":"jermain","name":"Jermain Park MTB Trail","region":"Northwest Ohio","lat":41.678,"lon":-83.593,"sensitivity":1.02,"canopy":0.72,"official":"https://metroparkstoledo.com/","note":"Urban singletrack with mixed exposure and compact soils.","mtbProject":"https://www.mtbproject.com/search?q=Jermain%20Park%20MTB%20Trail"},{"id":"van-buren","name":"Van Buren State Park","region":"Northwest Ohio","lat":41.132,"lon":-83.65,"sensitivity":1.08,"canopy":0.82,"official":"https://ohiodnr.gov/go-and-do/plan-a-visit/find-a-property/van-buren-state-park","note":"Flat terrain can dry slowly after widespread rain.","mtbProject":"https://www.mtbproject.com/search?q=Van%20Buren%20State%20Park"},{"id":"mountwood","name":"Mountwood Park","region":"Mid-Ohio Valley","countryCode":"US","stateCode":"WV","listingType":"Trail system","recordStatus":"Active","lat":39.242685,"lon":-81.298476,"weatherLat":39.242685,"weatherLon":-81.298476,"lengthMiles":34.95,"sensitivity":1,"canopy":0.82,"official":"https://mountwoodpark.org/recreation/biking/","note":"Public mountain-bike access and mapped route geometry verified for the West Virginia expansion.","geometryVersion":2,"routeSource":{"name":"West Virginia Trail Inventory","url":"https://www.mapwv.gov/trails/","license":"WVDOT public trail inventory"},"dateVerified":"2026-07-28"},{"id":"wv-cacapon","name":"Cacapon Resort State Park","region":"Eastern Panhandle","countryCode":"US","stateCode":"WV","listingType":"Trail system","recordStatus":"Active","lat":39.506561,"lon":-78.316457,"weatherLat":39.506561,"weatherLon":-78.316457,"lengthMiles":34.71,"sensitivity":1,"canopy":0.82,"official":"https://wvstateparks.com/parks/cacapon-resort-state-park/activities/","note":"Public mountain-bike access and mapped route geometry verified for the West Virginia expansion.","geometryVersion":1,"routeSource":{"name":"OpenStreetMap","url":"https://www.openstreetmap.org/way/418860236","license":"OpenStreetMap contributors, ODbL 1.0"},"dateVerified":"2026-07-28"},{"id":"wv-canaan-valley","name":"Canaan Valley Resort State Park","region":"Potomac Highlands","countryCode":"US","stateCode":"WV","listingType":"Trail system","recordStatus":"Active","lat":39.019713,"lon":-79.468813,"weatherLat":39.019713,"weatherLon":-79.468813,"lengthMiles":6.48,"sensitivity":1,"canopy":0.82,"official":"https://wvstateparks.com/parks/canaan-valley-resort-state-park/activities/","note":"Public mountain-bike access and mapped route geometry verified for the West Virginia expansion.","geometryVersion":1,"routeSource":{"name":"West Virginia Trail Inventory","url":"https://www.mapwv.gov/trails/","license":"WVDOT public trail inventory"},"dateVerified":"2026-07-28"},{"id":"wv-blackwater-falls","name":"Blackwater Falls State Park","region":"Potomac Highlands","countryCode":"US","stateCode":"WV","listingType":"Trail system","recordStatus":"Active","lat":39.112858,"lon":-79.486935,"weatherLat":39.112858,"weatherLon":-79.486935,"lengthMiles":4.05,"sensitivity":1,"canopy":0.82,"official":"https://wvstateparks.com/parks/blackwater-falls-state-park/","note":"Public mountain-bike access and mapped route geometry verified for the West Virginia expansion.","geometryVersion":1,"routeSource":{"name":"West Virginia Trail Inventory","url":"https://www.mapwv.gov/trails/","license":"WVDOT public trail inventory"},"dateVerified":"2026-07-28"},{"id":"wv-north-bend","name":"North Bend State Park","region":"Mid-Ohio Valley","countryCode":"US","stateCode":"WV","listingType":"Trail system","recordStatus":"Active","lat":39.221514,"lon":-81.106258,"weatherLat":39.221514,"weatherLon":-81.106258,"lengthMiles":14.37,"sensitivity":1,"canopy":0.82,"official":"https://wvstateparks.com/parks/north-bend-state-park/activities/","note":"Public mountain-bike access and mapped route geometry verified for the West Virginia expansion.","geometryVersion":1,"routeSource":{"name":"West Virginia Trail Inventory","url":"https://www.mapwv.gov/trails/","license":"WVDOT public trail inventory"},"dateVerified":"2026-07-28"},{"id":"wv-pipestem","name":"Pipestem Resort State Park","region":"Southern West Virginia","countryCode":"US","stateCode":"WV","listingType":"Trail system","recordStatus":"Active","lat":37.529984,"lon":-80.995721,"weatherLat":37.529984,"weatherLon":-80.995721,"lengthMiles":11.58,"sensitivity":1,"canopy":0.82,"official":"https://wvstateparks.com/parks/pipestem-resort-state-park/","note":"Public mountain-bike access and mapped route geometry verified for the West Virginia expansion.","geometryVersion":1,"routeSource":{"name":"West Virginia Trail Inventory","url":"https://www.mapwv.gov/trails/","license":"WVDOT public trail inventory"},"dateVerified":"2026-07-28"},{"id":"wv-kanawha","name":"Kanawha State Forest","region":"Metro Valley","countryCode":"US","stateCode":"WV","listingType":"Trail system","recordStatus":"Active","lat":38.256915,"lon":-81.654331,"weatherLat":38.256915,"weatherLon":-81.654331,"lengthMiles":21.79,"sensitivity":1,"canopy":0.82,"official":"https://wvstateparks.com/parks/kanawha-state-forest/trails/","note":"Public mountain-bike access and mapped route geometry verified for the West Virginia expansion.","geometryVersion":1,"routeSource":{"name":"West Virginia Trail Inventory","url":"https://www.mapwv.gov/trails/","license":"WVDOT public trail inventory"},"dateVerified":"2026-07-28"},{"id":"wv-coopers-rock","name":"Coopers Rock State Forest","region":"Mountaineer Country","countryCode":"US","stateCode":"WV","listingType":"Trail system","recordStatus":"Active","lat":39.653699,"lon":-79.788036,"weatherLat":39.653699,"weatherLon":-79.788036,"lengthMiles":34.19,"sensitivity":1,"canopy":0.82,"official":"https://wvstateparks.com/parks/coopers-rock-state-forest/activities-at-coopers-rock-state-forest/","note":"Public mountain-bike access and mapped route geometry verified for the West Virginia expansion.","geometryVersion":1,"routeSource":{"name":"West Virginia Trail Inventory","url":"https://www.mapwv.gov/trails/","license":"WVDOT public trail inventory"},"dateVerified":"2026-07-28"},{"id":"wv-beech-fork","name":"Beech Fork State Park","region":"Metro Valley","countryCode":"US","stateCode":"WV","listingType":"Trail system","recordStatus":"Active","lat":38.303342,"lon":-82.358922,"weatherLat":38.303342,"weatherLon":-82.358922,"lengthMiles":11.3,"sensitivity":1,"canopy":0.82,"official":"https://wvstateparks.com/parks/beech-fork-state-park/activities/","note":"Public mountain-bike access and mapped route geometry verified for the West Virginia expansion.","geometryVersion":1,"routeSource":{"name":"West Virginia Trail Inventory","url":"https://www.mapwv.gov/trails/","license":"WVDOT public trail inventory"},"dateVerified":"2026-07-28"},{"id":"wv-watoga","name":"Watoga State Park","region":"Pocahontas County","countryCode":"US","stateCode":"WV","listingType":"Trail system","recordStatus":"Active","lat":38.102307,"lon":-80.150341,"weatherLat":38.102307,"weatherLon":-80.150341,"lengthMiles":8.98,"sensitivity":1,"canopy":0.82,"official":"https://wvstateparks.com/parks/watoga-state-park/trails/","note":"Public mountain-bike access and mapped route geometry verified for the West Virginia expansion.","geometryVersion":1,"routeSource":{"name":"West Virginia Trail Inventory","url":"https://www.mapwv.gov/trails/","license":"WVDOT public trail inventory"},"dateVerified":"2026-07-28"},{"id":"wv-babcock","name":"Babcock State Park","region":"New River Gorge","countryCode":"US","stateCode":"WV","listingType":"Trail system","recordStatus":"Active","lat":37.992354,"lon":-80.95433,"weatherLat":37.992354,"weatherLon":-80.95433,"lengthMiles":10.18,"sensitivity":1,"canopy":0.82,"official":"https://wvstateparks.com/parks/babcock-state-park/activities/","note":"Public mountain-bike access and mapped route geometry verified for the West Virginia expansion.","geometryVersion":1,"routeSource":{"name":"West Virginia Trail Inventory","url":"https://www.mapwv.gov/trails/","license":"WVDOT public trail inventory"},"dateVerified":"2026-07-28"},{"id":"wv-valley-falls","name":"Valley Falls State Park","region":"North-Central West Virginia","countryCode":"US","stateCode":"WV","listingType":"Trail system","recordStatus":"Active","lat":39.393667,"lon":-80.079789,"weatherLat":39.393667,"weatherLon":-80.079789,"lengthMiles":9.15,"sensitivity":1,"canopy":0.82,"official":"https://wvstateparks.com/parks/valley-falls-state-park/activities/","note":"Public mountain-bike access and mapped route geometry verified for the West Virginia expansion.","geometryVersion":1,"routeSource":{"name":"West Virginia Trail Inventory","url":"https://www.mapwv.gov/trails/","license":"WVDOT public trail inventory"},"dateVerified":"2026-07-28"},{"id":"wv-snowshoe","name":"Snowshoe Bike Park","region":"Potomac Highlands","countryCode":"US","stateCode":"WV","listingType":"Bike park","recordStatus":"Active","lat":38.422782,"lon":-79.990415,"weatherLat":38.422782,"weatherLon":-79.990415,"lengthMiles":52.12,"sensitivity":1,"canopy":0.82,"official":"https://www.snowshoemtn.com/things-to-do/activities/snowshoe-bike-park","note":"Public mountain-bike access and mapped route geometry verified for the West Virginia expansion.","geometryVersion":1,"routeSource":{"name":"OpenStreetMap","url":"https://www.openstreetmap.org/","license":"OpenStreetMap contributors, ODbL 1.0"},"dateVerified":"2026-07-28"},{"id":"in-brown-county","name":"Brown County State Park","region":"South-Central Indiana","countryCode":"US","stateCode":"IN","listingType":"Trail system","recordStatus":"Active","lat":39.172975,"lon":-86.233634,"weatherLat":39.172975,"weatherLon":-86.233634,"sensitivity":1,"canopy":0.82,"official":"https://www.in.gov/dnr/state-parks/parks-lakes/brown-county-state-park/","organization":"Brown County State Park","note":"Public mountain-bike access and mapped trail location verified through the Indiana DNR Trails Inventory.","geometryVersion":1,"routeSource":{"name":"Indiana DNR Trails Inventory","url":"https://www.in.gov/dnr/state-parks/recreation/trails/indiana-trail-finder/","license":"Indiana Department of Natural Resources public trails inventory"},"dateVerified":"2026-07-28"},{"id":"in-fort-harrison","name":"Fort Harrison State Park","region":"Indianapolis Area","countryCode":"US","stateCode":"IN","listingType":"Trail system","recordStatus":"Active","lat":39.865069,"lon":-86.026042,"weatherLat":39.865069,"weatherLon":-86.026042,"sensitivity":1,"canopy":0.82,"official":"https://www.in.gov/dnr/state-parks/parks-lakes/fort-harrison-state-park/","organization":"Fort Harrison State Park","note":"Public mountain-bike access and mapped trail location verified through the Indiana DNR Trails Inventory.","geometryVersion":1,"routeSource":{"name":"Indiana DNR Trails Inventory","url":"https://www.in.gov/dnr/state-parks/recreation/trails/indiana-trail-finder/","license":"Indiana Department of Natural Resources public trails inventory"},"dateVerified":"2026-07-28"},{"id":"in-harmonie","name":"Harmonie State Park","region":"Southwest Indiana","countryCode":"US","stateCode":"IN","listingType":"Trail system","recordStatus":"Active","lat":38.04831,"lon":-87.962337,"weatherLat":38.04831,"weatherLon":-87.962337,"sensitivity":1,"canopy":0.82,"official":"https://www.in.gov/dnr/state-parks/parks-lakes/harmonie-state-park/","organization":"Harmonie State Park","note":"Public mountain-bike access and mapped trail location verified through the Indiana DNR Trails Inventory.","geometryVersion":1,"routeSource":{"name":"Indiana DNR Trails Inventory","url":"https://www.in.gov/dnr/state-parks/recreation/trails/indiana-trail-finder/","license":"Indiana Department of Natural Resources public trails inventory"},"dateVerified":"2026-07-28"},{"id":"in-obannon-woods","name":"O'Bannon Woods State Park","region":"Southern Indiana","countryCode":"US","stateCode":"IN","listingType":"Trail system","recordStatus":"Active","lat":38.185634,"lon":-86.275146,"weatherLat":38.185634,"weatherLon":-86.275146,"sensitivity":1,"canopy":0.82,"official":"https://www.in.gov/dnr/state-parks/parks-lakes/obannon-woods-state-park/","organization":"O'Bannon Woods State Park / Harrison-Crawford State Forest","note":"Public mountain-bike access and mapped trail location verified through the Indiana DNR Trails Inventory.","geometryVersion":1,"routeSource":{"name":"Indiana DNR Trails Inventory","url":"https://www.in.gov/dnr/state-parks/recreation/trails/indiana-trail-finder/","license":"Indiana Department of Natural Resources public trails inventory"},"dateVerified":"2026-07-28"},{"id":"in-potato-creek","name":"Potato Creek State Park","region":"North-Central Indiana","countryCode":"US","stateCode":"IN","listingType":"Trail system","recordStatus":"Active","lat":41.559337,"lon":-86.357082,"weatherLat":41.559337,"weatherLon":-86.357082,"sensitivity":1,"canopy":0.82,"official":"https://www.in.gov/dnr/state-parks/parks-lakes/potato-creek-state-park/","organization":"Potato Creek State Park","note":"Public mountain-bike access and mapped trail location verified through the Indiana DNR Trails Inventory.","geometryVersion":1,"routeSource":{"name":"Indiana DNR Trails Inventory","url":"https://www.in.gov/dnr/state-parks/recreation/trails/indiana-trail-finder/","license":"Indiana Department of Natural Resources public trails inventory"},"dateVerified":"2026-07-28"},{"id":"in-spring-mill","name":"Spring Mill State Park","region":"South-Central Indiana","countryCode":"US","stateCode":"IN","listingType":"Trail system","recordStatus":"Active","lat":38.73495,"lon":-86.407725,"weatherLat":38.73495,"weatherLon":-86.407725,"sensitivity":1,"canopy":0.82,"official":"https://www.in.gov/dnr/state-parks/parks-lakes/spring-mill-state-park/","organization":"Spring Mill State Park","note":"Public mountain-bike access and mapped trail location verified through the Indiana DNR Trails Inventory.","geometryVersion":1,"routeSource":{"name":"Indiana DNR Trails Inventory","url":"https://www.in.gov/dnr/state-parks/recreation/trails/indiana-trail-finder/","license":"Indiana Department of Natural Resources public trails inventory"},"dateVerified":"2026-07-28"},{"id":"in-versailles","name":"Versailles State Park","region":"Southeast Indiana","countryCode":"US","stateCode":"IN","listingType":"Trail system","recordStatus":"Active","lat":39.090913,"lon":-85.242057,"weatherLat":39.090913,"weatherLon":-85.242057,"sensitivity":1,"canopy":0.82,"official":"https://www.in.gov/dnr/state-parks/parks-lakes/versailles-state-park/","organization":"Versailles State Park","note":"Public mountain-bike access and mapped trail location verified through the Indiana DNR Trails Inventory.","geometryVersion":1,"routeSource":{"name":"Indiana DNR Trails Inventory","url":"https://www.in.gov/dnr/state-parks/recreation/trails/indiana-trail-finder/","license":"Indiana Department of Natural Resources public trails inventory"},"dateVerified":"2026-07-28"},{"id":"in-salamonie","name":"Salamonie Lake","region":"Northeast Indiana","countryCode":"US","stateCode":"IN","listingType":"Trail system","recordStatus":"Active","lat":40.763172,"lon":-85.609551,"weatherLat":40.763172,"weatherLon":-85.609551,"sensitivity":1,"canopy":0.82,"official":"https://www.in.gov/dnr/state-parks/parks-lakes/salamonie-lake/","organization":"Salamonie Reservoir","note":"Public mountain-bike access and mapped trail location verified through the Indiana DNR Trails Inventory.","geometryVersion":1,"routeSource":{"name":"Indiana DNR Trails Inventory","url":"https://www.in.gov/dnr/state-parks/recreation/trails/indiana-trail-finder/","license":"Indiana Department of Natural Resources public trails inventory"},"dateVerified":"2026-07-28"},{"id":"in-interlake","name":"Interlake State Recreation Area","region":"Southwest Indiana","countryCode":"US","stateCode":"IN","listingType":"Trail system","recordStatus":"Active","lat":38.22166,"lon":-87.225627,"weatherLat":38.22166,"weatherLon":-87.225627,"sensitivity":1,"canopy":0.82,"official":"https://www.in.gov/dnr/state-parks/parks-lakes/interlake-state-recreation-area/","organization":"Interlake Off-road State Recreation Area","note":"Public mountain-bike access and mapped trail location verified through the Indiana DNR Trails Inventory.","geometryVersion":1,"routeSource":{"name":"Indiana DNR Trails Inventory","url":"https://www.in.gov/dnr/state-parks/recreation/trails/indiana-trail-finder/","license":"Indiana Department of Natural Resources public trails inventory"},"dateVerified":"2026-07-28"},{"id":"in-clark-deam-lake","name":"Clark State Forest / Deam Lake","region":"Southern Indiana","countryCode":"US","stateCode":"IN","listingType":"Trail system","recordStatus":"Active","lat":38.472052,"lon":-85.860304,"weatherLat":38.472052,"weatherLon":-85.860304,"sensitivity":1,"canopy":0.82,"official":"https://www.in.gov/dnr/forestry/properties/clark-state-forest/","organization":"Deam Lake State Recreation Area","note":"Public mountain-bike access and mapped trail location verified through the Indiana DNR Trails Inventory.","geometryVersion":1,"routeSource":{"name":"Indiana DNR Trails Inventory","url":"https://www.in.gov/dnr/state-parks/recreation/trails/indiana-trail-finder/","license":"Indiana Department of Natural Resources public trails inventory"},"dateVerified":"2026-07-28"},{"id":"in-ferdinand","name":"Ferdinand State Forest","region":"Southwest Indiana","countryCode":"US","stateCode":"IN","listingType":"Trail system","recordStatus":"Active","lat":38.267574,"lon":-86.775229,"weatherLat":38.267574,"weatherLon":-86.775229,"sensitivity":1,"canopy":0.82,"official":"https://www.in.gov/dnr/forestry/properties/ferdinand-state-forest/","organization":"Ferdinand/Pike State Forest","note":"Public mountain-bike access and mapped trail location verified through the Indiana DNR Trails Inventory.","geometryVersion":1,"routeSource":{"name":"Indiana DNR Trails Inventory","url":"https://www.in.gov/dnr/state-parks/recreation/trails/indiana-trail-finder/","license":"Indiana Department of Natural Resources public trails inventory"},"dateVerified":"2026-07-28"},{"id":"in-jackson-washington","name":"Jackson-Washington State Forest","region":"South-Central Indiana","countryCode":"US","stateCode":"IN","listingType":"Trail system","recordStatus":"Active","lat":38.837981,"lon":-86.055664,"weatherLat":38.837981,"weatherLon":-86.055664,"sensitivity":1,"canopy":0.82,"official":"https://www.in.gov/dnr/forestry/properties/jackson-washington-state-forest/","organization":"Jackson-Washington State Forest","note":"Public mountain-bike access and mapped trail location verified through the Indiana DNR Trails Inventory.","geometryVersion":1,"routeSource":{"name":"Indiana DNR Trails Inventory","url":"https://www.in.gov/dnr/state-parks/recreation/trails/indiana-trail-finder/","license":"Indiana Department of Natural Resources public trails inventory"},"dateVerified":"2026-07-28"},{"id":"in-martin","name":"Martin State Forest","region":"South-Central Indiana","countryCode":"US","stateCode":"IN","listingType":"Trail system","recordStatus":"Active","lat":38.704538,"lon":-86.741544,"weatherLat":38.704538,"weatherLon":-86.741544,"sensitivity":1,"canopy":0.82,"official":"https://www.in.gov/dnr/forestry/properties/martin-state-forest/","organization":"Martin State Forest","note":"Public mountain-bike access and mapped trail location verified through the Indiana DNR Trails Inventory.","geometryVersion":1,"routeSource":{"name":"Indiana DNR Trails Inventory","url":"https://www.in.gov/dnr/state-parks/recreation/trails/indiana-trail-finder/","license":"Indiana Department of Natural Resources public trails inventory"},"dateVerified":"2026-07-28"},{"id":"in-owen-putnam","name":"Owen-Putnam State Forest","region":"West-Central Indiana","countryCode":"US","stateCode":"IN","listingType":"Trail system","recordStatus":"Active","lat":39.39439,"lon":-86.861467,"weatherLat":39.39439,"weatherLon":-86.861467,"sensitivity":1,"canopy":0.82,"official":"https://www.in.gov/dnr/forestry/properties/owen-putnam-state-forest/","organization":"Owen-Putnam State Forest","note":"Public mountain-bike access and mapped trail location verified through the Indiana DNR Trails Inventory.","geometryVersion":1,"routeSource":{"name":"Indiana DNR Trails Inventory","url":"https://www.in.gov/dnr/state-parks/recreation/trails/indiana-trail-finder/","license":"Indiana Department of Natural Resources public trails inventory"},"dateVerified":"2026-07-28"},{"id":"in-starve-hollow","name":"Starve Hollow State Recreation Area","region":"South-Central Indiana","countryCode":"US","stateCode":"IN","listingType":"Trail system","recordStatus":"Active","lat":38.812926,"lon":-86.073391,"weatherLat":38.812926,"weatherLon":-86.073391,"sensitivity":1,"canopy":0.82,"official":"https://www.in.gov/dnr/forestry/properties/starve-hollow-state-recreation-area/","organization":"Starve Hollow State Recreation Area","note":"Public mountain-bike access and mapped trail location verified through the Indiana DNR Trails Inventory.","geometryVersion":1,"routeSource":{"name":"Indiana DNR Trails Inventory","url":"https://www.in.gov/dnr/state-parks/recreation/trails/indiana-trail-finder/","license":"Indiana Department of Natural Resources public trails inventory"},"dateVerified":"2026-07-28"},{"id":"in-yellowwood","name":"Yellowwood State Forest","region":"South-Central Indiana","countryCode":"US","stateCode":"IN","listingType":"Trail system","recordStatus":"Active","lat":39.12662,"lon":-86.299761,"weatherLat":39.12662,"weatherLon":-86.299761,"sensitivity":1,"canopy":0.82,"official":"https://www.in.gov/dnr/forestry/properties/yellowwood-state-forest/","organization":"City of Indianapolis / Brown County State Park","note":"Public mountain-bike access and mapped trail location verified through the Indiana DNR Trails Inventory.","geometryVersion":1,"routeSource":{"name":"Indiana DNR Trails Inventory","url":"https://www.in.gov/dnr/state-parks/recreation/trails/indiana-trail-finder/","license":"Indiana Department of Natural Resources public trails inventory"},"dateVerified":"2026-07-28"},{"id":"in-griffin","name":"Griffin Bike Park","region":"West-Central Indiana","countryCode":"US","stateCode":"IN","listingType":"Bike park","recordStatus":"Active","lat":39.337816,"lon":-87.360303,"weatherLat":39.337816,"weatherLon":-87.360303,"sensitivity":1,"canopy":0.82,"official":"https://www.vigocounty.in.gov/department/index.php?structureid=32","organization":"Vigo County Park and Recreation Department / Griffin Bike Park","note":"Public mountain-bike access and mapped trail location verified through the Indiana DNR Trails Inventory.","geometryVersion":1,"routeSource":{"name":"Indiana DNR Trails Inventory","url":"https://www.in.gov/dnr/state-parks/recreation/trails/indiana-trail-finder/","license":"Indiana Department of Natural Resources public trails inventory"},"dateVerified":"2026-07-28"},{"id":"in-town-run","name":"Town Run Trail Park","region":"Indianapolis Area","countryCode":"US","stateCode":"IN","listingType":"Trail system","recordStatus":"Active","lat":39.918312,"lon":-86.084273,"weatherLat":39.918312,"weatherLon":-86.084273,"sensitivity":1,"canopy":0.82,"official":"https://www.indy.gov/activity/find-a-park","organization":"Indy Parks Greenways","note":"Public mountain-bike access and mapped trail location verified through the Indiana DNR Trails Inventory.","geometryVersion":1,"routeSource":{"name":"Indiana DNR Trails Inventory","url":"https://www.in.gov/dnr/state-parks/recreation/trails/indiana-trail-finder/","license":"Indiana Department of Natural Resources public trails inventory"},"dateVerified":"2026-07-28"},{"id":"in-southwestway","name":"Southwestway Park","region":"Indianapolis Area","countryCode":"US","stateCode":"IN","listingType":"Trail system","recordStatus":"Active","lat":39.654009,"lon":-86.240469,"weatherLat":39.654009,"weatherLon":-86.240469,"sensitivity":1,"canopy":0.82,"official":"https://www.indy.gov/activity/find-a-park","organization":"Indy Parks Department","note":"Public mountain-bike access and mapped trail location verified through the Indiana DNR Trails Inventory.","geometryVersion":1,"routeSource":{"name":"Indiana DNR Trails Inventory","url":"https://www.in.gov/dnr/state-parks/recreation/trails/indiana-trail-finder/","license":"Indiana Department of Natural Resources public trails inventory"},"dateVerified":"2026-07-28"},{"id":"in-rangeline","name":"Rangeline Nature Preserve","region":"East-Central Indiana","countryCode":"US","stateCode":"IN","listingType":"Trail system","recordStatus":"Active","lat":40.099791,"lon":-85.637916,"weatherLat":40.099791,"weatherLon":-85.637916,"sensitivity":1,"canopy":0.82,"official":"https://www.cityofanderson.com/Facilities/Facility/Details/Rangeline-Nature-Preserve-12","organization":"Anderson Parks and Recreation Department","note":"Public mountain-bike access and mapped trail location verified through the Indiana DNR Trails Inventory.","geometryVersion":1,"routeSource":{"name":"Indiana DNR Trails Inventory","url":"https://www.in.gov/dnr/state-parks/recreation/trails/indiana-trail-finder/","license":"Indiana Department of Natural Resources public trails inventory"},"dateVerified":"2026-07-28"},{"id":"in-winona-lake","name":"Winona Lake Trail System","region":"North-Central Indiana","countryCode":"US","stateCode":"IN","listingType":"Trail system","recordStatus":"Active","lat":41.215231,"lon":-85.813957,"weatherLat":41.215231,"weatherLon":-85.813957,"sensitivity":1,"canopy":0.82,"official":"https://winonalaketrails.com/","organization":"City of Indianapolis","note":"Public mountain-bike access and mapped trail location verified through the Indiana DNR Trails Inventory.","geometryVersion":1,"routeSource":{"name":"Indiana DNR Trails Inventory","url":"https://www.in.gov/dnr/state-parks/recreation/trails/indiana-trail-finder/","license":"Indiana Department of Natural Resources public trails inventory"},"dateVerified":"2026-07-28"},{"id":"in-imagination-glen","name":"Imagination Glen — Outback Trail","region":"Northwest Indiana","countryCode":"US","stateCode":"IN","listingType":"Trail system","recordStatus":"Active","lat":41.591113,"lon":-87.137999,"weatherLat":41.591113,"weatherLon":-87.137999,"sensitivity":1,"canopy":0.82,"official":"https://www.portagein.gov/Facilities/Facility/Details/Imagination-Glen-Park-7","organization":"Portage Park and Recreation Department","note":"Public mountain-bike access and mapped trail location verified through the Indiana DNR Trails Inventory.","geometryVersion":1,"routeSource":{"name":"Indiana DNR Trails Inventory","url":"https://www.in.gov/dnr/state-parks/recreation/trails/indiana-trail-finder/","license":"Indiana Department of Natural Resources public trails inventory"},"dateVerified":"2026-07-28"},{"id":"in-rum-village","name":"Rum Village Mountain Bike Trails","region":"North-Central Indiana","countryCode":"US","stateCode":"IN","listingType":"Trail system","recordStatus":"Active","lat":41.645127,"lon":-86.275554,"weatherLat":41.645127,"weatherLon":-86.275554,"sensitivity":1,"canopy":0.82,"official":"https://sbvpa.org/parks/rum-village-park/","organization":"South Bend Venues Parks & Arts","note":"Public mountain-bike access and mapped trail location verified through the Indiana DNR Trails Inventory.","geometryVersion":1,"routeSource":{"name":"Indiana DNR Trails Inventory","url":"https://www.in.gov/dnr/state-parks/recreation/trails/indiana-trail-finder/","license":"Indiana Department of Natural Resources public trails inventory"},"dateVerified":"2026-07-28"},{"id":"in-franke-park","name":"Franke Park Trails","region":"Northeast Indiana","countryCode":"US","stateCode":"IN","listingType":"Trail system","recordStatus":"Active","lat":41.109589,"lon":-85.160635,"weatherLat":41.109589,"weatherLon":-85.160635,"sensitivity":1,"canopy":0.82,"official":"https://www.fortwayneparks.org/parks/park-page-links/36-parks/park-page-links/118-franke-park.html","organization":"Fort Wayne Parks and Recreation Department","note":"Public mountain-bike access and mapped trail location verified through the Indiana DNR Trails Inventory.","geometryVersion":1,"routeSource":{"name":"Indiana DNR Trails Inventory","url":"https://www.in.gov/dnr/state-parks/recreation/trails/indiana-trail-finder/","license":"Indiana Department of Natural Resources public trails inventory"},"dateVerified":"2026-07-28"},{"id":"in-wapahani","name":"Wapahani Mountain Bike Park","region":"Bloomington Area","countryCode":"US","stateCode":"IN","listingType":"Trail system","recordStatus":"Active","lat":39.141888,"lon":-86.569467,"weatherLat":39.141888,"weatherLon":-86.569467,"sensitivity":1,"canopy":0.82,"official":"https://bloomington.in.gov/parks/parks/wapahani","organization":"Bloomington Park and Recreation Department","note":"Public mountain-bike access and mapped trail location verified through the Indiana DNR Trails Inventory.","geometryVersion":1,"routeSource":{"name":"Indiana DNR Trails Inventory","url":"https://www.in.gov/dnr/state-parks/recreation/trails/indiana-trail-finder/","license":"Indiana Department of Natural Resources public trails inventory"},"dateVerified":"2026-07-28"},{"id":"pa-big-elk-creek","name":"Big Elk Creek State Park","region":"Southeast Pennsylvania","countryCode":"US","stateCode":"PA","listingType":"Trail system","recordStatus":"Active","lat":39.736141,"lon":-75.861347,"weatherLat":39.736141,"weatherLon":-75.861347,"sensitivity":1,"canopy":0.82,"official":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","organization":"Pennsylvania Department of Conservation and Natural Resources","note":"Promoted mountain-bike access and mapped trail location verified through Pennsylvania DCNR.","geometryVersion":1,"routeSource":{"name":"Pennsylvania DCNR State Park Trails","url":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","license":"Commonwealth of Pennsylvania public trail inventory"},"dateVerified":"2026-07-29"},{"id":"pa-blue-knob","name":"Blue Knob State Park","region":"South-Central Pennsylvania","countryCode":"US","stateCode":"PA","listingType":"Trail system","recordStatus":"Active","lat":40.288334,"lon":-78.589074,"weatherLat":40.288334,"weatherLon":-78.589074,"sensitivity":1,"canopy":0.82,"official":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","organization":"Pennsylvania Department of Conservation and Natural Resources","note":"Promoted mountain-bike access and mapped trail location verified through Pennsylvania DCNR.","geometryVersion":1,"routeSource":{"name":"Pennsylvania DCNR State Park Trails","url":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","license":"Commonwealth of Pennsylvania public trail inventory"},"dateVerified":"2026-07-29"},{"id":"pa-codorus","name":"Codorus State Park","region":"Southeast Pennsylvania","countryCode":"US","stateCode":"PA","listingType":"Trail system","recordStatus":"Active","lat":39.786049,"lon":-76.927814,"weatherLat":39.786049,"weatherLon":-76.927814,"sensitivity":1,"canopy":0.82,"official":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","organization":"Pennsylvania Department of Conservation and Natural Resources","note":"Promoted mountain-bike access and mapped trail location verified through Pennsylvania DCNR.","geometryVersion":1,"routeSource":{"name":"Pennsylvania DCNR State Park Trails","url":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","license":"Commonwealth of Pennsylvania public trail inventory"},"dateVerified":"2026-07-29"},{"id":"pa-delaware-canal","name":"Delaware Canal State Park","region":"Eastern Pennsylvania","countryCode":"US","stateCode":"PA","listingType":"Trail system","recordStatus":"Active","lat":40.407405,"lon":-74.999956,"weatherLat":40.407405,"weatherLon":-74.999956,"sensitivity":1,"canopy":0.82,"official":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","organization":"Pennsylvania Department of Conservation and Natural Resources","note":"Promoted mountain-bike access and mapped trail location verified through Pennsylvania DCNR.","geometryVersion":1,"routeSource":{"name":"Pennsylvania DCNR State Park Trails","url":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","license":"Commonwealth of Pennsylvania public trail inventory"},"dateVerified":"2026-07-29"},{"id":"pa-evansburg","name":"Evansburg State Park","region":"Southeast Pennsylvania","countryCode":"US","stateCode":"PA","listingType":"Trail system","recordStatus":"Active","lat":40.164928,"lon":-75.430109,"weatherLat":40.164928,"weatherLon":-75.430109,"sensitivity":1,"canopy":0.82,"official":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","organization":"Pennsylvania Department of Conservation and Natural Resources","note":"Promoted mountain-bike access and mapped trail location verified through Pennsylvania DCNR.","geometryVersion":1,"routeSource":{"name":"Pennsylvania DCNR State Park Trails","url":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","license":"Commonwealth of Pennsylvania public trail inventory"},"dateVerified":"2026-07-29"},{"id":"pa-french-creek","name":"French Creek State Park","region":"Southeast Pennsylvania","countryCode":"US","stateCode":"PA","listingType":"Trail system","recordStatus":"Active","lat":40.217897,"lon":-75.774067,"weatherLat":40.217897,"weatherLon":-75.774067,"sensitivity":1,"canopy":0.82,"official":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","organization":"Pennsylvania Department of Conservation and Natural Resources","note":"Promoted mountain-bike access and mapped trail location verified through Pennsylvania DCNR.","geometryVersion":1,"routeSource":{"name":"Pennsylvania DCNR State Park Trails","url":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","license":"Commonwealth of Pennsylvania public trail inventory"},"dateVerified":"2026-07-29"},{"id":"pa-gouldsboro","name":"Gouldsboro State Park","region":"Northeast Pennsylvania","countryCode":"US","stateCode":"PA","listingType":"Trail system","recordStatus":"Active","lat":41.221578,"lon":-75.476949,"weatherLat":41.221578,"weatherLon":-75.476949,"sensitivity":1,"canopy":0.82,"official":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","organization":"Pennsylvania Department of Conservation and Natural Resources","note":"Promoted mountain-bike access and mapped trail location verified through Pennsylvania DCNR.","geometryVersion":1,"routeSource":{"name":"Pennsylvania DCNR State Park Trails","url":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","license":"Commonwealth of Pennsylvania public trail inventory"},"dateVerified":"2026-07-29"},{"id":"pa-lackawanna","name":"Lackawanna State Park","region":"Northeast Pennsylvania","countryCode":"US","stateCode":"PA","listingType":"Trail system","recordStatus":"Active","lat":41.567773,"lon":-75.702932,"weatherLat":41.567773,"weatherLon":-75.702932,"sensitivity":1,"canopy":0.82,"official":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","organization":"Pennsylvania Department of Conservation and Natural Resources","note":"Promoted mountain-bike access and mapped trail location verified through Pennsylvania DCNR.","geometryVersion":1,"routeSource":{"name":"Pennsylvania DCNR State Park Trails","url":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","license":"Commonwealth of Pennsylvania public trail inventory"},"dateVerified":"2026-07-29"},{"id":"pa-laurel-hill","name":"Laurel Hill State Park","region":"South-Central Pennsylvania","countryCode":"US","stateCode":"PA","listingType":"Trail system","recordStatus":"Active","lat":40.015222,"lon":-79.246041,"weatherLat":40.015222,"weatherLon":-79.246041,"sensitivity":1,"canopy":0.82,"official":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","organization":"Pennsylvania Department of Conservation and Natural Resources","note":"Promoted mountain-bike access and mapped trail location verified through Pennsylvania DCNR.","geometryVersion":1,"routeSource":{"name":"Pennsylvania DCNR State Park Trails","url":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","license":"Commonwealth of Pennsylvania public trail inventory"},"dateVerified":"2026-07-29"},{"id":"pa-lehigh-gorge","name":"Lehigh Gorge State Park","region":"Northeast Pennsylvania","countryCode":"US","stateCode":"PA","listingType":"Trail system","recordStatus":"Active","lat":41.04835,"lon":-75.768516,"weatherLat":41.04835,"weatherLon":-75.768516,"sensitivity":1,"canopy":0.82,"official":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","organization":"Pennsylvania Department of Conservation and Natural Resources","note":"Promoted mountain-bike access and mapped trail location verified through Pennsylvania DCNR.","geometryVersion":1,"routeSource":{"name":"Pennsylvania DCNR State Park Trails","url":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","license":"Commonwealth of Pennsylvania public trail inventory"},"dateVerified":"2026-07-29"},{"id":"pa-marsh-creek","name":"Marsh Creek State Park","region":"Southeast Pennsylvania","countryCode":"US","stateCode":"PA","listingType":"Trail system","recordStatus":"Active","lat":40.074005,"lon":-75.731037,"weatherLat":40.074005,"weatherLon":-75.731037,"sensitivity":1,"canopy":0.82,"official":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","organization":"Pennsylvania Department of Conservation and Natural Resources","note":"Promoted mountain-bike access and mapped trail location verified through Pennsylvania DCNR.","geometryVersion":1,"routeSource":{"name":"Pennsylvania DCNR State Park Trails","url":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","license":"Commonwealth of Pennsylvania public trail inventory"},"dateVerified":"2026-07-29"},{"id":"pa-nockamixon","name":"Nockamixon State Park","region":"Eastern Pennsylvania","countryCode":"US","stateCode":"PA","listingType":"Trail system","recordStatus":"Active","lat":40.489207,"lon":-75.188269,"weatherLat":40.489207,"weatherLon":-75.188269,"sensitivity":1,"canopy":0.82,"official":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","organization":"Pennsylvania Department of Conservation and Natural Resources","note":"Promoted mountain-bike access and mapped trail location verified through Pennsylvania DCNR.","geometryVersion":1,"routeSource":{"name":"Pennsylvania DCNR State Park Trails","url":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","license":"Commonwealth of Pennsylvania public trail inventory"},"dateVerified":"2026-07-29"},{"id":"pa-ohiopyle","name":"Ohiopyle State Park","region":"South-Central Pennsylvania","countryCode":"US","stateCode":"PA","listingType":"Trail system","recordStatus":"Active","lat":39.846908,"lon":-79.483916,"weatherLat":39.846908,"weatherLon":-79.483916,"sensitivity":1,"canopy":0.82,"official":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","organization":"Pennsylvania Department of Conservation and Natural Resources","note":"Promoted mountain-bike access and mapped trail location verified through Pennsylvania DCNR.","geometryVersion":1,"routeSource":{"name":"Pennsylvania DCNR State Park Trails","url":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","license":"Commonwealth of Pennsylvania public trail inventory"},"dateVerified":"2026-07-29"},{"id":"pa-oil-creek","name":"Oil Creek State Park","region":"North-Central Pennsylvania","countryCode":"US","stateCode":"PA","listingType":"Trail system","recordStatus":"Active","lat":41.564179,"lon":-79.657339,"weatherLat":41.564179,"weatherLon":-79.657339,"sensitivity":1,"canopy":0.82,"official":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","organization":"Pennsylvania Department of Conservation and Natural Resources","note":"Promoted mountain-bike access and mapped trail location verified through Pennsylvania DCNR.","geometryVersion":1,"routeSource":{"name":"Pennsylvania DCNR State Park Trails","url":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","license":"Commonwealth of Pennsylvania public trail inventory"},"dateVerified":"2026-07-29"},{"id":"pa-promised-land","name":"Promised Land State Park","region":"Northeast Pennsylvania","countryCode":"US","stateCode":"PA","listingType":"Trail system","recordStatus":"Active","lat":41.319995,"lon":-75.221476,"weatherLat":41.319995,"weatherLon":-75.221476,"sensitivity":1,"canopy":0.82,"official":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","organization":"Pennsylvania Department of Conservation and Natural Resources","note":"Promoted mountain-bike access and mapped trail location verified through Pennsylvania DCNR.","geometryVersion":1,"routeSource":{"name":"Pennsylvania DCNR State Park Trails","url":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","license":"Commonwealth of Pennsylvania public trail inventory"},"dateVerified":"2026-07-29"},{"id":"pa-prompton","name":"Prompton State Park","region":"Northeast Pennsylvania","countryCode":"US","stateCode":"PA","listingType":"Trail system","recordStatus":"Active","lat":41.612947,"lon":-75.335026,"weatherLat":41.612947,"weatherLon":-75.335026,"sensitivity":1,"canopy":0.82,"official":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","organization":"Pennsylvania Department of Conservation and Natural Resources","note":"Promoted mountain-bike access and mapped trail location verified through Pennsylvania DCNR.","geometryVersion":1,"routeSource":{"name":"Pennsylvania DCNR State Park Trails","url":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","license":"Commonwealth of Pennsylvania public trail inventory"},"dateVerified":"2026-07-29"},{"id":"pa-pymatuning","name":"Pymatuning State Park","region":"Northwest Pennsylvania","countryCode":"US","stateCode":"PA","listingType":"Trail system","recordStatus":"Active","lat":41.609896,"lon":-80.446113,"weatherLat":41.609896,"weatherLon":-80.446113,"sensitivity":1,"canopy":0.82,"official":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","organization":"Pennsylvania Department of Conservation and Natural Resources","note":"Promoted mountain-bike access and mapped trail location verified through Pennsylvania DCNR.","geometryVersion":1,"routeSource":{"name":"Pennsylvania DCNR State Park Trails","url":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","license":"Commonwealth of Pennsylvania public trail inventory"},"dateVerified":"2026-07-29"},{"id":"pa-ralph-stover","name":"Ralph Stover State Park","region":"Eastern Pennsylvania","countryCode":"US","stateCode":"PA","listingType":"Trail system","recordStatus":"Active","lat":40.435425,"lon":-75.098506,"weatherLat":40.435425,"weatherLon":-75.098506,"sensitivity":1,"canopy":0.82,"official":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","organization":"Pennsylvania Department of Conservation and Natural Resources","note":"Promoted mountain-bike access and mapped trail location verified through Pennsylvania DCNR.","geometryVersion":1,"routeSource":{"name":"Pennsylvania DCNR State Park Trails","url":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","license":"Commonwealth of Pennsylvania public trail inventory"},"dateVerified":"2026-07-29"},{"id":"pa-salt-springs","name":"Salt Springs State Park","region":"Northeast Pennsylvania","countryCode":"US","stateCode":"PA","listingType":"Trail system","recordStatus":"Active","lat":41.906724,"lon":-75.870365,"weatherLat":41.906724,"weatherLon":-75.870365,"sensitivity":1,"canopy":0.82,"official":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","organization":"Pennsylvania Department of Conservation and Natural Resources","note":"Promoted mountain-bike access and mapped trail location verified through Pennsylvania DCNR.","geometryVersion":1,"routeSource":{"name":"Pennsylvania DCNR State Park Trails","url":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","license":"Commonwealth of Pennsylvania public trail inventory"},"dateVerified":"2026-07-29"},{"id":"pa-shawnee","name":"Shawnee State Park","region":"South-Central Pennsylvania","countryCode":"US","stateCode":"PA","listingType":"Trail system","recordStatus":"Active","lat":40.046808,"lon":-78.615539,"weatherLat":40.046808,"weatherLon":-78.615539,"sensitivity":1,"canopy":0.82,"official":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","organization":"Pennsylvania Department of Conservation and Natural Resources","note":"Promoted mountain-bike access and mapped trail location verified through Pennsylvania DCNR.","geometryVersion":1,"routeSource":{"name":"Pennsylvania DCNR State Park Trails","url":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","license":"Commonwealth of Pennsylvania public trail inventory"},"dateVerified":"2026-07-29"},{"id":"pa-susquehannock","name":"Susquehannock State Park","region":"Southeast Pennsylvania","countryCode":"US","stateCode":"PA","listingType":"Trail system","recordStatus":"Active","lat":39.846577,"lon":-76.343361,"weatherLat":39.846577,"weatherLon":-76.343361,"sensitivity":1,"canopy":0.82,"official":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","organization":"Pennsylvania Department of Conservation and Natural Resources","note":"Promoted mountain-bike access and mapped trail location verified through Pennsylvania DCNR.","geometryVersion":1,"routeSource":{"name":"Pennsylvania DCNR State Park Trails","url":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","license":"Commonwealth of Pennsylvania public trail inventory"},"dateVerified":"2026-07-29"},{"id":"pa-swatara","name":"Swatara State Park","region":"Eastern Pennsylvania","countryCode":"US","stateCode":"PA","listingType":"Trail system","recordStatus":"Active","lat":40.491238,"lon":-76.540528,"weatherLat":40.491238,"weatherLon":-76.540528,"sensitivity":1,"canopy":0.82,"official":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","organization":"Pennsylvania Department of Conservation and Natural Resources","note":"Promoted mountain-bike access and mapped trail location verified through Pennsylvania DCNR.","geometryVersion":1,"routeSource":{"name":"Pennsylvania DCNR State Park Trails","url":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","license":"Commonwealth of Pennsylvania public trail inventory"},"dateVerified":"2026-07-29"},{"id":"pa-tobyhanna","name":"Tobyhanna State Park","region":"Northeast Pennsylvania","countryCode":"US","stateCode":"PA","listingType":"Trail system","recordStatus":"Active","lat":41.207698,"lon":-75.409995,"weatherLat":41.207698,"weatherLon":-75.409995,"sensitivity":1,"canopy":0.82,"official":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","organization":"Pennsylvania Department of Conservation and Natural Resources","note":"Promoted mountain-bike access and mapped trail location verified through Pennsylvania DCNR.","geometryVersion":1,"routeSource":{"name":"Pennsylvania DCNR State Park Trails","url":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","license":"Commonwealth of Pennsylvania public trail inventory"},"dateVerified":"2026-07-29"},{"id":"pa-white-clay-creek","name":"White Clay Creek Preserve","region":"Southeast Pennsylvania","countryCode":"US","stateCode":"PA","listingType":"Trail system","recordStatus":"Active","lat":39.748509,"lon":-75.774121,"weatherLat":39.748509,"weatherLon":-75.774121,"sensitivity":1,"canopy":0.82,"official":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","organization":"Pennsylvania Department of Conservation and Natural Resources","note":"Promoted mountain-bike access and mapped trail location verified through Pennsylvania DCNR.","geometryVersion":1,"routeSource":{"name":"Pennsylvania DCNR State Park Trails","url":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","license":"Commonwealth of Pennsylvania public trail inventory"},"dateVerified":"2026-07-29"},{"id":"pa-yellow-creek","name":"Yellow Creek State Park","region":"Central Pennsylvania","countryCode":"US","stateCode":"PA","listingType":"Trail system","recordStatus":"Active","lat":40.575524,"lon":-79.029965,"weatherLat":40.575524,"weatherLon":-79.029965,"sensitivity":1,"canopy":0.82,"official":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","organization":"Pennsylvania Department of Conservation and Natural Resources","note":"Promoted mountain-bike access and mapped trail location verified through Pennsylvania DCNR.","geometryVersion":1,"routeSource":{"name":"Pennsylvania DCNR State Park Trails","url":"https://www.pa.gov/agencies/dcnr/recreation/what-to-do/mountain-biking","license":"Commonwealth of Pennsylvania public trail inventory"},"dateVerified":"2026-07-29"},{"id":"mi-bald-mountain-recreation-area","name":"Bald Mountain Recreation Area","region":"East Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":42.772374,"lon":-83.208284,"weatherLat":42.772374,"weatherLon":-83.208284,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29"},{"id":"mi-bass-river-recreation-area","name":"Bass River Recreation Area","region":"West Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":43.016046,"lon":-86.036269,"weatherLat":43.016046,"weatherLon":-86.036269,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29"},{"id":"mi-black-mountain-pathway","name":"Black Mountain Pathway","region":"Northeast Lower Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":45.516677,"lon":-84.247697,"weatherLat":45.516677,"weatherLon":-84.247697,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29"},{"id":"mi-brighton-recreation-area","name":"Brighton Recreation Area","region":"Southeast Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":42.505352,"lon":-83.821278,"weatherLat":42.505352,"weatherLon":-83.821278,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29"},{"id":"mi-cheboygan-state-park","name":"Cheboygan State Park","region":"Northeast Lower Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":45.664089,"lon":-84.415088,"weatherLat":45.664089,"weatherLon":-84.415088,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29"},{"id":"mi-clear-lake-state-park","name":"Clear Lake State Park","region":"Northeast Lower Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":45.1285,"lon":-84.18188,"weatherLat":45.1285,"weatherLon":-84.18188,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29"},{"id":"mi-craig-lake-state-park","name":"Craig Lake State Park","region":"Western Upper Peninsula","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":46.612469,"lon":-88.185308,"weatherLat":46.612469,"weatherLon":-88.185308,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29"},{"id":"mi-fayette-historic-state-park","name":"Fayette Historic State Park","region":"Northwest Lower Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":45.71791,"lon":-86.663418,"weatherLat":45.71791,"weatherLon":-86.663418,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29"},{"id":"mi-fort-custer-recreation-area","name":"Fort Custer Recreation Area","region":"South-Central Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":42.318107,"lon":-85.33267,"weatherLat":42.318107,"weatherLon":-85.33267,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29"},{"id":"mi-hartwick-pines-state-park","name":"Hartwick Pines State Park","region":"Northeast Lower Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":44.749783,"lon":-84.679252,"weatherLat":44.749783,"weatherLon":-84.679252,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29"},{"id":"mi-highland-recreation-area","name":"Highland Recreation Area","region":"Southeast Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":42.628558,"lon":-83.579151,"weatherLat":42.628558,"weatherLon":-83.579151,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29"},{"id":"mi-hoeft-state-park-chippewa-hills","name":"Hoeft State Park / Chippewa Hills","region":"Northeast Lower Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":44.938436,"lon":-83.692781,"weatherLat":44.938436,"weatherLon":-83.692781,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29"},{"id":"mi-holly-recreation-area","name":"Holly Recreation Area","region":"East Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":42.827607,"lon":-83.582757,"weatherLat":42.827607,"weatherLon":-83.582757,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29"},{"id":"mi-ionia-state-recreation-area","name":"Ionia State Recreation Area","region":"Central Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":42.954863,"lon":-85.139489,"weatherLat":42.954863,"weatherLon":-85.139489,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29"},{"id":"mi-island-lake-recreation-area","name":"Island Lake Recreation Area","region":"Southeast Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":42.504208,"lon":-83.716703,"weatherLat":42.504208,"weatherLon":-83.716703,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29"},{"id":"mi-lakeport-state-park","name":"Lakeport State Park","region":"East Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":43.124505,"lon":-82.492937,"weatherLat":43.124505,"weatherLon":-82.492937,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29"},{"id":"mi-little-presque-isle-multi-use-pathway","name":"Little Presque Isle Multi Use Pathway","region":"Western Upper Peninsula","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":46.621613,"lon":-87.491599,"weatherLat":46.621613,"weatherLon":-87.491599,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29"},{"id":"mi-ludington-state-park","name":"Ludington State Park","region":"West Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":44.046511,"lon":-86.511324,"weatherLat":44.046511,"weatherLon":-86.511324,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29"},{"id":"mi-maybury-state-park","name":"Maybury State Park","region":"Southeast Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":42.427011,"lon":-83.521474,"weatherLat":42.427011,"weatherLon":-83.521474,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29"},{"id":"mi-menominee-river-state-recreation-area","name":"Menominee River State Recreation Area","region":"Western Upper Peninsula","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":45.7602,"lon":-87.951616,"weatherLat":45.7602,"weatherLon":-87.951616,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29"},{"id":"mi-mike-levine-lakelands-trail-state-park","name":"Mike Levine Lakelands Trail State Park","region":"South-Central Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":42.422696,"lon":-84.166469,"weatherLat":42.422696,"weatherLon":-84.166469,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29"},{"id":"mi-ortonville-recreation-area","name":"Ortonville Recreation Area","region":"East Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":42.872699,"lon":-83.432213,"weatherLat":42.872699,"weatherLon":-83.432213,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29"},{"id":"mi-petoskey-state-park","name":"Petoskey State Park","region":"Northeast Lower Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":45.393413,"lon":-84.912994,"weatherLat":45.393413,"weatherLon":-84.912994,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29"},{"id":"mi-pinckney-recreation-area","name":"Pinckney Recreation Area","region":"South-Central Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":42.414159,"lon":-84.00157,"weatherLat":42.414159,"weatherLon":-84.00157,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29"},{"id":"mi-pontiac-lake-recreation-area","name":"Pontiac Lake Recreation Area","region":"Southeast Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":42.685164,"lon":-83.465872,"weatherLat":42.685164,"weatherLon":-83.465872,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29"},{"id":"mi-pretty-lake-pathway","name":"Pretty Lake Pathway","region":"Eastern Upper Peninsula","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":46.599668,"lon":-85.670624,"weatherLat":46.599668,"weatherLon":-85.670624,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29"},{"id":"mi-proud-lake-recreation-area","name":"Proud Lake Recreation Area","region":"Southeast Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":42.568119,"lon":-83.563012,"weatherLat":42.568119,"weatherLon":-83.563012,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29"},{"id":"mi-rifle-river-state-recreation-area","name":"Rifle River State Recreation Area","region":"Northeast Lower Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":44.39222,"lon":-84.026624,"weatherLat":44.39222,"weatherLon":-84.026624,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29"},{"id":"mi-rockport-recreation-area","name":"Rockport Recreation Area","region":"Northeast Lower Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":45.205232,"lon":-83.394261,"weatherLat":45.205232,"weatherLon":-83.394261,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29"},{"id":"mi-seven-lakes-state-park","name":"Seven Lakes State Park","region":"East Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":42.81124,"lon":-83.672142,"weatherLat":42.81124,"weatherLon":-83.672142,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29"},{"id":"mi-sleepy-hollow-state-park","name":"Sleepy Hollow State Park","region":"Central Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":42.939252,"lon":-84.410457,"weatherLat":42.939252,"weatherLon":-84.410457,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29"},{"id":"mi-south-higgins-lake-state-park","name":"South Higgins Lake State Park","region":"Northeast Lower Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":44.419782,"lon":-84.668391,"weatherLat":44.419782,"weatherLon":-84.668391,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29"},{"id":"mi-sterling-state-park","name":"Sterling State Park","region":"Southeast Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":41.910537,"lon":-83.3554,"weatherLat":41.910537,"weatherLon":-83.3554,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29"},{"id":"mi-thompson-s-harbor-state-park","name":"Thompson's Harbor State Park","region":"Northeast Lower Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":45.347823,"lon":-83.567573,"weatherLat":45.347823,"weatherLon":-83.567573,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29"},{"id":"mi-van-riper-state-park","name":"Van Riper State Park","region":"Western Upper Peninsula","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":46.53055,"lon":-87.9935,"weatherLat":46.53055,"weatherLon":-87.9935,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29"},{"id":"mi-waterloo-recreation-area","name":"Waterloo Recreation Area","region":"South-Central Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":42.358059,"lon":-84.089813,"weatherLat":42.358059,"weatherLon":-84.089813,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29"},{"id":"mi-wilderness-state-park","name":"Wilderness State Park","region":"Northeast Lower Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":45.74473,"lon":-84.888054,"weatherLat":45.74473,"weatherLon":-84.888054,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29"},{"id":"mi-yankee-springs-recreation-area","name":"Yankee Springs Recreation Area","region":"South-Central Michigan","countryCode":"US","stateCode":"MI","listingType":"Trail system","recordStatus":"Active","lat":42.623125,"lon":-85.469336,"weatherLat":42.623125,"weatherLon":-85.469336,"sensitivity":1,"canopy":0.82,"official":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","organization":"Michigan Department of Natural Resources","note":"Mountain-bike access and mapped trail location verified through Michigan DNR Trails Open Data.","geometryVersion":1,"routeSource":{"name":"Michigan DNR Trails Open Data","url":"https://www.michigan.gov/dnr/things-to-do/hike-and-bike","license":"Michigan Department of Natural Resources public trail inventory"},"dateVerified":"2026-07-29"},{"id":"oh-forry-star-hill","name":"Forry Preserve / Star Hill","region":"Central Ohio","stateCode":"OH","lat":40.026615,"lon":-82.432424,"official":"https://explorelc.org/directory/forry-preserve","organization":"City of Heath / COMBO","trailforksUrl":"https://www.trailforks.com/region/the-trails-of-forry-preserve-star-hill/","routeSource":{"name":"Trailforks riding area","url":"https://www.trailforks.com/region/the-trails-of-forry-preserve-star-hill/","license":"Linked riding-area reference"},"note":"Public natural-surface mountain-bike network managed with local trail partners.","countryCode":"US","listingType":"Trail system","recordStatus":"Active","weatherLat":40.026615,"weatherLon":-82.432424,"sensitivity":1,"canopy":0.82,"geometryVersion":1,"dateVerified":"2026-07-30","soilProfile":{"dominantSoil":"Silt Loam","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":0.96,"textureFactor":0.92,"drainageFactor":1.03,"confidence":"High","sampleCoverage":"17/17","soilLat":40.026615,"soilLon":-82.432424,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-30T20:25:19.205Z","samplingMethod":"17 distributed center-area locations around verified riding-area center"}},{"id":"oh-camp-tuscazoar","name":"Camp Tuscazoar","region":"East-Central Ohio","stateCode":"OH","lat":40.566821,"lon":-81.397554,"official":"https://tuscazoar.org/tour/","organization":"Camp Tuscazoar Foundation","trailforksUrl":"https://www.trailforks.com/region/camp-tuscazoar/","routeSource":{"name":"Trailforks riding area","url":"https://www.trailforks.com/region/camp-tuscazoar/","license":"Linked riding-area reference"},"note":"Natural-surface trail network; the land manager asks riders not to use wet trails.","countryCode":"US","listingType":"Trail system","recordStatus":"Active","weatherLat":40.566821,"weatherLon":-81.397554,"sensitivity":1,"canopy":0.82,"geometryVersion":1,"dateVerified":"2026-07-30","soilProfile":{"dominantSoil":"Silt Loam","secondarySoil":"Clay Loam","naturalDrainage":"Well drained","soilDryingFactor":0.96,"textureFactor":0.91,"drainageFactor":1.06,"confidence":"High","sampleCoverage":"16/17","soilLat":40.566821,"soilLon":-81.397554,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-30T20:25:19.812Z","samplingMethod":"17 distributed center-area locations around verified riding-area center"}},{"id":"oh-troy-mtb","name":"Troy Mountain Bike Area","region":"Dayton Area","stateCode":"OH","lat":40.05806,"lon":-84.208175,"official":"https://www.mvmba.bike/Trails","organization":"City of Troy / MVMBA","trailforksUrl":"https://www.trailforks.com/region/troy-mountain-bike-area/","routeSource":{"name":"Trailforks riding area","url":"https://www.trailforks.com/region/troy-mountain-bike-area/","license":"Linked riding-area reference"},"note":"Purpose-built mountain-bike loops at Duke Park with weather-sensitive natural surfaces.","countryCode":"US","listingType":"Trail system","recordStatus":"Active","weatherLat":40.05806,"weatherLon":-84.208175,"sensitivity":1,"canopy":0.82,"geometryVersion":1,"dateVerified":"2026-07-30","soilProfile":{"dominantSoil":"Loam","secondarySoil":"Silt Loam","naturalDrainage":"Well drained","soilDryingFactor":1,"textureFactor":0.97,"drainageFactor":1.06,"confidence":"High","sampleCoverage":"16/17","soilLat":40.05806,"soilLon":-84.208175,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-30T20:25:20.319Z","samplingMethod":"17 distributed center-area locations around verified riding-area center"}},{"id":"oh-lake-milton","name":"Lake Milton State Park","region":"Northeast Ohio","stateCode":"OH","lat":41.0611,"lon":-80.9724,"official":"https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/parks/parkmaps/lakemiltonmountainbikemap.pdf","organization":"Ohio Department of Natural Resources","trailforksUrl":"https://www.trailforks.com/region/lake-milton-state-park-18876/","routeSource":{"name":"Trailforks riding area","url":"https://www.trailforks.com/region/lake-milton-state-park-18876/","license":"Linked riding-area reference"},"note":"Official natural-surface mountain-bike loop south of Lake Milton.","countryCode":"US","listingType":"Trail system","recordStatus":"Active","weatherLat":41.0611,"weatherLon":-80.9724,"sensitivity":1,"canopy":0.82,"geometryVersion":1,"dateVerified":"2026-07-30","soilProfile":{"dominantSoil":"Silt Loam","secondarySoil":"Clay Loam","naturalDrainage":"Poorly drained","soilDryingFactor":0.86,"textureFactor":0.88,"drainageFactor":0.82,"confidence":"High","sampleCoverage":"15/17","soilLat":41.0611,"soilLon":-80.9724,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-30T20:25:20.735Z","samplingMethod":"17 distributed center-area locations around verified riding-area center"}},{"id":"oh-tar-hollow","name":"Tar Hollow State Forest","region":"South-Central Ohio","stateCode":"OH","lat":39.357657,"lon":-82.750114,"official":"https://ohiodnr.gov/go-and-do/plan-a-visit/find-a-property/tar-hollow-state-forest","organization":"Ohio Department of Natural Resources","trailforksUrl":"https://www.trailforks.com/region/tar-hollow-state-forest/","routeSource":{"name":"Trailforks riding area","url":"https://www.trailforks.com/region/tar-hollow-state-forest/","license":"Linked riding-area reference"},"note":"Backcountry state-forest riding with variable drainage across ridges and hollows.","countryCode":"US","listingType":"Trail system","recordStatus":"Active","weatherLat":39.357657,"weatherLon":-82.750114,"sensitivity":1,"canopy":0.82,"geometryVersion":1,"dateVerified":"2026-07-30","soilProfile":{"dominantSoil":"Silt Loam","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":0.97,"textureFactor":0.91,"drainageFactor":1.08,"confidence":"Medium","sampleCoverage":"11/17","soilLat":39.357657,"soilLon":-82.750114,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-30T20:25:21.070Z","samplingMethod":"17 distributed center-area locations around verified riding-area center"}},{"id":"wv-big-bear","name":"Big Bear Lake Trail Center","region":"Mountaineer Country","stateCode":"WV","lat":39.6087,"lon":-79.6222,"official":"https://bikebigbearwv.com/","organization":"Big Bear Lake Trail Center","trailforksUrl":"https://www.trailforks.com/region/big-bear-lake-trail-center/","routeSource":{"name":"Trailforks riding area","url":"https://www.trailforks.com/region/big-bear-lake-trail-center/","license":"Linked riding-area reference"},"note":"Privately managed mountain-bike network; fees, hours, and seasonal rules may apply.","countryCode":"US","listingType":"Trail system","recordStatus":"Active","weatherLat":39.6087,"weatherLon":-79.6222,"sensitivity":1,"canopy":0.82,"geometryVersion":1,"dateVerified":"2026-07-30","soilProfile":{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":0.93,"textureFactor":0.9,"drainageFactor":0.98,"confidence":"Medium","sampleCoverage":"8/17","soilLat":39.6087,"soilLon":-79.6222,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-30T20:25:21.445Z","samplingMethod":"17 distributed center-area locations around verified riding-area center"}},{"id":"wv-arrowhead","name":"Arrowhead Trails — New River Gorge","region":"New River Gorge","stateCode":"WV","lat":38.006,"lon":-81.075,"official":"https://www.nps.gov/neri/planyourvisit/bicycling.htm","organization":"National Park Service","trailforksUrl":"https://www.trailforks.com/region/arrowhead-trails/","routeSource":{"name":"Trailforks riding area","url":"https://www.trailforks.com/region/arrowhead-trails/","license":"Linked riding-area reference"},"note":"Purpose-built National Park Service mountain-bike loops near Fayetteville.","countryCode":"US","listingType":"Trail system","recordStatus":"Active","weatherLat":38.006,"weatherLon":-81.075,"sensitivity":1,"canopy":0.82,"geometryVersion":1,"dateVerified":"2026-07-30","soilProfile":{"dominantSoil":"Silt Loam","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":0.97,"textureFactor":0.91,"drainageFactor":1.07,"confidence":"Medium","sampleCoverage":"9/17","soilLat":38.006,"soilLon":-81.075,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-30T20:25:21.803Z","samplingMethod":"17 distributed center-area locations around verified riding-area center"}},{"id":"wv-barboursville","name":"Barboursville Park","region":"Metro Valley","stateCode":"WV","lat":38.39195,"lon":-82.305855,"official":"https://barboursvillepark.org/amenities/","organization":"Village of Barboursville","trailforksUrl":"https://www.trailforks.com/region/barboursville-park/","routeSource":{"name":"Trailforks riding area","url":"https://www.trailforks.com/region/barboursville-park/","license":"Linked riding-area reference"},"note":"Large municipal hiking and mountain-biking trail network.","countryCode":"US","listingType":"Trail system","recordStatus":"Active","weatherLat":38.39195,"weatherLon":-82.305855,"sensitivity":1,"canopy":0.82,"geometryVersion":1,"dateVerified":"2026-07-30","soilProfile":{"dominantSoil":"Silt Loam","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":0.98,"textureFactor":0.95,"drainageFactor":1.03,"confidence":"Medium-high","sampleCoverage":"13/17","soilLat":38.39195,"soilLon":-82.305855,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-30T20:25:22.471Z","samplingMethod":"17 distributed center-area locations around verified riding-area center"}},{"id":"in-creekside-trails","name":"Creekside Trails","region":"Northwest Indiana","stateCode":"IN","lat":41.479166,"lon":-87.102578,"official":"https://valpoparks.org/551/Creekside-Trails","organization":"Valpo Parks","trailforksUrl":"https://www.trailforks.com/region/creekside-trails/","routeSource":{"name":"Trailforks riding area","url":"https://www.trailforks.com/region/creekside-trails/","license":"Linked riding-area reference"},"note":"Municipal soft-surface mountain-bike network open when weather conditions permit.","countryCode":"US","listingType":"Trail system","recordStatus":"Active","weatherLat":41.479166,"weatherLon":-87.102578,"sensitivity":1,"canopy":0.82,"geometryVersion":1,"dateVerified":"2026-07-30","soilProfile":{"dominantSoil":"Silt Loam","secondarySoil":"Sandy Loam","naturalDrainage":"Moderately well drained","soilDryingFactor":1,"textureFactor":1.03,"drainageFactor":0.94,"confidence":"Medium-high","sampleCoverage":"15/17","soilLat":41.479166,"soilLon":-87.102578,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-30T20:25:22.983Z","samplingMethod":"17 distributed center-area locations around verified riding-area center"}},{"id":"pa-michaux-state-forest","name":"Michaux State Forest","region":"South Central Pennsylvania","stateCode":"PA","lat":39.822917,"lon":-77.500806,"official":"https://www.pa.gov/agencies/dcnr/recreation/where-to-go/state-forests/find-a-forest/michaux/mountain-biking","organization":"Pennsylvania DCNR","trailforksUrl":"https://www.trailforks.com/region/michaux-state-forest/","routeSource":{"name":"Trailforks riding area","url":"https://www.trailforks.com/region/michaux-state-forest/","license":"Linked riding-area reference"},"note":"Extensive state-forest shared-use mountain-bike network; official closures control.","countryCode":"US","listingType":"Trail system","recordStatus":"Active","weatherLat":39.822917,"weatherLon":-77.500806,"sensitivity":1,"canopy":0.82,"geometryVersion":1,"dateVerified":"2026-07-30","soilProfile":{"dominantSoil":"Loam","secondarySoil":"Silt Loam","naturalDrainage":"Well drained","soilDryingFactor":1.01,"textureFactor":0.99,"drainageFactor":1.04,"confidence":"High","sampleCoverage":"14/17","soilLat":39.822917,"soilLon":-77.500806,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-30T20:25:23.495Z","samplingMethod":"17 distributed center-area locations around verified riding-area center"}},{"id":"pa-bald-eagle-state-forest","name":"Bald Eagle State Forest","region":"Central Pennsylvania","stateCode":"PA","lat":40.896912,"lon":-77.276583,"official":"https://www.pa.gov/agencies/dcnr/recreation/where-to-go/state-forests/find-a-forest/bald-eagle","organization":"Pennsylvania DCNR","trailforksUrl":"https://www.trailforks.com/region/bald-eagle-state-forest/","routeSource":{"name":"Trailforks riding area","url":"https://www.trailforks.com/region/bald-eagle-state-forest/","license":"Linked riding-area reference"},"note":"Large state-forest riding area with natural surfaces and varied elevation.","countryCode":"US","listingType":"Trail system","recordStatus":"Active","weatherLat":40.896912,"weatherLon":-77.276583,"sensitivity":1,"canopy":0.82,"geometryVersion":1,"dateVerified":"2026-07-30","soilProfile":{"dominantSoil":"Loam","secondarySoil":"Sandy Loam","naturalDrainage":"Well drained","soilDryingFactor":1.09,"textureFactor":1.09,"drainageFactor":1.08,"confidence":"Medium","sampleCoverage":"9/17","soilLat":40.896912,"soilLon":-77.276583,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-30T20:25:24.009Z","samplingMethod":"17 distributed center-area locations around verified riding-area center"}},{"id":"pa-rothrock-state-forest","name":"Rothrock State Forest","region":"Central Pennsylvania","stateCode":"PA","lat":40.679728,"lon":-77.714351,"official":"https://www.pa.gov/agencies/dcnr/recreation/where-to-go/state-forests/find-a-forest/rothrock","organization":"Pennsylvania DCNR","trailforksUrl":"https://www.trailforks.com/region/rothrock-state-forest/","routeSource":{"name":"Trailforks riding area","url":"https://www.trailforks.com/region/rothrock-state-forest/","license":"Linked riding-area reference"},"note":"Major state-forest mountain-bike destination with rocky, weather-sensitive trails.","countryCode":"US","listingType":"Trail system","recordStatus":"Active","weatherLat":40.679728,"weatherLon":-77.714351,"sensitivity":1,"canopy":0.82,"geometryVersion":1,"dateVerified":"2026-07-30","soilProfile":{"dominantSoil":"Sandy Loam","secondarySoil":"Sand","naturalDrainage":"Well drained","soilDryingFactor":1.16,"textureFactor":1.22,"drainageFactor":1.05,"confidence":"Medium","sampleCoverage":"11/17","soilLat":40.679728,"soilLon":-77.714351,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-30T20:25:24.329Z","samplingMethod":"17 distributed center-area locations around verified riding-area center"}},{"id":"mi-marquette-ntn-south","name":"Marquette NTN South Trails","region":"Upper Peninsula","stateCode":"MI","lat":46.482,"lon":-87.421,"official":"https://www.noquetrails.org/south-trails/","organization":"Noquemanon Trail Network","trailforksUrl":"https://www.trailforks.com/region/marquette-ntn-south-trails/","routeSource":{"name":"Trailforks riding area","url":"https://www.trailforks.com/region/marquette-ntn-south-trails/","license":"Linked riding-area reference"},"note":"Purpose-built community singletrack network with managed trail access.","countryCode":"US","listingType":"Trail system","recordStatus":"Active","weatherLat":46.482,"weatherLon":-87.421,"sensitivity":1,"canopy":0.82,"geometryVersion":1,"dateVerified":"2026-07-30","soilProfile":{"dominantSoil":"Sandy Loam","secondarySoil":"Sand","naturalDrainage":"Well drained","soilDryingFactor":1.21,"textureFactor":1.27,"drainageFactor":1.08,"confidence":"Medium","sampleCoverage":"10/17","soilLat":46.482,"soilLon":-87.421,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-30T20:25:24.682Z","samplingMethod":"17 distributed center-area locations around verified riding-area center"}},{"id":"mi-addison-oaks","name":"Addison Oaks County Park","region":"Southeast Michigan","stateCode":"MI","lat":42.801353,"lon":-83.159419,"official":"https://www.oakgov.com/community/oakland-county-parks/parks-trails/addison-oaks/","organization":"Oakland County Parks","trailforksUrl":"https://www.trailforks.com/region/addison-oaks-county-park-11251/","routeSource":{"name":"Trailforks riding area","url":"https://www.trailforks.com/region/addison-oaks-county-park-11251/","license":"Linked riding-area reference"},"note":"County park with an established natural-surface mountain-bike trail network.","countryCode":"US","listingType":"Trail system","recordStatus":"Active","weatherLat":42.801353,"weatherLon":-83.159419,"sensitivity":1,"canopy":0.82,"geometryVersion":1,"dateVerified":"2026-07-30","soilProfile":{"dominantSoil":"Loam","secondarySoil":"Sandy Loam","naturalDrainage":"Well drained","soilDryingFactor":1.05,"textureFactor":1.11,"drainageFactor":0.93,"confidence":"Medium-high","sampleCoverage":"12/17","soilLat":42.801353,"soilLon":-83.159419,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-30T20:25:25.024Z","samplingMethod":"17 distributed center-area locations around verified riding-area center"}},{"id":"mi-glacial-hills","name":"Glacial Hills Pathway","region":"Northern Michigan","stateCode":"MI","lat":44.995716,"lon":-85.246327,"official":"https://glacialhillstrails.org/","organization":"Glacial Hills Trails","trailforksUrl":"https://www.trailforks.com/region/glacial-hills-pathway/","routeSource":{"name":"Trailforks riding area","url":"https://www.trailforks.com/region/glacial-hills-pathway/","license":"Linked riding-area reference"},"note":"Purpose-built natural-surface trail network with shared hiking and mountain-bike access.","countryCode":"US","listingType":"Trail system","recordStatus":"Active","weatherLat":44.995716,"weatherLon":-85.246327,"sensitivity":1,"canopy":0.82,"geometryVersion":1,"dateVerified":"2026-07-30","soilProfile":{"dominantSoil":"Sand","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":1.26,"textureFactor":1.35,"drainageFactor":1.08,"confidence":"High","sampleCoverage":"15/17","soilLat":44.995716,"soilLon":-85.246327,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-30T20:25:25.331Z","samplingMethod":"17 distributed center-area locations around verified riding-area center"}}];
const soilProfiles={"a-w-marion-mrwzgndf":{"dominantSoil":"Silt Loam","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":0.93,"confidence":"High","sampleCoverage":"16/17","soilLat":39.633553,"soilLon":-82.884343,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-28T17:37:31.343Z"},"alum-p1":{"dominantSoil":"Silt Loam","secondarySoil":"Clay Loam","naturalDrainage":"Moderately well drained","soilDryingFactor":0.9,"confidence":"High","sampleCoverage":"16/17","soilLat":40.199428,"soilLon":-82.937965,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-28T17:37:31.806Z"},"alum-p2":{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Somewhat poorly drained","soilDryingFactor":0.9,"confidence":"Medium","sampleCoverage":"9/17","soilLat":40.240322,"soilLon":-82.962742,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-28T17:37:32.265Z"},"baileys":{"dominantSoil":"Silt Loam","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":0.98,"confidence":"High","sampleCoverage":"17/17","soilLat":39.3987,"soilLon":-82.1307,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-28T17:37:32.676Z"},"bedford":{"dominantSoil":"Silt Loam","secondarySoil":"Sandy Loam","naturalDrainage":"Well drained","soilDryingFactor":0.98,"confidence":"High","sampleCoverage":"16/17","soilLat":41.3655,"soilLon":-81.5745,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-28T17:37:33.014Z"},"caesar":{"dominantSoil":"Silt Loam","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":0.97,"confidence":"Medium-high","sampleCoverage":"13/17","soilLat":39.522844,"soilLon":-83.977447,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-28T17:37:33.378Z"},"chestnut":{"dominantSoil":"Silt Loam","secondarySoil":"Clay Loam","naturalDrainage":"Moderately well drained","soilDryingFactor":0.93,"confidence":"High","sampleCoverage":"17/17","soilLat":39.80947,"soilLon":-82.770717,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-28T17:37:33.776Z"},"dillon":{"dominantSoil":"Loam","secondarySoil":"Silt Loam","naturalDrainage":"Well drained","soilDryingFactor":0.99,"confidence":"Medium","sampleCoverage":"11/17","soilLat":40.018202,"soilLon":-82.11623,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-28T17:37:34.169Z"},"east-fork":{"dominantSoil":"Silt Loam","secondarySoil":"Clay Loam","naturalDrainage":"Well drained","soilDryingFactor":0.93,"confidence":"Medium","sampleCoverage":"10/17","soilLat":39.0172,"soilLon":-84.1302,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-28T17:37:34.621Z"},"east-rim":{"dominantSoil":"Silt Loam","secondarySoil":"Loam","naturalDrainage":"Moderately well drained","soilDryingFactor":0.93,"confidence":"High","sampleCoverage":"16/17","soilLat":41.2448,"soilLon":-81.5486,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-28T17:37:35.235Z"},"findley":{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Somewhat poorly drained","soilDryingFactor":0.89,"confidence":"High","sampleCoverage":"17/17","soilLat":41.1286,"soilLon":-82.2181,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-28T17:37:35.644Z"},"great-seal":{"dominantSoil":"Silt Loam","secondarySoil":"Loam","naturalDrainage":"Moderately well drained","soilDryingFactor":0.94,"confidence":"High","sampleCoverage":"14/17","soilLat":39.366972,"soilLon":-82.938026,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-28T17:37:36.511Z"},"hampton":{"dominantSoil":"Silt Loam","secondarySoil":"Loam","naturalDrainage":"Moderately well drained","soilDryingFactor":0.96,"confidence":"High","sampleCoverage":"16/17","soilLat":41.1458,"soilLon":-81.605,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-28T17:37:36.912Z"},"harbin":{"dominantSoil":"Silt Loam","secondarySoil":"Clay Loam","naturalDrainage":"Well drained","soilDryingFactor":0.94,"confidence":"High","sampleCoverage":"16/17","soilLat":39.318757,"soilLon":-84.574517,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-28T17:37:37.297Z"},"horns-hill":{"dominantSoil":"Silt Loam","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":0.96,"confidence":"High","sampleCoverage":"16/17","soilLat":40.1008,"soilLon":-82.3921,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-28T17:37:37.693Z"},"huston":{"dominantSoil":"Silt Loam","secondarySoil":"Clay Loam","naturalDrainage":"Well drained","soilDryingFactor":0.93,"confidence":"High","sampleCoverage":"15/17","soilLat":39.590998,"soilLon":-84.766953,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-28T17:37:38.104Z"},"jermain":{"dominantSoil":"Sand","secondarySoil":"Sandy Loam","naturalDrainage":"Somewhat poorly drained","soilDryingFactor":1.1,"confidence":"Medium-high","sampleCoverage":"15/17","soilLat":41.678,"soilLon":-83.593,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-28T17:37:38.616Z"},"john-bryan":{"dominantSoil":"Silt Loam","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":0.94,"confidence":"High","sampleCoverage":"17/17","soilLat":39.789928,"soilLon":-83.859497,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-28T17:37:39.229Z"},"lake-hope":{"dominantSoil":"Sandy Loam","secondarySoil":"Silt Loam","naturalDrainage":"Well drained","soilDryingFactor":1.08,"confidence":"High","sampleCoverage":"15/17","soilLat":39.320096,"soilLon":-82.357088,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-28T17:37:39.701Z"},"mitchell":{"dominantSoil":"Clay Loam","secondarySoil":"Silt Loam","naturalDrainage":"Well drained","soilDryingFactor":0.9,"confidence":"High","sampleCoverage":"15/17","soilLat":39.190549,"soilLon":-84.719653,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-28T17:37:40.782Z"},"mohican":{"dominantSoil":"Silt Loam","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":0.95,"confidence":"High","sampleCoverage":"16/17","soilLat":40.607385,"soilLon":-82.258101,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-28T17:37:41.275Z"},"momba":{"dominantSoil":"Silt Loam","secondarySoil":"Clay Loam","naturalDrainage":"Well drained","soilDryingFactor":0.9,"confidence":"High","sampleCoverage":"16/17","soilLat":39.814142,"soilLon":-84.094791,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-28T17:37:41.628Z"},"mount-airy":{"dominantSoil":"Clay Loam","secondarySoil":"Clay","naturalDrainage":"Well drained","soilDryingFactor":0.85,"confidence":"High","sampleCoverage":"14/17","soilLat":39.177,"soilLon":-84.567,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-28T17:37:42.001Z"},"mountwood":{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Moderately well drained","soilDryingFactor":0.95,"textureFactor":0.9,"drainageFactor":1.03,"confidence":"Medium","sampleCoverage":"10/17","soilLat":39.242685,"soilLon":-81.298476,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-28T18:35:24.414Z","samplingMethod":"17 evenly distributed route locations with boundary offsets"},"oak-openings":{"dominantSoil":"Sand","secondarySoil":"Loam","naturalDrainage":"Moderately well drained","soilDryingFactor":1.19,"confidence":"High","sampleCoverage":"17/17","soilLat":41.554,"soilLon":-83.846,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-28T17:37:42.913Z"},"quail-hollow":{"dominantSoil":"Silt Loam","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":0.94,"confidence":"High","sampleCoverage":"14/17","soilLat":40.9896,"soilLon":-81.306,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-28T17:37:43.427Z"},"reagan":{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Somewhat poorly drained","soilDryingFactor":0.89,"confidence":"High","sampleCoverage":"15/17","soilLat":41.1446,"soilLon":-81.8451,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-28T17:37:43.938Z"},"royalview":{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Somewhat poorly drained","soilDryingFactor":0.9,"confidence":"High","sampleCoverage":"15/17","soilLat":41.3146,"soilLon":-81.8128,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-28T17:37:44.293Z"},"scioto":{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Moderately well drained","soilDryingFactor":0.93,"confidence":"Medium-high","sampleCoverage":"13/17","soilLat":39.228,"soilLon":-82.951,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-28T17:37:44.859Z"},"sells":{"dominantSoil":"Silt Loam","secondarySoil":"Clay Loam","naturalDrainage":"Well drained","soilDryingFactor":0.96,"confidence":"Medium-high","sampleCoverage":"14/17","soilLat":39.3297,"soilLon":-82.082,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-28T17:37:45.258Z"},"starhill-mrwzkfre":{"dominantSoil":"Silt Loam","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":0.94,"confidence":"High","sampleCoverage":"16/17","soilLat":40.023718,"soilLon":-82.438574,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-28T17:37:45.681Z"},"strouds":{"dominantSoil":"Silt Loam","secondarySoil":"Clay Loam","naturalDrainage":"Well drained","soilDryingFactor":0.95,"confidence":"High","sampleCoverage":"14/17","soilLat":39.334,"soilLon":-82.017,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-28T17:37:46.193Z"},"the-wilds-mrx0vsah":{"dominantSoil":"Clay Loam","secondarySoil":"Silt Loam","naturalDrainage":"Well drained","soilDryingFactor":0.89,"confidence":"Medium-high","sampleCoverage":"13/17","soilLat":39.877643,"soilLon":-81.74033,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-28T17:37:46.601Z"},"van-buren":{"dominantSoil":"Clay Loam","secondarySoil":"Loam","naturalDrainage":"Moderately well drained","soilDryingFactor":0.88,"confidence":"High","sampleCoverage":"17/17","soilLat":41.132,"soilLon":-83.65,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-28T17:37:47.420Z"},"vultures":{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Somewhat poorly drained","soilDryingFactor":0.89,"confidence":"High","sampleCoverage":"17/17","soilLat":40.9215,"soilLon":-81.9386,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-28T17:37:47.932Z"},"west-branch":{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Moderately well drained","soilDryingFactor":0.9,"confidence":"Medium","sampleCoverage":"11/17","soilLat":41.145,"soilLon":-81.105,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-28T17:37:48.341Z"},"wv-cacapon":{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":0.96,"textureFactor":0.9,"drainageFactor":1.08,"confidence":"Low","sampleCoverage":"1/17","soilLat":39.506561,"soilLon":-78.316457,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-28T18:35:26.383Z","samplingMethod":"17 evenly distributed route locations with boundary offsets"},"wv-canaan-valley":{"dominantSoil":"Loam","secondarySoil":"Silt Loam","naturalDrainage":"Well drained","soilDryingFactor":0.99,"textureFactor":0.96,"drainageFactor":1.04,"confidence":"High","sampleCoverage":"16/17","soilLat":39.019713,"soilLon":-79.468813,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-28T18:35:28.506Z","samplingMethod":"17 evenly distributed route locations with boundary offsets"},"wv-blackwater-falls":{"dominantSoil":"Silt Loam","secondarySoil":"Loam","naturalDrainage":"Poorly drained","soilDryingFactor":0.94,"textureFactor":0.98,"drainageFactor":0.87,"confidence":"Medium","sampleCoverage":"8/17","soilLat":39.112858,"soilLon":-79.486935,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-28T18:35:30.581Z","samplingMethod":"17 evenly distributed route locations with boundary offsets"},"wv-north-bend":{"dominantSoil":"Clay Loam","secondarySoil":"Silt Loam","naturalDrainage":"Well drained","soilDryingFactor":0.9,"textureFactor":0.81,"drainageFactor":1.05,"confidence":"High","sampleCoverage":"15/17","soilLat":39.221514,"soilLon":-81.106258,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-28T18:35:32.449Z","samplingMethod":"17 evenly distributed route locations with boundary offsets"},"wv-pipestem":{"dominantSoil":"Sandy Loam","secondarySoil":"Silt Loam","naturalDrainage":"Well drained","soilDryingFactor":1.09,"textureFactor":1.09,"drainageFactor":1.08,"confidence":"Medium-high","sampleCoverage":"13/17","soilLat":37.529984,"soilLon":-80.995721,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-28T18:35:34.706Z","samplingMethod":"17 evenly distributed route locations with boundary offsets"},"wv-kanawha":{"dominantSoil":"Loam","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":1.03,"textureFactor":1,"drainageFactor":1.08,"confidence":"Low","sampleCoverage":"1/17","soilLat":38.256915,"soilLon":-81.654331,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-28T18:35:37.439Z","samplingMethod":"17 evenly distributed route locations with boundary offsets"},"wv-coopers-rock":{"dominantSoil":"Loam","secondarySoil":"Sandy Loam","naturalDrainage":"Well drained","soilDryingFactor":1.05,"textureFactor":1.03,"drainageFactor":1.08,"confidence":"Medium-high","sampleCoverage":"12/17","soilLat":39.653699,"soilLon":-79.788036,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-28T18:35:39.310Z","samplingMethod":"17 evenly distributed route locations with boundary offsets"},"wv-beech-fork":{"dominantSoil":"Silt Loam","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":0.97,"textureFactor":0.92,"drainageFactor":1.05,"confidence":"Medium","sampleCoverage":"10/17","soilLat":38.303342,"soilLon":-82.358922,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-28T18:35:41.072Z","samplingMethod":"17 evenly distributed route locations with boundary offsets"},"wv-watoga":{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":0.96,"textureFactor":0.9,"drainageFactor":1.08,"confidence":"Low","sampleCoverage":"1/17","soilLat":38.102307,"soilLon":-80.150341,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-28T18:35:42.667Z","samplingMethod":"17 evenly distributed route locations with boundary offsets"},"wv-babcock":{"dominantSoil":"Sandy Loam","secondarySoil":"Silt Loam","naturalDrainage":"Well drained","soilDryingFactor":1.09,"textureFactor":1.1,"drainageFactor":1.08,"confidence":"Low","sampleCoverage":"3/17","soilLat":37.992354,"soilLon":-80.95433,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-28T18:35:44.458Z","samplingMethod":"17 evenly distributed route locations with boundary offsets"},"wv-valley-falls":{"dominantSoil":"Loam","secondarySoil":"Silt Loam","naturalDrainage":"Well drained","soilDryingFactor":1.01,"textureFactor":0.99,"drainageFactor":1.06,"confidence":"Medium","sampleCoverage":"9/17","soilLat":39.393667,"soilLon":-80.079789,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-28T18:35:46.187Z","samplingMethod":"17 evenly distributed route locations with boundary offsets"},"wv-snowshoe":{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Poorly drained","soilDryingFactor":0.84,"textureFactor":0.9,"drainageFactor":0.72,"confidence":"Low","sampleCoverage":"1/17","soilLat":38.422782,"soilLon":-79.990415,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-28T18:35:48.606Z","samplingMethod":"Center-area fallback; mapped route returned no usable SSURGO samples"},"in-brown-county":{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":0.96,"textureFactor":0.9,"drainageFactor":1.07,"confidence":"High","sampleCoverage":"17/17","soilLat":39.172975,"soilLon":-86.233634,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:14.616Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"in-fort-harrison":{"dominantSoil":"Silt Loam","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":0.98,"textureFactor":0.95,"drainageFactor":1.03,"confidence":"Medium-high","sampleCoverage":"17/17","soilLat":39.865069,"soilLon":-86.026042,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:16.683Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"in-harmonie":{"dominantSoil":"Silt Loam","secondarySoil":"Sand","naturalDrainage":"Well drained","soilDryingFactor":0.98,"textureFactor":0.93,"drainageFactor":1.09,"confidence":"High","sampleCoverage":"17/17","soilLat":38.04831,"soilLon":-87.962337,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:18.576Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"in-obannon-woods":{"dominantSoil":"Silt Loam","secondarySoil":"Clay Loam","naturalDrainage":"Well drained","soilDryingFactor":0.95,"textureFactor":0.89,"drainageFactor":1.06,"confidence":"High","sampleCoverage":"17/17","soilLat":38.185634,"soilLon":-86.275146,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:20.246Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"in-potato-creek":{"dominantSoil":"Sandy Loam","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":1.13,"textureFactor":1.17,"drainageFactor":1.06,"confidence":"High","sampleCoverage":"17/17","soilLat":41.559337,"soilLon":-86.357082,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:22.160Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"in-spring-mill":{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":0.96,"textureFactor":0.9,"drainageFactor":1.08,"confidence":"High","sampleCoverage":"17/17","soilLat":38.73495,"soilLon":-86.407725,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:24.141Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"in-versailles":{"dominantSoil":"Silt Loam","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":0.96,"textureFactor":0.9,"drainageFactor":1.07,"confidence":"Medium-high","sampleCoverage":"17/17","soilLat":39.090913,"soilLon":-85.242057,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:25.851Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"in-salamonie":{"dominantSoil":"Silt Loam","secondarySoil":"Loam","naturalDrainage":"Moderately well drained","soilDryingFactor":0.92,"textureFactor":0.9,"drainageFactor":0.96,"confidence":"Medium-high","sampleCoverage":"17/17","soilLat":40.763172,"soilLon":-85.609551,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:32.541Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"in-interlake":{"dominantSoil":"Silt Loam","secondarySoil":"Clay Loam","naturalDrainage":"Well drained","soilDryingFactor":0.94,"textureFactor":0.84,"drainageFactor":1.12,"confidence":"High","sampleCoverage":"17/17","soilLat":38.22166,"soilLon":-87.225627,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:34.583Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"in-clark-deam-lake":{"dominantSoil":"Silt Loam","secondarySoil":"Clay Loam","naturalDrainage":"Well drained","soilDryingFactor":0.91,"textureFactor":0.84,"drainageFactor":1.04,"confidence":"High","sampleCoverage":"17/17","soilLat":38.472052,"soilLon":-85.860304,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:36.326Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"in-ferdinand":{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":0.96,"textureFactor":0.9,"drainageFactor":1.07,"confidence":"High","sampleCoverage":"17/17","soilLat":38.267574,"soilLon":-86.775229,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:38.576Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"in-jackson-washington":{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":0.95,"textureFactor":0.9,"drainageFactor":1.04,"confidence":"High","sampleCoverage":"17/17","soilLat":38.837981,"soilLon":-86.055664,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:40.239Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"in-martin":{"dominantSoil":"Silt Loam","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":0.97,"textureFactor":0.91,"drainageFactor":1.08,"confidence":"High","sampleCoverage":"17/17","soilLat":38.704538,"soilLon":-86.741544,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:42.266Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"in-owen-putnam":{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Moderately well drained","soilDryingFactor":0.94,"textureFactor":0.9,"drainageFactor":1.01,"confidence":"High","sampleCoverage":"17/17","soilLat":39.39439,"soilLon":-86.861467,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:44.415Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"in-starve-hollow":{"dominantSoil":"Silt Loam","secondarySoil":"Clay Loam","naturalDrainage":"Well drained","soilDryingFactor":0.93,"textureFactor":0.88,"drainageFactor":1.02,"confidence":"High","sampleCoverage":"17/17","soilLat":38.812926,"soilLon":-86.073391,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:46.089Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"in-yellowwood":{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":0.96,"textureFactor":0.9,"drainageFactor":1.06,"confidence":"High","sampleCoverage":"17/17","soilLat":39.12662,"soilLon":-86.299761,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:47.760Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"in-griffin":{"dominantSoil":"Silt Loam","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":0.96,"textureFactor":0.91,"drainageFactor":1.05,"confidence":"High","sampleCoverage":"17/17","soilLat":39.337816,"soilLon":-87.360303,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:49.540Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"in-town-run":{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":0.96,"textureFactor":0.9,"drainageFactor":1.08,"confidence":"Medium","sampleCoverage":"11/17","soilLat":39.918312,"soilLon":-86.084273,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:51.450Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"in-southwestway":{"dominantSoil":"Silt Loam","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":0.94,"textureFactor":0.94,"drainageFactor":0.94,"confidence":"High","sampleCoverage":"17/17","soilLat":39.654009,"soilLon":-86.240469,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:53.222Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"in-rangeline":{"dominantSoil":"Silt Loam","secondarySoil":"Clay Loam","naturalDrainage":"Well drained","soilDryingFactor":0.93,"textureFactor":0.85,"drainageFactor":1.08,"confidence":"Low","sampleCoverage":"6/17","soilLat":40.099791,"soilLon":-85.637916,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:55.068Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"in-winona-lake":{"dominantSoil":"Sandy Loam","secondarySoil":"Sand","naturalDrainage":"Well drained","soilDryingFactor":1.14,"textureFactor":1.24,"drainageFactor":0.94,"confidence":"High","sampleCoverage":"17/17","soilLat":41.215231,"soilLon":-85.813957,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:56.702Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"in-imagination-glen":{"dominantSoil":"Silt Loam","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":0.91,"textureFactor":0.94,"drainageFactor":0.86,"confidence":"High","sampleCoverage":"17/17","soilLat":41.591113,"soilLon":-87.137999,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:58.236Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"in-rum-village":{"dominantSoil":"Sandy Loam","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":1.14,"textureFactor":1.17,"drainageFactor":1.06,"confidence":"High","sampleCoverage":"16/17","soilLat":41.645127,"soilLon":-86.275554,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:43:59.955Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"in-franke-park":{"dominantSoil":"Silt Loam","secondarySoil":"Clay Loam","naturalDrainage":"Moderately well drained","soilDryingFactor":0.89,"textureFactor":0.89,"drainageFactor":0.89,"confidence":"High","sampleCoverage":"17/17","soilLat":41.109589,"soilLon":-85.160635,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:44:02.974Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"in-wapahani":{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":0.96,"textureFactor":0.9,"drainageFactor":1.08,"confidence":"High","sampleCoverage":"17/17","soilLat":39.141888,"soilLon":-86.569467,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T03:44:04.557Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"pa-big-elk-creek":{"dominantSoil":"Loam","secondarySoil":"Silt Loam","naturalDrainage":"Well drained","soilDryingFactor":1,"textureFactor":0.98,"drainageFactor":1.04,"confidence":"High","sampleCoverage":"17/17","soilLat":39.736141,"soilLon":-75.861347,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:13:54.116Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"pa-blue-knob":{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":0.96,"textureFactor":0.9,"drainageFactor":1.08,"confidence":"High","sampleCoverage":"17/17","soilLat":40.288334,"soilLon":-78.589074,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:13:55.784Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"pa-codorus":{"dominantSoil":"Silt Loam","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":1.01,"textureFactor":0.94,"drainageFactor":1.13,"confidence":"High","sampleCoverage":"17/17","soilLat":39.786049,"soilLon":-76.927814,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:13:57.458Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"pa-delaware-canal":{"dominantSoil":"Loam","secondarySoil":"Silt Loam","naturalDrainage":"Well drained","soilDryingFactor":1,"textureFactor":1,"drainageFactor":1,"confidence":"Medium-high","sampleCoverage":"16/17","soilLat":40.407405,"soilLon":-74.999956,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:13:59.170Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"pa-evansburg":{"dominantSoil":"Loam","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":1.03,"textureFactor":1,"drainageFactor":1.08,"confidence":"High","sampleCoverage":"17/17","soilLat":40.164928,"soilLon":-75.430109,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:01.536Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"pa-french-creek":{"dominantSoil":"Loam","secondarySoil":"Silt Loam","naturalDrainage":"Well drained","soilDryingFactor":1.01,"textureFactor":0.98,"drainageFactor":1.07,"confidence":"High","sampleCoverage":"17/17","soilLat":40.217897,"soilLon":-75.774067,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:03.066Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"pa-gouldsboro":{"dominantSoil":"Loam","secondarySoil":"Sandy Loam","naturalDrainage":"Moderately well drained","soilDryingFactor":1.04,"textureFactor":1.1,"drainageFactor":0.93,"confidence":"Medium","sampleCoverage":"9/17","soilLat":41.221578,"soilLon":-75.476949,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:04.691Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"pa-lackawanna":{"dominantSoil":"Loam","secondarySoil":"Silt Loam","naturalDrainage":"Somewhat poorly drained","soilDryingFactor":0.95,"textureFactor":0.98,"drainageFactor":0.88,"confidence":"Medium","sampleCoverage":"11/17","soilLat":41.567773,"soilLon":-75.702932,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:06.558Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"pa-laurel-hill":{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":0.93,"textureFactor":0.9,"drainageFactor":1,"confidence":"Medium-high","sampleCoverage":"12/17","soilLat":40.015222,"soilLon":-79.246041,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:08.388Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"pa-lehigh-gorge":{"dominantSoil":"Sandy Loam","secondarySoil":"Loam","naturalDrainage":"Moderately well drained","soilDryingFactor":1.07,"textureFactor":1.1,"drainageFactor":1.02,"confidence":"Medium","sampleCoverage":"9/17","soilLat":41.04835,"soilLon":-75.768516,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:10.016Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"pa-marsh-creek":{"dominantSoil":"Loam","secondarySoil":"Silt Loam","naturalDrainage":"Well drained","soilDryingFactor":1.04,"textureFactor":0.99,"drainageFactor":1.12,"confidence":"High","sampleCoverage":"17/17","soilLat":40.074005,"soilLon":-75.731037,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:11.782Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"pa-nockamixon":{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Somewhat poorly drained","soilDryingFactor":0.88,"textureFactor":0.9,"drainageFactor":0.83,"confidence":"High","sampleCoverage":"17/17","soilLat":40.489207,"soilLon":-75.188269,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:13.394Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"pa-ohiopyle":{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":0.96,"textureFactor":0.9,"drainageFactor":1.08,"confidence":"Medium","sampleCoverage":"11/17","soilLat":39.846908,"soilLon":-79.483916,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:14.938Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"pa-oil-creek":{"dominantSoil":"Loam","secondarySoil":"Silt Loam","naturalDrainage":"Well drained","soilDryingFactor":0.98,"textureFactor":0.96,"drainageFactor":1.01,"confidence":"High","sampleCoverage":"17/17","soilLat":41.564179,"soilLon":-79.657339,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:16.469Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"pa-promised-land":{"dominantSoil":"Loam","secondarySoil":"Sandy Loam","naturalDrainage":"Somewhat poorly drained","soilDryingFactor":1.01,"textureFactor":1.05,"drainageFactor":0.92,"confidence":"Medium","sampleCoverage":"11/17","soilLat":41.319995,"soilLon":-75.221476,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:18.114Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"pa-prompton":{"dominantSoil":"Loam","secondarySoil":"Silt Loam","naturalDrainage":"Moderately well drained","soilDryingFactor":0.98,"textureFactor":0.99,"drainageFactor":0.96,"confidence":"Medium","sampleCoverage":"10/17","soilLat":41.612947,"soilLon":-75.335026,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:19.748Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"pa-pymatuning":{"dominantSoil":"Silt Loam","secondarySoil":"Loam","naturalDrainage":"Somewhat poorly drained","soilDryingFactor":0.91,"textureFactor":0.93,"drainageFactor":0.87,"confidence":"High","sampleCoverage":"16/17","soilLat":41.609896,"soilLon":-80.446113,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:21.291Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"pa-ralph-stover":{"dominantSoil":"Loam","secondarySoil":"Silt Loam","naturalDrainage":"Well drained","soilDryingFactor":0.99,"textureFactor":0.96,"drainageFactor":1.04,"confidence":"High","sampleCoverage":"17/17","soilLat":40.435425,"soilLon":-75.098506,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:22.814Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"pa-salt-springs":{"dominantSoil":"Silt Loam","secondarySoil":"Loam","naturalDrainage":"Somewhat poorly drained","soilDryingFactor":0.92,"textureFactor":0.92,"drainageFactor":0.93,"confidence":"Medium","sampleCoverage":"9/17","soilLat":41.906724,"soilLon":-75.870365,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:24.599Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"pa-shawnee":{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Moderately well drained","soilDryingFactor":0.93,"textureFactor":0.9,"drainageFactor":0.99,"confidence":"High","sampleCoverage":"17/17","soilLat":40.046808,"soilLon":-78.615539,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:26.219Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"pa-susquehannock":{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":0.96,"textureFactor":0.9,"drainageFactor":1.08,"confidence":"High","sampleCoverage":"17/17","soilLat":39.846577,"soilLon":-76.343361,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:27.700Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"pa-swatara":{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":0.96,"textureFactor":0.9,"drainageFactor":1.08,"confidence":"High","sampleCoverage":"17/17","soilLat":40.491238,"soilLon":-76.540528,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:29.585Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"pa-tobyhanna":{"dominantSoil":"Sand","secondarySoil":"Silt Loam","naturalDrainage":"Moderately well drained","soilDryingFactor":1.05,"textureFactor":1.13,"drainageFactor":0.91,"confidence":"Low","sampleCoverage":"2/17","soilLat":41.207698,"soilLon":-75.409995,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:31.118Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"pa-white-clay-creek":{"dominantSoil":"Loam","secondarySoil":"Silt Loam","naturalDrainage":"Well drained","soilDryingFactor":1.01,"textureFactor":0.97,"drainageFactor":1.07,"confidence":"High","sampleCoverage":"16/17","soilLat":39.748509,"soilLon":-75.774121,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:32.984Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"pa-yellow-creek":{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":0.93,"textureFactor":0.9,"drainageFactor":1,"confidence":"High","sampleCoverage":"15/17","soilLat":40.575524,"soilLon":-79.029965,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:14:34.599Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"mi-bald-mountain-recreation-area":{"dominantSoil":"Sandy Loam","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":1.12,"textureFactor":1.14,"drainageFactor":1.09,"confidence":"Medium-high","sampleCoverage":"17/17","soilLat":42.772374,"soilLon":-83.208284,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:23:43.161Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"mi-bass-river-recreation-area":{"dominantSoil":"Sand","secondarySoil":"Sandy Loam","naturalDrainage":"Excessively drained","soilDryingFactor":1.26,"textureFactor":1.33,"drainageFactor":1.14,"confidence":"High","sampleCoverage":"16/17","soilLat":43.016046,"soilLon":-86.036269,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:23:45.107Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"mi-black-mountain-pathway":{"dominantSoil":"Sand","secondarySoil":"Sandy Loam","naturalDrainage":"Well drained","soilDryingFactor":1.27,"textureFactor":1.34,"drainageFactor":1.15,"confidence":"Medium-high","sampleCoverage":"12/17","soilLat":45.516677,"soilLon":-84.247697,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:23:46.733Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"mi-brighton-recreation-area":{"dominantSoil":"Sandy Loam","secondarySoil":"Sand","naturalDrainage":"Well drained","soilDryingFactor":1.18,"textureFactor":1.24,"drainageFactor":1.08,"confidence":"High","sampleCoverage":"17/17","soilLat":42.505352,"soilLon":-83.821278,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:23:48.577Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"mi-cheboygan-state-park":{"dominantSoil":"Sand","secondarySoil":null,"naturalDrainage":"Somewhat poorly drained","soilDryingFactor":1.25,"textureFactor":1.35,"drainageFactor":1.06,"confidence":"Medium","sampleCoverage":"10/17","soilLat":45.664089,"soilLon":-84.415088,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:23:49.907Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"mi-clear-lake-state-park":{"dominantSoil":"Sand","secondarySoil":null,"naturalDrainage":"Excessively drained","soilDryingFactor":1.3,"textureFactor":1.35,"drainageFactor":1.27,"confidence":"Low","sampleCoverage":"4/17","soilLat":45.1285,"soilLon":-84.18188,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:23:51.444Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"mi-craig-lake-state-park":{"dominantSoil":"Undetermined","secondarySoil":null,"naturalDrainage":"Unknown","soilDryingFactor":1,"textureFactor":1,"drainageFactor":1,"confidence":"Low","sampleCoverage":"0/17","soilLat":46.612469,"soilLon":-88.185308,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:23:53.365Z","samplingMethod":"No usable SSURGO samples; neutral factors retained for Developer Mode review"},"mi-fayette-historic-state-park":{"dominantSoil":"Sandy Loam","secondarySoil":"Sand","naturalDrainage":"Well drained","soilDryingFactor":1.17,"textureFactor":1.21,"drainageFactor":1.1,"confidence":"Medium-high","sampleCoverage":"12/17","soilLat":45.71791,"soilLon":-86.663418,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:23:54.669Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"mi-fort-custer-recreation-area":{"dominantSoil":"Sandy Loam","secondarySoil":"Sand","naturalDrainage":"Well drained","soilDryingFactor":1.19,"textureFactor":1.24,"drainageFactor":1.1,"confidence":"High","sampleCoverage":"17/17","soilLat":42.318107,"soilLon":-85.33267,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:23:56.260Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"mi-hartwick-pines-state-park":{"dominantSoil":"Sand","secondarySoil":"Sandy Loam","naturalDrainage":"Excessively drained","soilDryingFactor":1.29,"textureFactor":1.34,"drainageFactor":1.21,"confidence":"Medium-high","sampleCoverage":"12/17","soilLat":44.749783,"soilLon":-84.679252,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:23:57.794Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"mi-highland-recreation-area":{"dominantSoil":"Sand","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":1.19,"textureFactor":1.25,"drainageFactor":1.08,"confidence":"High","sampleCoverage":"17/17","soilLat":42.628558,"soilLon":-83.579151,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:23:59.406Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"mi-hoeft-state-park-chippewa-hills":{"dominantSoil":"Sand","secondarySoil":"Sandy Loam","naturalDrainage":"Moderately well drained","soilDryingFactor":1.21,"textureFactor":1.31,"drainageFactor":1.02,"confidence":"High","sampleCoverage":"17/17","soilLat":44.938436,"soilLon":-83.692781,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:00.838Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"mi-holly-recreation-area":{"dominantSoil":"Sandy Loam","secondarySoil":"Sand","naturalDrainage":"Well drained","soilDryingFactor":1.17,"textureFactor":1.23,"drainageFactor":1.05,"confidence":"Medium-high","sampleCoverage":"17/17","soilLat":42.827607,"soilLon":-83.582757,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:02.403Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"mi-ionia-state-recreation-area":{"dominantSoil":"Sandy Loam","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":1.1,"textureFactor":1.18,"drainageFactor":0.94,"confidence":"High","sampleCoverage":"16/17","soilLat":42.954863,"soilLon":-85.139489,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:04.235Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"mi-island-lake-recreation-area":{"dominantSoil":"Sand","secondarySoil":"Sandy Loam","naturalDrainage":"Well drained","soilDryingFactor":1.21,"textureFactor":1.29,"drainageFactor":1.06,"confidence":"High","sampleCoverage":"16/17","soilLat":42.504208,"soilLon":-83.716703,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:06.063Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"mi-lakeport-state-park":{"dominantSoil":"Sand","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":1.26,"textureFactor":1.35,"drainageFactor":1.08,"confidence":"High","sampleCoverage":"17/17","soilLat":43.124505,"soilLon":-82.492937,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:07.416Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"mi-little-presque-isle-multi-use-pathway":{"dominantSoil":"Sand","secondarySoil":null,"naturalDrainage":"Excessively drained","soilDryingFactor":1.3,"textureFactor":1.35,"drainageFactor":1.25,"confidence":"Medium","sampleCoverage":"8/17","soilLat":46.621613,"soilLon":-87.491599,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:09.043Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"mi-ludington-state-park":{"dominantSoil":"Sand","secondarySoil":null,"naturalDrainage":"Excessively drained","soilDryingFactor":1.3,"textureFactor":1.35,"drainageFactor":1.2,"confidence":"High","sampleCoverage":"17/17","soilLat":44.046511,"soilLon":-86.511324,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:10.519Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"mi-maybury-state-park":{"dominantSoil":"Sand","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":1.25,"textureFactor":1.35,"drainageFactor":1.07,"confidence":"High","sampleCoverage":"17/17","soilLat":42.427011,"soilLon":-83.521474,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:12.234Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"mi-menominee-river-state-recreation-area":{"dominantSoil":"Sand","secondarySoil":"Sandy Loam","naturalDrainage":"Excessively drained","soilDryingFactor":1.3,"textureFactor":1.31,"drainageFactor":1.27,"confidence":"High","sampleCoverage":"17/17","soilLat":45.7602,"soilLon":-87.951616,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:14.046Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"mi-mike-levine-lakelands-trail-state-park":{"dominantSoil":"Sandy Loam","secondarySoil":"Sand","naturalDrainage":"Well drained","soilDryingFactor":1.14,"textureFactor":1.25,"drainageFactor":0.94,"confidence":"High","sampleCoverage":"14/17","soilLat":42.422696,"soilLon":-84.166469,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:15.771Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"mi-ortonville-recreation-area":{"dominantSoil":"Sand","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":1.21,"textureFactor":1.3,"drainageFactor":1.05,"confidence":"High","sampleCoverage":"17/17","soilLat":42.872699,"soilLon":-83.432213,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:17.368Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"mi-petoskey-state-park":{"dominantSoil":"Sand","secondarySoil":null,"naturalDrainage":"Excessively drained","soilDryingFactor":1.3,"textureFactor":1.35,"drainageFactor":1.3,"confidence":"High","sampleCoverage":"17/17","soilLat":45.393413,"soilLon":-84.912994,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:18.914Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"mi-pinckney-recreation-area":{"dominantSoil":"Sand","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":1.22,"textureFactor":1.3,"drainageFactor":1.08,"confidence":"High","sampleCoverage":"17/17","soilLat":42.414159,"soilLon":-84.00157,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:20.711Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"mi-pontiac-lake-recreation-area":{"dominantSoil":"Sand","secondarySoil":"Sandy Loam","naturalDrainage":"Well drained","soilDryingFactor":1.22,"textureFactor":1.31,"drainageFactor":1.07,"confidence":"High","sampleCoverage":"17/17","soilLat":42.685164,"soilLon":-83.465872,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:22.295Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"mi-pretty-lake-pathway":{"dominantSoil":"Sand","secondarySoil":null,"naturalDrainage":"Excessively drained","soilDryingFactor":1.3,"textureFactor":1.35,"drainageFactor":1.3,"confidence":"Low","sampleCoverage":"1/17","soilLat":46.599668,"soilLon":-85.670624,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:23.726Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"mi-proud-lake-recreation-area":{"dominantSoil":"Sand","secondarySoil":"Sandy Loam","naturalDrainage":"Well drained","soilDryingFactor":1.21,"textureFactor":1.28,"drainageFactor":1.09,"confidence":"Medium-high","sampleCoverage":"17/17","soilLat":42.568119,"soilLon":-83.563012,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:25.300Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"mi-rifle-river-state-recreation-area":{"dominantSoil":"Sand","secondarySoil":"Sandy Loam","naturalDrainage":"Well drained","soilDryingFactor":1.24,"textureFactor":1.32,"drainageFactor":1.1,"confidence":"Medium","sampleCoverage":"10/17","soilLat":44.39222,"soilLon":-84.026624,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:26.874Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"mi-rockport-recreation-area":{"dominantSoil":"Sandy Loam","secondarySoil":"Loam","naturalDrainage":"Excessively drained","soilDryingFactor":1.15,"textureFactor":1.15,"drainageFactor":1.14,"confidence":"Medium-high","sampleCoverage":"13/17","soilLat":45.205232,"soilLon":-83.394261,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:28.297Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"mi-seven-lakes-state-park":{"dominantSoil":"Loam","secondarySoil":"Clay Loam","naturalDrainage":"Well drained","soilDryingFactor":1,"textureFactor":0.95,"drainageFactor":1.08,"confidence":"High","sampleCoverage":"17/17","soilLat":42.81124,"soilLon":-83.672142,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:29.997Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"mi-sleepy-hollow-state-park":{"dominantSoil":"Loam","secondarySoil":"Sandy Loam","naturalDrainage":"Well drained","soilDryingFactor":0.99,"textureFactor":1.02,"drainageFactor":0.94,"confidence":"High","sampleCoverage":"17/17","soilLat":42.939252,"soilLon":-84.410457,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:31.816Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"mi-south-higgins-lake-state-park":{"dominantSoil":"Sand","secondarySoil":null,"naturalDrainage":"Somewhat excessively drained","soilDryingFactor":1.26,"textureFactor":1.35,"drainageFactor":1.09,"confidence":"Low","sampleCoverage":"4/17","soilLat":44.419782,"soilLon":-84.668391,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:33.329Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"mi-sterling-state-park":{"dominantSoil":"Sand","secondarySoil":"Clay Loam","naturalDrainage":"Very poorly drained","soilDryingFactor":0.96,"textureFactor":1.15,"drainageFactor":0.62,"confidence":"Medium-high","sampleCoverage":"12/17","soilLat":41.910537,"soilLon":-83.3554,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:34.699Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"mi-thompson-s-harbor-state-park":{"dominantSoil":"Sandy Loam","secondarySoil":"Loam","naturalDrainage":"Somewhat poorly drained","soilDryingFactor":1.11,"textureFactor":1.17,"drainageFactor":0.99,"confidence":"Medium","sampleCoverage":"14/17","soilLat":45.347823,"soilLon":-83.567573,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:36.297Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"mi-van-riper-state-park":{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":0.94,"textureFactor":0.9,"drainageFactor":1.01,"confidence":"Low","sampleCoverage":"5/17","soilLat":46.53055,"soilLon":-87.9935,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:37.939Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"mi-waterloo-recreation-area":{"dominantSoil":"Sand","secondarySoil":"Sandy Loam","naturalDrainage":"Well drained","soilDryingFactor":1.25,"textureFactor":1.34,"drainageFactor":1.08,"confidence":"High","sampleCoverage":"17/17","soilLat":42.358059,"soilLon":-84.089813,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:39.982Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"mi-wilderness-state-park":{"dominantSoil":"Sand","secondarySoil":null,"naturalDrainage":"Excessively drained","soilDryingFactor":1.24,"textureFactor":1.35,"drainageFactor":1.03,"confidence":"High","sampleCoverage":"17/17","soilLat":45.74473,"soilLon":-84.888054,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:41.620Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"mi-yankee-springs-recreation-area":{"dominantSoil":"Sand","secondarySoil":null,"naturalDrainage":"Somewhat excessively drained","soilDryingFactor":1.28,"textureFactor":1.35,"drainageFactor":1.16,"confidence":"High","sampleCoverage":"17/17","soilLat":42.623125,"soilLon":-85.469336,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-29T14:24:43.416Z","samplingMethod":"17 evenly distributed official-route locations with boundary offsets"},"oh-forry-star-hill":{"dominantSoil":"Silt Loam","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":0.96,"textureFactor":0.92,"drainageFactor":1.03,"confidence":"High","sampleCoverage":"17/17","soilLat":40.026615,"soilLon":-82.432424,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-30T20:25:19.205Z","samplingMethod":"17 distributed center-area locations around verified riding-area center"},"oh-camp-tuscazoar":{"dominantSoil":"Silt Loam","secondarySoil":"Clay Loam","naturalDrainage":"Well drained","soilDryingFactor":0.96,"textureFactor":0.91,"drainageFactor":1.06,"confidence":"High","sampleCoverage":"16/17","soilLat":40.566821,"soilLon":-81.397554,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-30T20:25:19.812Z","samplingMethod":"17 distributed center-area locations around verified riding-area center"},"oh-troy-mtb":{"dominantSoil":"Loam","secondarySoil":"Silt Loam","naturalDrainage":"Well drained","soilDryingFactor":1,"textureFactor":0.97,"drainageFactor":1.06,"confidence":"High","sampleCoverage":"16/17","soilLat":40.05806,"soilLon":-84.208175,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-30T20:25:20.319Z","samplingMethod":"17 distributed center-area locations around verified riding-area center"},"oh-lake-milton":{"dominantSoil":"Silt Loam","secondarySoil":"Clay Loam","naturalDrainage":"Poorly drained","soilDryingFactor":0.86,"textureFactor":0.88,"drainageFactor":0.82,"confidence":"High","sampleCoverage":"15/17","soilLat":41.0611,"soilLon":-80.9724,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-30T20:25:20.735Z","samplingMethod":"17 distributed center-area locations around verified riding-area center"},"oh-tar-hollow":{"dominantSoil":"Silt Loam","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":0.97,"textureFactor":0.91,"drainageFactor":1.08,"confidence":"Medium","sampleCoverage":"11/17","soilLat":39.357657,"soilLon":-82.750114,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-30T20:25:21.070Z","samplingMethod":"17 distributed center-area locations around verified riding-area center"},"wv-big-bear":{"dominantSoil":"Silt Loam","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":0.93,"textureFactor":0.9,"drainageFactor":0.98,"confidence":"Medium","sampleCoverage":"8/17","soilLat":39.6087,"soilLon":-79.6222,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-30T20:25:21.445Z","samplingMethod":"17 distributed center-area locations around verified riding-area center"},"wv-arrowhead":{"dominantSoil":"Silt Loam","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":0.97,"textureFactor":0.91,"drainageFactor":1.07,"confidence":"Medium","sampleCoverage":"9/17","soilLat":38.006,"soilLon":-81.075,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-30T20:25:21.803Z","samplingMethod":"17 distributed center-area locations around verified riding-area center"},"wv-barboursville":{"dominantSoil":"Silt Loam","secondarySoil":"Loam","naturalDrainage":"Well drained","soilDryingFactor":0.98,"textureFactor":0.95,"drainageFactor":1.03,"confidence":"Medium-high","sampleCoverage":"13/17","soilLat":38.39195,"soilLon":-82.305855,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-30T20:25:22.471Z","samplingMethod":"17 distributed center-area locations around verified riding-area center"},"in-creekside-trails":{"dominantSoil":"Silt Loam","secondarySoil":"Sandy Loam","naturalDrainage":"Moderately well drained","soilDryingFactor":1,"textureFactor":1.03,"drainageFactor":0.94,"confidence":"Medium-high","sampleCoverage":"15/17","soilLat":41.479166,"soilLon":-87.102578,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-30T20:25:22.983Z","samplingMethod":"17 distributed center-area locations around verified riding-area center"},"pa-michaux-state-forest":{"dominantSoil":"Loam","secondarySoil":"Silt Loam","naturalDrainage":"Well drained","soilDryingFactor":1.01,"textureFactor":0.99,"drainageFactor":1.04,"confidence":"High","sampleCoverage":"14/17","soilLat":39.822917,"soilLon":-77.500806,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-30T20:25:23.495Z","samplingMethod":"17 distributed center-area locations around verified riding-area center"},"pa-bald-eagle-state-forest":{"dominantSoil":"Loam","secondarySoil":"Sandy Loam","naturalDrainage":"Well drained","soilDryingFactor":1.09,"textureFactor":1.09,"drainageFactor":1.08,"confidence":"Medium","sampleCoverage":"9/17","soilLat":40.896912,"soilLon":-77.276583,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-30T20:25:24.009Z","samplingMethod":"17 distributed center-area locations around verified riding-area center"},"pa-rothrock-state-forest":{"dominantSoil":"Sandy Loam","secondarySoil":"Sand","naturalDrainage":"Well drained","soilDryingFactor":1.16,"textureFactor":1.22,"drainageFactor":1.05,"confidence":"Medium","sampleCoverage":"11/17","soilLat":40.679728,"soilLon":-77.714351,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-30T20:25:24.329Z","samplingMethod":"17 distributed center-area locations around verified riding-area center"},"mi-marquette-ntn-south":{"dominantSoil":"Sandy Loam","secondarySoil":"Sand","naturalDrainage":"Well drained","soilDryingFactor":1.21,"textureFactor":1.27,"drainageFactor":1.08,"confidence":"Medium","sampleCoverage":"10/17","soilLat":46.482,"soilLon":-87.421,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-30T20:25:24.682Z","samplingMethod":"17 distributed center-area locations around verified riding-area center"},"mi-addison-oaks":{"dominantSoil":"Loam","secondarySoil":"Sandy Loam","naturalDrainage":"Well drained","soilDryingFactor":1.05,"textureFactor":1.11,"drainageFactor":0.93,"confidence":"Medium-high","sampleCoverage":"12/17","soilLat":42.801353,"soilLon":-83.159419,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-30T20:25:25.024Z","samplingMethod":"17 distributed center-area locations around verified riding-area center"},"mi-glacial-hills":{"dominantSoil":"Sand","secondarySoil":null,"naturalDrainage":"Well drained","soilDryingFactor":1.26,"textureFactor":1.35,"drainageFactor":1.08,"confidence":"High","sampleCoverage":"15/17","soilLat":44.995716,"soilLon":-85.246327,"source":"USDA NRCS SSURGO via Soil Data Access","researchedAt":"2026-07-30T20:25:25.331Z","samplingMethod":"17 distributed center-area locations around verified riding-area center"}};
const USDA_SOIL_ENDPOINT='https://sdmdataaccess.sc.egov.usda.gov/Tabular/post.rest';
const USDA_TEXTURE_FACTORS={Sand:1.35,'Sandy Loam':1.2,Loam:1,'Silt Loam':.9,'Clay Loam':.75,Clay:.6};
const USDA_DRAINAGE_FACTORS={'Excessively drained':1.3,'Somewhat excessively drained':1.2,'Well drained':1.08,'Moderately well drained':.98,'Somewhat poorly drained':.83,'Poorly drained':.72,'Very poorly drained':.62};
function soilSamplePoints(lat,lon){
 const points=[{key:'center',lat,lon}];
 for(const miles of [.5,1])for(let bearing=0;bearing<360;bearing+=45){
  const radians=bearing*Math.PI/180;
  points.push({key:`${miles}mi-${bearing}`,lat:lat+Math.cos(radians)*miles/69,lon:lon+Math.sin(radians)*miles/(69*Math.cos(lat*Math.PI/180))});
 }
 return points;
}
function soilSampleQuery(sample){
 const point=`point(${sample.lon} ${sample.lat})`;
 return `SELECT '${sample.key}' AS sample_key,mu.mukey,mu.muname,c.compname,c.comppct_r,c.majcompflag,c.drainagecl,ch.hzname,ch.hzdept_r,ch.hzdepb_r,tg.texdesc,tg.rvindicator FROM mapunit mu INNER JOIN component c ON c.mukey=mu.mukey LEFT JOIN chorizon ch ON ch.cokey=c.cokey AND ch.hzdept_r=(SELECT MIN(ch2.hzdept_r) FROM chorizon ch2 WHERE ch2.cokey=c.cokey) LEFT JOIN chtexturegrp tg ON tg.chkey=ch.chkey WHERE mu.mukey IN (SELECT * FROM SDA_Get_Mukey_from_intersection_with_WktWgs84('${point.replaceAll("'","''")}')) AND c.majcompflag='Yes'`;
}
function classifySoilTexture(text){
 const value=String(text||'').toLowerCase();
 if(!value||value.includes('water')||value.includes('plant material'))return null;
 if(value.includes('clay loam')||value.includes('silty clay loam')||value.includes('sandy clay loam'))return 'Clay Loam';
 if(/(^| )clay($| )/.test(value)||value.includes('silty clay')||value.includes('sandy clay'))return 'Clay';
 if(value.includes('sandy loam')||value.includes('fine sandy loam'))return 'Sandy Loam';
 if(value.includes('silt loam'))return 'Silt Loam';
 if(/(^| )loam($| )/.test(value))return 'Loam';
 if(value.includes('sand'))return 'Sand';
 return null;
}
function soilFrequency(values){
 const counts=new Map();
 values.filter(Boolean).forEach(value=>counts.set(value,(counts.get(value)||0)+1));
 return [...counts].sort((a,b)=>b[1]-a[1]);
}
function summarizeSoilRecords(records,lat,lon){
 const bySample=new Map();
 records.forEach(record=>{if(!bySample.has(record.sample_key))bySample.set(record.sample_key,[]);bySample.get(record.sample_key).push(record)});
 const samples=[...bySample.values()].map(group=>group.filter(record=>classifySoilTexture(record.texdesc)).sort((a,b)=>Number(b.comppct_r||0)-Number(a.comppct_r||0)||Number(String(b.rvindicator).toLowerCase()==='yes')-Number(String(a.rvindicator).toLowerCase()==='yes'))[0]).filter(Boolean);
 if(!samples.length)throw Error('USDA returned no usable soil samples for this location.');
 const textures=soilFrequency(samples.map(sample=>classifySoilTexture(sample.texdesc)));
 const drainages=soilFrequency(samples.map(sample=>sample.drainagecl||null));
 const usable=samples.length,coverage=usable/17,primaryShare=(textures[0]?.[1]||0)/usable;
 let confidence='Low';
 if(coverage>=.8&&primaryShare>=.55)confidence='High';else if(coverage>=.7&&primaryShare>=.4)confidence='Medium-high';else if(coverage>=.45)confidence='Medium';
 const textureFactor=samples.reduce((total,sample)=>total+USDA_TEXTURE_FACTORS[classifySoilTexture(sample.texdesc)],0)/usable;
 const drainageSamples=samples.filter(sample=>USDA_DRAINAGE_FACTORS[sample.drainagecl]);
 const drainageFactor=drainageSamples.length?drainageSamples.reduce((total,sample)=>total+USDA_DRAINAGE_FACTORS[sample.drainagecl],0)/drainageSamples.length:1;
 const round=value=>Number(value.toFixed(2));
 return{dominantSoil:textures[0]?.[0]||'Unknown',secondarySoil:textures[1]?.[0]||null,naturalDrainage:drainages[0]?.[0]||'Unknown',soilDryingFactor:round(Math.max(.65,Math.min(1.3,textureFactor*.65+drainageFactor*.35))),textureFactor:round(textureFactor),drainageFactor:round(drainageFactor),confidence,sampleCoverage:`${usable}/17`,soilLat:lat,soilLon:lon,source:'USDA NRCS SSURGO via Soil Data Access',researchedAt:new Date().toISOString()};
}
async function researchSoilProfile(lat,lon){
 const query=soilSamplePoints(lat,lon).map(soilSampleQuery).join('\nUNION ALL\n');
 const response=await fetch(USDA_SOIL_ENDPOINT,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({format:'JSON+COLUMNNAME',query})});
 const text=await response.text();
 if(!response.ok)throw Error(`USDA soil request failed (HTTP ${response.status}).`);
 let json;
 try{json=JSON.parse(text)}catch(error){throw Error('USDA returned an unreadable soil response.')}
 const table=Array.isArray(json.Table)?json.Table:[];
 const columns=table[0]||[];
 if(!columns.length)throw Error('USDA returned no soil information for this location.');
 return summarizeSoilRecords(table.slice(1).map(row=>Object.fromEntries(columns.map((column,index)=>[column,row[index]]))),lat,lon);
}
function profileMatchesTrailLocation(profile,trail,previousTrail){
 if(!profile)return false;
 const lat=Number(profile.soilLat??previousTrail?.lat),lon=Number(profile.soilLon??previousTrail?.lon);
 if(!Number.isFinite(lat)||!Number.isFinite(lon))return false;
 return haversine(lat,lon,trail.lat,trail.lon)<.1;
}
const engineeredDryingFactors={"mikes":1.35,"baileys":1.25,"horns-hill":1.25,"momba":1.08,"bedford":1.08,"royalview":1.08,"east-rim":1.12,"sells":1.05};
const sensitivityLabels={".75":"Low",".9":"Medium-low","1":"Medium","1.15":"Medium-high","1.3":"High"};
const dryingLabels={".7":"Very slow",".85":"Slow","1":"Average","1.15":"Fast","1.3":"Very fast"};
const canopyLabels={".35":"Open",".6":"Partial",".82":"Mostly shaded",".95":"Fully shaded"};
const drainageFactors={"Very poor":.82,"Poor":.9,"Average":1,"Good":1.1,"Excellent":1.2,"All-weather":1.35};
const SUPABASE_URL='https://woaqvcgrtvypifgxmtoh.supabase.co';
const SUPABASE_PUBLISHABLE_KEY='sb_publishable_qkvJh45ZskcVb_kSQ7dQUA_sAqOBfuU';
function normalizeDrainage(value){
 const text=String(value||'').toLowerCase();
 if(text.includes('all-weather'))return 'All-weather';
 if(text.includes('very poor'))return 'Very poor';
 if(text==='slow'||text.includes('medium-slow')||text.includes('poor'))return 'Poor';
 if(text.includes('fast')||text.includes('faster')||text.includes('good'))return 'Good';
 if(text.includes('excellent'))return 'Excellent';
 return 'Average';
}
function closestLabel(value,labels){const n=Number(value);return Object.entries(labels).sort((a,b)=>Math.abs(Number(a[0])-n)-Math.abs(Number(b[0])-n))[0]?.[1]||'Unknown'}
function shortSurface(value){return String(value).replace('Clay-heavy natural soil','Clay-heavy').replace('Loam/topsoil','Loam').replace('Sandy soil','Sandy').replace('Silty soil','Silty').replace('Rocky natural surface','Rocky').replace('Gravel/crushed stone','Gravel').replace('Machine-built aggregate','Aggregate').replace('Boardwalk/wood features','Wood features')}
function trailCharacteristics(t){const profile=t.soilProfile;const mappedSoil=profile?`${profile.dominantSoil}${profile.secondarySoil?` • ${profile.secondarySoil}`:''}`:'Not mapped';const drainage=profile?.naturalDrainage||normalizeDrainage(t.drainage);const confidence=profile?.confidence||'Not rated';return `<div class="characteristics"><strong>Trail characteristics</strong><span><b>Mapped soil:</b> ${mappedSoil}</span><span><b>Natural drainage:</b> ${drainage}</span><span><b>Soil confidence:</b> ${confidence}</span><span><b>Rain sensitivity:</b> ${closestLabel(t.sensitivity,sensitivityLabels)}</span><span><b>Canopy:</b> ${closestLabel(t.canopy,canopyLabels)}</span></div>`}
let results=[],markers=[],userLocation=null,userMarker=null,pickMode=false,pickTarget='access',pickMarker=null,selectedTrailId=null;
let customTrails=readJSON('customTrails',[]);
let developerMode=readJSON('developerMode',false);
let hiddenTrailIds=readJSON('hiddenTrailIds',[]);
let deletedTrailIds=readJSON('deletedTrailIds',[]);
let builtInOverrides=readJSON('builtInOverrides',{});
let sharedTrails=null;
let communityReports=new Map();
const reportSaveQueues=new Map();
let adminSession=readJSON('ohioTrailAdminSession',null);
let adminAuthenticated=false;
function readJSON(k,f){try{return JSON.parse(localStorage.getItem(k)||JSON.stringify(f))}catch(e){return f}}
function stripGuessedSoil(trail){
 if(!trail||typeof trail!=='object')return trail;
 const clean={...trail};
 delete clean.surface;
 delete clean.surfaces;
 delete clean.drying;
 delete clean.drainage;
 return clean;
}
function effectiveBaseTrail(t){return stripGuessedSoil(builtInOverrides[t.id]?{...t,...builtInOverrides[t.id],id:t.id}:t)}
function allManagedTrails(){
 const records=new Map(baseTrails.map(t=>[t.id,{...t,source:'Built-in'}]));
 if(sharedTrails)sharedTrails.filter(t=>!['germantown','lake-vesuvius','mikes'].includes(t.id)).forEach(t=>records.set(t.id,{...t,source:'Shared'}));
 baseTrails.forEach(t=>{if(builtInOverrides[t.id])records.set(t.id,{...stripGuessedSoil({...t,...builtInOverrides[t.id],id:t.id}),source:'Local edit'})});
 customTrails.forEach(t=>records.set(t.id,{...stripGuessedSoil(t),source:'Local edit'}));
 return [...records.values()];
}
function catalog(){return allManagedTrails().filter(t=>!hiddenTrailIds.includes(t.id)&&!deletedTrailIds.includes(t.id)&&!['Hidden','Archived','Permanently closed'].includes(t.recordStatus))}
async function supabaseRpc(name,body={},accessToken=null){
 const headers={apikey:SUPABASE_PUBLISHABLE_KEY,'Content-Type':'application/json'};
 if(accessToken)headers.Authorization=`Bearer ${accessToken}`;
 const response=await fetch(`${SUPABASE_URL}/rest/v1/rpc/${name}`,{
  method:'POST',
  headers,
  body:JSON.stringify(body)
 });
 const text=await response.text();
 if(!response.ok)throw new Error(text||`Shared data request failed (HTTP ${response.status})`);
 return text?JSON.parse(text):null;
}
async function authRequest(path,body,accessToken=null){
 const headers={apikey:SUPABASE_PUBLISHABLE_KEY,'Content-Type':'application/json'};
 if(accessToken)headers.Authorization=`Bearer ${accessToken}`;
 const response=await fetch(`${SUPABASE_URL}/auth/v1/${path}`,{
  method:'POST',headers,body:body===undefined?undefined:JSON.stringify(body)
 });
 const text=await response.text();
 const data=text?JSON.parse(text):null;
 if(!response.ok)throw new Error(data?.msg||data?.message||data?.error_description||'Sign in failed');
 return data;
}
function storeAdminSession(data){
 adminSession={
  accessToken:data.access_token,
  refreshToken:data.refresh_token,
  expiresAt:Date.now()+(Number(data.expires_in)||3600)*1000,
  email:data.user?.email||adminSession?.email||''
 };
 localStorage.setItem('ohioTrailAdminSession',JSON.stringify(adminSession));
}
async function adminAccessToken(){
 if(!adminSession?.accessToken)return null;
 if(Number(adminSession.expiresAt)>Date.now()+60000)return adminSession.accessToken;
 if(!adminSession.refreshToken)return null;
 const refreshed=await authRequest('token?grant_type=refresh_token',{refresh_token:adminSession.refreshToken});
 storeAdminSession(refreshed);
 return adminSession.accessToken;
}
async function verifyAdminSession(){
 try{
  const token=await adminAccessToken();
  adminAuthenticated=Boolean(token&&await supabaseRpc('is_ohio_trail_admin',{},token));
 }catch(error){
  adminAuthenticated=false;
 }
 if(!adminAuthenticated){
  adminSession=null;
  localStorage.removeItem('ohioTrailAdminSession');
  developerMode=false;
  localStorage.setItem('developerMode','false');
 }
 updateDeveloperUI();
 return adminAuthenticated;
}
async function adminRpc(name,body={}){
 const token=await adminAccessToken();
 if(!token||!adminAuthenticated)throw new Error('Administrator sign in required');
 return supabaseRpc(name,body,token);
}
async function signInAdministrator(email,password){
 const session=await authRequest('token?grant_type=password',{email,password});
 storeAdminSession(session);
 const authorized=await verifyAdminSession();
 if(!authorized)throw new Error('This account is not authorized for Developer Mode');
 return true;
}
async function signOutAdministrator(){
 try{
  const token=await adminAccessToken();
  if(token)await authRequest('logout',undefined,token);
 }catch(error){console.warn('Administrator sign-out request did not complete',error)}
 adminSession=null;adminAuthenticated=false;developerMode=false;
 localStorage.removeItem('ohioTrailAdminSession');
 localStorage.setItem('developerMode','false');
 updateDeveloperUI();
}
function reporterToken(){
 let token=localStorage.getItem('trailReporterToken');
 if(!/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(token||'')){
  token=crypto.randomUUID();
  localStorage.setItem('trailReporterToken',token);
 }
 return token;
}
async function refreshCommunityReports(){
 const rows=await supabaseRpc('get_community_trail_reports');
 communityReports=new Map((rows||[]).map(row=>[row.trail_id,row]));
}
async function loadSharedData(){
 try{
  let trailRows;
  try{
   trailRows=await supabaseRpc('get_trails_in_bounds',{p_west:-90.5,p_south:37,p_east:-74.5,p_north:48,p_state:null,p_limit:500});
  }catch(nationwideError){
   console.info('Nationwide trail index is not installed yet; using the Ohio compatibility catalog.');
   trailRows=await supabaseRpc('get_ohio_trails');
  }
  await refreshCommunityReports();
  const loaded=(trailRows||[]).map(row=>stripGuessedSoil(row.data)).filter(t=>t&&t.id);
  if(loaded.length)sharedTrails=loaded;
 }catch(error){
  console.warn('Shared trail data is unavailable; using the packaged trail catalog.',error);
 }
}
const map=L.map('map').setView([39.5,-81.4],6);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:18,attribution:'&copy; OpenStreetMap contributors'}).addTo(map);
let precipitationOverlay=null;
let precipitationPeriod=null;
let precipitationRequestId=0;
const PRECIP_IMAGE_URL='https://mapservices.weather.noaa.gov/raster/rest/services/obs/mrms_qpe/ImageServer/exportImage';
function precipitationImageUrl(bounds,hours,product){
  const size=map.getSize();
  const params=new URLSearchParams({
    f:'image',
    bbox:[bounds.getWest(),bounds.getSouth(),bounds.getEast(),bounds.getNorth()].join(','),
    bboxSR:'4326',
    imageSR:'4326',
    size:`${Math.max(300,Math.round(size.x))},${Math.max(300,Math.round(size.y))}`,
    format:'png32',
    transparent:'true',
    interpolation:'RSP_BilinearInterpolation',
    mosaicRule:JSON.stringify({mosaicMethod:'esriMosaicLockRaster',lockRasterIds:[product.objectId]}),
    renderingRule:JSON.stringify({rasterFunction:`rft_${hours}hr`})
  });
  return `${PRECIP_IMAGE_URL}?${params.toString()}`;
}
async function refreshPrecipitationOverlay(){
  if(!precipitationPeriod)return;
  const requestedPeriod=precipitationPeriod;
  const requestId=++precipitationRequestId;
  const bounds=map.getBounds();
  try{
    const products=await fetchMrmsCatalog();
    if(requestId!==precipitationRequestId||requestedPeriod!==precipitationPeriod)return;
    const url=precipitationImageUrl(bounds,requestedPeriod,products[requestedPeriod]);
    if(precipitationOverlay)map.removeLayer(precipitationOverlay);
    precipitationOverlay=L.imageOverlay(url,bounds,{opacity:.58,interactive:false,zIndex:250,errorOverlayUrl:''}).addTo(map);
    precipitationOverlay.on('error',()=>console.warn(`NOAA ${requestedPeriod}-hour rainfall overlay image failed to load`));
  }catch(error){console.warn(`NOAA ${requestedPeriod}-hour rainfall overlay unavailable`,error)}
}
const PrecipControl=L.Control.extend({
  options:{position:'topright'},
  onAdd(){
    const box=L.DomUtil.create('div','leaflet-bar');
    box.style.cssText='display:flex;background:#fff;border-radius:4px;overflow:hidden;';
    const buttons={};
    L.DomEvent.disableClickPropagation(box);
    const updateButtons=()=>[12,24].forEach(hours=>{
      const active=precipitationPeriod===hours;
      buttons[hours].setAttribute('aria-pressed',String(active));
      buttons[hours].style.background=active?'#173f2a':'#fff';
      buttons[hours].style.color=active?'#fff':'#172019';
    });
    [12,24].forEach((hours,index)=>{
      const button=L.DomUtil.create('button','',box);
      buttons[hours]=button;
      button.type='button';
      button.title=`Show or hide NOAA ${hours}-hour precipitation`;
      button.setAttribute('aria-pressed','false');
      button.style.cssText=`background:#fff;padding:8px 10px;border:0;${index?'border-left:1px solid #d6ddd8;':''}font:700 12px system-ui;cursor:pointer;`;
      button.textContent=`${hours}h rain`;
      L.DomEvent.on(button,'click',()=>{
        precipitationPeriod=precipitationPeriod===hours?null:hours;
        precipitationRequestId++;
        updateButtons();
        if(precipitationPeriod)refreshPrecipitationOverlay();
        else if(precipitationOverlay){map.removeLayer(precipitationOverlay);precipitationOverlay=null;}
      });
    });
    return box;
  }
});
map.addControl(new PrecipControl());
map.on('moveend zoomend',()=>{if(precipitationPeriod)refreshPrecipitationOverlay()});
setTimeout(()=>map.invalidateSize(),250);window.addEventListener('resize',()=>map.invalidateSize());
function trailWeatherLat(t){const n=Number(t.weatherLat);return Number.isFinite(n)?n:Number(t.lat)}
function trailWeatherLon(t){const n=Number(t.weatherLon);return Number.isFinite(n)?n:Number(t.lon)}
function updateLocationStatus(){
  const lat=Number(document.getElementById('lat').value),lon=Number(document.getElementById('lon').value);
  const weatherLat=Number(document.getElementById('weatherLat').value),weatherLon=Number(document.getElementById('weatherLon').value);
  document.getElementById('accessLocationStatus').textContent=Number.isFinite(lat)&&Number.isFinite(lon)&&document.getElementById('lat').value!==''?`Access: ${lat.toFixed(5)}, ${lon.toFixed(5)}`:'No access location selected';
  document.getElementById('weatherLocationStatus').textContent=Number.isFinite(weatherLat)&&Number.isFinite(weatherLon)&&document.getElementById('weatherLat').value!==''?`Weather: ${weatherLat.toFixed(5)}, ${weatherLon.toFixed(5)}`:'No weather center selected';
}
function beginPickMode(target='access'){
  pickMode=true;pickTarget=target;
  document.body.classList.add('map-picking');
  document.getElementById('pickBannerTitle').textContent=target==='weather'?'Choose the trail-system weather center':'Choose the access / parking location';
  document.getElementById('pickBanner').classList.add('show');
  document.getElementById('trailDialog').close();
  map.invalidateSize();
}
function cancelPickMode(){pickMode=false;document.body.classList.remove('map-picking');document.getElementById('pickBanner').classList.remove('show')}
function completePick(latlng){
  const isWeather=pickTarget==='weather';
  document.getElementById(isWeather?'weatherLat':'lat').value=latlng.lat.toFixed(6);
  document.getElementById(isWeather?'weatherLon':'lon').value=latlng.lng.toFixed(6);
  if(!isWeather&&!document.getElementById('weatherLat').value){
    document.getElementById('weatherLat').value=latlng.lat.toFixed(6);
    document.getElementById('weatherLon').value=latlng.lng.toFixed(6);
  }
  if(pickMarker)map.removeLayer(pickMarker);
  pickMarker=L.marker(latlng).addTo(map).bindPopup(isWeather?'Weather center':'Trail access').openPopup();
  cancelPickMode();updateLocationStatus();document.getElementById('trailDialog').showModal();
}
function copyAccessToWeather(){
  document.getElementById('weatherLat').value=document.getElementById('lat').value;
  document.getElementById('weatherLon').value=document.getElementById('lon').value;
  updateLocationStatus();
}
map.on('click',e=>{if(pickMode)completePick(e.latlng)});
window.addEventListener('keydown',e=>{if(e.key==='Escape'&&pickMode)cancelPickMode()});

function haversine(a,b,c,d){const R=3958.8,p=Math.PI/180,da=(c-a)*p,dl=(d-b)*p;const x=Math.sin(da/2)**2+Math.cos(a*p)*Math.cos(c*p)*Math.sin(dl/2)**2;return 2*R*Math.asin(Math.sqrt(x))}
function timeMs(value){
  const n=Number(value);
  if(Number.isFinite(n))return n>1e12?n:n*1000;
  return new Date(value).getTime();
}
function sumRange(v,t,h){const n=Date.now();return (v||[]).reduce((s,x,i)=>{const z=timeMs((t||[])[i]);return z<=n&&z>=n-h*3600000?s+(Number(x)||0):s},0)}
function avgRange(v,t,h){const n=Date.now();let s=0,c=0;(v||[]).forEach((x,i)=>{const z=timeMs((t||[])[i]);if(z<=n&&z>=n-h*3600000){s+=Number(x)||0;c++}});return c?s/c:0}
function elapsedLabel(hours,{plus=false}={}){
  const value=Math.max(0,Math.floor(Number(hours)||0));
  if(value<1)return 'Now';
  if(value<48)return `${value} hr ago`;
  const days=Math.max(2,Math.floor(value/24));
  return `${days}${plus?'+':''} days ago`;
}
function lastRainLabel(values,times){
  const now=Date.now();
  let latest=null;
  (values||[]).forEach((value,i)=>{
    const when=timeMs((times||[])[i]);
    if(Number.isFinite(when)&&when<=now&&Number(value)>=0.005&&(latest===null||when>latest))latest=when;
  });
  if(latest===null)return elapsedLabel(72,{plus:true});
  const hours=Math.max(0,Math.floor((now-latest)/3600000));
  return elapsedLabel(hours);
}
function readyFactHtml(ready){
  if(ready==='Now')return '<div class="fact"><b>Ready now</b></div>';
  if(ready==='Check official status')return '<div class="fact"><b>Check official status</b><span>readiness</span></div>';
  return `<div class="fact"><b>${ready}</b><span>estimated ready</span></div>`;
}
function statusFrom(score,temp){if(temp<34&&score>32)return{key:'blue',label:'Freeze-thaw risk'};if(score<24)return{key:'green',label:'Likely good'};if(score<43)return{key:'yellow',label:'Use caution'};if(score<63)return{key:'orange',label:'Marginal'};return{key:'red',label:'Likely wet'}}
function readyEstimate(score,d){if(score<24)return'Now';const h=Math.max(4,Math.round((score-20)/(2.4*d)));return h<24?`~${h} hr`:`~${Math.ceil(h/24)} day${Math.ceil(h/24)>1?'s':''}`}
function rideColor(r){if(r>=76)return'#237a43';if(r>=58)return'#ffd400';if(r>=38)return'#ef7b22';return'#c53131'}
function formatInches(value){
  const n=Number(value);
  if(!Number.isFinite(n)||n<0)return 'Unavailable';
  return n.toFixed(2)+'\"';
}
function validMrmsRainInches(value){
  const rawMillimeters=Number(value);
  // NOAA describes the rendered MRMS product in inches, but getSamples
  // returns the underlying raster pixel values in millimeters. Convert once
  // here at the API boundary. Negative values are MRMS no-data flags.
  if(!Number.isFinite(rawMillimeters)||rawMillimeters<0||rawMillimeters>1000)return null;
  const inches=rawMillimeters/25.4;
  // A rolling 72-hour total above 20 inches in Ohio is almost certainly a
  // units/product error, so reject it instead of displaying a false value.
  return inches<=20?inches:null;
}
function getVotes(id){return readJSON('trailVote:'+id,null)}
function persistVote(id,value,observations){
 const cleanObservations=Array.isArray(observations)?observations:[];
 const snapshot={value:value||null,observations:[...cleanObservations],time:Date.now()};
 if(!snapshot.value&&!snapshot.observations.length)localStorage.removeItem('trailVote:'+id);
 else localStorage.setItem('trailVote:'+id,JSON.stringify(snapshot));
 render();reopenReport(id);

 const previous=reportSaveQueues.get(id)||Promise.resolve();
 const pending=previous.catch(()=>{}).then(async()=>{
  if(!snapshot.value&&!snapshot.observations.length){
   await supabaseRpc('remove_my_trail_report',{p_trail_id:id,p_reporter_token:reporterToken()});
  }else{
   await supabaseRpc('save_my_trail_report',{
    p_trail_id:id,p_reporter_token:reporterToken(),
    p_recommendation:snapshot.value,p_observations:snapshot.observations
   });
  }
  await refreshCommunityReports();
 }).then(()=>{
  if(reportSaveQueues.get(id)===pending){
   reportSaveQueues.delete(id);
   render();reopenReport(id);
  }
 }).catch(error=>{
  if(reportSaveQueues.get(id)===pending)reportSaveQueues.delete(id);
  console.error('Could not save the shared trail report',error);
  alert('Your selections are saved in this browser, but could not be shared. Please check your connection and try again.');
 });
 reportSaveQueues.set(id,pending);
 return pending;
}
function saveVote(id,value){
 const current=getVotes(id)||{value:null,observations:[]};
 persistVote(id,current.value===value?null:value,current.observations||[]);
}
function toggleObservation(id,observation){
 const current=getVotes(id)||{value:null,observations:[]};
 const observations=Array.isArray(current.observations)?[...current.observations]:[];
 const wetObservations=['A few puddles','Frequent puddles','Tires picked up mud','Soft sections','Creek crossings high'];
 let next;
 if(observations.includes(observation))next=observations.filter(x=>x!==observation);
 else if(observation==='Perfect traction')next=[...observations.filter(x=>!wetObservations.includes(x)),observation];
 else if(wetObservations.includes(observation))next=[...observations.filter(x=>x!=='Perfect traction'),observation];
 else next=[...observations,observation];
 persistVote(id,current.value,next);
}
function removeVote(id){persistVote(id,null,[])}
async function syncMyReport(id){
 try{
  const rows=await supabaseRpc('get_my_trail_report',{p_trail_id:id,p_reporter_token:reporterToken()});
  if(rows&&rows[0]){
   localStorage.setItem('trailVote:'+id,JSON.stringify({
    value:rows[0].recommendation||null,
    observations:rows[0].observations||[],
    time:new Date(rows[0].updated_at).getTime()
   }));
  }else localStorage.removeItem('trailVote:'+id);
  render();reopenReport(id);
 }catch(error){
  console.warn('Could not refresh this browser’s trail report',error);
  reopenReport(id);
 }
}
function reopenReport(id){
 requestAnimationFrame(()=>{
  const panel=document.querySelector(`[data-report-panel="${id}"]`);
  const btn=document.querySelector(`[data-report-toggle="${id}"]`);
  if(panel&&btn){panel.classList.add('open');btn.setAttribute('aria-expanded','true')}
 })
}
const MRMS_SERVICE_URL='https://mapservices.weather.noaa.gov/raster/rest/services/obs/mrms_qpe/ImageServer';
const MRMS_URL=MRMS_SERVICE_URL+'/getSamples';
const MRMS_CATALOG_URL=MRMS_SERVICE_URL+'/query';
const MRMS_PRODUCTS={12:'conus_QPE_12H',24:'conus_QPE_24H',48:'conus_QPE_48H',72:'conus_QPE_72H'};
const MRMS_CATALOG_CACHE_MS=5*60*1000;
let mrmsCatalogCache=null;
const RAIN_INNER_RADIUS_MILES=2;
const RAIN_OUTER_RADIUS_MILES=5;

const MRMS_CACHE_PREFIX='mrmsValid:';
const MRMS_ZERO_HOLD_MS=24*60*60*1000;
const MRMS_RAIN_EPSILON=.005;
const MRMS_MONOTONIC_TOLERANCE=.03;
const MRMS_MIN_STORM_TOTAL=.20;
const MRMS_MAX_SOURCE_RATIO=3.0;
function mrmsCacheKey(trailId){return MRMS_CACHE_PREFIX+trailId}
function readMrmsCache(trailId){
  const cached=readJSON(mrmsCacheKey(trailId),null);
  if(!cached||!Number.isFinite(Number(cached.savedAt)))return null;
  return cached;
}
function writeMrmsCache(trailId,rainfall){
  const payload={savedAt:Date.now(),r12:rainfall.r12,r24:rainfall.r24,r48:rainfall.r48,r72:rainfall.r72,r24Min:rainfall.r24Min,r24Max:rainfall.r24Max,r72Min:rainfall.r72Min,r72Max:rainfall.r72Max,sampleRadius:rainfall.sampleRadius,sampleCount:rainfall.sampleCount,lastRain:rainfall.lastRain||null};
  localStorage.setItem(mrmsCacheKey(trailId),JSON.stringify(payload));
}
function mrmsAllZero(rainfall){
  return [rainfall.r12,rainfall.r24,rainfall.r48,rainfall.r72].every(value=>(Number(value)||0)<MRMS_RAIN_EPSILON);
}
function meaningfulRain(rainfall){return (Number(rainfall?.r72)||0)>=MRMS_RAIN_EPSILON}
function rainfallOrderingInvalid(r){
  const values=[Number(r.r12)||0,Number(r.r24)||0,Number(r.r48)||0,Number(r.r72)||0];
  return values.some((value,index)=>index>0&&value+MRMS_MONOTONIC_TOLERANCE<values[index-1]);
}
function abruptMrmsDrop(current,cached){
  if(!cached||!meaningfulRain(cached))return false;
  const age=Date.now()-Number(cached.savedAt);
  if(!Number.isFinite(age)||age<0||age>MRMS_ZERO_HOLD_MS)return false;
  const old72=Number(cached.r72)||0,new72=Number(current.r72)||0;
  if(old72<MRMS_MIN_STORM_TOTAL)return false;
  const allowedRatio=age<=6*3600000?.55:age<=12*3600000?.35:.20;
  return new72<old72*allowedRatio && old72-new72>.15;
}
function sourceDisagreement(mrms,openMeteo){
  const a=Number(mrms?.r72)||0,b=Number(openMeteo?.r72)||0;
  if(Math.max(a,b)<MRMS_MIN_STORM_TOTAL)return false;
  if(Math.min(a,b)<MRMS_RAIN_EPSILON)return true;
  return Math.max(a,b)/Math.min(a,b)>MRMS_MAX_SOURCE_RATIO;
}
function describeMrmsProblem(mrms,cached,fallback){
  if(mrmsAllZero(mrms)&&meaningfulRain(fallback))return 'NOAA returned a dry field while the independent source reported meaningful rainfall.';
  if(rainfallOrderingInvalid(mrms))return 'NOAA rolling totals were internally inconsistent (12/24/48/72-hour ordering failed).';
  if(abruptMrmsDrop(mrms,cached))return 'NOAA rainfall dropped implausibly compared with the last trustworthy reading.';
  return '';
}


function ringPoints(lat,lon,radiusMiles,count){
  const latMiles=69.0;
  const lonMiles=Math.max(1,69.172*Math.cos(Number(lat)*Math.PI/180));
  const points=[];
  for(let i=0;i<count;i++){
    const angle=(i/count)*Math.PI*2;
    points.push([
      Number(lon)+(Math.sin(angle)*radiusMiles/lonMiles),
      Number(lat)+(Math.cos(angle)*radiusMiles/latMiles)
    ]);
  }
  return points;
}
function rainfallSamplePoints(lat,lon){
  // Center + an 8-point two-mile ring + a 16-point five-mile ring.
  // Inner points carry 70% of the result and the outer ring carries 30%,
  // preserving local accuracy while representing a larger trail system.
  const inner=[[Number(lon),Number(lat)],...ringPoints(lat,lon,RAIN_INNER_RADIUS_MILES,8)];
  const outer=ringPoints(lat,lon,RAIN_OUTER_RADIUS_MILES,16);
  return{
    points:[...inner,...outer],
    weights:[...inner.map(()=>0.70/inner.length),...outer.map(()=>0.30/outer.length)]
  };
}
function weightedMedian(entries){
  const sorted=entries.slice().sort((a,b)=>a.value-b.value);
  const total=sorted.reduce((sum,e)=>sum+e.weight,0);
  let cumulative=0;
  for(const entry of sorted){
    cumulative+=entry.weight;
    if(cumulative>=total/2)return entry.value;
  }
  return sorted[sorted.length-1].value;
}
function rainStats(values,weights){
  const entries=[];
  values.forEach((value,i)=>{
    const clean=validMrmsRainInches(value);
    if(clean!==null)entries.push({value:clean,weight:Number(weights[i])||0,raw:Number(value)});
  });
  if(!entries.length)throw new Error('MRMS returned no usable rainfall samples');
  const weightTotal=entries.reduce((sum,e)=>sum+e.weight,0)||1;
  entries.forEach(e=>e.weight/=weightTotal);
  const sortedValues=entries.map(e=>e.value).sort((a,b)=>a-b);
  const average=entries.reduce((sum,e)=>sum+e.value*e.weight,0);
  const rawValues=entries.map(e=>e.raw).filter(Number.isFinite);
  return{
    median:weightedMedian(entries), average, min:sortedValues[0], max:sortedValues[sortedValues.length-1], count:entries.length,
    rawMin:Math.min(...rawValues), rawMax:Math.max(...rawValues), rawPreview:rawValues.slice(0,8)
  };
}
async function fetchMrmsCatalog(){
  if(mrmsCatalogCache&&Date.now()-mrmsCatalogCache.savedAt<MRMS_CATALOG_CACHE_MS)return mrmsCatalogCache.products;
  const names=Object.values(MRMS_PRODUCTS);
  const where=names.map(name=>`idp_subset = '${name}'`).join(' OR ');
  const params=new URLSearchParams({
    f:'json',where,outFields:'objectid,name,idp_subset,idp_filedate,idp_validendtime',returnGeometry:'false'
  });
  const response=await fetch(`${MRMS_CATALOG_URL}?${params.toString()}`);
  if(!response.ok)throw new Error(`MRMS catalog request failed (HTTP ${response.status})`);
  const data=await response.json();
  if(data.error)throw new Error(data.error.message||'MRMS catalog service error');
  const features=Array.isArray(data.features)?data.features:[];
  const products={};
  for(const hours of Object.keys(MRMS_PRODUCTS).map(Number)){
    const expected=MRMS_PRODUCTS[hours];
    const matches=features.map(feature=>feature?.attributes||{}).filter(item=>item.idp_subset===expected&&Number.isInteger(Number(item.objectid)));
    if(matches.length!==1)throw new Error(`MRMS catalog did not return exactly one ${expected} raster`);
    const item=matches[0];
    products[hours]={hours,objectId:Number(item.objectid),name:item.name,idpSubset:item.idp_subset,fileDate:Number(item.idp_filedate),validEndTime:Number(item.idp_validendtime)};
  }
  const timestamps=Object.values(products).map(item=>item.validEndTime);
  if(timestamps.some(value=>!Number.isFinite(value))||Math.max(...timestamps)-Math.min(...timestamps)>60*60*1000)throw new Error('MRMS catalog product timestamps differ by more than one hour');
  mrmsCatalogCache={savedAt:Date.now(),products};
  return products;
}
async function fetchMrmsPeriod(lat,lon,hours,product){
  const samplePlan=rainfallSamplePoints(lat,lon);
  const geometry={points:samplePlan.points,spatialReference:{wkid:4326}};
  const params=new URLSearchParams({
    f:'json',
    geometryType:'esriGeometryMultipoint',
    geometry:JSON.stringify(geometry),
    returnFirstValueOnly:'true',
    interpolation:'RSP_NearestNeighbor',
    mosaicRule:JSON.stringify({mosaicMethod:'esriMosaicLockRaster',lockRasterIds:[product.objectId]})
  });
  const requestUrl=`${MRMS_URL}?${params.toString()}`;
  const started=Date.now();
  const response=await fetch(requestUrl);
  if(!response.ok)throw new Error(`MRMS ${hours} hr request failed (HTTP ${response.status})`);
  const data=await response.json();
  if(data.error)throw new Error(data.error.message||'MRMS service error');
  const samples=Array.isArray(data.samples)?data.samples:[];
  if(samples.length!==samplePlan.points.length)throw new Error(`MRMS ${hours} hr returned ${samples.length} of ${samplePlan.points.length} samples`);
  if(samples.some(sample=>Number(sample?.rasterId)!==product.objectId))throw new Error(`MRMS ${hours} hr returned an unexpected raster`);
  const values=samples.map(sample=>sample?.value ?? sample?.values?.[0]);
  const sampleDetails=samplePlan.points.map((point,i)=>({
    lon:point[0],lat:point[1],weight:samplePlan.weights[i],raw:Number(values[i]),inches:validMrmsRainInches(values[i])
  }));
  return {...rainStats(values,samplePlan.weights),hours,httpStatus:response.status,durationMs:Date.now()-started,requestUrl,returnedSamples:samples.length,sampleDetails,rawResponse:data,rawUnit:'millimeters',finalUnit:'inches',raster:product};
}

async function fetchMrmsRain(lat,lon){
  const periods=[12,24,48,72];
  const products=await fetchMrmsCatalog();
  const stats=await Promise.all(periods.map(h=>fetchMrmsPeriod(lat,lon,h,products[h])));
  const result={sampleRadius:RAIN_OUTER_RADIUS_MILES,sampleCount:stats[0]?.count||0,diagnostics:{ok:true,updatedAt:new Date().toISOString(),periods:stats}};
  periods.forEach((h,i)=>{
    result[`r${h}`]=stats[i].median; result[`r${h}Avg`]=stats[i].average; result[`r${h}Min`]=stats[i].min; result[`r${h}Max`]=stats[i].max;
  });
  return result;
}

async function fetchOpenMeteo(t){
  const p=new URLSearchParams({
    latitude:trailWeatherLat(t),
    longitude:trailWeatherLon(t),
    hourly:'temperature_2m,relative_humidity_2m,precipitation,cloud_cover,wind_speed_10m',
    past_hours:'18',
    forecast_hours:'48',
    temperature_unit:'fahrenheit',
    precipitation_unit:'inch',
    wind_speed_unit:'mph',
    timeformat:'unixtime',
    timezone:'GMT'
  });
  const res=await fetch('https://api.open-meteo.com/v1/forecast?'+p);
  if(!res.ok)throw Error('Current weather request failed');
  const json=await res.json();
  return json.hourly;
}
function isoDateUtc(ms){return new Date(ms).toISOString().slice(0,10)}
async function fetchHistoricalOpenMeteo(t){
  const now=Date.now();
  const p=new URLSearchParams({
    latitude:trailWeatherLat(t),
    longitude:trailWeatherLon(t),
    hourly:'precipitation',
    start_date:isoDateUtc(now-4*86400000),
    end_date:isoDateUtc(now),
    precipitation_unit:'inch',
    timeformat:'unixtime',
    timezone:'GMT'
  });
  const res=await fetch('https://historical-forecast-api.open-meteo.com/v1/forecast?'+p);
  if(!res.ok)throw Error(`Historical weather request failed (HTTP ${res.status})`);
  const json=await res.json();
  if(!json.hourly||!Array.isArray(json.hourly.time)||!Array.isArray(json.hourly.precipitation))throw Error('Historical weather response was incomplete');
  return json.hourly;
}
function rainfallFromHourly(hourly){
  const r12=sumRange(hourly.precipitation,hourly.time,12);
  const r24=sumRange(hourly.precipitation,hourly.time,24);
  const r48=sumRange(hourly.precipitation,hourly.time,48);
  const r72=sumRange(hourly.precipitation,hourly.time,72);
  return {r12,r24,r48,r72,r24Min:r24,r24Max:r24,r72Min:r72,r72Max:r72,sampleRadius:0,sampleCount:1,lastRain:lastRainLabel(hourly.precipitation,hourly.time)};
}
function mrmsLastRainLabel(rainfall,fallbackLabel){
  const r12=Number(rainfall?.r12)||0,r24=Number(rainfall?.r24)||0,r48=Number(rainfall?.r48)||0,r72=Number(rainfall?.r72)||0;
  const threshold=.005;
  if(r12>=threshold)return 'Within 12 hr';
  if(r24-r12>=threshold)return '12–24 hr ago';
  if(r48-r24>=threshold)return '1–2 days ago';
  if(r72-r48>=threshold)return '2–3 days ago';
  return fallbackLabel||'3+ days ago';
}

async function fetchTrail(t){
  const h=await fetchOpenMeteo(t);
  let historicalHourly=null;
  let historicalError='';
  try{historicalHourly=await fetchHistoricalOpenMeteo(t)}catch(error){historicalError=String(error?.message||error)}
  const liveFallback=rainfallFromHourly(h);
  const fallback=historicalHourly?rainfallFromHourly(historicalHourly):liveFallback;
  const historicalAvailable=!!historicalHourly;

  let rainfall=fallback;
  let rainSource='Open-Meteo fallback';
  let rainWarning='';
  let rainDiagnostics={ok:false,updatedAt:new Date().toISOString(),error:'Not attempted',historicalFallback:historicalAvailable?'available':('unavailable'+(historicalError?': '+historicalError:''))};
  let rainDataUncertain=false;
  const cached=readMrmsCache(t.id);
  const cacheAge=cached?Date.now()-Number(cached.savedAt):Infinity;

  try{
    const mrmsRainfall=await fetchMrmsRain(trailWeatherLat(t),trailWeatherLon(t));
    rainDiagnostics={...mrmsRainfall.diagnostics,historicalFallback:historicalAvailable?'available':('unavailable'+(historicalError?': '+historicalError:''))};
    const problem=describeMrmsProblem(mrmsRainfall,cached,fallback);
    const comparisonWarning=sourceDisagreement(mrmsRainfall,fallback);

    if(!problem){
      rainfall={...mrmsRainfall,lastRain:mrmsLastRainLabel(mrmsRainfall,fallback.lastRain)};
      rainSource='NOAA MRMS radar · distance-weighted 5-mile sampling';
      if(comparisonWarning){
        rainWarning='NOAA radar and Open-Meteo differ substantially; valid NOAA radar data is being used as the primary source. ';
        rainDiagnostics={...rainDiagnostics,comparisonWarning:'Open-Meteo differs substantially; NOAA MRMS remains selected.',fallback:{r12:fallback.r12,r24:fallback.r24,r48:fallback.r48,r72:fallback.r72}};
      }
      writeMrmsCache(t.id,rainfall);
    }else if(cached&&cacheAge<=MRMS_ZERO_HOLD_MS&&meaningfulRain(cached)){
      rainfall={...cached,lastRain:mrmsLastRainLabel(cached,cached.lastRain||fallback.lastRain)};
      rainSource='Last trustworthy NOAA MRMS reading';
      rainDataUncertain=true;
      const ageMinutes=Math.max(1,Math.round(cacheAge/60000));
      const ageLabel=ageMinutes<60?ageMinutes+' min':Math.round(ageMinutes/60)+' hr';
      rainWarning=`${problem} Holding the last trustworthy NOAA reading from ${ageLabel} ago. `;
      rainDiagnostics={...rainDiagnostics,degraded:true,degradedReason:problem,safeguardSource:'Last trustworthy NOAA MRMS reading',cachedAt:new Date(Number(cached.savedAt)).toISOString(),candidate:{r12:mrmsRainfall.r12,r24:mrmsRainfall.r24,r48:mrmsRainfall.r48,r72:mrmsRainfall.r72},fallback:{r12:fallback.r12,r24:fallback.r24,r48:fallback.r48,r72:fallback.r72}};
    }else if(historicalAvailable&&!rainfallOrderingInvalid(fallback)){
      rainfall={...fallback};
      rainSource=historicalAvailable?'Open-Meteo historical forecast':'Open-Meteo live fallback';
      rainDataUncertain=true;
      rainWarning=`${problem} No trustworthy NOAA history was available, so ${historicalAvailable?'Open-Meteo historical hourly precipitation':'Open-Meteo live fallback'} is being used. `;
      rainDiagnostics={...rainDiagnostics,degraded:true,degradedReason:problem,safeguardSource:historicalAvailable?'Open-Meteo historical forecast':'Open-Meteo live fallback',candidate:{r12:mrmsRainfall.r12,r24:mrmsRainfall.r24,r48:mrmsRainfall.r48,r72:mrmsRainfall.r72},fallback:{r12:fallback.r12,r24:fallback.r24,r48:fallback.r48,r72:fallback.r72}};
    }else{
      rainDataUncertain=true;
      rainfall={...fallback};
      rainSource='Untrusted precipitation data';
      rainWarning=`${problem} Rainfall cannot be verified; rideability is withheld until data recovers. `;
      rainDiagnostics={...rainDiagnostics,degraded:true,degradedReason:problem,safeguardSource:'No source accepted',candidate:{r12:mrmsRainfall.r12,r24:mrmsRainfall.r24,r48:mrmsRainfall.r48,r72:mrmsRainfall.r72},fallback:{r12:fallback.r12,r24:fallback.r24,r48:fallback.r48,r72:fallback.r72}};
    }
  }catch(error){
    rainDiagnostics={ok:false,updatedAt:new Date().toISOString(),error:String(error?.message||error)};
    if(cached&&cacheAge<=MRMS_ZERO_HOLD_MS&&meaningfulRain(cached)){
      rainfall={...cached,lastRain:mrmsLastRainLabel(cached,cached.lastRain||fallback.lastRain)};
      rainSource='Last trustworthy NOAA MRMS reading';
      rainDataUncertain=true;
      rainWarning='NOAA radar was unavailable; holding the last trustworthy NOAA reading. ';
    }else if(meaningfulRain(fallback)){
      rainfall={...fallback};
      rainSource=historicalAvailable?'Open-Meteo historical forecast':'Open-Meteo live fallback';
      rainDataUncertain=true;
      rainWarning=historicalAvailable?'NOAA radar was unavailable; using Open-Meteo historical hourly precipitation. ':'NOAA radar was unavailable; using Open-Meteo live fallback cautiously. ';
    }else{
      rainDataUncertain=true;
      rainWarning='Rainfall data could not be verified. ';
    }
    console.warn('MRMS fallback for',t.name,error);
  }

  const {r12,r24,r48,r72}=rainfall;
  const hum=avgRange(h.relative_humidity_2m,h.time,12);
  const wind=avgRange(h.wind_speed_10m,h.time,12);
  const cloud=avgRange(h.cloud_cover,h.time,12);
  const temps=h.temperature_2m.filter((_,i)=>{
    const x=timeMs(h.time[i]);
    return x<=Date.now()&&x>=Date.now()-43200000;
  });
  const temp=temps.length?Math.min(...temps):50;
  const currentTemperature=h.temperature_2m.reduce((latest,value,i)=>{
    const timestamp=timeMs(h.time[i]);
    return timestamp<=Date.now()&&timestamp>latest.timestamp?{timestamp,value:Number(value)}:latest;
  },{timestamp:-Infinity,value:NaN}).value;
  const sensitivity=Number(t.sensitivity||1),canopy=Number(t.canopy||.82);
  const soilProfile=t.soilProfile||soilProfiles[t.id]||null;
  const researchedSoilFactor=soilProfile&&soilProfile.confidence!=='Low'?soilProfile.soilDryingFactor:1;
  const engineeredDryingFactor=engineeredDryingFactors[t.id]||1;
  const effectiveDrying=researchedSoilFactor*engineeredDryingFactor;
  const mm12=r12*25.4, mm24=r24*25.4, mm48=r48*25.4, mm72=r72*25.4;
  const rain0to12=mm12;
  const rain12to24=Math.max(0,mm24-mm12);
  const rain24to48=Math.max(0,mm48-mm24);
  const rain48to72=Math.max(0,mm72-mm48);
  const rain=(rain0to12*5+rain12to24*2.4+rain24to48*.8+rain48to72*.25)*sensitivity;
  const lingeringMoisture=rain0to12+rain12to24*.75+rain24to48*.4+rain48to72*.15;
  const sat=Math.min(22,lingeringMoisture*.75*sensitivity);
  const hp=Math.max(0,(hum-68)*.28)*canopy;
  const cp=Math.max(0,(cloud-55)*.08)*canopy;
  const dry=(Math.max(0,wind-3)*.55+Math.max(0,temp-55)*.16)*effectiveDrying;
  const cold=temp<38?(38-temp)*1.05:0;
  const score=Math.max(0,Math.min(100,rain+sat+hp+cp+cold-dry));
  const lastRain=rainDataUncertain&&rainSource==='Untrusted precipitation data'?'Uncertain':(rainfall.lastRain||fallback.lastRain);
  const computedRideability=Math.round(100-score);
  const computedStatus=statusFrom(score,temp);
  const computedReady=readyEstimate(score,effectiveDrying);

  return{
    ...t,
    rain12:r12,rain24:r24,rain48:r48,rain72:r72,lastRain,
    rain24Min:rainfall.r24Min ?? r24,rain24Max:rainfall.r24Max ?? r24,
    rain72Min:rainfall.r72Min ?? r72,rain72Max:rainfall.r72Max ?? r72,
    rainSampleRadius:rainfall.sampleRadius||0,rainSampleCount:rainfall.sampleCount||1,
    rainSource,rainWarning,rainDiagnostics,rainDataUncertain,
    humidity:hum,wind,temperature:Number.isFinite(currentTemperature)?currentTemperature:temp,tempMin:temp,score,
    soilProfile,effectiveDrying,engineeredDryingFactor,
    rideability:rainSource==='Untrusted precipitation data'?null:computedRideability,
    status:rainSource==='Untrusted precipitation data'?{key:'yellow',label:'Rain data unavailable'}:computedStatus,
    ready:rainSource==='Untrusted precipitation data'?'Check official status':computedReady,
    distance:userLocation?haversine(userLocation.lat,userLocation.lon,t.lat,t.lon):null
  };
}
function escapeHtml(value){return String(value??'').replace(/[&<>"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch]))}
function weatherSummary(r){
  if(r.weatherError)return 'Weather unavailable.';
  return `Temperature ${Math.round(r.temperature)}°F, humidity ${Math.round(r.humidity)}%, wind ${Math.round(r.wind)} mph.`;
}
function sampleHeatmapSvg(period){
  const points=Array.isArray(period?.sampleDetails)?period.sampleDetails:[];
  if(!points.length)return '<p class="diag-muted">No sample-point data available.</p>';
  const usable=points.filter(p=>Number.isFinite(p.inches));
  const max=Math.max(...usable.map(p=>p.inches),0.01),min=Math.min(...usable.map(p=>p.inches),0);
  const lats=points.map(p=>p.lat),lons=points.map(p=>p.lon);
  const minLat=Math.min(...lats),maxLat=Math.max(...lats),minLon=Math.min(...lons),maxLon=Math.max(...lons);
  const px=p=>20+((p.lon-minLon)/(maxLon-minLon||1))*220;
  const py=p=>240-(20+((p.lat-minLat)/(maxLat-minLat||1))*220);
  const circles=points.map((p,i)=>{
    const ratio=Number.isFinite(p.inches)?(p.inches-min)/(max-min||1):0;
    const light=88-ratio*46;
    const fill=Number.isFinite(p.inches)?`hsl(205 78% ${light}%)`:'#bbb';
    const radius=i===0?7:(i<9?5.5:4.5);
    const label=Number.isFinite(p.inches)?`${p.inches.toFixed(2)} in`:'No data';
    return `<circle cx="${px(p).toFixed(1)}" cy="${py(p).toFixed(1)}" r="${radius}" fill="${fill}" stroke="#173f2a" stroke-width="1"><title>Sample ${i+1}: ${label}; weight ${(p.weight*100).toFixed(1)}%</title></circle>`;
  }).join('');
  return `<div class="sample-map"><svg viewBox="0 0 260 260" role="img" aria-label="Rainfall sampling heat map">${circles}<circle cx="130" cy="130" r="2" fill="#fff" stroke="#173f2a"/></svg><div><b>24-hour sample map</b><span>Darker points received more rain. Center and inner-ring samples carry 70% of the result; the outer ring carries 30%.</span><span>Range: ${formatInches(min)}–${formatInches(max)}</span></div></div>`;
}
function developerDetails(d){
  if(!developerMode||!d.ok)return '';
  const p24=(d.periods||[]).find(p=>p.hours===24)||(d.periods||[])[0];
  if(!p24)return '';
  const raw=JSON.stringify(p24.rawResponse,null,2);
  return `<div class="developer-details"><h4>Developer details</h4>${sampleHeatmapSvg(p24)}<div class="dev-stats"><span><b>Weighted median</b>${formatInches(p24.median)}</span><span><b>Weighted average</b>${formatInches(p24.average)}</span><span><b>Minimum</b>${formatInches(p24.min)}</span><span><b>Maximum</b>${formatInches(p24.max)}</span></div><details><summary>Exact NOAA request URL</summary><pre>${escapeHtml(p24.requestUrl)}</pre></details><details><summary>Raw NOAA JSON response</summary><pre>${escapeHtml(raw)}</pre></details><details><summary>All 25 sample points</summary><div class="diag-table-wrap"><table><thead><tr><th>#</th><th>Latitude</th><th>Longitude</th><th>Weight</th><th>Raw</th><th>Inches</th></tr></thead><tbody>${(p24.sampleDetails||[]).map((p,i)=>`<tr><td>${i+1}</td><td>${p.lat.toFixed(5)}</td><td>${p.lon.toFixed(5)}</td><td>${(p.weight*100).toFixed(1)}%</td><td>${Number.isFinite(p.raw)?p.raw.toFixed(3):'No data'}</td><td>${Number.isFinite(p.inches)?p.inches.toFixed(3):'No data'}</td></tr>`).join('')}</tbody></table></div></details></div>`;
}
function rainfallDiagnosticsPanel(r){
  if(!developerMode)return '';
  const d=r.rainDiagnostics||{};
  const updated=d.updatedAt?new Date(d.updatedAt).toLocaleString():'Unknown';
  const coords=`${trailWeatherLat(r).toFixed(5)}, ${trailWeatherLon(r).toFixed(5)}`;
  if(!d.ok){
    return `<details class="rain-diagnostics"><summary>Rainfall diagnostics</summary><div class="diag-status diag-error">NOAA MRMS failed — Open-Meteo fallback is displayed</div><dl><dt>Weather coordinates</dt><dd>${coords}</dd><dt>Error</dt><dd>${escapeHtml(d.error||'Unknown error')}</dd><dt>Attempted</dt><dd>${updated}</dd><dt>Fallback 24 hr</dt><dd>${formatInches(r.rain24)}</dd><dt>Fallback 72 hr</dt><dd>${formatInches(r.rain72)}</dd></dl></details>`;
  }
  const rows=(d.periods||[]).map(p=>`<tr><td>${p.hours} hr</td><td>${p.httpStatus}</td><td>${p.returnedSamples}/${p.count}</td><td>${Number(p.rawMin).toFixed(3)}–${Number(p.rawMax).toFixed(3)}</td><td>${formatInches(p.median)}</td><td>${p.durationMs} ms</td></tr>`).join('');
  const diagClass=d.degraded?'diag-warning':'diag-ok';
  const diagText=d.degraded?'NOAA responded, but precipitation data was rejected':'NOAA MRMS data accepted';
  const safeguard=d.degraded?`<dt>Safeguard</dt><dd>${escapeHtml(d.degradedReason||'Suspicious all-zero precipitation field detected.')} ${d.safeguardSource?`Using ${escapeHtml(d.safeguardSource)}.`:''}</dd>`:'';
  const comparison=d.comparisonWarning?`<dt>Source comparison</dt><dd>${escapeHtml(d.comparisonWarning)}</dd>`:'';
  return `<details class="rain-diagnostics"><summary>Rainfall diagnostics</summary><div class="diag-status ${diagClass}">${diagText}</div><dl><dt>Weather coordinates</dt><dd>${coords}</dd><dt>Updated</dt><dd>${updated}</dd><dt>Conversion</dt><dd>Raw raster value ÷ 25.4 = inches</dd>${safeguard}${comparison}<dt>Historical fallback</dt><dd>${escapeHtml(d.historicalFallback||'not checked')}</dd><dt>Developer mode</dt><dd>${developerMode?'On — expanded technical data is available below':'Off'}</dd></dl><div class="diag-table-wrap"><table><thead><tr><th>Period</th><th>HTTP</th><th>Samples</th><th>Raw range</th><th>Median used</th><th>Time</th></tr></thead><tbody>${rows}</tbody></table></div>${developerDetails(d)}</details>`;
}

function currentDistance(trail){
  if(!userLocation) return null;
  const lat=Number(trail.lat),lon=Number(trail.lon);
  if(!Number.isFinite(lat)||!Number.isFinite(lon)) return null;
  return haversine(userLocation.lat,userLocation.lon,lat,lon);
}
function sortedFiltered(){
  const q=document.getElementById('search').value.toLowerCase();
  const f=document.getElementById('statusFilter').value;
  const state=document.getElementById('stateFilter').value;
  const s=document.getElementById('sort').value;

  let a=results
    .map(r=>({...r,distance:currentDistance(r)}))
    .filter(r=>(state==='all'||r.stateCode===state)&&(f==='all'||r.status.key===f)&&([r.name,r.region,r.stateCode||'',r.aliases||''].join(' ').toLowerCase().includes(q)));

  if(s==='distance'){
    a.sort((x,y)=>{
      const xd=Number.isFinite(x.distance)?x.distance:Infinity;
      const yd=Number.isFinite(y.distance)?y.distance:Infinity;
      return xd-yd || x.name.localeCompare(y.name);
    });
  }else if(s==='rideability'){
    a.sort((x,y)=>(Number.isFinite(y.rideability)?y.rideability:-1)-(Number.isFinite(x.rideability)?x.rideability:-1));
  }else if(s==='recent-report'){
    a.sort((x,y)=>{
      const xt=new Date(communityReports.get(x.id)?.latest_report_at||0).getTime()||0;
      const yt=new Date(communityReports.get(y.id)?.latest_report_at||0).getTime()||0;
      return yt-xt || x.name.localeCompare(y.name);
    });
  }else{
    a.sort((x,y)=>x.name.localeCompare(y.name));
  }
  return a;
}
function reportAge(report){
 if(!report?.latest_report_at)return '';
 const hours=Math.max(0,Math.floor((Date.now()-new Date(report.latest_report_at).getTime())/3600000));
 if(hours<1)return 'now';
 if(hours<48)return `${hours} hr${hours===1?'':'s'} ago`;
 const days=Math.max(2,Math.floor(hours/24));
 return `${days} day${days===1?'':'s'} ago`;
}
function communityReportHeading(id){
 const report=communityReports.get(id);
 const total=Number(report?.total_reports)||0;
 if(!total)return {title:'Community Reports',summary:'Be the first to report conditions.',alert:''};
 const counts=report.recommendations||{};
 const labels=[
  ['Absolutely','Absolutely'],
  ['Yes — a few wet spots','A few wet spots'],
  ['Rideable — expect mud','Expect mud'],
  ["I'd wait","I'd wait"],
  ['Closed','Closed']
 ];
 const summary=labels
  .filter(([value])=>Number(counts[value]))
  .map(([value,label])=>`<span><strong>${label}</strong> (${Number(counts[value])})</span>`)
  .join(' · ');
 const observationCounts=report.observations||{};
 const notableObservations=[
  ['Fallen trees',(count)=>count===1?'Fallen tree':'Fallen trees'],
  ['Trail maintenance',()=> 'Trail maintenance'],
  ['Creek crossings high',(count)=>count===1?'Creek crossing high':'Creek crossings high']
 ];
 const alert=notableObservations
  .filter(([value])=>Number(observationCounts[value]))
  .map(([value,label])=>`<strong>${label(Number(observationCounts[value]))}</strong> (${Number(observationCounts[value])})`)
  .slice(0,2)
  .join(' · ');
 const age=reportAge(report);
 return {title:`Community Reports${age?` — ${age}`:''}`,summary:summary||`${total} recent report${total===1?'':'s'}`,alert};
}
function selectTrail(id,{moveMap=true,scrollCard=false}={}){
  const trail=results.find(r=>r.id===id);
  if(!trail)return;
  selectedTrailId=id;

  document.querySelectorAll('.trail.map-selected').forEach(card=>card.classList.remove('map-selected'));
  const card=document.getElementById(`trail-card-${id}`);
  if(card){
    card.classList.add('map-selected');
    if(scrollCard)card.scrollIntoView({behavior:'smooth',block:'center'});
  }

  markers.forEach(marker=>{
    const selected=marker.trailId===id;
    if(marker.setStyle)marker.setStyle({radius:selected?11:8,weight:selected?4:2});
    if(selected)marker.bringToFront?.();
  });

  const lat=trailWeatherLat(trail),lon=trailWeatherLon(trail);
  if(moveMap&&Number.isFinite(lat)&&Number.isFinite(lon)){
    map.flyTo([lat,lon],Math.max(map.getZoom(),12),{duration:.65});
  }
  const marker=markers.find(m=>m.trailId===id);
  if(marker)marker.openPopup();
}

function render(){
  if(userLocation){
    results=results.map(r=>({...r,distance:currentDistance(r)}));
  }
  const arr=sortedFiltered();document.getElementById('trailList').innerHTML=arr.length?arr.map(r=>{const vote=getVotes(r.id),communityHeading=communityReportHeading(r.id);return `<article class="trail" id="trail-card-${r.id}" data-trail-card="${r.id}"><div class="trail-top"><div><h2><button type="button" class="trail-name-btn" data-select-trail="${r.id}" aria-label="Show ${r.name} on map">${r.name}</button></h2><div class="sub">${r.region} · ${r.distance==null?'Distance unavailable':r.distance.toFixed(1)+' mi away'}</div></div><span class="badge ${r.status.key}">${r.status.label}</span></div><div class="facts"><div class="fact"><b>${r.lastRain||'Unknown'}</b><span>last rain</span></div><div class="fact"><b>${formatInches(r.rain72)}</b><span>total rain</span><small>last 72 hr</small></div>${readyFactHtml(r.ready)}</div><div class="ride-row"><span>Rideability</span><span>${r.rideability==null?'Unavailable':r.rideability+'%'}</span></div><div class="bar"><div style="width:${r.rideability==null?0:r.rideability}%;background:${r.rideability==null?'#a0a8a3':rideColor(r.rideability)}"></div></div><div class="explain">${weatherSummary(r)}</div>${rainfallDiagnosticsPanel(r)}<details class="trail-links"><summary>Trail information</summary>${trailCharacteristics(r)}<div class="links">${r.official?`<a href="${r.official}" target="_blank">Official status</a>`:''}${r.mtbProject?`<a href="${r.mtbProject}" target="_blank">MTB Project</a>`:''}${r.trailforksUrl?`<a href="${r.trailforksUrl}" target="_blank">Trailforks</a>`:''}<a href="https://www.google.com/maps/search/?api=1&query=${r.lat},${r.lon}" target="_blank">Directions</a></div></details><div class="community">
<button type="button" class="report-toggle" data-report-toggle="${r.id}" aria-expanded="false">
  <span><b>${communityHeading.title}</b><small class="community-summary">${communityHeading.summary}</small>${communityHeading.alert?`<small class="community-alert">${communityHeading.alert}</small>`:''}</span>
  <span class="chev">⌄</span>
</button>
<div class="report-panel" data-report-panel="${r.id}">
  <div class="community-title">Would you ride it?</div>
  <div class="vote-buttons" data-id="${r.id}" role="radiogroup" aria-label="Overall ride recommendation">
  ${[
  ['Absolutely','Great conditions. Worth the drive.'],
  ['Yes — a few wet spots','Rideable with a few puddles or soft areas.'],
  ['Rideable — expect mud','Rideable, but expect cleanup afterward.'],
  ["I'd wait",'Too many wet or soft sections today.'],
  ['Closed','Officially closed or should not be ridden.']
  ].map(([v,tip])=>`<button type="button" data-vote="${v}" role="radio" aria-checked="${vote&&vote.value===v?'true':'false'}" title="${tip}" class="${vote&&vote.value===v?'selected':''}">${v==='Yes — a few wet spots'?'A few wet spots':v==='Rideable — expect mud'?'Expect mud':v}</button>`).join('')}
  </div>
  <div class="observation-wrap" data-observe-id="${r.id}">
    <div class="observation-label">What did you notice?</div>
    <div class="observation-buttons">
    ${['A few puddles','Frequent puddles','Tires picked up mud','Soft sections','Creek crossings high','Fallen trees','Trail maintenance','Dusty','Perfect traction'].map(o=>`<button type="button" data-observation="${o}" aria-pressed="${vote&&Array.isArray(vote.observations)&&vote.observations.includes(o)?'true':'false'}" class="${vote&&Array.isArray(vote.observations)&&vote.observations.includes(o)?'selected':''}">${o}</button>`).join('')}
    </div>
  </div>
  ${vote?`<div class="community-result"><span>Saved and shared</span><button type="button" class="remove-report" data-remove-report="${r.id}">Remove my report</button></div>`:''}
</div>
</div></article>`}).join(''):'<div class="loading">No trails match.</div>';
document.querySelectorAll('[data-select-trail]').forEach(btn=>btn.addEventListener('click',()=>selectTrail(btn.dataset.selectTrail,{moveMap:true,scrollCard:false})));
document.querySelectorAll('[data-vote]').forEach(b=>b.addEventListener('click',()=>saveVote(b.closest('[data-id]').dataset.id,b.dataset.vote)));
document.querySelectorAll('[data-observation]').forEach(b=>b.addEventListener('click',()=>toggleObservation(b.closest('[data-observe-id]').dataset.observeId,b.dataset.observation)));
document.querySelectorAll('[data-remove-report]').forEach(b=>b.addEventListener('click',()=>removeVote(b.dataset.removeReport)));
document.querySelectorAll('[data-report-toggle]').forEach(btn=>btn.addEventListener('click',()=>{
  const id=btn.dataset.reportToggle;
  const panel=document.querySelector(`[data-report-panel="${id}"]`);
  const open=!panel.classList.contains('open');
  panel.classList.toggle('open',open);
  btn.setAttribute('aria-expanded',String(open));
  if(open)syncMyReport(id);
}));
markers.forEach(m=>map.removeLayer(m));markers=[];
arr.forEach(r=>{
  const m=L.circleMarker([trailWeatherLat(r),trailWeatherLon(r)],{
    radius:8,
    weight:2,
    color:'#fff',
    fillColor:rideColor(r.rideability),
    fillOpacity:.95
  })
  .bindTooltip(`<b>${r.name}</b><br>${r.rideability}% rideability`,{
    direction:'top',
    offset:[0,-8],
    opacity:.96,
    sticky:true
  })
  .bindPopup(`<b>${r.name}</b><br>${r.rideability}% rideability${r.distance!=null?'<br>'+r.distance.toFixed(1)+' miles away':''}`)
  .addTo(map);

  m.trailId=r.id;
  m.on('click',()=>selectTrail(r.id,{moveMap:false,scrollCard:true}));
  markers.push(m);
});
if(selectedTrailId&&arr.some(r=>r.id===selectedTrailId))selectTrail(selectedTrailId,{moveMap:false,scrollCard:false});
const near=[...results].filter(r=>r.distance!=null).sort((a,b)=>a.distance-b.distance)[0],locateButton=document.getElementById('locate');locateButton.textContent=near?`Near: ${near.name}`:'Find trails near me';locateButton.title=near?`Nearest trail: ${near.name}`:'Use my location to sort trails by distance';setTimeout(()=>map.invalidateSize(),100)}
async function load(focusTrail=null){
  document.getElementById('trailList').innerHTML='<div class="loading">Loading live weather for Ohio trails…</div>';
  await loadSharedData();
  const trails=catalog();
  const settled=await Promise.allSettled(trails.map(fetchTrail));

  results=settled.map((item,index)=>{
    if(item.status==='fulfilled') return item.value;
    const t=trails[index];
    return {
      ...t,
      rain12:0,
      lastRain:'Unknown',
      rain24:0,
      rain48:0,
      rain72:0,
      rain24Min:0, rain24Max:0, rain72Min:0, rain72Max:0, rainSampleRadius:0, rainSampleCount:0,
      rainSource:'Unavailable',
      rainWarning:'Rain data unavailable. ',
      humidity:0,
      wind:0,
      tempMin:50,
      score:0,
      rideability:null,
      status:{key:'yellow',label:'Weather unavailable'},
      ready:'Check official status',
      distance:userLocation?haversine(userLocation.lat,userLocation.lon,t.lat,t.lon):null,
      weatherError:true
    };
  });

  document.getElementById('updated').textContent=new Date().toLocaleTimeString([],{hour:'numeric',minute:'2-digit'});
  render();
  renderAdmin();

  if(focusTrail)selectTrail(focusTrail.id,{moveMap:true,scrollCard:false});
}
function locate({silent=false}={}){const b=document.getElementById('locate');if(!navigator.geolocation){if(!silent)alert('Location is not supported in this browser.');return}b.disabled=true;b.textContent='Locating…';navigator.geolocation.getCurrentPosition(pos=>{userLocation={lat:pos.coords.latitude,lon:pos.coords.longitude};results=results.map(r=>({...r,distance:haversine(userLocation.lat,userLocation.lon,r.lat,r.lon)}));if(userMarker)map.removeLayer(userMarker);userMarker=L.circleMarker([userLocation.lat,userLocation.lon],{radius:8,color:'#173f2a',fillColor:'#fff',fillOpacity:1,weight:3}).bindPopup('Your location').addTo(map);map.setView([userLocation.lat,userLocation.lon],8);b.disabled=false;document.getElementById('sort').value='distance';render()},()=>{b.disabled=false;b.textContent='Find trails near me';if(!silent)alert('Location was not shared.')})}
async function reuseGrantedLocation(){
 if(!navigator.permissions||!navigator.geolocation)return;
 try{
  const permission=await navigator.permissions.query({name:'geolocation'});
  if(permission.state==='granted')locate({silent:true});
 }catch(error){
  // Some browsers support geolocation but not permission-state queries.
 }
}
function slug(s){return s.toLowerCase().trim().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')+'-'+Date.now().toString(36)}
function clearExistingSelectOptions(){
 document.querySelectorAll('option[data-existing-value="true"]').forEach(option=>option.remove());
}
function setNearestSelectValue(selectId,value,fallback){
 const select=document.getElementById(selectId);
 const target=Number(value);
 const numericOptions=[...select.options].filter(option=>Number.isFinite(Number(option.value)));
 if(!Number.isFinite(target)||!numericOptions.length){select.value=String(fallback);return;}
 const nearest=numericOptions.reduce((best,option)=>Math.abs(Number(option.value)-target)<Math.abs(Number(best.value)-target)?option:best,numericOptions[0]);
 select.value=nearest.value;
}
function clearPickState(removeMarker=true){
 pickMode=false;
 document.body.classList.remove('map-picking');
 document.getElementById('pickBanner').classList.remove('show');
 if(removeMarker&&pickMarker){map.removeLayer(pickMarker);pickMarker=null}
}
function setFormMode(editing,name=''){
 document.getElementById('trailDialogTitle').textContent=editing?`Edit ${name||'trail'}`:'Manage trail catalog';
 document.getElementById('saveTrailButton').textContent=editing?'Save changes':'Save trail';
}
function resetForm(){
 clearExistingSelectOptions();
 document.getElementById('trailForm').reset();
 document.getElementById('editingId').value='';
 document.getElementById('lat').value='';
 document.getElementById('lon').value='';
 document.getElementById('weatherLat').value='';
 document.getElementById('weatherLon').value='';
 document.getElementById('countryCode').value='US';
 document.getElementById('stateCode').value='OH';
 clearPickState(true);
 setFormMode(false);
 updateLocationStatus();
}
function formTrail(){const existing=document.getElementById('editingId').value;return{id:existing||slug(document.getElementById('trailName').value),name:document.getElementById('trailName').value.trim(),aliases:document.getElementById('aliases').value.trim(),listingType:document.getElementById('listingType').value,countryCode:document.getElementById('countryCode').value.trim().toUpperCase(),stateCode:document.getElementById('stateCode').value.trim().toUpperCase(),region:document.getElementById('region').value.trim(),lat:Number(document.getElementById('lat').value),lon:Number(document.getElementById('lon').value),weatherLat:Number(document.getElementById('weatherLat').value),weatherLon:Number(document.getElementById('weatherLon').value),organization:document.getElementById('organization').value.trim(),recordStatus:document.getElementById('recordStatus').value,official:document.getElementById('officialUrl').value.trim(),mtbProject:document.getElementById('mtbUrl').value.trim(),trailforksUrl:document.getElementById('trailforksUrl').value.trim(),sensitivity:Number(document.getElementById('sensitivity').value),canopy:Number(document.getElementById('canopy').value),note:document.getElementById('notes').value.trim(),dateVerified:new Date().toISOString().slice(0,10)}}
async function saveTrail(e){
  e.preventDefault();
  const button=document.getElementById('saveTrailButton');
  const originalText=button.textContent;
  const t=formTrail();

  if(!t.name){alert('Please enter a trail name.');document.getElementById('trailName').focus();return;}
  if(!/^[A-Z]{2}$/.test(t.countryCode)||!/^[A-Z]{2}$/.test(t.stateCode)){
    alert('Please enter two-letter country and state codes, such as US and OH.');return;
  }
  if(!Number.isFinite(t.lat)||!Number.isFinite(t.lon)||document.getElementById('lat').value===''||document.getElementById('lon').value===''){
    alert('Please choose the access / parking location before saving.');return;
  }
  if(!Number.isFinite(t.weatherLat)||!Number.isFinite(t.weatherLon)||document.getElementById('weatherLat').value===''||document.getElementById('weatherLon').value===''){
    alert('Please choose the trail-system weather center before saving.');return;
  }

  button.disabled=true;
  button.textContent='Checking soil…';
  try{
    const base=baseTrails.find(x=>x.id===t.id);
    const existingRecord=allManagedTrails().find(x=>x.id===t.id)||{};
    const existingSoilProfile=existingRecord.soilProfile||soilProfiles[t.id]||null;
    let soilProfile=existingSoilProfile;
    if(!profileMatchesTrailLocation(existingSoilProfile,t,existingRecord)){
      soilProfile=await researchSoilProfile(t.lat,t.lon);
    }else if(soilProfile&&!Number.isFinite(Number(soilProfile.soilLat))){
      soilProfile={...soilProfile,soilLat:t.lat,soilLon:t.lon};
    }
    button.textContent='Publishing…';
    const savedTrail={...existingRecord,...t,id:t.id,soilProfile};
    delete savedTrail.source;
    delete savedTrail.surface;
    delete savedTrail.surfaces;
    delete savedTrail.drying;
    delete savedTrail.drainage;

    await adminRpc('admin_upsert_ohio_trail',{p_data:savedTrail});
    if(sharedTrails){
      const sharedIndex=sharedTrails.findIndex(x=>x.id===savedTrail.id);
      if(sharedIndex>=0)sharedTrails[sharedIndex]=savedTrail;else sharedTrails.push(savedTrail);
    }

    if(base){
      // Store only a complete, merged record so older built-in metadata is not lost.
      builtInOverrides[t.id]=savedTrail;
      localStorage.setItem('builtInOverrides',JSON.stringify(builtInOverrides));
    }else{
      const i=customTrails.findIndex(x=>x.id===t.id);
      if(i>=0) customTrails[i]=savedTrail; else customTrails.push(savedTrail);
      localStorage.setItem('customTrails',JSON.stringify(customTrails));
    }
    hiddenTrailIds=hiddenTrailIds.filter(id=>id!==t.id);
    deletedTrailIds=deletedTrailIds.filter(id=>id!==t.id);
    localStorage.setItem('hiddenTrailIds',JSON.stringify(hiddenTrailIds));
    localStorage.setItem('deletedTrailIds',JSON.stringify(deletedTrailIds));

    // Update the visible record immediately instead of waiting for every Ohio
    // trail's weather request to finish before the edited card changes.
    const previousResult=results.find(x=>x.id===savedTrail.id);
    if(previousResult){
      results=results.map(x=>x.id===savedTrail.id?{...x,...savedTrail}:x);
      render();
    }

    clearPickState(true);
    const dialog=document.getElementById('trailDialog');
    if(dialog.open)dialog.close();
    resetForm();

    // Refresh this trail's weather and model values independently. A weather
    // failure must not undo or hide the catalog edit that was just saved.
    try{
      const refreshed=await fetchTrail(savedTrail);
      results=results.map(x=>x.id===savedTrail.id?refreshed:x);
      if(!results.some(x=>x.id===savedTrail.id))results.push(refreshed);
      render();
      map.setView([trailWeatherLat(savedTrail),trailWeatherLon(savedTrail)],Math.max(map.getZoom(),11));
      const marker=markers.find(m=>m.trailId===savedTrail.id);
      if(marker)marker.openPopup();
    }catch(weatherError){
      console.warn('Trail saved, but weather refresh failed',weatherError);
      if(!previousResult){
        results.push({...savedTrail,rain12:0,lastRain:'Unknown',rain24:0,rain48:0,rain72:0,rain24Min:0,rain24Max:0,rain72Min:0,rain72Max:0,rainSampleRadius:0,rainSampleCount:0,rainSource:'Unavailable',rainWarning:'Rain data unavailable. ',humidity:0,wind:0,tempMin:50,score:0,rideability:null,status:{key:'yellow',label:'Weather unavailable'},ready:'Check official status',weatherError:true});
        render();
      }
    }
    renderAdmin();
    alert(`${savedTrail.name} was published for all users.`);
  }catch(error){
    console.error('Could not save trail',error);
    const soilFailure=button.textContent==='Checking soil…';
    alert(soilFailure?'The trail was not published because its USDA soil profile could not be verified. Your form is still open so you can try again.':'The trail could not be saved. Your form has been left intact so you can try again.');
  }finally{
    button.disabled=false;
    button.textContent=originalText;
  }
}
function setSelectTextValue(selectId,value,fallback){
 const select=document.getElementById(selectId);
 const wanted=value||fallback;
 const existing=[...select.options].find(option=>option.value===wanted);
 if(existing){select.value=wanted;return;}
 const option=document.createElement('option');
 option.value=wanted;
 option.textContent=`${wanted} — existing value`;
 option.dataset.existingValue='true';
 select.appendChild(option);
 select.value=wanted;
}
function populateTrailForm(t){
 clearPickState(true);
 clearExistingSelectOptions();
 document.getElementById('trailForm').reset();
 setFormMode(true,t.name||'trail');
 document.getElementById('editingId').value=t.id||'';
 document.getElementById('trailName').value=t.name||'';
 document.getElementById('aliases').value=Array.isArray(t.aliases)?t.aliases.join(', '):(t.aliases||'');
 setSelectTextValue('listingType',t.listingType,'Trail system');
 document.getElementById('countryCode').value=t.countryCode||'US';
 document.getElementById('stateCode').value=t.stateCode||(t.id==='mountwood'?'WV':'OH');
 document.getElementById('region').value=t.region||'';
 document.getElementById('lat').value=t.lat??'';
 document.getElementById('lon').value=t.lon??'';
 document.getElementById('weatherLat').value=trailWeatherLat(t)??'';
 document.getElementById('weatherLon').value=trailWeatherLon(t)??'';
 document.getElementById('organization').value=t.organization||'';
 document.getElementById('recordStatus').value=['Active','Temporarily closed','Seasonally closed','Permanently closed'].includes(t.recordStatus)?t.recordStatus:'Active';
 document.getElementById('officialUrl').value=t.official||t.officialUrl||'';
 document.getElementById('mtbUrl').value=t.mtbProject||t.mtbUrl||'';
 document.getElementById('trailforksUrl').value=t.trailforksUrl||t.trailforks||'';
 setNearestSelectValue('sensitivity',t.sensitivity??1,1);
 setNearestSelectValue('canopy',t.canopy??.82,.82);
 document.getElementById('notes').value=t.note||t.notes||'';
 updateLocationStatus();
 if(Number.isFinite(Number(t.lat))&&Number.isFinite(Number(t.lon))){
   pickMarker=L.marker([trailWeatherLat(t),trailWeatherLon(t)]).addTo(map).bindPopup((t.name||'Trail')+' weather center');
 }
 const dialog=document.getElementById('trailDialog');
 if(!dialog.open)dialog.showModal();
 dialog.scrollTop=0;
 document.querySelector('.modal-body')?.scrollTo({top:0,behavior:'auto'});
}
function editTrail(id){const t=allManagedTrails().find(x=>x.id===id);if(t)populateTrailForm(t)}
async function setHidden(id,hidden){
 try{
  await adminRpc('admin_set_ohio_trail_status',{p_trail_id:id,p_status:hidden?'Hidden':'Active'});
  hiddenTrailIds=hiddenTrailIds.filter(x=>x!==id);
  localStorage.setItem('hiddenTrailIds',JSON.stringify(hiddenTrailIds));
  await load();
 }catch(error){console.error(error);alert('The shared trail visibility could not be changed.')}
}
async function deleteTrail(id){
 const name=(allManagedTrails().find(t=>t.id===id)||{}).name||'this trail';
 if(!confirm(`Archive ${name} for every user? You can restore it later from Manage trails.`))return;
 try{
  await adminRpc('admin_set_ohio_trail_status',{p_trail_id:id,p_status:'Archived'});
  hiddenTrailIds=hiddenTrailIds.filter(x=>x!==id);
  deletedTrailIds=deletedTrailIds.filter(x=>x!==id);
  localStorage.setItem('hiddenTrailIds',JSON.stringify(hiddenTrailIds));
  localStorage.setItem('deletedTrailIds',JSON.stringify(deletedTrailIds));
  await load();
 }catch(error){console.error(error);alert('The shared trail could not be archived.')}
}
async function restoreDeleted(id){
 try{
  await adminRpc('admin_set_ohio_trail_status',{p_trail_id:id,p_status:'Active'});
  deletedTrailIds=deletedTrailIds.filter(x=>x!==id);
  localStorage.setItem('deletedTrailIds',JSON.stringify(deletedTrailIds));
  await load();
 }catch(error){console.error(error);alert('The shared trail could not be restored.')}
}
async function resetBuiltIn(id){
 const base=baseTrails.find(t=>t.id===id);if(!base)return;
 if(!confirm(`Reset ${base.name} to its original built-in information?`))return;
 try{
  await adminRpc('admin_upsert_ohio_trail',{p_data:base});
  delete builtInOverrides[id];
  localStorage.setItem('builtInOverrides',JSON.stringify(builtInOverrides));
  await load();
 }catch(error){console.error(error);alert('The shared trail could not be reset.')}
}
function renderAdmin(){
 const q=(document.getElementById('adminSearch')?.value||'').trim().toLowerCase();
 const rows=allManagedTrails()
  .filter(t=>!q||[t.name,t.region,t.aliases||'',t.source].join(' ').toLowerCase().includes(q))
  .sort((a,b)=>a.name.localeCompare(b.name))
  .map(t=>{
    const hidden=t.recordStatus==='Hidden'||hiddenTrailIds.includes(t.id),deleted=t.recordStatus==='Archived'||deletedTrailIds.includes(t.id),edited=t.source==='Built-in'&&Boolean(builtInOverrides[t.id]);
    const state=deleted?'Deleted':hidden?'Hidden':'Visible';
    const actions=deleted
      ? `<button type="button" data-restore="${t.id}">Restore</button>`
      : `<button type="button" data-edit="${t.id}">Edit</button><button type="button" data-hide="${t.id}" data-hide-next="${hidden?'false':'true'}">${hidden?'Show':'Hide'}</button>${edited?`<button type="button" data-reset="${t.id}">Reset</button>`:''}<button type="button" class="danger" data-delete="${t.id}">Archive</button>`;
    return `<div class="admin-row ${hidden?'is-hidden':''} ${deleted?'is-deleted':''}"><div><strong><span class="status-dot"></span>${t.name}</strong><br><small>${t.source}${edited?' · edited':''} · ${state} · ${t.region||'Region unavailable'}</small></div><div class="admin-actions">${actions}</div></div>`;
  });
 document.getElementById('adminRows').innerHTML=rows.join('')||'<p><small>No matching trails.</small></p>';
 document.querySelectorAll('[data-edit]').forEach(b=>b.onclick=()=>editTrail(b.dataset.edit));
 document.querySelectorAll('[data-hide]').forEach(b=>b.onclick=()=>setHidden(b.dataset.hide,b.dataset.hideNext==='true'));
 document.querySelectorAll('[data-delete]').forEach(b=>b.onclick=()=>deleteTrail(b.dataset.delete));
 document.querySelectorAll('[data-restore]').forEach(b=>b.onclick=()=>restoreDeleted(b.dataset.restore));
 document.querySelectorAll('[data-reset]').forEach(b=>b.onclick=()=>resetBuiltIn(b.dataset.reset));
}
function exportData(){const blob=new Blob([JSON.stringify({customTrails,hiddenTrailIds,deletedTrailIds,builtInOverrides},null,2)],{type:'application/json'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='ohio-trail-edits.json';a.click();URL.revokeObjectURL(a.href)}
document.getElementById('search').addEventListener('input',render);document.getElementById('stateFilter').addEventListener('change',render);document.getElementById('statusFilter').addEventListener('change',render);document.getElementById('sort').addEventListener('change',render);document.getElementById('locate').addEventListener('click',locate);
function updateDeveloperUI(){
 const b=document.getElementById('developerMode'),manage=document.getElementById('manage'),signOut=document.getElementById('adminSignOut');
 b.textContent=adminAuthenticated?(developerMode?'Developer: On':'Developer: Signed in'):'Developer';
 b.setAttribute('aria-pressed',String(adminAuthenticated&&developerMode));
 b.classList.toggle('is-active',adminAuthenticated&&developerMode);
 manage.hidden=!(adminAuthenticated&&developerMode);
 signOut.hidden=!adminAuthenticated;
}
function openAdminLogin(){
 const dialog=document.getElementById('adminLoginDialog'),message=document.getElementById('adminLoginMessage');
 message.textContent='';
 if(!dialog.open)dialog.showModal();
 document.getElementById('adminEmail').focus();
}
document.getElementById('developerMode').addEventListener('click',()=>{
 if(!adminAuthenticated){openAdminLogin();return}
 developerMode=!developerMode;
 localStorage.setItem('developerMode',JSON.stringify(developerMode));
 updateDeveloperUI();
 render();
});
document.getElementById('adminLoginForm').addEventListener('submit',async event=>{
 event.preventDefault();
 const button=document.getElementById('adminLoginButton'),message=document.getElementById('adminLoginMessage');
 button.disabled=true;message.textContent='Signing in…';
 try{
  await signInAdministrator(document.getElementById('adminEmail').value,document.getElementById('adminPassword').value);
  developerMode=true;
  localStorage.setItem('developerMode','true');
  document.getElementById('adminPassword').value='';
  document.getElementById('adminLoginDialog').close();
  updateDeveloperUI();
  render();
 }catch(error){console.error(error);message.textContent=error.message||'Sign-in failed.'}
 finally{button.disabled=false}
});
document.getElementById('closeAdminLogin').addEventListener('click',()=>{
 document.getElementById('adminPassword').value='';
 document.getElementById('adminLoginDialog').close();
});
document.getElementById('adminSignOut').addEventListener('click',async()=>{await signOutAdministrator();render()});
updateDeveloperUI();
document.getElementById('manage').onclick=()=>{clearPickState(true);renderAdmin();updateLocationStatus();const d=document.getElementById('trailDialog');if(!d.open)d.showModal()};document.getElementById('adminSearch')?.addEventListener('input',renderAdmin);document.getElementById('closeDialog').onclick=()=>{clearPickState(true);document.getElementById('trailDialog').close();resetForm()};document.getElementById('trailForm').onsubmit=saveTrail;document.getElementById('resetForm').onclick=resetForm;document.getElementById('pickAccessOnMap').onclick=()=>beginPickMode('access');document.getElementById('pickWeatherOnMap').onclick=()=>beginPickMode('weather');document.getElementById('copyAccessToWeather').onclick=copyAccessToWeather;document.getElementById('cancelPick').onclick=()=>{clearPickState(false);const d=document.getElementById('trailDialog');if(!d.open)d.showModal()};document.getElementById('exportTrails').onclick=exportData;document.getElementById('importTrails').onchange=e=>{const f=e.target.files[0];if(!f)return;const reader=new FileReader();reader.onload=()=>{try{const d=JSON.parse(reader.result);customTrails=Array.isArray(d.customTrails)?d.customTrails.map(stripGuessedSoil):[];hiddenTrailIds=Array.isArray(d.hiddenTrailIds)?d.hiddenTrailIds:[];deletedTrailIds=Array.isArray(d.deletedTrailIds)?d.deletedTrailIds:[];builtInOverrides=d.builtInOverrides&&typeof d.builtInOverrides==='object'?Object.fromEntries(Object.entries(d.builtInOverrides).map(([id,trail])=>[id,stripGuessedSoil(trail)])):{};localStorage.setItem('customTrails',JSON.stringify(customTrails));localStorage.setItem('hiddenTrailIds',JSON.stringify(hiddenTrailIds));localStorage.setItem('deletedTrailIds',JSON.stringify(deletedTrailIds));localStorage.setItem('builtInOverrides',JSON.stringify(builtInOverrides));load();alert('Trail edits imported.')}catch(err){alert('That file could not be imported.')}};reader.readAsText(f)};
document.getElementById('trailDialog').addEventListener('cancel',()=>{clearPickState(true);resetForm()});
verifyAdminSession();
load().then(reuseGrantedLocation);
