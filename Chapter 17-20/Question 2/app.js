var matrix = [];
row1 = [0, 1, 2, 3, '<br>'];
row2 = [1, 0, 1, 2, '<br>'];
row3 = [2, 1, 0, 1, '<br>'];
matrix = [
     row1.join(' '),
     row2.join(' '),
     row3.join(' ')
];
var str = matrix.join(" ");
document.write(str);