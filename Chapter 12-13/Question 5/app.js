var password = "Hammad";
var userPassword= prompt("Enter a password");
if ( userPassword === "")
{
    alert('Please enter your password');
}
else if ( userPassword === "Hammad")
{
    alert('Correct! The password you entered matches the original password')
}
else{
    alert('Incorrect password');
}