import { type Request, type Response } from "express";
import {
  addArticle,
  findAllArticles,
  findArticleById,
  findTotalArticlesByCategory,
  findTotalLikesByDateRange,
} from "../services/article.service.js";

export async function getAllArticles(req: Request, res: Response) {
  try {
    const articles = await findAllArticles();
    res.status(200).json(articles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to get all articles" });
  }
}

export async function getArticleById(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const article = await findArticleById(id);

    res.status(200).json(article);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Article not found" });
  }
}

export async function getTotalLikesByDateRange(req: Request, res: Response) {
  try {
    const { startDate, endDate } = req.query;

    if (!startDate || !endDate) {
      return res
        .status(400)
        .json({ message: "startDate and endDate required" });
    }

    const total = await findTotalLikesByDateRange(
      String(startDate),
      String(endDate)
    );

    res.status(200).json({ totalLikes: total });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to calculate likes" });
  }
}

export async function getTotalArticlesByCategory(req: Request, res: Response) {
  try {
    const category = req.query.category;

    if (!category) {
      return res.status(400).json({ message: "category required" });
    }

    const total = await findTotalArticlesByCategory(String(category));

    res.status(200).json({ category, totalArticles: total });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to calculate likes" });
  }
}

export async function createArticle(req: Request, res: Response) {
  try {
    const newArticle = req.body;
    const result = await addArticle(newArticle);

    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create article" });
  }
}
