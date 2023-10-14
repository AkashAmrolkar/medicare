import React from 'react'
import doctorImg from '../../assets/images/doctor-img02.png'
const DoctorDetails = () => {
  return (
    <>
      <section className='py-10'>
        <div className='max-w-[1170px] px-5 mx-auto'>
          <div className='grid md:grid-cols-3 gap-[50px]'>
            <div className='md:col-span-2'>
              <div className='flex items-center gap-5'>
                <figure>
                  <img src={doctorImg} alt='' className='w-full' />
                </figure>
                <div className='flex flex-col gap-4'>
                  <span className='bg-[#ccf0f3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded'>Surgeon</span>
                  <h3 className='text-headingColor text-[22px] font-bold'>Muhibur Rahman</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default DoctorDetails