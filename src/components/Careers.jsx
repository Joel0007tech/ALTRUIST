import React from 'react'
import { Career, cardHadings, fixedLink } from '../constants'
import image from '../assets/careers.png';
import Collaborate from './Collaborate';
import Community from './Community';
import Contact from './Contact';

const Careers = () => {
  return (
    <div>
        <h3 className='text-green-500 font-bold text-3xl text-center pb-8 capitalize'>
            {Career.firstText}
        </h3>
        <h2 className='text-center text-2xl font-bold text-green-500 relative bottom-6'>Together, We're Constructing The Largest Global Community Of Change Makers.</h2>
        <p className='text-center text-green-500 font-semibold text-xl relative bottom-4'>At Altruist Bond, you'll have access to meaningful career, job, and internship
         opportunities<br/> that align with your passions and drive for positive social impact. </p>
         <p className='text-green-500 text-center font-semibold text-xl relative bottom-3'>Embrace the movement and be a driving force for growth!!!</p>
          <div className='flex flex-col gap-3'>
          <div className=' border-green-500
         border-t-4 border-l-4 border-b-4 border-r-4 w-[1000px] p-4 rounded-md bg-green-500 m-auto pb-8'>
          <h3 className='text-center font-bold text-white text-2xl uppercase pb-6'>{cardHadings.first}</h3>
<div className='flex relative m-auto gap-10'>
          <img src={image} alt="career-img" className='h-[350px] w-[450px]'/>
          <div className='flex flex-shrink flex-col gap-9'>
          <h2 className='text-2xl font-bold text-white relative bottom-1'>
          BUILD YOUR CAREER,<br/> EARN MONEY,<br/> AND CHANGE THE WORLD
          </h2>
          <p className='leading-normal text-xl text-white relative bottom-1'>
          Our platform offers a wide range of opportunities including jobs,<br/>
           internships, volunteering, and research placements,<br/>
            all geared towards creating a positive impact on society.
          </p>
          <a href='' className=' bg-white p-3 text-center w-44
           relative rounded-md font-semibold leading-relaxed
            hover:bg-blue-300 hover:text-white bottom-4'>
            {fixedLink.text}
          </a>
          </div>
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