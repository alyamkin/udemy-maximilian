import React, { Fragment, useState } from "react";

import Header from "./Header/Header";
import LoginForm from "./Login/LoginForm";
import LoginWelcoming from "./Login/LoginWelcoming";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginUserHandler = (email, pass) => {
    setIsLoggedIn(true);

    localStorage.setItem("isLoggedIn", "1");
  };

  const logoutUserHandler = () => {
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
