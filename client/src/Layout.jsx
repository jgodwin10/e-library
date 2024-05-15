import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import useAuth from "./Hooks/useAuth";

const Layout = () => {
  useAuth();
  return (
    <>
      <Navbar />
      <div className="mt-20 md:mt-0">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
