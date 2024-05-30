import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import LoginPage from "./auth/loginPage";
import Register from "./auth/register";
import Department from "./pages/Department";
import DepartmentView from "./pages/DepartmentView";
import Upload from "./Admin/Upload";
import AllBooks from "./components/AllBooks";
import About from "./components/About";
import FindBook from "./components/FindBook";
import Profile from "./Admin/Profile";
import AllStudents from "./Admin/AllStudents";
import BorrowedBooks from "./Admin/BorrowedBooks";
import RefundBooks from "./Admin/RefundBooks";
import Collections from "./Admin/Collections";
import Hello from "./pages/hello";
import ReadPdf from "./pages/ReadPdf";
import { Worker } from "@react-pdf-viewer/core";
import Faculties from "./pages/Faculties";
import Education from "./pages/Education";
import LifeScience from "./pages/LifeScience";
import Engineering from "./pages/Engineering";
import Law from "./pages/Law";
import Art from "./pages/Art";
import SocialScience from "./pages/SocialScience";
import Management from "./pages/Management";
import Environmental from "./pages/Environmental";
import Agriculture from "./pages/Agriculture";

const App = () => {
  return (
    <div>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <BrowserRouter>
          <Routes>
            <Route path="/hello" element={<Hello />} />
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/find-book" element={<FindBook />} />
              <Route path="/register" element={<Register />} />
              <Route path="/upload" element={<Upload />} />
              <Route path="/collections" element={<Collections />} />
              <Route path="/refunded-books" element={<RefundBooks />} />
              <Route path="/borrowed-books" element={<BorrowedBooks />} />
              <Route path="/all-students" element={<AllStudents />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/physical-science" element={<Department />} />
              <Route path="/education" element={<Education />} />
              <Route path="/art" element={<Art />} />
              <Route path="/social-science" element={<SocialScience />} />
              <Route path="/management-science" element={<Management />} />
              <Route path="/environmental" element={<Environmental />} />
              <Route path="/agriculture" element={<Agriculture />} />
              <Route path="/engineering" element={<Engineering />} />
              <Route path="/law" element={<Law />} />
              <Route path="/life-science" element={<LifeScience />} />
              <Route path="/faculties" element={<Faculties />} />
              <Route path="/all-books" element={<AllBooks />} />
              <Route path="/:title" element={<DepartmentView />} />
              <Route path="/pdf/:title" element={<ReadPdf />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Worker>
    </div>
  );
};

export default App;
