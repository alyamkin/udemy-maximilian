import React from "react";
import Todo from "../models/todo";

import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  item: Todo;
  onClick: (event: React.MouseEvent) => void;
}> = (props) => {
  const { text } = props.item;

  return (
    <li className={classes.item} onClick={props.onClick}>
      {text}
    </li>
  );
};

export default TodoItem;
