import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import useAuth from "./Hooks/useAuth";
import ScrollToTop from "./components/ScrollToTop";

const Layout = () => {
  useAuth();
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <div className="mt-20 md:mt-0">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
