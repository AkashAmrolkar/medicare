import { useState } from 'react'
import React from 'react'

const SignUp = () => {
  const [FormData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    contact: '',
    role: '',
    gender: '',
  })

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({
      ...FormData,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async(FormData) =>{
    try {
      const response = await fetch('/api/form/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(FormData),
      });
  
      if (response.status === 200) {
        // Data was successfully saved
        console("data updated");
        // You can add further handling here
      } else {
        // Handle errors
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  return (
    <div className='container mx-auto h-[70vh] flex justify-center items-center'>
      <form action='' onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-4 bg-white shadow px-10 py-12 w-fit mx-auto'>
        <div className='filed mb-4 flex flex-col gap-2'>
          <label htmlFor='first_name'>First Name:</label>
          <input className='h-10 border px-3 border-teal-500 rounded-3xl' id='first_name' type='text' value={FormData.first_name} onChange={handleChange} name='first_name' placeholder='First Name' required />
        </div>
        <div className='filed mb-4 flex flex-col gap-2'>
          <label htmlFor='last_name'>Last Name:</label>
          <input className='h-10 border px-3 border-teal-500 rounded-3xl' id='last_name' type='text' value={FormData.last_name} onChange={handleChange} name='last_name' placeholder='Last Name' required />
        </div>
        <div className='filed mb-4 flex flex-col gap-2'>
          <label htmlFor='email'>Email:</label>
          <input className='h-10 border px-3 border-teal-500 rounded-3xl' id='email' type='email' value={FormData.email} onChange={handleChange} name='email' placeholder='test@gmail.com' required />
        </div>
        <div className='filed mb-4 flex flex-col gap-2'>
          <label htmlFor='role'>Select Role:</label>
          <select className='h-10 border px-3 border-teal-500 rounded-3xl w-full' id='role' name='role' value={FormData.role} onChange={handleChange}>
            <option value="">Select an option</option>
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
          </select>
        </div>
        <div className='filed mb-4 flex flex-col gap-2'>
          <label htmlFor='gender'>Select Gender:</label>
          <select className='h-10 border px-3 border-teal-500 rounded-3xl' id='gender' name='gender' value={FormData.gender} onChange={handleChange}>
            <option value="">Select an option</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button type='submit' className=' bg-teal-500 border border-transparent rounded-3xl text-xl font-medium text-white px-8 py-2'>Login</button>
      </form>
    </div>
  )
}

export default SignUp