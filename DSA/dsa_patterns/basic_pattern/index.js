// function printPattern1(){
//     for(let i=0; i<4 ; i++){
//      let a = ""
//      for(let j=0; j<4 ; j++){
//      a = a.concat("*")
//      }
//      console.log(a)
//     }
//  }
 
//  printPattern1()
 
//  // ****
//  // ****
//  // ****
//  // ****

//  function printPattern2(n){
//      for(let i=0; i<n ; i++){
//       let a = ""
//       for(let j=0; j<=i ; j++){
//          a = a.concat("*")
//       }
//       console.log(a)
//      }
//   }
  
//   printPattern2(5)
 
 
 // *
 // **
 // ***
 // ****
 // *****
 
// function printPattern3(){
//      for(let i=1; i<=5 ; i++){
//       let a = ""
//       for(let j=1; j<=i ; j++){
//       a = a.concat(j)
//       }
//       console.log(a)
//      }
// }
  
// printPattern3()

//  // 1
//  // 12
//  // 123
//  // 1234
//  // 12345

// function printPattern4(){
//     for(let i=1; i<=5 ; i++){
//      let a = ""
//      for(let j=1; j<=i ; j++){
//      a = a.concat(i)
//      }
//      console.log(a)
//     }
// }
 
// printPattern4()

//  // 1
//  // 22
//  // 333
//  // 4444
//  // 55555

// function printPattern5(n){
//     for(let i=1; i<=n ; i++){
//      let a = ""
//      for(let j=5; j>=i ; j--){
//      a = a.concat("*")
//      }
//      console.log(a)
//     }
// }
 
// printPattern5(5)

//  // *****
//  // ****
//  // ***
//  // **
//  // *

// function printPattern6(){
//     for(let i=5; i>=1 ; i--){
//      let a = ""
//      for(let j=1; j<=i ; j++){
//      a = a.concat(j)
//      }
//      console.log(a)
//     }
// }
 
// printPattern6()


//  // 12345
//  // 1234
//  // 123
//  // 12
//  // 1


// function printPattern7(n){
//    for (let i = 0 ; i<=n-1 ; i++){     
//       let a = ""
//       for(let j = n-1; j>i; j--){
//          a = a.concat(" ")
//       }
//       for(let k=0 ; k<i+i+1; k++){
//          a = a.concat("*")
//       }
//       for(let j = n-1; j>i; j--){
//          a = a.concat(" ")
//       }
//       console.log(a)
//    }
// }
 
// printPattern7(5)


//     *
//    ***
//   *****
//  *******



// function printPattern8(n){
//    for (let i = n-1 ; i>=0 ; i--){  
//       let a = ""
//       //print space
//       for(let j = n-1; j>i; j--){
//          a = a.concat(" ")
//       }
//       for(let k=0 ; k<2*i+1; k++){
//          a = a.concat("*")
//       }

//       for(let j = n-1; j>i; j--){
//          a = a.concat(" ")
//       }
//       console.log(a)
//    }
// }
 
// printPattern8(3)


//  *******
//   *****
//    ***
//     *


// function printPattern8(n){
//    for (let i = n-1 ; i>=0 ; i--){  
//       let a = ""
//       //print space
//       for(let j = n-1; j>i; j--){
//          a = a.concat(" ")
//       }
//       for(let k=0 ; k<2*i+1; k++){
//          a = a.concat("*")
//       }

//       for(let j = n-1; j>i; j--){
//          a = a.concat(" ")
//       }
//       console.log(a)
//    }
// }
 
// printPattern8(3)



// function printPattern9(n){
//    for (let i = 0 ; i<n ; i++){ 
//       let a = ""
//       let start = 1
//       if(i % 2 === 0) start = 1
//       else start = 0
//       for(let j = 0; j <= i; j++){
//          a = a.concat(start)
//          start = 1-start // here you have to think that which formula can flip 0 and 1
//       }
//       console.log(a)
//    }
// }
 
// printPattern9(5)


// 1
// 01
// 101
// 0101
// 10101

// function printPattern10(n){
//    for (let i = 1 ; i<=n ; i++){ 
//       let a = ""
//       for(let h = 1; h <= i; h++){
//          a = a.concat(h)
//       }
//       for(let k = n; k > i; k--){
//          a = a.concat(" ")
//       }
//       console.log(a)
//    }
// }
 
// printPattern10(5)

// function printPattern11(n){
//    for (let i = 1 ; i<=n ; i++){ 
//       let a = ""
//       for(let k=n ; k>i ;k--){
//          a = a.concat(" ")
//       }
//       for(let j = i; j > 0; j--){
//          a = a.concat(j)
//       }

//       console.log(a)
//    }
// }
 
// printPattern11(5)

