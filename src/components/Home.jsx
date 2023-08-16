import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import Careers from "./Careers";
import image from "../assets/altruist-updated-logo.jpg";
import { FaBars } from "react-icons/fa";
import { Link as ScrollLink} from 'react-scroll';
import background from "../assets/altruist-background.jpg"

const Home = () => {
  const Font = {
    fontFamily: "Poppins, sans-serif",
  };
const contentBackground ={
  backgroundImage:`url(${background})`,
  height:"440vh",
  backgroundSize:"cover",
  backgroundRepeat:"no-repeat"
}
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="w-full h-full" style={contentBackground}>
        <div className="block sm:hidden">
        <div className="flex justify-evenly">
          <img src={image} alt="altruist" className="w-[120px] h-[100px] pt-6" />
          <div className="relative right-10 ">
            <ul
              className="flex justify-center gap-24 sm:gap-2 text-center cursor-pointer pt-16"
              style={Font}
            >
              <li className="text-white font-bold text-xl sm:text-sm sm:font-semibold hover:text-blue-400">
                <Link to="/" target="_self">
                  {navLinks.first}
                </Link>
              </li>
              <li className="text-white font-bold text-xl sm:text-sm sm:font-semibold hover:text-blue-400">
              <ScrollLink to="collaborate" smooth={true} duration={500}>
                 {navLinks.second}
               </ScrollLink>
              </li>
              <li className="text-white font-bold text-xl sm:text-sm sm:font-semibold hover:text-blue-400">
              <ScrollLink to="community" smooth={true} duration={500}>
                 {navLinks.third}
               </ScrollLink>
              </li>
              <li className="text-white font-bold text-xl sm:text-sm sm:font-semibold hover:text-blue-400">
              <ScrollLink to="volunteers" smooth={true} duration={500}>
                 {navLinks.fourth}
               </ScrollLink>
              </li>
            </ul>
          </div>
        </div>
        </div>
        <div className="hidden sm:block">
        <div
        className="p-5 h-full w-[1850px] sm:h-full sm:w-[330px] sm:overflow-hidden pt-7 mt-2
         m-auto sm:mt-0"
      >
        <div
          className=" overflow-hidden"
        >
          <div className="sm:flex sm:justify-between">
            <img
              src={image}
              alt=""
              className="sm:w-[100px] sm:h-[70px] relative bottom-4"/>
            <FaBars
              className="cursor-pointer sm:cursor-pointer sm:text-white
              sm:text-2xl text-4xl float-right font-normal hover:text-blue-400 sm:float-right relative"
              onClick={() => setOpen(!open)}
            />
          </div>
        </div>
        {open && (
          <div
            className="overflow-hidden
          sm:border-b-2 sm:border-white sm:rounded-b-md bg-blue-800 pt-9 sm:w-full"
          >
            <ul
              className="flex justify-center flex-col gap-10 sm:gap-4 text-center cursor-pointer
            pb-10" style={Font}
            >
              <li className="text-white font-bold text-3xl sm:text-sm sm:font-semibold hover:text-gray-500">
                <Link to="/" target="_self">{navLinks.first}</Link>
              </li>
              <li className="text-white font-bold text-3xl sm:text-sm sm:font-semibold hover:text-gray-500">
              <ScrollLink to="collaborate" smooth={true} duration={500}>
                 {navLinks.second}
               </ScrollLink>
              </li>
              <li className="text-white font-bold text-3xl sm:text-sm sm:font-semibold hover:text-gray-500">
              <ScrollLink to="community" smooth={true} duration={500}>
                 {navLinks.third}
               </ScrollLink>
              </li>
              <li className="text-white font-bold text-3xl sm:text-sm sm:font-semibold hover:text-gray-500">
              <ScrollLink to="volunteers" smooth={true} duration={500}>
                 {navLinks.fourth}
               </ScrollLink>
              </li>   
            </ul>
          </div>
        )}
        </div>
        </div>
        <section className="mt-12">
        <Careers />
        </section>
      </div>
    </div>
  );
};

export default Home;
