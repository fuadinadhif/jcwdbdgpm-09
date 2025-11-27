import { type NextFunction, type Request, type Response } from "express";

import { AuthService } from "../services/auth.service.js";

const authService = new AuthService();

export class AuthController {
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, username, email, password } = req.body;

      const user = await authService.register({
        email,
        username,
        password,
        name,
      });

      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { username, password } = req.body;

      const user = await authService.validateUser(username, password);
      const authToken = await authService.generateToken(user);

      res
        .status(200)
        .cookie("authenticationToken", authToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          maxAge: 1000 * 60 * 60 * 24,
        })
        .json({ message: "Login success" });
    } catch (error) {
      next(error);
    }
  }

  async logout(req: Request, res: Response) {
    req.currentUser = null;
    res
      .status(200)
      .clearCookie("authenticationToken")
      .json({ message: "Logout success" });
  }
}
