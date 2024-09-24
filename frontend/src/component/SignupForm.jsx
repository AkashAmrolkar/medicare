import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { useRegisterUserMutation } from '../store/slices/authSlice'
import { useNavigate } from 'react-router-dom'

const SignupForm = () => {
    const navigate = useNavigate()
    const [registerUser, {isLoading, isError, isSuccess}] = useRegisterUserMutation()
    const initialUserData = {
        fullName: '',
        email: '',
        phone: '',
        password: '',
    }
    const [data, setData] = useState(initialUserData)
    const handleChange = (e) =>{
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            const registerUserData = await registerUser(data).unwrap();
            toast.success('Registered successful!');
            navigate('/')
            setData(initialUserData)
        } catch (error) {
            console.log(error)
            toast.error('Email / Mobile alredy exist');
        }
        
    }

  return (
    <form className='flex flex-col gap-5'>
        <div className='flex flex-wrap gap-5'>
            <input type='text' placeholder='Enter Full Name' value={data.fullName} name='fullName' onChange={handleChange} className='flex-1 p-3 rounded-xl border border-gray-300 focus:outline-none' required />
        </div>
        <div>
              <input
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none"
                type="email"
                name="email"
                id="email"
                value={data.email}
                onChange={handleChange}
                placeholder='Email'
                required
              />        </div>
        <div>
            <input type='text' placeholder='Enter Phone' value={data.phone} name='phone' onChange={handleChange} className='w-full p-3 rounded-xl border border-gray-300 focus:outline-none' required />
        </div>
        <div>
            <input type='password' placeholder='Enter Password' value={data.password} name='password' onChange={handleChange} className='w-full p-3 rounded-xl border border-gray-300 focus:outline-none' required />
        </div>
        <button className='w-full text-white bg-[#09e5ab] p-3 rounded-xl font-semibold text-lg opacity-100 disabled:opacity-30' onClick={handleSubmit}  disabled={(!data.email || !data.fullName || !data.phone|| !data.password)}>Register</button>
    </form>
  )
}

export default SignupForm