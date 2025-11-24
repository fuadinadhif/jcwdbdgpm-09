import express, {
  type Application,
  type Request,
  type Response,
  type NextFunction,
} from "express";
import userRoutes from "./routes/user.route.js";
import articleRoutes from "./routes/article.route.js";
import { hello } from "./middlewares/hello.middleware.js";

const PORT: number = 8000;
const server: Application = express();

// MIDDLEWARES
server.use(express.json()); // Middleware untuk mengambil data JSON di dalam request body
// server.use(hello);

server.use("/data/users", userRoutes);
server.use("/data/articles", articleRoutes);

server.use(
  (
    error: unknown,
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    console.error(error);
    response.status(500).json({ message: "General error. Good luck" });
  }
);

server.listen(PORT, () => {
  console.info(`Server is listening on port: ${PORT}`);
});
