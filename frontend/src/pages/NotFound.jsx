import React from 'react'
import notFound from '.././assets/images/not-found.png'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center relative">
        <div>
            <img src={notFound} alt='' height='' width='' loading='lazy' />
        </div>
        <div className=' absolute bottom-[15%]'>
            <h1 className="text-4xl font-bold text-gray-800">Oops! That Page Can’t Be Found.</h1>
            <p className="mt-4 text-lg text-gray-600 mb-14">
            The page you are looking for was never existed.
            </p>
            <Link to='/' className='bg-primary py-5 px-8 text-white font-medium text-lg rounded-lg'>Back To Home</Link>
        </div>
    </div>
  )
}

export default NotFound