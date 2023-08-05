import React, { useEffect, useState } from "react";
import LoginImage from "../Assets/Images/loginpageImage.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
import {FaEye,FaEyeSlash } from "react-icons/fa";
import { toast } from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [loginCredentails, setLoginCredentials] = useState({
    username:"",
    password:""
  })

  const handleLoginInput =(e) => {
    const {name, value} = e.target;
    setLoginCredentials((prev) => ({...prev, [name]:value}))
  }

  const handleSubmit = (e) => {
    handleLogin(loginCredentails);
  }
  const handleLogin = async (loginCredentails) => {
    const userDetails = await loginUser(loginCredentails);
    console.log(loginCredentails);
    if(userDetails){
      toast.success(`Wecome back, ${userDetails?.firstName}`)
    }else{
      toast.error("Login failed! Please try again with correct credentials.");
    }

  }

  const loginAsGuestHandler = () => {
    setLoginCredentials((prev) => ({...prev, ...guestLoginDetails}));
    handleLogin(guestLoginDetails);
  }

  const {token, loginUser} = useAuth();

  const guestLoginDetails = {
    username:"NitinMittal",
    password:"NitinMittal123"
  }

  useEffect(() => {
    if (token)
      navigate(location?.state?.from.pathname || "/");
  },[token])
  return (
    <>
      <div className="w-full min-h-screen flex">
        <div className="bg-blue-400 w-full md:hidden flex items-center justify-center"><img
          className="w-30"
          src={LoginImage}
          alt="engage"
        /></div>
        <div className="w-full flex flex-col bg-[#F8F9FA]">
          <div className="py-4 flex items-center justify-center">
            <div className="text-6xl first-letter:text-blue-400 my-8 uppercase">
              Engage
            </div>
          </div>
          <div className="px-12 py-4 pb-8 sm:px-6 sm:pt-0 sm:py-3">
            <header className="flex justify-center">
              <span className="text-3xl font-semibold border-b-2 border-blue-400 pb-2 w-fit uppercase">
                Login
              </span>
            </header>
            <div className="pt-8">
            <label className="block font-semibold">Username</label>
              <input
                type="text"
                name="username"
                value={loginCredentails.username}
                placeholder="username@123"
                className=" border-[#E4E7EB] w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 text-gray-600 focus:ring-blue-light rounded"
                required
                onChange={handleLoginInput}
              />
              <label className="block mt-3 font-semibold">Password</label>
              <div className="relative">
              <div onClick={() => setShowPassword(!showPassword)} className="absolute top-2/3 right-3 -translate-y-2/3">{showPassword ? <FaEye size={25} /> : <FaEyeSlash size={25} />}</div>
              <input
                type={showPassword ? "text":"password"}
                name="password"
                value={loginCredentails.password}
                placeholder="Password"
                className=" border-[#E4E7EB] w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none text-gray-600 focus:ring-1 focus:ring-primary-light rounded"
                required
                onChange={handleLoginInput}
              />
              </div>
              <div>
                <button
                  className="font-semibold w-full my-6 bg-blue-400 text-white py-2 px-6 rounded hover:bg-primary-light"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Login
                </button>
                <div className="font-semibold flex flex-col items-center w-full" onClick={loginAsGuestHandler}>
                  <span
                    className="font-semibold cursor-pointer py-4 text-primary text-center underline hover:text-primary-light"
                  >
                    Guest Login
                  </span>
                  <p>
                    Don't have an account ? &nbsp;
                    <Link to="/signup"><span
                      className="cursor-pointer text-red-500 hover:underline"
                    >
                      Sign up!
                    </span></Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
