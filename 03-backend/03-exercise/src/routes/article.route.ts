import express from "express";
import {
  getAllArticles,
  getArticleById,
  getTotalArticlesByCategory,
  getTotalLikesByDateRange,
} from "../controllers/article.controller.js";

const router = express.Router();

router.route("/").get(getAllArticles);
router.route("/:id").get(getArticleById);
router.route("/stats/likes/range").get(getTotalLikesByDateRange);
router.route("/stats/category").get(getTotalArticlesByCategory);

// router.get("/", getAllArticles);
// router.get("/:id", getArticleById);

export default router;
