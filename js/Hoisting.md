# What is Hoisting in js ? 

hoisting is a phenomena in javascript by which we can access variables and function even before initialization, we can access it without any error .

Concept Explanation : whenever we run any javascript code then first of all a global execution context is created in js engine call stack , before going to execute the first line of code in the global memory space memory allocated for all variables and functions , for variables undefined keyword and for functions a copy of the function block is stored in global memory space , 
So now js code executed line by line :

We can understand it by below example : 

        console.log(x)
        console.log(test())
        console.log(arrowFuncTest())


        var x = 7

        function test(){
            console.log("hello word")
        }

        var arrowFuncTest =()=>{
            console.log("hello word from arrow")
        }

        //OR

        var arrowFuncTest = function(){
            console.log("hello word from arrow")
        }


because for x and for test function memory in allocated in global memory space before executing the first line , so now x will print undefined and for test function copy of this function block is stored in global memory so when we call test function it will print "hello word" in console.

* If we use arrow function here instead of normal function syntax then it will not print hello word as the above example
then cause for global execution context the arrowFuncTest is a variable , so global memory space will allocate undefined value for it and when we try to call this as a function , it will throw error "TypeError : arrowFuncTest is not a
function". its the main difference between normal function and arrow function.
