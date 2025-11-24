import { readJson } from "../utils/io.js";
import { type IArticle } from "../types/article.type.d.js";

const filePath = "data/articles.json";

export async function findAllArticles() {
  return await readJson(filePath);
}

export async function findArticleById(id: number) {
  const articles = (await readJson(filePath)) as IArticle[];
  return articles.find((article) => article.id === id);
}

export async function findTotalLikesByDateRange(
  startDate: string,
  endDate: string
) {
  const articles = (await readJson(filePath)) as IArticle[];
  // console.log(articles);

  const start = new Date(startDate);
  const end = new Date(endDate);
  // console.log(start, end)

  const filteredArticles = articles.filter((article) => {
    const created = new Date(article.createdAt);
    // console.log(created)
    return created >= start && created <= end;
  });
  // console.log(filteredArticles);

  const totalLikes = filteredArticles.reduce((acc, curr) => {
    return acc + curr.likes;
  }, 0);

  return totalLikes;
}

export async function findTotalArticlesByCategory(cat: string) {
  const articles = (await readJson(filePath)) as IArticle[];
  const filteredArticles = articles.filter((article) => {return article.category === cat});

  return filteredArticles.length;
}

export async function addArticle() {}

export async function updateArticle() {}

export async function removeAllArticles() {}

export async function removeArticleById() {}

