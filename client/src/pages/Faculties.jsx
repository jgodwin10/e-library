import React from "react";
import { Link } from "react-router-dom";
import Book from "../images/Books.jpg";

const Faculties = () => {
  return (
    <div className="">
      <div className="text-center md:text-2xl font-semibold pt-10">
        Faculties
      </div>
      <div className="max-w-[1440px] py-8 grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 xl:grid-cols-5 gap-4 md:gap-6 mx-auto px-4">
        <Link
          to={"/physical-science"}
          className="bg-white rounded-md border-2 border-blue-500 duration-500 md:pt-3 p-2 md:px-3"
        >
          <p className="text-blue-500  cursor-pointer md:text-[22px] text-center font-semibold py-1 md:pt-3 md:pb-4">
            Physical Science
          </p>
        </Link>
        <Link
          to={"/life-science"}
          className="bg-white border-2 border-blue-500 rounded-md md:pt-3 p-2 md:px-3"
        >
          <p className="text-blue-500 cursor-pointer md:text-[22px] text-center font-semibold py-1 md:pt-3 md:pb-4">
            Life Science
          </p>
        </Link>
        <Link
          to={"/law"}
          className="bg-white border-2 border-blue-500 rounded-md md:pt-3 p-2 md:px-3"
        >
          <p className="text-blue-500 cursor-pointer md:text-[22px] text-center font-semibold py-1 md:pt-3 md:pb-4">
            Law
          </p>
        </Link>
        <Link
          to={"/engineering"}
          className="bg-white border-2 border-blue-500 rounded-md md:pt-3 p-2 md:px-3"
        >
          <p className="text-blue-500 cursor-pointer md:text-[22px] text-center font-semibold py-1 md:pt-3 md:pb-4">
            Engineering
          </p>
        </Link>
        <Link
          to={"/education"}
          className="bg-white border-2 border-blue-500 rounded-md md:pt-3 p-2 md:px-3"
        >
          <p className="text-blue-500 cursor-pointer md:text-[22px] text-center font-semibold md:pt-3 py-1 md:pb-4">
            Education
          </p>
        </Link>
        <Link
          to={"/environmental"}
          className="bg-white border-2 border-blue-500 rounded-md md:pt-3 p-2 md:px-3"
        >
          <p className="text-blue-500 cursor-pointer md:text-[22px] text-center font-semibold md:pt-3 py-1 md:pb-4">
            Environmental
          </p>
        </Link>
        <Link
          to={"/management-science"}
          className="bg-white border-2 border-blue-500 rounded-md md:pt-3 p-2 md:px-3"
        >
          <p className="text-blue-500 cursor-pointer md:text-[22px] text-center font-semibold md:pt-3 py-1 md:pb-4">
            Management Science
          </p>
        </Link>
        <Link
          to={"/art"}
          className="bg-white border-2 border-blue-500 rounded-md md:pt-3 p-2 md:px-3"
        >
          <p className="text-blue-500 cursor-pointer md:text-[22px] text-center font-semibold md:pt-3 py-1 md:pb-4">
            Art
          </p>
        </Link>
        <Link
          to={"/agriculture"}
          className="bg-white border-2 border-blue-500 rounded-md md:pt-3 p-2 md:px-3"
        >
          <p className="text-blue-500 cursor-pointer md:text-[22px] text-center font-semibold md:pt-3 py-1 md:pb-4">
            Agriculture
          </p>
        </Link>
        <Link
          to={"/social-science"}
          className="bg-white border-2 border-blue-500 rounded-md md:pt-3 p-2 md:px-3"
        >
          <p className="text-blue-500 cursor-pointer md:text-[22px] text-center font-semibold md:pt-3 py-1 md:pb-4">
            Social Science
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Faculties;
