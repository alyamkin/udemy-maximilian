import React, { useReducer, useCallback, useMemo, useEffect } from "react";

import IngredientForm from "./IngredientForm";
import Search from "./Search";
import IngredientList from "./IngredientList";
import ErrorModal from "../UI/ErrorModal";
import useHttp from "../hooks/useHttp";

const ADD_INGREDIENT = "ADD";
const DELETE_INGREDIENT = "DELETE";

const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case "SET":
      return action.ingredients;
    case "ADD":
      return [...currentIngredients, action.ingredient];
    case "DELETE":
      return currentIngredients.filter((ing) => ing.id !== action.id);
    default:
      throw new Error("Should not get there");
  }
};

const Ingredients = () => {
  const [userIngredients, dispatch] = useReducer(ingredientReducer, []);

  const {
    sendRequest,
    clearError,
    error,
    isLoading,
    reqExtra,
    requestType,
    data,
  } = useHttp();

  useEffect(() => {
    if (isLoading || error) return;

    switch (requestType) {
      case ADD_INGREDIENT:
        const newIngredient = {
          id: data.name,
          ...reqExtra,
        };

        dispatch({ type: "ADD", ingredient: newIngredient });
        break;
      case DELETE_INGREDIENT:
        dispatch({ type: "DELETE", id: reqExtra });
        break;
      default:
        console.log("Should not be here");
    }
  }, [data, reqExtra, requestType, isLoading, error]);

  const addIngredientHandler = useCallback(
    (ingredient) => {
      const httpConfig = {
        url: `https://react-hooks-update-89086-default-rtdb.firebaseio.com/ingredients.json`,
        method: "POST",
        body: ingredient,
      };

      sendRequest(httpConfig, ADD_INGREDIENT, ingredient);
    },
    [sendRequest]
  );

  const removeIngredientHandler = useCallback(
    (ingredientId) => {
      const httpConfig = {
        url: `https://react-hooks-update-89086-default-rtdb.firebaseio.com/ingredients/${ingredientId}.json`,
        method: "DELETE",
      };

      sendRequest(httpConfig, DELETE_INGREDIENT, ingredientId);
    },
    [sendRequest]
  );

  const closeModalHandler = useCallback(() => {
    clearError();
  }, [clearError]);

  const loadIngredientsHandler = useCallback(
    (ingredients) => {
      dispatch({ type: "SET", ingredients });
    },
    [dispatch]
  );

  const ingredientList = useMemo(() => {
    return (
      <IngredientList
        ingredients={userIngredients}
        onRemoveItem={removeIngredientHandler}
      />
    );
  }, [userIngredients, removeIngredientHandler]);

  return (
    <div className="App">
      {error && <ErrorModal onClose={closeModalHandler}>{error}</ErrorModal>}
      <IngredientForm
        onAddIngredientHandler={addIngredientHandler}
        loading={isLoading}
      />

      <section>
        <Search onLoadIngredients={loadIngredientsHandler} />
        {ingredientList}
      </section>
    </div>
  );
};

export default Ingredients;
