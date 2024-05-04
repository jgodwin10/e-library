import React from "react";
import BooksCat from "../components/BooksCat";

const Department = () => {
  return (
    <div className="max-w-[1440px] md:px-8 py-10 sm:gap-x-4 md:gap-x-10 mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div>
        <h2 className="text-center md:text-2xl text-[20px] font-semibold py-3">
          Computer Science
        </h2>
        <BooksCat name={"Computer Science"} link={"computer-science"} />
      </div>
      <div>
        <h2 className="text-center md:text-2xl text-[20px] font-semibold py-3">
          Physics
        </h2>
        <BooksCat name={"Physics"} link={"physics"} />
      </div>
      <div>
        <h2 className="text-center md:text-2xl text-[20px] font-semibold py-3">
          Chemistry
        </h2>
        <BooksCat name={"Chemistry"} link={"chemistry"} />
      </div>
      <div>
        <h2 className="text-center md:text-2xl text-[20px] font-semibold py-3">
          Mathematics
        </h2>
        <BooksCat name={"Mathematics"} link={"mathematics"} />
      </div>
    </div>
  );
};

export default Department;
