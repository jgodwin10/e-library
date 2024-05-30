import React from "react";
import BooksCat from "../components/BooksCat";

const Agriculture = () => {
  return (
    <div className="max-w-[1440px] md:px-8 py-10 sm:gap-x-4 md:gap-x-10 mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div>
        <h2 className="text-center md:text-2xl text-[20px] font-semibold py-3">
          Agric Economic and Extension
        </h2>
        <BooksCat
          name={"Agric Economic and Extension"}
          link={"Agric Economic and Extension"}
        />
      </div>
      <div>
        <h2 className="text-center md:text-2xl text-[20px] font-semibold py-3">
          Animal Science
        </h2>
        <BooksCat name={"Animal Science"} link={"Animal Science"} />
      </div>
      <div>
        <h2 className="text-center md:text-2xl text-[20px] font-semibold py-3">
          Crop Science
        </h2>
        <BooksCat name={"Crop Science"} link={"Crop Science"} />
      </div>
      <div>
        <h2 className="text-center md:text-2xl text-[20px] font-semibold py-3">
          Soil Science
        </h2>
        <BooksCat name={"Soil Science"} link={"Soil Science"} />
      </div>
    </div>
  );
};

export default Agriculture;
