import { useState } from "react";

const useInput = (validateValue) => {
  const [inputValue, setInputValue] = useState(null);
  const [isInputValueValid, setIsInputValueValid] = useState(false);
  const [inputErrorMessage, setInputErrorMessage] = useState("");

  const changeInputHandler = (event) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);
    updateValidationStates(inputValue);
  };

  const onBlurInputHandler = (event) => {
    updateValidationStates(event.target.value);
  };

  const updateValidationStates = (inputValue) => {
    const { inputValidity, errorMessage } = validateValue(inputValue);
    setIsInputValueValid(inputValidity);
    setInputErrorMessage(errorMessage);
  };

  const clearInput = () => {
    setInputValue("");
  };

  return {
    inputValue,
    isInputValueValid,
    changeInputHandler,
    onBlurInputHandler,
    inputErrorMessage,
    clearInput,
  };
};

export default useInput;
