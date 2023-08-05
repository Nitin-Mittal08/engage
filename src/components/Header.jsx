import React from "react";
import { useNavigate } from "react-router-dom";
import { BiSearch, BiHomeAlt } from "react-icons/bi";
import { MdOutlineExplore } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { useAuth } from "../contexts/AuthProvider";


const Header = () => {
  const navigate = useNavigate();
  const {logoutUser} = useAuth();
  return (
    <>
      <nav className="w-full sticky top-0 min-h-20 sm:18 left-0 right-0 leading-10 z-40 drop-shadow-xl bg-white shadow">
        <div className="flex justify-between relative items-center p-4 sm:p-2  h-full">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div className="text-4xl first-letter:text-blue-400 uppercase ">
              Engage
            </div>
          </div>
          <button className="flex items-center bg-blue-400 px-4 py-1 gap-3 text-lg uppercase rounded-lg" onClick={logoutUser}>Logout <IoIosLogOut/></button>
        </div>
      </nav>
    </>
  );
};

export default Header;
