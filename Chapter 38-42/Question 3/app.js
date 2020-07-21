function S(x , y , z){
     var d = (x + y + z)/2;
     return d;
}
function area(d, x, y, z){
    var S = d, a= x, b=y , c=z; 
    var area = S*(S-a)*(S-b)*(S-c);
    alert("Area of a triangle is " + area.toFixed(2));
}
var x = Number(prompt("Enter a first side length of a triangle"));
var y = Number(prompt("Enter a second side length of a triangle"));
var z = Number(prompt("Enter a third side length of triangle"));
var d = S(x, y, z);
area(d, x, y, z);
