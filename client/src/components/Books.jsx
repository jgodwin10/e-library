import React, { useEffect, useState } from "react";
import Book from "../images/Books.jpg";

import PdfComp from "../PdfComp";
import ReadPdf from "../pages/ReadPdf";
import { useNavigate } from "react-router-dom";
import { useBorrowMutation } from "../redux/ApiSlice";
import toast from "react-hot-toast";

const Books = ({ pdf }) => {
  const users = JSON.parse(localStorage.getItem("details"));

  const [borrow] = useBorrowMutation();
  const navigate = useNavigate();

  const [formData, setformData] = useState({
    lastname: users?.lastname,
    firstname: users?.firstname,
    matric: users?.matric,
    title: pdf?.title,
    author: pdf?.author,
    image: pdf?.image,
    pdf: pdf?.pdf,
    category: users?.department,
  });

  const readNow = () => {
    navigate(`/pdf/${pdf.title}`);
  };

  const handleBorrow = async () => {
    if (users?.isAdmin == "false") {
      try {
        const res = await borrow(formData).unwrap();
        toast.success("Book Successfully Borrowed");
      } catch (err) {}
    } else if (users?.isAdmin == "true") {
      toast.error("Admin can't borrow Books");
    } else {
      toast.error("Only Logged in student can Borrow Books");
    }

    if (!users) {
      toast.error("Only Logged in student can Borrow Books");
    }
  };

  return (
    <div className="bg-white mb-10 border rounded-xl">
      <img
        className="md:h-[300px] h-[130px] object-cover w-full rounded-t-xl"
        src={`https://e-library-2kxw.onrender.com/files/${pdf.image}`}
        alt=""
      />
      <div className="text-center  rounded-xl ">
        <h2 className="md:text-xl pt-3 font-semibold">{pdf.title}</h2>

        <p>{pdf.author}</p>

        <button
          onClick={handleBorrow}
          className="mt-4 border-2 font-semibold text-blue-500 hover:bg-blue-500 hover:text-white duration-1000 border-blue-500 w-full md:py-3 md:text-base text-[12px] py-2"
        >
          Borrow Now
        </button>
        <button
          onClick={readNow}
          className="border-2  rounded-b-xl font-semibold text-blue-500 hover:bg-blue-500 hover:text-white duration-1000 border-blue-500 w-full md:py-3 md:text-base text-[12px] py-2"
        >
          View Now
        </button>
      </div>
      {/* PDF */}
      {/* <div className="uploaded">
        <h4>Uploaded PDF:</h4>
        <div className="output-div">
          {pdf == null ? (
            ""
          ) : (
            <div className="inner-div">
              <h6>Title: {pdf.title}</h6>
              <button className="btn btn-primary" onClick={() => showPdf(pdf)}>
                Show Pdf
              </button>
            </div>
          )}
        </div>
      </div> */}

      {/* <PdfComp pdfFile={pdfFile} /> */}
    </div>
  );
};

export default Books;
