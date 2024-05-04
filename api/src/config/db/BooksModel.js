import mongoose from "mongoose";

const BookSchema = new mongoose.Schema(
  {
    image: String,
    pdf: String,
    title: String,
  },
  { collection: "Books" }
);

export const Books = mongoose.model("Books", BookSchema);
