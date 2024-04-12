import express, { application } from "express";
import cors from "cors"; 
import dotenv from "dotenv";
import mongoose from "mongoose";
import passport from "passport";
import { Strategy } from "passport-local";
import session from "express-session";
import passportSetup from "./controllers/login.js";
import authRoute from "./routers/auth.js"
dotenv.config();
const app = express();
const PORT = process.env.PORT || 4001;

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

// Use cors middleware to enable CORS
app.use(cors());

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
.catch((error) => {
  console.log(error);
});

app.get("/",(req,res)=>{
    res.status(200).send("<h1>backend server up<h1/>");
  })
  app.use("/auth", authRoute);