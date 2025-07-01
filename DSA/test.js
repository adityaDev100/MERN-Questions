// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]


// var mergeTwoLists = function(list1, list2) {
//     let mergedList = [...list1,...list2]
//     console.log("d",mergedList)
// };

// console.log("first",mergeTwoLists(list1,list2))


let input = '{{{{{}}'


const isValid = (text)=>{
  let stackArr = []
  let dictionary = 
  {
    '[':']',
    '{':'}',
    '(':')'
  }
  
  for(let i=0; i<text.length;i++){
     if(dictionary[text[i]]){
        stackArr.push(text[i])
     }else{
        let lastNode = stackArr.pop()
        if(dictionary[lastNode] !== text[i]){
           return false
        }
     }
  }

  return stackArr.length === 0
}

const output = isValid(input)
console.log("output - ",output)

