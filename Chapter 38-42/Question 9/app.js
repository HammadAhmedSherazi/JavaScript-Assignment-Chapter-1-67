var count=1, working_hours, over_time, over_time_pay;
var n = prompt("How many employee work in the company:");

    while(count<=n)
    {
        var working_hours=prompt("Enter the working hours of employee no " + count + ":");
        if(working_hours>40)
        {
            over_time = working_hours - 40;
            over_time_pay = over_time * 12.00;
            document.write("Employee No " + count + " overtime pay is "  + over_time_pay + "<br>" );
        }
        else
            document.write("You have to work for more than 40 hours to get over time pay<br>");

        count++;
    }