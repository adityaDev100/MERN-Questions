# What is call() , bind(), apply() methods ?

In JavaScript, the call, apply, and bind methods are used to call a function and set the “this” value inside that function.

* call()
The call method is used to call a function and specify the “this” value for the function. It takes two arguments: the value to be used as the “this” value inside the function, and an optional list of arguments to be passed to the function.

* apply()
The apply method is similar to the call method, but instead of specifying the arguments to the function individually, it takes an array of arguments to be passed to the function.

* bind()
The bind method is used to create a new function with the same body as the original function, but with a different “this” value. It also takes an optional list of arguments to be passed to the new function when it is called.

* Example : 

        function greet(greeting){
            console.log(greeting + ' ' + this.name) 
        }

        const person1 = {
            name: 'Bob'
        }

        const person2 = {
            name : "Jack"
        }

        greet.call(person1, 'hello')  // Output hello Bob
        greet.apply(person1, ['hi'])  // output hi Bob

        var greetPerson2 = greet.bind(person2)
        greetPerson2('good morning')  // good morning Jack