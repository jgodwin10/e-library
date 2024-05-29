import React from "react";
import BorrowBook from "./BorrowBook";
import { useMyBorrowQuery } from "../redux/ApiSlice";
import Loading from "../components/Loading";
import { LoaderIcon } from "react-hot-toast";

const Collections = () => {
  const users = JSON.parse(localStorage.getItem("details"));
  const { data, isLoading } = useMyBorrowQuery(users?.matric);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className=" max-w-[1600px] pb-10 mx-auto mt-8 md:px-8 px-4">
      <h2 className="text-center font-semibold pb-7 md:text-2xl text-[18px]">
        Borrowed Books
      </h2>
      <div className="grid gap-x-4 grid-cols-2 lg:grid-cols-4 md:grid-cols-3">
        {data.map((index, item) => {
          return <BorrowBook key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Collections;
