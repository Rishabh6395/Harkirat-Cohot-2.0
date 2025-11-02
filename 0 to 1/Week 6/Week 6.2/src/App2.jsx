/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const App2 = () => {

    const [count, setCount] = useState(0)
    const [input, setInput] = useState(1)

    let counti = 0;
    for(let i =0; i< input; i++){
        counti = counti +i;
    }

  return (
    <div>
        <input
        onChange={function(e){
            setInput(e.target.value)
        }}
        type="text" placeholder='Find sum from 1 to n'></input>
        <br />
        Sum from 1 to {input} is {counti}
        <br />
      <button onClick={() => {
        setCount(count+ 1)
      }}>
        Counter ({count})
      </button>
    </div>
  )
}

export default App2
