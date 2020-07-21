var coin = Math.random();
var improvedNum = (coin * 2) + 1;
var toss = Math.floor(improvedNum);
if (toss === 1)
{
    document.write("1<br>");
    document.write('random coin value: Heads');
}
else{
    document.write("2<br>");
    document.write('random coin value: Tails');
}
