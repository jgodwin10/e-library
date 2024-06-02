import React from "react";
import Logo from "../images/logo.png";
import { IoLocationSharp } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
import { LuMail } from "react-icons/lu";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-blue-500">
      <div className="max-w-[1440px] px-4 md:px-8 pt-8 pb-14 mx-auto">
        <div className="bg-white w-fit p-2 rounded-xl">
          <img className="h-[48px]" src={Logo} alt="" />
        </div>
        <div className="grid md:grid-cols-3 pt-3 grid-cols-2 gap-4 lg:grid-cols-4">
          <div></div>
          <div>
            <h2 className="text-white pb-3 font-semibold md:text-start text-center md:text-2xl ">
              Quick Links
            </h2>
            <ul className="flex flex-col gap-y-2  items-center md:items-start text-white">
              <Link
                to={"/"}
                className="hover:text-white/70 md:text-base text-[13px]"
              >
                Home
              </Link>
              <Link
                to={"/all-books"}
                className="hover:text-white/70 duration-500 md:text-base text-[13px]"
              >
                All Books
              </Link>
              <Link
                to={"/faculties"}
                className="hover:text-white/70 duration-500 md:text-base text-[13px]"
              >
                Faculties
              </Link>
              {/* <Link
                to={"/about"}
                className="hover:text-white/70 duration-500 md:text-base text-[13px]"
              >
                About
              </Link> */}
              <Link
                to={"/find-book"}
                className="hover:text-white/70 duration-500 md:text-base text-[13px]"
              >
                Can't Find A Book
              </Link>
              {/* <Link
                to={"/contact"}
                className="hover:text-white/70 duration-500 md:text-base text-[13px]"
              >
                Contact
              </Link> */}
            </ul>
          </div>
          <div>
            <h2 className="text-white font-semibold pb-2 md:text-xl">
              Contact Us
            </h2>
            <div className="flex items-center text-white md:text-base text-[13px]">
              <IoLocationSharp className="mr-2" />
              Ekpoma, Edo State
            </div>
            <div className="flex items-center text-white  md:text-base text-[13px]">
              <MdLocalPhone className="mr-2" />
              +234CallAAUE
            </div>
            <div className="flex items-center text-white md:text-base text-[13px]">
              <LuMail className="mr-2" />
              Info@aaue.com
            </div>
          </div>

          <p className="text-white capitalize">
            providing access to content, this library offer features for
            organizing, searching, and retrieving information
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
