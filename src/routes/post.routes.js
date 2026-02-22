import express from 'express';
import multer from 'multer';
import { createPost, getPosts } from '../controllers/post.controller.js';
import { verifyToken } from '../middlewares/auth.middleware.js';

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/', verifyToken, upload.single('image'), createPost);
router.get('/', getPosts);

export default router;
