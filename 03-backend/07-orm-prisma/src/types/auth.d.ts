import { JwtPayload } from "jsonwebtoken";

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
}

export interface IExistingUser {
  name: string;
  email: string;
  role: string;
}
