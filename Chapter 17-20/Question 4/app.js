var num = prompt('Enter a number to show its multiplication table');
var len = prompt('Enter length multiplication table');
document.write('Multiplication table of ' + num);
document.write('<br>Length ' + len + '<br>');
for ( var i = 1; i<=Number(len); i++)
{
        document.write(num + 'x' + i + '=' + (Number(num) * i) + '<br>');
}