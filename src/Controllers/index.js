import { addLike, createNote, deleteNote } from "./NotesControllers/NoteController.js";
import { login, signup } from "./UsersControllers/Post.js";

export const usersController = {
  login,
  signup,
};

export const notesController = {
  createNote,addLike,deleteNote 
}