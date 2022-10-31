import React from 'react'

export const MenuItem = ({ text = '', icon }) => {
  return (
    <div className='flex w-full space-x-4'>
        { icon } 
        <span className='text-zinc-500 hover:text-almost-black cursor-pointer'>{ text }</span>
    </div>
  )
}
