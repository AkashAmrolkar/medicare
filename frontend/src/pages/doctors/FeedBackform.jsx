import React, {useState} from 'react'
import {AiFillStar} from 'react-icons/ai'

const FeedBackform = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [reviewText, setReviewText] = useState('')
    const handleSubmitReview = async(e) =>{
        e.preventDefault();
    }
  return (
    <div>
        <form action=''>
            <div>
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
            </div>
            <div className='mt-[30px]'>
                <h3 className='text-gray-700 text-[16px] leading-6 font-semibold mb-4 mt-3'>Share your feedback or suggestion here: </h3>
                <textarea className='border border-solid border-[#0066ff34 focus:outline outline-gray-700] w-full px-4 py-3 rounded-md' rows='5' placeholder='Write your feedback here' onChange={e=> setReviewText(e.target.value)}></textarea>
            </div>
            <button className=" bg-blue-700 border rounded-full font-medium text-white text-xl px-5 py-4" onClick={handleSubmitReview}>Submit Feedback</button>
        </form>
    </div>
  )
}

export default FeedBackform