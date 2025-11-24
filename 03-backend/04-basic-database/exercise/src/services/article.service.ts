import { readJson } from "../utils/io.js";
import { type IArticle } from "../types/article.type.d.js";
import db from "../configs/db.config.js";

const filePath = "data/articles.json";

export async function findAllArticles() {
  const result = await db.query(`select * from articles`);
  return result.rows;
}

export async function findArticleById(id: number) {
  const result = await db.query(`select * from articles where id = $1`, [id]);
  return result.rows[0];
}

export async function findTotalLikesByDateRange(
  startDate: string,
  endDate: string
) {
  const result = await db.query(
    `select sum(likes) as total_likes from articles where createdAt between $1 and $2`,
    [startDate, endDate]
  );
  return result.rows[0].total_likes;
}

export async function findTotalArticlesByCategory(category: string) {
  const result = await db.query(
    `select count(*) as total from articles where category = $1`,
    [category]
  );
  return result.rows[0].total;
}

export async function addArticle(article: IArticle) {
  const result = await db.query(
    `
    INSERT INTO articles (title, image, content, category)  
    VALUES ($1, $2, $3, $4)
    RETURNING *
  `,
    [article.title, article.image, article.content, article.category]
  );

  return result.rows[0];
}

export async function updateArticle() {}

export async function removeAllArticles() {}

export async function removeArticleById() {}
