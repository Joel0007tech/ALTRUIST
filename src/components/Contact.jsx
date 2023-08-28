import React from 'react'
import { FaUserAlt } from "react-icons/fa";
import {
  TbBrandWhatsapp,
  TbBrandLinkedin,
  TbBrandTwitter,
  TbBrandInstagram,
  TbBrandFacebook,
} from "react-icons/tb";

const Contact = () => {
  const Font = {
    fontFamily: 'Poppins, sans-serif',
  };
  return (
    <div>
        <div className='bg-blue-500 w-[1200px] relative m-auto 2xl:p-10 2xl:pl-18 2xl:pr-18 2xl:mt-10 rounded-b-md sm:flex sm:flex-col sm:w-auto'>
        <h3 className='font-bold text-2xl text-center text-white 2xl:pb-6 sm:text-center' style={Font}>Get In Touch</h3>
        <div className='flex justify-evenly sm:flex sm:flex-col'>
        <div className='flex flex-col'>
            <h3 className='font-bold text-2xl text-white 2xl:pt-8 sm:text-center' style={Font}>Our socials</h3>
            <div className="flex gap-4 pt-14 relative 2xl:right-3 sm:justify-center">
            <TbBrandWhatsapp href='https://chat.whatsapp.com/KJmWZtf2gl9Jmi6ybsqV8w' className="text-white text-5xl fill-green-600 cursor-pointer sm:text-4xl" />
            <TbBrandLinkedin href='https://www.linkedin.com/in/altruist-bond-505804283/' className="text-white text-5xl fill-blue-600 cursor-pointer sm:text-4xl" />
            <TbBrandTwitter href='https://twitter.com/AltruistB75778' className="text-blue-600 text-5xl fill-blue-600 cursor-pointer sm:text-4xl" />
            <TbBrandInstagram href='https://instagram.com/' className="text-white text-5xl fill-red-700 cursor-pointer sm:text-4xl" />
            <TbBrandFacebook href='' className="text-white text-5xl fill-blue-600 cursor-pointer sm:text-4xl" />
          </div>
        </div>
        <div className='flex flex-col'>
        <form className="flex flex-col pt-3 gap-2">
          <input type={"email"} placeholder="Email" className="m-auto pb-4 sm:pb-3 w-[550px] sm:w-[300px]  pt-4 sm:pt-3 pl-3 text-black text-lg sm:text-sm
           bg-white font-semibold rounded-t-md " style={Font}/>
         <input type={"email"} placeholder="your query" className="m-auto pb-60 w-[550px] sm:w-[300px] pt-2 pl-3 text-black text-lg sm:text-sm
          bg-white font-semibold rounded-b-md" style={Font}/>
        </form>
        <div className=" flex justify-center mt-5">
        <a
              href=""
              className="text-center bg-white py-3 px-9 sm:py-2 sm:my-4 text-black
               hover:bg-black hover:text-white font-semibold sm:text-sm
             w-[170px] sm:w-[150px] h-[50px] sm:h-[40px] rounded-lg" style={Font}>
               SUBMIT
            </a>
        </div>
        </div>
        </div>
        </div>
      
    </div>
  )
}

export default Contact