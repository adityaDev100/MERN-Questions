# Redux 

Fro using react-redux , first install react-redux library , its a third party library for state management.
install react-redux using 'npm install react-redux @reduxjs/toolkit'
then create a redux folder in root folder, in which create a store.js

Store.js

            import { configureStore } from '@reduxjs/toolkit'

            export default configureStore({
            reducer: {},
            })

then create a slices folder where are slices are placed according to application use-cases

            import { createSlice } from '@reduxjs/toolkit'

            export const counterSlice = createSlice({
            name: 'counter',
            initialState: {
                value: 0,
            },
            reducers: {
                increment: (state) => {
                // Redux Toolkit allows us to write "mutating" logic in reducers. It
                // doesn't actually mutate the state because it uses the immer library,
                // which detects changes to a "draft state" and produces a brand new
                // immutable state based off those changes
                state.value += 1
                },
                decrement: (state) => {
                state.value -= 1
                },
                incrementByAmount: (state, action) => {
                state.value += action.payload
                },
            },
            })

            export const { increment, decrement, incrementByAmount } = counterSlice.actions

            export default counterSlice.reducer




then in react app entrypoint Index.js 
wrap your app like that

            import { Provider } from 'react-redux'
            import store from '../redux/store.js'

            <Provider store={store}>
                <App />
            </Provider>,



# Context API      

1. For using Context API in react app , create a context folder , create a file context.js 

import {createContext} from 'react'

export const counterContext = createContext(0)

now in app.js file there is count state 

const [count,setCount] = useState(0)

we will wrap our app in 
    <counterContext.Provider value={{value:count,setCount:setCount}}>
    <App>
    </counterContext.Provider>

    in context api we should not wrap the part that impact on value={{value:count,setCount:setCount}} this part to prevent unnecessary re-rendering.

to access count anywhere in app :

import {useContext} from 'react'

const value = useContext(counterContext)
console.log(value.count)

for setState from anywhere 
<button onClick={()=>value.setCount((prev)=> prev+1)}>+</button>


2. Performance Considerations in Context API vs. Redux


Context API:
Re-rendering Behavior:

When you use the Context API, any time the value provided by a Context.Provider changes, all components that consume this context will automatically re-render. This is because React needs to ensure that all components relying on the context are using the most up-to-date values.

Potential Performance Issues:

If the context value is updated frequently (e.g., a piece of state that changes on every keystroke or scroll event), it can cause a large number of re-renders across the entire component tree that consumes that context. This can negatively impact performance, especially in applications with many components or complex UI structures.
Example:

Imagine a chat application where the context is used to store the current user's message input. Every time the user types a letter, the context value changes. If many components in the app consume this context (e.g., the message input box, a character counter, a preview pane), they will all re-render with each keystroke, potentially leading to sluggish performance.


Finally, don't overuse context - use it only for small state operations that don't require a full-fledged state management solution.