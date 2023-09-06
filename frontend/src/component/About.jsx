import React from 'react'
import AboutImg from '../assets/images/about.png'
import AboutCard from '../assets/images/about-card.png'
const About = () => {
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-16">
        <div className='flex justify-center items-center'>
            <div className="relative">
                <img src={AboutImg}  />
                <img src={AboutCard} className='absolute bottom-4 -right-20' />
            </div>
            
        </div>
        <div className='flex flex-col gap-7'>
            <h3 className='text-black font-bold text-4xl text-left'>Proud to be one of the nations best</h3>
            <p className='text-gray-600 font-normal text-lg text-left'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p className='text-gray-600 font-normal text-lg text-left'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <button className='bg-blue-500 border rounded-[25px] px-6 py-3 text-white font-semobold text-base w-fit'>Learn More</button>
        </div>
    </div>
   
    </>
  )
}

export default About