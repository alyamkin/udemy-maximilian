import React from "react";

import Navigation from "./Navigation";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes["header__logo"]}>
        <p>Logo</p>
      </div>
      {props.isLoggedIn && <Navigation onLogout={props.onLogoutUserHandler} />}
    </header>
  );
};

export default Header;
