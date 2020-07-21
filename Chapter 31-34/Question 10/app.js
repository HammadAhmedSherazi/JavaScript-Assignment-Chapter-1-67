var d = new Date("December 05, 2015 22:50:16");
var d1 = new Date("January 01, 2015 00:00:00");
var dDiff = d.getTime() - d1.getTime();
var second = dDiff/(1000 * 60);
document.write("On reference date " + d + ", " + Math.floor(second) + " seconds has passed since beginning of 2015");