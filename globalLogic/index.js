function checkIsPrime(num){
    if(num == 1 ) return false
    let count = 0
  for(let i=1 ; i<=num ; i++){
    console.log("first",num,i)
     if(num%i === 0){
        count ++
     }
  }
  return count > 2 ? false : true
}

const a = checkIsPrime(5)
console.log(a)