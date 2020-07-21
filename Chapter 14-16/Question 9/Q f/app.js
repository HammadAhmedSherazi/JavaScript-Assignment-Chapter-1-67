var color = ['Red', 'Orange', 'Yellow'];
document.write("Array Element:");
document.write(color + '<br>');
var index = parseInt(prompt("Enter a index number in which add color "));
var colorname= prompt("Enter a color name");
color.splice(index , 0, colorname );
document.write(color);