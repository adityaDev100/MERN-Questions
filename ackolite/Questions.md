1. Block level tag and inline tag ?


**Block-level tag**: Takes up the full width available, starting on a new line (e.g., `<div>`, `<p>`).

**Inline tag**: Takes up only as much width as necessary and stays in line with other elements (e.g., `<span>`, `<a>`).


2. semantic tag ?

**Semantic tag**: A tag that clearly describes its meaning and content, making the code easier to read and understand (e.g., `<header>`, `<article>`, `<footer>`).


3. selector in CSS ?

A **selector** in CSS is a pattern used to target and apply styles to specific HTML elements (e.g., `.class`, `#id`, `tag`).


4. Specificity in CSS ?

**Specificity** in CSS determines which styles are applied when multiple rules match an element. It is calculated based on the types of selectors used: inline styles have the highest specificity, followed by IDs, classes, attributes, and elements.


5. Flex and Grid ?

**Flex**: A layout model that arranges items in a one-dimensional row or column, allowing them to grow and shrink dynamically (e.g., `display: flex`).

**Grid**: A layout model that arranges items in a two-dimensional grid, using rows and columns, allowing for more complex and responsive designs (e.g., `display: grid`).


6. Arrow Function vs Regular function ?

**Arrow Function**: A concise way to write functions with `=>`, and it does not bind its own `this` value (e.g., `const add = (a, b) => a + b`), can not call before initialization.

**Regular Function**: A traditional function declaration with its own `this` binding (e.g., `function add(a, b) { return a + b; }`),can call before initialization.

7. Closure in JS ?

Functions along with it lexical scope bundled together forms a closure, it means if there are more then one functions are bundled together then the inner function can access variables form outer function lexical environment.


8. Promise in JS

Promises are objects that represent the eventual completion of rejection of an asynchronous operation .
promise object has promiseState that can be pending , full-filled or rejected and promiseResponse that gives the data if promise full-filled and throw error if promise rejected.


9. Async Await

Async await are used in javascript to handle promises.
async: Declares a function that returns a promise.
await: Pauses the execution of the async function until the promise resolves, making asynchronous code look and behave like synchronous code.

by using it :
- better readability
- prevent promise chaining
- avoid callback hell

**Async/Await**: Makes asynchronous code look synchronous and easier to read, using `async` functions and `await` expressions (e.g., `const result = await fetchData()`).

**`.then`**: Uses promises to handle asynchronous results, chaining `.then()` and `.catch()` for success and error handling (e.g., `fetchData().then(result => { /* handle result */ }).catch(error => { /* handle error */ })`).

10. Promise.all() and Promise.allSettled() ?

**Promise.all()**: Resolves when all promises in the array have resolved, or rejects if any promise fails (e.g., `Promise.all([p1, p2])`).

**Promise.allSettled()**: Resolves when all promises have either resolved or rejected, returning their status and results (e.g., `Promise.allSettled([p1, p2])`).


11. Pure Components ?

PureComponent is similar to Component but it skips re-renders for same props and state.
In function components, you can achieve these pure components through memoized React.memo()

        class Greeting extends PureComponent {
        render() {
            return <h1>Hello, {this.props.name}!</h1>;
        }
        }

12. Prop Drilling ?

**Prop Drilling**: Passing data through multiple layers of components in a React app, even if only the last component needs it. This can make the code harder to manage.

13. Component Composition ?

**Component Composition**: The practice of building complex components by combining simpler ones, allowing for reusable and flexible UI structures in React.


15. What finds out the difference between virtual dom and updated virtual dom ?

**Reconciliation**: The process in React where it compares the previous virtual DOM with the updated virtual DOM to find the differences (diffing) and efficiently update only the parts of the actual DOM that have changed.

16. diffing Algo ?

The **Diffing Algorithm** in React is a process that compares the old and new virtual DOM trees to identify changes. It optimizes updates by finding the minimal number of changes required, focusing on elements at the same level in the tree and reusing unchanged elements.

17. useMemo and useCallback ?

**`useMemo`**: Memoizes the result of a function, recomputing it only when its dependencies change, to optimize performance (e.g., caching expensive calculations).

**`useCallback`**: Memoizes a function itself, preventing it from being recreated on every render, which is useful when passing callbacks to child components to avoid unnecessary re-renders.

18. Have u worked with webpack, explain webpack ?

**Webpack** is a module bundler for JavaScript applications. It takes your project's various files (JavaScript, CSS, images, etc.), bundles them into a single or multiple optimized files, and handles dependencies, making it easier to manage and deploy your application. It also offers features like code splitting, hot module replacement, and plugins for various tasks.

19. Redux, Redux-Toolkit ?

**Redux**: A state management library for JavaScript applications, particularly React, that provides a centralized store for managing application state, with actions and reducers to handle state changes.

**Redux Toolkit**: An official, opinionated set of tools for Redux that simplifies setup and reduces boilerplate code, offering utilities like `createSlice`, `createAsyncThunk`, and built-in middleware for easier and more efficient Redux development.

20. How redux Work ?

**Redux** works by managing your application's state in a single, centralized store. Here's how it works:

1. **Store**: Holds the entire state of your app.
2. **Actions**: Plain objects that describe what should change in the state, often triggered by user interactions.
3. **Reducers**: Pure functions that take the current state and an action, then return a new state based on the action.
4. **Dispatch**: Sends actions to the store, triggering the reducer to update the state.
5. **Selectors**: Functions that extract specific parts of the state from the store for use in your components.

