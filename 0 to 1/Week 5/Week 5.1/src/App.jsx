/* eslint-disable no-unused-vars */
import { useState } from "react";

function Todo({ title, description, status }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>
        <strong>Status:</strong> {status}
      </p>
    </div>
  );
}

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Go to gym",
      description: "Go to gym at 5-7",
      status: "Completed"
    },
    {
      title: "Study DSA",
      description: "Study DSA 5-7 hours",
      status: "Not Completed"
    },
    {
      title: "Read a book",
      description: "Read for 1 hour before bed",
      status: "Completed"
    },
  ]);

  return (
    <div>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          title={todo.title}
          description={todo.description}
          status={todo.status}
        />
      ))}
    </div>
  );
}

export default App;
