import "./App.css";
import React, { useState } from "react";
import Todos from "./Components/Todos/Todos";

const App = (props) => {
  const [todosList, setTodosList] = useState("");

  const addTodoItem = () => {
    const ma = Math.random() * 10;
    setTodosList([
      ...todosList,
      {
        item: `item number ${ma}`,
        desc: `new item description ma`,
        id: ma,
      },
    ]);
  };

  const deleteTodoItem = (id) => {
    const newTodos = todosList.filter((todo) => {
      return todo.id !== id;
    });
    setTodosList(newTodos);
  };

  return (
    <div className="App">
      <Todos
        todos={todosList}
        addTodoItem={addTodoItem}
        deleteTodoItem={deleteTodoItem}
      />
    </div>
  );
};

export default App;
