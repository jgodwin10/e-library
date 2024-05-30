import React from "react";
import BooksCat from "../components/BooksCat";

const SocialScience = () => {
  return (
    <div className="max-w-[1440px] md:px-8 py-10 sm:gap-x-4 md:gap-x-10 mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div>
        <h2 className="text-center md:text-2xl text-[20px] font-semibold py-3">
          Economic
        </h2>
        <BooksCat name={"Economic"} link={"Economic"} />
      </div>
      <div>
        <h2 className="text-center md:text-2xl text-[20px] font-semibold py-3">
          Political Science
        </h2>
        <BooksCat name={"Political Science"} link={"Political Science"} />
      </div>
      <div>
        <h2 className="text-center md:text-2xl text-[20px] font-semibold py-3">
          Psychology
        </h2>
        <BooksCat name={"Psychology"} link={"Psychology"} />
      </div>
      <div>
        <h2 className="text-center md:text-2xl text-[20px] font-semibold py-3">
          Sociology
        </h2>
        <BooksCat name={"Sociology"} link={"Sociology"} />
      </div>
    </div>
  );
};

export default SocialScience;
