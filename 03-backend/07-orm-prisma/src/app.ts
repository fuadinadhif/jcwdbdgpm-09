import "dotenv/config";

import express, {
  type Application,
  type Request,
  type Response,
} from "express";

import authRoutes from "./routes/auth.route.js";
import eventRoutes from "./routes/event.route.js";

const app: Application = express();
const PORT: number = 8000;

app.use(express.json());

app.get("/status", (req: Request, res: Response) => {
  res.status(200).json({
    message: "API running",
    uptime: Math.round(process.uptime()) + " " + "seconds",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);

app.listen(PORT, () => {
  console.info(`Server is listening on port: ${PORT}`);
});
