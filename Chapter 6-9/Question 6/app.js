var sub1=prompt('Enter a 1st Subject Name:');
var sub2=prompt('Enter a 2nd Subject Name:');
var sub3=prompt('Enter a 3rd Subject Name:');
var mark1=Number(prompt('Enter a 1st Subject Marks'));
var mark2=Number(prompt('Enter a 2nd Subject Mark'));
var mark3=Number(prompt('Enter a 3rd Subject'));
var total=100;
var totObt=mark1+mark2+mark3;
var per1 = (mark1/total)*100;
var per2 = (mark2/total)*100;
var per3 = (mark3/total)*100;
var per=(per1+per2+per3)/3;
document.write('<table>');
document.write('<tr>');
document.write('<th>Subject</th>');
document.write('<th>Total Marks</th>');
document.write('<th>Obtained Marks</th>');
document.write('<th>Percentage</th>');
document.write('</tr>')
document.write('<tr>');
document.write('<td>'+ sub1 +'</td>');
document.write('<td>'+ total +'</td>');
document.write('<td>'+ mark1 + '</td>');
document.write('<td>'+ per1 + '%' + '</td>');
document.write('</tr>')

document.write('<tr>');
document.write('<td>'+ sub2 +'</td>');
document.write('<td>'+ total +'</td>');
document.write('<td>'+ mark2 + '</td>');
document.write('<td>'+ per2 + '%' +'</td>');
document.write('</tr>')


document.write('<tr>');
document.write('<td>'+ sub3 +'</td>');
document.write('<td>'+ total +'</td>');
document.write('<td>'+ mark3 + '</td>');
document.write('<td>'+ per3+ '%' +'</td>');
document.write('</tr>')

document.write('<tr>');
document.write('<th></th>');
document.write('<th>'+ (total*3)+ '</th>');
document.write('<th>'+ totObt + '</th>');
document.write('<th>'+ per + '%' +'</th>');
document.write('</tr>')
document.write('</table>');
