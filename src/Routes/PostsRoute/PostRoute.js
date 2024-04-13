import express from "express";
const router = express.Router();
import { postController } from '../../Controllers/index.js';

// Use the controllers
router.post('/', postController.createPost);
router.post('/:id/like', postController.addPostLike);
router.delete('/:id', postController.deletePost);
router.get('/', postController.getPosts);
router.get('/:id', postController.getPostById);
router.get('/user/:userId', postController.getPostsByUserId);
export default router;
