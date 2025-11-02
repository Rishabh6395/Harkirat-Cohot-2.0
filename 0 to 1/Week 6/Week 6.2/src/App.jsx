/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
    
  const [bttn , setBttn] = useState(1) 

  function clickBtt(e){
    let bt = e.target.id
    setBttn(bt)
  }

  return (
    <div>
      <button onClick={clickBtt} id='1'>1</button>
      <button onClick={clickBtt} id='2'>2</button>
      <button onClick={clickBtt} id='3'>3</button>
      <button onClick={clickBtt} id='4'>4</button>
      <button onClick={clickBtt} id='5'>5</button>
      <User id={bttn}/>
    </div>
  )

  function User({id}){
    
    const [user, setUser] = useState([])

    useEffect(()=>{
      axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(function(res){
        setUser(res.data)
      })
    }, [id])

    return <div>
      <h1>
        {user.id}
      </h1>

      <h4>
        {user.email}
      </h4>
    </div>

  }
}

export default App
