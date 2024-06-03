import React, { useState } from "react";
import axios from "axios";
import upload from "../images/Upload.svg";
import pdf from "../images/pdf.png";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const submitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);
    formData.append("image", image);
    formData.append("author", author);
    formData.append("category", category);

    const result = await axios.post(
      "https://e-library-2kxw.onrender.com/upload-files",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    if (result.data.status == "ok") {
      toast.success("Uploaded Successfully!!!");
      setAuthor("");
      setCategory("");
      setFile("");
      setImage("");
      setTitle("");
      navigate("/");
    }
  };

  return (
    <div className="max-w-[1440px] mx-auto md:px-8 px-6 py-16">
      <form className="flex flex-col items-center" onSubmit={submitImage}>
        <h4 className="text-[20px] font-semibold md:text-2xl">
          Upload New Books
        </h4>
        <br />
        <label className="flex flex-col" htmlFor="title">
          Title
          <input
            type="text"
            className="border px-3 py-1 rounded-lg bg-[#F0F2F5]"
            placeholder="Title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />
        <label className="flex flex-col " htmlFor="title">
          Author Name
          <input
            type="text"
            className="border px-3 mt-1 py-1 rounded-lg bg-[#F0F2F5]"
            placeholder="Author's Name"
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </label>
        <br />
        <div className="flex gap-4">
          <div
            onClick={() => document.querySelector(".pdf").click()}
            className=" cursor-pointer"
          >
            <input
              type="file"
              name="file"
              id="file"
              accept="application/pdf"
              className="pdf"
              hidden
              onChange={({ target: { files } }) => {
                if (files) {
                  setFile(files[0]);
                }
              }}
            />
            <img className=" w-[350px]" src={pdf} alt="" />
            {file && <p>{file.name}</p>}
          </div>

          <div
            onClick={() => document.querySelector(".input").click()}
            className=" cursor-pointer"
          >
            <input
              type="file"
              name="file"
              id="file"
              className="input"
              hidden
              onChange={({ target: { files } }) => {
                if (files) {
                  setImage(files[0]);
                }
              }}
            />
            {image ? (
              <img
                className="rounded-lg w-[300px]"
                src={URL.createObjectURL(image)}
              />
            ) : (
              <img className="w-[300px] " src={upload} alt="" />
            )}
          </div>
        </div>
        <br />
        <select
          className="max-w-[700px] bg-[#F0F2F5] py-2 px-4 rounded-lg"
          name="department"
          id=""
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Choose Department</option>
          <option>Computer Science</option>
          <option>Physics</option>
          <option>Mathematics</option>
          <option>Chemistry</option>
          <option>Agric Economic and Extension</option>
          <option>Animal Science</option>
          <option>Crop Science</option>
          <option>Soil Science</option>
          <option>English</option>
          <option>Modern Languages</option>
          <option>Philosophy</option>
          <option>Religion Management & Cultural Studies</option>
          <option>Theatre and Media Art</option>
          <option>Business Education</option>
          <option>Curriculum and Instruction</option>
          <option>Guidance And Counselling</option>
          <option>Physical And Health Education</option>
          <option>Civil Engineering</option>
          <option value={"Electrical and Electronic"}>
            Electrical/Electronic Engineering
          </option>
          <option>Mechanical Engineering</option>
          <option>Industrial and Production Engineering</option>
          <option>Architecture</option>
          <option>Building</option>
          <option>Fine and Applied Art</option>
          <option>Geography & Environmental Management</option>
          <option>Commercial and Industrial Law</option>
          <option>Jurisprudence & International Law</option>
          <option>Private and Property Law</option>
          <option>Public Law</option>
          <option>Biochemistry</option>
          <option>Botany</option>
          <option value={"Human Nutrition"}>Human Nutrition & Dietetics</option>
          <option>Microbiology</option>
          <option>Zoology</option>
          <option>Accounting</option>
          <option>Banking and Finance</option>
          <option>Business Administration</option>
          <option>Public Administration</option>
          <option>Economic</option>
          <option>Political Science</option>
          <option>Psychology</option>
          <option>Sociology</option>
        </select>
        <button
          className="bg-blue-500 rounded-xl py-1 px-6 text-white mt-4"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Upload;
