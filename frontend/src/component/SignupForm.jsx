import React, { useState } from 'react'

const SignupForm = () => {
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    })
    const [phone, setPhone] = useState('')
    const handleChange = (e) =>{
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }
    const handlePhoneNumberChange = (e) => {
        const value = e.target.value;
        const formattedValue = value.replace(/\D/g, '').slice(0, 10);
        setPhone(formattedValue);
    }
  return (
    <form className='flex flex-col gap-5'>
        <div className='flex flex-wrap gap-5'>
            <input type='text' placeholder='Enter First Name' value={data.firstName} name='firstName' onChange={handleChange} className='flex-1 p-3 rounded-xl border border-gray-300 focus:outline-none' required />
            <input type='text' placeholder='Enter Last Name' value={data.lastName} name='lastName' onChange={handleChange} className='flex-1 p-3 rounded-xl border border-gray-300 focus:outline-none' required />
        </div>
        <div>
            <input type='email' placeholder='Enter Email' value={data.email} name='email' onChange={handleChange} className='w-full p-3 rounded-xl border border-gray-300 focus:outline-none' required />
        </div>
        <div>
            <input type='text' placeholder='Enter Phone' value={phone} name='phone' onChange={handlePhoneNumberChange} className='w-full p-3 rounded-xl border border-gray-300 focus:outline-none' required />
        </div>
        <div>
            <input type='password' placeholder='Enter Password' value={data.password} name='password' onChange={handleChange} className='w-full p-3 rounded-xl border border-gray-300 focus:outline-none' required />
        </div>
        <button className='wifull text-white bg-[#09e5ab] p-3 rounded-xl font-semibold text-lg'>Register</button>
    </form>
  )
}

export default SignupForm