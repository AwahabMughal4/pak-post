import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  return (
    <div className="py-2 pl-5 ">
      <div className="flex flex-row space-x-2 items-center justify-between">
        <Link to={"/"}>
          <div className="flex flex-row items-center space-x-2">
            <img
              src={logo}
              alt=""
              className="w-[60px] h-[30px] cursor-pointer"
            />
            <h1 className="text-[25px] font-bold italic text-[color:var(--primary-color)]">
              PAKISTAN POST
            </h1>
          </div>
        </Link>
        <div className=" ">
          <ul className=" bg-[color:var(--primary-color)] ml-2 rounded-l-full  flex flex-row h-full">
            <Link to={"/"}>
              <li className="px-8 py-2 space-x-5 border-l  hover:transform hover:-skew-x-12 -skew-x-12 h-full text-white font-bold hover:bg-[color:var(--secondary-color)]  bg-[color:var(--primary-color)]">
                Home
              </li>
            </Link>

            <Link to={"/services"}>
              <li className="px-8 py-2 space-x-5 text-white  hover:transform hover:-skew-x-12  font-bold hover:bg-[color:var(--secondary-color)]  bg-[color:var(--primary-color)]">
                Mail Service
              </li>
            </Link>
            <Link to={"/services"}>
              <li className="px-8 py-2 space-x-5 text-white  hover:transform hover:-skew-x-12  font-bold hover:bg-[color:var(--secondary-color)]  bg-[color:var(--primary-color)]">
                Express Service
              </li>
            </Link>
            <Link to={"/stamps"}>
              <li className="px-8 py-2 space-x-5 text-white hover:transform hover:-skew-x-12  font-bold hover:bg-[color:var(--secondary-color)] bg-[color:var(--primary-color)]">
                Stamps
              </li>
            </Link>

            <Link to={"/news"}>
              <li className="px-8 py-2 space-x-5 text-white  hover:transform hover:-skew-x-12  font-bold hover:bg-[color:var(--secondary-color)] bg-[color:var(--primary-color)]">
                News/Tenders
              </li>
            </Link>

            <Link to={"/track"}>
              <li className="px-8 py-2 space-x-5 text-white hover:transform hover:-skew-x-12  font-bold hover:bg-[color:var(--secondary-color)] bg-[color:var(--primary-color)]">
                Track
              </li>
            </Link>

            <Link to={"/about"}>
              <li className="px-8 py-2 space-x-5 text-white  hover:transform hover:-skew-x-12  font-bold hover:bg-[color:var(--secondary-color)] bg-[color:var(--primary-color)]">
                About Us
              </li>
            </Link>

            <Link to={"/contact"}>
              <li className="px-8 py-2 space-x-5 text-white hover:transform hover:-skew-x-12 font-bold hover:bg-[color:var(--secondary-color)] bg-[color:var(--primary-color)]">
                Contact Us
              </li>
            </Link>

            <Link to={"/tools"}>
              <li className="px-8 py-2 space-x-5 text-white  hover:transform  ml-1 font-bold hover:bg-[color:var(--secondary-color)]  bg-[color:var(--primary-color)]">
                Quick Tools
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
