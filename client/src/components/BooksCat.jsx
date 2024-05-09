import React from "react";
import Book from "../images/Books.jpg";
import { useNavigate } from "react-router-dom";

const BooksCat = ({ name, link }) => {
    const navigate = useNavigate()

    const handleNav = () => {
      navigate(`/${link}`);
    }

  return (
    <div className="bg-white mb-10 border rounded-xl">
      <img className="h-[300px] w-[100%] object-cover rounded-t-xl" src={Book} alt="" />
      <div className="text-center  rounded-xl ">
        <h2 className="md:text-xl pt-3 font-semibold">
          {name}
        </h2>

        <button onClick={handleNav} className="mt-4 border-2 rounded-b-xl font-semibold text-blue-500 text-[18px] hover:bg-blue-500 hover:text-white duration-1000 border-blue-500 w-full py-3">
          View Departments
        </button>
      </div>
    </div>
  );
};

export default BooksCat;
