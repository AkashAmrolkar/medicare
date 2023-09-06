import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const ServiceComponent = ({data, index}) => {
    const dynamicStyle = {
        backgroundColor: data.bgColor,
        color: data.textColor,
        height:30,
        width:30
        // Add more styles as needed
      };
  return (

    <>

    <div className='flex flex-col gap-6'>
        <p className='font-semibold text-xl'>{data.name}</p>
        <p className='text-normal text-lg text-gray-600'>{data.desc}</p>
        <div className='flex justify-between items-center'>
            <a href='#' className='border-gray-600 border rounded-full p-3'> <BsArrowRight className='text-gray-600' /> </a>
            <p style={dynamicStyle} className='flex justify-center items-center'>{index+1}</p>
        </div>
        
    </div>
    </>
    
  )
}

export default ServiceComponent