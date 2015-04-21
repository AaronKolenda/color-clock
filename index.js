/*
  This function takes in two parameters: a number, and a string.
  The number represents the amount of hours/minutes/seconds.
  The string represents the unit, and is one of
    * "hour"
    * "minute"
    * "second"

  It returns a whole number value from 0-255 representing the
  relative CSS RGB value of that time period.
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

// The following functions get the current Hour, Minute, or Second

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

// This function gets the current time and displays it properly

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


return currTime;

}

// This function converts the time to an rgb value

var getRGB = function() {

  var rgb = (convertTimeframe(getHour(), "hour")  + " " + convertTimeframe(getMin(), "minute") + " " +
  convertTimeframe(getSec(), "second"));

  return rgb;

}

//Next three functions convert rgb to hex

var getHex = function() {

  var RGBtemp = getRGB();
  var arrRGB = RGBtemp.split(" ");
  var r = parseInt(arrRGB[0]);
  var g = parseInt(arrRGB[1]);
  var b = parseInt(arrRGB[2]);

  var hex = rgbToHex(r, g, b);
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

//The user clicks to toggle between time and hex value

 $("#display").click(function(evt) {

    if($("#time").css('display') == 'none') {
      $("#hex").toggle();
      $("#time").fadeToggle("slow", "linear");
      return;
    }

    if($("#hex").css('display') == 'none') {
      $("#time").toggle();
      $("#hex").fadeToggle("slow", "linear");
    } 

 });

});

//Change the time and background every second

setInterval(displayTime, 1000);
setInterval(displayHex, 1000);
setInterval(changeBackground, 1000);
