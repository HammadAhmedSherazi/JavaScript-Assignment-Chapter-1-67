var parent = document.getElementById("main-content");
console.log('All child of main-content\n');
for(var i=0 ; i< parent.childNodes.length; i++){
    console.log(parent.childNodes[i]);
}
var p = document.getElementsByClassName('render');
for(var i=0; i < parent.childNodes.length; i++){
    console.log(p[i].innerHTML);
}
var fnam = document.getElementById('first-name');
fnam.setAttribute('value', 'Alex');
var lnam = document.getElementById('last-name');
lnam.setAttribute('value', 'Bank');
var email = document.getElementById('email');
email.setAttribute('value', 'alexbank@example.com');





