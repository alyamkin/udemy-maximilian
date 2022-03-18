import React, { useState, useRef } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";

import classes from "./LoginForm.module.css";

const LoginForm = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isEnteredEmailValid, setIsEneterEmailValid] = useState();
  const [isEnteredPasswordValid, setIsEneterPasswordValid] = useState();
  const [isFormValid, setIsFormValid] = useState(false);

  const testRef = useRef();

  const changeEmailHandler = (e) => {
    setEnteredEmail(e.target.value);
    setIsFormValid(
      e.target.value.includes("@") && enteredPassword.trim().length > 6
    );
  };

  const changePassHandler = (e) => {
    setEnteredPassword(e.target.value);

    setIsFormValid(
      e.target.value.trim().length > 6 && enteredEmail.includes("@")
    );
  };

  const validateEmailHandler = () => {
    setIsEneterEmailValid(enteredEmail.includes("@"));
  };

  const validatePassHandler = () => {
    setIsEneterPasswordValid(enteredPassword.trim().length > 6);
  };

  const submitLoginHandler = (e) => {
    e.preventDefault();
    props.onLoginUserHandler(enteredEmail, enteredPassword);
  };

  const testRefInputHandler = (e) => {
    alert(testRef.current.value);
  };

  return (
    <Card className={classes["form-wrapper"]}>
      <form className={classes.form} onSubmit={submitLoginHandler}>
        <div className={classes["form__control"]}>
          <label className={classes["form__label"]} htmlFor="email">
            E-mail
          </label>
          <input
            id="email"
            className={`${classes["form__input"]} ${
              isEnteredEmailValid === false ? classes.invalid : ""
            }`}
            type="email"
            onChange={changeEmailHandler}
            onBlur={validateEmailHandler}
          ></input>
        </div>
        <div className={classes["form__control"]}>
          <label className={classes["form__label"]} htmlFor="password">
            Password
          </label>
          <input
            id="password"
            className={`${classes["form__input"]} ${
              isEnteredPasswordValid === false ? classes.invalid : ""
            }`}
            type="password"
            onChange={changePassHandler}
            onBlur={validatePassHandler}
          ></input>
        </div>
        <div className={classes["form__control"]}>
          <label className={classes["form__label"]} htmlFor="inputRef">
            Input to test ref
          </label>
          <input
            id="inputRef"
            className={`${classes["form__input"]}`}
            type="text"
            ref={testRef}
          ></input>
        </div>
        <div className={classes["buttons-control"]}>
          <Button
            className={classes["button__login"]}
            type="submit"
            disabled={!isFormValid}
          >
            Login
          </Button>
          <Button
            className={classes["button__testref"]}
            onClick={testRefInputHandler}
          >
            Test Ref
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default LoginForm;
