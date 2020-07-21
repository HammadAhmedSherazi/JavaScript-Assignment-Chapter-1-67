var year = parseInt(prompt("Enter a year:"));
checkLeapyear(year);
function checkLeapyear(year){
    var x= year -4;
    if(x % 2 == 0){
        alert("Year is Leap");
    }
    else{
        alert("Year is not Leap");
    }
}