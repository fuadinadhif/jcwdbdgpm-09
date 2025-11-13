import fs from "node:fs/promises";

interface IArticle {
  id: number;
  title: string;
  content: string;
}

export async function readArticles() {
  const articles = await fs.readFile("articles.json", "utf-8");
  return JSON.parse(articles);
}

export async function writeArticle(data: IArticle[]) {
  await fs.writeFile("articles.json", JSON.stringify(data));
}
