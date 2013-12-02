;(function(k){k=k||window;var h=function(a,b){return this.convert(a,b)};h.prototype={_rgb:{r:{min:0,max:255},g:{min:0,max:255},b:{min:0,max:255}},_hsv:{h:{min:0,max:359},s:{min:0,max:100},v:{min:0,max:100}},_xyz:{x:{min:0,max:95.047},y:{min:0,max:100},z:{min:0,max:108.883}},_lab:{l:{min:0,max:100},a:{min:-128,max:127},b:{min:-128,max:127}},_white:{x:95.047,y:100,z:108.883},_human:{red:"FF0000",tan:"D2B48C",aqua:"00FFFF",blue:"0000FF",cyan:"00FFFF",gold:"FFD700",gray:"808080",lime:"00FF00",navy:"000080", peru:"CD853F",pink:"FFC0CB",plum:"DDA0DD",snow:"FFFAFA",teal:"008080",azure:"F0FFFF",beige:"F5F5DC",black:"000000",brown:"A52A2A",coral:"FF7F50",green:"008000",ivory:"FFFFF0",khaki:"F0E68C",linen:"FAF0E6",olive:"808000",wheat:"F5DEB3",white:"FFFFFF",bisque:"FFE4C4",indigo:"4B0082",maroon:"800000",orange:"FFA500",orchid:"DA70D6",purple:"800080",salmon:"FA8072",sienna:"A0522D",silver:"C0C0C0",tomato:"FF6347",violet:"EE82EE",yellow:"FFFF00",crimson:"DC143C",darkred:"8B0000",dimgray:"696969",fuchsia:"FF00FF", hotpink:"FF69B4",magenta:"FF00FF",oldlace:"FDF5E6",skyblue:"87CEEB",thistle:"D8BFD8",cornsilk:"FFF8DC",darkblue:"00008B",darkcyan:"008B8B",darkgray:"A9A9A9",deeppink:"FF1493",honeydew:"F0FFF0",lavender:"E6E6FA",moccasin:"FFE4B5",seagreen:"2E8B57",seashell:"FFF5EE",aliceblue:"F0F8FF",burlywood:"DEB887",cadetblue:"5F9EA0",chocolate:"D2691E",darkgreen:"006400",darkkhaki:"BDB76B",firebrick:"B22222",gainsboro:"DCDCDC",goldenrod:"DAA520",indianred:"CD5C5C",lawngreen:"7CFC00",lightblue:"ADD8E6",lightcyan:"E0FFFF", lightgrey:"D3D3D3",lightpink:"FFB6C1",limegreen:"32CD32",mintcream:"F5FFFA",mistyrose:"FFE4E1",olivedrab:"6B8E23",orangered:"FF4500",palegreen:"98FB98",peachpuff:"FFDAD9",rosybrown:"BC8F8F",royalblue:"4169E1",slateblue:"6A5ACD",slategray:"708090",steelblue:"4682B4",turquoise:"40E0D0",aquamarine:"7FFFD4",blueviolet:"8A2BE2",chartreuse:"7FFF00",darkorange:"FF8C00",darkorchid:"9932CC",darksalmon:"E9967A",darkviolet:"9400D3",dodgerblue:"1E90FF",ghostwhite:"F8F8FF",lightcoral:"F08080",lightgreen:"90EE90", mediumblue:"0000CD",papayawhip:"FFEFD5",powderblue:"B0E0E6",sandybrown:"F4A460",whitesmoke:"F5F5F5",floralwhite:"FFFAF0",forestgreen:"228B22",darkmagenta:"8B008B",deepskyblue:"00BFFF",navajowhite:"FFDEAD",yellowgreen:"9ACD32",greenyellow:"ADFF2F",lightsalmon:"FFA07A",lightyellow:"FFFFE0",saddlebrown:"8B4513",springgreen:"00FF7F",darkseagreen:"8FBC8F",antiquewhite:"FAEBD7",lemonchiffon:"FFFACD",lightskyblue:"87CEFA",mediumorchid:"BA55D3",mediumpurple:"9370D8",midnightblue:"191970",darkslateblue:"483D8B", darkslategray:"2F4F4F",darkturquoise:"00CED1",darkgoldenrod:"B8860B",lavenderblush:"FFF0F5",lightseagreen:"20B2AA",palegoldenrod:"EEE8AA",paleturquoise:"AFEEEE",palevioletred:"D87093",blanchedalmond:"FFEBCD",cornflowerblue:"6495ED",darkolivegreen:"556B2F",lightslategray:"778899",lightsteelblue:"B0C4DE",mediumseagreen:"3CB371",mediumslateblue:"7B68EE",mediumturquoise:"48D1CC",mediumvioletred:"C71585",mediumaquamarine:"66CDAA",mediumspringgreen:"00FA9A",lightgoldenrodyellow:"FAFAD2"},_round:function(a, b){var c=RegExp("^([-\\d]*)(\\.\\d{1,"+(b||3)+"})?.*");a=(a+"").replace(c,"$1$2");return a-=0},_hex2rgb:function(a){var b={r:0,g:0,b:0};3==a.length?(b.r=parseInt(a.substring(0,1)+a.substring(0,1),16),b.g=parseInt(a.substring(1,2)+a.substring(1,2),16),b.b=parseInt(a.substring(2,3)+a.substring(2,3),16)):(b.r=parseInt(a.substring(0,2),16),b.g=parseInt(a.substring(2,4),16),b.b=parseInt(a.substring(4,6),16));return b},_hex2hsv:function(a){var b=h.prototype;a=b._hex2rgb(a);return b._rgb2hsv(a)},_hex2lab:function(a){var b= h.prototype;a=b._hex2xyz(a);return b._xyz2lab(a)},_hex2xyz:function(a){var b=h.prototype;a=b._hex2rgb(a);return b._rgb2xyz(a)},_rgb2hsv:function(a){var b=a.r/255,c=a.g/255;a=a.b/255;var e=0,d=0,e=0,g={h:0,s:0,v:0};b>=c&&b>=c?(d=b,e=c>a?a:c):c>=a&&c>=b?(d=c,e=b>a?a:b):(d=a,e=c>b?b:c);g.v=d;g.s=d?(d-e)/d:0;g.s?(e=d-e,g.h=b==d?(c-a)/e:c==d?2+(a-b)/e:4+(b-c)/e,g.h=parseInt(60*g.h),0>g.v&&(g.v+=360)):g.h=0;g.s=parseInt(100*g.s);g.v=parseInt(100*g.v);return g},_rgb2lab:function(a){var b=h.prototype;a=b._rgb2xyz(a); return b._xyz2lab(a)},_rgb2xyz:function(a){var b="";a={r:a.r/255,g:a.g/255,b:a.b/255};var c=null;for(b in a)a[b]=0.04045<a[b]?Math.pow((a[b]+0.055)/1.055,2.4):a[b]/12.92,a[b]*=100;c={x:0.4124*a.r+0.3576*a.g+0.1805*a.b,y:0.2126*a.r+0.7152*a.g+0.0722*a.b,z:0.0193*a.r+0.1192*a.g+0.9505*a.b};for(b in c)c[b]=h.prototype._round(c[b]);return c},_rgb2hex:function(a){var b="",c={};c.r=a.r.toString(16);c.g=a.g.toString(16);c.b=a.b.toString(16);for(b in c)2>c[b].length&&(c[b]+=c[b]);return c.r+c.g+c.b},_hsv2rgb:function(a){var b= 0,c=0,e=0,d=0,g=0,e=a.h,g=a.s;a=a.v;var f={r:0,g:0,b:0};if(0==g)f.r=0==a?f.g=f.b=0:f.g=f.b=parseInt(255*a/100);else{360==e&&(e=0);e/=60;g/=100;a/=100;b=parseInt(e);c=e-b;e=a*(1-g);d=a*(1-g*c);g=a*(1-g*(1-c));switch(b){case 0:f.r=a;f.g=g;f.b=e;break;case 1:f.r=d;f.g=a;f.b=e;break;case 2:f.r=e;f.g=a;f.b=g;break;case 3:f.r=e;f.g=d;f.b=a;break;case 4:f.r=g;f.g=e;f.b=a;break;case 5:f.r=a,f.g=e,f.b=d}f.r=parseInt(255*f.r);f.g=parseInt(255*f.g);f.b=parseInt(255*f.b)}return f},_hsv2lab:function(a){var b= h.prototype;a=b._hsv2xyz(a);return b._xyz2lab(a)},_hsv2xyz:function(a){var b=h.prototype;a=b._hsv2rgb(a);return b._rgb2xyz(a)},_hsv2hex:function(a){var b=h.prototype;a=b._hsv2rgb(a);return b._rgb2hex(a)},_lab2rgb:function(a){var b=h.prototype;a=b._lab2xyz(a);return b._xyz2rgb(a)},_lab2hsv:function(a){var b=h.prototype;a=b._lab2rgb(a);return b._rgb2hsv(a)},_lab2xyz:function(a){var b="",c=0,e={},d=h.prototype,g=d._white;e.y=(a.l+16)/116;e.x=a.a/500+e.y;e.z=e.y-a.b/200;for(b in e)c=Math.pow(e[b],3), e[b]=0.008856<c?c:(e[b]-16/116)/7.787,e[b]=d._round(e[b]*g[b]);return{x:e.x,y:e.y,z:e.z}},_lab2hex:function(a){var b=h.prototype;a=b._lab2rgb(a);return b._rgb2hex(a)},_xyz2rgb:function(a){var b="",c=a.x/100,e=a.y/100;a=a.z/100;var d={};d.r=3.2406*c+-1.5372*e+-0.4986*a;d.g=-0.9689*c+1.8758*e+0.0415*a;d.b=0.0557*c+-0.204*e+1.057*a;for(b in d)d[b]=h.prototype._round(d[b]),0>d[b]&&(d[b]=0),d[b]=0.0031308<d[b]?1.055*Math.pow(d[b],1/2.4)-0.055:12.92*d[b],d[b]=Math.round(255*d[b]);return d},_xyz2hsv:function(a){var b= h.prototype;a=b._xyz2rgb(a);return b._rgb2hsv(a)},_xyz2lab:function(a){var b="",c={},e=h.prototype._white;for(b in a)c[b]=a[b]/e[b],c[b]=0.008856<c[b]?Math.pow(c[b],1/3):7.787*c[b]+16/116;return{l:116*c.y-16,a:500*(c.x-c.y),b:200*(c.y-c.z)}},_xyz2hex:function(a){var b=h.prototype;a=b._xyz2rgb(a);return b._rgb2hex(a)},type:function(a){var b="",c="";if("object"==typeof a){for(b in a)a[b]-=0;if(isNaN(a.r)&&isNaN(a.g))if(isNaN(a.h)&&isNaN(a.s))if(isNaN(a.x)&&isNaN(a.z)){if(!isNaN(a.l)||!isNaN(a.a))return"lab"; if(!isNaN(a.c)||!isNaN(a.m)||!isNaN(a.k))return"cmyk"}else return"xyz";else return"hsv";else return"rgb"}else if("number"==typeof a||"string"==typeof a)return c=a.substring(0,4),"rgb("==c||"rgba"==c?"css":"hex";return!1},validate:function(a,b){b=b||!1;var c=h.prototype,e=c.type(a),d="",g="",f=g=null;if(e){"css"==e?(f=c._rgb,e="rgb",g=a.replace(/rgb(a)?\(|\)/g,"").split(/,\s?/),a={r:g[0],g:g[1],b:g[2]}):f=c["_"+e];switch(e){case "css":case "rgb":case "hsv":case "lab":case "xyz":case "cmyk":for(d in f)!a[d]|| a[d]<f[d].min?a[d]=f[d].min:a[d]>f[d].max&&(a[d]="hsv"==e&&"h"==d?0:f[d].max);break;case "hex":(g=c._human[a.toLowerCase()])?a=g:(a=(""+a).toUpperCase().replace(/^#/g,"").replace(/[^A-F0-9]/g,"0"),d=a.length,6>d&&3<d?a+="000000".substring(d,6-d):6>d&&3>d?a+="000".substring(d,3-d):6<d&&(a=a.substring(0,6)))}return b?{type:e,raw:a}:a}return!1},convert:function(a,b){b=b||"rgb";var c="",e=h.prototype,d=e.validate(a,!0);return d&&(c="_"+d.type+"2"+b,e[c])?e[c](d.raw):!1},invert:function(a,b){b=b||"rgb"; var c="",e=h.prototype,d=null;if(d=e.validate(a,!0)){d=e["_"+d.type+"2rgb"](d.raw);for(c in d)d[c]=255-d[c];return"rgb"!=b?e["_rgb2"+b](d):d}return!1}};h.type=h.prototype.type;h.invert=h.prototype.invert;h.convert=h.prototype.convert;h.validate=h.prototype.validate;k.Color=h})(window);
// IMPORT COLOR LIB
// GET LIST OF PIXELS COLORS  - maybe a million or so colors.
// set a threshhold for similarity to be a parameter and sort them into buckets of similar colors.
// IGNORE BALCK and or white because these are common image back grounds?
// figure out the realative sizes of each bucket, and choose the top 5 buckets.
// https://github.com/Shushik/i-color

// GET A REF TO THE DROPBOX AND IMG PREVIEW DOM ELEMENT
var dropbox = document.getElementById("dropbox");
var preview1 = document.getElementById("preview");
// GOOGLE TEXT TO SPEECH ENDPOINT
// http://translate.google.com/translate_tts?tl=en&q=Wow.%20What%20an%20incredible%20image!%20I%20see%20a%20lot%20of%20hot%20pink,%20tones%20of%20midnight%20blue!

// init event handlers
preview.addEventListener("onload", previewLoaded, false);
dropbox.addEventListener("dragenter", dragEnter, false);
dropbox.addEventListener("dragexit", dragExit, false);
dropbox.addEventListener("dragover", dragOver, false);
dropbox.addEventListener("drop", drop, false);

// EVENTS 


function previewLoaded(evt) {
	alert("loaded");
  preventEvent(evt);
      // get the updated ref!

};

function dragEnter(evt) {
  preventEvent(evt);
  document.getElementById("dropbox").style.color="Red";
};

function dragExit(evt) {
  preventEvent(evt);
  document.getElementById("dropbox").style.color="#BBB";
};

function dragOver(evt) {
  preventEvent(evt);
};

function drop(evt) {
 	preventEvent(evt);
 	// MAGIC HAPPENS IN THIS FUNCTION
 	// REVERT TO ORIGINAL COLOR
 	document.getElementById("dropbox").style.color="#BBB";
	
 	// GRAB THE FILES FROM THE EVENT
	var files = evt.dataTransfer.files;
	var count = files.length;
	// Only call the handler if 1 or more files was dropped.
	if (count > 0) handleFiles(files);
};

function handleFiles(files){
	//GRAB JUST FIRST FILE
	var file = files[0];
	// SHOW PROGRESS MESSAGE
 	document.getElementById("droplabel").innerHTML = "Processing " + file.name;
	
	var reader = new FileReader();
	// init the reader event handlers
	reader.onload = handleReaderLoad;
	// begin the read operation
	reader.readAsDataURL(file);
};

function handleReaderLoad(evt) {
	// GET IMG TAG REF
  	var img = document.getElementById("preview");
  	// FILL SRC WITH IMG DATA
    img.src = evt.target.result;

    // GET IMAGE
    img=document.getElementById("preview");
    // DRAW AN IMAGE
  	draw_image(img, img.width,img.height);
  	analyzeImage();

};


function draw_image(image, width, height) {
 	var my_canvas = document.getElementById("my-canvas");
 	my_canvas.height = height;
 	my_canvas.width = width;

 	var my_canvas_context = my_canvas.getContext("2d");
 	var image = document.getElementById("preview");
	my_canvas_context.drawImage(image,0,0);
};

function preventEvent(evt) {
	// ALSO called a no op Handler (borrowing terminology from assemby)  
  evt.stopPropagation();
  evt.preventDefault();
};

function analyzeImage(){
	var image_data = getPixelData();
	colorsBuckets(image_data);
	//var he = rgbaValuesByPixel(5,5,5,5,imagePixels)
};


var getPixelData = function(){
	var my_canvas = document.getElementById("my-canvas");
  	var my_canvas_context = my_canvas.getContext("2d");

	var imgData=my_canvas_context.getImageData(0,0,my_canvas.width,my_canvas.height);
	return imgData.data;
};

var convertColorSetToLAB = function(colorSet){
	var colorSetLab = {};
	for (var color in colorSet) {
		colorSetLab[color] = Color.convert(colorSet[color],'lab');
	};
	return colorSetLab;
};

var mostSimilarColor = function(currentPixelLAB, colorSetLab){
	var smallestDist = 10000;
	//var mostSimilar = '';
	for (var color in colorSetLab) {
		var checkedDist = perceptualColorDiff(currentPixelLAB, colorSetLab[color]);
		if (checkedDist < smallestDist) {
			smallestDist = checkedDist;
			mostSimilar = color;
		};
	};
	return mostSimilar;
};


var colorsBuckets = function(imageData) {
	var colorCounts = {};
	var colorSetLab = convertColorSetToLAB(colorPresets());

	// A FOR LOOP THAT GOES FOUR ITEMS AT A TIME
	for (var i = 0 ; i < imageData.length; i+=4) {
		// GRAB RGB VALS AND CONVER TO LAB
		var currentPixelLAB = Color.convert({r:imageData[i], g:imageData[i+1], b:imageData[i+2]}, 'lab');
		// NOW FIND THE BEST BUCKET FOR EACH
		closestColor = mostSimilarColor(currentPixelLAB,colorSetLab);

		// CHECK for existance of best bucket value
		colorCounts[closestColor] = colorCounts[closestColor] || 0; // VERY INTERESTING HOW THIS WORKS, REVIEW
		colorCounts[closestColor] += 1;
	};

	sortColors(colorCounts);
	return colorCounts;
};


var sortColors = function(colorCounts){
	var sortable = [];
	for (var color in colorCounts)
	sortable.push([color, colorCounts[color]]);
	sortable.sort(function(a, b) {return b[1] - a[1]});

	
	showDescription(sortable.slice(0,6));
};


var showDescription = function(sortedColors) {
	var text = "Wow, I see a whole lot of COLOR1 and COLOR2, strong tones of COLOR3, and even some COLOR4, COLOR5, and COLOR6.";

	// PLACE INTO 
	text = text.replace("COLOR1",sortedColors[0][0]);
	text = text.replace("COLOR2",sortedColors[1][0]);
	text = text.replace("COLOR3",sortedColors[2][0]);
	text = text.replace("COLOR4",sortedColors[3][0]);
	text = text.replace("COLOR5",sortedColors[4][0]);
	text = text.replace("COLOR6",sortedColors[5][0]);
	document.getElementById('desc').innerHTML = text;
};


var perceptualColorDiff = function(lab1, lab2){
	return Math.sqrt((lab2.l-lab1.l)*(lab2.l-lab1.l)+(lab2.a-lab1.a)*(lab2.a-lab1.a)+(lab2.b-lab1.b)*(lab2.b-lab1.b));
};

function colorPresets(){
	return {"Pastel blue": "aec6cf", "Golden poppy": "fcc200", "Pastel violet": "cb99c9", "UFO Green": "3cd070", "Wine": "722f37", "Outrageous Orange": "ff6e4a", "Capri": "00bfff", "Light taupe": "b38b6d", "Crimson": "dc143c", "Shocking pink": "fc0fc0", "Brown": "a52a2a", "Bole": "79443b", "Byzantine": "bd33a4", "Light carmine pink": "e66771", "Dark terra cotta": "cc4e5c", "Ash grey": "b2beb5", "Bright lavender": "bf94e4", "Light coral": "f08080", "Dark chestnut": "986960", "Persian plum": "701c1c", "Mango Tango": "ff8243", "Feldgrau": "4d5d53", "Apricot": "fbceb1", "Plum": "dda0dd", "Fern green": "4f7942", "Patriarch": "800080", "Topaz": "ffc87c", "Ruddy": "ff0028", "Opera mauve": "b784a7", "Purple Mountain's Majesty": "9d81ba", "International orange": "ff4f00", "Purple pizzazz": "fe4eda", "CG Red": "e03c31", "Selective yellow": "ffba00", "AuroMetalSaurus": "6e7f80", "Carmine pink": "eb4c42", "Pale goldenrod": "eee8aa", "Canary": "ffff99", "Pakistan green": "006600", "Lavender purple": "967bb6", "Blond": "faf0be", "Boston University Red": "cc0000", "Pale spring bud": "ecebbd", "Titanium yellow": "eee600", "Majorelle Blue": "6050dc", "Light yellow": "ffffed", "Sinopia": "cb410b", "Melon": "fdbcb4", "Rose taupe": "905d5d", "Cerise": "de3163", "Orange": "ffa500", "Electric crimson": "ff003f", "Lavender gray": "c4c3d0", "Red": "ff0000", "Coral pink": "f88379", "Charcoal": "36454f", "Deep carmine pink": "ef3038", "Chrome yellow": "ffa700", "Light slate gray": "778899", "Fluorescent yellow": "ccff00", "CG Blue": "007aa5", "Rose gold": "b76e79", "Baby pink": "f4c2c2", "Raspberry": "e30b5d", "Umber": "635147", "Pastel gray": "cfcfc4", "Ball Blue": "21abcd", "Wenge": "645452", "Coquelicot": "ff3800", "Electric lime": "ccff00", "Fallow": "c19a6b", "Green": "00ff00", "Floral white": "fffaf0", "Cerulean": "007ba7", "Azure": "007fff", "Deep carrot orange": "e9692c", "Electric lavender": "f4bbff", "Debian red": "d70a53", "Dark cerulean": "08457e", "Dark green": "013220", "Burnt orange": "cc5500", "Fluorescent pink": "ff1493", "Spiro Disco Ball": "0fc0fc", "Battleship grey": "848482", "Old gold": "cfb53b", "MSU Green": "18453b", "Almond": "efdecd", "Arylide yellow": "e9d66b", "Ginger": "b06500", "Office green": "008000", "Twilight lavender": "8a496b", "Light cyan": "e0ffff", "Ultramarine blue": "4166f5", "Medium turquoise": "48d1cc", "Oxford Blue": "002147", "Deep magenta": "cc00cc", "Lime green": "32cd32", "Dogwood rose": "d71868", "Inchworm": "b2ec5d", "Medium lavender magenta": "dda0dd", "Magnolia": "f8f4ff", "Amaranth": "e52b50", "Misty rose": "ffe4e1", "Cardinal": "c41e3a", "Manatee": "979aaa", "Han purple": "5218fa", "Outer Space": "414a4c", "Cinereous": "98817b", "Tractor red": "fd0e35", "Medium sea green": "3cb371", "Deep carmine": "a9203e", "Atomic tangerine": "ff9966", "Bright pink": "ff007f", "Persian orange": "d99058", "Corn": "fbec5d", "Pear": "d1e231", "Venetian red": "c80815", "Crimson Red": "990000", "Phlox": "df00ff", "Liver": "534b4f", "Dark red": "8b0000", "Sky blue": "87ceeb", "Iris": "5a4fcf", "Mode beige": "967117", "Pastel red": "ff6961", "Light cornflower blue": "93ccea", "Medium blue": "0000cd", "Bottle green": "006a4e", "Cinnabar": "e34234", "Medium electric blue": "035096", "Mint green": "98ff98", "Rose bonbon": "f9429e", "University of California Gold": "b78727", "Bulgarian rose": "480607", "Hot magenta": "ff1dce", "Indigo": "4b0082", "Sea green": "2e8b57", "UA red": "d9004c", "Deep coffee": "704241", "Fuzzy Wuzzy": "cc6666", "Utah Crimson": "d3003f", "Fern": "71bc78", "Dark slate blue": "483d8b", "Dodger blue": "1e90ff", "Android Green": "a4c639", "Periwinkle": "ccccff", "Crimson glory": "be0032", "Dark sea green": "8fbc8f", "Dark turquoise": "00ced1", "Cerulean blue": "2a52be", "Light salmon": "ffa07a", "Navajo white": "ffdead", "Dark lava": "483c32", "Smoky black": "100c08", "Sacramento State green": "00563f", "Granny Smith Apple": "a8e4a0", "Medium carmine": "af4035", "Burnt sienna": "e97451", "American rose": "ff033e", "Antique fuchsia": "915c83", "Blizzard Blue": "ace5ee", "Turquoise green": "a0d6b4", "Harvard crimson": "c90016", "Mustard": "ffdb58", "Steel blue": "4682b4", "Dark pastel purple": "966fd6", "Onyx": "0f0f0f", "UCLA Blue": "536895", "Dark candy apple red": "a40000", "Rose vale": "ab4e52", "Tufts Blue": "417dc1", "Tickle Me Pink": "fc89ac", "Pale magenta": "f984e5", "Shadow": "8a795d", "Banana yellow": "ffe135", "Non-photo blue": "a4dded", "Royal fuchsia": "ca2c92", "Zinnwaldite brown": "2c1608", "Dark khaki": "bdb76b", "Eton blue": "96c8a2", "Persian blue": "1c39bb", "True Blue": "0073cf", "Islamic green": "009000", "Fandango": "b53389", "Caribbean green": "00cc99", "Tuscan red": "66424d", "Dark pink": "e75480", "Cadet": "536872", "Electric indigo": "6f00ff", "Razzle dazzle rose": "ff33cc", "Denim": "1560bd", "Carnation pink": "ffa6c9", "Light goldenrod yellow": "fafad2", "Shamrock": "45cea2", "Lemon lime": "bfff00", "Pale green": "98fb98", "Pale pink": "fadadd", "Light blue": "add8e6", "Myrtle": "21421e", "Glitter": "e6e8fa", "Orange Yellow": "f8d568", "Blue": "0000ff", "Medium slate blue": "7b68ee", "Pale silver": "c9c0bb", "Alizarin crimson": "e32636", "Eggshell": "f0ead6", "Dark goldenrod": "b8860b", "Carolina blue": "99badd", "White": "ffffff", "La Salle Green": "087830", "Viridian": "40826d", "Moss green": "addfad", "Old mauve": "673147", "Bisque": "ffe4c4", "Ube": "8878c3", "Mauvelous": "ef98aa", "Tangerine": "f28500", "Columbia blue": "9bddff", "Vivid burgundy": "9f1d35", "Emerald": "50c878", "Bleu de France": "318ce7", "Bubbles": "e7feff", "Bazaar": "98777b", "Peridot": "e6e200", "Orange red": "ff4500", "Paris Green": "50c878", "Lemon chiffon": "fffacd", "Ultra pink": "ff6fff", "Copper": "b87333", "Folly": "ff004f", "Verdigris": "43b3ae", "UP Maroon": "7b1113", "Pale taupe": "bc987e", "Gamboge": "e49b0f", "Fawn": "e5aa70", "Bittersweet": "fe6f5e", "Golden yellow": "ffdf00", "Laurel green": "a9ba9d", "Baby blue": "89cff0", "Maya blue": "73c2fb", "Yellow": "ffff00", "Rich electric blue": "0892d0", "Screamin Green": "76ff7a", "Rosewood": "65000b", "Terra cotta": "e2725b", "Pale plum": "dda0dd", "Platinum": "e5e4e2", "Cornell Red": "b31b1b", "Light brown": "b5651d", "Medium aquamarine": "66ddaa", "Rose": "ff007f", "Razzmatazz": "e3256b", "Tropical rain forest": "00755e", "Cal Poly Pomona green": "1e4d2b", "Blue green": "0d98ba", "Chartreuse": "7fff00", "Indian red": "cd5c5c", "Mountbatten pink": "997a8d", "Pink pearl": "e7accf", "Neon green": "39ff14", "Wheat": "f5deb3", "Rich black": "004040", "Purple taupe": "50404d", "Dark electric blue": "536878", "Pastel orange": "ffb347", "Medium orchid": "ba55d3", "Flax": "eedc82", "Medium purple": "9370db", "Cadmium yellow": "fff600", "Carnelian": "b31b1b", "Piggy pink": "fddde6", "Harvest Gold": "da9100", "Medium spring bud": "c9dc87", "Cyan": "00ffff", "UP Forest green": "014421", "Turquoise": "30d5c8", "Pistachio": "93c572", "Lapis lazuli": "26619c", "Electric cyan": "00ffff", "Beige": "f5f5dc", "Cadmium green": "006b3c", "Dark pastel red": "c23b22", "Tan": "d2b48c", "Dark midnight blue": "003366", "Sap green": "507d2a", "Warm black": "004242", "Blue purple": "8a2be2", "Midnight green": "004953", "Chamoisee": "a0785a", "Pale robin egg blue": "96ded1", "British racing green": "004225", "Sandy brown": "f4a460", "Orchid": "da70d6", "Maize": "fbec5d", "Halay\u00e0 \u00fabe": "663854", "Fluorescent orange": "ffbf00", "Lawn green": "7cfc00", "Burlywood": "deb887", "Carmine red": "ff0038", "Black": "000000", "Olivine": "9ab973", "Tawny": "cd5700", "Light salmon pink": "ff9999", "Persian indigo": "32127a", "Orange peel": "ff9f00", "Dark gray": "a9a9a9", "Electric ultramarine": "3f00ff", "Deep lilac": "9955bb", "Desert": "c19a6b", "Azure mist/web": "f0ffff", "Flavescent": "f7e98e", "French beige": "a67b5b", "Blanched Almond": "ffebcd", "Pale chestnut": "ddadaf", "Green Blue": "1164b4", "Hot pink": "ff69b4", "Lincoln green": "195905", "Pale copper": "da8a67", "Cinnamon": "d2691e", "Eggplant": "614051", "Egyptian blue": "1034a6", "Light pastel purple": "b19cd9", "Taupe": "483c32", "Burnt umber": "8a3324", "Mauve": "e0b0ff", "Cotton candy": "ffbcd9", "Salmon pink": "ff91a4", "Auburn": "a52a2a", "Glaucous": "6082b6", "Mountain Meadow": "30ba8f", "Royal azure": "0038a8", "Electric green": "00ff00", "Portland Orange": "ff5a36", "Pearl Aqua": "88d8c0", "Lime": "bfff00", "Peach": "ffe5b4", "Golden brown": "996515", "Cherry": "de3163", "Rufous": "a81c07", "Saffron": "f4c430", "Sandy taupe": "967117", "Grullo": "a99a86", "Cerise pink": "ec3b83", "Goldenrod": "daa520", "Deep fuchsia": "c154c1", "Earth yellow": "e1a95f", "Medium candy apple red": "e2062c", "Teal blue": "367588", "Raspberry rose": "b3446c", "Khaki": "c3b091", "Vivid auburn": "922724", "Deep saffron": "ff9933", "Pale cerulean": "9bc4e2", "Jasmine": "f8de7e", "Famous": "ff00ff", "Sunglow": "ffcc33", "Sand dune": "967117", "Light Thulian pink": "e68fac", "Blue Bell": "a2a2d0", "Dark tan": "918151", "USC Cardinal": "990000", "Radical Red": "ff355e", "Caput mortuum": "592720", "Red brown": "a52a2a", "Dark orchid": "9932cc", "Anti-flash white": "f2f3f4", "Safety orange": "ff6700", "Slate blue": "6a5acd", "Wild Watermelon": "fc6c85", "Bone": "e3dac9", "Guppie green": "00ff7f", "Electric violet": "8f00ff", "Cadmium orange": "ed872d", "Dollar bill": "85bb65", "Maroon": "800000", "Royal purple": "7851a9", "French lilac": "86608e", "Sunset": "fad6a5", "Olive Drab": "6b8e23", "Hooker green": "49796b", "Lemon Yellow": "fff44f", "Smokey topaz": "933d41", "Fuchsia": "ff00ff", "Brick red": "cb4154", "Amethyst": "9966cc", "Dark tangerine": "ffa812", "Carmine": "ff0040", "French blue": "0072bb", "Bright cerulean": "1dacd6", "Cornsilk": "fff8dc", "Ruddy pink": "e18e96", "Rackley": "5d8aa8", "Persian pink": "f77fbe", "Dark magenta": "8b008b", "Dandelion": "f0e130", "Navy blue": "000080", "Macaroni and Cheese": "ffbd88", "Purple": "800080", "Medium Persian blue": "0067a5", "Boysenberry": "873260", "Stormcloud": "008080", "Bronze": "cd7f32", "Antique white": "faebd7", "Cornflower blue": "6495ed", "Dark jungle green": "1a2421", "Zaffre": "0014a8", "Unmellow Yellow": "ffff66", "Raw Sienna": "d68a59", "Mantis": "74c365", "Celadon": "ace1af", "Mikado yellow": "ffc40c", "Deep pink": "ff1493", "Light green": "90ee90", "Dark taupe": "483c32", "Cool grey": "8c92ac", "Rich lilac": "b666d2", "Pastel magenta": "f49ac2", "Lilac": "c8a2c8", "Dark salmon": "e9967a", "Brilliant rose": "ff55a3", "Bubble gum": "ffc1cc", "Magenta": "ff00ff", "Medium champagne": "f3e5ab", "Celestial blue": "4997d0", "Dark powder blue": "003399", "Pastel yellow": "fdfd96", "Purple Heart": "69359c", "Lavender rose": "fba0e3", "Duke blue": "00009c", "Pale violet red": "db7093", "Dark blue": "00008b", "Camouflage green": "78866b", "Hollywood cerise": "f400a1", "Candy pink": "e4717a", "Palatinate blue": "273be2", "Chestnut": "cd5c5c", "Ghost white": "f8f8ff", "Yellow green": "9acd32", "Electric purple": "bf00ff", "India green": "138808", "Moonstone blue": "73a9c2", "Jungle green": "29ab87", "Neon Carrot": "ffa343", "Brass": "b5a642", "Falu red": "801818", "Urobilin": "e1ad21", "Electric blue": "7df9ff", "Thistle": "d8bfd8", "International Klein Blue": "002fa7", "Persian red": "cc3333", "Canary yellow": "ffef00", "Sand": "c2b280", "Ecru": "c2b280", "Saint Patrick Blue": "23297a", "Teal": "008080", "Pale gold": "e6be8a", "Fuchsia pink": "ff77ff", "Veronica": "a020f0", "Violet Red": "f75394", "Red Orange": "ff5349", "Jazzberry jam": "a50b5e", "USC Gold": "ffcc00", "Dark coral": "cd5b45", "Gray asparagus": "465945", "Magic mint": "aaf0d1", "Slate gray": "708090", "Light apricot": "fdd5b1", "Wild Strawberry": "ff43a4", "Beaver": "9f8170", "Dark brown": "654321", "Tiger eye": "e08d3c", "Medium spring green": "00fa9a", "KU Crimson": "e8000d", "Harlequin": "3fff00", "Phthalo blue": "000f89", "Lavender blue": "ccccff", "Malachite": "0bda51", "Snow": "fffafa", "Light Crimson": "f56991", "Tangelo": "f94d00", "Pearl": "eae0c8", "Lavender blush": "fff0f5", "Pale aqua": "bcd4e6", "Munsell": "f2f3f4", "Rifle green": "414833", "Buff": "f0dc82", "Classic rose": "fbcce7", "Yellow Orange": "ffae42", "Dark pastel green": "03c03c", "Sky magenta": "cf71af", "Peach yellow": "fadfad", "Salmon": "ff8c69", "Hunter green": "355e3b", "Rust": "b7410e", "Deep sky blue": "00bfff", "Air Force blue": "5d8aa8", "Vivid cerise": "da1d81", "Light pink": "ffb6c1", "Jonquil": "fada5e", "Tomato": "ff6347", "Turkish rose": "b57281", "Heliotrope": "df73ff", "Dark byzantium": "5d3954", "Desert sand": "edc9af", "Vanilla": "f3e5ab", "Rosy brown": "bc8f8f", "Powder blue": "b0e0e6", "Shamrock green": "009e60", "Seal brown": "321414", "Raspberry glace": "915f6d", "Electric yellow": "ffff00", "Medium teal blue": "0054b4", "Mauve taupe": "915f6d", "Puce": "cc8899", "Cherry blossom pink": "ffb7c5", "Pastel purple": "b39eb5", "Sepia": "704214", "Cobalt": "0047ab", "Sienna": "882d17", "Tea green": "d0f0c0", "Otter brown": "654321", "Psychedelic purple": "df00ff", "Icterine": "fcf75e", "French rose": "f64a8a", "Ocean Boat Blue": "0077be", "UA blue": "0033aa", "Candy apple red": "ff0800", "Dark pastel blue": "779ecb", "Dartmouth green": "00693e", "Kelly green": "4cbb17", "Mahogany": "c04000", "Heart Gold": "808000", "Aquamarine": "7fffd4", "Satin sheen gold": "cba135", "Palatinate purple": "682860", "Light fuchsia pink": "f984ef", "Coral red": "ff4040", "Wild blue yonder": "a2add0", "Taupe gray": "8b8589", "Han blue": "446ccf", "Royal blue": "4169e1", "Green yellow": "adff2f", "Ochre": "cc7722", "Silver": "c0c0c0", "Neon fuchsia": "fe59c2", "Turquoise blue": "00ffef", "Bright maroon": "c32148", "Coral": "ff7f50", "Violet": "ee82ee", "Davy grey": "555555", "Linen": "faf0e6", "Nadeshiko pink": "f6adc6", "Dark cyan": "008b8b", "Red violet": "c71585", "Tumbleweed": "deaa88", "Deep cerise": "da3287", "Dark orange": "ff8c00", "Tea rose": "f4c2c2", "Camel": "c19a6b", "Mordant red 19": "ae0c00", "Vivid tangerine": "ffa089", "Dark lavender": "734f96", "Deep jungle green": "004b49", "United Nations blue": "5b92e5", "Forest green": "228b22", "Bondi blue": "0095b6", "Light khaki": "f0e68c", "Mint": "3eb489", "Languid lavender": "d6cadd", "Pink": "ffc0cb", "Honeydew": "f0fff0", "Laser Lemon": "fefe22", "Brink pink": "fb607f", "Tangerine yellow": "ffcc00", "Burgundy": "800020", "Aureolin": "fdee00", "Napier green": "2a8000", "Trolley Grey": "808080", "Bright green": "66ff00", "Yale Blue": "0f4d92", "Pumpkin": "ff7518", "Pale lavender": "dcd0ff", "Tiffany Blue": "0abab5", "Straw": "e4d96f", "Pastel pink": "ffd1dc", "Bistre": "3d2b1f", "Old rose": "c08081", "Mulberry": "c54b8c", "Dark scarlet": "560319", "Chocolate": "d2691e", "Mint cream": "f5fffa", "Olive": "808000", "Stizza": "990000", "Deep peach": "ffcba4", "Prussian blue": "003153", "Cosmic latte": "fff8e7", "Beau blue": "bcd4e6", "June bud": "bdda57", "Sandstorm": "ecd540", "Brilliant lavender": "f4bbff", "Light gray": "d3d3d3", "Rose quartz": "aa98a9", "Thulian pink": "de6fa1", "Spring bud": "a7fc00", "Medium violet red": "c71585", "Indian yellow": "e3a857", "Rich carmine": "d70040", "Old lace": "fdf5e6", "Light sea green": "20b2aa", "Scarlet": "ff2400", "Jasper": "d73b3e", "Waterspout": "00ffff", "Field drab": "6c541e", "Blue violet": "8a2be2", "Pine green": "01796f", "Wisteria": "c9a0dc", "Lemon": "fff700", "Purple mountain majesty": "9678b6", "Caf\u00e9 noir": "4b3621", "Light sky blue": "87cefa", "Phthalo green": "123524", "Lavender pink": "fbaed2", "Champagne": "fad6a5", "Deep chestnut": "b94e48", "Cornflower": "9aceeb", "Coffee": "6f4e37", "Dim gray": "696969", "Hansa yellow": "e9d66b", "Pale carmine": "af4035", "Rosso corsa": "d40000", "Fashion fuchsia": "f400a1", "Banana Mania": "fae7b5", "Dark slate gray": "2f4f4f", "Timberwolf": "dbd7d2", "Ruby": "e0115f", "Gainsboro": "dcdcdc", "Gray": "808080", "Army green": "4b5320", "Pink Sherbet": "f78fa7", "Moccasin": "faebd7", "Brandeis blue": "0070ff", "UCLA Gold": "ffb300", "Bright ube": "d19fe8", "Cocoa brown": "d2691e", "Skobeloff": "007474", "Blush": "de5d83", "Sea blue": "006994", "Amber": "ffbf00", "Ferrari Red": "ff2800", "Jade": "00a86b", "Lavender": "e6e6fa", "Upsdell red": "ae2029", "Lion": "c19a6b", "Pacific Blue": "1ca9c9", "Rose ebony": "674846", "Rich maroon": "b03060", "Ruddy brown": "bb6528", "Dark raspberry": "872657", "Pale red violet": "db7093", "Fulvous": "e48400", "Stil de grain yellow": "fada5e", "Old lavender": "796878", "Lava": "cf1020", "Cadet grey": "91a3b0", "Citrine": "e4d00a", "Sunset Orange": "fd5e53", "Flamingo pink": "fc8eac", "Deep champagne": "fad6a5", "Ivory": "fffff0", "Cool black": "002e63", "Pastel brown": "836953", "Ultramarine": "120a8f", "Copper rose": "996666", "Rose madder": "e32636", "Vegas gold": "c5b358", "Dark olive green": "556b2f", "Toolbox": "746cc0", "Teal green": "006d5b", "Pale blue": "afeeee", "Smalt": "003399", "Dark sienna": "3c1414", "White smoke": "f5f5f5", "Pale brown": "987654", "Asparagus": "87a96b", "Drab": "967117", "Aqua": "00ffff", "Flame": "e25822", "Medium jungle green": "1c352d", "Russet": "80461b", "Medium taupe": "674c47", "Papaya whip": "ffefd5", "Lavender indigo": "9457eb", "Cambridge Blue": "a3c1ad", "Pale cornflower blue": "abcdef", "Peach puff": "ffdab9", "Cadet blue": "5f9ea0", "Gold": "ffd700", "Princeton orange": "ff8f00", "Awesome": "ff2052", "Spring green": "00ff7f", "Carrot orange": "ed9121", "Celeste": "b2ffff", "Cream": "fffdd0", "Blue Gray": "6699cc", "Rose pink": "ff66cc", "Seashell": "fff5ee", "Cadmium red": "e30022", "Pastel green": "77dd77", "Vermilion": "e34234", "Payne grey": "536878", "Isabelline": "f4f0ec", "Pink Flamingo": "fc74fd", "Lavender mist": "e6e6fa", "Persian rose": "fe28a2", "Violet Blue": "324ab2", "Dark spring green": "177245", "Byzantium": "702963", "Cordovan": "893f45", "Vivid violet": "9f00ff", "Naples yellow": "fada5e", "Pansy purple": "78184a", "Midnight blue": "191970", "Alice blue": "f0f8ff", "Saddle brown": "8b4513", "Baby blue eyes": "a1caf1", "Xanadu": "738678", "Daffodil": "ffff31", "Medium red violet": "bb3385", "Dark violet": "9400d3", "Olive Green": "bab86c", "Lavender magenta": "ee82ee", "Sapphire": "0f52ba", "Bright turquoise": "08e8de", "School bus yellow": "ffd800", "Fire engine red": "ce2029", "North Texas Green": "059033", "Robin's Egg Blue": "1fcecb", "Firebrick": "b22222", "Caf\u00e9 au lait": "a67b5b", "Tyrian purple": "66023c", "Ao": "008000", "Lust": "e62020", "Antique brass": "cd9575", "Apple green": "8db600", "Meat brown": "e5b73b", "Raspberry pink": "e25098"}
};


function draw_box() {
  var my_canvas = document.getElementById("my-canvas");
  var my_canvas_context = my_canvas.getContext("2d");
  my_canvas_context.fillStyle="#ff69b4";
  my_canvas_context.fillRect(0, 0, 5, 4);

  my_canvas_context.fillStyle="#32cd32";
  my_canvas_context.fillRect(0, 0, 2, 2);

  my_canvas_context.fillStyle="#2cabe2";
  my_canvas_context.fillRect(10, 10, 30, 30);
};

