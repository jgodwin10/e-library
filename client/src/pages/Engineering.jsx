import React from 'react'
import BooksCat from "../components/BooksCat";

const Engineering = () => {
  return (
    <div className="max-w-[1440px] md:px-8 py-10 sm:gap-x-4 md:gap-x-10 mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div>
        <h2 className="text-center md:text-2xl text-[20px] font-semibold py-3">
          Civil Engineering
        </h2>
        <BooksCat name={"Civil Engineering"} link={"Civil Engineering"} />
      </div>
      <div>
        <h2 className="text-center md:text-2xl text-[20px] font-semibold py-3">
          Electrical/Electronic Engineering
        </h2>
        <BooksCat
          name={"Electrical/Electronic Engineering"}
          link={"Electrical and Electronic"}
        />
      </div>
      <div>
        <h2 className="text-center md:text-2xl text-[20px] font-semibold py-3">
          Mechanical Engineering
        </h2>
        <BooksCat
          name={"Mechanical Engineering"}
          link={"Mechanical Engineering"}
        />
      </div>
      <div>
        <h2 className="text-center md:text-2xl text-[20px] font-semibold py-3">
          Industrial and Production Engineering
        </h2>
        <BooksCat
          name={"Industrial and Production Engineering"}
          link={"Industrial and Production Engineering"}
        />
      </div>
    </div>
  );
}

export default Engineering
