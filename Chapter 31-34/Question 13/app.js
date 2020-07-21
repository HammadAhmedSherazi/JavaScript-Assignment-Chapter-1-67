var age = prompt("Enter your age ");
var d = new Date();
var year = d.getFullYear()-age;
document.write("Your age is " + age + "<br>Your birth year is " + year);