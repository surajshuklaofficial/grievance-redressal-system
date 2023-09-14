import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { login, register } from '../../actions/auth.js';

const Auth = () => {

  const dispatch = useDispatch();
  const [registered, setRegistered] = useState(true);
  const [formData, setFormData] = useState({departmentID: "", department: "", password: "", confirmPassword: ""});

  const handleFieldChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (registered) {
      dispatch(login(formData));
      setFormData({ departmentID: "", department: "", password: "", confirmPassword: ""});

    } else {
      if (formData.password === formData.confirmPassword) {
        dispatch(register(formData));
        setFormData({ departmentID: "", department: "", password: "", confirmPassword: ""});
      } else {
        alert("Password and Confirm Password are not matched!")
      }
    }
  }

  return (
    <div className="w-4/12 mx-auto my-16 p-6 bg-[#181818] text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center">{ registered ? 'Department Login' : 'Register Department'}</h2>

      <form onSubmit={handleFormSubmit} className="mt-6">
        <label className="block mb-2 text-sm">{registered ? "Department ID" : "Department" }:</label>
        <input
          className="w-full py-2 px-4 bg-[#303030] border border-[#FF6347] text-white rounded-md focus:outline-none focus:ring focus:border-[#FF6347]"
          type="text"
          name={registered ? "departmentID" : "department" }
          placeholder={registered ? "Enter ID" : "Enter Department" }
          value={registered ? formData.departmentID : formData.department }
          onChange={handleFieldChange}
          required
        />

        <label className="block mt-4 mb-2 text-sm">Password:</label>
        <input
          className="w-full py-2 px-4 bg-[#303030] border border-[#FF6347] text-white rounded-md focus:outline-none focus:ring focus:border-[#FF6347]"
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleFieldChange}
          required
        />

        { !registered && (
          <>
            <label className="block mt-4 mb-2 text-sm">Confirm Password:</label>
            <input
              className="w-full py-2 px-4 bg-[#303030] border border-[#FF6347] text-white rounded-md focus:outline-none focus:ring focus:border-[#FF6347]"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleFieldChange}
              required
            />
          </>
        )}

        <button
          className="w-full mt-8 py-2 bg-[#FF6347] text-white rounded-md hover:bg-[#FF4500] focus:outline-none focus:ring focus:border-[#FF4500]"
          type="submit"
        >
          {registered ? "LOGIN" : "REGISTER" }
        </button>
      </form>

      <p className="mt-4 text-center leading-5">
        {registered ? "Don't have an account?" : "Already Registered?" }{" "}
        <button className="text-[#FF6347] hover:underline" onClick={() => setRegistered((prevState) => !prevState)}>
          {registered ? "Register your Department" : "Login your Department" }
        </button>
      </p>
    </div>
  );
};

export default Auth;