let inputArr = [23, 5, 12,98,-6, 1, 56, 9,0,-65];

function doBubbleSort(arr, n) {
  for (let i = n - 1; i >= 1; i--) {
    for (let j = 0; j < n - 1; j++) {
      //check greater one element between two element
      if (arr[j] > arr[j + 1]) {
        // swap two elements
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

doBubbleSort(inputArr, inputArr.length);
// console.log("aaa", inputArr);

//Time complexity = O(n2) 

// In this sorting algo if the input array is already sorted then we don't need to do swap to achieve O(n) time complexity


let inputArr2 = [1,4,3,6,8,7,9,23];

function doBubbleSortForSortedArr(arr, n) {
  for (let i = n - 1; i >= 1; i--) {
    let doSwap = 0
    for (let j = 0; j < n - 1; j++) {  
        // console.log("t",i,j)
      //check greater one element between two element
      if (arr[j] > arr[j + 1]) {
        // swap two elements
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        doSwap++
      }
    }
    if(!doSwap){
        break;
    }
  }
}

doBubbleSortForSortedArr(inputArr2, inputArr2.length);
console.log("doBubbleSortForSortedArr", inputArr2);
