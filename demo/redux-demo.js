const redux = require("redux");

// Reducer
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

// Store
const store = redux.createStore(counterReducer);

// Component (subscriber)
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

// Subscribe component
store.subscribe(counterSubscriber);

// Dispatch
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
