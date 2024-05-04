import React from "react";
import Books from "../components/Books";

const DepartmentView = () => {
  return (
    <div className=" max-w-[1440px] mx-auto md:px-8 px-6">
      <h1 className="text-center md:text-3xl text-[22px] -mb-10 pt-8 font-semibold">
        Departments Books
      </h1>
      <div className="grid grid-cols-1 py-16  lg:gap-x-8 md:gap-x-6 sm:gap-x-4 sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4">
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

export default DepartmentView;
