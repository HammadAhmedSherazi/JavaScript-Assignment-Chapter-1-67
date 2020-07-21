function power(a, b){
    var num = a;
    var n = b;
    var result=1
    for(var i=0 ; i<n; i++){
        result = a*result;
    }
    alert(num + " the power " + n + " is " + result);
}
var x = parseInt(prompt("Enter a number:"));
var y = parseInt(prompt("Enter a power of the number"));
power(x, y);
