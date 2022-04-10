import React, { useState, useCallback, useMemo } from "react";

import Button from "./components/UI/Button/Button";
import "./App.css";
import DemoList from "./components/Demo/DemoList";

function App() {
  const [listTitle, setListTitle] = useState("My list");

  console.log("APP RUNNING");

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={useMemo(() => [5, 3, 1, 10, 9], [])} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
