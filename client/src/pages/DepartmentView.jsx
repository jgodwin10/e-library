import React, { useEffect, useState } from "react";
import Books from "../components/Books";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { useGetFilesQuery } from "../redux/ApiSlice";
import Loading from "../components/Loading";

const DepartmentView = () => {
  const { title } = useParams();
  const { data, isLoading } = useGetFilesQuery();
  const [allImage, setAllImage] = useState([]);
  const [pdfFile, setPdfFile] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data?.data?.filter((item) => item.category == title));
  }, [data]);

  // useEffect(() => {
  //   if (location == "/computer-science") {
  //     setItems(
  //       data?.data?.filter((item) => item.category == "Computer Science")
  //     );
  //   }

  //   if (location == "/physics") {
  //     setItems(data?.data?.filter((item) => item.category == "Physics"));
  //   }
  //   if (location == "/mathematics") {
  //     setItems(data?.data?.filter((item) => item.category == "Mathematics"));
  //   }
  //   if (location == "/chemistry") {
  //     setItems(data?.data?.filter((item) => item.category == "Chemistry"));
  //   }
  // }, [data]);

  if (isLoading) {
    return <Loading />;
  }

  // useEffect(() => {
  //   getPdf();
  // }, []);

  // const getPdf = async () => {
  //   const result = await axios.get(
  //     "https://e-library-2kxw.onrender.com/get-files"
  //   );
  //   setAllImage(result.data.data);
  // };

  if (data?.data?.length <= 0) {
    return (
      <div className="flex items-center justify-center max-w-[1440px] mx-auto md:px-8 px-4 h-[50vh]">
        <p className="md:text-4xl font-semibold text-2xl">
          Book can't be found
        </p>
      </div>
    );
  }

  if (items.length == 0) {
    return (
      <div className=" max-w-[1440px] mx-auto md:px-8 px-6">
        <h1 className="text-center md:text-3xl text-[22px] pb-8 -mb-10 pt-8 font-semibold">
          {`${title} Books`}
        </h1>
        <div className="h-[40vh] md:text-xl  flex justify-center items-center">
          No Book available for {title}
        </div>
      </div>
    );
  }

  return (
    <div className=" max-w-[1440px] mx-auto md:px-8 px-6">
      <h1 className="text-center md:text-3xl text-[22px] pb-8 -mb-10 pt-8 font-semibold">
        {/* {location == "/computer-science" && <p>Computer Science Books</p>}
        {location == "/mathematics" && <p>Mathematics Books</p>}
        {location == "/chemistry" && <p>Chemistry Books</p>}
        {location == "/physics" && <p>Physics Books</p>} */}
        {`${title} Books`}
      </h1>
      <div className="grid grid-cols-1 py-16  lg:gap-x-8 md:gap-x-6 sm:gap-x-4 sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4">
        {items?.map((item, index) => {
          return <Books key={index} pdf={item} />;
        })}
      </div>
    </div>
  );
};

export default DepartmentView;
