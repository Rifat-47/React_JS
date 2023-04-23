import redux from 'redux';
import { createStore } from 'redux';

export const Increment = 'increment';
export const IncrementByAmount = 'incrementByAmount';
export const Decrement = 'decrement';

const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
    if (action.type === IncrementByAmount) {
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        }
    };

    if (action.type === Increment) {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        }
    };

    if (action.type === Decrement) {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        }
    };
    if (action.type === 'toggle') {
        return {
            counter: state.counter,
            showCounter: !state.showCounter
        }
    };
    return state
};

const store = createStore(counterReducer);

export default store;


