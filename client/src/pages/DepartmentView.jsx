import React, { useEffect, useState } from "react";
import Books from "../components/Books";
import { useLocation } from "react-router-dom";
import axios from "axios";

const DepartmentView = () => {
  const location = useLocation().pathname;

  const [allImage, setAllImage] = useState([]);
  const [pdfFile, setPdfFile] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    getPdf();
  }, []);

  const getPdf = async () => {
    const result = await axios.get(
      "https://e-library-server-mu.vercel.app/get-files"
    );
    setAllImage(result.data.data);
  };

  useEffect(() => {
    if (location == "/computer-science") {
      setItems(allImage.filter((item) => item.category == "Computer Science"));
    }

    if (location == "/physics") {
      setItems(allImage.filter((item) => item.category == "Physics"));
    }
    if (location == "/mathematics") {
      setItems(allImage.filter((item) => item.category == "Mathematics"));
    }
    if (location == "/chemistry") {
      setItems(allImage.filter((item) => item.category == "Chemistry"));
    }
  }, [allImage]);

  return (
    <div className=" max-w-[1440px] mx-auto md:px-8 px-6">
      <h1 className="text-center md:text-3xl text-[22px] pb-8 -mb-10 pt-8 font-semibold">
        {location == "/computer-science" && <p>Computer Science Books</p>}
        {location == "/mathematics" && <p>Mathematics Books</p>}
        {location == "/chemistry" && <p>Chemistry Books</p>}
        {location == "/physics" && <p>Physics Books</p>}
      </h1>
      <div className="grid grid-cols-1 py-16  lg:gap-x-8 md:gap-x-6 sm:gap-x-4 sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4">
        {items.map((item, index) => {
          return <Books key={index} pdf={item} />;
        })}
      </div>
    </div>
  );
};

export default DepartmentView;
