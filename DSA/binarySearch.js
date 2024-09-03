// BINARY SEARCH

//Binary Search Algorithm is a searching algorithm used 
//in a sorted array by repeatedly dividing the search interval in half.
//The idea of binary search is to use the information that the array is
// sorted and reduce the time complexity to O(log N).


let a = [3, 15, 26, 33, 42, 51, 54, 65, 67];

function binarySearch(arr, arrLength, targetResult) {
    let min = 0;
    let max = arrLength - 1;

    while (min <= max) {
        // Recalculate the middle index in every iteration
        let middleElementIndex = Math.floor((min + max) / 2);
        let middleElementValue = arr[middleElementIndex];

        if (middleElementValue === targetResult) {
            return middleElementIndex; // Return the index if found
        } else if (middleElementValue > targetResult) {
            max = middleElementIndex - 1; // Narrow search to the left
        } else {
            min = middleElementIndex + 1; // Narrow search to the right
        }
    }

    return -1; // Return -1 if the target is not found
}

let arrayLength = a.length;
let targetResult = 15;
const resultIndex = binarySearch(a, arrayLength, targetResult);

console.log("Index of target:", resultIndex);
