An error boundary in React is a special component that catches JavaScript errors in its child components during rendering, in lifecycle methods, and in constructors. When an error is caught, the error boundary can display a fallback UI instead of crashing the entire application. 

It's like a safety net that prevents an error in one part of the app from breaking everything. Error boundaries are implemented using React class components with the `componentDidCatch` and `getDerivedStateFromError` lifecycle methods.


If you need a React functionality whose Function component equivalent is not present yet, like Error Boundaries ,then we have to use class base component.we can not create it using functional component.