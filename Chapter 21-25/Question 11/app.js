var input = prompt("Please enter name, thing, city, or word etc in lower case");

document.write('User input: ' + input);
str = input.toLowerCase().split(' ');
for (var i = 0; i < str.length; i++) {
  str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
}
document.write("<br>Title case: " + str.join(" "));