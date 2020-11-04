import React, { useState } from "react";

const TodoForm = (props) => {
  const { addTodoItem } = props;

  const [todoItemTitle, setTodoItemTitle] = useState("");
  const [todoItemDesc, setTodoItemDesc] = useState("");

  const todoItem = {
    title: todoItemTitle,
    desc: todoItemDesc,
  };

  const submitTodoItem = (e) => {
    e.preventDefault();
    addTodoItem(todoItem);
    setTodoItemTitle("");
    setTodoItemDesc("");
  };
  return (
    <form
      action=""
      onSubmit={(e) => {
        submitTodoItem(e);
      }}
    >
      <div className="todo__item">
        <input
          type="text"
          name="todo__item--title"
          id="todo__item--title"
          value={todoItemTitle}
          onChange={(e) => setTodoItemTitle(e.target.value)}
        />
        <label htmlFor="todo__item--title">Todo Title</label>
      </div>
      <div className="todo__item">
        <textarea
          name="todo__item--desc"
          id="todo__item--desc"
          cols="30"
          rows="5"
          value={todoItemDesc}
          onChange={(e) => setTodoItemDesc(e.target.value)}
        ></textarea>
        <label htmlFor="todo__item--desc">Todo Describtion</label>
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
