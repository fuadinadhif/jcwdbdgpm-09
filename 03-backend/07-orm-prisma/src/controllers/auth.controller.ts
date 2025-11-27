import { type Request, type Response } from "express";
import { PrismaClient } from "../generated/prisma/client.js";
import { hash, compare } from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export async function register(req: Request, res: Response) {
  const { name, username, email, password } = req.body;

  const hashedPassword = await hash(password, 12);

  const newUser = await prisma.user.create({
    data: {
      name,
      username,
      email,
      password: hashedPassword,
    },
    omit: { password },
  });

  res.status(201).json(newUser);
}

export async function login(req: Request, res: Response) {
  const { username, password } = req.body;

  const existingUser = await prisma.user.findUnique({
    where: { username },
  });

  if (!existingUser)
    return res.status(400).json({ message: "Username or password wrong" });

  const isValidPassword = await compare(password, existingUser.password);

  if (!isValidPassword)
    return res.status(400).json({ message: "Username or password wrong" });

  const payload = {
    name: existingUser.name,
    email: existingUser.email,
    role: existingUser.role,
  };

  const authToken = jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: "1h",
  });

  res
    .status(200)
    .cookie("authenticationToken", authToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 1000 * 60 * 60 * 24,
    })
    .json({ message: "Login success" });
}

export async function logout(req: Request, res: Response) {
  req.currentUser = null;
  res
    .status(200)
    .clearCookie("authenticationToken")
    .json({ message: "Logout success" });
}
