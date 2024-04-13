import {
  addNotesLike,
  createNote,
  deleteNote,
  getNoteById,
  getNoteByUserId,
  getNotes,
  getNotesFunc,
} from "./NotesControllers/NoteController.js";
import {
  createPost,
  addPostLike,
  deletePost,
  getPosts,
  getPostById,
  getPostsByUserId,
  getPostsFunc,
} from "./PostsControllers/PostController.js";
import { login, signup } from "./UsersControllers/Post.js";
import {
  createResource,
  addResourceLike,
  deleteResource,
  getResources,
  getResourceById,
  getResourceByUserId,
  getResourcesFunc,
} from "./ResourcesControllers/ResourceController.js";

export const usersController = {
  login,
  signup,
};

export const notesController = {
  createNote,
  addNotesLike,
  deleteNote,
  getNoteById,
  getNoteByUserId,
  getNotes,
  getNotesFunc,
};

export const postController = {
  createPost,
  addPostLike,
  deletePost,
  getPosts,
  getPostById,
  getPostsByUserId,
  getPostsFunc,
};

export const resourceController = {
  createResource,
  addResourceLike,
  deleteResource,
  getResources,
  getResourceById,
  getResourceByUserId,
  getResourcesFunc,
};
