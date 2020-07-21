var str = "The quick brown fox jumps over the lazy dog";
var arr = str.split(' ');
var count= 0;
var word = 'the';
for (var i=0; i<=arr.length -1 ; i++)
{
    if (arr[i].toLowerCase() === word){
        count++;
    }
}
document.write('There are ' + count + " occurence(s) of the word 'the'"  );