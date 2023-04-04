const redux = require('redux');

const counterReducer = (state={counter:0} , action) => { // receives 2 arguments, current state & action to be done
    return {
        counter: state.counter + 1
    };
};

const store = redux.createStore(counterReducer); // store receives reducer function that changes the data

console.log(store.getState()); // gives snapshot of the current state

const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
};

store.subscribe(counterSubscriber); // when state changes, this method is called

store.dispatch({type: 'increment'});