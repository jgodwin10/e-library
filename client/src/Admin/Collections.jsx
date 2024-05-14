import React from "react";
import BorrowBook from "./BorrowBook";

const Collections = () => {
  return (
    <div className=" max-w-[1600px] pb-10 mx-auto mt-8 md:px-8 px-4">
      <h2 className="text-center font-semibold pb-7 md:text-2xl text-[18px]">
        Borrowed Books
      </h2>
      <div className="grid gap-x-4 grid-cols-2 lg:grid-cols-4 md:grid-cols-3">
        <BorrowBook />
        <BorrowBook />
        <BorrowBook />
        <BorrowBook />
        <BorrowBook />
        <BorrowBook />
        <BorrowBook />
      </div>
    </div>
  );
};

export default Collections;
