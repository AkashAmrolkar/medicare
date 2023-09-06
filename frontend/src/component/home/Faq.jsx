import React from 'react'
import faqs from '../../assets/data/faqs'
import FaqComponent from '../FaqComponent'
import FaqImg from '../../assets/images/faq-img.png'
const Faq = () => {
  return (
    <>
        <div className='grid md:grid-cols-2 gap-8 items-center justify-center'>
            <div>
                <img src={FaqImg} alt='Faq Image' />
            </div>
            <div>
                <h3 className=' mb-5 text-3xl font-bold text-left text-black'>Most questions by our beloved patients</h3>
                <div>
                    {
                        faqs.map((faq, index)=>{
                            return(
                                <FaqComponent key={index} question={faq.question} answer={faq.content} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default Faq