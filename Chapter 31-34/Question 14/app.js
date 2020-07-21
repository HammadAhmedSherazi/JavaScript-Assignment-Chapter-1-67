var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var d = new Date();
var currMonth=months[d.getMonth()];
var perUnitcharge = 16;
var noOfunits = 410;
var netAmountwithInduedate = noOfunits*perUnitcharge;
var latepayment = 350; 
var grossAmountafterduedate = netAmountwithInduedate + latepayment;

document.write("<h1>K-Electric Bill<\h1>");
document.write("<br>Customer Name: ABC Customer<br>");
document.write("Month: " +  currMonth + '<br>');
document.write("Number of units: " + noOfunits + '<br>');
document.write("Charge per unit: " +  perUnitcharge.toFixed(2) + '<br>');
document.write("<br>Net Amount Payable (within Due Date): " +  netAmountwithInduedate.toFixed(2) + '<br>'); 
document.write("Late payment subcharge: " +  latepayment.toFixed(2) + '<br>');
document.write("Gross Amount Payable (after Due Date): " +  grossAmountafterduedate.toFixed(2) + '<br>');