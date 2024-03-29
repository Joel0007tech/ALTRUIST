import React from 'react'
import { Career, cardHadings, fixedLink } from '../constants'
import image from '../assets/new-edited-career.jpg';
import Collaborate from './Collaborate';
import Community from './Community';
import Contact from './Contact';
import Volunteers from './Volunteers';
import Team from './Team';
import { Element } from 'react-scroll';


const Careers = () => {
  const Font = {
    fontFamily: 'Roboto, sans-serif',
  };
  return (
    <div data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000">
        <h3 className='text-black font-bold text-3xl text-center pb-8 capitalize sm:text-xl' style={Font}>
            {Career.firstText}
        </h3>
        <h2 className='text-center text-2xl font-bold text-black sm:relative sm:bottom-6 sm:text-lg sm:font-medium' style={Font}>
          Together, We're Constructing The Largest Global Community Of Change Makers.</h2>
        <p className='text-center text-black font-semibold text-xl relative bottom-4 sm:text-lg sm:font-medium' style={Font}>
          At Altruist Bond, you'll have access to meaningful career, job, and internship
         opportunities<br/> that align with your passions and drive for positive social impact. </p>
         <p className='text-black text-center font-semibold text-xl relative bottom-3 sm:text-lg sm:font-medium' style={Font}>
          Embrace the movement and be a driving force for growth!!!</p>
          <div className='flex flex-col gap-3'>
          <div className=' border-blue-400
         border-t-4 border-l-4 border-b-4 border-r-4 2xl:w-[1000px] p-4 rounded-md
          bg-blue-500 m-auto pb-8 sm:w-auto'>
          <h3 className='text-center font-bold text-white text-2xl uppercase pb-6' style={Font}>{cardHadings.first}</h3>
<div className='flex relative m-auto gap-10 sm:flex sm:flex-col'>
          <img src={image} alt="career-img" className='h-[350px] w-[450px] rounded-2xl sm:h-[250px] sm:w-[300px] sm:m-auto'/>
          <div className='flex flex-col gap-9'>
          <h2 className='text-2xl font-extrabold text-white relative bottom-1 text-center sm:relative' style={Font}>
          BUILD YOUR CAREER,<br/> EARN MONEY,<br/> AND CHANGE THE WORLD
          </h2>
          <p className='leading-normal text-lg text-white relative bottom-1 text-center top-3' style={Font}>
          Our platform offers a wide range of opportunities<br/> including jobs,
           internships, volunteering,<br/> and research placements,
            all geared<br/> towards creating a positive impact on society.
          </p>
          <a href='' className=' bg-white p-3 text-center w-44
           relative rounded-md font-semibold leading-relaxed
            hover:bg-black hover:text-white bottom-4 m-auto top-5'>
            {fixedLink.text}
          </a>
          </div>
        </div>
         </div>
         <Element name="collaborate" className="collab">
           <Collaborate/>
         </Element>
         <Element name="community" className="community">
           <Community/>
         </Element>
          <Element name="volunteers" className="volunteer">
           <Volunteers/>
         </Element>
         <section>
        <Team/>
         </section>
        <section>
          <Contact/>
        </section>
        </div>
    </div>
  )
}

export default Careers