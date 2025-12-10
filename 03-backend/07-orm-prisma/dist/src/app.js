import "dotenv/config";
import express, {} from "express";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";
import eventRoutes from "./routes/event.route.js";
import orderRoutes from "./routes/order.route.js";
import imageRoutes from "./routes/image.route.js";
import { notFoundErrorHandler, globalErrorHandler, } from "./middlewares/error.middleware.js";
import { logger } from "./libs/logger.lib.js";
class App {
    app;
    PORT;
    constructor(port) {
        this.app = express();
        this.PORT = port;
        this.initializeMiddlewares();
        this.initializeStatusRoute();
        this.initializeRoutes();
        this.intializeErrorHandler();
    }
    initializeMiddlewares() {
        this.app.use(express.json());
        this.app.use(cookieParser());
    }
    initializeStatusRoute() {
        this.app.get("/api/status", (req, res) => {
            res.status(200).json({
                message: "API running",
                uptime: Math.round(process.uptime()) + " " + "seconds",
            });
        });
    }
    initializeRoutes() {
        this.app.use("/api/auth", authRoutes);
        this.app.use("/api/events", eventRoutes);
        this.app.use("/api/orders", orderRoutes);
        this.app.use("/api/images", imageRoutes);
    }
    intializeErrorHandler() {
        this.app.use(notFoundErrorHandler);
        this.app.use(globalErrorHandler);
    }
    listen() {
        this.app.listen(this.PORT, () => logger.info(`Server is listening on port: ${this.PORT}`));
    }
}
export default App;
//# sourceMappingURL=app.js.map