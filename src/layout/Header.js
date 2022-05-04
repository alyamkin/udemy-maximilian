import React, { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import imageMeals from "../assets/meals.jpg";

import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <div className={classes.header}>
        <p className={classes.logo}>ReactMeals</p>
        <HeaderCartButton onOpenCart={props.onOpenCart} />
      </div>
      <div className={classes["header-img"]}>
        <img src={imageMeals} alt="Table full of meals" />
      </div>
    </Fragment>
  );
};

export default Header;
