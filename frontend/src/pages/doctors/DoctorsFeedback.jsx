import { useState } from 'react'
import {AiFillStar} from 'react-icons/ai'
import avatar from '../../assets/images/avatar-icon.png'
import {formateDate} from '../../utils/FormateDate'
import FeedBackform from './FeedBackform'
const DoctorsFeedback = () => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false)
  return (
    <div className="py-10">
      <h4 className='text-[20px] leading-6 font-bold text-black mb-[30px]'>All Reviews (272)</h4>
      <div className='flex justify-between gap-10 mb-[30px] '>
        <div className='flex gap-3'>
          <figure>
            <img className='w-full' src={avatar} alt='Avatar' />
          </figure>

          <div>
            <h5 className='text-[16px] leading-6 text-blue-500 font-bold'>Ali Ahmed</h5>
            <p className='text-[14px] leading-6 text-gray-700 '>{formateDate('02-14-2023')}</p>
            <p className='mt-3 font-medium text-[15px]'>Good services, highly recommended</p>
          </div>
        </div>
        <div className='flex gap-1'>
          {[...Array(5).keys()].map((_, index)=>(
              <AiFillStar key={index} color='#0067ff' />
            )
        )}
        </div>
      </div>
      
      {
        !showFeedbackForm && 
        <div className='text-center'>
            <button className='btn bg-blue-700 border rounded-full font-medium text-white text-xl px-5 py-4' onClick={()=>setShowFeedbackForm(true)}>Give Feedback</button>
      </div>
      }

      {
        showFeedbackForm && 
        <div>
            <FeedBackform />
      </div>
      }
    </div>
    
    
  )
}

export default DoctorsFeedback