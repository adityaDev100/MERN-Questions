# js : 
    oops (all concepts)
    constructor
    Closure


# Database : 
    sql vs mongodb
    ACID property in sql
    normalization (database)


# Node js :
    router
    Express
    Async Programming
    Socket.io





# 1.

When you write code in React, it doesn't get directly turned into something the computer understands right away. Instead, React code is first converted (or "transpiled") into regular JavaScript code. Then, this JavaScript code is processed and run by the computer.

Compilation is the process of taking the code you write, which is human-readable, and converting it into machine code—a series of binary instructions that the computer's hardware can execute directly.

In contrast, languages like C++, C, and Java work differently. Code written in these languages gets directly compiled into a format that the computer can understand and run without needing to be converted into another language first.


# 2.

JSX is not a requirement for using React,Using React without JSX is especially convenient when you don’t want to set up compilation in your build environment.Each JSX element is just syntactic sugar for calling React.createElement(component, props, ...children). So, anything you can do with JSX can also be done with just plain JavaScrip

For example, this code written with JSX:

        class Hello extends React.Component {
        render() {
            return <div>Hello {this.props.toWhat}</div>;
        }
        }
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<Hello toWhat="World" />);


can be compiled to this code that does not use JSX:

        class Hello extends React.Component {
        render() {
            return React.createElement('div', null, `Hello ${this.props.toWhat}`);
        }
        }

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(React.createElement(Hello, {toWhat: 'World'}, null));


# 3. What is JSX ?

JSX stands for javascript XML , we can use this syntax in ReactJs, it provides a syntactic sugar for React.createElement() function , so jsx syntax is a syntax extension of js that allows developer to write HTML in their js code.


# 4. What is the difference between Element and Component?

An Element is a plain object describing what you want to appear on the screen in terms of the DOM nodes
by using React.createElement() function elements returns an object:
Finally, this element renders to the DOM using ReactDOM.render()    

On the other hand Components are the building blocks of creating User Interfaces(UI) in React ,component can be declared in two ways , first as a class component by using render() method and second 
by using functional component by returning jsx tree, component accept props object as an input and return jsx tree as an output.


# 5. What is React Fiber ?

React Fiber is an reimplementation of React's core algorithm,the primary goal of Fiber is to enable React to take advantage of scheduling. Specifically, we need to be able to

    -pause work and come back to it later.
    -assign priority to different types of work.
    -reuse previously completed work.
    -abort work if it's no longer needed.

In order to do any of this, we first need a way to break work down into units. In one sense, that's what a fiber is. A fiber represents a unit of work.


# 6. What is Virtual DOM and real DOM and how react works internally ?

refer this article : https://www.geeksforgeeks.org/reactjs-virtual-dom/

# 7. Differentiate between Controlled vs Uncontrolled component?

In React, Controlled components refer to the components where the state and behaviors are controlled by Parent components while Uncontrolled components are the ones having control of their own state and manage the behaviors on themselves.

# 8 . What is pure functions in javascript ?

A Pure Function is a function (a block of code) that always returns the same result if the same arguments are passed. It does not depend on any state or data change during a program’s execution. Rather, it only depends on its input arguments.

Also, a pure function does not produce any observable side effects such as network requests or data mutation, etc.

For Example : 

        function calculateGST(productPrice) {
            return productPrice * 0.05;
        }
        console.log(calculateGST(15))

The above function will always return the same result if we pass the same product price. In other words, its output doesn’t get affected by any other values/state changes. So we can call the “calculate GST” function a Pure Function.


Another Example : 

        let tax = 20;
        function calculateGST(productPrice) {
            return productPrice * (tax / 100) + productPrice;
        }
        console.log(calculateGST(15))

It is not a pure function as the output is dependent on an external variable “tax”. So if the tax value is updated somehow, then we will get a different output though we pass the same productPrice as a parameter to the function

# 9. What is Pure Component in react?

PureComponent is similar to Component but it skips re-renders for same props and state.
In function components, you can achieve these pure components through memoized React.memo()

        class Greeting extends PureComponent {
        render() {
            return <h1>Hello, {this.props.name}!</h1>;
        }
        }

# 10. State vs Props in react ? 

 -State is used to store data that can change over time. It is managed within a component and can be updated using setState.

 -Props are short for "properties." They are used to pass data from a parent component to a child component. Props are read-only and cannot be changed by the child component.

So, state is for managing internal data, while props are for passing data to other components.


# 11. What are synthetic events in ReactJS ?

In React, synthetic events are a way to handle events that work the same across different web browsers. Since browsers can have different names or behaviors for events, React wraps these events in a uniform way so that they all behave consistently. This means you can handle events in the same way no matter which browser your users are using.

e.preventDefault()  =====>  prevents all the default behavior by the browser.
e.stopPropagation() =====>  prevents the call to the parent component whenever a child component gets called.