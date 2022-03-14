import React, { useLayoutEffect } from "react";

import UserItem from "./UserItem";
import styles from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <ul className={styles["users-list"]}>
      {props.users.map((user) => (
        <UserItem user={user} key={user.id}></UserItem>
      ))}
    </ul>
  );
};

export default UsersList;
