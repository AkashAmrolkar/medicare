import React from 'react'
import  Doctors from '../../assets/data/doctors'
import DoctorComponent from '../DoctorComponent'

const OurDoctors = () => {
  return (
    <>
        <div className='md:w-2/6 mx-auto'>
            <h3 className=' text-3xl font-semibold text-black text-center mb-4'>
                Our medical services
            </h3>
            <p className='text-xl text-gray-600 font-normal text-center'>World-class care for everyone. Our health system offers unmatched, expert health care</p>
        </div>
        <div className=' grid grid-cols-1 md:grid-cols-3 gap-10 py-16'>
            {
                Doctors.map((Doctor, index)=>{
                    return(
                        <DoctorComponent data={Doctor} key={index} index={index} />
                    )
                })
            }
        </div>
    </>
  )
}

export default OurDoctors