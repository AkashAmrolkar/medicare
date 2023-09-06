import React from 'react';
import feature1 from '../../assets/images/icon01.png'
import feature2 from '../../assets/images/icon02.png'
import feature3 from '../../assets/images/icon03.png'
import Feature from '../Feature';
const MedicalServces = () => {
    const Features = [
        {
            img: feature1,
            title: "Find a Doctor",
            content: "World-class care for everyone. Our health system offers unmatched, expert health care",
            link: '/#'
        },
        {
            img: feature2,
            title: "Find a Location",
            content: "World-class care for everyone. Our health system offers unmatched, expert health care",
            link: '/#'
        },
        {
            img: feature3,
            title: "Book Appointment",
            content: "World-class care for everyone. Our health system offers unmatched, expert health care",
            link: '/#'
        },
    ]

  return (
    <>
        <div className=' md:w-2/6 mx-auto'>
            <h3 className=' text-3xl font-semibold text-black text-center mb-4'>
                Providing the best medical services
            </h3>
            <p className='text-xl text-gray-600 font-normal text-center'>World-class care for everyone. Our health system offers unmatched, expert health care</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-9'>
            {
                Features.map((feature, index)=>{
                    return(
                        <Feature data={feature} key={index} />
                    )
                })
            }
        </div>
        
    
    </>
  )
}

export default MedicalServces