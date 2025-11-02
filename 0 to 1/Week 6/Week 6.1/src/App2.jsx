/* eslint-disable no-unused-vars */
import React from 'react'

const App2 = () => {
  return (
    <div>
      <CardWrapper>
        <div>
            hi there
        </div>
      </CardWrapper>
      <CardWrapper>
        <div>
            hi there2
        </div>
      </CardWrapper>
    </div>
  )


  function CardWrapper({children}){
    return <div style={{"border":"2px solid black", padding:"10px", margin: "5px"}}>
        {children}
    </div>
  } 
}

export default App2
