import { useState } from 'react'
import signUpImg from '../assets/images/login-banner.png'
import SignupForm from '../component/SignupForm'
const Register = () => {
  return (
    <div className='container mx-auto my-12'>
      <div className=' w-full md:w-[80%] mx-auto flex items-center gap-5 justify-center'>
        <div className='flex-1'>
          <img src={signUpImg} alt="signup" width='auto' height='auto' className='w-full mx-auto' />
        </div>
        <div className='flex-1 border border-gray-200 rounded-xl py-8 px-5'>
          <h1 className=' text-2xl font-medium mb-5'>Registration</h1>
          <SignupForm />
        </div>
      </div>
    </div>
  )
}

export default Register