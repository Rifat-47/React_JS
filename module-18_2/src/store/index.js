// import { createSlice, configureStore } from '@reduxjs/toolkit';

// const initialCounterState = { counter: 0, showCounter: true };

// // A slice is a portion of the Redux store that manages a specific part of the state.
// const counterSlice = createSlice({
//     name: 'counter',
//     initialState: initialCounterState,
//     reducers: {
//         increment(state) {
//             state.counter++;
//         },
//         decrement(state) {
//             state.counter--;
//         },
//         increaseByAmount(state, action) {
//             state.counter = state.counter + action.payload;
//         },
//         toogleCounter(state) {
//             state.showCounter = !state.showCounter;
//         },
//     }
// });

// const initialAuthState = { isAuthenticated: false };

// const authSlice = createSlice({
//     name: 'authentication',
//     initialState: initialAuthState,
//     reducers: {
//         login(state) {
//             state.isAuthenticated = true;
//         },
//         logout(state) {
//             state.isAuthenticated = false;
//         },
//     }
// });

// const store = configureStore({ // configureStore creates a redux store
//     // for one reducer, it can be used below way 
//     // reducer: counterSlice.reducer 

//     // for multiple reducer, we have to use below way 
//     reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
// });

// export const authActions = authSlice.actions;
// export const counterActions = counterSlice.actions;
// export default store;
// --------------------------------------------------------------------------

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth';

const store = configureStore({
    reducer: { counter: counterReducer, auth: authReducer }
});


export default store;