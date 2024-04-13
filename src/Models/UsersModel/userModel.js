import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

function validateRole(role) {
  return role === "teacher" || role === "student";
}
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
    },
    //teacher or student
    role:{
      type:String,
      default:"student",
      required: true,
      validate: {
        validator: validateRole,
        message: "Role must be either 'teacher' or 'student'",
      }
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: validator.isEmail,
        message: "Invalid email address",
      },
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);


const User = mongoose.model("User", userSchema);

export default User;
