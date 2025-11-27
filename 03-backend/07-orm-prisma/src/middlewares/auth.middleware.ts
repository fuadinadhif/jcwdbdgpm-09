import { type Request, type Response, type NextFunction } from "express";
import jwt from "jsonwebtoken";
import type { CustomJwtPayload } from "../types/auth.js";

export async function verifyToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const authHeader = req.headers.authorization;

    const bearerToken = authHeader?.split(" ")[1];
    const cookieToken = req.cookies?.authenticationToken;

    const authToken = bearerToken || cookieToken;

    if (!authToken)
      return res
        .status(401)
        .json({ message: "Unauthenticated. Please login first" });

    const verifiedToken = jwt.verify(
      authToken,
      process.env.JWT_SECRET as string
    ) as CustomJwtPayload;

    req.currentUser = verifiedToken;

    next();
  } catch (error) {
    res.status(401).json({ message: "Expired or invalid token" });
  }
}

export function roleGuard(...allowedRoles: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const role = req.currentUser?.role;

    if (!role) {
      return res
        .status(401)
        .json({ message: "Unathenticated. Please login first" });
    }

    if (!allowedRoles.includes(role)) {
      return res.status(403).json({
        message: "Forbidden. You are not authorized to access this route",
      });
    }

    next();
  };
}
