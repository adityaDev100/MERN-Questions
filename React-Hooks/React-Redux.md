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