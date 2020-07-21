var d = new Date(); 
var hr = d.getHours();
document.write("current date: " + d + '<br>');
var d1 = new Date();
d1.setHours(hr-1)
document.write("1 hour ago, it was " + d1);