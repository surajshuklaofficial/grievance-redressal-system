import React from "react";
import "./Home.css";
import * as FasIcons from "react-icons/fa6";
import * as SlIcons from "react-icons/sl";
import { pannelImages } from "../../constants/constant";

const Home = () => {
  return (
    <main className="min-h-[80vh] w-full flex flex-col bg-stone-200">
      <div className="mb-8 border-t-[3.5px] border-green-500 bg-white h-[85vh] shadow-xl p-4 flex justify-center pannel-bg">
        <div className="w-[65%] h-full  bg-transparent flex flex-col items-start justify-center gap-6 px-10 py-3">
          <p className="text-7xl font-bold text-[#3A3791] ">
            Empowering Citizens
            <br />
            Resolving Grievances
          </p>
          <p className="text-4xl font-bold text-black">
            Your Voice Matters!
            <br /> Let's Make a Difference Together
          </p>
          <div className="w-full h-auto  flex justify-start items-center">
            <span className="w-3/4 h-auto mt-7 flexStart gap-7">
              <div className="w-[21vw]  h-[12vh] relative z-2 flexCenter bg-orange-500 rounded-[20px] border-[2px] border-white">
                <span className="flexCenter gap-4 px-2">
                  <FasIcons.FaWpforms className="text-white text-5xl rounded-full p-1 border-[2px] border-white" />
                  <span className="flex flex-col justify-center rounded-full text-white">
                    <p className="font-semibold text-2xl">
                      Resolved Complaints
                    </p>
                    <p className="font-semibold text-1xl tracking-wide">
                      20,000 +
                    </p>
                  </span>
                </span>
              </div>
              <div className="w-[21vw]  h-[12vh] relative z-2 flexCenter bg-orange-500 rounded-[20px] border-[2px] border-white">
                <span className="flexCenter gap-4 px-2">
                  <SlIcons.SlBadge className="text-white text-5xl rounded-full p-1 border-[2px] border-white" />
                  <span className="flex flex-col justify-center rounded-full text-white">
                    <p className="font-semibold text-2xl">
                      Happpy Users
                    </p>
                    <p className="font-semibold text-1xl tracking-wide">
                      20,000 +
                    </p>
                  </span>
                </span>
              </div>
            </span>
          </div>
        </div>
        <div className="w-[25%] h-full bg-transparent overflow-hidden ">
          <ul className="flex flex-col items-center justify-center gap-4 relative overflow-y-scroll whitespace-nowrap">
            {pannelImages.map((img, index) => (
              <li
                className={`inline-block relative ${
                  index % 2 === 0 ? "right-9" : "left-9"
                }`}
                key={index}
              >
                <img src={img.img} className="relative" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Home;