The flow is unidirectional: components dispatch actions → actions are processed by reducers → reducers update the store components re-render based on the new state.

21. Middleware in Redux ?

**Middleware in Redux**: Functions that sit between dispatching an action and the reducer. They allow you to intercept actions, perform side effects like asynchronous operations (e.g., API calls), log actions, or modify actions before they reach the reducer. Common middleware includes `redux-thunk` for handling async logic and `redux-logger` for logging actions and state changes.

23. Testing in React ?

**Testing in React** involves verifying that your components and application logic work as expected. It typically includes:

1. **Unit Testing**: Tests individual components or functions in isolation using tools like Jest or Mocha.
2. **Integration Testing**: Tests how components work together, ensuring they interact correctly.
3. **End-to-End (E2E) Testing**: Simulates user interactions in the browser to test the entire application, often using tools like Cypress or Selenium.
4. **Snapshot Testing**: Captures the rendered output of a component and compares it to a stored version to detect changes over time, commonly done with Jest.

These tests help ensure your React application is reliable, maintainable, and free of bugs.


24. Event Loop in JS ?

The **Event Loop** in JavaScript is a mechanism that manages the execution of code, handling asynchronous operations. It works with a call stack and a message queue:

1. **Call Stack**: Holds the currently executing code. If it’s empty, the event loop checks the message queue.
2. **Task Queue**: Contains callback functions for events and asynchronous operations (e.g., `setTimeout`).
3. **Task Queue**: Contains asynchronous operations (e.g., `promises`,`mutationObserver`).
4. **Event Loop**: Continuously checks the call stack. If the stack is empty, it processes the next message in the queue.

This allows JavaScript to handle asynchronous tasks without blocking the main execution thread.

25. Task Queue and Micro-taskQueue ?

**Task Queue**: Also known as the **macro-task queue**, it holds tasks like `setTimeout`, `setInterval`, and I/O operations. These tasks are processed after the current stack is cleared.

**Micro-task Queue**: Holds micro-tasks such as promise callbacks (`.then`, `.catch`) and `MutationObserver` callbacks. Micro-tasks have higher priority and are processed before the next task from the task queue. After the call stack is clear, the event loop processes all micro-tasks before moving on to the task queue.


26. Where the promises will be placed in micro-task queue ?

Promises are placed in the **micro-task queue**. When a promise is resolved or rejected, its `.then` or `.catch` callback is added to the micro-task queue. The event loop processes the micro-task queue immediately after the call stack is clear, before handling any tasks in the task queue (macro-task queue).

27. LibUV in Nodejs ?

**LibUV** is a library that provides a cross-platform abstraction for asynchronous I/O operations in Node.js. It handles low-level tasks such as:

- **Event Loop**: Manages the scheduling of tasks and events.
- **File System Operations**: Provides asynchronous file I/O.
- **Networking**: Handles TCP, UDP, and other network operations.
- **Thread Pool**: Manages background threads for tasks like file system operations and DNS resolution.

LibUV allows Node.js to perform non-blocking operations efficiently and cross-platform.

28. NodeJS is Single threaded or multi-threaded ?

Single threaded

29. Event-Emitter in nodejs ?

**EventEmitter** in Node.js is a core class that allows objects to emit and listen for events. It provides methods to:

- **`emit(event, [...args])`**: Trigger an event, passing optional arguments to listeners.
- **`on(event, listener)`**: Register a callback function to be called when the event is emitted.
- **`once(event, listener)`**: Register a callback that is called only the first time the event is emitted.
- **`removeListener(event, listener)`**: Remove a specific listener for an event.
- **`removeAllListeners([event])`**: Remove all listeners for a specific event or all events.

EventEmitter is widely used in Node.js for handling asynchronous events and building event-driven applications.


30. Streams and buffer in Node.js ?

**Streams** in Node.js: Allow processing of data in chunks rather than all at once. They can be readable (for reading data), writable (for writing data), or duplex (for both). Streams are useful for handling large data efficiently and processing data on-the-fly.

**Buffer** in Node.js: A global object that provides a way to work with binary data directly in memory. Buffers are used to handle raw binary data streams, such as file reading and network communications, and are more efficient than working with strings for binary data.


31. How do you handle the authentication in nodejs ?

Authentication in Node.js is typically handled using:

1. **Passport.js**: A popular middleware for authentication, providing various strategies (e.g., local, OAuth, JWT) for different authentication methods.
   
2. **JWT (JSON Web Tokens)**: A method for stateless authentication where tokens are issued upon login and verified on subsequent requests.

3. **Sessions and Cookies**: Traditional method where user sessions are stored on the server and session identifiers are sent via cookies.

4. **OAuth**: Used for third-party authentication, allowing users to log in using services like Google or Facebook.

Each method involves verifying user credentials and managing sessions or tokens to control access.


32. How to handle authorization ?

Authorization in Node.js is managed by:

1. **Role-Based Access Control (RBAC)**: Define roles and permissions for different users or groups, and check these roles before allowing access to specific resources.

2. **Middleware**: Use custom middleware functions to check if a user has the necessary permissions or roles to access a route or resource.

3. **Access Control Lists (ACLs)**: Define and enforce permissions for different users or groups, often using libraries like `acl`.

4. **Policies**: Implement authorization rules based on user attributes or data, enforcing complex access controls in a structured way.

5. **Feature Flags**: Control access to certain features or functionalities dynamically based on user roles or permissions.

Typically, authorization checks are performed after authentication, ensuring users can only access resources they are permitted to.




