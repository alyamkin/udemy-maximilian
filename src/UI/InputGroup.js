import React from "react";

import classes from "./InputGroup.module.css";

const InputGroup = React.forwardRef((props, ref) => {
  return (
    <div className={classes["input-group"]}>
      <label htmlFor={props.id}>{props.label}</label>
      <input {...props.attr} ref={ref}></input>
    </div>
  );
});

export default InputGroup;
