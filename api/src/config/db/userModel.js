import mongoose from "mongoose";

const { Schema, model } = mongoose;

const UserSchema = new Schema({
  department: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  matric: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const User = model("user", UserSchema);
