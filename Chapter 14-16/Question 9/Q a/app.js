var color = ['Red', 'Orange', 'Yellow'];
document.write("Array Element:");
document.write(color + '<br>');
var addColor = prompt("What he want add color in the array to the beginning");
color.unshift(addColor);
document.write(color);