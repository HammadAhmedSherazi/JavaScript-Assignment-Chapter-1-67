var num = 35.36 ;
document.write('Number: ' + num);
num = parseInt(num.toString().replace('.', "")) ;
document.write('<br>Result: ' + num);