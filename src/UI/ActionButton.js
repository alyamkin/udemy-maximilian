import classes from "../UI/ActionButton.module.css";

const ActionButton = (props) => {
  const buttonClasses = `${classes.button} ${
    props.classType ? classes[props.classType] : ""
  }`;

  return (
    <button
      onClick={props.onClick}
      type={props.type || "button"}
      className={buttonClasses}
    >
      {props.children}
    </button>
  );
};

export default ActionButton;
