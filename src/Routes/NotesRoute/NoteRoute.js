import express from 'express';
import files from "../../Helpers/filesHelper/filesHelper.js"
const router = express.Router();
import { notesController } from '../../Controllers/index.js';

// Create Note
router.post('/',files.docUpload.single('doc'), notesController.createNote); //it will give file as input as well

// Add Like to a Note
router.post('/:id/like', notesController.addNotesLike);

// Delete a Note
router.delete('/:id', notesController.deleteNote);

// Get All Notes
router.get('/', notesController.getNotes);

// Get a Note by ID
router.get('/:id', notesController.getNoteById);

// Get Notes by User ID
router.get('/user/:userId', notesController.getNoteByUserId);

export default router;
