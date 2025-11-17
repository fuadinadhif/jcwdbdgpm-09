import { type NextFunction, type Request, type Response } from "express";
import { type IUser } from "../types/user.type.d.js";

export async function getAllUser(
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
    throw new Error("Artifical user error");

    const users: IUser[] = [
      { id: 1, name: "John Doe", age: 72 },
      { id: 2, name: "Jane Doe", age: 25 },
    ];

    response.status(200).json(users);
  } catch (error) {
    next(error);
  }
}
