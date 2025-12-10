import { type Request, type Response } from "express";
export declare function getAllEvent(req: Request, res: Response): Promise<void>;
export declare function createEvent(req: Request, res: Response): Promise<void>;
export declare function softDeleteEvent(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function hardDeleteEvent(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=event.controller.d.ts.map