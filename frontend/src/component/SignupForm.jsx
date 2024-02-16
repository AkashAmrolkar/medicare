import React from 'react'

const SignupForm = () => {
  return (
    <form className='flex flex-col gap-5'>
        <div className='flex flex-wrap gap-5'>
            <input type='text' placeholder='Enter First Name' value='' className='flex-1 p-3 rounded-xl border border-gray-300 focus:outline-none' required />
            <input type='text' placeholder='Enter Last Name' value='' className='flex-1 p-3 rounded-xl border border-gray-300 focus:outline-none' required />
        </div>
        <div>
            <input type='email' placeholder='Enter Email' value='' className='w-full p-3 rounded-xl border border-gray-300 focus:outline-none' required />
        </div>
        <div>
            <input type='text' placeholder='Enter Phone' value='' className='w-full p-3 rounded-xl border border-gray-300 focus:outline-none' required />
        </div>
        <div>
            <input type='password' placeholder='Enter Password' value='' className='w-full p-3 rounded-xl border border-gray-300 focus:outline-none' required />
        </div>
        <button className='wifull text-white bg-[#09e5ab] p-3 rounded-xl font-semibold text-lg'>Register</button>
    </form>
  )
}

export default SignupForm