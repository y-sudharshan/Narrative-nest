import express from "express";
import { getAllUsers, getAllBlogs, deleteUser, deleteBlog } from "../controllers/adminController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/users", protect, admin, getAllUsers);
router.get("/blogs", protect, admin, getAllBlogs);
router.delete("/user/:id", protect, admin, deleteUser);
router.delete("/blog/:id", protect, admin, deleteBlog);

export default router;
