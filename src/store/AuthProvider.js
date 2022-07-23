import React, { useState } from "react";
import authContext from "./auth-Context";

const AuthProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  const login = {
    isLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <authContext.Provider value={login}>{props.children}</authContext.Provider>
  );
};

export default AuthProvider;
