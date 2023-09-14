import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./container/Home/Home.jsx";
import Page from "./container/Control/Page.jsx";
import AuthForm from "./packages/AuthForm/AuthForm.jsx";
import axios from "axios";
import { BASE_URL } from "./config.js";
import Userstate from "./context/userState.js";

const App = () => {
  const pathname = window.location.pathname;
  const checkRoute = pathname === "/form";
  return (
    <div>
      <Userstate>
        <Router>
          {!checkRoute && <Navbar />}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/profile" element={<Page />} />
            <Route exact path="/form" element={<AuthForm />} />
          </Routes>
        </Router>
      </Userstate>
    </div>
  );
};


export default App;
