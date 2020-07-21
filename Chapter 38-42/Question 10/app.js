var amount = prompt("Enter amount to withdraw!!");
var Notes100 = amount/100;
var Notes50 = (amount % 100)/50;
var Notes10 = ((amount % 100) % 50)/10;
var remAmount = ((amount % 100) % 50)%10
document.write("You will have " + parseInt(Notes100) + " hundred notes " + parseInt(Notes50) + " fifty notes " + parseInt(Notes10) + " ten notes");
document.write("<br>Remainning Amount is : " + parseInt(remAmount));