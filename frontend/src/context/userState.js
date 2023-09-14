import React, { useEffect, useState } from "react";
import userContext from "./userContext";
import { BASE_URL } from "../config";

const Userstate = ({ children }) => {
  const [user, setUser] = useState({ firstName: "", email: "" });
  const [complaints, setComplaints] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch(`${BASE_URL}/v1/user/profile`, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setUser({ firstName: data.user.firstName, email: data.user.email });
          setComplaints(data.user.complaints);
        })
        .catch(null);
    }
  }, []);
  return (
    <userContext.Provider value={{ user, complaints }}>
      {children}
    </userContext.Provider>
  );
};

export default Userstate;
