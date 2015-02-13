/*
  This function takes in two parameters: a number, and a string.
  The number represents the amount of hours/minutes/seconds.
  The string represents the unit, and is one of
    * "hour"
    * "minute"
    * "second"

  It returns a whole number value from 0-255 representing the
  relative CSS RGB value of that time period.

  It's pre-written for you. Best to not muck around with it.
*/
var convertTimeframe = function(amount, unit) {

  switch (unit) {
    case "hour":
    case "hours":
      return Math.round((amount / 23) * 255)
    case "minute":
    case "minutes":
    case "second":
    case "seconds":
      return Math.round((amount / 59) * 255)
    default:
      return 0;
  }
}


var getHour = function(){
  var d = new Date();
  var currHour = d.getHours();
  return currHour;
}


var getMin = function(){
  var d = new Date();
  var currMin = d.getMinutes();
  return currMin;
}


var getSec = function(){
  var d = new Date();
  var currSec = d.getSeconds();
  return currSec;
}


var getCurrentTime = function() {

var hour = getHour();
var min = getMin();
var sec = getSec();

if (hour < 10) {
  hour = "0" + hour;
}
if (min < 10) {
  min = "0" + min;
}
if (sec < 10) {
  sec = "0" + sec;
}

var currTime = (hour + ":" + min + ":" + sec);

//console.log(currTime);

return currTime;

}


var getRGB = function() {

  var rgb = (convertTimeframe(getHour(), "hour")  + " " + convertTimeframe(getMin(), "minute") + " " +
  convertTimeframe(getSec(), "second"));

  //console.log(rgb);
  return rgb;

}

var getHex = function() {

var RGBtemp = getRGB();
var arrRGB = RGBtemp.split(" ");
console.log(arrRGB);
var r = parseInt(arrRGB[0]);
var g = parseInt(arrRGB[1]);
var b = parseInt(arrRGB[2]);

var hex = rgbToHex(r, g, b);
console.log(hex);
return hex;
}



function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

var changeBackground = function() {

  $("body").css("background-color", getHex);

}

var displayTime = function() {

  $("#time").html(getCurrentTime());

}

var displayHex = function() {

  $("#hex").html(getHex());

}

$(document).ready(function() {
 $("#display").click(function(evt) {
    $("#time").toggle();    
    $("#hex").toggle();
 });

});



setInterval(displayTime, 1000);
setInterval(displayHex, 1000);
setInterval(changeBackground, 1000);


//$("#time").html(currTime);
























