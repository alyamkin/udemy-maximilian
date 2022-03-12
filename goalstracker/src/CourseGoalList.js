import React from "react";
import CourseGoalItem from "./CourseGoalItem";

const CourseGoalList = (props) => {
  return props.goals.map((goal) => (
    <CourseGoalItem
      goal={goal}
      id={goal.id}
      key={goal.id}
      onDeleteItem={props.onDeleteItem}
    />
  ));
};

export default CourseGoalList;
