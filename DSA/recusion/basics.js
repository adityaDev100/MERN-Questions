// //print name n time

// function printName(count,n){
//     if(count>n) return
//   console.log("Aditya Pandey")
//   printName(count+1,n)
// }

// let n = 10
// printName(1,n)

// //print 1 to n time

// function print1ToN(count,n){
//     if(count>n) return
//   console.log(count)
//   print1ToN(count+1,n)
// }

// let n = 10
// print1ToN(1,n)

// //print n to 1 time

// function printNTo1(count,n){
//     if(count<n) return
//   console.log(count)
//   printNTo1(count-1,n)
// }

// let n = 1
// printNTo1(10,n)

////print 1 to n by backtracking

// function print1ToN(i,n){
//   if(i<1) return
//   print1ToN(i-1,n)
//   console.log(i)
// }

// let n = 3
// print1ToN(3,n)

////print 1 to n by backtracking

// function printNTo1(i,n){
//     if(i>n) return
//     printNTo1(i+1,n)
//     console.log(i)
//   }

//   let n = 10
//   printNTo1(1,n)


///**Flat map by using recursion*/

let arr = [1,2,3,[2,4,[2,1,[3],[3,3,[1,1,1,1,1,1,[5,4,3,3]],4,[56]]],5],[56,34,12]]

function flatMap(list) {
  let f = [];
  
  function recurse(arr) {
    arr.forEach((node) => {
      if (Array.isArray(node)) {
        return recurse(node);
      }
      f.push(node);
    });
  }
  recurse(list);
  return f
}
let a = flatMap(arr);
console.log(a);



//**Sum Of Array**//
// let arr =[1,4,5,7,2,4,5,5,3,2,2,2,2,2,2,23,4,4,3,2,4,43,2,4,4,32,2,43,22,3,4,32,2,4,2,4,5,3,3,5,3,3,5,2,32,44]

// function sumOfArray(arr){
//     let currentSum = 0
//     function recurseFunction(n){
//         if(n >= arr.length) return
//        currentSum += arr[n]
//        return recurseFunction(n+1)
//     }
//     recurseFunction(0)
//   return currentSum
// }

// let a = sumOfArray(arr)
// console.log("a",a)


///**Reverse String**///

// function ReverseString(input){
//   let reverseString = ""
//   let stringLength = input.length-1
//     function recurse(n){
//         if(n<0) return
//        reverseString = reverseString += input[n]
//        return recurse(n-1)
//     }
//     recurse(stringLength)

//     return reverseString
// }

// let input = "Geeks for Geeks"
// let a = ReverseString(input)
// console.log("first",a)

