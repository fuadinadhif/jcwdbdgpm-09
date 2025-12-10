import { type NextFunction, type Request, type Response } from "express";
export declare class AuthController {
    register(req: Request, res: Response, next: NextFunction): Promise<void>;
    login(req: Request, res: Response, next: NextFunction): Promise<void>;
    logout(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=auth.controller.d.ts.map