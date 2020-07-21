var guessNumber=prompt("Please guess a number (ranging from 1 to 10)");
var secretNum= 8;
if ( guessNumber == secretNum){
    alert("Bingo! Correct answer");
}
if ( guessNumber == secretNum + 1)
{
    alert('Close enough to the correct answer');
}