function calculateSquare(num1 , num2 ){
    var num1, num2;
    var sqnum1 = num1*num1;
    var sqnum2 = num2*num2;


    return sqnum1 + sqnum2;

}
function calculateHypotenuse()
{
    var base = Number(prompt("Enter a base value"));
    var per = Number(prompt("Enter a perpendicular value"));
    var sumSQbase_per = calculateSquare(base, per);

    var sqHyp = sumSQbase_per;
    
    return Math.s(sqHyp);


}
alert("Hypothesis of a right triangle is " + calculateHypotenuse())
