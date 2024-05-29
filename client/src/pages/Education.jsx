import React from "react";
import BooksCat from "../components/BooksCat";

const Education = () => {
  return (
    <div className="max-w-[1440px] md:px-8 py-10 sm:gap-x-4 md:gap-x-10 mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div>
        <h2 className="text-center md:text-2xl text-[20px] font-semibold py-3">
          Business Education
        </h2>
        <BooksCat name={"Business Education"} link={"Business Education"} />
      </div>
      <div>
        <h2 className="text-center md:text-2xl text-[20px] font-semibold py-3">
          Curriculum and Instruction
        </h2>
        <BooksCat
          name={"Curriculum And Instruction"}
          link={"Curriculum And Instruction"}
        />
      </div>
      <div>
        <h2 className="text-center md:text-2xl text-[20px] font-semibold py-3">
          Guidance And Counselling
        </h2>
        <BooksCat
          name={"Guidance And Counselling"}
          link={"Guidance And Counselling"}
        />
      </div>
      <div>
        <h2 className="text-center md:text-2xl text-[20px] font-semibold py-3">
          Physical And Health Education
        </h2>
        <BooksCat
          name={"Physical And Health Education"}
          link={"Physical And Health Education"}
        />
      </div>
    </div>
  );
};

export default Education;
