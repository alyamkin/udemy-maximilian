import { useState, useEffect, useCallback } from "react";

import useInput from "../../hooks/use-Input";
import CartContext from "../../store/cart-context";
import Input from "../UI/Input";
import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const [isFormValid, setIsFormValid] = useState(false);

  /**
   * Inputs, form validation
   */

  const nameInputValidation = useCallback((name) => {
    const regName = /^[A-Za-z\s]+$/;

    if (!name.trim().length) {
      return {
        inputValidity: false,
        errorMessage: "The field should not be emptied",
      };
    }

    if (!regName.test(name)) {
      return { inputValidity: false, errorMessage: "Invalid name" };
    }

    if (name.length > 20) {
      return {
        inputValidity: false,
        errorMessage: "Max length for name is 20 characters",
      };
    }

    return { inputValidity: true, errorMessage: "" };
  }, []);

  const emailInputValidation = useCallback((email) => {
    const emailToValidate = email.trim().toLowerCase();
    const regEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailToValidate.length) {
      return {
        inputValidity: false,
        errorMessage: "The field should not be emptied",
      };
    }

    if (!regEmail.test(emailToValidate)) {
      return { inputValidity: false, errorMessage: "Invalid email" };
    }

    return { inputValidity: true, errorMessage: "" };
  }, []);

  const phoneInputValidation = useCallback((phone) => {
    const regPhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if (!phone.length) {
      return {
        inputValidity: false,
        errorMessage: "The field should not be emptied",
      };
    }

    if (!regPhone.test(phone)) {
      return { inputValidity: false, errorMessage: "Invalid Phone" };
    }

    return { inputValidity: true, errorMessage: "" };
  }, []);

  const locationAddressInputValidation = useCallback((address) => {
    const regAddress = /^[a-zA-Z0-9\s,'-.]*$/;

    if (!address.length) {
      return {
        inputValidity: false,
        errorMessage: "The field should not be emptied",
      };
    }

    if (!regAddress.test(address)) {
      return { inputValidity: false, errorMessage: "Invalid Address" };
    }

    return { inputValidity: true, errorMessage: "" };
  }, []);

  const {
    inputValue: nameInputValue,
    isInputValueValid: isNameInputValueValid,
    changeInputHandler: nameChangeInputHandler,
    onBlurInputHandler: nameOnBlurInputHandler,
    inputErrorMessage: nameInputErrorMessage,
    clearInput: nameInputClear,
  } = useInput(nameInputValidation);

  const {
    inputValue: emailInputValue,
    isInputValueValid: isEmailInputValueValid,
    changeInputHandler: emailChangeInputHandler,
    onBlurInputHandler: emailOnBlurInputHandler,
    inputErrorMessage: emailInputErrorMessage,
    clearInput: emailInputClear,
  } = useInput(emailInputValidation);

  const {
    inputValue: phoneInputValue,
    isInputValueValid: isPhoneInputValueValid,
    changeInputHandler: phoneChangeInputHandler,
    onBlurInputHandler: phoneOnBlurInputHandler,
    inputErrorMessage: phoneInputErrorMessage,
    clearInput: phoneInputClear,
  } = useInput(phoneInputValidation);

  const {
    inputValue: addressInputValue,
    isInputValueValid: isAddressInputValueValid,
    changeInputHandler: addressChangeInputHandler,
    onBlurInputHandler: addressOnBlurInputHandler,
    inputErrorMessage: addressInputErrorMessage,
    clearInput: addressInputClear,
  } = useInput(locationAddressInputValidation);

  const formValidation = useCallback(() => {
    const formValidity =
      isNameInputValueValid &&
      isEmailInputValueValid &&
      isPhoneInputValueValid &&
      isAddressInputValueValid;
    setIsFormValid(formValidity);
  }, [
    isNameInputValueValid,
    isEmailInputValueValid,
    isPhoneInputValueValid,
    isAddressInputValueValid,
  ]);

  useEffect(() => {
    formValidation();
  }, [
    isNameInputValueValid,
    isEmailInputValueValid,
    isPhoneInputValueValid,
    isAddressInputValueValid,
    formValidation,
  ]);

  const clearFormHandler = () => {
    nameInputClear();
    emailInputClear();
    phoneInputClear();
    addressInputClear();
  };

  /**
   * Handlers
   */
  const sendOrderHandler = (event) => {
    event.preventDefault();
    const userData = {
      name: nameInputValue,
      email: emailInputValue,
      phone: phoneInputValue,
      address: addressInputValue,
    };
    props.onConfirm(userData);
    clearFormHandler();
  };

  /**
   * Additional calsses
   */
  const inputClassesAlt = {
    classInputLabelAlt: classes["input__label"],
    classInputFieldAlt: classes["input__field"],
  };

  return (
    <div className={classes["order-details"]}>
      <h3 className={classes["order-details__title"]}>Customer details</h3>
      <form
        className={classes["order-details__form"]}
        onSubmit={sendOrderHandler}
      >
        <div>
          <Input
            input={{
              type: "text",
              onChange: nameChangeInputHandler,
              onBlur: nameOnBlurInputHandler,
              value: nameInputValue || "",
            }}
            classes={inputClassesAlt}
            label="Name"
            isInputValid={isNameInputValueValid}
            inputErrorMessage={nameInputErrorMessage}
          />
        </div>
        <Input
          input={{
            type: "email",
            onChange: emailChangeInputHandler,
            onBlur: emailOnBlurInputHandler,
            value: emailInputValue || "",
          }}
          classes={inputClassesAlt}
          label="E-mail"
          isInputValid={isEmailInputValueValid}
          inputErrorMessage={emailInputErrorMessage}
        />
        <Input
          input={{
            type: "phone",
            onChange: phoneChangeInputHandler,
            onBlur: phoneOnBlurInputHandler,
            value: phoneInputValue || "",
          }}
          classes={inputClassesAlt}
          label="Phone"
          isInputValid={isPhoneInputValueValid}
          inputErrorMessage={phoneInputErrorMessage}
        />
        <Input
          input={{
            type: "text",
            onChange: addressChangeInputHandler,
            onBlur: addressOnBlurInputHandler,
            value: addressInputValue || "",
          }}
          classes={inputClassesAlt}
          label="Address"
          isInputValid={isAddressInputValueValid}
          inputErrorMessage={addressInputErrorMessage}
        />
        <div className={classes["order-details__actions"]}>
          <button
            type="button"
            className={`${classes["order-details__btn"]} ${classes["order-details__btn--close"]}`}
            onClick={props.onClose}
          >
            Close
          </button>
          <button
            className={`${classes["order-details__btn"]} ${classes["order-details__btn--checkout"]}`}
            disabled={!isFormValid}
          >
            Checkout
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
