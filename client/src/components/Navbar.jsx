import React, { useState } from "react";
import Logo from "../images/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import { LiaTimesSolid } from "react-icons/lia";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation().pathname;

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };
  const handleSignup = () => {
    navigate("/register");
  };

  return (
    <>
      <div className="bg-white fixed md:relative top-0 left-0 w-full z-[9999999] md:px-20 py-5 px-6 items-center flex justify-between">
        <img className="h-[48px]" src={Logo} alt="" />
        <div className="border-2 w-[500px] hidden lg:flex rounded-3xl border-blue-500  h-[50px] justify-start">
          <input
            className="bg-transparent outline-none w-[90%] mx-auto"
            type="text"
          />
        </div>
        <div className="md:flex items-center hidden">
          <p
            onClick={handleLogin}
            className="font-semibold cursor-pointer  text-white bg-blue-500 py-2 text-center md:text-base text-[14px] w-[70px] md:w-[100px] rounded-3xl mr-2 md:mr-5"
          >
            Login
          </p>
          <p
            onClick={handleSignup}
            className="font-semibold cursor-pointer text-white bg-blue-500 py-2 text-center md:text-base text-[14px] w-[70px] md:w-[100px] rounded-3xl"
          >
            Sign Up
          </p>
        </div>
        <div className="md:hidden">
          <LuMenu onClick={() => setOpen(!open)} className="size-8 " />
        </div>
      </div>
      <div
        className={`bg-blue-500 ${
          !open && "-translate-x-[120vw] md:translate-x-0"
        } duration-700 fixed top-0 left-0 w-full h-screen md:h-auto md:w-auto z-[99999999] md:relative md:block shadow-2xl px-4 py-5`}
      >
        <ul className="flex md:justify-evenly md:items-center md:flex-row items-center flex-col pt-10 md:pt-0 md:h-auto h-full gap-y-5 text-white">
          <Link
            onClick={() => setOpen(!open)}
            to={"/"}
            className={` px-7 duration-500 block text-center md:w-auto w-[40%] rounded-3xl font-semibold py-2 ${
              location == "/" ? "bg-white  text-blue-500" : ""
            }`}
          >
            Home
          </Link>
          <Link
            onClick={() => setOpen(!open)}
            to={"/all-books"}
            className={` px-7 duration-500 block md:w-auto w-[40%] text-center rounded-3xl font-semibold py-2 ${
              location == "/all-books" ? "bg-white  text-blue-500" : ""
            }`}
          >
            All Books
          </Link>
          <Link
            onClick={() => setOpen(!open)}
            to={"/departments"}
            className={` px-7 duration-500 block text-center md:w-auto w-[40%] rounded-3xl font-semibold py-2 ${
              location == "/departments" ? "bg-white   text-blue-500" : ""
            }`}
          >
            Departments
          </Link>
          <Link
            onClick={() => setOpen(!open)}
            to={"/about"}
            className={` px-7 duration-500 block text-center md:w-auto w-[40%] rounded-3xl font-semibold py-2 ${
              location == "/about" ? "bg-white  text-blue-500" : ""
            }`}
          >
            About
          </Link>
          <Link
            onClick={() => setOpen(!open)}
            to={"/find-book"}
            className={` px-7 duration-500 block text-center md:w-auto w-[60%] rounded-3xl font-semibold py-2 ${
              location == "/find-book" ? "bg-white  text-blue-500" : ""
            }`}
          >
            Can't Find A Book
          </Link>
          <Link
            onClick={() => setOpen(!open)}
            to={"/contact"}
            className={` px-7 duration-500 block text-center md:w-auto w-[40%] rounded-3xl font-semibold py-2 ${
              location == "/contact" ? "bg-white  text-blue-500" : ""
            }`}
          >
            Contact
          </Link>
          <div className="flex items-center pt-8 md:hidden">
            <p
              onClick={() => {
                setOpen(!open);
                handleLogin()
              }}
              className="font-semibold cursor-pointer  text-blue-500 bg-white hover:bg-white/70 duration-500 py-2 text-center md:text-base text-[14px] w-[100px] rounded-3xl mr-2 md:mr-5"
            >
              Login
            </p>
            <p
              onClick={() => {
                setOpen(!open);
                handleSignup()
              }}
              className="font-semibold cursor-pointer text-blue-500 bg-white py-2 hover:bg-white/70 duration-500 text-center md:text-base text-[14px] w-[100px] rounded-3xl"
            >
              Sign Up
            </p>
          </div>
        </ul>
        <LiaTimesSolid
          onClick={() => setOpen(!open)}
          className={`size-9  absolute md:hidden top-5 duration-500 right-7 text-white ${
            open && "rotate-[360deg]"
          }`}
        />
      </div>
    </>
  );
};

export default Navbar;
