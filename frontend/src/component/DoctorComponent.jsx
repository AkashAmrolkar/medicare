import React from 'react'
import star from '../assets/images/star.png'
import { BsArrowRight } from 'react-icons/bs'

const DoctorComponent = ({data}) => {
  return (
    <>
        <div className='flex flex-col gap-6'>
            <img src={data.photo} alt={data.name}/>
            <h3 className='text-xl font-semibold text-black'>{data.name}</h3>
            <div className='flex justify-between items-center'>
                <p className='w-fit bg-blue-300 text-blue-600 p-2'>{data.specialty}</p>
                <div className='flex gap-2 items-center justify-center'>
                    <img src={star} width='20' height='20' alt='star' />
                    <p>{data.avgRating}</p>
                </div>
            </div>
            <div className='flex gap-2 items-center justify-between'>
                <p className='text-gray-500 '>{data.hospital}</p>
                <a href='#' className='border-gray-600 border rounded-full p-3'> <BsArrowRight className='text-gray-600' /> </a>
            </div>
        </div>
    </>
  )
}

export default DoctorComponent