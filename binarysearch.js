function binarySearch(arr, val) {
    trace = "";
    let start = 0;
    let end = arr.length - 1;
    console.log(end);
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === val) {
            trace += "The val was found at index "+mid +"\n";
            return trace;
        }

        if (val < arr[mid]) {
            trace += "mid = "+arr[mid] + "\n";
            trace += val +" is less than mid \n";
            trace += "Search on the left of " + val +"\n";
            end = mid - 1;
        } else {
            trace += "mid = "+arr[mid] + "\n";
            trace += val +" is greater than mid \n";
            trace += "Search on the right of " + val +"\n";
            start = mid + 1;
        }
    }
    trace += "The value was not found";
    return trace;
}

arr = [10,20,30,40,50,60,70]
val = 50;
console.log(binarySearch(arr,val))