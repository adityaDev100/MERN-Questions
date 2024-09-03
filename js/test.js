let arr=[1,2,3,[4,5,[6,[7,8,[9,10,[11,12]]]]]];
//out=[1,2,3,4,5,..]

let output = []

function doFlatMap(arr){
   for(let i=0 ; i < arr.length; i++){
    
    if(!Array.isArray(arr[i])){
       output.push(arr[i])
    }else{
      doFlatMap(arr[i])
    }
    
   }
}

doFlatMap(arr)
console.log("d",output)

