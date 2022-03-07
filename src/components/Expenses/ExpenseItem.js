// useState is a hook. All functions started with use are hooks.
import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // useState return array with value and function to update value
  const [title, setTitle] = useState(props.title);

  // function clickHandler() {}
  const clickHandler = () => {
    // calling setTitle to uppdate state
    setTitle("updated");
  };

  // if state changed by setTitle, the code below will be reevaluated with new title
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;
