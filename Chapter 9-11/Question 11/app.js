var firstNum= prompt("Enter a first number");
var secondNum = prompt("Enter a second number");
var operation = prompt("Enter a opertion b/w numbers(+, -, *, /, %)");
var num1= parseInt(firstNum), num2= parseInt(secondNum);
if ( operation === "+")
{
    alert(firstNum + "+" + secondNum + "=" + (num1+num2));
}
if ( operation === "-")
{
    alert(firstNum + "-" + secondNum + "=" + (num1-num2));
}
if ( operation === "*")
{
    alert(firstNum + "*" + secondNum + "=" + (num1*num2));
}
if ( operation === "/")
{
    alert(firstNum + "/" + secondNum + "=" + (num1/num2));
}
if ( operation === "%")
{
    alert(firstNum + "%" + secondNum + "=" + (num1%num2));
}