//ASCII table Code
//[A-Z : 65-90]   (str.charCodeAt(i)>=65) && (str.charCodeAt(i)<=90)
//[a-z : 97-122]  (str.charCodeAt(i)>=97) && (str.charCodeAt(i)<=122)
//[0-9 : 48-57]   (str.charCodeAt(i)>=48) && (str.charCodeAt(i)<=57)
// 

var password = prompt('Enter a password');
// var str = password.split('');
if ((password.charCodeAt(0) < 48) || (password.charCodeAt(0) > 57) )
{
    if((password.length >= 6))
    
    {
        var str = password;
        var condition ='no'
        for( var i=0; i<=str.length; i++){
         if (
             (((str.charCodeAt(i)>=65) && (str.charCodeAt(i)<=90)) || ((str.charCodeAt(i)>=97) && (str.charCodeAt(i)<=122))) && ((str.charCodeAt(i)>=48) || (str.charCodeAt(i)<=57))
         ){
                 condition='yes';
             }

        }
        if (condition === 'yes'){
            alert("Password is valid");
        }
                   
    }
    else{
        alert("Password is invalid, Its must at least 6 characters long")
    }
}
else {
    alert("Password is invalid, password first is not a number\nPlease enter a valid password");
}
