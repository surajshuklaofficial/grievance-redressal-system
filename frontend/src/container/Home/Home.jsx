import React from "react";
import "./Home.css";
import * as FasIcons from "react-icons/fa6";
import * as SlIcons from "react-icons/sl";
import {
  pannelCards,
  pannelImages,
  pannelRCards,
} from "../../constants/constant";
import cc from "../../assets/logos/cardcover.jpg";

const Home = () => {
  return (
    <main className="min-h-[100vh] w-full flex flex-col bg-white relative z-0">
      <div className="mb-2 border-t-[3.5px] border-green-500 bg-white h-[85vh] shadow-md p-4 flex justify-center pannel-bg">
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
                    <p className="font-semibold text-2xl">Happpy Users</p>
                    <p className="font-semibold text-1xl tracking-wide">
                      20,000 +
                    </p>
                  </span>
                </span>
              </div>
            </span>
          </div>
        </div>
        <div className="w-[30%] h-full bg-transparent overflow-hidden ">
          <ul className="flex flex-col items-center justify-center gap-4  overflow-x-hidden relative overflow-y-scroll whitespace-nowrap">
            {pannelImages.map((img, index) => (
              <li
                className={` relative ${
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
      <section className="flexCenter gap-5 h-[80vh] relative overflow-hidden px-[8vw] py-[5vh] shadow-md ">
        <img
          src={cc}
          className="absolute w-full h-full opacity-30 px-[50px] z-[-1]"
        />
        <div className="w-2/3 h-full flexCenter gap-3">
          {pannelCards.map((card, index) => (
            <div
              key={index}
              onClick={()=>{
                window.location="/profile"
              }}
              className={`${"w-1/3"} h-[50vh] bg-white p-4 border-[1.5px] border-orange-500 rounded-lg hover:scale-105 cursor-pointer transition-all`}
            >
              <img
                src={card.img}
                className="h-1/2 w-full object-cover bg-center"
              />
              <span className="flex flex-col items-start justify-center h-1/2 gap-3">
                <p className="font-semibold text-2xl h-[50%]">{card.title}</p>
                <p className="h-[50%]">{card.description}</p>
              </span>
            </div>
          ))}
        </div>
        <div className=" w-1/3 h-full relative flexCenter flex-col gap-2 py-2">
          {pannelRCards.map((card, index) => (
            <div
              key={index}
              className={`h-1/3 bg-white flexCenter px-5 border-[1.5px] border-blue-800 rounded-lg ${
                index % 2 === 0 ? "" : "flex-row-reverse"
              }`}
            >
              <img className={`w-1/3`} src={card.img} />
              <span className="w-2/3">
                <p>{card.description}</p>
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
