import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import Careers from "./Careers";
import image from "../assets/altruist-updated-logo-removebg-preview.png";
import { FaBars } from "react-icons/fa";

const Home = () => {
  const Font = {
    fontFamily: "Poppins, sans-serif",
  };
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="w-full h-full bg-white p-5">
        <div className="2xl:block">
        <div className="flex justify-evenly">
          <img src={image} alt="altruist" className="w-[200px] h-[150px]" />
          <div className="relative right-10 ">
            <ul
              className="flex justify-center gap-24 sm:gap-2 text-center cursor-pointer pt-16"
              style={Font}
            >
              <li className="text-blue-500 font-bold text-xl sm:text-sm sm:font-semibold hover:text-black">
                <Link to="/" target="_self">
                  {navLinks.first}
                </Link>
              </li>
              <li className="text-blue-500 font-bold text-xl sm:text-sm sm:font-semibold hover:text-black">
                <Link to="/collaborate">{navLinks.second}</Link>
              </li>
              <li className="text-blue-500 font-bold text-xl sm:text-sm sm:font-semibold hover:text-black">
                <Link to="/community">{navLinks.third}</Link>
              </li>
              <li className="text-blue-500 font-bold text-xl sm:text-sm sm:font-semibold hover:text-black">
                <Link to="/volunteers" target="_blank">
                  {navLinks.fourth}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        </div>
        <div className="sm:block">
<h3>hello world</h3>
        </div>
        <Careers />
      </div>
    </div>
  );
};

export default Home;
