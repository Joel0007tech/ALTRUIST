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


const Team = () => {
  return (
    <div>
        <div>
          <h3 className='text-white font-bold text-2xl text-center'>Team</h3>
          <div className='flex justify-center gap-3 sm:flex sm:flex-col'>
           <div className='flex flex-col bg-blue-500 p-16'>
            <img src={Joybliss} alt="img-team" style={{width:200, height:250, borderRadius:400/2}}/>
            <h3 className="text-center">{teamName.CEO}</h3>
            <p className="text-center">{teamPost.first}</p>
            <div className='flex justify-center'>
            <TbBrandInstagram/>
            <TbBrandLinkedin/>
            <TbBrandTwitter/>
            <TbBrandWhatsapp/>
            </div>
           </div>
           <div className='flex flex-col bg-blue-500 p-16'>
            <img src={image} alt="img-team" style={{width:200, height:250}}/>
            <h3 className="text-center">{teamName.contentCreator}</h3>
            <p className="text-center">{teamPost.second}</p>
            <div className='flex justify-center'>
            <TbBrandInstagram/>
            <TbBrandLinkedin/>
            <TbBrandTwitter/>
            <TbBrandWhatsapp/>
            </div>
           </div>
           <div className='flex flex-col bg-blue-500 pt-16'>
            <img src={Joel} alt="img-team" style={{width:320, height:250, borderRadius:400/2}}/>
            <h3 className="text-center">{teamName.webDev}</h3>
            <p className="text-center">{teamPost.third}</p>
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