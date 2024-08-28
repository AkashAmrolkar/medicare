import  { useState } from 'react'
import  axios from 'axios'
import { useLoginUserMutation } from '../store/slices/authSlice'
import { toast, Bounce } from 'react-toastify'
import signUpImg from '../assets/images/login-banner.png'
import Loader from '../component/Loader'


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
    try {
      const loginUserData = await loginUser(userData)
      setUserData(data);      
      if(isSuccess){
        toast.success('Login successful!');
      }
      if(isError){
        toast.error('Invalid Email or Password');
      }
     
    }  catch (error) {
      console.log(error)
  }
    
  }

  return (
    <>
    {isLoading && <Loader />}
    <div className='container mx-auto my-12'>
      <div className=' w-full md:w-[80%] mx-auto flex items-center gap-5 justify-center'>
        <div className='flex-1 hidden md:block'>
          <img src={signUpImg} alt="signup" width='auto' height='auto' className='w-full mx-auto' />
        </div>
        <div className='flex-1 border border-gray-200 rounded-xl py-8 px-5'>
          <h1 className=' text-2xl font-medium mb-5'>Login</h1>
          <form className=''>
            <div className='filed mb-4 flex flex-col gap-2 w-full md:w-3/5'>
              <label htmlFor='email'>Email:</label>
              <input className='h-10 border px-3 border-teal-500 rounded-3xl' id='email' type='email' value={userData.email} onChange={handleChange} name='email' placeholder='john@gmail.com' required={true} />
            </div>
            <div className='filed mb-4 flex flex-col gap-2 w-full md:w-3/5'>
              <label htmlFor='password'>Password:</label>
              <input className='h-10 border px-3 border-teal-500 rounded-3xl' id='password' type='password' value={userData.password} onChange={handleChange} name='password' placeholder='Password' required />
            </div>
            <button type='submit' disabled={(!userData.email || !userData.password)} className=' bg-teal-500 border border-transparent rounded-3xl text-xl font-medium text-white px-8 py-2 opacity-100 disabled:opacity-30' onClick={handleSubmit}>
              {
                isLoading?'Loading': 'Login'
              }
              </button>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login