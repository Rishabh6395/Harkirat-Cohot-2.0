/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

// DEBOUNCE: like a keyup, whenever when we stop typing only then value is printing (This will help to put request in our backend. We will send only one request whenever we stop typing)......

function useDebounce(value, timeout){
    const [debouncedValue, setDebounceValue] = useState(value)

    useEffect(()=>{
        let timeoutNum = setTimeout(() => {
            setDebounceValue(value)
        },timeout)
        return () => {
            clearTimeout(timeoutNum)
        }
    },[value])
    return debouncedValue;
}

const App5 = () => {

    const [value, setValue] = useState(0)
    const debounce = useDebounce(value, 500)

  return (
    <div>

      Debounced Value: <b>{debounce}</b>
      <input type='text' onChange={e => setValue(e.target.value)}/>
    </div>
  )
}

export default App5
