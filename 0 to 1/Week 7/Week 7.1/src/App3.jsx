/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { CountContext } from './context'

const App3 = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
        <CountContext.Provider value={count}>
            <Count setCount={setCount}/>
        </CountContext.Provider>
    </div>
  )
}

function Count({setCount}){
    return <div>
        <CountRenderer/>
        <Buttons setCount={setCount} />
    </div>
}

function CountRenderer (){
    const count = useContext(CountContext)
    return <div>
        {count}
    </div>
}

function Buttons({ setCount}){
    const count = useContext(CountContext)
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

export default App3
