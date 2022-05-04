import { Fragment } from "react";

import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <Fragment>
      <section className={classes["meals-summary"]}>
        <h1 className={classes["meals-heading"]}>
          Delicious Food, Delivered To You
        </h1>
        <p className={classes["meals-paragraph"]}>
          Choose your favorite meals from our board selection of available meals
          and enjpy a delicious lunch or dinner at home
        </p>
        <p className={classes["meals-paragraph"]}>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </section>
    </Fragment>
  );
};

export default MealsSummary;
