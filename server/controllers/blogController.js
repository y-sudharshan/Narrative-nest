import Blog from "../models/Blog.js";
import Comment from "../models/Comment.js";

export const createBlog = async (req, res) => {
  try {
    const blog = new Blog({ ...req.body, author: req.user.id });
    await blog.save();
    res.status(201).json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().populate("author", "username").populate({ path: "comments", populate: { path: "author", select: "username" } });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate("author", "username").populate({ path: "comments", populate: { path: "author", select: "username" } });
    if (!blog) return res.status(404).json({ error: "Blog not found" });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!blog) return res.status(404).json({ error: "Blog not found" });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) return res.status(404).json({ error: "Blog not found" });
    res.json({ message: "Blog deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const likeBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ error: "Blog not found" });
    if (!blog.likes.includes(req.user.id)) {
      blog.likes.push(req.user.id);
      await blog.save();
    }
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const commentBlog = async (req, res) => {
  try {
    const comment = new Comment({ blog: req.params.id, author: req.user.id, content: req.body.content });
    await comment.save();
    const blog = await Blog.findById(req.params.id);
    blog.comments.push(comment._id);
    await blog.save();
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
