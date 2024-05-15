import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const generateToken = (user) => {
  const { department, isAdmin, lastname, firstname, matric, _id } = user;

  return jwt.sign(
    { department, isAdmin, lastname, firstname, matric, _id },
    process.env.SECRET,
    {
      expiresIn: "1d",
    }
  );
};

export const verifyToken = (token) => {
  const { department, isAdmin, lastname, firstname, matric, _id } = jwt.verify(
    token,
    process.env.SECRET
  );
  return { department, isAdmin, lastname, firstname, matric, _id };
};
