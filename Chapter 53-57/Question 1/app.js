var imgPaths = ['images/others/1.jpg', 'images/others/2.jpg', 'images/others/3.jpg', 'images/others/4.png', 'images/others/5.jpg', 'images/others/6.jpg', 'images/others/7.png', 'images/others/8.jpg', 'images/others/9.jpg', 'images/others/10.jpg', 'images/others/11.jpg', 'images/others/12.jpg', 'images/others/13.jpg', 'images/others/14.png', 'images/others/15.jpg'];
var imgDiv = document.getElementById('image');
for(var i=0; i<imgPaths.length; i++){
    imgDiv.innerHTML += "<img src='" + imgPaths[i] + "' onclick='showImages(this);'>"
}

function showImages(img) {
     document.getElementById('btnclose').style.display = 'inline-block'; 
     var modal = document.getElementById('modal');
     modal.classList.add('modal-open');
        modal.classList.remove('modal-close');
        modal.style.display ='block';
        modal.innerHTML = "<img src='" + img.src + "'>";
        

}

function onClosedImagModal(img) {
    var modal = document.getElementById('modal');
    modal.classList.add('modal-close');
    modal.classList.remove('modal-open');
    document.getElementById('btnclose').style.display ="none";
    setTimeout(()=>{ modal.style.display = "none"; }, 550)
}