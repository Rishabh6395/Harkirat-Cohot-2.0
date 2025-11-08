/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const BGChanger = () => {
  const [color, setColor] = useState('')

  return (
    <div
      className={`h-screen flex flex-col justify-end ${
        color === 'red'
          ? 'bg-red-400'
          : color === 'blue'
          ? 'bg-blue-400'
          : color === 'green'
          ? 'bg-green-400'
          : color === 'yellow'
          ? 'bg-yellow-400'
          : 'bg-gray-200'
      }`}
    >
      {/* Bottom Navbar */}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-inner border-t border-gray-600">
        <div className="flex justify-around items-center py-3">
          <button
            className="flex flex-col items-center text-gray-600 hover:text-red-600"
            onClick={() => setColor('red')}
          >
            <span className="text-xl mt-1">Red</span>
          </button>

          <button
            className="flex flex-col items-center text-gray-600 hover:text-blue-600"
            onClick={() => setColor('blue')}
          >
            <span className="text-xl mt-1">Blue</span>
          </button>

          <button
            className="flex flex-col items-center text-gray-600 hover:text-green-600"
            onClick={() => setColor('green')}
          >
            <span className="text-xl mt-1">Green</span>
          </button>

          <button
            className="flex flex-col items-center text-gray-600 hover:text-yellow-600"
            onClick={() => setColor('yellow')}
          >
            <span className="text-xl mt-1">Yellow</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default BGChanger
