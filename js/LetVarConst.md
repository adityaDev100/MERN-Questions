# Difference between let, var and const ?

## var, let, and const in JavaScript

| **var**                                                                                  | **let**                                                                                  | **const**                                                                                   |
|------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| The scope of a `var` variable is functional or global scope.                             | The scope of a `let` variable is block scope.                                             | The scope of a `const` variable is block scope.                                              |
| It can be updated and re-declared in the same scope.                                     | It can be updated but cannot be re-declared in the same scope.                            | It can neither be updated nor re-declared in any scope.                                      |
| It can be declared without initialization.                                               | It can be declared without initialization.                                                | It cannot be declared without initialization.                                                |
| It can be accessed without initialization as its default value is `undefined`.           | It cannot be accessed without initialization otherwise it will give a `ReferenceError`.   | It cannot be accessed without initialization, as it cannot be declared without initialization. |
| These variables are hoisted.                                                             | These variables are hoisted but stay in the temporal dead zone until the initialization.  | These variables are hoisted but stay in the temporal dead zone until the initialization.     |



var a= 12;
var a = 70
a = 60 // we can re-declare and update this in any scope

let x = 10
// let x = 70 //can not re-declare in same scope, throw already declared error

const c = 2
// c=23 // can not update const value
// const c =9287 // can not re-declare const value

{
    let x=24; // can be re-declare in other scope, x for this scope will print 24 but outside of this scope it will print 10 ,
    // it this scope x is shadowing previous declared x value that is outside of this scope

    // var a = 80
    // a = 90 //we can re-declare and update this in any scope

    //var x = 6 // we can not do this because var has global scope and previously it is declared using let ,
    //that is block level scope, its called illegal shadowing.

    // let a = 7 // we can redeclare a in let that is previously declared using var , cause let is block level , so 
    // //it will print 7 for this block and outside the block it will print 60

    
    const c =22 // if we do that , then c will 22 because const has block scope, outside the block it will print 22
    // c = 2 //can not update it anywhere
    console.log(x,a,c);
}
console.log(x,a,c)




