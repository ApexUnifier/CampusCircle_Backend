import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

const Schema = mongoose.Schema;
const notesSchema = new Schema(
  {
    title: {
      type: String,
      required:true
    },
    userId: { type: mongoose.Schema.Types.ObjectId, 
        ref:"User",
        required:true
    },
    docs:{
      type:String,
      required: true
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


const Notes = mongoose.model("Notes", notesSchema);
//for notes a file is necessary to be uploaded.
export default Notes;