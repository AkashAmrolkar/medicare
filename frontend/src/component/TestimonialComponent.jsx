import React from 'react'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import patientAvatar from '../assets/images/patient-avatar.png'
import Star from '../assets/images/Star.png'
const TestimonialComponent = () => {
  return (
    <div className='mt-[30px] lg:mt-[55px]'>
      <Swiper 
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{clickable: true}}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div className='py-[30px] px-5 rounded-3'>
            <div className='flex items-center gap-[15px]'>
              <img src={patientAvatar} alt="Patient Avatar" />
              <h4 className='text-[18px] leading-[30px] font-semibold text-black'>
                Akash Amrolkar
              </h4>
              <div className='flex items-center gap-[24px]'>
                <Star className='text-yellow-300 w-[18px] h-5' />
                <Star className='text-yellow-300 w-[18px] h-5' />
                <Star className='text-yellow-300 w-[18px] h-5' />
                <Star className='text-yellow-300 w-[18px] h-5' />
                <Star className='text-yellow-300 w-[18px] h-5' />
              </div>
            </div>
          
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default TestimonialComponent