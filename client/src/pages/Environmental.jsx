import React from "react";
import BooksCat from "../components/BooksCat";

const Environmental = () => {
  return (
    <div className="max-w-[1440px] md:px-8 py-10 sm:gap-x-4 md:gap-x-10 mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div>
        <h2 className="text-center md:text-2xl text-[20px] font-semibold py-3">
          Architecture
        </h2>
        <BooksCat name={"Architecture"} link={"Architecture"} />
      </div>
      <div>
        <h2 className="text-center md:text-2xl text-[20px] font-semibold py-3">
          Building
        </h2>
        <BooksCat name={"Building"} link={"Building"} />
      </div>
      <div>
        <h2 className="text-center md:text-2xl text-[20px] font-semibold py-3">
          Fine and Applied Art
        </h2>
        <BooksCat name={"Fine and Applied Art"} link={"Fine and Applied Art"} />
      </div>
      <div>
        <h2 className="text-center md:text-2xl text-[20px] font-semibold py-3">
          Geography & Environmental Management
        </h2>
        <BooksCat
          name={"Geography & Environmental Management"}
          link={"Geography & Environmental Management"}
        />
      </div>
    </div>
  );
};

export default Environmental;
