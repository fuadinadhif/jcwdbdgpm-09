import express, {
  type Application,
  type Response,
  type Request,
} from "express";
import articleRoutes from "./routes/article.route.js";

const app: Application = express();
const PORT: number = 8000;

app.use(express.json());

app.get("/status", (req: Request, res: Response) => {
  res.status(200).json({ message: "API running", uptime: process.uptime() });
});

app.use("/data/articles", articleRoutes);

app.listen(PORT, () => {
  console.info(`Server is listening on port: ${PORT}`);
});
