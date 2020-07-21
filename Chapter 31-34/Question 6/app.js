var d = new Date();
document.write('Current Date: ' + d);
d1= new Date("January 1, 1970");
var dDiff = d.getTime()-d1.getTime(); 
document.write('<br>Elapsed milliseconds since January 1, 1970:  ' + dDiff);
document.write('<br>Elapsed minutes since January 1, 1970: ' + dDiff/1000*60); 