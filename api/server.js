import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { UserMiddleware } from "./src/middleware/AuthMiddleware.js";
import router from "./src/Router/UserRoutes.js";


dotenv.config();

mongoose.connect(process.env.MONGODB).then(() => {
  console.log("connected");
});

const app = express();
app.use(express.json());

app.use(router);

app.use(UserMiddleware);



app.listen(3000, () => {
  console.log("server started");
});
