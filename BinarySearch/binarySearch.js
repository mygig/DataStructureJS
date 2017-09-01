// binary search worst time complexity is log time which is O(log n)
// binary search is applied on sorted list and its much better than linear search.
// each operation divides the list in half.

var arr = [10, 14, 19, 20, 25, 89, 99, 200];
var low = 0;
var high = arr.length - 1;

function binarySearch(arr, key) {
    // calculate the middle value
    while (low <= high) {
        var mid = Math.floor((low + high) / 2);
        if (arr[mid] < key) {
            // too low
            low = mid + 1;
        } else if (arr[mid] > key) {
            // too high
            high = mid - 1;
        } else if (arr[mid] === key) {
            console.log("element found at position", mid);
            return;
        }
    }
    return console.log("element not found !!");
}

// function invocation.
binarySearch(arr, 140);