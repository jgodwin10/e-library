import React from "react";
import Books from "../images/Books.jpg";

const Hero = () => {
  return (
    <div
      style={{ "--image-url": `url(${Books})` }}
      className="md:h-[80vh] h-[60vh] bg-[image:var(--image-url)] bg-cover before:contents-[''] before:w-full before:h-full before:bg-black/60 before:absolute before:top-0 before:left-0 relative flex items-center "
    >
      <div className=" w-full text-white z-[9999] text-center">
        <h2 className="md:text-[45px] text-[18px]  font-semibold">
          Good books don't give up all their secrets at once
        </h2>
        <p className="md:text-[18px] text-[14px] text-white/90">
          Welcome to Ambrose Alli University library
        </p>
        <button className="text-white font-semibold bg-blue-500 md:text-base text-[14px] py-2 px-5 rounded-3xl mt-4 shadow-2xl">
          Find Books Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
