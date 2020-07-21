function average(a, b, c){
    var n=3;
    var avg = (a+b+c)/n;
    return avg;
}
function percentage(a, b, c){
    var obtmarks = a + b + c;
    var totalMarks = 300;
    var per = (obtmarks/totalMarks)*100;
    return per;
}
function mainFunction(){
    var a = Number(prompt("Enter a first subject marks"));
    var b = Number(prompt("Enter a second subject marks"));
    var c = Number(prompt("Enter a third subject marks"));
    alert("Average number of a Student from 3 subjects is " + average(a, b, c).toFixed(2) + "\n Percentage is " + percentage(a ,b, c).toFixed(2) + "%");
}
mainFunction();