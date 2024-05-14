import React from "react";
import Books from "./Books";

const AllBooks = () => {
  return (
    <div className="max-w-[1440px] mx-auto mt-4 md:px-8 px-6">
      <h2 className="text-center md:text-xl text-[18px] font-semibold py-5 ">
        All Available Books
      </h2>
      <div className=" grid gap-x-3 md:gap-x-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2">
        <Books />
        <Books />
        <Books />
        <Books />
        <Books />
        <Books />
        <Books />
        <Books />
        <Books />
        <Books />
        <Books />
        <Books />
        <Books />
      </div>
    </div>
  );
};

export default AllBooks;
