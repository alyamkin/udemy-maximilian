import { useState, useEffect } from "react";
import useInput from "../hooks/use-input";

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

const BasicForm = (props) => {
  const [isFormValid, setIsFormValid] = useState(false);

  const {
    inputValue: enderedFName,
    isInputValid: isEnderedFNameValid,
    inputChangeHandler: enteredFNameChangeHandler,
    inputBlurHandler: enteredFNameBlurHandler,
    reset: resetFName,
    hasErrors: isEnteredFNameHasErrors,
  } = useInput(validateName);

  const {
    inputValue: enderedLName,
    isInputValid: isEnderedLNameValid,
    inputChangeHandler: enteredLNameChangeHandler,
    inputBlurHandler: enteredLNameBlurHandler,
    reset: resetLName,
    hasErrors: isEnteredLNameHasErrors,
  } = useInput(validateName);

  const {
    inputValue: enteredEmail,
    isInputValid: isEnderedEmailValid,
    inputChangeHandler: enteredEmailChangeHandler,
    inputBlurHandler: enteredEmailBlurHandler,
    reset: resetEmail,
    hasErrors: isEnteredEmailHasErrors,
  } = useInput(validateEmail);

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (!isFormValid) return;

    console.log(enderedFName);
    resetFName();
    resetLName();
    resetEmail();
  };

  useEffect(() => {
    setIsFormValid(
      isEnderedFNameValid && isEnderedLNameValid && isEnderedEmailValid
    );
  }, [isEnderedFNameValid, isEnderedLNameValid, isEnderedEmailValid]);

  return (
    <form onSubmit={submitFormHandler}>
      <div className="control-group">
        <div
          className={
            isEnteredFNameHasErrors ? "form-control invalid" : "form-control"
          }
        >
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            onChange={enteredFNameChangeHandler}
            onBlur={enteredFNameBlurHandler}
            value={enderedFName}
          />
          {isEnteredFNameHasErrors && (
            <p className={"error-text"}>First Name should not be emptied</p>
          )}
        </div>
        <div
          className={
            isEnteredLNameHasErrors ? "form-control invalid" : "form-control"
          }
        >
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            onChange={enteredLNameChangeHandler}
            onBlur={enteredLNameBlurHandler}
            value={enderedLName}
          />
          {isEnteredLNameHasErrors && (
            <p className={"error-text"}>Last Name should not be emptied</p>
          )}
        </div>
      </div>
      <div
        className={
          isEnteredEmailHasErrors ? "form-control invalid" : "form-control"
        }
      >
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          onChange={enteredEmailChangeHandler}
          onBlur={enteredEmailBlurHandler}
          value={enteredEmail}
        />
        {isEnteredEmailHasErrors && (
          <p className={"error-text"}>
            Email should not be emptied and should contains @
          </p>
        )}
      </div>
      <div className="form-actions">
        <button type="submit" disabled={!isFormValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default BasicForm;
