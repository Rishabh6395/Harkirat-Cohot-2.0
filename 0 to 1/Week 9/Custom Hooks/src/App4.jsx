/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

function useUsers(n){
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setInterval(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(async (res)=>{
                const json = await res.json()
                setUser(json)
                setLoading(false)
            })
        }, n * 10000);
        
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(async (res)=>{
                const json = await res.json()
                setUser(json)
                setLoading(false)
        })
    }, [n])

    return {user, loading};
}

const App4 = () => {

    const {user, loading} = useUsers(5)
    if(loading){
        return <div>Loading...</div>
    }

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

export default App4
