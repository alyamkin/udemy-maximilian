import { Fragment, useRef } from "react";

import InputGroup from "../UI/InputGroup";
import ActionButton from "../UI/ActionButton";

import classes from "./FormAmount.module.css";

const FormAmount = (props) => {
  const mealAmountRef = useRef();

  const addNewMealHandler = (event) => {
    event.preventDefault();
    const mealAmount = +mealAmountRef.current.value;
    props.onAddMeal(mealAmount);
  };

  return (
    <Fragment>
      <form className={classes.form} onSubmit={addNewMealHandler}>
        <InputGroup
          attr={{
            type: "number",
            min: 1,
            max: 5,
            step: 1,
            defaultValue: 1,
            id: "amount",
          }}
          id="amount"
          label="Amount"
          ref={mealAmountRef}
        />
        <div className={classes.actions}>
          <ActionButton type="submit" classType="filled">
            + Add
          </ActionButton>
        </div>
      </form>
    </Fragment>
  );
};

export default FormAmount;
