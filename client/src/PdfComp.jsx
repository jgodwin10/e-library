import { useState } from "react";
import { Document, Page } from "react-pdf";

function PdfComp(props) {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="bg-[#dedede] w-[100%] pdf-div p-[50px]">
      <p>
        Page {pageNumber} of {numPages}
      </p>
      <Document
      
        file={props.pdfFile}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {Array.apply(null, Array(numPages))
          .map((x, i) => i + 1)
          .map((page) => {
            return (
              <Page
                pageNumber={page}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            );
          })}
      </Document>
    </div>
  );
}
export default PdfComp;
