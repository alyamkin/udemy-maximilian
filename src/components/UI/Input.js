import React, { Fragment } from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const classInputAlt = props.classes?.classInputAlt;
  const classInputLabelAlt = props.classes?.classInputLabelAlt;
  const classInputFieldAlt = props.classes?.classInputFieldAlt;
  const inputValidity = props.isInputValid || false;
  const inputErrorMessage = props.inputErrorMessage || null;

  const isInputInvalid = !inputValidity && inputErrorMessage;

  const classInputValid = classInputFieldAlt
    ? `${classes["input__field"]} ${classInputFieldAlt}`
    : classes["input__field"];
  const classInputWithError = isInputInvalid
    ? classes["input__field--error"]
    : "";

  return (
    <Fragment>
      <div
        className={
          classInputAlt ? `${classes.input} ${classInputAlt}` : classes.input
        }
      >
        <label
          className={
            classInputLabelAlt
              ? `${classes["input__label"]} ${classInputLabelAlt}`
              : classes["input__label"]
          }
          htmlFor={props.input.id}
        >
          {props.label}
        </label>
        <input
          className={`${classInputValid} ${classInputWithError}`}
          ref={ref}
          {...props.input}
        />
      </div>
      {isInputInvalid && (
        <p className={classes["error-text"]}>{inputErrorMessage}</p>
      )}
    </Fragment>
  );
});

export default Input;
