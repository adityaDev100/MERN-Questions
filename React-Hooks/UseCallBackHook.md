======> Difference Between useMemo and useCallback
1. Purpose:

useMemo: Memoizes the result of a function or expression. It's useful when you want to avoid expensive computations on every render. You provide a function that computes a value, and useMemo returns the memoized value.
useCallback: Memoizes the function itself. It's useful when you want to prevent a function from being re-created on every render, which can be beneficial when passing functions to child components that rely on referential equality (e.g., in dependency arrays of hooks like useEffect).


2. Return Value:

useMemo: Returns the computed value.
useCallback: Returns the memoized function.


3. Use Case:

useMemo: Use it when you have a function that returns a value and you want to avoid recalculating that value on every render unless certain dependencies change.

useCallback: Use it when you need to memoize a function, especially when passing that function as a prop to a child component to prevent unnecessary re-renders.




4. Difference Between UseMemo Hook and React.memo()

=> Granularity:

React.memo memoizes the entire component, controlling when the entire component should re-render based on prop changes.

useMemo is more granular and is used to memoize specific values or JSX within a component.


=> Use Case:

Use React.memo when you want to avoid re-rendering a component unless its props change.

Use useMemo when you have expensive calculations or JSX inside a component that you want to memoize.


React.memo example 

import React, { memo } from 'react';

const ExpensiveComponent = ({ data }) => {
  // Entire component re-rendering is controlled by React.memo
  return (
    <div>
      <h1>Complex Computation Result</h1>
      <p>{data}</p>
    </div>
  );
};

export default memo(ExpensiveComponent);


useMemo Hook Example:

import React, { useMemo } from 'react';

const ExpensiveComponent = ({ data }) => {
  // Only the JSX inside useMemo is memoized
  const memoizedJsx = useMemo(() => (
    <div>
      <h1>Complex Computation Result</h1>
      <p>{data}</p>
    </div>
  ), [data]);

  return memoizedJsx;
};

export default ExpensiveComponent;


Conclusion:
If the goal is to prevent unnecessary re-renders of the entire component, React.memo is the more straightforward and effective tool.


If you have specific parts of the component that are expensive to compute and you want to memoize just those parts, useMemo is the right tool.