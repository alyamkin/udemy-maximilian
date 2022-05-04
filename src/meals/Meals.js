import { Fragment } from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import classes from "./Meals.module.css";

const Meals = (props) => {
  return (
    <Fragment>
      <div className={classes.meals}>
        <MealsSummary />
        <AvailableMeals />
      </div>
    </Fragment>
  );
};

export default Meals;
