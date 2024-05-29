import React from "react";
import { Link } from "react-router-dom";
import Book from "../images/Books.jpg";

const Faculties = () => {
  return (
    <div className="">
      <div className="text-center md:text-2xl font-semibold pt-10">
        Faculties
      </div>
      <div className="max-w-[1440px] py-8 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 mx-auto px-4">
        <Link
          to={"/physical-science"}
          className="bg-white rounded-md border-2 border-blue-500 duration-500 md:pt-3 p-2 md:px-3"
        >
          <img className="rounded-md" src={Book} alt="" />
          <p className="text-blue-500  cursor-pointer md:text-[22px] text-center font-semibold py-1 md:pt-3 md:pb-4">
            Physical Science
          </p>
        </Link>
        <div className="bg-white border-2 border-blue-500 rounded-md md:pt-3 p-2 md:px-3">
          <img className="rounded-md" src={Book} alt="" />
          <p className="text-blue-500 cursor-pointer md:text-[22px] text-center font-semibold py-1 md:pt-3 md:pb-4">
            Life Science
          </p>
        </div>
        <div className="bg-white border-2 border-blue-500 rounded-md md:pt-3 p-2 md:px-3">
          <img className="rounded-md" src={Book} alt="" />
          <p className="text-blue-500 cursor-pointer md:text-[22px] text-center font-semibold py-1 md:pt-3 md:pb-4">
            Law
          </p>
        </div>
        <div className="bg-white border-2 border-blue-500 rounded-md md:pt-3 p-2 md:px-3">
          <img className="rounded-md" src={Book} alt="" />
          <p className="text-blue-500 cursor-pointer md:text-[22px] text-center font-semibold py-1 md:pt-3 md:pb-4">
            Engineering
          </p>
        </div>
        <div className="bg-white border-2 border-blue-500 rounded-md md:pt-3 p-2 md:px-3">
          <img className="rounded-md" src={Book} alt="" />
          <p className="text-blue-500 cursor-pointer md:text-[22px] text-center font-semibold md:pt-3 py-1 md:pb-4">
            Education
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faculties;
