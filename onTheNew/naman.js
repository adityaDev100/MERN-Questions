// const input = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:
// Input: nums = [0]
// Output: [0]
 

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1



// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.


let nums1 = [1,2,3,0,0,0]
let nums2 = [2,5,6]
let m = 3
let n = 3

function mergeSortedArr(nums1,nums2,m,n){
    let i=0
    let j=0

  while(i<m){
    if(nums1[i] < nums2[j]){
          i++
        }else if(nums1[i] == nums2[j]){
          nums1[i+1] = nums2[j]
          i++
          j++
        }
  } 
}

mergeSortedArr(nums1,nums2,m,n)
