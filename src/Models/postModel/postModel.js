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
    userId: { type: mongoose.Schema.Types.ObjectId, 
      ref:"User",
      required:true
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
// in post you can talk about anything useful
export default Post;