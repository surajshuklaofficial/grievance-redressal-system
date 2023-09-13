import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Form,
} from "react-router-dom";
import Home from "./container/Home/Home.jsx";
import Page from "./container/Control/Page.jsx";
import AuthForm from "./packages/AuthForm/AuthForm.jsx";

const App = () => {
  const pathname = window.location.pathname;
  const checkRoute = pathname === "/form";
  return (
    <div className="">
      <Router>
        {!checkRoute && <Navbar />}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/profile" element={<Page />} />
          <Route exact path="/form" element={<AuthForm />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
