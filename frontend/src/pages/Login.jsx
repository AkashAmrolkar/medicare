import  { useState } from 'react'
import  axios from 'axios'
import { useLoginUserMutation } from '../store/slices/authSlice'
const Login = () => {

  //Initially user value
  const data = {
    email: '',
    password: ''
  }

  const [userData, setUserData] = useState(data)

  // handle change function
  const handleChange = (e) =>{
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    })
  }

  const [loginUser, {isError, isLoading, isSuccess}] = useLoginUserMutation()

  const handleSubmit = async(e) => {
    e.preventDefault();
    await loginUser(userData)
    setUserData(data);
  }

  return (
    <div className='container py-10 mx-auto'>
      <div className='h-[70vh] flex justify-center items-center'>
        <form className='flex flex-col justify-center items-center gap-4 bg-white shadow sm:mx-3 px-10 py-12'>
          <div className='filed mb-4 flex flex-col gap-2'>
            <label htmlFor='email'>Email:</label>
            <input className='h-10 border px-3 border-teal-500 rounded-3xl' id='email' type='text' value={userData.email} onChange={handleChange} name='email' placeholder='Email' required />
          </div>
          <div className='filed mb-4 flex flex-col gap-2'>
            <label htmlFor='password'>Password:</label>
            <input className='h-10 border px-3 border-teal-500 rounded-3xl' id='password' type='password' value={userData.password} onChange={handleChange} name='password' placeholder='Password' required />
          </div>
          <button type='submit' className=' bg-teal-500 border border-transparent rounded-3xl text-xl font-medium text-white px-8 py-2' onClick={handleSubmit}>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login