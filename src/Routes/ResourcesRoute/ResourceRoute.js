import express from 'express';
import { resourceController } from '../../Controllers/index.js';
import files from "../../Helpers/filesHelper/filesHelper.js"
const router = express.Router();

// Create Resource
router.post('/',files.imageUpload.single('image'), resourceController.createResource);

// Add Like to a Resource
router.post('/:id/like', resourceController.addResourceLike);

// Delete a Resource
router.delete('/:id', resourceController.deleteResource);

// Get All Resources
router.get('/', resourceController.getResources);

// Get a Resource by ID
router.get('/:id', resourceController.getResourceById);

// Get Resources by User ID
router.get('/user/:userId', resourceController.getResourceByUserId);

export default router;
