import React from 'react'

const Card = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-zinc-700">
      <div className="bg-white rounded-xl shadow-lg p-6 w-80 text-center">
        <img
          src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
          alt="Profile"
          className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-cyan-600"
        />
        <h2 className="text-xl font-semibold text-gray-800">John Doe</h2>
        <p className="text-gray-500 text-sm mb-4">Software Engineer</p>
        <p className="text-gray-600 text-sm">
          Passionate about building scalable web apps and writing clean code.
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          {/* <button className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition">
            Follow
          </button>
          <button className="px-4 py-2 border border-cyan-600 text-cyan-600 rounded-lg hover:bg-cyan-50 transition">
            Message
          </button> */}
          <div className='flex justify-center space-x-8 mr-4'>
            <div className='text-center'>
                <h2 className='font-semibold'>80K</h2>
                <h3>Followers</h3>
            </div>
          </div>
          <div className='flex justify-center space-x-8 mx-4'>
            <div className='text-center'>
                <h2 className='font-semibold'>803K</h2>
                <h3>Likes</h3>
            </div>
          </div>
          <div className='flex justify-center space-x-8 ml-6'>
            <div className='text-center'>
                <h2 className='font-semibold'>1.4K</h2>
                <h3>Photos</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
