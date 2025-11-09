/* eslint-disable no-unused-vars */
import React from 'react'

const Revenue = ({title, orderCount, count, amount}) => {
    
  return (
    <div className='bg-white rounded-xl shadow-2xl p-3 m-4 hover:bg-blue-500'>
      <div className=''>
        {title}?
      </div>
      <div className='flex justify-between'>
        <div className='font-semibold text-2xl'>
            ${amount}
        </div>
        
        {orderCount ? <div className='text-blue-800 underline font-semibold'>
        {count} order(s) {">"}
         </div>:null}
      </div>
      
        
      </div>
  )
}

export default Revenue
