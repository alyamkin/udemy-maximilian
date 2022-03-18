import React from "react";

import Button from "../UI/Button";

import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul className={classes["nav__list"]}>
        <li className={classes["nav__item"]}>
          <a href="#" className={classes["nav__link"]}>
            Users
          </a>
        </li>
        <li>
          <a href="#" className={classes["nav__link"]}>
            Admin
          </a>
        </li>
      </ul>
      <Button className={classes["button__logout"]} onClick={props.onLogout}>
        Logout
      </Button>
    </nav>
  );
};

export default Navigation;
