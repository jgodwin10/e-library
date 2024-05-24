import React, { useEffect, useState } from "react";
import PdfComp from "../PdfComp";
import { pdfjs } from "react-pdf";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useGetFilesQuery } from "../redux/ApiSlice";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const ReadPdf = () => {
  const [pdfFile, setPdfFile] = useState(null);

  const { title } = useParams();

  const { data, isLoading } = useGetFilesQuery();

  if (isLoading) {
    return;
  }

  const pdf = data.data.filter((item) => item.title == title);

  return (
    <div className="">
      <PdfComp
        pdfFile={`https://e-library-2kxw.onrender.com/files/${pdf[0].pdf}`}
      />
    </div>
  );
};

export default ReadPdf;
