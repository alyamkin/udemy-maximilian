import React from "react";

const InputGroup = (props) => {
  return (
    <div
      className={props.inputIsInvalid ? "form-control invalid" : "form-control"}
    >
      <label htmlFor={props.id}>{props.inputLabel}</label>
      <input
        type={props.type || "text"}
        id={props.id}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
      />
      {props.inputIsInvalid && (
        <p className="error-text">{props.invalidInputText}</p>
      )}
    </div>
  );
};

export default InputGroup;
