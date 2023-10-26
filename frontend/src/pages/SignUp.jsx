import { useState } from 'react'
const signUp = () => {
  const [val, setVal] = useState({
    first_name: '',
    last_name: '',
    email: '',
    contact: ''
  })

  const handleChange = (e) => {
    e.preventDefault();
    setVal({
      ...val,
      [e.target.name] : e.target.value
    })
  }
  return (
    <div className='container mx-auto h-[70vh] flex justify-center items-center'>
      <form action='' className='flex flex-col justify-center items-center gap-4 bg-white shadow px-10 py-12 w-fit mx-auto'>
        <div className='filed mb-4 flex flex-col gap-2'>
          <label htmlFor='first_name'>First Name:</label>
          <input className='h-10 border px-3 border-teal-500 rounded-3xl' id='first_name' type='text' value={val.first_name} onChange={handleChange} name='first_name' placeholder='First Name' required />
        </div>
        <div className='filed mb-4 flex flex-col gap-2'>
          <label htmlFor='last_name'>Last Name:</label>
          <input className='h-10 border px-3 border-teal-500 rounded-3xl' id='last_name' type='text' value={val.last_name} onChange={handleChange} name='last_name' placeholder='Last Name' required />
        </div>
        <div className='filed mb-4 flex flex-col gap-2'>
            <label htmlFor='email'>Email:</label>
            <input className='h-10 border px-3 border-teal-500 rounded-3xl' id='email' type='email' value={val.email} onChange={handleChange} name='email' placeholder='test@gmail.com' required />
          </div>
        <div className='filed mb-4 flex flex-col gap-2'>
          <label htmlFor='password'>Password:</label>
          <input className='h-10 border px-3 border-teal-500 rounded-3xl' id='password' type='password' value={val.password} onChange={handleChange} name='password' placeholder='Password' required />
        </div>
        <button type='submit' className=' bg-teal-500 border border-transparent rounded-3xl text-xl font-medium text-white px-8 py-2'>Login</button>
      </form>
    </div>
  )
}

export default signUp