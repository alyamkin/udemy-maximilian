import React from "react";

import styles from "./UserItem.module.css";

const UserItem = (props) => {
  return (
    <li
      className={styles["user-item"]}
    >{`${props.user.username} (${props.user.age} years old)`}</li>
  );
};

export default UserItem;
