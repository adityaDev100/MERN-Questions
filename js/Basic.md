# 1. What is a Closure?

A **closure** is formed when a function is bundled together with its lexical scope. This allows the inner function to access variables from the outer function’s scope. In JavaScript, closures are automatically created every time a function is defined.

### Example 1:

```javascript
function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
    y();
}
x();

Output: 7 will print to the console because the inner function y has access to the outer function x's variable a.

* 2.

function x() {
    let a = 7;
    function y() {
        console.log(a);
    }
    return y;
}

let z = x();
z();

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
```
