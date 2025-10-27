/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import CreateTodo from './Components/CreateTodo'
import Todo from './Components/Todo'

function App() {
  const [todos, setTodos] = useState([])

  fetch("http://localhost:3000/todo").then(async function (res) {
    const json = await res.json()
    setTodos(json.todos)
  })

  return (
    <>
      <div>
        <CreateTodo/>
        <Todo todos={todos}/>
      </div>
    </>
  )
}

export default App
