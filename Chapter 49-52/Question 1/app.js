function userData(){
    var firstName = document.getElementById('fnam');
    var lastName  = document.getElementById('lnam');
    var e_mail = document.getElementById('inputEmail4');
    var pass = document.getElementById('inputPassword4');
    var add = document.getElementById('inputAddress');
    var mob = document.getElementById('mobNo');
    var city = document.getElementById('inputCity');
    var state = document.getElementById('inputState');
    var postcode = document.getElementById('inputCode')
    var dist = document.getElementById('inputDistrict');
    
    document.write('<fieldset>')
    // document.write('<legend>')
    document.write("<legend><h1>User Details<br></h1></legend>");
    document.write("<b>User name:</b> " + firstName.value + " " + lastName.value + "<br>");
    document.write("<b>Email:</b> " + e_mail.value +  "<br>");
    document.write("<b>Mobile Number:</b> " + mob.value +  "<br>");
    document.write("<b>Address:</b> " + add.value +  "<br>");
    document.write("<b>Postal Code:</b> " + postcode.value +  "<br>");
    document.write("<b>City:</b> " + city.value +  "<br>");
    document.write("<b>District: </b>" + dist.value + '<br>')
    document.write("<b>State:</b> " + state.value +  "<br>");
    document.write('</fieldset')
}