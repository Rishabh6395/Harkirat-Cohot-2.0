/* eslint-disable no-unused-vars */
import { memo, useState } from "react";

let counter = 4;

function App() {
  const [todos, setTodos] = useState([{
    id: 1,
    title: "go to gym",
    description: "go to gym at 5"
  },
  {
    id: 2,
    title: "study japanese",
    description: "study japanese at 5"
  },
  {
    id: 3,
    title: "learn some editing",
    description: "some editing at 5"
  }
]);

function addTodo(){
  setTodos([...todos, {
    id: counter++,  
    title: Math.random(),
    description: Math.random()
  }])

  // const newTodos = []
  // for(let i =0; i<todos.length; i++){
  //   newTodos.push(todos[i]);
  // }
  // newTodos.push({
  //   id: 4,
  //   title: Math.random(),
  //   description: Math.random()
  // })
  // setTodos(newTodos)
}
  
  return (
    <div>
      <button onClick={addTodo}>Add a todo</button>
      {todos.map(todo => <Todo key={todo.id} id={todo.id} title={todo.title} description={todo.description}/>)}
    </div>
  );
}


function Todo({ id, title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{id}</h2>
      <h4>{description}</h4>
    </div>
  );
}



export default App;
