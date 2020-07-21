var obtainMarks=prompt('Enter the obtained marks of the three subjects:');
var totalMarks=prompt('Enter total marks of the three subjects:');
percentage= (obtainMarks/totalMarks)*100;
document.write('<h1>Marks Sheet</h1><br><br>');
document.write('Total marks : ' + totalMarks);
document.write('<br>Marks obtained : ' + obtainMarks );
document.write('<br>Percentage : ' + percentage + '%');
if ( percentage >= 80)
{
    document.write('<br>Grade : A-one');
    document.write('<br>Excellent');
}
if ( (percentage >= 70) && (percentage < 80))
{
    document.write('<br>Grade : A');
    document.write('<br>Remarks: Good');
}
if ( (percentage >= 60) && (percentage < 70))
{
    document.write('<br>Grade : B');
    document.write('<br>Remarks: You need to improve');
}
if ( percentage < 60)
{
    document.write('<br>Grade : Fail');
    document.write('<br>Remarks: Sorry');
}