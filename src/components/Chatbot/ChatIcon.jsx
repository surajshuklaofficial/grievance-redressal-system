import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import ChatPannel from "./ChatPannel";

const ChatIcon = () => {
  const [chatActive, setChatActive] = useState(false);

  return (
    <>
      {chatActive && <ChatPannel setChatActive={setChatActive} />}
      <span className="relative z-10">
        <div
          onClick={() => setChatActive((e) => !e)}
          className="transition-all right-3 top-[81vh] fixed bg-blue-600 p-2 rounded-full cursor-pointer hover:bg-blue-500"
        >
          <span className="text-4xl text-white">
            <FaIcons.FaRobot />
          </span>
        </div>
        <div className="right-3 top-[90vh] fixed bg-[#FA5F1E] p-2 rounded-full cursor-pointer hover:bg-orange-400">
          <span className="text-4xl text-white">
            <IoIcons.IoIosPaper />
          </span>
        </div>
      </span>
    </>
  );
};

export default ChatIcon;
