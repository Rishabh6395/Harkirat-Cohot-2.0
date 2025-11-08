/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'
import BGChanger from './Components/BGChanger'
import TempBG from './Components/TempBG'
import ParaGen from './Components/ParaGen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=''>
        {/* <Card/> */}
        {/* <BGChanger/> */}
        {/* <TempBG/> */}
        <ParaGen/>
      </div>
    </>
  )
}

export default App
