/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const App2 = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
      <Count count={count}/>
      <Buttons count={count} setCount={setCount}/>
    </div>
  )
}

function Count({count}) {
    return <div>
        {count}
    </div>
}

function Buttons({count, setCount}){
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                Increasing Count..
            </button>
            <button onClick={() => setCount(count - 1)}>
                Decarsing Count..
            </button>
        </div>
    )
}

export default App2
