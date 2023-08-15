import React from 'react'
import { teamName, teamPost } from '../constants'
import {
    TbBrandWhatsapp,
    TbBrandLinkedin,
    TbBrandTwitter,
    TbBrandInstagram,
  } from "react-icons/tb";
  import image from "../assets/altruist-updated-logo-removebg-preview.png";

const Team = () => {
  return (
    <div>
        <div>
          <h3 className='text-blue-700 font-bold text-2xl text-center'>Team</h3>
          <div className='flex justify-center gap-3 sm:flex sm:flex-col'>
           <div className='flex flex-col bg-blue-500'>
            <img src={image} alt="img-team" style={{width:400, height:400, borderRadius:400/2}}/>
            <h3>{teamName.CEO}</h3>
            <p>{teamPost.first}</p>
            <div className='flex'>
            <TbBrandInstagram/>
            <TbBrandLinkedin/>
            <TbBrandTwitter/>
            <TbBrandWhatsapp/>
            </div>
           </div>
           <div className='flex flex-col bg-blue-500'>
            <img src={image} alt="img-team" style={{width:400, height:400, borderRadius:400/2}}/>
            <h3>{teamName.contentCreator}</h3>
            <p>{teamPost.second}</p>
            <div className='flex'>
            <TbBrandInstagram/>
            <TbBrandLinkedin/>
            <TbBrandTwitter/>
            <TbBrandWhatsapp/>
            </div>
           </div>
           <div className='flex flex-col bg-blue-500'>
            <img src={image} alt="img-team" style={{width:400, height:400, borderRadius:400/2}}/>
            <h3>{teamName.webDev}</h3>
            <p>{teamPost.third}</p>
            <div className='flex'>
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