import React from 'react'
import TestimonialComponent from '../TestimonialComponent'

const Testimonial = () => {
  return (
    <>
        <div className=' md:w-2/6 mx-auto'>
            <h3 className=' text-3xl font-semibold text-black text-center mb-4'>
                Providing the best medical services
            </h3>
            <p className='text-xl text-gray-600 font-normal text-center'>World-class care for everyone. Our health system offers unmatched, expert health care</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-9'>
            <TestimonialComponent />
        </div>
        
    
    </>
  )
}

export default Testimonial