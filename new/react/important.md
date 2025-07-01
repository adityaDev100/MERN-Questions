1. What is virtual dom and how it works ?
2. what is webpack ?
3. what is babel ?
4. what is the difference between vite and cra(create react app)
5. what is redux , redux middleware 
6. advantage of using react
7. state vs props
8. source map
9. advantage of using nextjs
10. how will you optimize react app




1. Virtual dom is a lightweight, in memory representation of real dom. it is used by libraries like react to optimize ui rendering, Instead of manipulating the real dom directly which is slow as compare to virtual dom , react uses virtual dom to effectively track changes and updates only the part of the ui that need to be changed
How it works:

Initial Rendering:
React builds a Virtual DOM from the component tree and renders it to the real DOM.

State or Props Change:
When there’s a change in state or props, React creates a new Virtual DOM tree.

Diffing Algorithm:
React compares the new Virtual DOM with the previous one using a process called “diffing” to identify what has changed.

Efficient Updates (Reconciliation):
Once differences are identified, React updates only the changed elements in the real DOM, rather than re-rendering the entire UI.

2. Webpack is a powerful module bundler for JavaScript applications. It takes your application’s modules—JavaScript, CSS, images, etc.—and bundles them into one or more optimized files that can be loaded in the browser.
It’s commonly used in modern frontend development to improve performance and manage complex project structures.

How Webpack Works:
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

3. babel is used to transpile react jsx code to normal javascript code, because react code can not directly run on the browser , so first it is transpile to javascript code then browser run this js code


4. Vite and Create React App (CRA) are tools to start and build React projects. CRA uses Webpack, which bundles the whole app before running it. This makes the app slower to start and reload during development. Vite is much faster because it uses a new method called ES modules. It loads and compiles only the parts of the app you’re using, instead of everything at once. This makes changes appear quickly when you're coding. Vite also gives faster builds for production using Rollup. In short, Vite is quicker and more efficient than CRA, especially during development.

5. Redux is a third party state management library for JavaScript apps, commonly used with React. It centralizes the application's state in a single store, making it easier to manage, debug, and test.

Core Principles of Redux:
Single Source of Truth:
The state of your entire application is stored in a single JavaScript object called the store.

State is Read-Only:
You can’t directly modify the state. Instead, you dispatch actions—plain objects describing what happened.

Changes are Made with Pure Functions:
Redux uses reducers—pure functions that take the current state and an action, and return a new state.

Redux middleware is a function that sits between the dispatching of an action and the moment it reaches the reducer. It allows you to intercept, modify, or halt actions before they hit the reducer.

It’s commonly used for:

Logging actions (redux-logger)

Handling asynchronous operations, like API calls (redux-thunk, redux-saga)

Error handling

Performing side effects

6. advantage of using react is 

1. react use virtual dom , so instead of manipulating real dom on every change, virtual dom effectively track changes and update only changed part in real dom, that is how it optimize ui rendering.
2. react is a single page application, that use react router dom for navigation.
3. react follow component based architecture that is very helpful for code reusability,Components can be reused across the app, reducing code duplication.
4. its easy to learn and develop, Large developer community, plenty of tutorials, libraries, and tools available.
5. can be used to develop mobile application using react native.


7. state vs props

state are simple variable ,it can be changed by setState, by changing these variables react ui rendering works
props are used to communicate between two components, props are read only


8. react code can not directly run on the browser , so first it is transpile to javascript code then browser run this js code. while transpiling the react code ,its hard to track development debugging in the new js file, by using source map we can see in dev tools that in which line error happened.

9. advantage of using next

1. SSR and SSG
2. don't need to use react router dom
3. optimized image tag
4. developers can check production build on development time
5. Better SEO Support
6. Fast Refresh & Hot Reloading


10. ways to optimize react app

1. component level optimization using react.memo, useCallback , useEffect with proper dependency
2. image optimization
3. Code Splitting by using lazy loading and react suspense
4. Rendering Optimization
