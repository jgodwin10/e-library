import React, { useEffect, useState } from "react";
import Books from "./Books";
import axios from "axios";

const AllBooks = () => {
  const [allImage, setAllImage] = useState([]);
  const [pdfFile, setPdfFile] = useState(null);

  useEffect(() => {
    getPdf();
  }, []);

  const getPdf = async () => {
    const result = await axios.get(
      "https://e-library-2kxw.onrender.com/get-files"
    );
    setAllImage(result.data.data);
    console.log(allImage);
  };
  return (
    <div className="max-w-[1440px] mx-auto mt-7 md:px-8 px-6">
      <h2 className="text-center md:text-2xl text-[20px] font-semibold py-5 ">
        All Available Books
      </h2>
      <div className=" grid gap-x-3 md:gap-x-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2">
        {allImage.map((item, index) => {
          return <Books key={index} pdf={item} />;
        })}
      </div>
    </div>
  );
};

export default AllBooks;
