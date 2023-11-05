import { useState } from 'react'
import signUpImg from '../assets/images/signup.gif'
const SignUp = () => {
  const [FormData, setFormData] = useState({

    email: '',
    password: '',
    name: '',
    role: '',
    gender: '',
    photo: ''
  })

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({
      ...FormData,
      [e.target.name]: e.target.value
    })
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/auths/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(FormData),
      });

      if (response.status === 201) {
        // Data was successfully saved
        console.log("data updated");
        // You can add further handling here
        alert("Successfully registered..!!");
      } else {
        // Handle errors
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  return (
    <div className='container mx-auto h-screen flex items-center'>
      <div className=' grid grid-cols-2 items-center'>
        <div>
          <img src={signUpImg} alt="signup" width='auto' height='auto' className=' w-full mx-auto' />
        </div>
        <div>
          <form action='' onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-4 bg-white shadow px-10 py-12 w-full mx-auto'>
            <div className='filed mb-4 flex flex-col gap-2'>
              <label htmlFor='email'>Email:</label>
              <input className='h-10 border px-3 border-teal-500 rounded-3xl w-full' id='email' type='email' value={FormData.email} onChange={handleChange} name='email' placeholder='test@gmail.com' required />
            </div>
            <div className='filed mb-4 flex flex-col gap-2'>
              <label htmlFor='password'>Password</label>
              <input className='h-10 border px-3 border-teal-500 rounded-3xl w-full' id='password' type='password' value={FormData.password} onChange={handleChange} name='password' placeholder='Password' required />
            </div>
            <div className='filed mb-4 flex flex-col gap-2'>
              <label htmlFor='name'>Full Name:</label>
              <input className='h-10 border px-3 border-teal-500 rounded-3xl w-full' id='name' type='text' value={FormData.name} onChange={handleChange} name='name' placeholder='Full Name' required />
            </div>
            <div className='grid grid-cols-2 gap-5'>
              <div className='filed mb-4 flex flex-col gap-2'>
                <label htmlFor='role'>Select Role:</label>
                <select className='h-10 border px-3 border-teal-500 rounded-3xl w-full' id='role' name='role' value={FormData.role} onChange={handleChange}>
                  <option value="">Select an option</option>
                  <option value="patient">Patient</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              <div className='filed mb-4 flex flex-col gap-2'>
                <label htmlFor='gender'>Select Gender:</label>
                <select className='h-10 border px-3 border-teal-500 rounded-3xl w-full' id='gender' name='gender' value={FormData.gender} onChange={handleChange}>
                  <option value="">Select an option</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className='filed mb-4 flex flex-col gap-2'>
              <label htmlFor='profileimg'>Select Profile Image:</label>
              <input className='h-10 px-3' id='profileimg' type='file' value={FormData.profileimg} onChange={handleChange} name='profileimg' />
            </div>

            <button type='submit' className=' bg-teal-500 border border-transparent rounded-3xl text-xl font-medium text-white px-8 py-2'>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp