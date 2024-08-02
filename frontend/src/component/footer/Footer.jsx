import React from 'react'
import footerlogo from '../../assets/images/footerlogo.png'
import { FaFacebook, FaInstagram, FaTwitter  } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-[#15558d] py-10'>
      <div className='container mx-auto flex justify-between flex-wrap gap-5'>
        <div className='flex-1'>
            <img src={footerlogo} alt='' className='mb-5'/>
            <p className='text-white mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className='flex gap-3 items-center'>
              <FaFacebook className='text-white font-medium text-xl' />
              <FaInstagram className='text-white font-medium text-xl' />
               <FaTwitter className='text-white font-medium text-xl' />
            </div>
        </div>
        <div className='flex-1'>
          
        </div>
        <div className='flex-1'></div>
        <div className='flex-1'></div>
      </div>
    </div>
  )
}

export default Footer