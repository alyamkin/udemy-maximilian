import React, { useState } from "react";

import CourseInput from "./CourseInput";
import "./App.css";
import CourseGoalList from "./CourseGoalList";

const App = () => {
  const goals = [
    { title: "Learn CSS", id: 1 },
    { title: "Learn React", id: 2 },
  ];

  const [courseGoals, setCourseGoals] = useState(goals);

  const addGoalHandler = (goal) => {
    const newGoals = [{ title: goal, id: Math.random() }, ...courseGoals];
    setCourseGoals(newGoals);
  };

  const deleteItemHandler = (id) => {
    const updatedGoals = [...courseGoals].filter((goal) => goal.id != id);
    setCourseGoals(updatedGoals);
  };

  return (
    <div>
      <CourseInput onAddGoal={addGoalHandler}></CourseInput>
      <CourseGoalList goals={courseGoals} onDeleteItem={deleteItemHandler} />
    </div>
  );
};

export default App;
