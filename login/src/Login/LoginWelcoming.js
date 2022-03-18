import React, { useState, Fragment } from "react";
import ReactDOM from "react-dom";

import Card from "../UI/Card";
import classes from "./LoginWelcoming.module.css";

const LoginWelcoming = (props) => {
  const [isOverlayDisplay, setIsOverlayDosplay] = useState(true);

  const hideOverlayHandler = (e) => {
    setIsOverlayDosplay(false);
  };

  const Overlay = (props) => {
    return (
      <Fragment>
        {isOverlayDisplay && (
          <div className={classes.overlay} onClick={hideOverlayHandler}></div>
        )}
        ;
      </Fragment>
    );
  };
  return (
    <Fragment>
      <Card className={classes["welcome-wrapper"]}>
        <h1>Welcome back!</h1>
      </Card>
      {ReactDOM.createPortal(
        <Overlay />,
        document.getElementById("root-overlay")
      )}
    </Fragment>
  );
};

export default LoginWelcoming;
