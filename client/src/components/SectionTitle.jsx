import React from 'react'

const SectionTitle = ({ title }) => {
  return (
    <div className='flex gap-10 items-center py-10 '>
      <h1 className='text-3xl text-yellow-300 flex items-center w-1/4'>{title}</h1>
      <div className='w-full h-[0.5px] bg-tertiary'></div>
    </div>
  )
}

export default SectionTitle
