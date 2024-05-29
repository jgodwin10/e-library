import React from "react";
import { useGetBorrowQuery } from "../redux/ApiSlice";
import Loading from "../components/Loading";
import { parseISO, format } from "date-fns";

const BorrowedBooks = () => {
  const { data, isLoading } = useGetBorrowQuery();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="py-10 md:overflow-x-auto overflow-x-scroll max-w-[1600px] md:px-8 px-4 mx-auto">
      <h2 className="text-center text-[18px] md:text-2xl font-semibold pb-6">
        Borrowed Books Database
      </h2>
      <table className="min-w-[1400px] md:w-full border-collapse">
        <thead>
          <tr className="">
            <th className="">S/N</th>
            <th>Title</th>
            <th>Author</th>
            <th>Department</th>
            <th>Student Name</th>
            <th>Date Borrowed</th>
          </tr>
        </thead>
        {/* MAP */}
        <tbody>
          {data.map((item, index) => {
            const parsedDate = parseISO(item.createdAt);
            const formattedDate = format(parsedDate, "MMM d, yyyy");

            return (
              <tr key={index}>
                <td>{index}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>{item.category}</td>
                <td>
                  {item.firstname} {item.lastname}
                </td>
                <td>{formattedDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BorrowedBooks;
