import { useContext } from "react";

import classes from "./MealItem.module.css";
import FormAmount from "./FormAmount";

import CartContext from "../store/cart-context";

const MealItem = (props) => {
  const ctx = useContext(CartContext);

  const addMealHandler = (amount) => {
    const meal = {
      id: props.id,
      name: props.name,
      description: props.description,
      price: props.price,
      amount,
    };

    ctx.addMeal(meal);
  };

  return (
    <li className={classes["meal-item"]}>
      <div className={classes["meal-info"]}>
        <span className={classes["meal-name"]}>{props.name}</span>
        <span className={classes["meal-description"]}>{props.description}</span>
        <span className={classes["meal-price"]}>{`$${props.price}`}</span>
      </div>
      <FormAmount onAddMeal={addMealHandler} />
    </li>
  );
};

export default MealItem;
