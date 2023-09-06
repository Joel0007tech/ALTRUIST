import React from 'react';
import imageThird from '../assets/new-edited-community (2).jpg';
import { cardHadings, fixedLink } from '../constants';

const Community = () => {
  const Font = {
    fontFamily: 'Roboto, sans-serif',
  };
  return (
    <div  data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000">
<div className='3 border-blue-400
         border-t-4 border-l-4 border-b-4 border-r-4 w-[1000px] p-4 rounded-md bg-blue-500 pb-8 m-auto sm:w-auto sm:flex-row'>
          <h3 className='text-center font-bold text-white text-2xl uppercase pb-6' style={Font}>{cardHadings.third}</h3>
<div className='flex relative m-auto gap-10 sm:flex sm:flex-col'>
          <img src={imageThird} alt="career-img" className='h-[350px] w-[450px] rounded-2xl sm:h-[250px] sm:w-[300px] sm:m-auto'/>
          <div className='flex flex-shrink flex-col gap-9'>
          <h2 className='text-2xl text-white relative bottom-1 text-center font-bold' style={Font}>
          EMBRACE A SUPPORTIVE<br/> CHANGE-MAKING COMMUNITY
          </h2>
          <p className='leading-normal text-lg text-white relative bottom-1 text-center' style={Font}>
          Whether you're an experienced professional<br/>
           or just starting out, our community welcomes you<br/>
            with open arms. Connect with passionate individuals,<br/>
             access valuable resources, receive mentorship, and<br/>
              receive guidance to thrive both personally and<br/>
               professionally. Together, let's make a difference!
          </p>
          <a href='' className=' bg-white p-3 text-center w-44
           relative rounded-md font-semibold leading-relaxed
            hover:bg-black hover:text-white bottom-4 m-auto top-1'>
            {fixedLink.text}
          </a>
          </div>
        </div>
</div>
    </div>
  )
}

export default Community