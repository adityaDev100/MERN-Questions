# What is Lexical environment ? 

Lexical environment is created whenever an execution context is created in call stack of us engine,
Lexical environment is local memory+ lexical environment of the parent (lexical parent) in call stack,

The chain of lexical environment is called scope chain

* example : 

        var h = 2
        function a(){
            var x = 10
            console.log(h)
            function c(){
            console.log(x,h)
            }
            c()
        }
        a()
        console.log(x)

* Explanation :         

In this example JS code, when we run the code, the JS engine first creates a global execution context in the call stack. Any execution context has a memory block and a code block. This global execution context has a function copy of function a. Then a function is called, and an execution context is created for a. In this context, in the memory block, the undefined keyword is assigned to x, and a copy of function c is stored. Then, in the code block, this function starts executing. The value of x is then replaced by 10 in place of undefined, and function c is called.

Then, for function c, an execution context is created. In the memory block of this execution context, function c is stored. Then, in the code block, function c starts executing.

Now, here is an important point: each execution context's memory block has local memory and a reference to its parent (lexical parent) execution context's memory block. This means the c execution context's memory block has a reference to its parent execution context's local memory. This means the c execution context can access the value of x from b execution context's local memory, just as the a execution context can access the value of h from the global execution context's memory. c can also access this by following this hierarchy. This chain of lexical environments is called the scope chain.