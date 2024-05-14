import React from "react";

const FindBook = () => {
  return (
    <div className="max-w-[1440px] mx-auto md:mt-10 pb-12 mt-28 md:px-8 px-4">
      <p className="text-black/80 font-medium text-[14px] md:text-base">
        Are you having trouble finding an item? If you can't find it in our
        catalog, just fill out this short form and we'll take care of the rest!
        If your request fits our collection guidelines, we might buy a copy for
        our library. If not, we might request it from another library. We'll let
        you know either way.
      </p>
      <h2 className="font-semibold md:text-xl text-[18px] uppercase mt-8">
        Your Information
      </h2>
      <div className="grid grid-cols-1 mt-5 gap-x-5 gap-y-3 md:grid-cols-2">
        <label className="flex flex-col" htmlFor="firstname">
          <span className="md:text-xl text-[14px] pb-2">First Name</span>
          <input
            className=" border py-2 px-4 outline-blue-400 bg-gray-100 border-neutral-500 rounded-sm"
            type="text"
            name="firstname"
          />
        </label>
        <label className="flex flex-col" htmlFor="lastname">
          <span className="md:text-xl text-[14px] pb-2">Last Name</span>
          <input
            className=" border py-2 px-4 bg-gray-100 outline-blue-400 border-neutral-500 rounded-sm"
            type="text"
            name="lastname"
          />
        </label>
        <div className="md:col-span-2">
          <label className="flex flex-col" htmlFor="matric">
            <span className="md:text-xl text-[14px] pb-2">Matric No</span>
            <input
              className=" border py-2 px-4 bg-gray-100 outline-blue-400 border-neutral-500 rounded-sm"
              type="text"
              name="matric"
            />
          </label>
        </div>
      </div>
      <h2 className="font-semibold md:text-xl text-[18px] uppercase mt-8">
        Item Information
      </h2>
      <div className="grid grid-cols-1 mt-5 gap-x-5 gap-y-4 md:grid-cols-2">
        <label className="flex flex-col" htmlFor="title">
          <span className="md:text-xl text-[14px] pb-2">
            What's the title of the item you're looking for?
          </span>
          <input
            className=" border py-2 px-4 bg-gray-100 outline-blue-400 border-neutral-500 rounded-sm"
            type="text"
            name="title"
          />
        </label>
        <label className="flex flex-col" htmlFor="author">
          <span className="md:text-xl text-[14px] pb-2">
            Who's the author of the Book?
          </span>
          <input
            className=" border py-2 px-4 bg-gray-100 outline-blue-400 border-neutral-500 rounded-sm"
            type="text"
            name="author"
          />
        </label>
        <label className="flex flex-col" htmlFor="department">
          <span className="md:text-xl text-[14px] pb-2">
            What department is the book you're looking for?
          </span>
          <input
            className=" border py-2 px-4 bg-gray-100 outline-blue-400 border-neutral-500 rounded-sm"
            type="text"
            name="department"
          />
        </label>
      </div>
      <button className="uppercase mt-7 hover:bg-blue-400 duration-500 bg-blue-500 h-[40px] text-white w-[120px] rounded-md">
        Submit
      </button>
    </div>
  );
};

export default FindBook;
1;
