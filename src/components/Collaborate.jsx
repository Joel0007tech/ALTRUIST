import React from 'react'
import imageSecond from '../assets/new-collaboration.jpg';
import { cardHadings, fixedLink } from '../constants';


const Collaborate = () => {
  return (
    <div>
      <div className='border-blue-500
         border-t-4 border-l-4 border-b-4 border-r-4 w-[1000px] p-4 rounded-md bg-blue-500 pb-10 m-auto'>
          <h3 className='text-center font-bold text-white text-2xl uppercase pb-6'>{cardHadings.second}</h3>
                 <div className='flex relative m-auto gap-10'>
          <img src={imageSecond} alt="career-img" className='h-[350px] w-[450px]'/>
          <div className='flex flex-shrink flex-col gap-9'>
          <h2 className='text-2xl font-bold text- relative bottom-1 text-white'>
          UNITE AND AMPLIFY<br/> YOUR IMPACT
          </h2>
          <p className='leading-normal text-xl text-white relative bottom-1 text-justify'>
          Join forces with like-minded individuals<br/> worldwide
           to work together on meaningful projects.<br/> Share ideas,
            enhance your skills, and discover<br/> potential partners to amplify your collective<br/> impact.

          </p>
          <a href='' className=' bg-white p-3 text-center w-44
           relative rounded-md font-semibold leading-relaxed
            hover:bg-black hover:text-white top-3'>
            {fixedLink.text}
          </a>
          </div>
        </div>
         </div>
    </div>
  )
}

export default Collaborate