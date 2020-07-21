var num = Math.random();
var improvedNum = (num * 10) + 1;
var secretNum = Math.floor(improvedNum);
var userNum = prompt('Enter a number between 1 to 10');
if (userNum === secretNum)
{
    alert("Congratulate");
}
else
{
    alert("Try again!");
}