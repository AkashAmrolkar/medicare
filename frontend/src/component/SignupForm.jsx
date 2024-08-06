import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { useRegisterUserMutation } from '../store/slices/authSlice'

const SignupForm = () => {

    const [registerUser, {isLoading, isError, isSuccess}] = useRegisterUserMutation()
    const [data, setData] = useState({
        fullName: '',
        email: '',
        phone: '',
        password: '',
    })
    const handleChange = (e) =>{
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const registerUserData = await registerUser(data)
        setData(data)
    }

  return (
    <form className='flex flex-col gap-5'>
        <div className='flex flex-wrap gap-5'>
            <input type='text' placeholder='Enter Full Name' value={data.fullName} name='fullName' onChange={handleChange} className='flex-1 p-3 rounded-xl border border-gray-300 focus:outline-none' required />
        </div>
        <div>
            <input type='email' placeholder='Enter Email' value={data.email} name='email' onChange={handleChange} className='w-full p-3 rounded-xl border border-gray-300 focus:outline-none' required />
        </div>
        <div>
            <input type='text' placeholder='Enter Phone' value={data.phone} name='phone' onChange={handleChange} className='w-full p-3 rounded-xl border border-gray-300 focus:outline-none' required />
        </div>
        <div>
            <input type='password' placeholder='Enter Password' value={data.password} name='password' onChange={handleChange} className='w-full p-3 rounded-xl border border-gray-300 focus:outline-none' required />
        </div>
        <button className='wifull text-white bg-[#09e5ab] p-3 rounded-xl font-semibold text-lg' onClick={handleSubmit}>Register</button>
    </form>
  )
}

export default SignupForm