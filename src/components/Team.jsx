import React from 'react'
import { teamName, teamPost } from '../constants'
import {
    TbBrandWhatsapp,
    TbBrandLinkedin,
    TbBrandTwitter,
    TbBrandInstagram,
  } from "react-icons/tb";

const Team = () => {
  return (
    <div>
        <div>
          <h3 className='text-blue-700 font-bold text-2xl text-center'>Team</h3>
          <div className='flex justify-center'>
           <div className='flex flex-col'>
            <h3></h3>
            <p></p>
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