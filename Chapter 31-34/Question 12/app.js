var d = new Date(); 
var yr = d.getFullYear();
document.write("current date: " + d + '<br>');
var d1 = new Date();
d1.setFullYear(yr-100)
document.write("100 years ago, it was " + d1);