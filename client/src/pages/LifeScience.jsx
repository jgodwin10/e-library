import React from "react";
import BooksCat from "../components/BooksCat";

const LifeScience = () => {
  return (
    <div className="max-w-[1440px] md:px-8 py-10 sm:gap-x-4 md:gap-x-10 mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div>
        <h2 className="text-center md:text-2xl text-[20px] font-semibold py-3">
          Biochemistry
        </h2>
        <BooksCat name={"Biochemistry"} link={"Biochemistry"} />
      </div>
      <div>
        <h2 className="text-center md:text-2xl text-[20px] font-semibold py-3">
          Botany
        </h2>
        <BooksCat name={"Botany"} link={"Botany"} />
      </div>
      <div>
        <h2 className="text-center md:text-2xl text-[20px] font-semibold py-3">
          Human Nutrition & Dietetics
        </h2>
        <BooksCat
          name={"Human Nutrition & Dietetics"}
          link={"Human Nutrition"}
        />
      </div>
      <div>
        <h2 className="text-center md:text-2xl text-[20px] font-semibold py-3">
          Micro Biology
        </h2>
        <BooksCat name={"Micro Biology"} link={"Microbology"} />
      </div>
      <div>
        <h2 className="text-center md:text-2xl text-[20px] font-semibold py-3">
          Zoology
        </h2>
        <BooksCat name={"Zoology"} link={"Zoology"} />
      </div>
    </div>
  );
};

export default LifeScience;
