var bakeryItem = ["cake", "apple pie", "cookie", "chips", "patties"];
var searchItem = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am");
var matchFound = "no";
for (var i=0; i<=bakeryItem.length - 1; i++){
    if (bakeryItem[i]=== searchItem)
    {
        matchFound = "yes";
        document.write(searchItem + ' is <b>avaliable</b> at index ' + i + 'in our bakery' );
    }
    
}
if (matchFound === "no"){
    document.write('We are sorry. ' + searchItem + ' is not <b>avaliable</b> in our bakery' );
}