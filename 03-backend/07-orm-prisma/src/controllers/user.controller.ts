import { type Request, type Response } from "express";
import { PrismaClient } from "../generated/prisma/client.js";

const prisma = new PrismaClient();

export async function getAllUser(req: Request, res: Response) {
  const users = await prisma.user.findMany();
  res.status(200).json(users);
}

export async function getUserById(req: Request, res: Response) {
  const id = Number(req.params.id);
  const user = await prisma.user.findUnique({ where: { id } });

  res.status(200).json(user);
}

export async function updateUser(req: Request, res: Response) {
  const id = Number(req.params.id);
  const updatedData = req.body;

  const updatedUser = await prisma.user.update({
    where: { id },
    data: { ...updatedData },
  });

  res.status(200).json({ message: "User updated", updatedUser });
}

export async function deleteAllUser(req: Request, res: Response) {
  await prisma.user.deleteMany();
  res.status(200).json({ message: "All user data has been deleted" });
}

export async function deleteUserById(req: Request, res: Response) {
  const id = Number(req.params.id);
  await prisma.user.delete({ where: { id } });
  res.status(200).json({ message: `User with id: ${id} has been deleted` });
}
