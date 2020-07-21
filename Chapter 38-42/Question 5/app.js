function indexof(str, char){

    var string = str.split('');
    var alph = char;
    for(i=0 ; i<=string.length-1; i++){

        if (alph === string[i]){
            index= i;
            alert("Index number of " + alph + " is " + index);
            break;
        }

    }
    
}
var str=prompt("Enter a string");
document.write(str);
var char = prompt("Enter a character which you find index number");
indexof(str, char);