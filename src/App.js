import React from "react";
import FunctionContextComponent from "./FunctionContextComponent";
import ThemeProvider from "./ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <FunctionContextComponent />
    </ThemeProvider>
  );
};

export default App;
