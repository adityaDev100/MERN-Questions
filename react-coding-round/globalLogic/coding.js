// compare two strings are anagram or not

// let s1 = "now"
// let s2 = "won"

// function isAnagram(string1, string2){
//    const sortedStringArr =(str)=>{
//        return [...str].sort().join('')
//    } 

//    const sortedString1 = sortedStringArr(string1)
//    const sortedString2 = sortedStringArr(string2)

//    return sortedString1 == sortedString2

// }

// let output = isAnagram(s1,s2)
// console.log("first",output)




// move zeros to right
// let arr = [1,0,4,0,3,2,0,3,1,0,4]

// function moveZeroToRight(arr){
//     let pointer = 0
//     function swap(index1, index2){
//         [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
//     }

//    for (let index = 0; index < arr.length; index++) {
//         if(arr[index] !== 0){
//             swap(index,pointer)
//             pointer++
//         }
//    }
// }

// moveZeroToRight(arr)
// console.log(arr)



// // GROUP SAME STRING

// let a = ['ate','tea','ban','eat','dig','gid']
// //output = [['ate','tea','eat'],['ban'],['dig','gid']]

// function groupAll(arr){

//     let temp = {}
//     let result = []

//     arr.forEach(element => {
//         let sortedText = [...element].sort().join('')
//         if(temp.hasOwnProperty(sortedText)){
//             temp[sortedText].push(element)
//         }else{
//             temp[sortedText] = [element]
//         }
//     });

//     Object.entries(temp).map(([key,value])=>{
//         result.push(value)
//     })

//     return result;
// }

// let output = groupAll(a)
// console.log(output)