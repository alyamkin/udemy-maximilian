import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const decreaseMealsHandler = () => {};

  return (
    <li className={classes.meal}>
      <div className={classes["meal-description"]}>
        <div className={classes["meal-name"]}>{props.name}</div>
        <div className={classes["group-description"]}>
          <div className={classes["meal-price"]}>{`$${props.price}`}</div>
          <div className={classes["meal-amount"]}>{`x ${props.amount}`}</div>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onCartItemRemove}>-</button>
        <button onClick={props.onCartItemAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
