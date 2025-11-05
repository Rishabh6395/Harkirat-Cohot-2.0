/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Dashboard from './Components/Dashboard'
import { Landing } from './Components/Landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{background: "black"}}>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/" element={<Landing/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
