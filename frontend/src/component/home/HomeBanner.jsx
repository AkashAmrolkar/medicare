
 import heroimg1 from '../../assets/images/hero-img01.png'
 import heroimg2 from '../../assets/images/hero-img02.png'
 import heroimg3 from '../../assets/images/hero-img03.png'
 const HomeBanner = () => {

    const data = [
        {
            num: "30+",
            text: "Years of Experience",
            color:"yellow"
        },
        {
            num: "15+",
            text: "Clinic Location",
            color:"violet"
        },
        {
            num: "100%",
            text: "Patient Satisfaction",
            color:"blue"
        }
    ]
    
   return (
     <>
         <div className="grid grid-cols-1 md:grid-cols-2 py-16">
             <div>
                <div className='mb-10'>
                    <h2 className='text-left text-4xl font-bold mb-6 text-black '>We help patients <br /> live a healthy,<br />longer life</h2>
                    <p className='text-xl text-gray-500 mb-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <button className='bg-blue-700 text-white py-3 px-6 rounded-3xl font-bold'>Request an Appointment</button>
                </div>
                <div className='flex flex-wrap justify-start gap-5'>
                {
                    data.map((dt, index)=>{
                        return(
                            <div key={index}> 
                                <p className='text-4xl font-bold text-black mb-6'>{dt.num}</p>
                                <p className='text-gray-500 text-xl'>{dt.text}</p>
                            </div>
                        )
                        
                    })
                }
                </div>
                 
             </div>
             <div>
                <div className="flex gap-4 justify-center ">
                     <div>
                         <img src={heroimg1} alt='' />
                     </div>
 
                     <div className="flex flex-col mt-10 gap-4 justify-center items-center">
                         <div>
                             <img src={heroimg2} alt='' />
                         </div>
                         <div>
                             <img src={heroimg3} alt='' />
                         </div>
                     </div>
                </div>
             </div>
         </div>
     </>
   )
 }
 
 export default HomeBanner