# 1. What is a Closure?

Function along with it lexical scope bundled together forms a closure.
When you create a closure, you gain access to an outer function’s scope from an inner function. Closures are automatically created every time a function is defined in JavaScript.

# example : 

* 1.

        function x(){
            var a = 7
            function y(){
                console.log(a)
            }
        y() 
        }
        x()

        then 7 will print in console cause inner function has access to outer function 

* 2.    

        function x(){
            let a = 7
            function y(){
                console.log(a)
            }
        return y
        }

        let z = x()
        z()

        then 7 will print in console cause inner function has access to outer function even function x is exist in call stack anymore.but still it remember its lexical scope 


# Closure UseCase  

// Function that returns a once function
function createOnceFunction() {
    let hasBeenCalled = false;

    return function () {
        if (!hasBeenCalled) {
            console.log('Function called!');
            hasBeenCalled = true;
        } else {
            console.log('Function can only be called once.');
        }
    };
}

// Create the once function
const callOnce = createOnceFunction();

// Call the function the first time
callOnce(); // Output: Function called!

// Call the function again
callOnce(); // Output: Function can only be called once.