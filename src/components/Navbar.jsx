import React from "react";
import Emblem from "../logos/emblem.webp";
import * as BiIcons from "react-icons/bi";
import { NavLinks } from "../constants/constant";
import * as FaIcons from "react-icons/fa";
import * as FaSIcons from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="flex flex-col items-center h-[30vh] bg-stone-100 ">
      <div className="flexBetween bg-[#292929] w-full h-[35%] paddings-navbar">
        <div className="flexStart  w-[65%] h-auto text-white">
          <div className="h-10 flexCenter w-[14vw]  pad text-[12px] leading-[1.2] ">
            <span className="flexCenter h-full w-[18%] mr-7">
              <img src={Emblem} className="w-full h-full" />
            </span>
            <span className="flex justify-center items-end flex-col relative left-3">
              <span>भारत सरकार</span> Government of India
            </span>
          </div>
          <div className="h-10 border-l-2 border-gray-500 flex justify-center items-start flex-col pad text-[12px] leading-[1.2] mr-4">
            <span>भारत सरकार</span>Ministry of commerce and industry
          </div>
          <div className="h-8 border-l-2 border-gray-500  relative w-[7vw] text-white-400 flexAround text-[20px]">
            <FaIcons.FaFacebook className="text-blue-400" />
            <FaSIcons.FaXTwitter />
            <FaIcons.FaLinkedin className="text-blue-400 text-2xl" />
          </div>
        </div>
        <div className="w-[35%] h-full text-white flexCenter text-[14px] relative left-10">
          Our Toll Free Number : 1800 115 565 (10:00 AM to 05:30 PM)
        </div>
      </div>
      <div className="w-full h-[65%] paddings-navbar">
        <div className="flex border-0 border-red-500 h-1/2 py-[10px]">
          <div className="flexStart gap-5 w-[88%] h-auto">
            <span className="flexBetween w-1/2">
              <div>nnijfsaififg i</div>
              <div>hfbilfiero </div>
              <div>gfndignioer</div>
              <div>isngfierng</div>
            </span>
          </div>
          <div className="flexBetween w-[12%] font-bold p-2">
            <div className="text-[#FA5F1E] cursor-pointer">Login</div>
            <div className="text-[#FA5F1E] cursor-pointer">Register</div>
          </div>
        </div>
        <ul className="flexBetween h-1/2 font-bold text-[#FA5F1E] tracking-wide">
          {NavLinks.map((link) => (
            <li className="cursor-pointer">{link.link}</li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
