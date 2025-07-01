let nums = [1,2,3,5,6,2,2,3,3]
let k = 8

// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
// A subarray is a contiguous non-empty sequence of elements within an array.



///BRUTE-FORCE  APPROACH
// function getSubArray(nums,k){
//     let count = 0;
//     for(let i=0; i<nums.length; i++){
//         let sum = 0;
//         for(let j=i; j<nums.length; j++){
//             sum += nums[j]
//             if(sum == k) count ++
//         }   
//     }
//     return count
// }


function getSubArray(nums,k){
 let hashMap = new Map()
}

const a = getSubArray(nums,k)
console.log("d",a)