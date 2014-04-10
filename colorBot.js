;(function(k){k=k||window;var h=function(a,b){return this.convert(a,b)};h.prototype={_rgb:{r:{min:0,max:255},g:{min:0,max:255},b:{min:0,max:255}},_hsv:{h:{min:0,max:359},s:{min:0,max:100},v:{min:0,max:100}},_xyz:{x:{min:0,max:95.047},y:{min:0,max:100},z:{min:0,max:108.883}},_lab:{l:{min:0,max:100},a:{min:-128,max:127},b:{min:-128,max:127}},_white:{x:95.047,y:100,z:108.883},_human:{red:"FF0000",tan:"D2B48C",aqua:"00FFFF",blue:"0000FF",cyan:"00FFFF",gold:"FFD700",gray:"808080",lime:"00FF00",navy:"000080", peru:"CD853F",pink:"FFC0CB",plum:"DDA0DD",snow:"FFFAFA",teal:"008080",azure:"F0FFFF",beige:"F5F5DC",black:"000000",brown:"A52A2A",coral:"FF7F50",green:"008000",ivory:"FFFFF0",khaki:"F0E68C",linen:"FAF0E6",olive:"808000",wheat:"F5DEB3",white:"FFFFFF",bisque:"FFE4C4",indigo:"4B0082",maroon:"800000",orange:"FFA500",orchid:"DA70D6",purple:"800080",salmon:"FA8072",sienna:"A0522D",silver:"C0C0C0",tomato:"FF6347",violet:"EE82EE",yellow:"FFFF00",crimson:"DC143C",darkred:"8B0000",dimgray:"696969",fuchsia:"FF00FF", hotpink:"FF69B4",magenta:"FF00FF",oldlace:"FDF5E6",skyblue:"87CEEB",thistle:"D8BFD8",cornsilk:"FFF8DC",darkblue:"00008B",darkcyan:"008B8B",darkgray:"A9A9A9",deeppink:"FF1493",honeydew:"F0FFF0",lavender:"E6E6FA",moccasin:"FFE4B5",seagreen:"2E8B57",seashell:"FFF5EE",aliceblue:"F0F8FF",burlywood:"DEB887",cadetblue:"5F9EA0",chocolate:"D2691E",darkgreen:"006400",darkkhaki:"BDB76B",firebrick:"B22222",gainsboro:"DCDCDC",goldenrod:"DAA520",indianred:"CD5C5C",lawngreen:"7CFC00",lightblue:"ADD8E6",lightcyan:"E0FFFF", lightgrey:"D3D3D3",lightpink:"FFB6C1",limegreen:"32CD32",mintcream:"F5FFFA",mistyrose:"FFE4E1",olivedrab:"6B8E23",orangered:"FF4500",palegreen:"98FB98",peachpuff:"FFDAD9",rosybrown:"BC8F8F",royalblue:"4169E1",slateblue:"6A5ACD",slategray:"708090",steelblue:"4682B4",turquoise:"40E0D0",aquamarine:"7FFFD4",blueviolet:"8A2BE2",chartreuse:"7FFF00",darkorange:"FF8C00",darkorchid:"9932CC",darksalmon:"E9967A",darkviolet:"9400D3",dodgerblue:"1E90FF",ghostwhite:"F8F8FF",lightcoral:"F08080",lightgreen:"90EE90", mediumblue:"0000CD",papayawhip:"FFEFD5",powderblue:"B0E0E6",sandybrown:"F4A460",whitesmoke:"F5F5F5",floralwhite:"FFFAF0",forestgreen:"228B22",darkmagenta:"8B008B",deepskyblue:"00BFFF",navajowhite:"FFDEAD",yellowgreen:"9ACD32",greenyellow:"ADFF2F",lightsalmon:"FFA07A",lightyellow:"FFFFE0",saddlebrown:"8B4513",springgreen:"00FF7F",darkseagreen:"8FBC8F",antiquewhite:"FAEBD7",lemonchiffon:"FFFACD",lightskyblue:"87CEFA",mediumorchid:"BA55D3",mediumpurple:"9370D8",midnightblue:"191970",darkslateblue:"483D8B", darkslategray:"2F4F4F",darkturquoise:"00CED1",darkgoldenrod:"B8860B",lavenderblush:"FFF0F5",lightseagreen:"20B2AA",palegoldenrod:"EEE8AA",paleturquoise:"AFEEEE",palevioletred:"D87093",blanchedalmond:"FFEBCD",cornflowerblue:"6495ED",darkolivegreen:"556B2F",lightslategray:"778899",lightsteelblue:"B0C4DE",mediumseagreen:"3CB371",mediumslateblue:"7B68EE",mediumturquoise:"48D1CC",mediumvioletred:"C71585",mediumaquamarine:"66CDAA",mediumspringgreen:"00FA9A",lightgoldenrodyellow:"FAFAD2"},_round:function(a, b){var c=RegExp("^([-\\d]*)(\\.\\d{1,"+(b||3)+"})?.*");a=(a+"").replace(c,"$1$2");return a-=0},_hex2rgb:function(a){var b={r:0,g:0,b:0};3==a.length?(b.r=parseInt(a.substring(0,1)+a.substring(0,1),16),b.g=parseInt(a.substring(1,2)+a.substring(1,2),16),b.b=parseInt(a.substring(2,3)+a.substring(2,3),16)):(b.r=parseInt(a.substring(0,2),16),b.g=parseInt(a.substring(2,4),16),b.b=parseInt(a.substring(4,6),16));return b},_hex2hsv:function(a){var b=h.prototype;a=b._hex2rgb(a);return b._rgb2hsv(a)},_hex2lab:function(a){var b= h.prototype;a=b._hex2xyz(a);return b._xyz2lab(a)},_hex2xyz:function(a){var b=h.prototype;a=b._hex2rgb(a);return b._rgb2xyz(a)},_rgb2hsv:function(a){var b=a.r/255,c=a.g/255;a=a.b/255;var e=0,d=0,e=0,g={h:0,s:0,v:0};b>=c&&b>=c?(d=b,e=c>a?a:c):c>=a&&c>=b?(d=c,e=b>a?a:b):(d=a,e=c>b?b:c);g.v=d;g.s=d?(d-e)/d:0;g.s?(e=d-e,g.h=b==d?(c-a)/e:c==d?2+(a-b)/e:4+(b-c)/e,g.h=parseInt(60*g.h),0>g.v&&(g.v+=360)):g.h=0;g.s=parseInt(100*g.s);g.v=parseInt(100*g.v);return g},_rgb2lab:function(a){var b=h.prototype;a=b._rgb2xyz(a); return b._xyz2lab(a)},_rgb2xyz:function(a){var b="";a={r:a.r/255,g:a.g/255,b:a.b/255};var c=null;for(b in a)a[b]=0.04045<a[b]?Math.pow((a[b]+0.055)/1.055,2.4):a[b]/12.92,a[b]*=100;c={x:0.4124*a.r+0.3576*a.g+0.1805*a.b,y:0.2126*a.r+0.7152*a.g+0.0722*a.b,z:0.0193*a.r+0.1192*a.g+0.9505*a.b};for(b in c)c[b]=h.prototype._round(c[b]);return c},_rgb2hex:function(a){var b="",c={};c.r=a.r.toString(16);c.g=a.g.toString(16);c.b=a.b.toString(16);for(b in c)2>c[b].length&&(c[b]+=c[b]);return c.r+c.g+c.b},_hsv2rgb:function(a){var b= 0,c=0,e=0,d=0,g=0,e=a.h,g=a.s;a=a.v;var f={r:0,g:0,b:0};if(0==g)f.r=0==a?f.g=f.b=0:f.g=f.b=parseInt(255*a/100);else{360==e&&(e=0);e/=60;g/=100;a/=100;b=parseInt(e);c=e-b;e=a*(1-g);d=a*(1-g*c);g=a*(1-g*(1-c));switch(b){case 0:f.r=a;f.g=g;f.b=e;break;case 1:f.r=d;f.g=a;f.b=e;break;case 2:f.r=e;f.g=a;f.b=g;break;case 3:f.r=e;f.g=d;f.b=a;break;case 4:f.r=g;f.g=e;f.b=a;break;case 5:f.r=a,f.g=e,f.b=d}f.r=parseInt(255*f.r);f.g=parseInt(255*f.g);f.b=parseInt(255*f.b)}return f},_hsv2lab:function(a){var b= h.prototype;a=b._hsv2xyz(a);return b._xyz2lab(a)},_hsv2xyz:function(a){var b=h.prototype;a=b._hsv2rgb(a);return b._rgb2xyz(a)},_hsv2hex:function(a){var b=h.prototype;a=b._hsv2rgb(a);return b._rgb2hex(a)},_lab2rgb:function(a){var b=h.prototype;a=b._lab2xyz(a);return b._xyz2rgb(a)},_lab2hsv:function(a){var b=h.prototype;a=b._lab2rgb(a);return b._rgb2hsv(a)},_lab2xyz:function(a){var b="",c=0,e={},d=h.prototype,g=d._white;e.y=(a.l+16)/116;e.x=a.a/500+e.y;e.z=e.y-a.b/200;for(b in e)c=Math.pow(e[b],3), e[b]=0.008856<c?c:(e[b]-16/116)/7.787,e[b]=d._round(e[b]*g[b]);return{x:e.x,y:e.y,z:e.z}},_lab2hex:function(a){var b=h.prototype;a=b._lab2rgb(a);return b._rgb2hex(a)},_xyz2rgb:function(a){var b="",c=a.x/100,e=a.y/100;a=a.z/100;var d={};d.r=3.2406*c+-1.5372*e+-0.4986*a;d.g=-0.9689*c+1.8758*e+0.0415*a;d.b=0.0557*c+-0.204*e+1.057*a;for(b in d)d[b]=h.prototype._round(d[b]),0>d[b]&&(d[b]=0),d[b]=0.0031308<d[b]?1.055*Math.pow(d[b],1/2.4)-0.055:12.92*d[b],d[b]=Math.round(255*d[b]);return d},_xyz2hsv:function(a){var b= h.prototype;a=b._xyz2rgb(a);return b._rgb2hsv(a)},_xyz2lab:function(a){var b="",c={},e=h.prototype._white;for(b in a)c[b]=a[b]/e[b],c[b]=0.008856<c[b]?Math.pow(c[b],1/3):7.787*c[b]+16/116;return{l:116*c.y-16,a:500*(c.x-c.y),b:200*(c.y-c.z)}},_xyz2hex:function(a){var b=h.prototype;a=b._xyz2rgb(a);return b._rgb2hex(a)},type:function(a){var b="",c="";if("object"==typeof a){for(b in a)a[b]-=0;if(isNaN(a.r)&&isNaN(a.g))if(isNaN(a.h)&&isNaN(a.s))if(isNaN(a.x)&&isNaN(a.z)){if(!isNaN(a.l)||!isNaN(a.a))return"lab"; if(!isNaN(a.c)||!isNaN(a.m)||!isNaN(a.k))return"cmyk"}else return"xyz";else return"hsv";else return"rgb"}else if("number"==typeof a||"string"==typeof a)return c=a.substring(0,4),"rgb("==c||"rgba"==c?"css":"hex";return!1},validate:function(a,b){b=b||!1;var c=h.prototype,e=c.type(a),d="",g="",f=g=null;if(e){"css"==e?(f=c._rgb,e="rgb",g=a.replace(/rgb(a)?\(|\)/g,"").split(/,\s?/),a={r:g[0],g:g[1],b:g[2]}):f=c["_"+e];switch(e){case "css":case "rgb":case "hsv":case "lab":case "xyz":case "cmyk":for(d in f)!a[d]|| a[d]<f[d].min?a[d]=f[d].min:a[d]>f[d].max&&(a[d]="hsv"==e&&"h"==d?0:f[d].max);break;case "hex":(g=c._human[a.toLowerCase()])?a=g:(a=(""+a).toUpperCase().replace(/^#/g,"").replace(/[^A-F0-9]/g,"0"),d=a.length,6>d&&3<d?a+="000000".substring(d,6-d):6>d&&3>d?a+="000".substring(d,3-d):6<d&&(a=a.substring(0,6)))}return b?{type:e,raw:a}:a}return!1},convert:function(a,b){b=b||"rgb";var c="",e=h.prototype,d=e.validate(a,!0);return d&&(c="_"+d.type+"2"+b,e[c])?e[c](d.raw):!1},invert:function(a,b){b=b||"rgb"; var c="",e=h.prototype,d=null;if(d=e.validate(a,!0)){d=e["_"+d.type+"2rgb"](d.raw);for(c in d)d[c]=255-d[c];return"rgb"!=b?e["_rgb2"+b](d):d}return!1}};h.type=h.prototype.type;h.invert=h.prototype.invert;h.convert=h.prototype.convert;h.validate=h.prototype.validate;k.Color=h})(window);
// ^ import color lib: https://github.com/Shushik/i-color

// Get a reference to the dropbox and preview dom elements.
var dropbox = document.getElementById("dropbox");

// Init event handlers
dropbox.addEventListener("dragenter", dragEnter, false);
dropbox.addEventListener("dragexit", dragExit, false); // Not being triggered currently
dropbox.addEventListener("dragover", dragOver, false);
dropbox.addEventListener("drop", drop, false);

// Events trigged by user interaction with dropbox.
function preventEvent(evt) {
  // Also called a "no op handler" (borrowing terminology from assembly)  
  evt.stopPropagation();
  evt.preventDefault();
};

function dragEnter(evt) {
  preventEvent(evt);
  document.getElementById("dropbox").style.color="Red";
  console.log("drageEnter");
};

function dragExit(evt) {
  preventEvent(evt);
  document.getElementById("dropbox").style.color="Green";
  console.log("dragExit");
};

function dragOver(evt) {
  preventEvent(evt);
};

function drop(evt) {
  console.log("Drop")
  preventEvent(evt);
  // Start the loading bar
  NProgress.start();
  // Extract files from the event
  var files = evt.dataTransfer.files;
  // Call the handler iff 1 or more files dropped
  if (files.length > 0) handleFiles(files);
};


function handleFiles(files){
  // Only handle the first file
  var file = files[0];
  
  // Show a progress message
  // document.getElementById("droplabel").innerHTML = "Processing " + file.name;

  var reader = new FileReader();
  // define handler to load when file read is complete.
  reader.onload = fileReadComplete;
  // begin read operation
  reader.readAsDataURL(file);
};

// HANDER THAT IS TRIGGERED WHEN DROPPED IMAGE FINISHES LOADING.
function fileReadComplete(evt) {
  // Get a ref to preview element
  var preview = document.getElementById("preview");
  // Fill preview src with image data
  preview.src = evt.target.result;

  // Now, get the image from the preview!
  img = document.getElementById("preview");
  // we get dims for resizing to 250 max height or width
  var scaledDimensions = scaledWidthHeight(250, img.width,img.height)

  // We draw the image to a hidden canvas and a display canvas.
  drawImageToDOM(img, "my-canvas", scaledDimensions.width, scaledDimensions.height);
  drawImageToDOM(img, "my-hidden-canvas", scaledDimensions.width, scaledDimensions.height);
  
  // Analyze image
  analyzeImage();
};


function scaledWidthHeight(maxWidthOrHeight, w, h) {
  var result = {height:undefined, width:undefined};
  var ratio = w / h;
  if (w > h){
    w = maxWidthOrHeight;
    h = maxWidthOrHeight / ratio;
  } else {
    h = maxWidthOrHeight;
    w = maxWidthOrHeight * ratio
  }
  result.height = h;
  result.width = w;
  return result;
}


function drawImageToDOM(image, domElementName, width, height){
  var my_canvas = document.getElementById(domElementName);
  my_canvas.height = height;
  my_canvas.width = width;

  var my_canvas_context = my_canvas.getContext("2d");
  my_canvas_context.drawImage(image,0,0,width,height);
}


function textColorGivenBg(hex){
  // http://www.nbdtech.com/Blog/archive/2008/04/27/Calculating-the-Perceived-Brightness-of-a-Color.aspx
  var white = 'ffffff';
  var black =  '000000';
  return brightnessScore(hex) < 130 ? white:black;
};

function brightnessScore(hex) {
  // http://www.nbdtech.com/Blog/archive/2008/04/27/Calculating-the-Perceived-Brightness-of-a-Color.aspx
  var c = Color.convert(hex,'rgb');
  return Math.sqrt(c.r * c.r * .241 +  c.g * c.g * .691 +c.b * c.b * .068);
}


function analyzeImage(){
  var imageData = getPixelData();

  var colorCounts = {};
  //var colorSetLab = convertColorSetToLAB(colorPresets());
  var labColorSetInCubes = labColorSetPlacedInCubes();
  // A FOR LOOP THAT GOES FOUR ITEMS AT A TIME
  for (var i = 0 ; i < imageData.length; i+=4) {
    // GRAB RGB VALS AND CONVER TO LAB
    var currentPixelLAB = Color.convert({r:imageData[i], g:imageData[i+1], b:imageData[i+2]}, 'lab');
    // NOW FIND THE BEST BUCKET FOR EACH
    var closestColor = mostSimilarColorFast(currentPixelLAB, labColorSetInCubes);
    //var closestColor = mostSimilarColor(currentPixelLAB,colorSetLab);

    // CHECK for existance of best bucket value
    colorCounts[closestColor] = colorCounts[closestColor] || 0; // VERY INTERESTING HOW THIS WORKS, REVIEW
    colorCounts[closestColor] += 1;
  };

  topCols = topColors(colorCounts);
  desc = makeDescription(topCols);
  voiceURL = textToVoiceURL(desc[1]);
  document.getElementById('desc').innerHTML = ''; // CLEAR innerhtml
  playSound(voiceURL);

};

var getPixelData = function(){
  // Gets pixel data from the hidden canvas element
  var my_canvas = document.getElementById("my-hidden-canvas");
  var my_canvas_context = my_canvas.getContext("2d");
  var imgData = my_canvas_context.getImageData(0,0,my_canvas.width,my_canvas.height);
  return imgData.data;
};

var convertColorSetToLAB = function(colorSet){
  // Converts a colorset from hex to lab
  var colorSetLab = {};
  for (var color in colorSet) {
    colorSetLab[color] = Color.convert(colorSet[color],'lab');
  };
  return colorSetLab;
};



var analyzer;
var frequencyData;

function playSound(soundURL){
  // http://stackoverflow.com/questions/10105063/how-to-play-a-notification-sound-on-websites 
  console.log('playing sound: ' + soundURL);
  document.getElementById("sound").innerHTML = '<audio id="voice" autoplay="autoplay"><source src="' + soundURL + '" type="audio/mpeg" /><embed hidden="true" autostart="true" loop="false" src="' + soundURL + '" /></audio>';

  
  var audioContext = new (window.AudioContext||window.webkitAudioContext)();
  console.log('audioContext');

  var audioElement = document.getElementById("voice");
  console.log('audioelement');

  analyzer = audioContext.createAnalyser();
  analyzer.fftSize = 64;
  frequencyData = new Uint8Array(analyzer.frequencyBinCount);

  audioElement.addEventListener("canplay", function() {
    var source = audioContext.createMediaElementSource(this);
    source.connect(analyzer);
    analyzer.connect(audioContext.destination);
  });

  console.log('end');

  audioElement.addEventListener('ended', function() {shouldAnalyze = false;}, false);
  audioElement.addEventListener('canplaythrough', voiceLoaded, false);
  audioElement.addEventListener('playing', analyze, false);
}

var $intensity = $("#intensity");
function analyze() {
  analyzer.getByteFrequencyData(frequencyData);
  var magnitude = 0;
  for (var i = 0; i < frequencyData.length; i++) {
    magnitude += frequencyData[i];
  }
  var opacity = 0.8 - (magnitude/frequencyData.length)/40;
  $intensity.css({"opacity": opacity});
  setTimeout(analyze, 33);
}

function voiceLoaded(){
  // When voice is loaded, end loading bar and show descriptions.
  NProgress.done();
  showDescriptionEffect(desc[0]);
}

var textToVoiceURL = function(desc){
  // Alternate API: var soundURL = 'http://tts-api.com/tts.mp3?q=URLENCODEDTEXT';
  //http://www.voicerss.org/api/documentation.aspx
  var soundURL = 'http://api.voicerss.org/?key=fcde5c8f98c14007b442c9fd0a59aad4&src=URLENCODEDTEXT&hl=en-us&f=48khz_16bit_stereo'
  soundURL = soundURL.replace("URLENCODEDTEXT", encodeURIComponent(desc));
  return soundURL;
}


var mostSimilarColorFast = function(currentPixelLAB, labColorSet){
  var smallestDist = 10000; //sqrt(141072) = ?? 376// MAX POSSIBLE DISTANCE IN lab space = sqrt(2*(-128 - 128)^2 + (100-0)^2)
  //var mostSimilar = '';
  mostSimilar = undefined;
  colorSetLab = allNearbyColors(currentPixelLAB, labColorSet);
  for (var color in colorSetLab) {
    var checkedDist = perceptualColorDiff(currentPixelLAB, colorSetLab[color]);
    if (checkedDist < smallestDist) {
      smallestDist = checkedDist;
      mostSimilar = color;
    };
  };
  return mostSimilar;
};


function cubeId(lab){
  var cubeEdgeLen = getCubeEdgeLength();
  var l = Math.floor(lab.l/cubeEdgeLen)*cubeEdgeLen;
  var a = Math.floor(lab.a/cubeEdgeLen)*cubeEdgeLen;
  var b = Math.floor(lab.b/cubeEdgeLen)*cubeEdgeLen;

  return {l:l, a:a, b:b};
}

function labToString(lab) {
  // Force LAB coordinates to string, so it can be used as a unique ID.
  return lab.l + ','+ lab.a +',' + lab.b;
}

function getCubeEdgeLength(){
  return 12;
}

function labColorSetPlacedInCubes(){
  var cubeEdgeLen = getCubeEdgeLength();
  var cubes = createAllCubes(0,100,-128,128,-128,128,cubeEdgeLen);
  var colorSetLab = convertColorSetToLAB(colorPresets());

  for (var color in colorSetLab) {
    var thisLAB = {}
    thisLAB[color] = colorSetLab[color]
    var whichCube = cubeId(thisLAB[color], cubeEdgeLen);
    whichCube = labToString(whichCube);
    // One liner to check if cubes[whichCube] obj exists, if not create it.
    cubes[whichCube] = ( typeof cubes[whichCube] != 'undefined' && cubes[whichCube] instanceof Array ) ? cubes[whichCube] : []
      cubes[whichCube].push(thisLAB);
  }
  return cubes;
}

// createAllCubes(0,100,-128,128,-128,128,10)
function createAllCubes(minL,maxL,minA,maxA,minB,maxB,delta){
  all = {};
  ls = [];
  as = [];
  bs = [];

  for (var l = minL; l < maxL; l+=delta) {
    ls.push(l);
  }

  for (var a = minA; a < maxA; a+=delta) {
    as.push(a);
  }

  for (var b = minB; b < maxB; b+=delta) {
    bs.push(b);
  }

  for (var lVal in ls) {
    for (var aVal in as) {
      for (var bVal in bs) {
        // FORCE THE COORDINATES INTO A STRING SO WE CAN USE IT AS AN INDEX FOR THE ARRAY
        all[ls[lVal] + ','+ as[aVal] +',' + bs[bVal]] = [];

      }
    }

  }
  return all;
}


function allNearbyColors(lab,labColorSet){
  var cubeEdgeLen = getCubeEdgeLength();
  //var whichCube = cubeId(lab);
  var cubesIDs = allNearbyCubes(lab, cubeEdgeLen);
  var nearbyColorSetLab = {};

  for (index in cubesIDs) {
    var colorsInThisCube = labColorSet[cubesIDs[index]];

    if (colorsInThisCube != undefined){
      for (index in colorsInThisCube){
        colorObj = colorsInThisCube[index];
        var keys = [];
        for(var k in colorObj) keys.push(k);
        colorName = keys[0]
          nearbyColorSetLab[colorName] = colorsInThisCube[index][colorName]
      }
    } 		
  }

  return nearbyColorSetLab;
}


function allNearbyCubes(labcolor){
  cubeEdgeLen = getCubeEdgeLength();
  currentCube = cubeId(labcolor)
    all = [];
  ls = [];
  as = [];
  bs = [];

  ls.push(currentCube.l + cubeEdgeLen);
  ls.push(currentCube.l - cubeEdgeLen);
  ls.push(currentCube.l);

  as.push(currentCube.a + cubeEdgeLen);
  as.push(currentCube.a - cubeEdgeLen );
  as.push(currentCube.a);

  bs.push(currentCube.b + cubeEdgeLen);
  bs.push(currentCube.b - cubeEdgeLen);
  bs.push(currentCube.b);


  for (var lVal in ls) {
    for (var aVal in as) {
      for (var bVal in bs) {
        // FORCE THE COORDINATES INTO A STRING SO WE CAN USE IT AS AN INDEX FOR THE ARRAY
        all.push(ls[lVal] + ','+ as[aVal] +',' + bs[bVal]);

      }
    }

  }
  return all;
}


var topColors = function(colorCounts){
  var sortable = [];
  if ('undefined' in colorCounts) {delete colorCounts['undefined']};
  for (var color in colorCounts)
    sortable.push([color, colorCounts[color]]);
  sortable.sort(function(a, b) {return b[1] - a[1]});

  return sortable.slice(0,9);
};


function randomItem(inputArray){
  inputArray = inputArray.split("|");
  return inputArray[Math.floor(Math.random() * inputArray.length)];
}

function randomDesc(){
  var desc1 = 'I like this image! |I love this picture! |What a cool image! |Ooh! |Wow! |Brilliant! |Nice. ';
  var desc2 = "I see a |I'm seeing a |There's a |I sense a |I detect a ";
  var desc3 =  "whole lot of|great deal of|large amount of|lot of|very large amount of|high level of";
  var desc4 = ' COLOR0 and COLOR1, ';
  var desc5 = 'along with tones of|and strong tones of|and heavy tones of';
  var desc6 = ' COLOR2 .';
  var desc7 = ' I even see| I also see| I also detect| I also sense| I even sense| I even detect';
  var desc8 = ' COLOR3, COLOR4, and ';
  var desc9 = 'shades of COLOR5, COLOR6, COLOR7, and a';
  var desc10 = ' tiny bit of| bit of| touch of| small amount of'  ;
  var desc11 = ' COLOR8 .';

  var desc = randomItem(desc1)+randomItem(desc2)+randomItem(desc3)+randomItem(desc4)+randomItem(desc5)+randomItem(desc6)+randomItem(desc7)+randomItem(desc8)+randomItem(desc9)+randomItem(desc10)+randomItem(desc11);
  return desc;
}


var makeDescription = function(sortedColors) {
  var descTxt = randomDesc() //"Wow, I see a whole lot of COLOR0 and COLOR1, strong tones of COLOR2, and even some COLOR3, COLOR4, and shades of COLOR5, COLOR6, COLOR7, and COLOR8";
  if (sortedColors[0][0] == 'Sharkskin' && sortedColors[1][0] == 'White' && sortedColors[2][0] == 'Davy grey') {
    descTxt = descTxt + " . . . Thank you for creating me Hacker School! Never Graduate! ";
  }

  descTxt = descTxt.replace(/,\s/g,' , ');
  var wordsArray = descTxt.split(" "); 

  var voiceTxt = descTxt;
  var cols = colorPresets();

  for (index in sortedColors){

    var placeHolder = "COLOR" + index;
    var colorName = sortedColors[index][0];
    var hex = cols[sortedColors[index][0]];

    textCol = textColorGivenBg(hex);
    spanTag = '<span style="font-weight:bold;background-color:#' + hex + ';color:#' + textCol + ';">' + colorName + '</span>';

    //debugger;
    voiceTxt = voiceTxt.replace(placeHolder, colorName);
    //descTxt = descTxt.replace(placeHolder,spanTag);
    wordsArray[wordsArray.indexOf(placeHolder)] = spanTag;
  }

  // MAKE global for desc
  gDesc = wordsArray;
  return [wordsArray,voiceTxt];

  // PLACE INTO 
  // text = text.replace("COLOR1",sortedColors[0][0]);
  // text = text.replace("COLOR2",sortedColors[1][0]);
  // ...
};


var showDescription = function(text){
  document.getElementById('desc').innerHTML = text;
  //http://onehackoranother.com/projects/jquery/jquery-grab-bag/text-effects.html
  //$("#desc").typewriter();
}


function showDescriptionEffect(wordsArray,speed) {

  var $word = $("<span>"+ wordsArray.shift() + " " + "</span>");
  speed = $word.text().match(/[\.\,\!]/) ? 200 :  $word.text().length * 65 // 40 ms per char

    $word.hide();
  $("#desc").append($word);
  $word.fadeIn();
  if (wordsArray.length > 0) {
    setTimeout(function(){showDescriptionEffect(wordsArray)}, speed)};
}

var perceptualColorDiff = function(lab1, lab2){
  return Math.sqrt((lab2.l-lab1.l)*(lab2.l-lab1.l)+(lab2.a-lab1.a)*(lab2.a-lab1.a)+(lab2.b-lab1.b)*(lab2.b-lab1.b));
};

function colorPresets(){
  return {'Toast': '9A6E61', 'Pacifika green': '778120', 'UFO Green': '3cd070', 'Chenin yellow': 'DFCD6F', 'Pickled Bean': '6E4826', 'Sundance': 'C9B35B', 'Viridian Green': '678975', 'Shocking pink': 'fc0fc0', 'Light carmine pink': 'e66771', 'Dark chestnut': '986960', 'Burnt Sienna': 'E97451', 'Metallic Bronze': '49371B', 'Blush Pink': 'FF6FFF', 'Antique Bronze': '704A07', 'Carmine pink': 'eb4c42', 'Froly pink': 'F57584', 'Awesome Pink': 'ff2052', 'Periglacial Blue': 'E1E6D6', 'Merlin': '413C37', 'Light yellow': 'ffffed', 'Tussock brown': 'C5994B', 'Electric crimson': 'ff003f', 'Red Robin': '80341F', 'Grandis': 'FFD38C', 'Deep carmine pink': 'ef3038', 'Raspberry': 'e30b5d', 'Donkey Brown': 'A69279', 'Regal Blue': '013F6A', 'Chambray blue': '354E8C', 'Cerulean': '007ba7', 'Azure': '007fff', 'Pelorous Blue': '3EABBF', 'Lavender Rose': 'FBA0E3', 'Ginger': 'b06500', 'Sorrell Brown': 'CEB98F', 'Wild Sand': 'F4F4F4', 'Ultramarine blue': '4166f5', 'Cola': '3F2500', 'Deep Teal': '003532', 'Dogwood rose': 'd71868', 'Moccaccino': '6E1D14', 'Cod Gray': '0B0B0B', 'Mint cream': 'f5fffa', 'Blue Lagoon': '017987', 'Amaranth': 'e52b50', 'Hunter Green': '161D10', 'Han purple': '5218fa', 'Tractor red': 'fd0e35', 'Lightning Yellow': 'FCC01E', 'Bright pink': 'ff007f', 'Persian orange': 'd99058', 'Dark Fern': '0A480D', 'Solid Pink': '893843', 'Foggy Gray': 'CBCAB6', 'Cream Brulee': 'FFE5A0', 'Chinook': 'A8E3BD', 'Sea green': '2e8b57', 'Bluewood': '314459', 'Astronaut': '283A77', 'Falcon grey': '7F626D', 'Crimson glory': 'be0032', 'Light cornflower blue': '93ccea', 'Smoky black': '100c08', 'Granny Smith Apple': 'a8e4a0', 'Winter Hazel': 'D5D195', 'Frangipani Cream': 'FFDEB3', 'Blizzard Blue': 'ace5ee', 'Wood Bark': '261105', 'Harvard crimson': 'c90016', 'Dark pastel purple': '966fd6', 'Rose vale': 'ab4e52', 'Vista White': 'FCF8F7', 'Apricot': 'fbceb1', 'Deep Sea Green': '095859', 'Roman Coffee': '795D4C', 'Banana yellow': 'ffe135', 'Pale Gold': 'eee8aa', 'Deep Forest Green': '182D09', 'Brown Tumbleweed': '37290E', 'Persian blue': '1c39bb', 'Sinbad': '9FD7D3', 'Tuscan red': '66424d', 'Dark pink': 'e75480', 'Dull Lavender': 'A899E6', 'Electric indigo': '6f00ff', 'Light goldenrod yellow': 'fafad2', 'Regent Gray': '86949F', 'Rouge': 'A23B6C', 'Jungle Mist': 'B4CFD3', 'Zinnwaldite': 'EBC2AF', 'Sugar Cane': 'F9FFF6', 'Blue': '0000ff', 'Burning Sand': 'D99376', 'Nile Blue': '193751', 'Pale silver': 'c9c0bb', 'Alizarin crimson': 'e32636', 'Dark goldenrod': 'b8860b', 'Moss green': 'addfad', 'Old mauve': '673147', 'Christalle': '33036B', 'Tower Gray': 'A9BDBF', 'Mauvelous': 'ef98aa', 'Apricot Peach': 'FBCEB1', 'Dark Blue': '0000C8', 'Emerald': '50c878', 'Bleu de France': '318ce7', 'Pumice': 'C2CAC4', 'Aqua Forest': '5FA777', 'Pewter': '96A8A1', 'Jumbo grey': '7C7B82', 'Gamboge': 'e49b0f', 'Fawn': 'e5aa70', 'Bittersweet': 'fe6f5e', 'Silk': 'BDB1A8', 'Medium violet red': 'c71585', 'Carmine red': 'ff0038', 'Milan': 'FAFFA4', 'Livid Brown': '4D282E', 'Rosewood': '65000b', 'Cornell Red': 'b31b1b', 'Candlelight': 'FCD917', 'Bitter Lemon': 'CAE00D', 'Razzmatazz': 'e3256b', 'Blue green': '0d98ba', 'Cognac': '9F381D', 'Bay Leaf': '7DA98D', 'Orchid White': 'FFFDF3', 'Pink pearl': 'e7accf', 'Rich black': '004040', 'Persian indigo': '32127a', 'Karry': 'FFEAD4', 'Nutmeg': '81422C', 'Wheatfield': 'F3EDCF', 'Calico cream': 'E0C095', 'Dark pastel red': 'c23b22', 'Copper Rose': '996666', 'Early Dawn': 'FFF9E6', 'Watusi': 'FFDDCF', 'Android Green': 'a4c639', 'Aqua Deep': '014B43', 'Chamoisee': 'a0785a', 'Seaweed': '1B2F11', 'Bunting': '151F4C', 'Fluorescent orange': 'ffbf00', 'Fuchsia Blue': '7A58C1', 'Cherokee': 'FCDA98', 'Pine Cone': '6D5E54', 'Geebung': 'D18F1B', 'Wild Rice': 'ECE090', 'Antique Brass': 'C88A65', 'Tawny': 'cd5700', 'Light Caramel': 'FFDDAF', 'Wax Flower': 'FFC0A8', 'Deep Cerulean': '007BA7', 'Clementine': 'E96E00', 'Deep lilac': '9955bb', 'Desert': 'c19a6b', 'Rock Spray': 'BA450C', 'Calypso': '31728D', 'French beige': 'a67b5b', 'Disco': '871550', 'Copper Rust': '944747', 'Sunset': 'fad6a5', 'Brink Pink': 'FB607F', 'Cafe Royale': '6F440C', 'Prairie Sand': '9A3820', 'Crail': 'B95140', 'Deep pink': 'ff1493', 'Silver Sand': 'BFC1C2', 'Cotton candy': 'ffbcd9', 'Rose Fog': 'E7BCB4', 'Glaucous': '6082b6', 'Halay\\u00e0 \\u00fabe': '663854', 'Electric green': '00ff00', 'Hit Gray': 'A1ADB5', 'Trinidad': 'E64E03', 'Snuff': 'E2D8ED', 'Golden brown': '996515', 'Sangria': '92000A', 'Jagged Ice': 'C2E8E5', 'Tea rose': 'f4c2c2', 'Celery': 'B8C25D', 'Earth yellow': 'e1a95f', 'Holly': '011D13', 'Cardin Green': '01361C', 'Sandrift': 'AB917A', 'Tacao': 'EDB381', 'Seashell Peach': 'FFF5EE', 'Jasmine': 'f8de7e', 'Ash': 'C6C3B5', 'Deep Koamaru': '1B127B', 'Flamingo': 'F2552A', 'Hemlock': '5E5D3B', 'Blue Romance': 'D2F6DE', 'Chablis': 'FFF4F3', 'Marshland': '0B0F08', 'Comet': '5C5D75', 'Pale Canary': 'FFFF99', 'Wild Watermelon': 'fc6c85', 'Bone': 'e3dac9', 'Biscay Blue': '1B3162', 'Tumbleweed': 'deaa88', 'Persian Red': 'CC3333', 'Mocha': '782D19', 'Mamba': '8E8190', 'Rose Bud Cherry': '800B47', 'Watercourse': '056F57', 'Fedora': '796A78', 'Camouflage': '3C3910', 'Salem green': '097F4B', 'Gray Suit': 'C1BECD', 'Brick red': 'cb4154', 'Charade Blue Gray': '292937', 'Amethyst': '9966cc', 'Melon': 'fdbcb4', 'Beeswax': 'FEF2C7', 'Paradiso': '317D82', 'Bitter Green': '868974', 'Reno Sand': 'A86515', 'Sauvignon': 'FFF5F3', 'Bronzetone': '4D400F', 'Medium Persian blue': '0067a5', 'Aquamarine Blue': '71D9E2', 'Bronze': 'cd7f32', 'Light pastel purple': 'b19cd9', 'Dark jungle green': '1a2421', 'Royal Blue': '4169E1', 'Pale green': '98fb98', 'Outrageous Orange': 'ff6e4a', 'Bahia': 'A5CB0C', 'Safety orange': 'ff6700', 'Deco': 'D2DA97', 'Tawny Port': '692545', 'Equator orange': 'E1BC64', 'Medium champagne': 'f3e5ab', 'Lavender rose': 'fba0e3', 'Mariner blue': '286ACD', 'Buttermilk': 'FFF1B5', 'Carnation': 'F95A61', 'Terra cotta': 'e2725b', 'Taupe gray': '8b8589', 'Mischka': 'D1D2DD', 'Light Wisteria': 'C9A0DC', 'Tiara': 'C3D1D1', 'Red Devil': '860111', 'Lemon Yellow': 'fff44f', 'Thatch': 'B69D98', 'Jungle green': '29ab87', 'Rich Gold': 'A85307', 'Raven': '727B89', 'Spring Rain': 'ACCBB1', 'Night Rider': '1F120F', 'French Gray': 'BDBDC6', 'Persian red': 'cc3333', 'Ball Blue': '21abcd', 'Japanese Laurel': '0A6906', 'Yukon Gold': '7B6608', 'Sepia Skin': '9E5B40', 'Sambuca': '3A2010', 'Cape Cod': '3C4443', 'Veronica': 'a020f0', "Nature's green": '1E433C', 'Hit Pink': 'FFAB81', 'Dark coral': 'cd5b45', 'Mid Gray': '5F5F6E', 'Brown Bramble': '592804', 'English Walnut': '3E2B23', 'Dawn': 'A6A29A', 'Floral white': 'fffaf0', 'Lemon Grass': '9B9E8F', 'Judge Gray': '544333', 'Snow': 'fffafa', 'Wine Berry': '591D35', 'Valentino violet': '350E42', 'Hillary': 'ACA586', 'Pine Glade': 'C7CD90', 'Dark cerulean': '08457e', 'Air Force blue': '5d8aa8', 'Fun Green': '016D39', 'Chalky': 'EED794', 'Gray Olive': 'A9A491', 'Hazy white': 'F6F7F7', 'Deep Cove': '051040', 'Concrete': 'F2F2F2', 'Supernova yellow': 'FFC901', 'Raspberry glace': '915f6d', 'Verdun Green': '495400', 'Gull Gray': '9DACB7', 'Sienna': '882d17', 'Light Orchid': 'E29CD2', 'Star Dust': '9F9F9C', 'Dark red': '8b0000', 'Cherrywood': '651A14', 'Ecru White': 'F5F3E5', 'Kelly green': '4cbb17', 'Downriver': '092256', 'Limed Ash': '747D63', 'Indigo Purple': '4b0082', 'Light fuchsia pink': 'f984ef', 'Han blue': '446ccf', 'Husk': 'B7A458', 'Neon fuchsia': 'fe59c2', 'Apricot White': 'FFFEEC', 'Tarawera': '073A50', 'Bright maroon': 'c32148', 'Spectra': '2F5A57', 'Catskill White': 'EEF6F7', 'Black Rock': '0D0332', 'Red violet': 'c71585', 'Deep cerise': 'da3287', 'Vivid auburn': '922724', 'Black Forest': '0B1304', 'Hippie Green': '53824B', 'Vista Blue': '8FD6B4', 'Vivid tangerine': 'ffa089', 'Salomie': 'FEDB8D', 'Ming': '36747D', 'Forest green': '228b22', 'Brink pink': 'fb607f', 'Tamarind ': '341515', 'Mint': '3eb489', 'Pale cerulean': '9bc4e2', 'Blue Dianne': '204852', 'Laser Lemon': 'fefe22', 'Burnt umber': '8a3324', 'Tangerine yellow': 'ffcc00', 'Napier green': '2a8000', 'Quincy brown': '623F2D', 'Bright green': '66ff00', 'Royal Heath': 'AB3472', 'Pumpkin': 'ff7518', 'Eternity': '211A0E', 'Tiffany Blue': '0abab5', 'Pumpkin Skin': 'B1610B', 'Old rose': 'c08081', 'Tuatara grey': '363534', 'Brick Red': 'C62D42', 'Flint': '6F6A61', 'Tahiti Gold': 'E97C07', 'Au Chico': '97605D', 'Totem Pole': '991B07', 'Pale Rose': 'FFE1F2', 'June bud': 'bdda57', 'Medium Purple': '9370DB', 'Wine': '722f37', 'Spring bud': 'a7fc00', 'Orinoco': 'F3FBD4', 'Bay blue': '273A81', 'Waterspout': '00ffff', 'Envy': '8BA690', 'Peanut': '782F16', 'Hawkes Blue': 'D4E2FC', 'Mosque': '036A6E', 'Muck': '2F270E', 'Lavender pink': 'fbaed2', 'Champagne': 'fad6a5', 'Boston University Red': 'cc0000', 'Malibu': '7DC8F7', 'Redwood': '5D1E0F', 'Fruit Salad': '4F9D5D', 'Porcelain': 'EFF2F3', 'Marzipan': 'F8DB9D', 'Wasabi': '788A25', 'Selective Yellow': 'FFBA00', 'Amulet': '7B9F80', 'Dark terra cotta': 'cc4e5c', 'Pale chestnut': 'ddadaf', 'Gray': '808080', 'Granny Smith': '84A0A0', 'Brandeis blue': '0070ff', 'Bright ube': 'd19fe8', 'Deep Bronze': '4A3004', 'Emperor': '514649', 'Amber': 'ffbf00', 'Alto white': 'DBDBDB', 'Madison': '09255D', 'Fiery Orange': 'B35213', 'Ceramic': 'FCFFF9', 'Lavender': 'e6e6fa', 'Jagger': '350E57', 'Cardinal Pink': '8C055E', 'Bridesmaid': 'FEF0EC', 'Flush Mahogany': 'CA3435', 'Cocoa Brown': '301F1E', 'Cadillac': 'B04C6A', 'Banana Mania': 'fae7b5', 'Peat': '716B56', 'Ruddy brown': 'bb6528', 'Mako': '444954', 'Rose quartz': 'aa98a9', 'Copperfield': 'DA8A67', 'Metallic Copper': '71291D', 'Pink Swan grey': 'BEB5B7', 'Java': '1FC2C2', 'Astral': '327DA0', 'Spring Leaves': '578363', 'Piggy pink': 'fddde6', 'Aubergine': '3B0910', 'Cerise Red': 'DE3163', 'Gulf Blue': '051657', 'Mimosa': 'F8FDD3', 'Loafer': 'EEF4DE', 'Bismark': '497183', 'Dark olive green': '556b2f', 'Guppie green': '00ff7f', 'Liver': '534b4f', 'Acapulco Teal': '7CB0A1', 'Eastern Blue': '1E9AB0', 'Lust red': 'e62020', 'Radical Red': 'ff355e', 'River Bed': '434C59', 'Medium jungle green': '1c352d', 'Picasso': 'FFF39D', 'Sisal brown': 'D3CBBA', 'Barberry': 'DED717', 'Las Palmas': 'C6E610', 'Pale cornflower blue': 'abcdef', 'Pale gold': 'e6be8a', 'Gumbo': '7CA1A6', 'Baltic Sea': '2A2630', 'Deep Sapphire': '082567', 'Brown Pod': '401801', 'Spring green': '00ff7f', 'Shadow beige': '8a795d', 'Magic mint': 'aaf0d1', 'Cream': 'fffdd0', 'Roof Terracotta': 'A62F20', 'Vesuvius': 'B14A0B', 'Pastel Pink': 'FFD1DC', 'Willow Grove': '65745D', 'Carnation Pink': 'FFA6C9', 'Malta': 'BDB2A1', 'Mobster': '7F7589', 'Kelp': '454936', 'Maroon': '800000', 'Carnaby Tan': '5C2E01', 'Romantic': 'FFD2B7', 'Medium red violet': 'bb3385', 'Lavender magenta': 'ee82ee', 'Gurkha': '9A9577', 'Paprika': '8D0226', 'Chocolate orange': 'd2691e', 'Fire engine red': 'ce2029', 'Daisy Bush': '4F2398', "Robin's Egg Blue": '1fcecb', 'Pampas': 'F4F2EE', 'Sea Buckthorn': 'FBA129', 'Loulou': '460B41', 'Fire': 'AA4203', 'Burnt Maroon': '420303', 'Don Juan': '5D4C51', 'Cabaret': 'D94972', 'Orient': '015E85', 'Mulberry Wood Violet': '5C0536', 'Madras': '3F3002', 'Sahara Sand': 'F1E788', 'Gondola': '261414', 'Nebula': 'CBDBD6', 'Daintree': '012731', 'Parsley': '134F19', 'Tango': 'ED7A1C', 'Elephant': '123447', 'Marigold': 'B98D28', 'Bole': '79443b', 'Scorpion Brown': '695F62', 'Bali Hai': '859FAF', 'Irish Coffee': '5F3D26', 'El Paso': '1E1708', 'Mondo': '4A3C30', 'Bandicoot': '858470', 'Coriander': 'C4D0B0', 'Ferra': '704F50', 'Fuchsia': 'ff00ff', 'Plum': 'dda0dd', 'Witch Haze': 'FFFC99', 'Cosmic': '76395D', 'Keppel': '3AB09E', 'Ruddy': 'ff0028', 'Opera mauve': 'b784a7', 'International orange': 'ff4f00', 'Chelsea Gem': '9E5302', 'Corduroy': '606E68', 'Caf\\u00e9 au lait': 'a67b5b', 'Lavender purple': '967bb6', 'Claret': '7F1734', 'Tan': 'd2b48c', 'Rose Bud': 'FBB2A3', 'Pale spring bud': 'ecebbd', 'Rusty Nail': '86560A', 'Monte Carlo': '83D0C6', 'Remy': 'FEEBF3', 'Sunshade': 'FF9E2C', 'Romance': 'FFFEFD', 'Shakespeare': '4EABD1', 'Orange': 'ffa500', 'Monarch': '8B0723', 'Clinker': '371D09', 'Red': 'ff0000', 'Charcoal': '36454f', 'Mulled Wine': '4E4562', 'Bright cerulean': '1dacd6', 'Silver Rust': 'C9C0BB', 'Moon Raker': 'D6CEF6', 'Chrome yellow': 'ffa700', 'Coconut Cream': 'F8F7DC', 'Persian plum': '701c1c', 'Mojo red': 'C04737', 'Umber': '635147', 'Sundown': 'FFB1B3', 'Tabasco': 'A02712', 'Aureolin yellow': 'fdee00', 'Tuscany': 'BD5E2E', 'East Bay Blue': '414C7D', 'Kenyan Copper': '7C1C05', 'Pippin': 'FFE1DF', 'Palm Leaf': '19330E', 'Deep carrot orange': 'e9692c', 'Shocking': 'E292C0', 'Cannon Pink': '894367', 'Battleship grey': '848482', 'Sepia Black': '2B0202', 'Buttered Rum': 'A1750D', 'Twilight lavender': '8a496b', 'Rodeo Dust': 'C9B29B', 'Ripe Lemon': 'F4D81C', 'Congo Brown': '593737', 'Teal Blue': '044259', 'Coral Tree': 'A86B6B', 'Inchworm': 'b2ec5d', 'Medium lavender magenta': 'dda0dd', 'Vivid Tangerine': 'FF9980', 'Deep purple': '2C1632', 'Old Lace': 'FDF5E6', 'London Hue': 'BEA6C3', 'Outer Space': '414a4c', 'Maroon Flush': 'C32148', 'Persimmon': 'FF6B53', 'Chathams Blue': '175579', 'Dark Dove gray': '403B38', 'Buttery White': 'FFFCEA', 'Pale Oyster': '988D77', 'Camarone': '00581A', 'Ziggurat blue': 'BFDBE2', 'Pine Green': '01796F', 'Gable Green': '163531', 'North Texas Green': '059033', 'Iris': '5a4fcf', 'Tradewind': '5FB3AC', 'Blue Stone': '016162', 'Leather': '967059', 'Hurricane': '877C7B', 'Mint green': '98ff98', 'Stromboli': '325D52', 'Green Yellow': 'ADFF2F', 'Swamp Green': 'ACB78E', 'Prim': 'F0E2EC', 'Deep coffee': '704241', 'Fuzzy Wuzzy': 'cc6666', 'Utah Crimson': 'd3003f', 'Sage': '9EA587', 'Fern': '71bc78', 'Chilean Fire': 'F77703', 'Black Rose': '67032D', 'Yellow Green': 'C5E17A', 'Shingle Fawn': '6B4E31', 'Dark turquoise': '00ced1', 'Cornflower blue': '6495ed', 'Rose bonbon': 'f9429e', 'Mona Lisa': 'FFA194', 'Tusk': 'EEF3C3', 'Medium carmine': 'af4035', 'American rose': 'ff033e', 'Tobacco Brown': '715D47', 'Pizza': 'C99415', 'Golden Bell': 'E28913', 'Onyx': '0f0f0f', 'UCLA Blue': '536895', 'Oasis': 'FEEFCE', 'Rebel': '3C1206', 'Mute Pink': 'D69188', 'Turtle Green': '2A380B', 'Zinnwaldite brown': '2c1608', 'Tana': 'D9DCC1', 'Orange Peel': 'FFA000', 'Sap green': '507d2a', 'Eton blue': '96c8a2', 'Pompadour purple': '660045', 'Islamic green': '009000', 'Caribbean green': '00cc99', 'Limeade': '6F9D02', 'Swans Down': 'DCF0EA', 'Van Cleef': '49170C', 'Mikado yellow': 'ffc40c', 'Link Water': 'D9E4F5', 'Dove Gray': '6D6C6C', 'Rangitoto': '2E3222', 'Glitter': 'e6e8fa', 'Orange Yellow': 'f8d568', 'Dark raspberry': '872657', 'Biloba Flower': 'B2A1EA', 'Gossamer': '069B81', 'Green Spring': 'B8C1B1', 'West Side': 'FF910F', 'Bunker': '0D1117', 'Raw Umber': '734A12', 'Viridian': '40826d', 'Scampi': '675FA6', 'Kangaroo': 'C6C8BD', 'Columbia blue': '9bddff', 'Jordy Blue': '8AB9F1', 'Orange red': 'ff4500', 'Taupe Gray': 'B3AF95', 'Paris Green': '50c878', 'Wewak': 'F19BAB', 'Blue Marguerite': '7666C6', 'Folly': 'ff004f', 'Pale taupe': 'bc987e', 'Mabel blue': 'D9F7FF', 'Hint of Green': 'E6FFE9', 'Sandy Beach': 'FFEAC8', 'Solitude': 'EAF6FF', 'Maya blue': '73c2fb', 'Yellow': 'ffff00', 'Stiletto': '9C3336', 'Red Violet': 'C71585', 'Light Olive': '9ab973', 'Medium aquamarine': '66ddaa', 'Skeptic': 'CAE6DA', 'San Marino': '456CAC', 'Cedar Wood': '711A00', 'Papaya whip': 'ffefd5', 'Chartreuse': '7fff00', 'Racing green': '004225', 'Mountbatten pink': '997a8d', 'Falu Red': '801818', 'Dewdrop': 'EAFFFE', 'Soft Peach': 'F5EDEF', 'Neon green': '39ff14', 'Wheat': 'f5deb3', 'Paarl': 'A65529', 'Medium orchid': 'ba55d3', 'Cadmium yellow': 'fff600', 'Vulcan': '10121D', 'Corn yellow': 'fbec5d', 'Crusta': 'FD7B33', 'Jon': '3B1F1F', 'Crown of Thorns': '771F1F', 'Opium': '8E6F70', 'Coffee Bean': '2A140E', 'Electric cyan': '00ffff', 'French Lilac': 'ECC7EE', 'Cadmium green': '006b3c', 'Cool black': '002e63', 'Bamboo': 'DA6304', 'Magenta': 'ff00ff', 'Dark midnight blue': '003366', 'Asphalt': '130A06', 'Blue purple': '8a2be2', 'Bright Red': 'B10000', 'Copper Canyon': '7E3A15', 'Tory Blue': '1450AA', 'Hollywood Cerise': 'F400A1', 'Paris White': 'CADCD4', 'Sandy brown': 'f4a460', 'Parchment': 'F1E9D2', 'Celestial blue': '4997d0', 'Half Colonial White': 'FDF6D3', 'Deep Blush': 'E47698', 'Black': '000000', 'Pastel yellow': 'fdfd96', 'Copper rose': '996666', 'Feijoa': '9FDD8C', 'East Side': 'AC91CE', 'Fern green': '4f7942', 'Quill Gray': 'D6D6D1', 'Moody Blue': '7F76D3', 'Blue Bayoux': '496679', 'Azure mist/web': 'f0ffff', 'Flavescent': 'f7e98e', 'Vegas gold': 'c5b358', 'Polo Blue': '8DA8CC', 'Flirt': 'A2006D', 'Lincoln green': '195905', 'Cinnamon': 'd2691e', 'Muesli': 'AA8B5B', 'Tan Hide': 'FA9D5A', 'Soft red': 'cb410b', 'French Pass': 'BDEDFD', 'Serenade': 'FFF4E8', 'Rangoon Green': '1C1E13', 'Concord': '7C7B7A', 'Hint of Red': 'FBF9F9', 'Dell green': '396413', 'Sherwood Green': '02402C', 'Munsell white': 'f2f3f4', 'Ocean Green': '41AA78', 'Deluge lavendar': '7563A8', 'Cherry': 'de3163', 'Mardi Gras': '350036', 'Jambalaya': '5B3013', 'Saffron': 'f4c430', 'Sandy taupe': '967117', 'Medium candy apple red': 'e2062c', 'Givry': 'F8E4BF', 'Khaki': 'c3b091', 'Pomegranate': 'F34723', 'Off Green': 'E6F8F3', 'Famous': 'ff00ff', 'Jet Stream': 'B5D2CE', 'Bronco': 'ABA196', 'Light Thulian pink': 'e68fac', 'Pale pink': 'fadadd', 'Regent St Blue': 'AAD6E6', 'Dark tan': '918151', 'Aqua': '00ffff', 'Sycamore': '908D39', 'Red brown': 'a52a2a', 'Hot Cinnamon': 'D2691E', 'Light blue': 'add8e6', 'Congress Blue': '02478E', 'Cadmium orange': 'ed872d', 'Desert Sand': 'EDC9AF', 'Dollar bill': '85bb65', 'Wisp Pink': 'FEF4F8', 'Tropical Blue': 'C3DDF9', 'Pink Lace': 'FFDDF4', 'Granite Green': '8D8974', 'Rustic Red': '480404', 'Melanzane': '300529', 'Lavender Purple': '967BB6', 'Red Damask': 'DA6A41', 'Persian pink': 'f77fbe', 'Hacienda yellow': '98811B', 'Navy blue': '000080', 'Lunar Green': '3C493A', 'Bianca': 'FCFBF3', 'Studio': '714AB2', 'Lavender indigo': '9457eb', 'Mustard yellow': 'ffba00', 'Boysenberry': '873260', 'Blaze Orange': 'FF6600', 'Zaffre': '0014a8', 'Battleship Gray': '828F72', 'Mantis': '74c365', 'Aths Special': 'ECEBCE', 'Mai Tai': 'B06608', 'Anzac': 'E0B646', 'Cool grey': '8c92ac', 'Rich lilac': 'b666d2', 'Limed Oak': 'AC8A56', 'Black Russian': '0A001C', 'Pale Sky': '6E7783', 'Brilliant rose': 'ff55a3', 'Bubble gum': 'ffc1cc', 'Piggy Pink': 'FDD7E4', 'Mirage': '161928', 'Snow Drift': 'F7FAF7', 'Satin Linen': 'E6E4D4', 'Spring Sun': 'F6FFDC', 'San Juan': '304B6A', 'Shalimar': 'FBFFBA', 'Shiraz': 'B20931', 'Duke blue': '00009c', 'Candy pink': 'e4717a', 'Palatinate blue': '273be2', 'Chestnut': 'cd5c5c', 'Magenta / Fuchsia': 'FF00FF', 'India green': '138808', 'Black Pearl': '041322', 'Del Rio': 'B09A95', 'Fall Green': 'ECEBBD', 'Neon Carrot': 'ffa343', 'Falu red': '801818', 'Dallas brown': '6E4B26', 'Windsor purple': '3C0878', 'Venice Blue': '055989', 'Travertine': 'FFFDE8', 'Cruise': 'B5ECDF', 'Steel Blue': '4682B4', 'Gray Asparagus': '465945', 'Canary yellow': 'ffef00', 'Teak': 'B19461', 'Teal': '008080', 'Cosmos': 'FFD8D9', 'Yellow Orange': 'ffae42', 'Kournikova': 'FFE772', 'Violet Red': 'f75394', 'Red Orange': 'ff5349', 'Mint Julep': 'F1EEC1', 'Otter brown': '654321', 'Bilbao': '327C14', 'Byzantine violet': 'bd33a4', 'Fuego': 'BEDE0D', 'Castro ': '52001F', 'Tapa Grey': '7B7874', 'China Ivory': 'FCFFE7', 'Medium spring green': '00fa9a', 'Blue Gray': '6699cc', 'Cadet Blue': 'A9B2C3', 'Lavender blue': 'ccccff', 'Forget Me Not': 'FFF1EE', 'Pearl': 'eae0c8', 'Lavender blush': 'fff0f5', 'Buccaneer brown': '622F30', 'Rifle green': '414833', 'Guardsman Red': 'BA0101', 'Powder Ash': 'BCC9C2', 'Surf': 'BBD7C1', 'Turbo': 'FAE600', 'Bright Green': '66FF00', 'Sky magenta': 'cf71af', 'Iroko': '433120', 'Modest beige': '967117', 'Bison Hide': 'C1B7A4', 'Jacarta purple': '3A2A6A', 'Nomad': 'BAB1A2', 'Lynch': '697E9A', 'Deep sky blue': '00bfff', 'Green House': '24500F', 'Turkish rose': 'b57281', 'Vanilla': 'f3e5ab', 'Buddha Gold': 'C1A004', 'Pirate Gold': 'BA7F03', 'Foliage Green': '27504B', 'Zambezi': '685558', 'Seal brown': '321414', 'Cape Palliser': 'A26645', 'Cloud Burst': '202E54', 'Ship Cove': '788BBA', 'Cherry blossom pink': 'ffb7c5', 'Persian Blue': '1C39BB', 'Alizarin Crimson': 'E32636', 'Edgewater': 'C8E3D7', 'Cerulean blue': '2a52be', 'Saddle brown': '8b4513', 'UA blue': '0033aa', 'Dull Gold': '808000', 'Aquamarine': '7fffd4', 'Valencia': 'D84437', 'Papaya Whip': 'FFEFD5', 'Satin sheen gold': 'cba135', 'Beryl Green': 'DEE5C0', 'Tangaroa': '03163C', 'Racing Green': '0C1911', 'Cape Honey': 'FEE5AC', 'Clear Day': 'E9FFFD', 'Green Haze': '01A368', 'Double Colonial White': 'EEE3AD', 'Ube': '8878c3', 'Charm': 'D47494', 'Silver': 'c0c0c0', 'Gigas': '523C94', 'Turquoise blue': '00ffef', 'Wild Willow': 'B9C46A', 'Geraldine': 'FB8989', 'Light apricot': 'fdd5b1', 'Davy grey': '555555', 'Iron': 'D4D7D9', 'Dark cyan': '008b8b', 'Tahuna Sands': 'EEF0C8', 'Janna': 'F4EBD3', 'Hampton': 'E5D8AF', 'Dark Tan': '661010', 'Sulu': 'C1F07C', 'Tuft Peach': 'FFDDCD', 'Bright Turquoise': '08E8DE', 'Lilac Bush': '9874D3', 'Kilamanjaro': '240C02', 'Pink': 'ffc0cb', 'Royal purple': '7851a9', 'Granny Apple': 'D5F6E3', 'Alien Green': '66FF66', 'Woodland': '4D5328', 'Waterloo ': '7B7C94', 'Merlot': '831923', 'Purple Heart': '69359c', 'Trolley Grey': '808080', 'Pesto': '7C7631', 'Urobilin': 'e1ad21', 'Sapling': 'DED4A4', 'Log Cabin': '242A1D', 'Pattens Blue': 'DEF5FF', 'Fountain Blue': '56B4BE', 'Quicksand': 'BD978E', 'Dark Burgundy': '770F05', 'Olive': '808000', 'Gold Tips': 'DEBA13', 'Deep peach': 'ffcba4', 'Prussian blue': '003153', 'Fuchsia Pink': 'C154C1', 'Ship Gray': '3E3A44', 'Golden Grass': 'DAA520', 'Hoki': '65869F', 'Saratoga': '555B10', 'Loblolly': 'BDC9CE', 'Manatee grey': '979aaa', 'Eclipse': '311C17', 'Perfume': 'D0BEF8', 'Dingley': '5D7747', 'Carissma': 'EA88A8', 'Brilliant lavender': 'f4bbff', 'Spring Green': '00FF7F', 'Thulian pink': 'de6fa1', 'San Felix': '0B6207', 'Sharkskin': '25272C', 'Laurel green': 'a9ba9d', 'Indian yellow': 'e3a857', 'Olive Drab': '6b8e23', 'Light sea green': '20b2aa', 'Tide': 'BFB8B0', 'Go Ben': '726D4E', 'Indochine': 'C26B03', 'Pavlova': 'D7C498', 'Walnut': '773F1A', 'Crater Brown': '462425', 'Rose pink': 'ff66cc', 'Pink Flamingo': 'fc74fd', 'Tundora': '4A4244', 'Deep chestnut': 'b94e48', 'Bright Sun': 'FED33C', 'Cumin Seed': '924321', 'Pearl Bush': 'E8E0D5', 'Lily': 'C8AABF', 'Scotch Mist': 'FFFBDC', 'Pale carmine': 'af4035', 'Rosso corsa': 'd40000', 'Gray Nickel': 'C3C3BD', 'Fashion fuchsia': 'f400a1', 'St Tropaz': '2D569B', 'Ruby': 'e0115f', 'Persian Indigo': '32127A', 'Temptress': '3B000B', 'Pale brown': '987654', 'Army green': '4b5320', 'Pink Sherbet': 'f78fa7', 'Moccasin': 'faebd7', 'Palm Green': '09230F', 'Pastel magenta': 'f49ac2', 'Willow Brook white': 'DFECDA', 'Rock': '4D3833', 'Careys Pink': 'D29EAA', 'Blush': 'de5d83', 'Merino': 'F6F0E6', 'Caper': 'DCEDB4', 'Costa Del Sol': '615D30', 'Ferrari Red': 'ff2800', 'Half Spanish White': 'FEF4DB', 'Bronze Olive': '4E420C', 'Evening Sea': '024E46', 'Dark pastel green': '03c03c', 'Crocodile': '736D58', 'Cerise Pink': 'de3163', 'Japanese Maple': '780109', 'West Coast': '625119', 'Persian Plum': '701C1C', 'Faded Jade': '427977', 'Light Apricot': 'FDD5B1', 'Medium Red Violet': 'BB3385', 'Lava': 'cf1020', 'Barley': 'A68B5B', 'Citrine': 'e4d00a', 'Sunset Orange': 'fd5e53', 'Trendy Green': '7C881A', 'Blue Gem': '2C0E8C', 'Gin Fizz': 'FFF9E2', 'Pastel brown': '836953', 'Foam': 'D8FCFA', 'Melanie': 'E4C2D5', 'Thistle Green': 'CCCAA8', 'Contessa': 'C6726B', 'Teal green': '006d5b', 'Silver Chalice': 'ACACAC', 'Smalt': '003399', 'Citrine White': 'FAF7D6', 'Coquelicot red': 'ff3800', 'Cowboy': '4D282D', 'Arapawa': '110C6C', 'Sea Pink': 'ED989E', 'Di Serria': 'DB995E', 'Chiffon': 'F1FFC8', 'Monsoon': '8A8389', 'White Linen': 'F8F0E8', 'Cabbage Pont': '3F4C3A', 'Cardinal red': 'c41e3a', 'Raffia': 'EADAB8', 'Bud': 'A8AE9C', 'Thistle': 'd8bfd8', 'Mongoose': 'B5A27F', 'Boston Blue': '3B91B4', 'Carrot orange': 'ed9121', 'Light pink': 'ffb6c1', 'Cinderella': 'FDE1DC', 'Voodoo violet': '533455', 'Pigment Indigo': '4B0082', 'Steel Gray': '262335', 'Lavender mist': 'e6e6fa', 'Atlantis': '97CD2D', 'Persian rose': 'fe28a2', 'Chateau Green': '40A860', 'Kidnapper': 'E1EAD4', 'Aqua Spring': 'EAF9F5', 'Purple pizzazz': 'fe4eda', 'Confetti': 'E9D75A', 'Naples yellow': 'fada5e', 'Jaguar': '080110', 'Midnight blue': '191970', 'Alice blue': 'f0f8ff', 'Baby blue eyes': 'a1caf1', 'Minsk': '3F307F', 'Soft pink': 'E4CFDE', 'Candy Corn': 'FBEC5D', 'School bus yellow': 'ffd800', 'Spindle': 'B6D1EA', 'French Rose': 'F64A8A', 'Meat brown': 'e5b73b', 'Stormcloud': '008080', 'Ironstone': '86483C', 'Frosted Mint': 'DBFFF8', 'Sea Mist': 'C5DBCA', 'Antique brass': 'cd9575', 'Bright turquoise': '08e8de', 'Pablo': '776F61', 'Tacha': 'D6C562', 'Raspberry pink': 'e25098', 'Pastel blue': 'aec6cf', 'Almond Frost': '907B71', 'Brown': 'a52a2a', 'French blue': '0072bb', 'Ash grey': 'b2beb5', 'Cerulean Blue': '2A52BE', 'Bright lavender': 'bf94e4', 'Rose gold': 'b76e79', 'Limed Spruce': '394851', 'Coral Reef': 'C7BCA2', 'Red Oxide': '6E0902', 'Bondi Blue': '0095B6', 'Copper': 'b87333', 'Lemon Ginger': 'AC9E22', 'Skobeloff': '007474', 'Canary': 'ffff99', 'Treehouse brown': '3B2820', 'Vogue indigo': '032B52', 'Milano Red': 'B81104', 'Titanium yellow': 'eee600', 'Lucky Blue': '1A1A68', 'Terracotta': 'E2725B', 'Jungle Green': '29AB87', 'Moon Glow': 'FCFEDA', 'Gin': 'E8F2EB', 'Lavender gray': 'c4c3d0', 'Black Marlin': '3E2C1C', 'Morocco Brown': '441D00', 'Blue Smoke': '748881', 'Antique white': 'faebd7', 'Dark taupe': '483c32', 'Aqua Island': 'A1DAD7', 'Kokoda': '6E6D57', 'Peach Yellow': 'FADFAD', 'Old Brick': '901E1E', 'Fallow': 'c19a6b', 'Laurel': '749378', 'Violet Eggplant': '991199', 'Debian red': 'd70a53', 'Rust': 'b7410e', 'Dark green': '013220', 'Burnt orange': 'cc5500', 'Fluorescent pink': 'ff1493', 'Old gold': 'cfb53b', 'Snowy Mint': 'D6FFDB', 'MSU Green': '18453b', 'Potters Clay': '8C5738', 'Medium turquoise': '48d1cc', 'Russett Brown': '755A57', 'Lime green': '32cd32', 'Hawaiian Tan': '9D5616', 'Espresso': '612718', 'Medium sea green': '3cb371', 'Fresh Pear': 'd1e231', 'Salmon pink': 'ff91a4', 'Atomic tangerine': 'ff9966', 'Athens Gray': 'EEF0F3', 'Light Rum': '796989', 'Alabaster': 'FAFAFA', 'Red Berry': '8E0000', 'Crimson Red': '990000', 'Armadillo': '433E37', 'Pale blue': 'afeeee', 'Sky blue': '87ceeb', 'Cocoa Bean': '481C1C', 'Medium blue': '0000cd', 'Suva Gray': '888387', 'Cinnabar': 'e34234', 'Tyrian purple': '66023c', 'Slate Gray': '708090', 'Saltpan white': 'F1F7F2', 'Chestnut Rose': 'CD5C5C', 'Bulgarian rose': '480607', 'Hot magenta': 'ff1dce', 'Klein Blue': '002fa7', 'Bull Shot': '864D1E', 'Hopbush pink': 'D06DA1', 'Dark slate blue': '483d8b', 'Zanah': 'DAECD6', 'Rich carmine': 'd70040', 'Muddy Waters': 'B78E5C', 'Classic Rose': 'FBCCE7', 'Turquoise green': 'a0d6b4', 'Nepal': '8EABC1', 'Navajo white': 'ffdead', 'Dark Lava': '483c32', 'Himalaya': '6A5D1B', 'Bermuda': '7DD8C6', 'Dark sea green': '8fbc8f', 'Cotton Seed': 'C2BDB6', 'Carousel Pink': 'F9E0ED', 'Dark candy apple red': 'a40000', 'Tufts Blue': '417dc1', 'Birch': '373021', 'Aero Blue': 'C9FFE5', 'Pale magenta': 'f984e5', 'Hemp': '907874', 'Stack': '8A8F8A', 'Light taupe': 'b38b6d', 'Persian Pink': 'F77FBE', 'Bracken': '4A2A04', 'Heathered Gray': 'B6B095', 'Cranberry': 'DB5079', 'Fandango': 'b53389', 'Matisse': '1B659D', 'Razzle dazzle rose': 'ff33cc', 'Zuccini': '044022', 'Woodsmoke': '0C0D0F', 'Stratosphere': '000741', 'Tulip Tree': 'EAB33B', 'Sherpa Blue': '004950', 'Genoa': '15736B', 'Myrtle': '21421e', 'Payne grey': '536878', 'Medium slate blue': '7b68ee', 'Purple': '800080', 'Sandwisp': 'F5E7A2', 'Deep Fir': '002900', 'Jacko Bean': '2E1905', 'Carolina blue': '99badd', 'La Salle Green': '087830', 'Illusion': 'F6A4C9', 'Texas': 'F8F99C', 'Bisque': 'ffe4c4', 'Lochinvar teal': '2C8C84', 'Peridot': 'e6e200', 'Gray Chateau': 'A2AAB3', 'Lemon chiffon': 'fffacd', 'Dawn Pink': 'F3E9E5', 'Verdigris': '43b3ae', 'Drover': 'FDF7AD', 'Turmeric': 'CABB48', 'White Pointer': 'FEF8FF', 'Spanish White': 'F7F2E1', 'Golden yellow': 'ffdf00', 'Mint Tulip': 'C4F4EB', 'Baby blue': '89cff0', 'Mineral Green': '3F5D53', 'Bottle Green': '093624', 'Ripe Plum': '410056', 'Rose': 'ff007f', 'Tropical rain forest': '00755e', 'Kingfisher Daisy': '3E0480', 'Pale Leaf': 'C0D3B9', 'Mexican Red': 'A72525', 'Old Lavender': '796878', 'Pastel orange': 'ffb347', 'Gum Leaf': 'B6D3BF', 'Medium purple': '9370db', 'Carnelian': 'b31b1b', 'Harvest Gold': 'da9100', 'Cyan': '00ffff', 'Pharlap': 'A3807B', 'Clay Creek': '8A8360', 'Dark powder blue': '003399', 'Stark White': 'E5D7BD', 'Pistachio': '93c572', 'Tallow': 'A8A589', 'Cherub': 'F8D9E9', 'Warm black': '004242', 'Midnight green': '004953', 'Tia Maria': 'C1440E', 'Rainee': 'B9C8AC', 'Resolution Blue': '002387', 'County Green': '01371A', 'Nadeshiko pink': 'f6adc6', 'Orchid': 'da70d6', 'Mindaro': 'E3F988', 'Cannon Black': '251706', 'Aqua Haze': 'EDF5F5', 'Summer Green': '96BBAB', 'Heavy Metal': '2B3228', 'Carrot Orange': 'ED9121', 'Zombie': 'E4D69B', 'Dust Storm grey': 'E5CCC9', 'Frost': 'EDF5DD', 'Dark gray': 'a9a9a9', 'Delta': 'A4A49D', 'Electric ultramarine': '3f00ff', 'Green Mist': 'CBD3B0', 'Cabernet': '4D0A18', 'Kaitoke Green': '004620', 'Green Leaf': '436A0D', 'Bleach White': 'FEF3D8', 'Blanched Almond': 'ffebcd', 'Green Blue': '1164b4', 'Hot pink': 'ff69b4', 'Locust': 'A8AF8E', 'Spun Pearl': 'AAABB7', 'Green Smoke': 'A4AF6E', 'Eggplant': '614051', 'Bahama Blue': '026395', 'Gunsmoke grey': '828685', 'Mantle': '8B9C90', 'Equator': 'E1BC64', 'Mauve': 'e0b0ff', 'Natural Gray': '8B8680', 'New Orleans': 'F3D69D', 'Royal azure': '0038a8', 'Cold Turkey': 'CEBABA', 'Gulf Stream': '80B3AE', 'Peach': 'ffe5b4', 'Zorba': 'A59B91', 'Atomic Tangerine': 'FF9966', 'Mountain Purple': '9d81ba', 'Colonial White': 'FFEDBC', 'Kimberly': '736C9F', 'Cerise pink': 'ec3b83', 'Blue Zodiac': '13264D', 'Madang': 'B7F0BE', 'Swirl': 'D3CDC5', 'Teal blue': '367588', 'Blue Whale': '042E4C', 'UCLA Gold': 'ffb300', 'Sand dune': '967117', 'Blue Bell': 'a2a2d0', 'Kashmir Blue': '507096', 'Tenn orange': 'CD5700', 'Heath': '541012', 'Anti-flash white': 'f2f3f4', 'Deep Sea': '01826B', 'Light khaki': 'f0e68c', 'Prussian Blue': '003153', 'Pink Salmon': 'FF91A4', 'Zumthor white': 'EDF6FF', 'Blue Charcoal': '010D1A', 'Fern Frond': '657220', 'Conifer': 'ACDD4D', 'Soft mint': 'ADE6C4', 'Cloud': 'C7C4BF', 'Lola': 'DFCFDB', 'Fresh Eggplant': '990066', 'Finlandia': '556D56', 'Dark tangerine': 'ffa812', 'Fringy Flower': 'B1E2C1', 'Cornsilk': 'fff8dc', 'Ruddy pink': 'e18e96', 'Dark magenta': '8b008b', 'Dazzling Rose': 'FF33CC', 'Old Copper': '724A2F', 'Starship': 'ECF245', 'Fluorescent yellow': 'ccff00', 'De York': '7AC488', 'Spice': '6A442E', 'Eucalyptus': '278A5B', 'Light salmon': 'ffa07a', 'Sacramento State green': '00563f', 'Unmellow Yellow': 'ffff66', 'Diesel': '130000', 'Texas Rose': 'FFB555', 'Taupe': '483c32', 'Olivetone': '716E10', 'Hippie Blue': '589AAF', 'Light green': '90ee90', 'Deep Blue': '220878', 'Patina': '639A8F', 'Axolotl': '4E6649', 'Bossanova purple': '4E2A5A', 'Purple taupe': '50404d', 'Green Waterloo': '101405', 'Aqua Squeeze': 'E8F5F2', 'Blonde': 'faf0be', 'Pastel gray': 'cfcfc4', 'Lawn green': '7cfc00', 'Island Spice': 'FFFCEE', 'Glacier': '80B3C4', 'Pink Grey': '816E71', 'Glade Green': '61845F', 'Fog': 'D7D0FF', 'Camouflage green': '78866b', 'Hollywood cerise': 'f400a1', 'Fiord': '405169', 'Gravel': '4A444B', 'Ghost white': 'f8f8ff', 'Yellow green': '9acd32', 'Blue Chalk': 'F1E9FF', 'Punch': 'DC4333', 'Rasberry Jam': 'a50b5e', 'Mountain Meadow': '30ba8f', 'Dusty Gray': 'A8989B', 'Wistful': 'A4A6D3', 'Chetwode Blue': '8581D9', 'Brass': 'b5a642', 'Yuma': 'CEC291', 'Electric blue': '7df9ff', 'White Rock': 'EAE8D4', 'Energy Yellow': 'F8DD5C', 'Sweet Pink': 'FD9FA2', 'Rice Flower': 'EEFFE2', 'Old Rose': 'C08081', 'Smalt Blue': '51808F', 'Chalet Green': '516E3D', 'Sand': 'c2b280', 'Atoll blue': '0A6F75', 'Cyan / Aqua': '00FFFF', 'Tropical Rain Forest': '00755E', 'Blue Violet': '6456B7', 'Green White': 'E8EBE0', 'Portland Orange': 'ff5a36', 'Russet brown': '80461b', 'USC Gold': 'ffcc00', 'Gray asparagus': '465945', 'Medium spring': 'c9dc87', 'Violet': 'ee82ee', 'Dark brown': '654321', 'Snow Flurry': 'E4FFD1', 'Harp': 'E6F2EA', 'Bistre': '3d2b1f', 'Mist Gray': 'C4C4BC', 'Harlequin': '3fff00', 'Light Crimson': 'f56991', 'Pine green': '01796f', 'Santas Gray': '9FA0B1', 'Rock Blue': '9EB1CD', 'Magic Mint': 'AAF0D1', 'Tonys Pink': 'E79F8C', 'Nobel grey': 'B7B1B1', 'Cement': '8D7662', 'Soft Amber': 'D1C6B4', 'Rose madder': 'e32636', 'Cedar': '3E1C14', 'Gold Sand': 'E6BE8A', 'Morning Glory': '9EDEE0', 'Lavender Pink': 'FBAED2', 'Spicy Mustard': '74640D', 'Barley White': 'FFF4CE', 'Heliotrope': 'df73ff', 'Persian Rose': 'FE28A2', 'Dark byzantium': '5d3954', 'Rosy brown': 'bc8f8f', 'Black Olive': '242E16', 'Vin Rouge': '983D61', 'Electric yellow': 'ffff00', 'Medium teal blue': '0054b4', 'Mauve taupe': '915f6d', 'Lemon Chiffon': 'FFFACD', 'Toledo Purple': '3A0020', 'Screamin Green': '76ff7a', 'Alice Blue': 'F0F8FF', 'Whisper': 'F7F5FA', 'Ice Cold': 'B1F4E7', 'Curious Blue': '2596D1', 'Cobalt': '0047ab', 'Corvette': 'FAD3A2', 'Niagara': '06A189', 'Tea green': 'd0f0c0', 'Eminence': '6C3082', 'French rose': 'f64a8a', 'Shocking Pink': 'FC0FC0', 'Ocean Boat Blue': '0077be', 'Primrose': 'EDEA99', 'Old Gold': 'CFB53B', 'Dark pastel blue': '779ecb', 'Soya Bean': '6A6051', 'Periwinkle': 'ccccff', 'Viola': 'CB8FA9', 'Periwinkle Gray': 'C3CDE6', 'Palatinate purple': '682860', 'Jacksons Purple': '20208D', 'Coral red': 'ff4040', 'Squirrel': '8F8176', 'Amethyst Smoke': 'A397B4', 'Gallery white': 'EFEFEF', 'Royal blue': '4169e1', 'Martinique': '363050', 'Tidal': 'F1FFAD', 'Green yellow': 'adff2f', 'Manz': 'EEEF78', 'Breaker Bay': '5DA19F', 'Icterine yellow': 'fcf75e', 'Chardonnay': 'FFCD8C', 'Soft peach': 'ECCDB9', 'Barossa': '44012D', 'Golden Dream': 'F0D52D', 'Zircon': 'F4F8FF', 'Linen': 'faf0e6', 'Smokey topaz': '933d41', 'Pale Slate': 'C3BFC1', 'Driftwood brown': 'AF8751', 'Cameo': 'D9B99B', 'Camel': 'c19a6b', 'Mordant red 19': 'ae0c00', 'Sand Dune': '826F65', 'Dark lavender': '734f96', 'Valhalla': '2B194F', 'Tyrian Purple': '66023C', 'Royal yellow': 'F7B668', 'Bondi blue': '0095b6', 'Petite Orchid': 'DB9690', 'Marigold Yellow': 'FBE870', 'Chardon': 'FFF3F1', 'Endeavour blue': '0056A7', 'Honeydew': 'f0fff0', 'Porsche': 'EAAE69', 'Burgundy': '800020', 'Bourbon': 'BA6F1E', 'Yale Blue': '0f4d92', 'Matrix': 'B05D54', 'Pale lavender': 'dcd0ff', 'Jacaranda purple': '2E0329', 'Dark Rosewood ': '674846', 'Pastel pink': 'ffd1dc', 'Beau blue': 'bcd4e6', 'Dark scarlet': '560319', 'Lily White': 'E7F8FF', 'Brandy': 'DEC196', 'Acadia': '1B1404', 'Military green': '363C0D', 'Yellow Sea': 'FEA904', 'Astra': 'FAEAB9', 'Cosmic latte': 'fff8e7', 'Sail': 'B8E0F9', 'Opal': 'A9C6C2', 'Siren Purple': '7A013A', 'Sandstorm': 'ecd540', 'Abbey': '4C4F56', 'Light gray': 'd3d3d3', 'Midnight Blue': '003366', 'Ebb': 'E9E3E3', 'Green Pea': '1D6142', 'Finn': '692D54', 'Heavy Heath': '6B2A14', 'Venetian Red': '72010F', 'School bus Yellow': 'FFD800', 'Timber Green': '16322C', 'Field drab': '6c541e', 'Sidecar': 'F3E7BB', 'Wisteria': 'c9a0dc', 'Lemon': 'fff700', 'Downy ': '6FD0C5', 'Sandstone': '796D62', 'Light sky blue': '87cefa', 'Melrose': 'C7C1FF', 'Napa': 'ACA494', 'Violent Violet': '290C5E', 'Makara': '897D6D', 'Australian Mint': 'F5FFBE', 'Citrus': 'A1C50A', 'Thatch Green': '403D19', 'Gainsboro': 'dcdcdc', 'Mustard seed Yellow': 'DCB20C', 'Scarlet Gum': '431560', 'Wafer': 'DECBC6', 'Pale Prim': 'FDFEB8', 'Cutty Sark': '507672', 'Rasberry Jam': 'A50B5E', 'Cascade': '8BA9A5', 'Dark orchid': '9932cc', 'Cocoa brown': 'd2691e', 'Sky Blue': '76D7EA', 'Paco': '411F10', 'Luxor Gold': 'A7882C', 'Bleached Cedar': '2C2133', 'Cream Can': 'F5C85C', 'Jade': '00a86b', 'Upsdell red': 'ae2029', 'Fulvous orange': 'e48400', 'Blue violet': '8a2be2', 'Pacific Blue': '1ca9c9', 'Ottoman': 'E9F8ED', 'Maroon Oak': '520C17', 'Chicago Storm': '5D5C58', 'Onahau': 'CDF4FF', 'Pale red violet': 'db7093', 'Elm': '1C7C7D', 'Baby Blue': 'E0FFFF', 'Fire Bush': 'E89928', 'Storm Dust': '646463', 'Cadet grey': '91a3b0', 'Golden Glow': 'FDE295', 'Meteor': 'D07D12', 'Flamingo pink': 'fc8eac', 'Boulder': '7A7A7A', 'Turquoise': '30d5c8', 'Negroni': 'FFE2C5', 'Festival yellow': 'FBE96C', 'Casal': '2F6168', 'Ultramarine': '120a8f', 'Martini': 'AFA09E', 'Mint Green': '98FF98', 'Como': '517C66', 'Thunder': '33292F', 'Big Stone': '162A40', 'Havelock Blue': '5590D9', 'White smoke': 'f5f5f5', 'Asparagus': '87a96b', 'Mine Shaft': '323232', 'Vida Loca': '549019', 'Tosca': '8D3F3F', 'Hot Pink': 'FF69B4', 'Venetian red': 'c80815', 'Burnt Umber': '8A3324', 'Cambridge Blue': 'a3c1ad', 'Dolphin grey': '646077', 'Dixie': 'E29418', 'Lilac': 'c8a2c8', 'Paris Purple': '26056A', 'Avocado green': '888D65', 'Golden Sand': 'F0DB7D', 'Pastel Green': '77DD77', 'Nandor': '4B5D52', 'Oslo Gray': '878D91', 'Mandalay': 'AD781B', 'Siam': '646A54', 'Seashell': 'fff5ee', 'Geyser Blue': 'D4DFE2', 'Hint of Yellow': 'FAFDE4', 'Cavern Pink': 'E3BEBE', 'Edward': 'A2AEAB', 'Polar': 'E5F9F6', 'Mortar': '504351', 'Clairvoyant purple': '480656', 'Goblin': '3D7D52', 'Purple mountain majesty': '9678b6', 'Tall Poppy': 'B32D29', 'Pixie Green': 'C0D8B6', 'Vivid burgundy': '9f1d35', 'Fair Pink': 'FFEFEC', 'Coffee': '6f4e37', 'Bottle green': '006a4e', 'Cioccolato': '55280C', 'Gimblet': 'B8B56A', 'Derby': 'FFEED8', 'Shuttle Gray': '5F6672', 'English Holly': '022D15', 'Firebrick': 'b22222', 'White Ice': 'DDF9F1', 'Ao': '008000', 'Empress': '817377', 'Sahara': 'B7A214', 'Tapestry': 'B05E81', 'Crete': '737829', 'Apple green': '8db600', 'Powder Blue': 'B0E0E6', 'Mercury': 'E5E5E5', 'Golden poppy': 'fcc200', 'Pastel violet': 'cb99c9', 'Lisbon Brown': '423921', 'Bright Gray': '3C4151', 'Crimson': 'dc143c', 'Rufous red': 'a81c07', 'Quarter Pearl Lusta': 'FFFDF4', 'Twitter Blue': '007aa5', 'Tangelo': 'f94d00', 'Oxford Blue': '002147', 'Arrowtown': '948771', 'Lucky': 'AF9F1C', 'Light coral': 'f08080', 'Slate green': '49796b', 'Powder blue': 'b0e0e6', 'Mango Tango': 'ff8243', 'Persian Green': '00A693', 'Feldgrau': '4d5d53', 'Iceberg': 'DAF4F0', 'Buff yellow': 'f0dc82', 'Portafino': 'FFFFB4', 'Pine Tree green': '171F04', 'Gray Nurse': 'E7ECE6', 'Topaz': 'ffc87c', 'Moon Mist': 'DCDDCC', 'Allports': '0076A3', 'Charlotte': 'BAEEF9', 'Timberwolf': 'dbd7d2', 'Sprout': 'C1D7B0', 'Blumine': '18587A', 'Majorelle Blue': '6050dc', 'Can Can': 'D591A4', 'Sazerac': 'FFF4E0', 'Cotton Candy': 'FFB7D5', 'Karaka': '1E1609', 'Carmine': 'ff0040', 'Rose taupe': '905d5d', 'Peach Orange': 'FFCC99', 'Norway': 'A8BD9F', 'Sunglow': 'E16865', 'Coral pink': 'f88379', 'Hot Toddy': 'B38007', 'USC Cardinal': '990000', 'Corn Field yellow': 'F8FACD', 'Reef Gold': '9F821C', 'Light slate gray': '778899', 'Jelly Bean': '297B9A', 'Reef': 'C9FFA2', 'Baby pink': 'f4c2c2', 'Wenge': '645452', 'Nugget': 'C59922', 'Electric lime': 'ccff00', 'Green': '00ff00', 'Electric lavender': 'f4bbff', 'Vivid cerise': 'da1d81', 'Spiro Disco Ball': '0fc0fc', 'Peach Schnapps': 'FFDCD6', 'Double Pearl Lusta': 'FCF4D0', 'Tequila': 'FFE6C7', 'Almond': 'efdecd', 'Arylide yellow': 'e9d66b', 'Spring Wood': 'F8F6F1', 'Deep magenta': 'cc00cc', 'Pipi white': 'FEF4CC', 'Milk Punch': 'FFF6D4', 'Blossom': 'DCB4BC', 'Magnolia': 'f8f4ff', 'Patriarch Purple': '800080', 'Misty rose': 'ffe4e1', 'Blackcurrant': '32293A', 'Anakiwa': '9DE5FF', 'Rolling Stone': '747D83', 'Salt Box': '685E6E', 'Deep carmine': 'a9203e', 'Off Yellow': 'FEF9E3', 'Sunlight yellow': 'FFEC13', 'Seance': '731E8F', 'Drab': '967117', 'Cello blue': '1E385B', 'Lochmara': '007EC7', 'Laser': 'C8B568', 'Scarpa Flow': '585562', 'Peru Tan': '7F3A02', 'Paris Daisy': 'FFF46E', 'Medium electric blue': '035096', 'University of California Gold': 'b78727', 'Cinder': '0E0E18', 'Brown Rust': 'AF593E', 'Affair': '714693', 'Tamarillo': '991613', 'Bouquet': 'AE809E', 'My Sin': 'FFB31F', 'Dodger blue': '1e90ff', 'Rice Cake': 'FFFEF0', 'We Peep': 'F7DBE6', 'Matterhorn': '4E3B41', 'Nevada': '646E75', 'Office green': '008000', 'Oyster Bay': 'DAFAFF', 'Port Gore': '251F4F', 'Electric violet': '8f00ff', 'Royal Purple': '6B3FA0', 'Purple Pizzazz': 'FF00CC', 'Burnt sienna': 'e97451', 'Antique fuchsia': '915c83', 'Spray': '79DEEC', 'Tickle Me Pink': 'fc89ac', 'Tutu': 'FFF1F9', 'Jonquil yellow': 'fada5e', 'Ghost': 'C7C9D5', 'Golden Fizz': 'F5FB3D', 'Royal fuchsia': 'ca2c92', 'Peppermint': 'E3F5E1', 'Rhino Grey': '2E3F62', 'Rope': '8E4D1E', 'Roman': 'DE6360', 'Midnight Moss': '041004', 'True Blue': '0073cf', 'Amazon green': '3B7A57', 'Tranquil': 'E6FFFF', 'Fuzzy Wuzzy Brown': 'C45655', 'Cadet': '536872', 'Apple': '4FA83D', 'Denim': '1560bd', 'Carnation pink': 'ffa6c9', 'New York Pink': 'D7837F', 'Shamrock': '45cea2', 'Lemon lime': 'bfff00', 'Pakistani green': '006600', 'Buttercup': 'F3AD16', 'Egg Sour': 'FFF4DD', 'Brilliant Rose': 'F653A6', 'Meteorite': '3C1F76', 'Soapstone white': 'FFFBF9', 'Bon Jour': 'E5E0E1', 'Ecstasy orange': 'FA7814', 'Fuel Yellow': 'ECA927', 'Deep Lime green': 'B3C110', 'Tangerine': 'f28500', 'Clover green': '384910', 'Orange Roughy': 'C45719', 'Golden Tainoi': 'FFCC5C', 'Bazaar': '98777b', 'Scooter': '2EBFD4', 'Red Beech': '7B3801', 'Celtic': '163222', 'Ultra pink': 'ff6fff', 'Swiss Coffee': 'DDD6D5', 'True V': '8A73D6', 'Shilo': 'E8B9B3', 'Aztec': '0D1C19', 'Cold Purple': 'ABA0D9', 'Rackley': '5d8aa8', 'Seagull': '80CCEA', 'Aluminium': 'A9ACB6', 'Rich electric blue': '0892d0', 'Dutch White': 'FEF7DE', 'Pale plum': 'dda0dd', 'Platinum': 'e5e4e2', 'Earls Green': 'C9B93B', 'Light brown': 'b5651d', 'Mandys Pink': 'F2C3B2', 'Burning Orange': 'FF7034', 'Cal Poly Pomona green': '1e4d2b', 'Dark salmon': 'e9967a', 'Cornflower Lilac': 'FFB0AC', 'Surfie Green': '0C7A79', 'Indian red': 'cd5c5c', 'Dark electric blue': '536878', 'Bombay Rain': 'AFB1B8', 'Faded orange': 'cc7722', 'Chino': 'CEC7A7', 'Bastille': '292130', 'Alpine': 'AF8F2C', 'Navy Blue': '000080', 'Neptune': '7CB7BB', 'Titan White': 'F0EEFF', 'Eagle grey': 'B6BAA4', 'Forest Green': '228B22', 'Beige': 'f5f5dc', 'Picton Blue': '45B1E8', 'Dark khaki': 'bdb76b', 'Cornflower Blue': '6495ED', 'Flesh': 'FFCBA4', 'Wattle': 'DCD747', 'Pale robin egg blue': '96ded1', 'Gothic': '6D92A1', 'Danube': '6093D1', 'Blackberry': '4D0135', 'Brandy Punch': 'CD8429', 'Maize': 'fbec5d', 'Bird Flower': 'D4CD16', 'Burnt Orange': 'CC5500', 'Burlywood': 'deb887', 'Submarine': 'BAC7C9', 'Dolly yellow': 'F9FF8B', 'Feta': 'F0FCEA', 'Egg White': 'FFEFC1', 'Puce pink': 'cc8899', 'Pink Lady': 'FFF1D8', 'Sea Green': '2E8B57', 'Cinereous brown': '98817b', 'Orange peel': 'ff9f00', 'Moss Green': 'ADDFAD', 'Goldenrod': 'daa520', 'Pale copper': 'da8a67', 'Bordeaux': '5C0120', 'Egyptian blue': '1034a6', 'Vivid Violet': '803790', 'Pink Flare': 'E1C0C8', 'Nero': '140600', 'Steel blue': '4682b4', 'Auburn': 'a52a2a', 'Casper': 'ADBED1', 'Lima': '76BD17', 'Maverick': 'D8C2D5', 'Lime': 'bfff00', 'Brandy Rose': 'BB8983', 'Vanilla Ice': 'F3D9DF', 'Thunderbird red': 'C02B18', 'Grullo': 'a99a86', 'Deep fuchsia': 'c154c1', 'Raspberry rose': 'b3446c', 'Hippie Pink': 'AE4560', 'Water Leaf': 'A1E9DE', 'Deep saffron': 'ff9933', 'Friar Gray': '807E79', 'Stizza red': '990000', 'Scarlett': '950015', 'Fuscous Gray': '54534D', 'Torea Bay': '0F2D9E', 'Pueblo': '7D2C14', 'Caput mortuum': '592720', 'Domino': '8E775E', 'Horizon': '5A87A0', 'Cashmere': 'E6BEA5', 'Slate blue': '6a5acd', 'Selago': 'F0EEFD', 'Turkish Rose': 'B57281', 'Black White': 'FFFEF6', 'Riptide blue': '8BE6D8', 'Azure Radiance': '007FFF', 'French lilac': '86608e', 'Akaroa Cream': 'D4C4A8', 'Eunry': 'CFA39D', 'Sunflower': 'E4D422', 'Tara': 'E1F6E8', 'Flax Smoke': '7B8265', 'Night Shadz': 'AA375A', 'Oregon': '9B4703', 'Regal': '4F1C70', 'Sorbus': 'FD7C07', 'Bean  ': '3D0C02', 'Governor Bay': '2F3CB3', 'Zest': 'E5841B', 'Dandelion': 'f0e130', 'Grain Brown': 'E4D5B7', 'Macaroni and Cheese': 'ffbd88', 'Elf Green': '088370', 'Deep Oak': '412010', 'Lavender Gray': 'BDBBD7', 'Dark Ebony': '3C2005', 'Eggshell': 'f0ead6', 'Raw Sienna': 'd68a59', 'Celadon': 'ace1af', 'Whiskey': 'D59A6F', 'Turquoise Blue': '6CDAE7', 'Dark Cork': '40291D', 'Citron': '9EA91F', 'Fern Green': '4F7942', 'Princeton orange': 'ff8f00', 'Camouflage Green': '78866B', 'Burnham': '002E20', 'Pearl Lusta': 'FCF4DC', 'Light mustard': 'ffdb58', 'Blue Chill': '0C8990', 'Cherry Pie': '2A0359', 'Pale violet red': 'db7093', 'Dark blue': '00008b', 'Solitaire board': 'FEF8E2', 'Flax yellow': 'eedc82', 'Chantilly': 'F8C3DF', 'Storm Gray': '717486', 'White': 'ffffff', 'Waikawa Gray': '5A6E9C', 'Chartreuse Yellow': 'DFFF00', 'Chelsea Cucumber': '83AA5D', 'Millbrook': '594433', 'Electric purple': 'bf00ff', 'Moonstone blue': '73a9c2', 'Lionskin': 'c19a6b', 'Portica': 'F9E663', 'Smoky': '605B73', 'Stonewall': '928573', 'Wedgewood': '4E7F9E', 'Ecru': 'c2b280', 'Saint Patrick Blue': '23297a', 'Fuchsia pink': 'ff77ff', 'Botticelli blue': 'C7DDE5', 'Mystic': 'E2EBED', 'Santa Fe': 'B16D52', 'Wild Blue Yonder': '7A89B8', 'Mikado': '2D2510', 'Slate gray': '708090', 'Mountbatten Pink': '997A8D', 'Wild Strawberry': 'ff43a4', 'Beaver': '9f8170', 'Hibiscus': 'B6316C', 'KU Crimson': 'e8000d', 'Nutmeg Wood Finish': '683600', 'Malachite': '0bda51', 'Brown Derby': '492615', 'Pale aqua': 'bcd4e6', 'Blue Diamond': '380474', 'Classic rose': 'fbcce7', 'Peach yellow': 'fadfad', 'Salmon': 'ff8c69', 'Key Lime ': 'BFC921', 'Narvik white': 'EDF9F1', 'Cadmium red': 'e30022', 'Shadow Green': '9AC2B8', 'Dark spring green': '177245', 'Desert sand': 'edc9af', 'Sweet Corn': 'FBEA8C', 'Woody Brown': '483131', 'Pastel green': '77dd77', 'Shamrock green': '009e60', 'Bubbles': 'e7feff', 'Butterfly Bush': '624E9A', 'Pastel purple': 'b39eb5', 'Sepia': '704214', 'Tree Poppy': 'FC9C1D', 'Algae Green': '93DFB8', 'Rose White': 'FFF6F5', 'Amour': 'F9EAF3', 'Psychedelic purple': 'df00ff', 'Cyprus': '003E40', 'Lotus': '863C3C', 'Chrome White': 'E8F1D4', 'Candy apple red': 'ff0800', 'Piper': 'C96323', 'Dartmouth green': '00693e', 'Kabul': '5E483E', 'UA red': 'd9004c', 'Double Spanish White': 'E6D7B9', 'Fun Blue': '1959A8', 'Saddle Brown': '583401', 'Trout': '4A4E5A', 'Viking': '64CCDB', 'Underage Pink': 'F9E6F4', 'Christi': '67A712', 'Punga': '4D3D14', 'Baja White': 'FFF8D1', 'Wild blue yonder': 'a2add0', 'Blue Haze': 'BFBED8', 'Dorado': '6B5755', 'International Orange': 'FF4F00', 'Bermuda Gray': '6B8BA2', 'Spanish Green': '819885', 'Corn Harvest': '8B6B0B', 'Graphite': '251607', 'Olive Haze': '8B8470', 'Oxley Green': '779E86', 'Dark orange': 'ff8c00', 'Straw': 'e4d96f', 'Deep jungle green': '004b49', 'Japonica': 'D87C63', 'United Nations blue': '5b92e5', 'Fantasy': 'FAF3F0', 'Black Bean': '081910', 'Pizazz': 'FF9000', 'Ironside Gray': '676662', 'Cactus': '587156', 'Black Squeeze': 'F2FAFA', 'Languid lavender': 'd6cadd', 'Indian Khaki': 'C3B091', 'Cupid': 'FBBEDA', 'Dodger Blue': '1E90FF', 'Lavender Magenta': 'EE82EE', 'Light cyan': 'e0ffff', 'Oyster Pink': 'E9CECD', 'Venus': '928590', 'Your Pink': 'FFC3C0', 'Clay Ash': 'BDC8B3', 'Electric Violet': '8B00FF', 'Clam Shell': 'D4B6AF', 'Cordovan': '893f45', 'Victoria': '534491', 'Albescent White': 'F5E9D3', 'Jaffa': 'EF863F', 'Peach Cream': 'FFF0DB', 'Dune grey': '383533', 'Surf Crest': 'CFE5D2', 'Chamois': 'EDDCB1', 'Casablanca': 'F8B853', 'Electric Lime': 'CCFF00', 'Old lace': 'fdf5e6', 'Frostee': 'E4F6E7', 'Scarlet': 'ff2400', 'Jasper': 'd73b3e', 'Gossip': 'D2F8B0', 'Azalea': 'F7C8DA', 'Lonestar': '6D0101', 'El Salva': '8F3E33', 'Sun': 'FBAC13', 'Mandy': 'E25465', 'Navajo White': 'FFDEAD', 'Finch': '626649', 'Firefly': '0E2A30', 'Cornflower': '9aceeb', 'Tom Thumb green': '3F583B', 'Dim gray': '696969', 'Red Stage': 'D05F04', 'Hansa yellow': 'e9d66b', 'Putty': 'E7CD8C', 'Dark slate gray': '2f4f4f', 'Spicy Mix': '885342', 'Caribbean Green': '00CC99', 'Science Blue': '0066CC', 'Pigeon Post': 'AFBDD9', 'Eden': '105852', 'Conch': 'C9D9D2', 'Korma': '8F4B0E', 'Jewel': '126B40', 'Torch Red': 'FD0E35', 'Blue Ribbon': '0066FF', 'Celeste': 'b2ffff', 'Red Ribbon': 'ED0A3F', 'Apple Green': 'E2F3EC', 'Hokey Pokey': 'C8A528', 'Sea blue': '006994', 'Sea Nymph': '78A39C', 'Americano': '87756E', 'Dairy Cream': 'F9E4BC', 'Silver Tree': '66B58F', 'Kumera': '886221', 'Bridal Heath': 'FFFAF4', 'Gun Powder': '414257', 'Rich maroon': 'b03060', 'Mountain Mist': '959396', 'Grape': '381A51', 'Old lavender': '796878', 'Everglade': '1C402E', 'Apple Blossom': 'AF4D43', 'Grenadier': 'D54600', 'Sirocco': '718080', 'Gold Drop': 'F18200', 'Creole': '1E0F04', 'Perano': 'A9BEF2', 'Deep champagne': 'fad6a5', 'Ivory': 'fffff0', 'Horses Neck': '604913', 'Light salmon pink': 'ff9999', 'Hunter green': '355e3b', 'California': 'FE9D04', 'Twilight Blue': 'EEFDFF', 'Dark sienna': '3c1414', 'Pearl Aqua': '88d8c0', 'Tolopea': '1B0245', 'Web Orange': 'FFA500', 'Flame': 'e25822', 'Crusoe': '004816', 'Tea Green': 'D0F0C0', 'Medium taupe': '674c47', 'Highland': '6F8E63', 'Yellow Metal': '716338', 'Peach puff': 'ffdab9', 'Gold': 'ffd700', 'Camelot': '893456', 'Tea': 'C1BAB0', 'Capri blue': '00bfff', 'White Lilac': 'F8F7FC', 'Humming Bird': 'CFF9F3', 'Tiger eye': 'e08d3c', 'Tomato': 'ff6347', 'Sandal': 'AA8D6F', 'Chilean Heath': 'FFFDE6', 'Portage': '8B9FEE', 'Orchid Blossom Pink': 'E79FC4', 'Trendy Pink': '8C6495', 'Juniper': '6D9292', 'Saddle': '4C3024', 'Byzantium': '702963', 'Sanguine Brown': '8D3D38', 'Medium Carmine': 'AF4035', 'Honeysuckle': 'EDFC84', 'Prelude': 'D0C0E5', 'Vivid violet': '9f00ff', 'Xanadu': '738678', 'Heather': 'B7C3D0', 'Daffodil': 'ffff31', 'Dark violet': '9400d3', 'Olive Green': 'bab86c', 'Swamp': '001B1C', 'Half and Half': 'FFFEE1', 'Pohutukawa': '8F021C', 'Sapphire': '0f52ba', 'Saffron Mango': 'F9BF58', 'Crude Oil': '281E15', 'Mallard green': '233418', 'Cararra': 'EEEEE8', 'Lipstick': 'AB0563', 'Astronaut Blue': '013E62', 'Vermilion': 'e34234', 'Woodrush': '302A0F', 'Flush Orange': 'FF7F00', 'Scandal': 'CFFAF4', 'Orange White': 'FEFCED', 'Flamenco': 'FF7D07', 'Bulgarian Rose': '480607'}
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
