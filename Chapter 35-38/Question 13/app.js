function occurenceCount(str, ltr){

    var arr = str.split('');
    var count = 0;
    for (var i=0; i<=arr.length-1; i++){
        if( arr[i] === ltr){
            count++ ;
        } 
    }

    alert(count + " time occurence of " + ltr );
}
occurenceCount('JSResourceS.com','o')
