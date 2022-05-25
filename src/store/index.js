// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer },
});
// const initialState = {
//   items: [],
// };

// const cartReducer = (state = initialState, action) => {
//   if (action.type === "addItem") {
//     const itemIndex = state.items.findIndex(
//       (item) => item.id === action.item.id
//     );
//     const existingItem = state.items[itemIndex];

//     const items = [...state.items];

//     if (!existingItem) {
//       const newItem = { ...action.item, quantity: 1 };
//       items.push(newItem);
//     } else {
//       const newItem = { ...existingItem, quantity: existingItem.quantity + 1 };
//       items[itemIndex] = newItem;
//     }

//     return { items };
//   }

//   if (action.type === "removeItem") {
//     const id = action.id;
//     const itemIndex = state.items.findIndex((item) => item.id === id);
//     const existingItem = state.items[itemIndex];

//     let items = [...state.items];

//     if (existingItem.quantity === 1) {
//       items = state.items.filter((item) => item.id !== id);
//     } else {
//       const newItem = { ...existingItem, quantity: existingItem.quantity - 1 };
//       items[itemIndex] = newItem;
//     }

//     return { items };
//   }
//   return state;
// };

// const store = createStore(cartReducer);

export default store;
