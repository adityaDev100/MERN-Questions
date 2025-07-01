//LARGEST NUMBER IN ARRAY
//Given an array of integers nums, return the value of the largest element in the array
// const input = [3, 3, 6, 1]
// Output: 6

// function findLargestElementInArray(arr){
//     let currentLargest = arr[0]
//   arr.forEach(node => {
//     if(node > currentLargest)
//         currentLargest = node
//   });

//   return currentLargest;
// }

// const input = [0,-3, 3, -6, 1,23]
// let output = findLargestElementInArray(input)
// console.log('output:',output)


// SECOND LARGEST NUMBER IN ARRAY OTHERWISE RETURN -1
// const nums = [8, 8, 7, 6, 5]
// Output: 7


//Approach first calculate largest then second largest
// function findSecondLargestElementInArray(arr){
//     let currentLargest = -1
//     let secondLargest = -1 // assign -1 initially 

//     arr.forEach(node => {
//         if(node > currentLargest){
//             currentLargest = node
//         }  
//     });

//     arr.forEach((node)=>{
//         if(node !== currentLargest && node > secondLargest){
//           secondLargest = node
//         }       
//     })

//   return secondLargest;
// }


//Optimal Approach
// function findSecondLargestElementInArray(arr){
//     let currentLargest = -1
//     let secondLargest = -1 // assign -1 initially 

//     arr.forEach(node => {
//         if(node > currentLargest){
//             secondLargest = currentLargest
//             currentLargest = node
//         } 
        
//         else if(node < currentLargest && node > secondLargest){
//             secondLargest = node
//         }
        
//     });

//   return secondLargest;
// }



// const input = [8,8]
// let output = findSecondLargestElementInArray(input)
// console.log('output:',output)




//Kth element in a array

// function KthLargest(arr,k){
//     if(k>arr.length) return -1
//     let currentLargest = Number.NEGATIVE_INFINITY   
//     function recusiveFunc(arr,n){
//        if(n>k || arr.length === 0) return
//        let current = Number.NEGATIVE_INFINITY
//        arr.forEach(node => {
//           if(node > current){
//             current = node
//           }
//        });
//        const index= arr.indexOf(current)
//        arr.splice(index, 1);
//        currentLargest = current
//        recusiveFunc(arr,n+1)

//     }
//    recusiveFunc(arr,1)
//     return currentLargest;
// }


// const input = [4,4,4,4,5,1,3]
// let k = 2
// let b = KthLargest(input,k)
// console.log("first",b) 




//Two sum problem
// function twoSum(arr,target){
//     let temp = new Map()
//    for(let i=0; i < arr.length;i++){
//      let complement = target - arr[i]
//       if(temp.has(complement)){
//         return [temp.get(complement),i]
//       }
//       temp.set(arr[i],i)
//    }
//    return null
// }

// let input = [2,7,11,15,1,3,5,2,4,3,2,2,24,4,5,43,3]
// let target = 15
// let output = twoSum(input,target)
// console.log("output : ",output)


//Three sum problem 





















//Check if the array is sorted

// let a = [1,2,3,4,5]



//Remove Duplicates from Sorted Array

function removeDuplicate(arr){
  //let's go with the two pointer approach
  let temp = []
  let i = 0
  let j = 1

  
  if(arr[i]===arr[j]){
    j++
  }else if()

}

let input = [1,1,2,3,3,3,4]
let output = removeDuplicate(input)
console.log("output - ",output)






//consecutive string problem
// function test(string){
//   let temp = []

//   for(let i=0; i<string.length; i++){
//      let lastItem = temp[temp.length-1]
//      if(lastItem !== string[i]){
//       temp.push(string[i])
//      }else{
//       temp.pop()
//      }
//   }
//   return temp.length === 0
// }

// function isLongPressedName(actual, typed) {
//   let i = 0;
//   let j = 0;

//   while (j < typed.length) {
//     if (i < actual.length && actual[i] === typed[j]) {
//       i++;
//       j++;
//     } else if (j > 0 && typed[j] === typed[j - 1]) {
//       j++;
//     } else {
//       return false;
//     }
//   }

//   return i === actual.length;
// }

// const actual = "alex", typed = "aaleex"
// let output = test(actual,typed)
// console.log("output : ",output)