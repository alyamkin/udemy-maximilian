import React, { Fragment } from "react";
import { useTheme, useThemeUpdate } from "./ThemeContext";
import classes from "./FunctionContextComponent.module.css";

const FunctionContextComponent = () => {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  return (
    <Fragment>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div
        className={`${classes.theme}  ${
          darkTheme ? classes["theme--dark"] : classes["theme--light"]
        }`}
      >
        Function Theme
      </div>
    </Fragment>
  );
};

export default FunctionContextComponent;
