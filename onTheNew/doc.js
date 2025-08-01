//1. Implement a Function to Deep Clone an Object

// function deepClone(obj) {

//     let tempObj = {};
//     Object.entries(obj).map(([key,value])=>{
//        tempObj[key] = value
//     })
//     return tempObj
//     // const stringyfyObj = JSON.stringify(obj)
//     // return JSON.parse(stringyfyObj)
// }

// const obj1 = { a: 1, b: { c: 2 } };
// const obj2 = deepClone(obj1);
// console.log(obj2); // Output: { a: 1, b: { c: 2 } }


//2.  var a = {}
// var b = {"key":1}
// a[b] = 123
// console.log(a[b])


//3. Remove Duplicates from an Array

// function removeDuplicates(arr) {
//     let temp = []
//     temp.push(arr[0])
//     let lastElement = arr[0]
//     for(let i=1; i<arr.length;i++){
//       if(arr[i] === lastElement){
//        lastElement = arr[i]
//         temp.push(arr[i])
//     }

//     return temp;
// }

// let a = removeDuplicates([1, 2, 2, 3, 4, 4, 5])

// console.log(a); // Output: [1, 2, 3, 4, 5]



//4. console.log(0.1 + 0.2 == 0.3)  false 0.300000000000000000004

//5. 
// (function(){
// console.log("a")
// setTimeuout(function(){console.log(1),1000})
// setTimeuout(function(){console.log(2),0})
// console.log("b")
// })()


//6. 
// (function(){
// var a = b = 3;
// console.log(a,b)
// })()


//7.
// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }



// console.log('begins');

// setTimeout(() => {
//   console.log('setTimeout 1');
//   Promise.resolve().then(() => {
//     console.log('promise 1');
//   });
// }, 0);

// new Promise(function (resolve, reject) {
//   console.log('promise 2');
//   setTimeout(function () {
//     console.log('setTimeout 2');
//     resolve('resolve 1');
//   }, 0);
// }).then((res) => {
//   console.log('dot then 1');
//   setTimeout(() => {
//     console.log(res);
//   }, 0);
// });

// console.log(“end”);


// import React from 'react';
// import { useState } from 'react'

// function App() {
  
//   const key = "homePage"
//   const [toggleValue, setToggleValue] = UseToggle(key,true) 
  
// }


// function UseToggle(key,value){
  
//   const [data,setData] = useState(()=>{
//       if(value){
//         return data[key] = value
//       }
//   })
  
//   useEffect(()=>{
//     let value = data[key]
//     setData(value)
//   },[key])
  
  
  
//   return [data,setData]
  
  
// }

// export default App
