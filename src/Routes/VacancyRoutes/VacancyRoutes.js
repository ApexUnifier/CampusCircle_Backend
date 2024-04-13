import express from "express";
const router = express.Router();
import { vacancyController } from "../../Controllers/index.js";

// Route to create a new vacancy
router.post("/create", vacancyController.createVacancy);

// Route to get all available vacancies
router.get("/", vacancyController.getAllVacancies);

router.delete("/:id", vacancyController.deleteVacancy);

router.get("/:id", vacancyController.getVacancyById);

router.get("/company/:companyId", vacancyController.getAllVacanciesForCompany);

export default router;
