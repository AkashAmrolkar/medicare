import React from 'react'
import { formateDate } from '../../utils/FormateDate'
const DoctorsAbout = () => {
  return (
    <div className='py-10 flex flex-col gap-4'>
        <div>
            <h3 className='text-xl font-semibold mb-4'>About of <span className='text-2xl text-cyan-500'>Muhibur Rahman</span></h3>
            <p className=' text-lg font-normal leading-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
        <div>
            <h3 className='text-xl font-semibold'>Education</h3>
            <ul className='pt-4 md:p-5'>
                <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-7'>
                    <div>
                        <span className=' text-cyan-500 text-base leading-6 font-semibold'>{formateDate("07-04-2014")}</span>
                        <p className='text-base leading-6 font-medium text-gray-600'>PHD Surgeon</p>
                    </div>
                    <p className='text-base leading-6 font-medium text-gray-600'>New Oplollo Hospital</p>
                </li>
                <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-7'>
                    <div>
                        <span className=' text-cyan-500 text-base leading-6 font-semibold'>{formateDate("05-04-2016")}</span>
                        <p className='text-base leading-6 font-medium text-gray-600'>PHD Surgeon</p>
                    </div>
                    <p className='text-base leading-6 font-medium text-gray-600'>New Oplollo Hospital</p>
                </li>
            </ul>
        </div>
        
    </div>
  )
}

export default DoctorsAbout