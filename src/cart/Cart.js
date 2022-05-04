import { useContext } from "react";

import CartItem from "./CartItem";
import ActionButton from "../UI/ActionButton";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../store/cart-context";

const Cart = (props) => {
  const ctx = useContext(CartContext);

  const cartItemAddHandler = (meal) => {
    ctx.addMeal({ ...meal, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    ctx.removeMeal(id);
  };

  const meals = ctx.meals.map((meal) => (
    <CartItem
      key={meal.id}
      name={meal.name}
      price={meal.price}
      amount={meal.amount}
      onCartItemAdd={cartItemAddHandler.bind(null, meal)}
      onCartItemRemove={cartItemRemoveHandler.bind(null, meal.id)}
    />
  ));

  return (
    <Modal onCloseModal={props.onCloseCart}>
      <div className={classes.scroll}>
        <ul className={classes.meals}>{meals}</ul>
      </div>
      <div className={classes.total}>
        <span className={classes["total-label"]}>Total Amount</span>
        <span className={classes["total-amount"]}>{`$${ctx.totalAmount.toFixed(
          2
        )}`}</span>
      </div>
      <div className={classes.actions}>
        <ActionButton classType="outlined" onClick={props.onCloseCart}>
          Close
        </ActionButton>
        <ActionButton classType="filled">Order</ActionButton>
      </div>
    </Modal>
  );
};

export default Cart;
