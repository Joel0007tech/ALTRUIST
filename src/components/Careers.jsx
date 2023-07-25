import React from 'react'
import { Career, fixedLink } from '../constants'
import image from '../assets/careers.png';
import Collaborate from './Collaborate';
import Community from './Community';
import Contact from './Contact';

const Careers = () => {
  return (
    <div>
        <h3 className='text-black font-bold text-3xl text-center pb-8'>
            {Career.firstText}
        </h3>
        <div className='flex flex-col gap-3 '>
        <div className='flex relative m-auto gap-3 border-black
         border-t-4 border-l-4 border-b-4 border-r-4 w-[1000px] p-4 rounded-md bg-black'>
          <img src={image} alt="career-img" className='h-[350px] w-[450px]'/>
          <div className='flex flex-shrink flex-col gap-9'>
          <h2 className='text-2xl font-bold text-orange-500 relative bottom-1'>
          BUILD YOUR CAREER,<br/> EARN MONEY,<br/> AND CHANGE THE WORLD
          </h2>
          <p className='leading-normal text-xl text-orange-500 relative bottom-1'>
          Our platform offers a wide range of opportunities including jobs,<br/>
           internships, volunteering, and research placements,<br/>
            all geared towards creating a positive impact on society.
          </p>
          <a href='' className=' bg-white p-3 text-center w-44
           relative rounded-md font-semibold leading-relaxed
            hover:bg-blue-300 hover:text-white top-2'>
            {fixedLink.text}
          </a>
          </div>
        </div>
        <section>
          <Collaborate/>
        </section>
        <section>
          <Community/>
        </section>
        <section>
          <Contact/>
        </section>
        </div>
    </div>
  )
}

export default Careers