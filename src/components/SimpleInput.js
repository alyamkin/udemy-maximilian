import { useState, useEffect } from "react";

import InputGroup from "./formComponents/InputGroup";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const validateName = (name) => {
    const isNameEmpty = (name || "").trim() === "";
    const isNameValid = isNameEmpty ? false : true;
    return isNameValid;
  };

  const validateEmail = (email) => {
    const isEmailEmpty = (email || "").trim() === "";
    const isEmailIncludesAt = (email || "").trim().includes("@");
    const isEmailValid = isEmailIncludesAt && !isEmailEmpty ? true : false;
    return isEmailValid;
  };

  const {
    inputValue: enteredName,
    isInputValid: enteredNameIsValid,
    inputChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetNameInput,
    hasErrors: nameInputIsInvalid,
  } = useInput(validateName);

  const {
    inputValue: enteredEmail,
    isInputValid: enteredEmailIsValid,
    inputChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput,
    hasErrors: emailInputIsInvalid,
  } = useInput(validateEmail);

  useEffect(() => {
    const formValidity = enteredNameIsValid && enteredEmailIsValid;
    setFormIsValid(formValidity);
  }, [enteredNameIsValid, enteredEmailIsValid]);

  const formSubmissionHandler = (event) => {
    //setEnteredNameTouched(true);

    event.preventDefault();

    if (!validateName(enteredName) || !validateEmail(enteredEmail)) return;

    console.log(enteredName, enteredEmail);

    resetNameInput();
    resetEmailInput();

    // setEnteredName("");
    // setEnteredNameTouched(false);
    // setEnteredEmail("");
    // setEnteredEmailTouched(false);
  };
  // const [enteredName, setEnteredName] = useState("");
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  // const [eneteredNameTouched, setEnteredNameTouched] = useState(false);
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(false);
  // const [eneteredEmailTouched, setEnteredEmailTouched] = useState(false);
  // const [formIsValid, setFormIsValid] = useState(false);

  // const nameInputIsInvalid = !enteredNameIsValid && eneteredNameTouched;
  // const emailInputIsInvalid = !enteredEmailIsValid && eneteredEmailTouched;

  // useEffect(() => {
  //   const formValidity = enteredNameIsValid && enteredEmailIsValid;
  //   setFormIsValid(formValidity);
  // }, [enteredNameIsValid, enteredEmailIsValid]);

  // const validateName = (name) => {
  //   const isNameEmpty = (name || "").trim() === "";
  //   const isNameValid = isNameEmpty ? false : true;

  //   setEnteredNameIsValid(isNameValid);

  //   return isNameValid;
  // };

  // const validateEmail = (email) => {
  //   const isEmailEmpty = (email || "").trim() === "";
  //   const isEmailIncludesAt = (email || "").trim().includes("@");
  //   const isEmailValid = isEmailIncludesAt && !isEmailEmpty ? true : false;
  //   setEnteredEmailIsValid(isEmailValid);
  //   return isEmailValid;
  // };

  // const nameInputChangeHandler = (event) => {
  //   const inputName = event.target.value;
  //   setEnteredName(inputName);

  //   validateName(inputName);
  // };

  // const emailInputChangeHandler = (event) => {
  //   const inputEmail = event.target.value;
  //   setEnteredEmail(inputEmail);

  //   validateEmail(inputEmail);
  // };

  // const nameInputBlurHandler = (event) => {
  //   setEnteredNameTouched(true);
  //   validateName(enteredName);
  // };

  // const emailInputBlurHandler = (event) => {
  //   setEnteredEmailTouched(true);
  //   validateEmail(enteredEmail);
  // };

  // const formSubmissionHandler = (event) => {
  //   setEnteredNameTouched(true);

  //   event.preventDefault();

  //   if (!validateName(enteredName) || !validateEmail(enteredEmail)) return;

  //   console.log(enteredName, enteredEmail);

  //   setEnteredName("");
  //   setEnteredNameTouched(false);
  //   setEnteredEmail("");
  //   setEnteredEmailTouched(false);
  // };

  return (
    <form onSubmit={formSubmissionHandler}>
      <InputGroup
        type="text"
        id="name"
        onChange={nameInputChangeHandler}
        onBlur={nameInputBlurHandler}
        value={enteredName}
        inputLabel="Your name"
        inputIsInvalid={nameInputIsInvalid}
        invalidInputText={"Name must not be emptied."}
      />

      <InputGroup
        type="text"
        id="email"
        onChange={emailInputChangeHandler}
        onBlur={emailInputBlurHandler}
        value={enteredEmail}
        inputLabel="Your email"
        inputIsInvalid={emailInputIsInvalid}
        invalidInputText={"Email must not be emptied and must contains @"}
      />

      <div className="form-actions">
        <button type="submit" disabled={!formIsValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput;
