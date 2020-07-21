var favSnack= "chocalate chip";
var currAge = 15;
var estMaxAge = 65;
var amountOfsnackperDay = 3;
document.write("<h1>The Lifetime Supply Calculator</h1><br>");
document.write("<br>Favourite Snack: " + favSnack + "<br>Current age: " + currAge + "<br>Estimated Maximum Age: " + estMaxAge + "<br>Amount of snack per day: " + amountOfsnackperDay);
document.write("<br>You will need " + ((estMaxAge-currAge)*amountOfsnackperDay) + " chocolate chip to last you until the ripe old age of " + estMaxAge); 