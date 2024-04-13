import { Schema } from "mongoose";
const { VacancySchema } = Schema;

export const getAllVacancies = async (req, res) => {
  try {
    const vacancies = await VacancySchema.find({ status: "open" }).populate(
      "company"
    );
    res.status(200).json({ success: true, vacancies: vacancies });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch vacancies",
      error: error.message,
    });
  }
};

export const getVacancyById = async (req, res) => {
  try {
    const vacancyId = req.params.id;
    const vacancy = await VacancySchema.findById(vacancyId).populate("company");
    if (!vacancy) {
      return res.status(404).json({
        success: false,
        message: "Vacancy not found",
      });
    }
    res.status(200).json({
      success: true,
      vacancy: vacancy,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch vacancy",
      error: error.message,
    });
  }
};

export const getAllVacanciesForCompany = async (req, res) => {
  try {
    const companyId = req.params.companyId;
    const vacancies = await VacancySchema.find({
      company: companyId,
      status: "open",
    }).populate("company");
    res.status(200).json({ success: true, vacancies: vacancies });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch vacancies for the company",
      error: error.message,
    });
  }
};
