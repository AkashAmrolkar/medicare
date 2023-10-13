import React from 'react'
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const reviews = [
  {
  'name': 'Akash Amrolkar',
  'comment': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    'name': 'Vaibhav Patil',
    'comment': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    'name': 'Pratik Mali',
    'comment': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    'name': 'Akash Amrolkar',
    'comment': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },

]
import patientAvatar from '../assets/images/patient-avatar.png';
import Star from '../assets/images/star.png'
const TestimonialComponent = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
      {
        reviews.map((review, key)=>{
          return(
            <SwiperSlide key={key}>
          <div className='py-[30px] px-5 rounded-3'>
            <div className='flex items-center gap-[15px] mb-4'>
              <img src={patientAvatar} alt="Patient Avatar" />
              <div className='flex flex-col gap-2'>
                <h4 className='text-[18px] leading-[30px] font-semibold text-black'>
                  {review.name}
                </h4>
                <div className='flex items-center gap-2'>
                  <img src={Star} alt="star" width={18} height='auto' />
                  <img src={Star} alt="star" width={18} height='auto' />
                  <img src={Star} alt="star" width={18} height='auto' />
                  <img src={Star} alt="star" width={18} height='auto' />
                  <img src={Star} alt="star" width={18} height='auto' />
                </div>
              </div>
            </div>
            <p>{review.comment}</p>
          </div>
        </SwiperSlide>
          )
        })
      }
      </Swiper>

    </div>
  )
}

export default TestimonialComponent