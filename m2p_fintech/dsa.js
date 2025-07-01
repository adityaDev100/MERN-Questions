// let arr = [1,1,0,1,1,1,0,0,0,1,1,1,0,0,1]
// let k = 2


// two pointer approach
// sliding window approach

//two sum problem by two pointer
let arr = [1,3,6,8,12,15,17,34,56,67]
let target = 37

function getIndexToGetTarget(arr,target){
  let left = 0,right=arr.length-1
  while(left<right){
     let currentSum = arr[left] + arr[right]
     if(currentSum === target){
         return {left,right}
     }else if(currentSum > target){
         right--
     }else{
         left++
     }
  }
}

let result = getIndexToGetTarget(arr,target)

console.log("g",result)