import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required:true
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
    image:{
      type:String
    },
    description:{
      type: String,
      required:true
    },
    likes:{
      type: Number,
      required:true
    }
  },
  { timestamps: true }
);


const Post = mongoose.model("Post", postSchema);

export default Post;