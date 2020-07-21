var d = new Date();
var time = d.getHours();
var second = d.getSeconds();
if ((time>=12) && (second<=59))
{
    alert("It's PM");
}
else{
    alert("It's AM");
}
