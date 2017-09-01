// linear search doesnt require list to be sorted, its terribly slow.
// as in the worst case you have to go through all the elements.


var arr = [1, 4, 5, 6, 77, 55];
var key = null;
var counter = 0;
/**
 * @param{Number} key
 */
// function to do search
function search(key) {
    while (counter <= arr.length) {
        if (arr[counter] === key) {
            console.log("element found at ", counter);
            return;
        }
        counter++;
    }
    return console.log("element not found !");
}

// function invocation.
search(90);