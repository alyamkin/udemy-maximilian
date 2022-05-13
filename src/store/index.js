import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authenticationReducer from "./auth";

const store = configureStore({
  reducer: { counter: counterReducer, auth: authenticationReducer },
});

export default store;
