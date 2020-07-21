function removeVowel(str){
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    var string = str;

    for(var i=0; i<string.length; i++){

        for(var j=0; j<vowel.length; j++){
            if(vowel[j]===string[i])
                string = string.replace(string[i], "");

      
        }
    }
    
    alert("After removed vowels from sentence:" + string);
}
var str = prompt("Enter a sentence:")
removeVowel(str);