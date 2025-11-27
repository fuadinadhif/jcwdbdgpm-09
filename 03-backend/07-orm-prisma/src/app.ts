import "dotenv/config";

import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js";
import eventRoutes from "./routes/event.route.js";
import orderRoutes from "./routes/order.route.js";

import {
  notFoundErrorHandler,
  globalErrorHandler,
} from "./middlewares/error.middleware.js";

class App {
  public app: Application;
  private readonly PORT: number;

  constructor(port: number) {
    this.app = express();
    this.PORT = port;

    this.initializeMiddlewares();
    this.initializeStatusRoute();
    this.initializeRoutes();
    this.intializeErrorHandler();
  }

  private initializeMiddlewares(): void {
    this.app.use(express.json());
    this.app.use(cookieParser());
  }

  private initializeStatusRoute(): void {
    this.app.get("/status", (req: Request, res: Response) => {
      res.status(200).json({
        message: "API running",
        uptime: Math.round(process.uptime()) + " " + "seconds",
      });
    });
  }

  private initializeRoutes(): void {
    this.app.use("/api/auth", authRoutes);
    this.app.use("/api/events", eventRoutes);
    this.app.use("/api/orders", orderRoutes);
  }

  private intializeErrorHandler(): void {
    this.app.use(notFoundErrorHandler);
    this.app.use(globalErrorHandler);
  }

  public listen(): void {
    this.app.listen(this.PORT, () =>
      console.info(`Server is listening on port: ${this.PORT}`)
    );
  }
}

export default App;
