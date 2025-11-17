import { type NextFunction, type Request, type Response } from "express";

export async function hello(
  request: Request,
  response: Response,
  next: NextFunction
) {
  console.log("Hello");
  next();
}
