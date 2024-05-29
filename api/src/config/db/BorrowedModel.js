import mongoose from "mongoose";

const BorrowedSchema = new mongoose.Schema(
  {
    firstname: String,
    lastname: String,
    image: String,
    pdf: String,
    title: String,
    author: String,
    category: String,
    matric: String,
  },
  { timestamps: true },
  { collection: "Borrowed" }
);

export const Borrowed = mongoose.model("Borrowed", BorrowedSchema);
