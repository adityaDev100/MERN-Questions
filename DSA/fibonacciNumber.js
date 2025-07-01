//Fibonacci numbers : 0,1,1,2,3,5,8,13,21,34,55,89...


//that pattern is like f(0) = 0 and f(1) = 1
//so f(3) = f(0) + f(1)
//it means f(n) = f(n-2) + f(n-1)

// function findFibonacci(n){
//     if(n<2){
//         return n;
//     }
//     return findFibonacci(n-2) + findFibonacci(n-1)
// }

// let output = findFibonacci(10)
// console.log("output :",output)




// Now suppose if n is 50 then we have to use dynamic programming for memoizing previous result



function findFibonacciByDp(n){
    let obj = {}
    if(n<2){
        return n;
    }
    if(!obj.hasOwnProperty(n)){
        obj[n] = findFibonacciByDp(n-2) + findFibonacciByDp(n-1)
    }
    console.log("d",obj)
    return findFibonacciByDp(n-2) + findFibonacciByDp(n-1)
}

let outputByDp = findFibonacciByDp(5)
console.log("output :",outputByDp)
