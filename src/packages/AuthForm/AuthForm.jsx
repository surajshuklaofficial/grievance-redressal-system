import React, { useState } from "react";
import "./form.css";
import * as BsIcons from "react-icons/bs";
import * as FcIcons from "react-icons/fc";
import * as FaIcons from "react-icons/fa";
import * as RxIcons from "react-icons/rx";

const AuthForm = ({ varience }) => {
  const [email, setEmail] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [password, setPassword] = useState(null);
  const [number, setNumber] = useState(null);

  const register = () => {
    fetch("http://localhost:3002/api/v1/user/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        contactNumber: number,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Registered");
        localStorage.setItem("token", data.token);
        window.location = "/";
      });
  };
  const login = () => {
    fetch("http://localhost:3002/api/v1/user/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Logged In");
        localStorage.setItem("token", data.token);
        window.location = "/";
      });
  };
  if (varience !== "LOGIN") {
    return (
      <div
        id="auth"
        className="min-h-[100vh]w-full flexCenter flex-col gap-4 bg-white"
      >
        <span
          onClick={() => {
            window.location = "/";
          }}
          className="bg-orange-600 cursor-pointer p-2 rounded-full absolute left-3 top-3 hover:bg-orange-500 transition-all"
        >
          <BsIcons.BsArrowLeft className="text-white text-2xl" />
        </span>
        <div className="w-full flex-col h-2/3 flexCenter gap-5 pt-[10vh] pb-3">
          <p className="font-bold text-3xl tracking-wide">
            Register/SignUp form
          </p>
          <div className="w-1/2 border-[1.5px] border-gray-400" />
          <p className="w-[40vw] font-semibold flexStart ">
            Enter the Details Below to Register
          </p>
          <span className="w-[40vw] flexCenter gap-2">
            <input
              className="w-1/2"
              placeholder="First Name"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <input
              className="w-1/2"
              placeholder="Last Name"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </span>
          <input
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            placeholder="Contact Number"
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />
          <input
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input placeholder="Confirm Password" />
          <span>
            <input placeholder="Enter the Security Captcha" />
          </span>
          <button
            onClick={() => login()}
            className="bg-orange-500 w-1/6 h-[5vh] font-semibold tracking-wide text-white rounded-md hover:bg-white hover:text-orange-500 border-[1px] border-orange-500"
          >
            Submit
          </button>
        </div>
        <span className="relative w-1/2">
          <div className="w-full border-[1.5px] border-gray-400" />
          <div className="absolute top-[-13px] left-[20vw] text-gray-600 bg-white px-2">
            Or Continue with
          </div>
        </span>
        <div className="h-1/3 flexCenter gap-4 w-[10vw]">
          <div className="rounded-full border-[2px] border-gray-400 p-2 cursor-pointer transition-all hover:scale-105">
            <FcIcons.FcGoogle className="text-2xl" />
          </div>
          <div className="rounded-full border-[2px] border-gray-400 p-2 cursor-pointer transition-all hover:scale-105">
            <FaIcons.FaFacebook className="text-2xl text-blue-600" />
          </div>
        </div>

        <div className="flexCenter gap-2 tracking-tighter">
          Already a User?
          <p className="text-purple-600 underline font-semibold cursor-pointer hover:text-purple-400 ">
            Click here to Login!
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div
        id="auth"
        className="h-[70%] w-[50%] flexCenter flex-col gap-4 bg-white border-[1px] border-black"
      >
        <span>
          <RxIcons.RxCross2 />
        </span>
        <div className="w-full flex-col h-2/3 flexCenter gap-5 pt-[10vh] pb-3">
          <p className="font-bold text-3xl tracking-wide">
            Register/SignUp form
          </p>
          <div className="w-1/2 border-[1.5px] border-gray-400" />
          <p className="w-[40vw] font-semibold flexCenter ">
            Enter the Details Below to Login
          </p>
          <input
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <span>
            <input placeholder="Enter the Security Captcha" />
          </span>
          <button
            onClick={() => register()}
            className="bg-orange-500 w-1/6 h-[5vh] font-semibold tracking-wide text-white rounded-md hover:bg-white hover:text-orange-500 border-[1px] border-orange-500"
          >
            Submit
          </button>
        </div>
        <span className="relative w-1/2">
          <div className="w-full border-[1.5px] border-gray-400" />
        </span>
        <div className="h-1/3 flexCenter gap-4 w-[10vw]">
          <div className="rounded-full border-[2px] border-gray-400 p-2 cursor-pointer transition-all hover:scale-105">
            <FcIcons.FcGoogle className="text-2xl" />
          </div>
          <div className="rounded-full border-[2px] border-gray-400 p-2 cursor-pointer transition-all hover:scale-105">
            <FaIcons.FaFacebook className="text-2xl text-blue-600" />
          </div>
        </div>

        <div className="flexCenter gap-2 tracking-tighter">
          Not a User?
          <p className="text-purple-600 underline font-semibold cursor-pointer hover:text-purple-400 ">
            Click here to Register!
          </p>
        </div>
      </div>
    );
  }
};

export default AuthForm;