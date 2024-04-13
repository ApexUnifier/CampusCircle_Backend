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
    userId: { type: mongoose.Schema.Types.ObjectId, 
        ref:"User",
        required:true
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
      default: 0,
    }
  },
  { timestamps: true }
);


const Resource = mongoose.model("Resource", resourceSchema);

//this model is specially for resource disscussion and external resources link is provided.

export default Resource;