import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as FaSIcons from "react-icons/fa6";
import dpiit from "../../assets/logos/DPIIT.svg";
import logo1 from "../../assets/logos/Logo1.png";
import Emblem from "../../assets/logos/emblem.png";
import sficon from "../../assets/logos/logo-poster-1-removebg-preview.png";
import ChatIcon from "../Chatbot/ChatIcon";
import Register from "../../container/Register/Register";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userInfo } from "../../store/selector/userinfo";

const Navbar = () => {
  return (
    <nav className="flex flex-col items-center h-[20vh] bg-stone-100 relative">
      <div className="flexBetween bg-[#292929] w-full h-[40%] paddings-navbar overflow-hidden">
        <div className="flexStart  w-[65%] h-auto text-white relative right-[5vw]">
          <div className="h-10 flexCenter w-[18vw]  pad text-[12px] leading-[1.2] ">
            <span className="flexCenter h-auto w-auto mr-6 relative left-6">
              <img src={Emblem} className="w-[70px] h-[40px] relative left-6" />
            </span>
            <span className="flex justify-center items-end flex-col relative left-6">
              <span>भारत सरकार</span> Government of India
            </span>
          </div>
          <div className="h-10 border-l-2 border-gray-500 flex justify-center items-start flex-col pad text-[12px] leading-[1.2] mr-4 pl-5">
            <span>भारत सरकार</span>Ministry of commerce and industry
          </div>
          <div className="h-8 border-l-2 border-gray-500  relative w-[7vw] text-white-400 flexAround text-[20px]">
            <FaIcons.FaFacebook className="text-blue-400 cursor-pointer" />
            <FaSIcons.FaXTwitter className="cursor-pointer" />
            <FaIcons.FaLinkedin className="text-blue-400 text-2xl cursor-pointer" />
          </div>
        </div>
        <div className="w-[35%] h-full text-white flexCenter text-[14px] relative left-10">
          Our Toll Free Number : 1800 115 565 (10:00 AM to 05:30 PM)
        </div>
      </div>
      <div className="w-full h-[60%] paddings-navbar">
        <div className="flex border-0 border-red-500 h-full py-[10px] overflow-hidden">
          <div className="flexStart gap-5 w-[80%] h-auto">
            <span className="flexStart gap-3 w-auto overflow-hidden">
              <div className="flexCenter h-[6vh] w-[10vw] mx-4">
                <img src={logo1} className="w-full h-full" />
              </div>
              <div className="border-l-2 border-gray-400 w-3 h-[7vh]" />
              <div className="flexCenter h-[6vh] w-[10vw] ">
                <img src={dpiit} className="w-full h-full" />
              </div>
              <div className="border-l-2 border-gray-400 w-3 h-[7vh]" />
              <div className="flexCenter h-[11vh] w-[10vw] relative right-4">
                <img src={sficon} className="w-full h-full" />
              </div>
            </span>
          </div>
          <LoginInfo />
        </div>
      </div>
      <ChatIcon />
    </nav>
  );
};

function LoginInfo() {
  const user = useRecoilValue(userInfo);

  const logout = () => {
    localStorage.removeItem("token");
    alert("Logged Out Successfully");
    window.location = "/";
  };

  if (user) {
    return (
      <div className="flexCenter gap-5 w-[30%] font-bold p-2 ">
        <p className="text-orange-500 w-[12vw] h-9 flexCenter tracking-wide gap-2">
          Namaste! <span>{user.user.firstName}</span>
        </p>
        <button
          onClick={() => logout()}
          className="text-white cursor-pointer bg-[#FA5F1E] w-[7vw] h-9 flexCenter rounded-[30px] shadow-md hover:text-[#FA5F1E] transition hover:bg-white hover:border-[1px] hover:border-[#FA5F1E]"
        >
          Logout
        </button>
      </div>
    );
  } else {
    return (
      <div className="flexCenter gap-5 w-[20%] font-bold p-2 ">
        <button className="text-white cursor-pointer bg-[#FA5F1E] w-[7vw] h-9 flexCenter rounded-[30px] shadow-md hover:text-[#FA5F1E] transition hover:bg-white hover:border-[1px] hover:border-[#FA5F1E] ">
          Login
        </button>
        <button
          onClick={() => {
            window.location = "/form";
          }}
          className="text-white cursor-pointer bg-[#FA5F1E] w-[7vw] h-9 flexCenter rounded-[30px] shadow-md hover:text-[#FA5F1E] transition hover:bg-white hover:border-[1px] hover:border-[#FA5F1E]"
        >
          Register
        </button>
      </div>
    );
  }
}

export default Navbar;
