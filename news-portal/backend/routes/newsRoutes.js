import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  getAllNews,
  getTopNews,
  getSingleNews,
  createNews,
  updateNews,
  deleteNews
} from "../controllers/newsController.js";

const router = express.Router();

router.get("/news", getAllNews);
router.get("/top", getTopNews);
router.get("/:id", getSingleNews);
router.post("/", createNews);
router.put("/:id", updateNews);
router.get("/:id", getNewsById);
router.delete("/:id", deleteNews);
router.post("/", authMiddleware, createNews);
router.put("/:id", authMiddleware, updateNews);
router.delete("/:id", authMiddleware, deleteNews);

export default router;