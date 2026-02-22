import Post from '../models/post.model.js';
import { uploadToImageKit } from '../services/storage.service.js';

export const createPost = async (req, res) => {
    try {
        const { content } = req.body;
        let imageUrl = "";

        if (req.file) {
            const uploadResult = await uploadToImageKit(req.file.buffer, req.file.originalname);
            imageUrl = uploadResult.url;
        }

        const newPost = new Post({
            user: req.user.id,
            content,
            imageUrl
        });

        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }
};

export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find()
            .populate('user', 'username profilePicture')
            .sort({ createdAt: -1 });

        res.status(200).json(posts);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }
};
