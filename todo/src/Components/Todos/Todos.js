import React from "react";

const Todos = (props) => {
  const { todos, addTodoItem, deleteTodoItem } = props;
  return (
    <div className="todos">
      {todos.length >= 1 ? (
        <div className="todos--container">
          <h1>Hello</h1>
          <h2>Todos</h2>
          <div>
            <button className="todos--add" onClick={addTodoItem}>
              Add new item
            </button>
            {todos.map((todo) => {
              return (
                <div className="todo--item" key={todo.id}>
                  <div>{todo.title}</div>
                  <div>{todo.desc}</div>
                  <button
                    className="todos--delete"
                    onClick={() => {
                      deleteTodoItem(todo.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div>
          <h1>No Todos</h1>
          <button className="todos--add" onClick={addTodoItem}>
            Add new item
          </button>
        </div>
      )}
    </div>
  );
};

export default Todos;
