import { type Request, type Response, type NextFunction } from "express";
export declare function notFoundErrorHandler(req: Request, res: Response): void;
export declare function globalErrorHandler(error: unknown, req: Request, res: Response, next: NextFunction): Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=error.middleware.d.ts.map