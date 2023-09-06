import React from 'react'
import HomeBanner from '../component/home/HomeBanner'
import MedicalServces from '../component/home/MedicalServces'
import About from '../component/About'
import Services from '../component/home/Services'
import OurDoctors from '../component/home/OurDoctors'
import Faq from '../component/home/Faq'
import Testimonial from '../component/home/Testimonial'

const Home = () => {
  return (
    <div className='container mx-auto py-16 px-4'>
      <HomeBanner />
      <MedicalServces />
      <About />
      <Services />
      <OurDoctors />
      <Faq />
      <Testimonial />
    </div>
  )
}

export default Home