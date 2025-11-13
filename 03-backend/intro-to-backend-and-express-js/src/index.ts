/* --------------------------- Express.js Version --------------------------- */
import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import { readArticles, writeArticle } from "./utils/io.js";

interface IUser {
  id: number;
  name: string;
  age: number;
}

const PORT: number = 8000;

const users: IUser[] = [
  { id: 1, name: "John Doe", age: 72 },
  { id: 2, name: "Jane Doe", age: 25 },
];

const server: Application = express();

// MIDDLEWARES
server.use(express.json()); // Middleware untuk mengambil data JSON di dalam request body

// GET
server.get("/data/users", (request: Request, response: Response) => {
  response.status(200).json(users);
});
server.get("/data/articles", async (request: Request, response: Response) => {
  const articles = await readArticles();
  response.status(200).json(articles);
});

// POST
server.post("/data/articles", async (request: Request, response: Response) => {
  const newArticle = request.body;
  const oldArticles = await readArticles();

  await writeArticle([...oldArticles, newArticle]);

  response.status(201).json({ message: "New article has been added" });
});

// DELETE
server.delete(
  "/data/articles/:id",
  async (request: Request, response: Response) => {
    const articles = await readArticles();
    const idDelete = request.params.id;

    if (!idDelete)
      return response
        .status(404)
        .json({ message: "Please include article id that you want to delete" });

    const latestArticles = articles.filter(
      (article: { id: number }) => article.id !== +idDelete
    );

    await writeArticle(latestArticles);

    response
      .status(200)
      .json({ message: `Article with id: ${idDelete} has been deleted` });
  }
);

server.listen(PORT, () => {
  console.info(`Server is listening on port: ${PORT}`);
});

/* ----------------------------- Node.js Version ---------------------------- */
// import http from "http";

// const PORT: number = 8888;

// const users = [
//   { id: 1, name: "John Doe", age: 72 },
//   { id: 2, name: "Jane Doe", age: 25 },
// ];

// const server = http.createServer((request, response) => {
//   if (request.url === "/data/users" && request.method === "GET") {
//     response.writeHead(200, { "content-type": "application/json" }); // Menulis response header
//     response.write(JSON.stringify(users)); // Menulis response body
//     response.end(); // Menutup response
//   }
// });

// server.listen(PORT, () => {
//   console.info(`Server is listening on port: ${PORT}`);
// });
