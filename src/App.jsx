import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <div className="">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/prev" />
          {/* <Route exact path="/previouscomplaints" element={<Previous />} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
