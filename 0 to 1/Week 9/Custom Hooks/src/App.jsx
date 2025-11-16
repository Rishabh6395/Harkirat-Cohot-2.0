import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <MyComp/>
    </>
  )

  function MyComp(){
  const [count, setCount] = useState(0)

  function incrementCount(){
    setCount(count+1)
  }

    return (
      <div>
        <p>{count}</p>
        <button onClick={incrementCount}>Increment</button>
      </div>
    )
  }
}

export default App
