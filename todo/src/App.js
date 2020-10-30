import "./App.css";
import React, { useState } from "react";
import Todos from "./Components/Todos/Todos";

const App = (props) => {
  const [todosList, setTodosList] = useState("");

  return (
    <div className="App">
      <Todos />
    </div>
  );
};

export default App;
