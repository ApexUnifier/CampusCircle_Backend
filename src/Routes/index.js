import express from "express";
import userRoutes from "./UsersRoute/UserRoute.js";

const router = express.Router();

// Define routes
router.use("/user", userRoutes);

export default router;
