import { useState, useEffect } from "react";

import useHttp from "../../hooks/use-http";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [availableMeals, setAvailableMeals] = useState([]);

  const { sendRequest, isLoading: isLoadingMeals, httpError } = useHttp();

  const processFetchedData = (fetchedData) => {
    const fetchedMeals = [];

    for (const [key, value] of Object.entries(fetchedData)) {
      const { name, description, price } = value;
      fetchedMeals.push({ id: key, name, description, price });
    }

    setAvailableMeals(fetchedMeals);
  };

  useEffect(() => {
    sendRequest(
      {
        url: "https://reactfoodorderapp-1714e-default-rtdb.firebaseio.com/meals.json",
      },
      processFetchedData
    );
  }, [sendRequest]);

  if (httpError) {
    return (
      <section>
        <p className={classes.errorMessage}>{httpError}</p>
      </section>
    );
  }

  if (isLoadingMeals) {
    return (
      <section>
        <p className={classes.loadingMessage}>Loading...</p>
      </section>
    );
  }

  const mealsList = availableMeals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
