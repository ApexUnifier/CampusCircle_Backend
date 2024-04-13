import { addNotesLike, createNote, deleteNote, getNoteById, getNoteByUserId, getNotes } from "./NotesControllers/NoteController.js";
import { 
  createPost,
  addPostLike,
  deletePost,
  getPosts,
  getPostById,
  getPostsByUserId 
} from "./PostsControllers/PostController.js";
import { login, signup } from "./UsersControllers/Post.js";

export const usersController = {
  login,
  signup,
};

export const notesController = {
  createNote,addNotesLike,deleteNote, getNoteById, getNoteByUserId,getNotes
}

export const postController = {
  createPost,
  addPostLike,
  deletePost,
  getPosts,
  getPostById,
  getPostsByUserId
};
