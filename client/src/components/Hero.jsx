import React from "react";
import Books from "../images/Books.png";

const Hero = () => {
  return (
    <div className="h-[50vh] relative md:gap-x-12 flex md:overflow-visible overflow-hidden md:justify-between pt-32 items-center ">
      <div className=" w-full absolute md:relative top-[78px]  md:w-[80%]">
        <h2 className="md:text-[45px] text-[20px]  font-semibold">
          Good books don't give up all their secrets at once
        </h2>
        <p className="text-[18px] text-black/80">
          Welcome to Ambrose Alli University library
        </p>
        <button className="text-white bg-blue-500 py-2 px-5 rounded-3xl mt-4 shadow-2xl">
          Find Books Now
        </button>
      </div>

      <img
        className=" md:w-[40%] w-[60%] ml-36 md:float-none float-right md:flex-1"
        src={Books}
        alt=""
      />
    </div>
  );
};

export default Hero;
