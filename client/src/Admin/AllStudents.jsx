import React from "react";

const AllStudents = () => {
  return (
    <div className="py-10 md:overflow-x-auto overflow-x-scroll max-w-[1600px] md:px-8 px-4 mx-auto">
      <table className="min-w-[1400px] md:w-full border-collapse">
        <tr className="">
          <th className="">S/N</th>
          <th>Name</th>
          <th>Matriculation Number</th>
          <th>Department</th>
        </tr>
        {/* MAP */}
        <tr>
          <td>1</td>
          <td>Jacob Patience</td>
          <td>PSC2008167</td>
          <td>Computer Science</td>
        </tr>
      </table>
    </div>
  );
};

export default AllStudents;
