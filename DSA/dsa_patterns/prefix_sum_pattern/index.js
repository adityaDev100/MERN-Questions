// What is Prefix Sum?
// It's just a way to pre-calculate the sum of elements in an array up to each position,
// so you can quickly find the sum of any part of the array later.



// Here is how we can pre calculate prefix sum array
let inputArray =[3,5,7,3,5,12]


function getPrefixSumArray(arr){
   let prefixSumArray = Array(arr.length).fill(0) // thats how we can create a required size array with required elements
   console.log("d",prefixSumArray) // [ 0, 0, 0, 0, 0, 0 ]
   arr.forEach((_,index) => {
    if(index === 0) return prefixSumArray[0] = arr[0] 
    prefixSumArray[index] = arr[index] + prefixSumArray[index-1]
   });
   console.log("d",prefixSumArray) // [ 3, 8, 15, 18, 23, 35 ]
}



getPrefixSumArray(inputArray)


//Formula for Range Sum:
//To find the sum of elements between indices i and j:
//sum = prefixSum[j] - prefixSum[i-1]
//if i =0 then the sum is just prefixSum[j]


//Example:
//Find the sum of elements from index 1 to 3 in [1, 2, 3, 4]:
//Prefix sum array: [1, 3, 6, 10]
//sum = prefixSum[3]−prefixSum[0]
//sum = 10-1 = 9
