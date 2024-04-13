import express from "express";
import userRoutes from "./UsersRoute/UserRoute.js";
import postRoutes from "./PostsRoute/PostRoute.js";
import noteRoute from "./NotesRoute/NoteRoute.js";

const router = express.Router();

// Define routes
router.use("/user", userRoutes);
router.use("/posts", postRoutes);
router.use("/notes", noteRoute);


export default router;
