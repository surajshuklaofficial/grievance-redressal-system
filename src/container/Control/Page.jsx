import React, { useContext, useEffect, useState } from "react";
import {
  leftpannel,
  rightPannelCards,
  rightPannelNav,
} from "../../constants/pannel";
import axios from "axios";
import userContext from "../../context/userContext";
import { BASE_URL } from "../../config";

const options = {
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  timeZoneName: "short",
};

const Page = () => {
  const [complaints, setComplaints] = useState([]);

  const getComplainntDetails = async () => {
    fetch(`${BASE_URL}/v1/complaints/complaintDetails`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setComplaints(data);
      });
  };

  useEffect(() => {
    getComplainntDetails();
  }, []);

  return (
    <main className="w-full h-[90vh] flexCenter flex-col ">
      <div className="w-full h-[7vh] bg-amber-100 border-y-[2px] border-gray-500 flexStart">
        <div className="w-1/2 h-full flexBetween ">
          {rightPannelNav.map((links, index) => (
            <div
              onClick={() => {
                window.location = `${links.href}`;
              }}
              className="border-r-[1.5px] border-gray-400 h-full w-full flexCenter cursor-pointer hover:underline transition leading-3"
              key={index}
            >
              {links.title}
            </div>
          ))}
        </div>
      </div>
      <span className="w-full h-full flexCenter overflow-hidden ">
        <section className="w-[15%] bg-rose-100 font-semibold h-full flex items-start justify-start flex-col ">
          {leftpannel.map((item) => (
            <div
              className={`px-5 py-3 text-md hover:text-yellow-600 hover:underline  cursor-pointer border-b-[1.5px] w-full border-amber-700  ${
                window.location.pathname === item.href
                  ? "bg-rose-500 text-white hover:no-underline hover:text-white"
                  : ""
              }`}
            >
              {item.title}
              {console.log(window.location.pathname)}
            </div>
          ))}
        </section>
        <section className="w-[85%] border-l-2 border-gray-400 h-full flexCenter gap-3 flex-col">
          <div className="h-2/5 w-full flexAround px-6 my-2">
            {rightPannelCards.map((card, index) => (
              <div
                className={`h-full w-[30%] ${card.color} flexCenter flex-col text-3xl gap-4 rounded-lg`}
                key={index}
              >
                <div className="text-white text-4xl">
                  {card.icon ? card.icon : complaints.length}
                </div>
                <p className="text-white font-semibold">{card.description}</p>
              </div>
            ))}
          </div>
          <div className="h-3/5 w-full relative flex-col ">
            <p className="text-2xl h-auto w-full flexCenter font-semibold bg-amber-100 py-3 border-y-[1px] border-l-[1px] border-yellow-900">
              Previously Lodged Complaints
            </p>
            <div className="w-full h-[6vh] flex border-b-[1.5px] border-black font-semibold">
              <div className="w-[5%] h-full border-x-[1.5px] flexCenter border-black text-lg ">
                SNo.
              </div>
              <div className="w-[40%] h-full border-r-[1.5px] flexStart px-3 border-black">
                Complaint Description
              </div>
              <div className="w-[17%] h-full border-r-[1.5px] flexStart px-3 border-black">
                Department
              </div>
              <div className="w-[14%] h-full px-2 border-r-[1.5px] flexCenter border-black">
                Status
              </div>
              <div className="w-[9%] h-full  border-r-[1.5px] flexCenter border-black">
                Number
              </div>
              <div className="w-[10%] h-full  border-r-[1.5px] flexCenter border-black">
                Created At
              </div>
              <div className="w-[10%] h-full border-r-[1.5px] flexCenter border-black">
                Closed At
              </div>
            </div>
            <div className="h-full w-full bg-white overflow-y-scroll ">
              {complaints.map((c, index) => {
                return (
                  <div className="w-full h-[6vh] flex border-b-[1.5px] border-black">
                    <div className="w-[5%] h-full border-x-[1.5px] flexCenter border-black text-lg font-semibold">
                      {index + 1}
                    </div>
                    <div className="w-[40%] h-full border-r-[1.5px] flexStart px-3 border-black">
                      {c.complaintDescription}
                    </div>
                    <div className="w-[17%] h-full border-r-[1.5px] flexStart px-3 border-black">
                      {c.department}
                    </div>
                    <div className="w-[14%] h-full px-2 border-r-[1.5px] flexCenter border-black">
                      {c.resolutionStatus}
                    </div>
                    <div className="w-[9%] h-full  border-r-[1.5px] flexCenter border-black">
                      {c._id.slice(15)}
                    </div>
                    <div className="w-[10%] h-full  border-r-[1.5px] flexCenter border-black">
                      {c.timestamps.createdAt.slice(0, 10)}
                    </div>
                    <div className="w-[10%] h-full border-r-[1.5px] flexCenter border-black">
                      {c.timestamps.closedAt === null
                        ? "N/A"
                        : c.timestamps.closedAt.slice(0, 10)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </span>
    </main>
  );
};

export default Page;
