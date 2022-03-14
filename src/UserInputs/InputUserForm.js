import React, { useState } from "react";

import Button from "../UI/Button";

import styles from "./InputUserForm.module.css";

const InputUserForm = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const addUserHandler = (e) => {
    e.preventDefault();

    const newUser = {
      username: userName,
      age: userAge,
    };

    const validationErrorMessages = validateInputs();

    if (validationErrorMessages) {
      props.onValidationInputsHandler(validationErrorMessages);
      return;
    }

    clearInputForm();
    props.onAddNewUser(newUser);
  };

  const userNameChangeHandler = (e) => {
    setUserName(e.target.value);
  };

  const userAgeChangeHandler = (e) => {
    setUserAge(e.target.value);
  };

  const clearInputForm = () => {
    setUserName("");
    setUserAge("");
  };

  const validateInputs = () => {
    if (userName.length === 0 || userAge.length === 0)
      return `Please enter a valid name and age (non-empty values).`;

    if (!isFinite(userAge)) return `The age should be a number`;

    if (userAge < 0) return `Please enter a valid age (>0)`;

    return "";
  };

  return (
    <div>
      <form className={styles.form} onSubmit={addUserHandler}>
        <div className={styles["form-control"]}>
          <label>Username</label>
          <input
            type="text"
            onChange={userNameChangeHandler}
            value={userName}
            autoFocus
          ></input>
        </div>
        <div className={styles["form-control"]}>
          <label>Age (Years)</label>
          <input
            type="number"
            onChange={userAgeChangeHandler}
            value={userAge}
          ></input>
        </div>
        <Button className={styles.button} type="submit">
          Add User
        </Button>
      </form>
    </div>
  );
};

export default InputUserForm;
