import React from "react";
import BooksCat from "../components/BooksCat";

const Art = () => {
  return (
    <div className="max-w-[1440px] md:px-8 py-10 sm:gap-x-4 md:gap-x-10 mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div>
        <h2 className="text-center md:text-2xl text-[20px] font-semibold py-3">
          English
        </h2>
        <BooksCat name={"English"} link={"English"} />
      </div>
      <div>
        <h2 className="text-center md:text-2xl text-[20px] font-semibold py-3">
          Modern Languages
        </h2>
        <BooksCat name={"Modern Languages"} link={"Modern Languages"} />
      </div>
      <div>
        <h2 className="text-center md:text-2xl text-[20px] font-semibold py-3">
          Philosophy
        </h2>
        <BooksCat name={"Philosophy"} link={"Philosophy"} />
      </div>
      <div>
        <h2 className="text-center md:text-2xl text-[20px] font-semibold py-3">
          Religion Management & Cultural Studies
        </h2>
        <BooksCat
          name={"Religion Management & Cultural Studies"}
          link={"Religion Management & Cultural Studies"}
        />
      </div>
      <div>
        <h2 className="text-center md:text-2xl text-[20px] font-semibold py-3">
          Theatre and Media Art
        </h2>
        <BooksCat
          name={"Theatre and Media Art"}
          link={"Theatre and Media Art"}
        />
      </div>
    </div>
  );
};

export default Art;
