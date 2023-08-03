import React, {useState} from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import Careers from "./Careers";
import image from "../assets/altruist-updated-logo-removebg-preview.png";
import { FaBars } from "react-icons/fa";

const Home = () => {
  
  const Font = {
    fontFamily: 'Poppins, sans-serif',
  };
  const [open, setOpen] = useState(false);
  return (
    <div>
        <div className="w-full h-full bg-white p-5">
        <div className="flex justify-evenly 2xl:block sm:hidden">
        <img
              src={image}
              alt="altruist"
              className="w-[200px] h-[150px]"/>
                <div className="relative right-10">
            <ul
              className="flex justify-center gap-24 sm:gap-2 text-center cursor-pointer pt-16" style={Font}
            >
              <li className="text-blue-500 font-bold text-xl sm:text-sm sm:font-semibold hover:text-black">
                <Link to="/" target="_self">{navLinks.first}</Link>
              </li>
              <li className="text-blue-500 font-bold text-xl sm:text-sm sm:font-semibold hover:text-black">
                <Link to="/collaborate">{navLinks.second}</Link>
              </li>
              <li className="text-blue-500 font-bold text-xl sm:text-sm sm:font-semibold hover:text-black">
                <Link to="/community">{navLinks.third}</Link>
              </li>
              <li className="text-blue-500 font-bold text-xl sm:text-sm sm:font-semibold hover:text-black">
                <Link to="/volunteers" target='_blank'>{navLinks.fourth}</Link>
              </li>   
            </ul>
          </div>
        </div>
        <div
        className="sm:h-full sm:w-[330px] sm:overflow-hidden pt-7 mt-2
         bg-blue-700 border-b-0 border-r-0 border-l-0
          border-t-2 rounded-t-xl m-auto sm:mt-0"
      >
        <div
          className=" overflow-hidden"
        >
          <div className="sm:flex flex justify-between">
            <img
              src={image}
              alt=""
              className="w-[90px] sm:w-[50px] h-[50px] sm:h-[30px]"/>
            <FaBars
              className="cursor-pointer sm:cursor-pointer text-white sm:text-white
              sm:text-2xl text-4xl float-right font-normal hover:text-gray sm:float-right"
              onClick={() => setOpen(!open)}
            />
          </div>
        </div>
        {open && (
          <div
            className="overflow-hidden
          sm:border-b-2 sm:border-white sm:rounded-b-md"
          >
            <ul
              className="flex justify-center flex-col gap-6 sm:gap-2 text-center cursor-pointer
            pb-10" style={Font}
            >
              <li className="text-white font-bold text-3xl sm:text-sm sm:font-semibold hover:text-gray-500">
                <Link to="/" target='_blank'>{navLinks.first}</Link>
              </li>
              <li className="text-white font-bold text-3xl sm:text-sm sm:font-semibold hover:text-gray-500">
                <Link to="/about" target='__blank'>{navLinks.second}</Link>
              </li>
              <li className="text-white font-bold text-3xl sm:text-sm sm:font-semibold hover:text-gray-500">
                <Link to="/skills" target='_blank'>{navLinks.third}</Link>
              </li>
              <li className="text-white font-bold text-3xl sm:text-sm sm:font-semibold hover:text-gray-500">
                <Link to="/contact" target='_blank'>{navLinks.fourth}</Link>
              </li>   
            </ul>
          </div>
        )}
        </div>
        <Careers/>
      </div>
    </div>
  );
};

export default Home;
