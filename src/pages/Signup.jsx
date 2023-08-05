import React, {useState,useEffect} from 'react'
import LoginImage from "../Assets/Images/loginpageImage.png";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider';
import { toast } from "react-hot-toast";
import {FaEye,FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { token, signUpUser } = useAuth();

  const [signUpCredentials, setSignUpCredentials] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
  });


  const signUpCredentialsChangeHandler = (event) => {
    const { name, value } = event.target;
    setSignUpCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const signUpHandler = async (signUpCredentials) => {
    const userDetails = await signUpUser(signUpCredentials);
    if (userDetails) {
      toast.success(`Welcome to Engage, ${userDetails?.firstName}!`);
    } else {
      toast.error("Signup failed!");
    }
  };

  const handleSubmit = (e) => {
    signUpCredentials.password === signUpCredentials.confirmPassword
      ? signUpHandler(signUpCredentials)
      : toast.error("Passwords don't match, please try again!");
  }

  // useEffect(() => {
  //   if (token)
  //     navigate(location?.state?.from.pathname || "/");
  // }, [token]);
 
  return (
    <>
      <div className="w-full min-h-screen flex">
        <div className="w-full flex flex-col bg-[#F8F9FA]">
          <div className="py-4 flex items-center justify-center">
            <div className="text-6xl first-letter:text-blue-400 my-4 uppercase f">
              Engage
            </div>
          </div>
          <div className="px-12 pb-6 sm:px-6 sm:pt-0 sm:py-3">
            <header className="flex justify-center">
              <span className="text-3xl font-semibold border-b-2 border-blue-400 pb-2 w-fit uppercase">
                Sign-Up
              </span>
            </header>
            <div className="pt-8">
            <div className="flex gap-4 mb-3 sm:gap-2 sm:mb-2">
            <div className="w-full">
                  <label className="block font-semibold">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className=" border-[#E4E7EB] w-full h-4 px-3 py-4 mt-2 text-gray-800 hover:outline-none focus:outline-none focus:ring-1 focus:ring-primary-light rounded"
                    onChange={signUpCredentialsChangeHandler}
                    required
                  />
                </div>
                <div className="w-full">
                  <label className="block font-semibold">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className=" border-[#E4E7EB] w-full h-4 px-3 py-4 mt-2 text-gray-800 hover:outline-none focus:outline-none focus:ring-1 focus:ring-primary-light rounded"
                    onChange={signUpCredentialsChangeHandler}
                    required
                  />
                </div>
            </div>
            <label className="block font-semibold">Username</label>
              <input
                type="text"
                name="username"
                placeholder="username@123"
                className=" border-[#E4E7EB] w-full h-4 px-3 py-4 mt-2 hover:outline-none focus:outline-none focus:ring-1 text-gray-600 focus:ring-blue-light rounded"
                onChange={signUpCredentialsChangeHandler}
                required
              />
              <label className="block mt-3 font-semibold">Password</label>
              <div className="relative">
              <div onClick={() => setShowPassword(!showPassword)} className="absolute top-2/3 right-3 -translate-y-2/3">{showPassword ? <FaEye size={25} /> : <FaEyeSlash size={25} />}</div>
              <input
                type={showPassword ? "text":"password"}
                name="password"
                placeholder="Password"
                className=" border-[#E4E7EB] w-full h-4 px-3 py-4 mt-2 hover:outline-none focus:outline-none text-gray-600 focus:ring-1 focus:ring-primary-light rounded"
                onChange={signUpCredentialsChangeHandler}
                required
              />
              </div>
              <label className="block mt-3 font-semibold">Confirm Password</label>
              <div className="relative">
              <div onClick={() => setShowPassword(!showPassword)} className="absolute top-2/3 right-3 -translate-y-2/3">{showPassword ? <FaEye size={25} /> : <FaEyeSlash size={25} />}</div>
              <input
                type={showPassword ? "text":"password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                className=" border-[#E4E7EB] w-full h-4 px-3 py-4 mt-2 hover:outline-none focus:outline-none text-gray-600 focus:ring-1 focus:ring-primary-light rounded"
                onChange={signUpCredentialsChangeHandler}
                required
              />
              </div>
              <div>
                <button
                  className="font-semibold w-full my-5 bg-blue-400 text-white py-2 px-6 rounded hover:bg-primary-light"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Sign Up
                </button>
                <div className="font-semibold flex flex-col items-center w-full">
                  <p>
                    Already have an account ? &nbsp;
                    <Link to="/login"><span
                      className="cursor-pointer text-red-500 hover:underline"
                    >
                      Login
                    </span></Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue-400 w-full md:hidden flex items-center justify-center"><img
          className="w-30"
          src={LoginImage}
          alt="engage"
        /></div>
      </div>
      
    </>
  )
}

export default Signup