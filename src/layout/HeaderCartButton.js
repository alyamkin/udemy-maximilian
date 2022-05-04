import { Fragment, useContext, useEffect, useState } from "react";

import CartIcon from "../cart/CartIcon";
import CartContext from "../store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const ctx = useContext(CartContext);

  const { meals } = ctx;

  const mealsNumber = meals.reduce((mealsTotal, meal) => {
    return mealsTotal + meal.amount;
  }, 0);

  let cartButtonClasses = `${classes["cart-button"]} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (meals.length === 0) return;

    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [meals]);

  return (
    <Fragment>
      <div className={classes.cart}>
        <button className={cartButtonClasses} onClick={props.onOpenCart}>
          <span className={classes["cart-icon"]}>
            <CartIcon />
          </span>
          <span className={classes["cart-label"]}>Your Cart</span>
          <span className={classes["cart-badge"]}>{mealsNumber}</span>
        </button>
      </div>
    </Fragment>
  );
};

export default HeaderCartButton;
