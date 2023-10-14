import React, {useState} from 'react'
import doctors from '../../assets/data/doctors'
import DoctorComponent from '../../component/DoctorComponent'

const Doctors = () => {
  const [val, setVal] = useState('');
  const handleChange = (e)=>{
    e.preventDefault();
    setVal(e.target.value)
    
  }
  return (
    <>
    <section className=' bg-[#fff9ea] text-center py-20'>
      <div className='container mx-auto'>
        <h2 className='heading text-4xl'>Find a Doctor</h2>
        <div className='max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between'>
          <input 
            type='search'
            className='py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor'
            placeholder='Search Doctor'
            onChange={handleChange} value={val} />
            <button className='btn mt-o rounded-[0px] rounded-r-md bg-blue-600 py-4 px-3 text-white flex justify-center font-bold'>Search</button>
        </div>
      </div>
    </section>
    <section>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-16 items-center'>
          {
            doctors.map((Doctor, index)=>{
                  return(
                      <DoctorComponent data={Doctor} key={index} index={index} />
                  )
              })
          }
        </div>
      </div>
    </section>
    </>
    
    
  )
}

export default Doctors