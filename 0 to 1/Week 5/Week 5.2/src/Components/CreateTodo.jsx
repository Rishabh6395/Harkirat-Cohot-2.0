import React, { useState } from 'react'

const CreateTodo = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

  return (
    <div style={{background: ""}}>
      <input style={{padding: 10, margin: 10}} 
      type="text" id='title' placeholder='title' onChange={function(e){
        setTitle(e.target.value);
      }}></input>
      <br />
      <input  style={{padding: 10, margin: 10}} 
       type="text" id='description' placeholder='description'  onChange={function(e){
        setDescription(e.target.value);
      }}></input>
        <br />
      <button  style={{padding: 10, margin: 10}} 
      onClick={() => {
        fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
                title: title,
                description: description
            }),
            headers:{
                "contentType": "application/json"
            }
        }).then(async function (res) {
            const json = await res.json()
            alert("todo added")
        })
      }}
      >Add a todo</button>
    </div>
  )
}

export default CreateTodo
