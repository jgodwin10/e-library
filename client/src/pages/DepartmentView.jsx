import React, { useEffect, useState } from "react";
import Books from "../components/Books";
import { useLocation } from "react-router-dom";
import axios from "axios";

const DepartmentView = () => {
  const location = useLocation().pathname;

  console.log(location);

  const [allImage, setAllImage] = useState([]);
  const [pdfFile, setPdfFile] = useState(null);
  const [items, setItems] = useState("");

  setTimeout(() => {
    
  }, 2000);

  useEffect(() => {
     getPdf();
  }, []);

  const getPdf = async () => {
    const result = await axios.get("http://localhost:3000/get-files");
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
  }, [location]);

  console.log(allImage);

  console.log(items);

  return (
    <div className=" max-w-[1440px] mx-auto md:px-8 px-6">
      <h1 className="text-center md:text-3xl text-[22px] -mb-10 pt-8 font-semibold">
        Departments Books
      </h1>
      <div className="grid grid-cols-1 py-16  lg:gap-x-8 md:gap-x-6 sm:gap-x-4 sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4">
        {/* <Books />
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
        <Books /> */}
      </div>
    </div>
  );
};

export default DepartmentView;
