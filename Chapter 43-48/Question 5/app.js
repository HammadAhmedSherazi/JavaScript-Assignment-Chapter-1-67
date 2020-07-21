var count = 0;
var screen = document.getElementById('screen');
screen.value = count;
function incresesCount(){
    screen.value = ++count;
}

function decresesCount(){
    screen.value = --count;

}