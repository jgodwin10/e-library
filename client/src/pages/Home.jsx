import React from "react";
import Hero from "../components/Hero";
import BooksCategory from "../components/BooksCategory";
import BooksForYou from "../components/BooksForYou";

const Home = () => {
  return (
    <>
      <Hero />
      <BooksCategory />
      <BooksForYou />
    </>
  );
};

export default Home;
