import React from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import Careers from "./Careers";
import image from "../assets/altruist logo.jpg";

const Home = () => {
  
  const Font = {
    fontFamily: "Roboto, sans-serif",
  };

  return (
    <div>
        <div className="w-full h-full bg-white p-5">
        <div className="flex justify-evenly">
        <img
              src={image}
              alt="altruist"
              className="w-[200px] h-[150px]"/>
                <div className="relative right-10">
            <ul
              className="flex justify-center gap-24 sm:gap-2 text-center cursor-pointer pt-16" style={Font}
            >
              <li className="text-black font-bold text-xl sm:text-sm sm:font-semibold hover:text-orange-500">
                <Link to="/" target="_self">{navLinks.first}</Link>
              </li>
              <li className="text-black font-bold text-xl sm:text-sm sm:font-semibold hover:text-orange-500">
                <Link to="/collaborate">{navLinks.second}</Link>
              </li>
              <li className="text-black font-bold text-xl sm:text-sm sm:font-semibold hover:text-orange-500">
                <Link to="/community">{navLinks.third}</Link>
              </li>
              <li className="text-black font-bold text-xl sm:text-sm sm:font-semibold hover:text-orange-500">
                <Link to="/volunteers" target='_blank'>{navLinks.fourth}</Link>
              </li>   
            </ul>
          </div>
        </div>
        <Careers/>
      </div>
    </div>
  );
};

export default Home;
