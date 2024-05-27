import * as React from "react";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { useParams } from "react-router-dom";
import { useGetFilesQuery } from "../redux/ApiSlice";

const ReadPdf = () => {
  // Your render function
  const { data, isLoading } = useGetFilesQuery();
  const { title } = useParams();
  // const toolbarPluginInstance = toolbarPlugin();
  // const { Toolbar } = toolbarPluginInstance;

  if (isLoading) {
    return;
  }

  const pdf = data.data.filter((item) => item.title == title);

  return (
    <div
      className="rpv-core__viewer"
      style={{
        border: "1px solid rgba(0, 0, 0, 0.3)",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <div
        style={{
          alignItems: "center",
          backgroundColor: "#eeeeee",
          borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
          display: "flex",
          padding: "4px",
        }}
      >
        {/* <Toolbar /> */}
      </div>
      <div
        style={{
          flex: 1,
          overflow: "hidden",
        }}
      >
        <Viewer
          fileUrl={`https://e-library-2kxw.onrender.com/files/${pdf[0].pdf}`}
        />
      </div>
    </div>
  );
};

export default ReadPdf;
