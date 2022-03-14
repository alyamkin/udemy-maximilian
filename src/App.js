import React, { useState } from "react";

import InputUserForm from "./UserInputs/InputUserForm";
import UsersList from "./UsersList/UsersList";
import Card from "./UI/Card";
import ValidationPopup from "./Popup/ValidationPopup";

import styles from "./App.module.css";

function App() {
  const [users, setUsers] = useState([]);
  const [displayErrorMessage, setDisplayErrorMessage] = useState(false);
  const [validationMessages, setValidationMessages] = useState("");

  const addNewUserHandler = (newUser) => {
    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({ id: Math.random().toString(), ...newUser });

      return updatedUsers;
    });
  };

  const validationInputsHandler = (message) => {
    if (message) {
      setDisplayErrorMessage(true);
      setValidationMessages(message);
    }
  };

  const hideErrorMessagesHandler = () => {
    setDisplayErrorMessage(false);
  };

  return (
    <div>
      <section className={`${styles.section} ${styles["section-form"]}`}>
        <Card>
          <InputUserForm
            onAddNewUser={addNewUserHandler}
            onValidationInputsHandler={validationInputsHandler}
          ></InputUserForm>
        </Card>
      </section>
      <section
        className={`${styles.section} ${styles["section-list"]} ${
          users.length > 0 ? styles.display : ""
        }`}
      >
        <Card>
          <UsersList users={users}></UsersList>
        </Card>
      </section>
      <section
        className={`${styles.section} ${styles["section-popup"]} ${
          displayErrorMessage ? styles.display : ""
        }`}
      >
        <ValidationPopup
          message={validationMessages}
          onHideErrorMessagesHandler={hideErrorMessagesHandler}
        ></ValidationPopup>
      </section>
      <div
        className={`${styles.overlay} ${
          displayErrorMessage ? styles.display : ""
        }`}
      ></div>
    </div>
  );
}

export default App;
