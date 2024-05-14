import React from 'react'

const RefundBooks = () => {
  return (
    <div className="py-10 md:overflow-x-auto overflow-x-scroll max-w-[1600px] md:px-8 px-4 mx-auto">
      <table className="min-w-[1400px] md:w-full border-collapse">
        <tr className="">
          <th className="">S/N</th>
          <th>Title</th>
          <th>Author</th>
          <th>Department</th>
          <th>Student Name</th>
          <th>Date Borrowed</th>
        </tr>
        {/* MAP */}
        <tr>
          <td>1</td>
          <td>Elementary Books</td>
          <td>Jacob Patience</td>
          <td>Computer Science</td>
          <td>Jacob Patience</td>
          <td>Jan 23rd, 2024</td>
        </tr>
      </table>
    </div>
  );
}

export default RefundBooks
