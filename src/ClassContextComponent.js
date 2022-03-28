import React, { Fragment } from "react";
import { ThemeContext } from "./App";
import classes from "./ClassContextComponent.module.css";

const ClassContextComponent = () => {
  return (
    <Fragment>
      <ThemeContext.Consumer>
        {(darkTheme) => {
          return (
            <div
              className={`${classes.theme}  ${
                darkTheme ? classes["theme--dark"] : classes["theme--light"]
              }`}
            >
              Class Theme
            </div>
          );
        }}
      </ThemeContext.Consumer>
    </Fragment>
  );
};

export default ClassContextComponent;
