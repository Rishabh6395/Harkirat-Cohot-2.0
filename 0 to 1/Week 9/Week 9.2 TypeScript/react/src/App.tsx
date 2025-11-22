/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Todo title='hi'description='lol'/>
    </>
  )
}

interface TodoProp{
  title: string,
  description?: string
}

function Todo(props: TodoProp){
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default App
