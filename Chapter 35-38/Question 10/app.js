function check_Palindrome(str){
       var cstr = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
        var count = 0;
    
        if(cstr==="") {
            alert("Nothing found!");
            return false;
        }
   
     if ((cstr.length) % 2 === 0) {
            count = (cstr.length) / 2;
        } 
     else {

    
            if (cstr.length === 1) {
                alert("Entry is a palindrome.");
                return true;
            } 
            else {
                count = (cstr.length - 1) / 2;
            }
        }

    for (var x = 0; x < count; x++) { 
            if (cstr[x] != cstr.slice(-1-x)[0]) {
                alert("Entry is not a palindrome.");
                return false;
            }
        }
        alert("The string is a palindrome.");
        return true;
    }
    check_Palindrome('madam');
    
    