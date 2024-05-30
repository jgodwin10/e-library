import React from "react";
import BooksCat from "../components/BooksCat";

const Law = () => {
  return (
    <div className="max-w-[1440px] md:px-8 py-10 sm:gap-x-4 md:gap-x-10 mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div>
        <h2 className="text-center md:text-2xl text-[20px] font-semibold py-3">
          Commercial and Industrial Law
        </h2>
        <BooksCat
          name={"Commercial and Industrial Law"}
          link={"Commercial and Industrial Law"}
        />
      </div>
      <div>
        <h2 className="text-center md:text-2xl text-[20px] font-semibold py-3">
          Jurisprudence & International Law
        </h2>
        <BooksCat
          name={"Jurisprudence & International Law"}
          link={"Jurisprudence & International Law"}
        />
      </div>
      <div>
        <h2 className="text-center md:text-2xl text-[20px] font-semibold py-3">
          Private and Property Law
        </h2>
        <BooksCat
          name={"Private and Property Law"}
          link={"Private and Property Law"}
        />
      </div>
      <div>
        <h2 className="text-center md:text-2xl text-[20px] font-semibold py-3">
          Public Law
        </h2>
        <BooksCat name={"Public Law"} link={"Public Law"} />
      </div>
    </div>
  );
};

export default Law;
