// let inputArr = [23, 5, 12,98,-6, 1, 56, 9,0,-6];

// function doInsertionSort(arr, n) {
//   for (let i = 1; i < n; i++) {
//     for (let j = i; j>=0; j--) {
//       if (arr[j] < arr[j - 1]) {
//         // swap two elements
//         let temp = arr[j - 1];
//         arr[j - 1] = arr[j];
//         arr[j] = temp;
//       }
//       console.log("f")
//     }
//   }
// }

// doInsertionSort(inputArr, inputArr.length);
// console.log("aaa", inputArr);


/// This code will run fine , but when a sorted array is given as an input then this loop will run unnecessary
// to solve this problem


let inputArr2 = [2,5,7,8,9,13,45,246];
function doInsertionSort2(arr, n) {
    for (let i = 1; i < n; i++) {
     let j = i;
     while(j<0 && arr[j-1] < arr[j]){
        console.log("d")
        let temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
        j--
     }
    }
  }
  
  doInsertionSort2(inputArr2, inputArr2.length);
  console.log("doInsertionSort", inputArr2);
  