function longestWord(str){
    var str_arr = str.split(" ");
    var count = 0;
    for ( var i=0; i<=str_arr.length -1; i++){
        for ( var j=1; i<=str_arr.length -1; i++)
        {
            if (str_arr[i].length < str_arr[j].length){
                count += 1;
                return str_arr[j];
            }
            else {
                return str_arr[i];
            } 
        }
    }
}
alert("Longest Word: " + longestWord('Web Development Tutorial'));