import { useState } from 'react'
import {AiFillStar} from 'react-icons/ai'

const DoctorsFeedback = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <form action=''>
    <h3 className='text-base leading-6 font-semibold mb-4'>How would you rate the overall experience?</h3>
    <div>
      {[...Array(5).keys()].map((_, index) => {
        index +=1;
        return(
          <button 
            key={index} 
            type='button' 
            className={`${index <= (rating && hover) || hover ? "text-yellow-400": "text-gray-400"} bg-transparent border-none outline-none text-[22px] cursor-pointer`} 
            onClick={()=> setRating(index)}
            onMouseEnter={()=> setHover(index)} 
            onMouseLeave={()=> setHover(rating)}
            onDoubleClick={()=> {
              setHover(0)
              setRating(0)
            }}
            >
            <span>
              <AiFillStar />
            </span>
          </button>
        );
      })}
    </div>
    </form>
    
  )
}

export default DoctorsFeedback