import React, { useState } from "react";
import "./form.css";
import * as BsIcons from "react-icons/bs";
import * as FcIcons from "react-icons/fc";
import * as FaIcons from "react-icons/fa";

const AuthForm = () => {
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
      <div className="w-full flex-col h-2/3 flexCenter Fgap-5 pt-[10vh] pb-3">
        <p className="font-bold text-3xl tracking-wide">Register/SignUp form</p>
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
          onClick={() => register()}
          className="bg-orange-500 w-1/6 h-[5vh] font-semibold tracking-wide text-white rounded-md hover:bg-white hover:text-orange-500 border-[1px] border-orange-500"
        >
          Submit
        </button>
      </div>
      <div className="w-1/2 border-[1.5px] border-gray-400" />
      <div className="h-1/3 flexCenter gap-4 w-[10vw]">
        <div className="rounded-full border-[2px] border-gray-400 p-2 cursor-pointer transition-all hover:scale-105">
          <FcIcons.FcGoogle className="text-2xl" />
        </div>
        <div className="rounded-full border-[2px] border-gray-400 p-2 cursor-pointer transition-all hover:scale-105">
          <FaIcons.FaFacebook className="text-2xl text-blue-600" />
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
