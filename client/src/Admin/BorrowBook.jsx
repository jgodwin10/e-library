import React from "react";
import Book from "../images/Books.jpg";
import { useNavigate } from "react-router-dom";
import { useRefundMutation } from "../redux/ApiSlice";
import toast from "react-hot-toast";

const BorrowBook = ({ item }) => {
  const navigate = useNavigate();

  const [refund] = useRefundMutation();

  const readNow = () => {
    navigate(`/pdf/${item.title}`);
  };

  const handleRefund = async () => {
    try {
      const res = await refund(item._id).unwrap();
      toast.success("Book Refunded");
    } catch (err) {
      toast.error("Book not Refunded");
    }
  };

  return (
    <div className="bg-white mb-10 border rounded-xl">
      <img
        className="md:h-[300px] h-[130px] object-cover w-full rounded-t-xl"
        src={`https://e-library-2kxw.onrender.com/files/${item.image}`}
        alt=""
      />
      <div className="text-center  rounded-xl ">
        <h2 className="md:text-xl pt-3 font-semibold">{item.title}</h2>

        <p className="md:text-base text-[12px]">{item.author}</p>
        <button
          onClick={handleRefund}
          className="mt-4 border-2 font-semibold text-blue-500 hover:bg-blue-500 hover:text-white duration-1000 border-blue-500 w-full md:py-3 md:text-base text-[12px] py-2"
        >
          Refund Book
        </button>
        <button
          onClick={readNow}
          className="border-2  rounded-b-xl font-semibold text-blue-500 hover:bg-blue-500 hover:text-white duration-1000 border-blue-500 w-full md:py-3 md:text-base text-[12px] py-2"
        >
          View Now
        </button>
      </div>
    </div>
  );
};

export default BorrowBook;
