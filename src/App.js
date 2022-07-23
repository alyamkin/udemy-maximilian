import React, { useContext } from "react";
import authContext from "./store/auth-Context";

import Ingredients from "./components/Ingredients/Ingredients";
import Auth from "./components/Auth";

const App = (props) => {
  const authCtx = useContext(authContext);
  return (
    <React.Fragment>
      {!authCtx.isLoggedIn && <Auth />}
      {authCtx.isLoggedIn && <Ingredients />}
    </React.Fragment>
  );
};

export default App;
