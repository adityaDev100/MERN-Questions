1. What is virtual dom and how it works ?

Virtual dom is a lightweight, in memory representation of real dom. it is used by libraries like react to optimize ui rendering
Instead of manipulating the real dom directly which is slow as compare to virtual dom , react uses virtual dom to effectively track changes and updates only the part of the ui that need to be changed

How it works:

Initial Rendering:
React builds a Virtual DOM from the component tree and renders it to the real DOM.

State or Props Change:
When there’s a change in state or props, React creates a new Virtual DOM tree.

Diffing Algorithm:
React compares the new Virtual DOM with the previous one using a process called “diffing” to identify what has changed.

Efficient Updates (Reconciliation):
Once differences are identified, React updates only the changed elements in the real DOM, rather than re-rendering the entire UI.


2. Redux middleware

Redux middleware is a function that sits between the dispatching of an action and the moment it reaches the reducer. It allows you to intercept, modify, or halt actions before they hit the reducer.

It’s commonly used for:

Logging actions (redux-logger)

Handling asynchronous operations, like API calls (redux-thunk, redux-saga)

Error handling

Performing side effects


3. how redux works

Redux is a third party state management library for JavaScript apps, commonly used with React. It centralizes the application's state in a single store, making it easier to manage, debug, and test.

🔁 Core Principles of Redux:
Single Source of Truth:
The state of your entire application is stored in a single JavaScript object called the store.

State is Read-Only:
You can’t directly modify the state. Instead, you dispatch actions—plain objects describing what happened.

Changes are Made with Pure Functions:
Redux uses reducers—pure functions that take the current state and an action, and return a new state.

$. webpack?

Webpack is a powerful module bundler for JavaScript applications. It takes your application’s modules—JavaScript, CSS, images, etc.—and bundles them into one or more optimized files that can be loaded in the browser.

It’s commonly used in modern frontend development to improve performance and manage complex project structures.

⚙️ How Webpack Works:
Entry:
Webpack starts from an entry point (usually index.js) to understand which files to bundle.

Dependency Graph:
It builds a dependency graph by recursively analyzing all the import/require statements in your code.

Loaders:
Webpack uses loaders to transform files that aren’t JavaScript (like .css, .scss, .ts, or images) into modules.

Plugins:
Plugins are used for more advanced tasks like minification, environment variables, cleaning output folders, etc.

Output:
Finally, Webpack outputs bundled files to a specified folder (usually /dist) which the browser can use.