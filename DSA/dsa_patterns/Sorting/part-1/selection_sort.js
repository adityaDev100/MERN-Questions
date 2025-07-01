let arr = [23,68,0,2,-45,24,89,32,2,44,1,23,0,-3]


function doSelectionSort(arr){
  for(let i=0; i<arr.length-1; i++){
   let minIndex = i
   for(let j=i; j<arr.length;j++){
      if( arr[j] < arr[minIndex]) minIndex = j
   }
   let temp = arr[minIndex]
   arr[minIndex] = arr[i]
   arr[i] = temp 
  }
}

const a = doSelectionSort(arr)
console.log("aaa",arr)

//Time complexity = O(n2) 