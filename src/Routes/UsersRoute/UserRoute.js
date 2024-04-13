import express from "express";
const router = express.Router();
import { usersController } from "../../Controllers/index.js";

router.post("/", usersController.signup);
router.post("/", usersController.login);

export default router;
