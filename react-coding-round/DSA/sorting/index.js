//Quick sort

let arr = [1,4,0,2,3,6]

function quickSort(arr){

    if(arr.length <= 1) return arr

   const pivot = arr[arr.length-1] // choose one pivot element and compare it to each element
   let left = []
   let right = []

   for(let i=0; i<arr.length-1; i++){
    if(arr[i] < pivot){
        left.push(arr[i])
    }else{
        right.push(arr[i])
    }
   }

   return [...quickSort(left), pivot, ...quickSort(right)]
}

arr = quickSort(arr)
console.log(arr)

