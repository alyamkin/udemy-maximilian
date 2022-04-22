import { useReducer, useCallback } from "react";

const useInput = (validateValue) => {
  const userInputReducer = useCallback((state, action) => {
    if (action.type === "USER_INPUT") {
      return {
        inputFieldValue: action.value,
        inputFieldIsValid: validateValue(action.value),
        inputFieldTouched: state.inputFieldTouched,
      };
    }

    if (action.type === "INPUT_BLUR") {
      return {
        inputFieldValue: state.inputFieldValue,
        inputFieldIsValid: validateValue(state.inputFieldValue),
        inputFieldTouched: true,
      };
    }

    if (action.type === "INPUT_RESET") {
      return {
        inputFieldValue: "",
        inputFieldIsValid: false,
        inputFieldTouched: false,
      };
    }

    return {
      inputFieldValue: "",
      inputFieldIsValid: false,
      inputFieldTouched: false,
    };
  }, []);

  const [userInputState, dispatchUserInput] = useReducer(userInputReducer, {
    inputFieldValue: "",
    inputFieldIsValid: false,
    inputFieldTouched: false,
  });

  const hasErrors =
    !userInputState.inputFieldIsValid && userInputState.inputFieldTouched;

  const inputChangeHandler = (event) => {
    dispatchUserInput({ type: "USER_INPUT", value: event.target.value });
  };

  const inputBlurHandler = (event) => {
    dispatchUserInput({ type: "INPUT_BLUR" });
  };

  const reset = () => {
    dispatchUserInput({ type: "INPUT_RESET" });
  };

  return {
    inputValue: userInputState.inputFieldValue,
    isInputValid: userInputState.inputFieldIsValid,
    inputChangeHandler,
    inputBlurHandler,
    reset,
    hasErrors,
  };
};

export default useInput;
