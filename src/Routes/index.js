import express from "express";
import userRoutes from "./UsersRoute/UserRoute.js";
import postRoutes from "./PostsRoute/PostRoute.js";
import noteRoute from "./NotesRoute/NoteRoute.js";
import resourcesRoute from "./ResourcesRoute/ResourceRoute.js";

const router = express.Router();

// Define routes
router.use("/user", userRoutes);
router.use("/posts", postRoutes);
router.use("/notes", noteRoute);
router.use("/resources", resourcesRoute);

export default router;
