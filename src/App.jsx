import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./container/Home/Home.jsx";
import Page from "./container/Control/Page.jsx";
import { RecoilRoot, useSetRecoilState } from "recoil";
import AuthForm from "./packages/AuthForm/AuthForm.jsx";
import { userState } from "./store/atoms/user.js";
import axios from "axios";
import { BASE_URL } from "./config.js";

const App = () => {
  const pathname = window.location.pathname;
  const checkRoute = pathname === "/form";
  return (
    <div>
      <RecoilRoot>
        <Router>
          {!checkRoute && <Navbar />}
          <Init />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/profile" element={<Page />} />
            <Route exact path="/form" element={<AuthForm />} />
          </Routes>
        </Router>
      </RecoilRoot>
    </div>
  );
};

function Init() {
  const setUser = useSetRecoilState(userState);
  const token = localStorage.getItem("token");

  const init = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/v1/user/profile`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      if (!response) {
        setUser({
          isLoading: false,
          user: null,
        });
      }

      setUser({
        isLoading: false,
        user: response.data,
      });
    } catch (error) {
      setUser({
        isLoading: false,
        user: null,
      });
    }
  };

  useEffect(() => {
    init();
  }, []);
  return <></>;
}

export default App;
