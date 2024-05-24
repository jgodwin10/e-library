import React, { useEffect, useState } from "react";
import Book from "../images/Books.jpg";

import PdfComp from "../PdfComp";
import ReadPdf from "../pages/ReadPdf";
import { useNavigate } from "react-router-dom";

const Books = ({ pdf }) => {
  const navigate = useNavigate();

  const readNow = () => {
    navigate(`/pdf/${pdf.title}`)
  }

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

        <button className="mt-4 border-2 font-semibold text-blue-500 hover:bg-blue-500 hover:text-white duration-1000 border-blue-500 w-full md:py-3 md:text-base text-[12px] py-2">
          Borrow Now
        </button>
        <button onClick={readNow} className="border-2  rounded-b-xl font-semibold text-blue-500 hover:bg-blue-500 hover:text-white duration-1000 border-blue-500 w-full md:py-3 md:text-base text-[12px] py-2">
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
