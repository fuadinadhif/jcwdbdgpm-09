import { type Request, type Response } from "express";
import { PrismaClient } from "../generated/prisma/client.js";

const prisma = new PrismaClient();

export async function register(req: Request, res: Response) {
  try {
    const { name, username, email, password } = req.body;

    const newUser = await prisma.user.create({
      data: {
        name,
        username,
        email,
        password,
      },
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to register user" });
  }
}

export async function login() {}
export async function logout() {}
