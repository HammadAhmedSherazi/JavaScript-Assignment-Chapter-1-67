var studNam = ["Jhone", "Deo", "Mark", "James", "Jonny", "Hayden", "Russel", "Astle", "Alex", "Jolie"]
var cls = [10, 9, 10, 8, 7, 10, 8 , 5, 7, 6];
var table = document.getElementById('myTable');
    for (var i=0 ; i<studNam.length; i++){
        tr= document.createElement('tr');
    table.appendChild(tr);
 var   td1 = document.createElement('td')
    td2 = document.createElement('td')
    td3 = document.createElement('td')
    td4 = document.createElement('td')
    td5 = document.createElement('td');

    td1.innerHTML = i;
    td2.innerHTML = studNam[i];
    td3.innerHTML = cls[i];
    var delbutton = document.createElement('button');
    delbutton.innerHTML = "DELETE";
    delbutton.setAttribute('onclick', 'deleteIt(this)');
    var edtbutton = document.createElement('button');

    edtbutton.innerHTML = "EDIT";
    edtbutton.setAttribute('onclick', 'editIt(this)');

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

    td4.appendChild(delbutton);
    td5.appendChild(edtbutton);

    }
    function deleteIt(thisNode){
            thisNode.parentNode.parentNode.remove();
    
    }
    function editIt(thisNode){
        
        const txt= thisNode.parentNode.previousSibling.previousSibling.previousSibling.innerText;
        const clsNo = thisNode.parentNode.previousSibling.previousSibling.innerText;
        var input1 = document.createElement('input');
        var input2 = document.createElement('input');
        var inp1 = thisNode.parentNode.previousSibling.previousSibling.previousSibling.appendChild(input1);
        var inp2 = thisNode.parentNode.previousSibling.previousSibling.appendChild(input2);
        inp1.setAttribute('value', txt);
        inp2.setAttribute('value', clsNo)
        thisNode.parentNode.previousSibling.previousSibling.previousSibling.firstChild.remove();
        thisNode.parentNode.previousSibling.previousSibling.firstChild.remove();
      


        
        
         }

