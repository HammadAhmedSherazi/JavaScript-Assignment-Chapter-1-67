function calculator()
{
    var n1 = Number(prompt('Enter a 1st number'));
    var n2 = Number(prompt("Enter a 2nd number"));
    var opertor = prompt("Enter a operator , what would u like to perform operation b\w numbers(+, -, /, *, %): ");
    if (opertor === '+')
    {
        return n1+n2;
    }
    else if (opertor === '-')
    {
        return n1-n2;
    }
    else if (opertor === '/')
    {
        return n1/n2;
    }
    else if (opertor === '*')
    {
        return n1*n2;
    }
    else if (opertor === '%')
    {
        return n1%n2;
    }
}
var result = calculator();
document.write(" Answer is " + result);