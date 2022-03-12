import React from "react";

const CourseGoalItem = (props) => {
  const deleteHandler = (e) => {
    const id = e.target.dataset.id;
    props.onDeleteItem(id);
  };
  return (
    <li onClick={deleteHandler} data-id={props.id}>
      {props.goal.title}
    </li>
  );
};

export default CourseGoalItem;
