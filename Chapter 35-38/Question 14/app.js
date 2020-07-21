function calcCircumference(radius){
    var PI= 3.142;
    var circumOfcircle= 2*PI*radius;
    return circumOfcircle;
}
function calcArea(radius){
    var PI= 3.142;
    var area = PI*radius*radius;
    return area;
}
alert("The circumference is " + calcCircumference(5).toFixed(2) + "\nThe area is " + calcArea(5).toFixed(2));