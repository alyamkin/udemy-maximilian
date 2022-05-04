import { useState, useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = { meals: [], totalAmount: 0 };

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const meal = action.meal;
    const totalAmountUpdated = state.totalAmount + meal.amount * meal.price;

    const existingCartMealIndex = state.meals.findIndex(
      (mealInCart) => mealInCart.id === meal.id
    );

    const existingCartMeal = state.meals[existingCartMealIndex];

    const updatedMeals = [...state.meals];

    if (existingCartMeal) {
      const updatedMeal = {
        ...existingCartMeal,
        amount: existingCartMeal.amount + meal.amount,
      };
      updatedMeals[existingCartMealIndex] = updatedMeal;
    } else {
      updatedMeals.push(meal);
    }

    return {
      ...state,
      meals: updatedMeals,
      totalAmount: totalAmountUpdated,
    };
  }
  if (action.type === "REMOVE") {
    const id = action.id;
    const existingCartMealIndex = state.meals.findIndex(
      (mealInCart) => mealInCart.id === id
    );

    const existingCartMeal = state.meals[existingCartMealIndex];

    if (!existingCartMeal) return state;

    const totalAmountUpdated = state.totalAmount - existingCartMeal.price;

    let updatedMeals = null;
    if (existingCartMeal.amount === 1) {
      updatedMeals = state.meals.filter((meal) => meal.id !== id);
    } else {
      const updatedMeal = {
        ...existingCartMeal,
        amount: existingCartMeal.amount - 1,
      };
      updatedMeals = [...state.meals];
      updatedMeals[existingCartMealIndex] = updatedMeal;
    }

    return {
      ...state,
      meals: updatedMeals,
      totalAmount: totalAmountUpdated,
    };
  }

  return state;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addMealHandler = (meal) => {
    dispatchCartAction({ type: "ADD", meal });
  };

  const removeMealHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id });
  };

  return (
    <CartContext.Provider
      value={{
        meals: cartState.meals,
        totalAmount: cartState.totalAmount,
        addMeal: addMealHandler,
        removeMeal: removeMealHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
