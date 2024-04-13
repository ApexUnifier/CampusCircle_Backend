import { Schema } from "mongoose";
const { VacancySchema } = Schema;

export const createVacancy = async (req, res) => {
  try {
    const newVacancy = new VacancySchema(req.body);
    await newVacancy.save();
    res.status(201).json({
      success: true,
      message: "Vacancy created successfully",
      vacancy: newVacancy,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create vacancy",
      error: error.message,
    });
  }
};

export const deleteVacancy = async (req, res) => {
  try {
    const vacancyId = req.params.id;
    const deletedVacancy = await VacancySchema.findByIdAndDelete(vacancyId);
    if (!deletedVacancy) {
      return res.status(404).json({
        success: false,
        message: "VacancySchema not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Vacancy deleted successfully",
      vacancy: deletedVacancy,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete vacancy",
      error: error.message,
    });
  }
};
