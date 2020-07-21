var numStr=prompt("Enter a number or character");
if ( numStr>=65 && numStr<=90 )
{
    alert("Character is a capital letter");
}
else if ( numStr>=97 && numStr<=122 )
{
    alert("Character is a small letter");
}
else if ( numStr>=48 && numStr<=57 )
{
    alert(cout<<"Character is a digit");
}
else if ((numStr>0 && numStr<=47)||(numStr>=58 && numStr<=64)||(numStr>=91 && numStr<=96)||(numStr>=123 && numStr<=127)){
    alert("Character is a special symbol");
}