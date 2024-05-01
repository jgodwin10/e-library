import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="mt-20 md:mt-0">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
