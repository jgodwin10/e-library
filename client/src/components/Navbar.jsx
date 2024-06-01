import React, { useState } from "react";
import Logo from "../images/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import { LiaTimesSolid } from "react-icons/lia";
import Avatar from "../images/avatar.png";
import { search, word } from "../redux/Util";
import { useDispatch } from "react-redux";
import { FaSearch } from "react-icons/fa";
import { logout } from "../redux/Util";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [acc, setAcc] = useState(false);
  const user = JSON.parse(localStorage.getItem("token"));
  const details = JSON.parse(localStorage.getItem("details"));
  const [query, setSearch] = useState("");
  const [keyword, setKeyword] = useState("");
  const location = useLocation().pathname;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };
  const handleSignup = () => {
    navigate("/register");
  };

  const handleSearch = (e) => {
    dispatch(search(query));
    dispatch(word(keyword));
    navigate("/all-books");
    setOpen(!open);
  };

  const handleLogout = () => {
    navigate("/");
    window.location.reload(true);
    dispatch(logout());
  };

  return (
    <>
      <div className="bg-white fixed md:relative top-0 left-0 w-full z-[9999999] md:px-20 py-5 px-6 items-center flex justify-between">
        <img className="h-[48px]" src={Logo} alt="" />
        <div className="border-2 w-[500px] hidden md:flex rounded-3xl border-blue-500  h-[50px] justify-start">
          <div className="bg-blue-500 rounded-s-3xl  px-2 flex items-center justify-center">
            <select
              className="outline-none text-white bg-blue-500"
              name="keyword"
              id="keyword"
              onChange={(e) => setKeyword(e.target.value)}
            >
              <option value="">Search By</option>
              <option value="title">Book Title</option>
              <option value="author">Book Author</option>
              <option value="category">Departments</option>
            </select>
          </div>
          <input
            className="bg-transparent outline-none placeholder:text-blue-500 w-full px-4 mx-auto"
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for a BOOK here"
          />
          <div
            onClick={handleSearch}
            className="bg-blue-500 cursor-pointer w-16 flex justify-center items-center text-white rounded-e-3xl"
          >
            <FaSearch className="size-5" />
          </div>
        </div>
        {!user && (
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
        )}

        {user && (
          <div className="flex gap-x-4 items-center">
            <div className="relative">
              <img
                onClick={() => setAcc(!acc)}
                className="size-[48px] rounded-full cursor-pointer"
                src={Avatar}
                alt=""
              />

              {/* STUDENTS */}
              {details.isAdmin == "false" && (
                <div
                  className={`bg-blue-500 absolute z-[9999999999] top-14 text-white py-4 px-5 flex flex-col gap-3 duration-1000 rounded-lg shadow-2xl right-0 ${
                    !acc ? "-translate-y-[50vh]" : "translate-y-0"
                  } `}
                >
                  {/* <p
                    onClick={() => {
                      navigate("/profile");
                      setAcc(!acc);
                    }}
                    className="hover:text-black/80 duration-700 cursor-pointer"
                  >
                    Profile
                  </p> */}
                  <p
                    onClick={() => {
                      navigate("/collections");
                      setAcc(!acc);
                    }}
                    className="hover:text-black/80 duration-700 cursor-pointer"
                  >
                    Collections
                  </p>
                  <p
                    onClick={handleLogout}
                    className="hover:text-black/80 duration-700 cursor-pointer"
                  >
                    Logout
                  </p>
                </div>
              )}

              {/* ADMIN */}

              {details.isAdmin == "true" && (
                <div
                  className={`bg-blue-500 absolute z-[9999999999] w-40 top-14 text-white py-4 px-5 flex flex-col gap-3 duration-1000 rounded-lg shadow-2xl right-0 ${
                    !acc ? "-translate-y-[50vh]" : "translate-y-0"
                  } `}
                >
                  <p
                    onClick={() => {
                      navigate("/profile");
                      setAcc(!acc);
                    }}
                    className="hover:text-black/80 duration-700 cursor-pointer"
                  >
                    Profile
                  </p>
                  <p
                    onClick={() => {
                      navigate("/all-students");
                      setAcc(!acc);
                    }}
                    className="hover:text-black/80 duration-700 cursor-pointer"
                  >
                    All Students
                  </p>
                  <Link
                    to={"/upload"}
                    onClick={() => setAcc(!acc)}
                    className="hover:text-black/80 duration-700 cursor-pointer"
                  >
                    Upload Books
                  </Link>
                  <p
                    onClick={() => {
                      navigate("/borrowed-books");
                      setAcc(!acc);
                    }}
                    className="hover:text-black/80 duration-700 cursor-pointer"
                  >
                    Borrowed Books
                  </p>
                  {/* <p
                    onClick={() => {
                      navigate("/refunded-books");
                      setAcc(!acc);
                    }}
                    className="hover:text-black/80 duration-700 cursor-pointer"
                  >
                    Refunded Books
                  </p> */}
                  <p
                    onClick={handleLogout}
                    className="hover:text-black/80 duration-700 cursor-pointer"
                  >
                    Logout
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="md:hidden">
          <LuMenu onClick={() => setOpen(!open)} className="size-8 " />
        </div>
      </div>
      <div
        className={`bg-blue-500 ${
          !open && "-translate-x-[120vw] md:translate-x-0"
        } duration-700 fixed top-0 left-0 w-full h-screen md:h-auto md:w-auto z-[99999999] md:z-0 md:relative md:block shadow-2xl px-4 py-5`}
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
            to={"/faculties"}
            className={` px-7 duration-500 block text-center md:w-auto w-[40%] rounded-3xl font-semibold py-2 ${
              location == "/faculties" ? "bg-white   text-blue-500" : ""
            }`}
          >
            Faculties
          </Link>
          {/* <Link
            onClick={() => setOpen(!open)}
            to={"/about"}
            className={` px-7 duration-500 block text-center md:w-auto w-[40%] rounded-3xl font-semibold py-2 ${
              location == "/about" ? "bg-white  text-blue-500" : ""
            }`}
          >
            About
          </Link> */}
          <Link
            onClick={() => setOpen(!open)}
            to={"/find-book"}
            className={` px-7 duration-500 block text-center md:w-auto w-[60%] rounded-3xl font-semibold py-2 ${
              location == "/find-book" ? "bg-white  text-blue-500" : ""
            }`}
          >
            Can't Find A Book
          </Link>
          {/* <Link
            onClick={() => setOpen(!open)}
            to={"/contact"}
            className={` px-7 duration-500 block text-center md:w-auto w-[40%] rounded-3xl font-semibold py-2 ${
              location == "/contact" ? "bg-white  text-blue-500" : ""
            }`}
          >
            Contact
          </Link> */}
          {!user && (
            <div className="flex items-center pt-8 md:hidden">
              <p
                onClick={() => {
                  setOpen(!open);
                  handleLogin();
                }}
                className="font-semibold cursor-pointer  text-blue-500 bg-white hover:bg-white/70 duration-500 py-2 text-center md:text-base text-[14px] w-[100px] rounded-3xl mr-2 md:mr-5"
              >
                Login
              </p>
              <p
                onClick={() => {
                  setOpen(!open);
                  handleSignup();
                }}
                className="font-semibold cursor-pointer text-blue-500 bg-white py-2 hover:bg-white/70 duration-500 text-center md:text-base text-[14px] w-[100px] rounded-3xl"
              >
                Sign Up
              </p>
            </div>
          )}
          <div className="border-2 w-[90%] md:hidden flex mt-8 rounded-3xl border-white  h-[50px] justify-start">
            <div className="bg-white rounded-s-3xl  px-1 flex items-center justify-center">
              <select
                className="outline-none text-[13px] w-[90px] text-blue-500 bg-white"
                name="keyword"
                id="keyword"
                onChange={(e) => setKeyword(e.target.value)}
              >
                <option value="">Search By</option>
                <option value="title">Book Title</option>
                <option value="author">Book Author</option>
                <option value="category">Departments</option>
              </select>
            </div>
            <input
              className="bg-transparent placeholder:text-white outline-none w-full px-2 mx-auto"
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for a BOOK here"
            />
            <div
              onClick={handleSearch}
              className="bg-white cursor-pointer w-20 flex justify-center items-center text-blue-500 rounded-e-3xl"
            >
              <FaSearch className="size-5" />
            </div>
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
