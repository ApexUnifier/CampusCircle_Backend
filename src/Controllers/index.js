import { login, signup } from "./UsersControllers/Post.js";
import {
  getAllVacancies,
  getAllVacanciesForCompany,
  getVacancyById,
} from "./VacancyControllers/Get.js";
import { createVacancy, deleteVacancy } from "./VacancyControllers/Post.js";

export const usersController = {
  login,
  signup,
};
export const vacancyController = {
  getAllVacancies,
  getAllVacanciesForCompany,
  getVacancyById,
  createVacancy,
  deleteVacancy,
};
