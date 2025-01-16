import React from 'react'

export default function layout({ children }) {
  return (
    <div>
      <h1 className='font-bold text-xl text-red-600 underline'>POSTS Layout</h1>

      {children}
    </div>
  )
}
