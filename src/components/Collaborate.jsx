import React from 'react'
import imageSecond from '../assets/new-edited-collaboration.jpg';
import { cardHadings, fixedLink } from '../constants';


const Collaborate = () => {
  const Font = {
    fontFamily: 'Roboto, sans-serif',
  };
  return (
    <div>
      <div className='border-blue-500
         border-t-4 border-l-4 border-b-4 border-r-4 w-[1000px] p-4 rounded-md bg-blue-900 pb-10 m-auto sm:w-auto'>
          <h3 className='text-center font-bold text-white text-2xl uppercase pb-6' style={Font}>{cardHadings.second}</h3>
                 <div className='flex relative m-auto gap-10 sm:flex sm:flex-col'>
          <img src={imageSecond} alt="career-img" className='h-[350px] w-[450px] rounded-2xl sm:h-[250px] sm:w-[300px] sm:m-auto'/>
          <div className='flex flex-shrink flex-col gap-9'>
          <h2 className='text-2xl font-extrabold text- relative bottom-1 text-white text-center sm:m-auto' style={Font}>
          UNITE AND AMPLIFY<br/> YOUR IMPACT
          </h2>
          <p className='leading-normal text-lg text-white relative bottom-1 text-center pt-5' style={Font}>
          Join forces with like-minded individuals<br/> worldwide
           to work together on meaningful projects.<br/> Share ideas,
            enhance your skills, and discover<br/> potential partners to amplify your collective<br/> impact.

          </p>
          <a href='' className=' bg-white p-3 text-center w-44
           relative rounded-md font-semibold leading-relaxed
            hover:bg-black hover:text-white top-3 m-auto'>
            {fixedLink.text}
          </a>
          </div>
        </div>
         </div>
    </div>
  )
}

export default Collaborate