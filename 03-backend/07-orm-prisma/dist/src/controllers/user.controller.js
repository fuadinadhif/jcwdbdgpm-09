import {} from "express";
import { PrismaClient } from "../generated/prisma/client.js";
import { AppError } from "../errors/app.error.js";
const prisma = new PrismaClient();
export async function getAllUser(req, res) {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
}
export async function getUserById(req, res) {
    const id = req.params.id;
    if (!id)
        throw new AppError(400, "Id is missing");
    const user = await prisma.user.findUnique({ where: { id } });
    res.status(200).json(user);
}
export async function updateUser(req, res) {
    const id = req.params.id;
    const updatedData = req.body;
    if (!id)
        throw new AppError(400, "Id is missing");
    const updatedUser = await prisma.user.update({
        where: { id },
        data: { ...updatedData },
    });
    res.status(200).json({ message: "User updated", updatedUser });
}
export async function deleteAllUser(req, res) {
    await prisma.user.deleteMany();
    res.status(200).json({ message: "All user data has been deleted" });
}
export async function deleteUserById(req, res) {
    const id = req.params.id;
    if (!id)
        throw new AppError(400, "Id is missing");
    await prisma.user.delete({ where: { id } });
    res.status(200).json({ message: `User with id: ${id} has been deleted` });
}
//# sourceMappingURL=user.controller.js.map