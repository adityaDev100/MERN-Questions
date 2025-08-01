// function checkIsPrime(num){
//     if(num == 1 ) return false
//     let count = 0
//   for(let i=1 ; i<=num ; i++){
//      if(num%i === 0){
//         count ++
//      }
//   }
//   return count > 2 ? false : true
// }

// const a = checkIsPrime(6)
// console.log(a)


function isPrime(num) {
  if (num <= 1) return false; // 0 and 1 are not prime
  if (num === 2) return true; // 2 is prime
  if (num % 2 === 0) return false; // Even numbers > 2 are not prime

  console.log("s",Math.sqrt(num))

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    console.log("first",num,i)
    if (num % i === 0) return false;
  }
  return true;
}

// Example usage:
// console.log(isPrime(5));  // true
console.log(isPrime(12)); // false

