import React from "react";
import BooksCat from "../components/BooksCat";

const Management = () => {
  return (
    <div className="max-w-[1440px] md:px-8 py-10 sm:gap-x-4 md:gap-x-10 mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div>
        <h2 className="text-center md:text-2xl text-[20px] font-semibold py-3">
          Accounting
        </h2>
        <BooksCat name={"Accounting"} link={"Accounting"} />
      </div>
      <div>
        <h2 className="text-center md:text-2xl text-[20px] font-semibold py-3">
          Banking and Finance
        </h2>
        <BooksCat name={"Banking and Finance"} link={"Banking and Finance"} />
      </div>
      <div>
        <h2 className="text-center md:text-2xl text-[20px] font-semibold py-3">
          Business Administration
        </h2>
        <BooksCat
          name={"Business Administration"}
          link={"Business Administration"}
        />
      </div>
      <div>
        <h2 className="text-center md:text-2xl text-[20px] font-semibold py-3">
          Public Administration
        </h2>
        <BooksCat
          name={"Public Administration"}
          link={"Public Administration"}
        />
      </div>
    </div>
  );
};

export default Management;
