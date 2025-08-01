// // find maximum sum of subarray of k length
// const input = [-1,2,4,-2,8,1,-4,6,3]
// const subarrayLength = 3


// function findMaximumSubarraySum(arr,k){

//     let l = 0
//     let r = k-1
//     let currentSum = 0
//     for(let i=l ; i<=r ; i++){
//         currentSum += arr[i]
//     }

//     let maxSum = currentSum

//     while( r < arr.length-1){
//         currentSum -= arr[l];
//         l++
//         r++
//         currentSum += arr[r]
//         maxSum = Math.max(currentSum,maxSum)
//     }

//     return maxSum

// }

// const output = findMaximumSubarraySum(input,subarrayLength)
// console.log(output)


//container filled with most water

// var maxArea = function(height) {
//     let maxArea = 0;
//     let l = 0;
//     let r = height.length-1;
//     while(l<r){
//         let minHeight = Math.min(height[l],height[r])
//         let area = minHeight * (r-l)
//         maxArea = Math.max(maxArea,area)
//         if(height[l] < height[r]){
//            l++
//         }else{
//             r--
//         }
//     }

//     return maxArea;
// };


// const a = maxArea([1,8,6,2,5,4,8,3,7])
// console.log(a)




///Reverse a string

// const input ="  hello world  "
// // Output: "blue is sky the"

// var reverseWords = function(s) {
//     s = s.trim() // remove corner extra space here
//     let strArr = s.split(" ")
//     let temp = []
//     for(let i= strArr.length-1 ; i>=0 ; i--){
//         if(strArr[i] !== ""){ //make sure you are not adding extra space in array
//            temp.push(strArr[i])
//         }
//     }

//     return temp.join(" ")
// };

// const output = reverseWords(input)
// console.log(output)



// rotate array by k steps from right

// const input = [1,2,3,4,5,6,7]
// const k = 3
// // Output: [5,6,7,1,2,3,4]

// var rotate = function(nums, k) {
//     k = k % nums.length; // handle cases where k > nums.length

//     // Helper to reverse part of array
//     function reverse(start, end) {
//         while (start < end) {
//             [nums[start], nums[end]] = [nums[end], nums[start]];
//             start++;
//             end--;
//         }
//     }

//     // Step 1: Reverse the whole array
//     reverse(0, nums.length - 1);

//     // Step 2: Reverse first k elements
//     reverse(0, k - 1);

//     // Step 3: Reverse the rest
//     reverse(k, nums.length - 1);
// };
// let nums = [1,2,3,4,5,6,7];
// rotate(nums, 3);
// console.log(nums); // ➜ [5,6,7,1,2,3,4]


// You are given an array people where people[i] is the weight of the ith person, and an infinite number of boats where each boat can carry a maximum weight of limit. Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most limit.
// Return the minimum number of boats to carry every given person.


// Example 1:

// Input: people = [1,2], limit = 3
// Output: 1
// Explanation: 1 boat (1, 2)
// Example 2:

// Input: people = [3,2,2,1], limit = 3
// Output: 3
// Explanation: 3 boats (1, 2), (2) and (3)
// Example 3:

// Input: people = [3,5,3,4], limit = 5
// Output: 4
// Explanation: 4 boats (3), (3), (4), (5)


// var numRescueBoats = function(people, limit) {
//     let sortedPeople = people.sort((a,b)=> a-b);
//     let l = 0;
//     let r = people.length-1;
//     let boats = 0;
//     while(l<=r){
//         if(sortedPeople[l] + sortedPeople[r] <= limit){
//             l++ // if heavy+light can go 
//         }
//         r-- // heavy weight always goes
//         boats++
//     }
//     return boats;
// };


// let input = [1,2,4,1]
// let limit = 3
// let numberOfBoats = numRescueBoats(input,limit)
// console.log(numberOfBoats)