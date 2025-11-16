/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

const App3 = () => {
    const [render, setRender] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setRender(false)
        }, 10000);
    },[])

  return (
    <div>
        
      {render ? <MyComp/> : <div></div>}
    </div>
  )
}

function MyComp(){
    useEffect(() => {
        console.error("Comp is mounted")
        return () => {
            console.log("Comp is unmounted")
        }
    }, [])
    return (
        <div>
            From Inside my component
        </div>
    )
}

export default App3
