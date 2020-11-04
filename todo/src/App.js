import "./App.css";
import React, { useState } from "react";
import Todos from "./Components/Todos/Todos";
import TodoForm from "./Components/TodoForm/TodoForm";

const App = (props) => {
  const [todosList, setTodosList] = useState("");

  const addTodoItem = (newItem) => {
    const ma = Math.random() * 10;
    setTodosList([
      ...todosList,
      {
        title: newItem.title,
        desc: newItem.desc,
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
      <TodoForm addTodoItem={addTodoItem} />

      <Todos
        todos={todosList}
        addTodoItem={addTodoItem}
        deleteTodoItem={deleteTodoItem}
      />
    </div>
  );
};

export default App;
