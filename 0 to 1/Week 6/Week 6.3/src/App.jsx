/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount(count + 1 )}>
        Count is {count}
      </button>
    </div>
  )
}

export default App
