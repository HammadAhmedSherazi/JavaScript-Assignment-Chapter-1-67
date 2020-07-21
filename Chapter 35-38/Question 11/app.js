function captilize(str) {
  return str.toLowerCase().split(' ').map(function(word) {
     return word.replace(word[0], word[0].toUpperCase());
      }).join(' ');
}

alert(captilize('the quick brown fox'));