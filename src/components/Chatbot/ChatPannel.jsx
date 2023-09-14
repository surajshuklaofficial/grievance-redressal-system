import React from "react";
import * as BsIcons from "react-icons/bs";
import * as IoIcons from "react-icons/io";
import Message from "./message";

const ChatPannel = ({ setChatActive }) => {
  return (
    <section className="shadow-md w-[28vw] h-[74vh] bg-amber-50 rounded-2xl py-3 px-4 border-2 border-blue-600 z-10 fixed right-[5vw] top-[24vh] overflow-hidden">
      <div className="w-full h-[90%]">
        <Message />
      </div>
      <div className="w-full h-[10%] bg-white rounded-[30px] flexCenter">
        <input
          className="w-[75%] h-full bg-transparent rounded-[30px] border-[1px] focus:border-blue-500 ring-inset focus:border-[1px] border-blue-500 shadow-lg px-5 placeholder:text-black placeholder:italic tracking-wide placeholder:text-[1.09rem]"
          placeholder="Enter yout text ...."
        />
        <BsIcons.BsFillSendFill className="w-[12.5%] h-full p-[13px] cursor-pointer  bg-transparent" />
        <IoIcons.IoMdMic className="w-[12.5%] h-full p-[13px] cursor-pointer  bg-transparent" />
      </div>
    </section>
  );
};

export default ChatPannel;
