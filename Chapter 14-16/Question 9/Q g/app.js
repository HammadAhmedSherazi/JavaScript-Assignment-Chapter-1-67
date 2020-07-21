var color = ['Red', 'Green', 'Yellow'];
var index = prompt('Enter the position of color which you want to delete');
var num = prompt('Enter the number of elements which you want to delete');
document.write('Element: ' +  color + '<br>');
color.splice(index , num );
document.write(color);
