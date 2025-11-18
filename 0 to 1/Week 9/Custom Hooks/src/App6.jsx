/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

function useInterval(fn, timeout){
    useEffect(() => {
        setInterval(()=>{
            fn()
        }, timeout)
        return ()=> {
            clearInterval()
        }
    },[])
}       

const App6 = () => {
    const [count, setCount] = useState(0)

    useInterval(() =>  {
        setCount(c => c+1)
    },1000)

  return (
    <div>
      Timer is at {count}
    </div>
  )
}

export default App6
