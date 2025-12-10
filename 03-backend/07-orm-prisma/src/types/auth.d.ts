import { type JwtPayload } from "jsonwebtoken";
import type { RoleType } from "../generated/prisma/enums.ts";

export interface CustomJwtPayload extends JwtPayload {
  id: string;
  name: string;
  email: string;
  role: string;
}

export interface IRegister {
  name: string;
  username: string;
  email: string;
  password: string;
  role?: RoleType | undefined;
}

export interface IExistingUser {
  name: string;
  email: string;
  role: string;
}
