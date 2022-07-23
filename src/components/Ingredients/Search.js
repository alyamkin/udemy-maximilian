import React, { useState, useEffect, useCallback } from "react";

import Card from "../UI/Card";
import "./Search.css";
import useHttp from "../hooks/useHttp";
import ErrorModal from "../UI/ErrorModal";

const GET_INGREDIENTS = "GET";

const Search = React.memo((props) => {
  const [enteredFilter, setEnteredFilter] = useState("");
  const { onLoadIngredients } = props;
  const { sendRequest, clearError, error, isLoading, requestType, data } =
    useHttp();

  useEffect(() => {
    if (isLoading || error || !data) return;

    switch (requestType) {
      case GET_INGREDIENTS:
        const ingredients = [];
        for (const [key, ingredient] of Object.entries(data)) {
          ingredients.push({ id: key, ...ingredient });
        }
        onLoadIngredients(ingredients);
        break;
      default:
        console.log("Should not be here");
    }
  }, [data, requestType, isLoading, error, onLoadIngredients]);

  useEffect(() => {
    const httpGetIngredients = async () => {
      const query =
        enteredFilter.length === 0
          ? ""
          : `?orderBy="title"&equalTo="${enteredFilter}"`;

      const httpConfig = {
        url: `https://react-hooks-update-89086-default-rtdb.firebaseio.com/ingredients.json${query}`,
        method: "GET",
      };

      sendRequest(httpConfig, GET_INGREDIENTS);
    };

    const timer = setTimeout(() => {
      httpGetIngredients();
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [enteredFilter, onLoadIngredients, sendRequest]);

  const setEnteredFilterHandler = (event) => {
    setEnteredFilter(event.target.value);
  };

  const closeModalHandler = useCallback(() => {
    clearError();
  }, [clearError]);

  return (
    <section className="search">
      {error && <ErrorModal onClose={closeModalHandler}>{error}</ErrorModal>}
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input type="text" onChange={setEnteredFilterHandler} />
        </div>
      </Card>
    </section>
  );
});

export default Search;
