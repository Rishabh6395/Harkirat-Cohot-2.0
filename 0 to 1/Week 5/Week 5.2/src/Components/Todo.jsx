import React from "react";

const Todo = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo._id || todo.title}>
          {" "}
          // use a unique ID if possible
          <h1>{todo.title}</h1>
          <h2>{todo.description}</h2>
          <button>{todo.completed ? "Completed" : "Mark as Completed"}</button>
        </div>
      ))}
    </div>
  );
};

export default Todo;
