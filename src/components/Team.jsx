import React from 'react'
import { teamName, teamPost } from '../constants'
import {
    TbBrandWhatsapp,
    TbBrandLinkedin,
    TbBrandTwitter,
    TbBrandInstagram,
  } from "react-icons/tb";
  import image from "../assets/altruist-updated-logo-removebg-preview.png";
  import Joybliss from "../assets/joybliss-removebg-preview.png";
import Joel from "../assets/FB_IMG_1632361671640__2_-removebg-preview.png";
import Aos from 'aos';
import 'aos/dist/aos.css'
Aos.init();

const Team = () => {
  const Font = {
    fontFamily: "Roboto, sans-serif",
  };

  return (
    <div>
        <div>
          <h3 className='text-blue-700 font-bold text-2xl text-center'>Team</h3>
          <div className='flex justify-center gap-3 sm:flex sm:flex-col' data-aos="fade" data-aos-delay="200" data-aos-duration="1000">
           <div className='flex flex-col bg-blue-500 p-16 2xl:rounded-md sm:rounded-md sm:w-[350px] sm:m-auto'>
            <img src={Joybliss} alt="img-team" style={{width:200, height:250, borderRadius:400/2}} className='sm:m-auto'/>
            <h3 className="text-center text-white" style={Font}>{teamName.CEO}</h3>
            <p className="text-center text-white" style={Font}>{teamPost.first}</p>
            <div className='flex justify-center'>
            <TbBrandInstagram/>
            <TbBrandLinkedin/>
            <TbBrandTwitter/>
            <TbBrandWhatsapp/>
            </div>
           </div>
           <div className='flex flex-col bg-blue-500 p-16 2xl:rounded-md sm:rounded-md sm:w-[350px] sm:m-auto'>
            <img src={image} alt="img-team" style={{width:200, height:250}}/>
            <h3 className="text-center text-white" style={Font}>{teamName.contentCreator}</h3>
            <p className="text-center text-white" style={Font}>{teamPost.second}</p>
            <div className='flex justify-center'>
            <TbBrandInstagram/>
            <TbBrandLinkedin/>
            <TbBrandTwitter/>
            <TbBrandWhatsapp/>
            </div>
           </div>
           <div className='flex flex-col bg-blue-500 pt-16 2xl:rounded-md sm:pb-16 sm:rounded-md sm:w-[350px] sm:m-auto'>
            <img src={Joel} alt="img-team" style={{width:320, height:250, borderRadius:400/2}} className='sm:m-auto'/>
            <h3 className="text-center text-white" style={Font}>{teamName.webDev}</h3>
            <p className="text-center text-white" style={Font}>{teamPost.third}</p>
            <div className='flex justify-center'>
            <TbBrandInstagram/>
            <TbBrandLinkedin/>
            <TbBrandTwitter/>
            <TbBrandWhatsapp/>
            </div>
           </div>
          </div>
        </div>
    </div>
  )
}

export default Team