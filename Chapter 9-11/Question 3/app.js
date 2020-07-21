var color=prompt("Enter a traffic signal color(Red, Yellow, Green):");
if ( (color === 'Red') || (color === 'red'))
{
    alert('Must Stop');  
}
else if ( (color === 'Yellow') || (color === 'yellow'))
{
    alert('Ready to move');
}
else if ( (color === 'Green') || (color === 'green'))
{
    alert("Move now");
}
else{
  alert("Please enter color from this color(Red, Yellow, Green)");
}