// function printPattern12(n){
//    for (let i = 1 ; i<=n ; i++){ 
//       let a = ""
//       for(let h = 1; h <= i; h++){
//          a = a.concat(h)
//       }
//       for(let k = n; k > i; k--){
//          a = a.concat(" ")
//       }
//       for(let k=n ; k>i ;k--){
//          a = a.concat(" ")
//       }
//       for(let j = i; j > 0; j--){
//          a = a.concat(j)
//       }

//       console.log(a)
//    }
// }
 
// printPattern12(5)

//create them in two parts then combine
// 1      1
// 12    21
// 123  321
// 12344321


// function printPattern13(n){
//    let temp = 1
//    for (let i = 1 ; i<=n ; i++){ 
//       let a = ""
//       for(let h = 1; h <= i; h++){
//             let nextVal = temp
//             temp = temp+1
//             a = a.concat(nextVal)
//             a = a.concat(" ")

//       }
//       console.log(a)
//    }
// }
 
// printPattern13(5)



// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15




// function printPattern14(n){
//    console.log('A' + 1)
   // for (let i=0 ; i<n ; i++){ 
   //    let a = ""
   //    for(let h ='A'; h <= 'A' + i; h++){
   //          a = a.concat(h)
   //          a = a.concat(" ")
   //    }
   //    console.log(a)
   // }
//}

// it should run like that , but in js there are different approach for ASCII value

//printPattern14(5)


// a 
// ab 
// abc 
// abcd 
// abcde




// function printPattern15(n){
//    for (let i=0 ; i<n/2 ; i++){ 
//       let a = ""

//       //print start
//       for(let j =n/2; j > i; j--){
//          a = a.concat("*")
//       }

//       //print space
//       for(let k = 0; k < i*2; k++){
//          a = a.concat(" ")
//       }


//       //print start
//       for(let l =n/2; l > i; l--){
//          a = a.concat("*")
//       }

//       console.log(a)
//    }
// }


// printPattern15(10)


// **********
// ****  ****
// ***    ***
// **      **
// *        *







// function printPattern16(n){
//    for (let i=0 ; i<n/2 ; i++){ 
//       let a = ""

//       //print start
//       for(let j= 0; j <= i; j++){
//          a = a.concat("*")
//       }

//       //print space
//       for(let k = (n/2-1)*2; k > i*2; k--){
//          a = a.concat(" ")
//       }

//       //print start
//       for(let j =0; j <=i ; j++){
//          a = a.concat("*")
//       }

//       console.log(a)
//    }
// }


// printPattern16(10)

// *        *
// **      **
// ***    ***
// ****  ****
// **********


//by calling them together

// **********
// ****  ****
// ***    ***
// **      **
// *        *
// *        *
// **      **
// ***    ***
// ****  ****
// **********




// function printPattern15(n){
//    let length = Math.round(n/2)

//    for (let i=0 ; i<=length ; i++){ 
//       let a = ""

//       //print start
//       for(let j =0; j < i; j++){
//          a = a.concat("*")
//       }

//       //print space
//       for(let k = length*2; k > i*2; k--){
//          a = a.concat(" ")
//       }

//       //print start
//       for(let l =0; l < i; l++){
//          a = a.concat("*")
//       }

//       console.log(a)
//    }
// }

// function printPattern16(n){
//    let length = Math.floor(n/2)

//    for (let i=0 ; i<length ; i++){ 
//       let a = ""

//       //print start
//       for(let j =length; j > i; j--){
//          a = a.concat("*")
//       }

//       // //print space
//       for(let k = 0; k < (i+1)*2; k++){
//          a = a.concat(" ")
//       }


//       //print start
//       for(let l =length; l > i; l--){
//          a = a.concat("*")
//       }

//       console.log(a)
//    }
// }


// printPattern15(9)
// printPattern16(9)




// *        *
// **      **
// ***    ***
// ****  ****
// **********
// ****  ****
// ***    ***
// **      **
// *        *


//important***
// function printPattern17(n){  
//    //outer loop to print row
//    for(let i =0; i<n; i++){
//       let a = ""
//       for(let j=0;j<n;j++){
//          if(i==0 || i==n-1 || j==0 || j==n-1){
//             a = a.concat("*")
//          }else{
//             a = a.concat(" ")
//          }
//       }
//    console.log(a) 
//    }
// }


// printPattern17(4)



// ****
// *  *
// *  *
// ****


// function printPattern17(n){  
//    //outer loop to print row
//    for(let i =0; i<2*n-1; i++){
//       let a = ""
//       for(let j=0;j<2*n-1;j++){
        
//       }
//    console.log(a) 
//    }
// }


// printPattern17(7)





// 4444444
// 4333334
// 4322234
// 4321234
// 4322234
// 4333334
// 4444444









//     *  
//   *   *
// *   *   *
//   *   *
//     *  


function printPattern17(n){  
  for(let i =0; i<n; i++){
      let a = ""
      for(let j=0;j<n;j++){
         if(i==0||j==0||i==n-1||j==n-1){
            a = a.concat("*")
         }else{
            a = a.concat(" ")
         }
      }
   console.log(a) 
   }
}


printPattern17(5)