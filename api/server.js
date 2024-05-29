import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { UserMiddleware } from "./src/middleware/AuthMiddleware.js";
import router from "./src/Router/UserRoutes.js";
import multer from "multer";
import { Books } from "./src/config/db/BooksModel.js";
import cors from "cors";
import { User } from "./src/config/db/userModel.js";
import { Borrowed } from "./src/config/db/BorrowedModel.js";

dotenv.config();

mongoose.connect(process.env.MONGODB).then(() => {
  console.log("connected");
});

const Port = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/files", express.static("files"));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./files");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.get("/upload-files", (req, res) => {
  res.send("Upload Successful");
});

app.post(
  "/upload-files",
  upload.fields([
    { name: "file", maxCount: 10 },
    { name: "image", maxCount: 10 },
  ]),
  async (req, res) => {
    const { author, title, category } = req.body;
    const pdf = req.files.file[0].filename;
    const image = req.files.image[0].filename;

    try {
      await Books.create({ title, pdf, image, author, category });
      res.send({ status: "ok" });
    } catch (error) {
      res.json({ status: error });
    }
  }
);

app.get("/students", async (req, res) => {
  const students = await User.find({ isAdmin: false }).sort({ createdAt: -1 });

  res.status(200).json(students);
});

app.post("/borrow", async (req, res) => {
  const { lastname, firstname, matric, pdf, title, image, category, author } =
    req.body;

  try {
    await Borrowed.create({
      lastname,
      firstname,
      pdf,
      title,
      image,
      category,
      author,
      matric,
    });
    res.status(201).send("Book Borrowed successfully");
  } catch (err) {
    res.send(err);
  }
});

app.post("/refund/:id", async (req, res) => {
  const { id } = req.params;

  const refund = await Borrowed.findByIdAndDelete({ _id: id });

  res.send("Book Refunded");
});

app.get("/borrow", async (req, res) => {
  const BorrowedBooks = await Borrowed.find({}).sort({ createdAt: -1 });

  res.status(200).json(BorrowedBooks);
});

app.get("/my_borrowed/", async (req, res) => {
  const { matric } = req.query;

  console.log(matric);
  const exist = await Borrowed.find({ matric }).sort({ createdAt: -1 });

  res.status(201).json(exist);
});

app.get("/get-files", async (req, res) => {
  try {
    Books.find({}).then((data) => {
      res.send({ status: "ok", data: data });
    });
  } catch (error) {
    console.log(error);
  }
});

app.use(router);

app.use(UserMiddleware);

app.listen(Port, () => {
  console.log(`server started on Port: ${Port}`);
});
