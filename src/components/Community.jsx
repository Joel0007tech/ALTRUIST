import React from 'react';
import imageThird from '../assets/community.png';
import { cardHadings, fixedLink } from '../constants';

const Community = () => {
  return (
    <div>
<div className='3 border-blue-400
         border-t-4 border-l-4 border-b-4 border-r-4 w-[1000px] p-4 rounded-md bg-blue-400 pb-8 m-auto'>
          <h3 className='text-center font-bold text-white text-2xl uppercase pb-6'>{cardHadings.third}</h3>
<div className='flex relative m-auto gap-10'>
          <img src={imageThird} alt="career-img" className='h-[350px] w-[450px]'/>
          <div className='flex flex-shrink flex-col gap-9'>
          <h2 className='text-2xl font-bold text-white relative bottom-1'>
          EMBRACE A SUPPORTIVE<br/> CHANGE-MAKING COMMUNITY
          </h2>
          <p className='leading-normal text-xl text-white relative bottom-1 text-center'>
          Whether you're an experienced professional<br/>
           or just starting out, our community welcomes you<br/>
            with open arms. Connect with passionate individuals,<br/>
             access valuable resources, receive mentorship, and<br/>
              receive guidance to thrive both personally and<br/>
               professionally. Together, let's make a difference!
          </p>
          <a href='' className=' bg-white p-3 text-center w-44
           relative rounded-md font-semibold leading-relaxed
            hover:bg-blue-300 hover:text-white bottom-4'>
            {fixedLink.text}
          </a>
          </div>
        </div>
</div>
    </div>
  )
}

export default Community