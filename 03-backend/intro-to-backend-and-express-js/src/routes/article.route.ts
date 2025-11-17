import express from "express";
import {
  createArticle,
  deleteArticle,
  getAllArticle,
  updateArticle,
} from "../controllers/article.controller.js";
import { hello } from "../middlewares/hello.middleware.js";

const router = express.Router();

router.route("/").get(hello, getAllArticle).post(createArticle);
router.route("/:id").put(updateArticle).delete(deleteArticle);

export default router;
