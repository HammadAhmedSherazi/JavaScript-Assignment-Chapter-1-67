var arr = [24, 53, 78, 91, 12];
for (var i = 1; i <= arr.length-1; ++i) {
    if (arr[0] > arr[i])
        arr[0] = arr[i];
}

document.write("The smallest element is " + arr[0]);