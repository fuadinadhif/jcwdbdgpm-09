import { type NextFunction, type Request, type Response } from "express";
import { readArticles, writeArticle } from "../utils/io.js";

export async function createArticle(
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
    const newArticle = request.body;
    const oldArticles = await readArticles();

    await writeArticle([...oldArticles, newArticle]);

    response.status(201).json({ message: "New article has been added" });
  } catch (error) {
    next(error);
  }
}

export async function getAllArticle(
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
    throw new Error("Artificial error");

    const articles = await readArticles();
    response.status(200).json(articles);
  } catch (error) {
    next(error);
  }
}

export async function updateArticle(
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
    const idUpdate = request.params.id;
    const updatedArticle = request.body;
    const articles = await readArticles();
    const idxUpdate = articles.findIndex(
      (element: { id: number }) => element.id === Number(idUpdate)
    );

    articles[idxUpdate] = { ...articles[idxUpdate], ...updatedArticle };

    await writeArticle(articles);

    response
      .status(200)
      .json({ message: `Article with id: ${idUpdate}  has been updated` });
  } catch (error) {
    next(error);
  }
}

export async function deleteArticle(
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
    const idDelete = request.params.id;
    const articles = await readArticles();

    const latestArticles = articles.filter(
      (element: { id: number }) => element.id !== Number(idDelete)
    );

    await writeArticle(latestArticles);

    response.status(200).send("<h1>Article sudah didelete</h1>");
  } catch (error) {
    next(error);
  }
}
