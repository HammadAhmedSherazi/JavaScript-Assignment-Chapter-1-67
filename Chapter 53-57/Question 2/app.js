function fontSizeInc(){
    var p = document.getElementById('para');
    var style = window.getComputedStyle(p, null).getPropertyValue('font-size');
    var fontSize = parseFloat(style); 
    p.style.fontSize = (fontSize + 10) + 'px';
}
function fontSizeDec(){
    var p = document.getElementById('para');
    var style = window.getComputedStyle(p, null).getPropertyValue('font-size');
    var fontSize = parseFloat(style);
    p.style.fontSize = (fontSize - 10) + 'px';
    
}
