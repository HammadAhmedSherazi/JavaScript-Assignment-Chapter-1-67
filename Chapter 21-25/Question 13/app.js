var username = prompt('Enter a user name');
for (var i=0; i<=username.length -1 ; i++)
{
    var symbol = username.charCodeAt(i);
    if ((symbol === 33 ) || (symbol === 44) || (symbol === 46) || (symbol === 64 ))
    {
        alert('Enter a valid username ');
        break;
    }

}

