import React, { useEffect, useState } from "react";
import {
  leftpannel,
  rightPannelCards,
  rightPannelNav,
} from "../../constants/pannel";
import { userInfo } from "../../store/selector/userinfo";
import { useRecoilState } from "recoil";
import { userState } from "../../store/atoms/user";

const Page = () => {
  const [user, setUser] = useRecoilState(userInfo);
  console.log(user)
  const [complaints, setComplaints] = userState(null);

  const init = async () => {
    setComplaints(user.complaints);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <main className="w-full h-[90vh] flexCenter flex-col ">
      <div className="w-full h-[7vh] bg-amber-100 border-y-[2px] border-gray-500 flexStart">
        <div className="w-1/2 h-full flexBetween ">
          {rightPannelNav.map((links, index) => (
            <div
              className="border-r-[1.5px] border-gray-400 h-full w-full flexCenter cursor-pointer"
              key={index}
            >
              {links.title}
            </div>
          ))}
        </div>
      </div>
      <span className="w-full h-full flexCenter ">
        <section className="w-1/6 bg-rose-100 font-semibold h-full flex items-start justify-start flex-col ">
          {leftpannel.map((item) => (
            <div className=" px-5 py-3 text-lg cursor-pointer border-b-[1.5px] w-full border-amber-700">
              {item.title}
            </div>
          ))}
        </section>
        <section className="w-5/6 border-l-2 border-gray-400 h-full flexCenter gap-3 flex-col">
          <div className="h-2/5 w-full flexAround px-6 my-2">
            {rightPannelCards.map((card, index) => (
              <div
                className={`h-full w-[30%] ${card.color} flexCenter flex-col text-3xl gap-4 rounded-lg`}
                key={index}
              >
                <div className="text-white text-4xl">{card.icon}</div>
                <p className="text-white font-semibold">{card.description}</p>
              </div>
            ))}
          </div>
          <div className="h-3/5 w-full relative">{complaints}</div>
        </section>
      </span>
    </main>
  );
};

export default Page;
