import fs from "node:fs/promises";

interface IArticle {
  id: number;
  title: string;
  content: string;
}

export async function readArticles() {
  const articles = await fs.readFile("article.json", "utf-8");
  return JSON.parse(articles);
}

export async function writeArticle(data: IArticle[]) {
  await fs.writeFile("article.json", JSON.stringify(data, null, 6));
}
