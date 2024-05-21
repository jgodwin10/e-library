import React from "react";

const Hello = () => {
  return (
    <div className="w-full h-screen flex flex-col space-y-0 items-center justify-center uppercase bg-black">
      <h1 className="text-white font-serif font-semibold text-[60px]">
        YOU should
      </h1>
      <h2 className="text-white text-[100px] font-semibold">
        be <span className="text-blue-400 font-serif">WORKING</span>
      </h2>
      <h1 className="text-red-500 text-[150px] font-bold">Now!!!</h1>
    </div>
  );
};

export default Hello;
