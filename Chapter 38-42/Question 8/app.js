function convertMeter(input){
    var conv = input*1000;
    document.write("The distance between two cities: " + conv + "m");
}
function convertFeet(input){
    var conv = input*3280.8;
    document.write("<br>The distance between two cities: " + conv.toFixed(2) + "ft");
}
function convertCentimeter(input){
    var conv = input * 100000;
    document.write("<br>The distance between two cities: " + conv + "cm");
}
function convertInches(input){
    var conv = input * 39370.1;
    document.write("<br>The distance between two cities: " + conv.toFixed(2) + "inch");
}
var input = prompt("Enter the distance betweem two cities (in km):");
convertMeter(input);
convertFeet(input);
convertCentimeter(input);
convertInches(input);