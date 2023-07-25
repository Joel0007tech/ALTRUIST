import React from 'react'
import imageSecond from '../assets/pexels-dio-hasbi-saniskoro-3280130.jpg';
import { fixedLink } from '../constants';


const Collaborate = () => {
  return (
    <div>
       <div className='flex relative m-auto gap-3 border-orange-500
         border-t-4 border-l-4 border-b-4 border-r-4 w-[1000px] p-4 rounded-md bg-orange-500'>
          <img src={imageSecond} alt="career-img" className='h-[350px] w-[450px]'/>
          <div className='flex flex-shrink flex-col gap-9'>
          <h2 className='text-2xl font-bold text- relative bottom-1 text-white'>
          UNITE AND AMPLIFY<br/> YOUR IMPACT
          </h2>
          <p className='leading-normal text-xl text-white relative bottom-1'>
          Join forces with like-minded individuals<br/> worldwide
           to work together on meaningful projects.<br/> Share ideas,
            enhance your skills, and discover<br/> potential partners to amplify your collective<br/> impact.

          </p>
          <a href='' className=' bg-white p-3 text-center w-44
           relative rounded-md font-semibold leading-relaxed
            hover:bg-blue-300 hover:text-white top-2'>
            {fixedLink.text}
          </a>
          </div>
        </div>
    </div>
  )
}

export default Collaborate