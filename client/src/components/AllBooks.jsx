import React, { useEffect, useState } from "react";
import Books from "./Books";
import axios from "axios";
import { useSelector } from "react-redux";
import { useGetFilesQuery } from "../redux/ApiSlice";
import Loading from "./Loading";

const AllBooks = () => {
  const [allImage, setAllImage] = useState([]);
  const [pdfFile, setPdfFile] = useState(null);
  const [item, setItem] = useState([]);
  const filter = useSelector((state) => state.Util.filter);
  const keyword = useSelector((state) => state.Util.keyword);

  const { data, isLoading } = useGetFilesQuery();

  useEffect(() => {
    if (filter == "" || keyword == "") {
      setItem(
        data?.data?.map((item, index) => {
          return <Books key={index} pdf={item} />;
        })
      );
    }

    if (filter && keyword == "title") {
      setItem(
        data?.data
          ?.filter((item) =>
            item.title.toLowerCase().includes(filter.toLowerCase())
          )
          .map((item, index) => {
            return <Books key={index} pdf={item} />;
          })
      );
    }

    if (filter && keyword == "category") {
      setItem(
        data?.data
          ?.filter((item) =>
            item.category.toLowerCase().includes(filter.toLowerCase())
          )
          .map((item, index) => {
            return <Books key={index} pdf={item} />;
          })
      );
    }

    if (filter && keyword == "author") {
      setItem(
        data?.data
          ?.filter((item) =>
            item.author.toLowerCase().includes(filter.toLowerCase())
          )
          .map((item, index) => {
            return <Books key={index} pdf={item} />;
          })
      );
    }
  }, [filter, data]);

  if (isLoading) {
    return <Loading />;
  }

  if (item?.length <= 0) {
    return (
      <div className="flex items-center justify-center max-w-[1440px] mx-auto md:px-8 px-4 h-[50vh]">
        <p className="md:text-4xl font-semibold text-2xl">
          Book can't be found
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-[1440px] mx-auto mt-9 md:px-8 px-6">
      <h2 className="text-center md:text-2xl text-[20px] font-semibold py-5 ">
        All Available Books
      </h2>
      <div className=" grid gap-x-3 md:gap-x-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2">
        {item}
      </div>
    </div>
  );
};

export default AllBooks;
