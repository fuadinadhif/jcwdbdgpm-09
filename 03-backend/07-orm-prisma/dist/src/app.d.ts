import "dotenv/config";
import { type Application } from "express";
declare class App {
    app: Application;
    private readonly PORT;
    constructor(port: number);
    private initializeMiddlewares;
    private initializeStatusRoute;
    private initializeRoutes;
    private intializeErrorHandler;
    listen(): void;
}
export default App;
//# sourceMappingURL=app.d.ts.map