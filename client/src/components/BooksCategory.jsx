import React from "react";
import Book from "../images/Books.jpg";
import { Link } from "react-router-dom";

const BooksCategory = () => {
  return (
    <div className="bg-blue-500 relative">
      <div className="bg-white w-[200px] rounded-md h-[50px] text-2xl font-semibold flex justify-center items-center absolute left-[25%] md:left-[45%] -top-6 shadow-2xl">
        Faculties
      </div>
      <div className="max-w-[1440px] py-20 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 mx-auto px-4">
        <Link
          to={"/physical-science"}
          className="bg-white rounded-md duration-500 md:pt-3 p-2 md:px-3"
        >
          <img className="rounded-md" src={Book} alt="" />
          <p className="text-blue-500  cursor-pointer md:text-[22px] text-center font-semibold py-1 md:pt-3 md:pb-4">
            Physical Science
          </p>
        </Link>
        <Link
          to={"life-science"}
          className="bg-white rounded-md md:pt-3 p-2 md:px-3"
        >
          <img className="rounded-md" src={Book} alt="" />
          <p className="text-blue-500 cursor-pointer md:text-[22px] text-center font-semibold py-1 md:pt-3 md:pb-4">
            Life Science
          </p>
        </Link>
        <div className="bg-white rounded-md md:pt-3 p-2 md:px-3">
          <img className="rounded-md" src={Book} alt="" />
          <p className="text-blue-500 cursor-pointer md:text-[22px] text-center font-semibold py-1 md:pt-3 md:pb-4">
            Law
          </p>
        </div>
        <div className="bg-white rounded-md md:pt-3 p-2 md:px-3">
          <img className="rounded-md" src={Book} alt="" />
          <p className="text-blue-500 cursor-pointer md:text-[22px] text-center font-semibold py-1 md:pt-3 md:pb-4">
            Engineering
          </p>
        </div>
        <Link
          to={"education"}
          className="bg-white rounded-md md:pt-3 p-2 md:px-3"
        >
          <img className="rounded-md" src={Book} alt="" />
          <p className="text-blue-500 cursor-pointer md:text-[22px] text-center font-semibold md:pt-3 py-1 md:pb-4">
            Education
          </p>
        </Link>
      </div>
    </div>
  );
};

export default BooksCategory;
