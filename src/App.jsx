import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import bg from "./assets/logos/logo3.png";

const App = () => {
  return (
    <div className="min-h-[300vh]">
      <Navbar />
      <div className="flexCenter bg_ne border-t-[3px] border-green-500">
        <img src={bg} className="imgz" />
      </div>
    </div>
  );
};

export default App;
