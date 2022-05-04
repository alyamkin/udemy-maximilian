import React from "react";

const CartContext = React.createContext({
  meals: [],
  totalAmount: 0,
  addMeal: () => {},
  removeMeal: () => {},
});

export default CartContext;
