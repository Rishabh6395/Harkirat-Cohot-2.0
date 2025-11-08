/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'
import BGChanger from './Components/BGChanger'
import TempBG from './Components/TempBG'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-screen bg-red-500'>
        {/* <Card/> */}
        {/* <BGChanger/> */}
        <TempBG/>
      </div>
    </>
  )
}

export default App
