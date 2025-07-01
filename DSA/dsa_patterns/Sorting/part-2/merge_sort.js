let inputArray = [4, 2, 6, 3, 0, 7, 4, 2, 1, 8, 6, 3];
let low = 0;
let high = inputArray.length - 1;

function mergeSorted(arr, low, mid, high) {
  let temp = [];
  let leftPointer = low;
  let rightPointer = mid + 1;
  // the first array index will be [low...mid] and second array index will be [mid+1...to]
  while (leftPointer <= mid && rightPointer <= high) {
    // add array by compare left and right array element
    if (arr[leftPointer] <= arr[rightPointer]) {
      temp.push(arr[leftPointer]);
      leftPointer++;
    } else {
      temp.push(arr[rightPointer]);
      rightPointer++;
    }
  }
 // add left array extra elements
  while (leftPointer <= mid) {
    temp.push(arr[leftPointer]);
    leftPointer++;
  }

 // add right array extra elements
  while (rightPointer <= high) {
    temp.push(arr[rightPointer]);
    rightPointer++;
  }

  for (let i = 0; i < temp.length; i++) {
    arr[low + i] = temp[i];
  }
}

function mergeSort(arr, low, high) {
  if (low >= high) return;
  let mid = Math.floor((low + high) / 2);
  // to divide left side array
  mergeSort(arr, low, mid);
  // to divide right side array
  mergeSort(arr, mid + 1, high);
  mergeSorted(arr, low, mid, high);
}

mergeSort(inputArray, low, high);

console.log("first", inputArray);
