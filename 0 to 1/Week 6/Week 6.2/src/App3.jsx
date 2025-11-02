/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import axios from 'axios'

// Custom hooks
function useCustomHook(){
    const [todos, setTodos] = useState([])
    useEffect(() => {
        axios.get("")
        .then((res) => {
            setTodos(res.data)
        })
    }, [])
}

const App3 = () => {
    const todos = useCustomHook()
  return (
    <div>
      {todos}
    </div>
  )
}

export default App3
