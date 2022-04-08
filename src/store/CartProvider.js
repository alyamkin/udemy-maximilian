import { useReducer } from "react";

import CartContext from "./card-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const updateExistingCartItems = (existingCartItems, newCartItem) => {
  const existingCartIndex = existingCartItems.findIndex(
    (existingCartItem) => existingCartItem.id === newCartItem.id
  );

  if (existingCartIndex === -1) return;

  const existingCartItem = existingCartItems[existingCartIndex];
  const updatedExistingCartItem = {
    ...existingCartItem,
    amount: existingCartItem.amount + newCartItem.amount,
  };

  const updatedItems = [...existingCartItems];
  updatedItems[existingCartIndex] = updatedExistingCartItem;

  return updatedItems;
};

const removeExistingCartItem = (existingCartItems, id) => {
  const existingCartIndex = existingCartItems.findIndex(
    (existingCartItem) => existingCartItem.id === id
  );

  if (existingCartIndex === -1) return;

  const existingCartItem = existingCartItems[existingCartIndex];
  const updatedItems = [...existingCartItems];

  if (existingCartItem.amount === 1) {
    return updatedItems.filter((item) => item.id !== id);
  }

  const updatedExistingCartItem = {
    ...existingCartItem,
    amount: existingCartItem.amount - 1,
  };

  updatedItems[existingCartIndex] = updatedExistingCartItem;

  return updatedItems;
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const updatedItems =
      updateExistingCartItems(state.items, action.item) ||
      state.items.concat(action.item);

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  if (action.type === "REMOVE") {
    const existingCartIndex = state.items.findIndex(
      (existingCartItem) => existingCartItem.id === action.id
    );

    const existingCartItem = state.items[existingCartIndex];

    const updatedTotalAmount = state.totalAmount - existingCartItem.price;

    const updatedItems = removeExistingCartItem(state.items, action.id);
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
