var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturaday"]
var d = new Date();
var dayName=days[d.getDay()]; 
if ( (dayName === "Saturaday") || (dayName === "Sunday"))
{
    alert("It's Fun day");
}