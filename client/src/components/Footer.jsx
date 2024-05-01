import React from "react";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-blue-500">
      <div className="max-w-[1440px] px-4 md:px-8 pt-8 pb-14 mx-auto">
        <div className="bg-white w-fit p-2 rounded-xl">
          <img className="h-[48px]" src={Logo} alt="" />
        </div>
        <div className="grid md:grid-cols-3 pt-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div></div>
          <div>
            <h2 className="text-white pb-3 font-semibold md:text-start text-center text-[18px] md:text-2xl ">
              Quick Links
            </h2>
            <ul className="flex flex-col gap-y-2  font-semibold items-center md:items-start text-white">
              <Link
                to={"/"}
                className="hover:text-white/70 md:text-base text-[14px]"
              >
                Home
              </Link>
              <Link
                to={"/all-books"}
                className="hover:text-white/70 duration-500 md:text-base text-[14px]"
              >
                All Books
              </Link>
              <Link
                to={"/faculty"}
                className="hover:text-white/70 duration-500 md:text-base text-[14px]"
              >
                Faculty
              </Link>
              <Link
                to={"/about"}
                className="hover:text-white/70 duration-500 md:text-base text-[14px]"
              >
                About
              </Link>
              <Link
                to={"/find-book"}
                className="hover:text-white/70 duration-500 md:text-base text-[14px]"
              >
                Can't Find A Book
              </Link>
              <Link
                to={"/contact"}
                className="hover:text-white/70 duration-500 md:text-base text-[14px]"
              >
                Contact
              </Link>
            </ul>
          </div>
          <div>
                      <h2>Contact Us</h2>
                      
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
