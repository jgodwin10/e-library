import React from 'react'
import Book from "../images/Books.jpg";

const BorrowBook = () => {
  return (
    <div className="bg-white mb-10 border rounded-xl">
      <img
        className="md:h-[300px] h-[130px] object-cover w-full rounded-t-xl"
        // src={`https://e-library-2kxw.onrender.com/files/${pdf.image}`}
        src={Book}
        alt=""
      />
      <div className="text-center  rounded-xl ">
        {/* <h2 className="md:text-xl pt-3 font-semibold">{pdf.title}</h2> */}
        <h2 className="md:text-xl md:pt-3 text-[14px] pt-2 font-semibold">
          Title
        </h2>
        {/* <p>{pdf.author}</p> */}
        <p className="md:text-base text-[12px]">Sewwh</p>
        <button className="mt-4 border-2 font-semibold text-blue-500 hover:bg-blue-500 hover:text-white duration-1000 border-blue-500 w-full md:py-3 md:text-base text-[12px] py-2">
          Refund Book
        </button>
        <button className="border-2  rounded-b-xl font-semibold text-blue-500 hover:bg-blue-500 hover:text-white duration-1000 border-blue-500 w-full md:py-3 md:text-base text-[12px] py-2">
          View Now
        </button>
      </div>
    </div>
  );
}

export default BorrowBook
