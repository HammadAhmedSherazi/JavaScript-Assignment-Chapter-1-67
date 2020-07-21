function counting()
{
    var start = Number(prompt("Enter a starting number of counting"));
    var end = Number(prompt("Enter a ending number of counting"));
    for (start; start<=end; start++)
    {
        document.write(start + "<br>");
    }
}
counting();