import express, { application } from "express";
import cors from "cors"; // Import the cors package
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routers/UserRoutes.js";

const app = express();
const PORT = process.env.PORT || 4001;

dotenv.config();
app.use(express.json());
app.use(cors()); // Use cors middleware to enable CORS

app.use((req, res, next) => {
  console.log(req.path, req.method, req.body);
  next();
});

// Connection to MongoDB
mongoose
.connect(process.env.MONGO_URI)
.then(() => {
  app.listen(PORT, () => {
    console.log("DB Connected & Backend App working on " + PORT);
  });
})
app.get("/",(req,res)=>{
  res.status(200).send("<h1>backend server up<h1/>");
})
app.use("/api/user", userRoute);
