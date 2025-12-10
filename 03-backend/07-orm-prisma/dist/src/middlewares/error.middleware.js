import {} from "express";
import { AppError } from "../errors/app.error.js";
import z from "zod";
export function notFoundErrorHandler(req, res) {
    res.status(404).json({ message: `Route ${req.originalUrl} not found` });
}
export function globalErrorHandler(error, req, res, next) {
    console.error(error);
    if (error instanceof z.ZodError) {
        return res
            .status(400)
            .json({ message: "Validation failed", errors: z.flattenError(error) });
    }
    if (error instanceof AppError) {
        return res.status(error.statusCode).json({ message: error.message });
    }
    if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
    }
    res
        .status(500)
        .json({ message: "General error from internal server. Good luck" });
}
//# sourceMappingURL=error.middleware.js.map