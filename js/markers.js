  /********************************************/
 /**				MARKERS					**/
/********************************************/

// Define marker icons
// For each region add an image to 'img/marker/' 
var SL = L.icon({iconUrl: 'img/marker/SL.png',iconSize: [32, 74]})
var SLfort = L.icon({iconUrl: 'img/marker/SLfort.png',iconSize: [32, 74]})
var CL = L.icon({iconUrl: 'img/marker/CL.png',iconSize: [32, 74]})
var Dorne = L.icon({iconUrl: 'img/marker/Dorne.png',iconSize: [32, 74]})
var II = L.icon({iconUrl: 'img/marker/II.png',iconSize: [32, 74]})
var North = L.icon({iconUrl: 'img/marker/North.png',iconSize: [32, 74]})
var NotWesteros = L.icon({iconUrl: 'img/marker/NotWesteros.png',iconSize: [32, 74]})
var Reach = L.icon({iconUrl: 'img/marker/Reach.png',iconSize: [32, 74]})
var RL = L.icon({iconUrl: 'img/marker/RL.png',iconSize: [32, 74]})
var TrueNorth = L.icon({iconUrl: 'img/marker/TrueNorth.png',iconSize: [32, 74]})
var Vale = L.icon({iconUrl: 'img/marker/Vale.png',iconSize: [32, 74]})
var Wall = L.icon({iconUrl: 'img/marker/Wall.png',iconSize: [32, 74]})
var West = L.icon({iconUrl: 'img/marker/West.png',iconSize: [32, 74]})

// Define the markers
var markers = [
	// Each marker will be a line with the following format:
	//		[Lat, Long, icon, 'popup']
	// "Lat" and "Long" are the two numbers obtained by clicking on the map.
	// icon is one of the names defined above
	// popup is the text that will display on screen
[-31.428663117358596,-114.697265625,SL,"Lover's Hill"],
[-32.76880048488168,-116.27929687499999,SL,"Nightsong"],
[-29.228890030194215,-107.841796875,SL,"Harvest Hall"],
[-30.524413269923986,-101.6015625,SL,"Blackhaven"],
[-25.562265014427492,-96.328125,SL,"Summerhall"],
[-21.37124437061831,-98.525390625,SL,"Broad Arch"],
[-25.720735134412095,-89.912109375,SL,"Grandview"],
[-31.503629305773018,-90.87890625,SL,"Stonehelm"],
[-29.305561325527712,-87.5390625,SL,"Crow's Nest"],
[-25.40358497318669,-82.96875,SL,"Griffin's Roost"],
[-28.613459424004414,-71.015625,SL,"Rain House"],
[-32.175612478499325,-73.740234375,SL,"Holywater"],
[-33.28461996888768,-77.6953125,SL,"Mistwood"],
[-36.10237644873644,-78.22265625,SL,"Weeping Town"],
[-35.02999636902566,-71.103515625,SL,"Greenstone"],
[-20.961439614096825,-69.78515625,SL,"Evenfall Hall"],
[-22.187404991398775,-78.22265625,SL,"Storm's End"],
[-15.876809064146757,-74.091796875,SL,"Parchments"],
[-12.811801316582606,-80.068359375,SL,"Haystack Hall"],
[-17.056784609942554,-82.44140625,SL,"Bronzegate"],
[-18.062312304546726,-92.10937499999999,SL,"Felwood"],
[-13.838079936422462,-93.955078125,SL,"Fawnton"],
[-33.06392419812064,-100.8984375,SLfort,"Caelen's Reach"],
[-11.350796722383672,-76.552734375,SLfort,"Durran's Grief"],
[-11.95334939364343,-86.923828125,SLfort,"Forrestwatch"],
[-29.228890030194215,-97.470703125,SL,"Gallowsgrey"]

]