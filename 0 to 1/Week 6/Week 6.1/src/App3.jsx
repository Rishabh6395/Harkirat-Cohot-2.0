/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

const App3 = () => {
    const [user, setUser] = useState([])

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(async (res)=>{
        const json = await res.json()
        setUser(json)
      })
    }, [])
    
  return (
    <div>
      {user.map(todo => <User key={todo.id} name={todo.name} email={todo.email}/>)}
    </div>
  )

  function User({name, email}){
    return(
    <div>
        <h1>
            {name}
        </h1>
        <h2>
            {email}
        </h2>
    </div>
    )   
  }
}

export default App3
