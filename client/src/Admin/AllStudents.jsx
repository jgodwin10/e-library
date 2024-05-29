import React from "react";
import { useGetStudentsQuery } from "../redux/ApiSlice";
import Loading from "../components/Loading";

const AllStudents = () => {
  const { data, isLoading } = useGetStudentsQuery();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="py-10 md:overflow-x-auto overflow-x-scroll max-w-[1600px] md:px-8 px-4 mx-auto">
      <h2 className="text-center text-[18px]  md:text-2xl font-semibold pb-6">
        Students Database
      </h2>
      <table className="min-w-[1400px] md:w-full border-collapse">
        <tr className="">
          <th className="">S/N</th>
          <th>Name</th>
          <th>Matriculation Number</th>
          <th>Department</th>
        </tr>
        {/* MAP */}
        {data.map((item, index) => {
          return (
            <tr key={index}>
              <td>{index}</td>
              <td>
                {item.firstname} {item.lastname}
              </td>
              <td>{item.matric}</td>
              <td>{item.department}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default AllStudents;
