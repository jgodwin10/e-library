import React from "react";
import Logo from "../images/logo.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation().pathname;
  return (
    <>
      <div className="bg-white fixed md:relative top-0 left-0 w-full z-[9999999] md:px-20 py-5 px-4 items-center flex justify-between">
        <img className="h-[48px]" src={Logo} alt="" />
        <div className="border-2 w-[500px] hidden lg:flex rounded-3xl border-blue-500  h-[50px] justify-start">
          <input
            className="bg-transparent outline-none w-[90%] mx-auto"
            type="text"
          />
        </div>
        <div className="flex items-center">
          <p className="font-semibold cursor-pointer  text-white bg-blue-500 py-2 text-center md:text-base text-[14px] w-[70px] md:w-[100px] rounded-3xl mr-2 md:mr-5">
            Login
          </p>
          <p className="font-semibold cursor-pointer text-white bg-blue-500 py-2 text-center md:text-base text-[14px] w-[70px] md:w-[100px] rounded-3xl">
            Sign Up
          </p>
        </div>
      </div>
      <div className="bg-blue-500 hidden md:block shadow-2xl py-5">
        <ul className="flex justify-evenly items-center text-white">
          <Link
            to={"/"}
            className={` px-7 duration-500 block text-center rounded-3xl font-semibold py-2 ${
              location == "/" ? "bg-white  text-blue-500" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to={"/all-books"}
            className={` px-7 duration-500 block text-center rounded-3xl font-semibold py-2 ${
              location == "/all-books" ? "bg-white  text-blue-500" : ""
            }`}
          >
            All Books
          </Link>
          <Link
            to={"/faculty"}
            className={` px-7 duration-500 block text-center rounded-3xl font-semibold py-2 ${
              location == "/faculty" ? "bg-white  text-blue-500" : ""
            }`}
          >
            Faculty
          </Link>
          <Link
            to={"/about"}
            className={` px-7 duration-500 block text-center rounded-3xl font-semibold py-2 ${
              location == "/about" ? "bg-white  text-blue-500" : ""
            }`}
          >
            About
          </Link>
          <Link
            to={"/find-book"}
            className={` px-7 duration-500 block text-center rounded-3xl font-semibold py-2 ${
              location == "/find-book" ? "bg-white  text-blue-500" : ""
            }`}
          >
            Can't Find A Book
          </Link>
          <Link
            to={"/contact"}
            className={` px-7 duration-500 block text-center rounded-3xl font-semibold py-2 ${
              location == "/contact" ? "bg-white  text-blue-500" : ""
            }`}
          >
            Contact
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
