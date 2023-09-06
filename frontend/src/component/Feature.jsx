import React from 'react'

import { BsArrowRight } from 'react-icons/bs'

const Feature = ({data}) => {
  return (
    <div className='flex flex-col justify-center items-center gap-6'>
        <img src={data.img} alt={data.title} className=' object-contain h-36 w-auto' />
        <p className='text-semibold text-xl text-center'>{data.title}</p>
        <p className='text-normal text-lg text-gray-600 text-center'>{data.content}</p>
        <a href={data.link} className='border-gray-600 border rounded-full p-3'> <BsArrowRight className='text-gray-600' /> </a>
    </div>
  )
}

export default Feature