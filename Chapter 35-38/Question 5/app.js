function squareNum(){

    return num*num;

}
var num = Number(prompt("Enter a number"));
var result = squareNum(num);
document.write("Square of " + num + " is  " + result);