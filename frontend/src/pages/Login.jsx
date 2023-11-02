import  { useState } from 'react'

const Login = () => {
  const [val, setVal] = useState({
    username: '',
    password: ''
  })
  const handleChange = (e) => {
    e.preventDefault();
    setVal({
      ...val,
      [e.target.name]: e.target.value
    })
  }
  return (
    <div className='container py-10 mx-auto'>
      <div className='h-[70vh] flex justify-center items-center'>
        <form action='' className='flex flex-col justify-center items-center gap-4 bg-white shadow sm:mx-3 px-10 py-12'>
          <div className='filed mb-4 flex flex-col gap-2'>
            <label htmlFor='username'>Username:</label>
            <input className='h-10 border px-3 border-teal-500 rounded-3xl' id='username' type='text' value={val.username} onChange={handleChange} name='username' placeholder='Username' required />
          </div>
          <div className='filed mb-4 flex flex-col gap-2'>
            <label htmlFor='password'>Password:</label>
            <input className='h-10 border px-3 border-teal-500 rounded-3xl' id='password' type='password' value={val.password} onChange={handleChange} name='password' placeholder='Password' required />
          </div>
          <button type='submit' className=' bg-teal-500 border border-transparent rounded-3xl text-xl font-medium text-white px-8 py-2'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login