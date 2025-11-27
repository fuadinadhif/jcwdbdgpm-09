import "express";
import type { CustomJwtPayload } from "./auth.js";

declare module "express-serve-static-core" {
  interface Request {
    currentUser?: CustomJwtPayload | null;
  }
}
