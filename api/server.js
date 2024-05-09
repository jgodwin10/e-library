import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { UserMiddleware } from "./src/middleware/AuthMiddleware.js";
import router from "./src/Router/UserRoutes.js";
import multer from "multer";
import { Books } from "./src/config/db/BooksModel.js";
import cors from "cors";

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
