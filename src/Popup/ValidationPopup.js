import React from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./ValidationPopup.module.css";

const ValidationPopup = (props) => {
  return (
    <Card className={styles.card}>
      <div className={styles.popup}>
        <div className={styles["popup-head"]}>
          <p className={styles["popup-title"]}>Invalid input</p>
        </div>
        <div className={styles["popup-body"]}>
          <p className={styles["popup-message"]}>{props.message}</p>
          <Button
            className={styles.button}
            onClick={props.onHideErrorMessagesHandler}
          >
            Okay
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ValidationPopup;
