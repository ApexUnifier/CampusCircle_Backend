import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

const Schema = mongoose.Schema;

const resourceSchema = new Schema(
  {
    title: {
      type: String,
      required:true
    },
    email: {
      type: String,
      required: true,
      validate: {
        validator: validator.isEmail,
        message: "Invalid email address",
      },
    },
    link:{
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


const Resource = mongoose.model("Resource", resourceSchema);

//this model is specially for resource disscussion and external resources link is provided.

export default Resource;