import React, { useEffect, useState } from "react";
import Book from "../images/Books.jpg";



const Books = ({pdf}) => {
  

  return (
    <div className="bg-white mb-10 border rounded-xl">
      <img className="h-[300px] object-cover rounded-t-xl" src={`http://localhost:3000/files/${pdf.image}`} alt="" />
      <div className="text-center  rounded-xl ">
        <h2 className="md:text-xl pt-3 font-semibold">{ pdf.title}</h2>
        <p>{ pdf.author}</p>
        <button className="mt-4 border-2 rounded-b-xl font-semibold text-blue-500 text-[18px] hover:bg-blue-500 hover:text-white duration-1000 border-blue-500 w-full py-3">
          Borrow Now
        </button>
      </div>
      {/* PDF */}

      {/* <div className="uploaded">
        <h4>Uploaded PDF:</h4>
        <div className="output-div">
          {allImage == null
            ? ""
            : allImage.map((data) => {
                return (
                  <div className="inner-div">
                    <h6>Title: {data.title}</h6>
                    <button
                      className="btn btn-primary"
                      onClick={() => showPdf(data.pdf)}
                    >
                      Show Pdf
                    </button>
                  </div>
                );
              })}
        </div>
      </div>
      <PdfComp pdfFile={pdfFile} /> */}
    </div>
  );
};

export default Books;
