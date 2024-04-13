import express from "express";
import userRoutes from "./UsersRoute/UserRoute.js";
import vacancyRoutes from "./VacancyRoutes/VacancyRoutes.js";

const router = express.Router();

// Define routes
router.use("/user", userRoutes);
router.use("/vacancy", vacancyRoutes);

export default router;
