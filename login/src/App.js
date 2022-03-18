import React, { Fragment, useState, useEffect } from "react";

import Header from "./Header/Header";
import LoginForm from "./Login/LoginForm";
import LoginWelcoming from "./Login/LoginWelcoming";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginUserHandler = (email, pass) => {
    setIsLoggedIn(true);

    localStorage.setItem("isLoggedIn", "1");
  };

  const logoutUserHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <Fragment>
      <Header
        isLoggedIn={isLoggedIn}
        onLogoutUserHandler={logoutUserHandler}
      ></Header>
      {!isLoggedIn && <LoginForm onLoginUserHandler={loginUserHandler} />}
      {isLoggedIn && <LoginWelcoming />}
    </Fragment>
  );
}

export default App;
