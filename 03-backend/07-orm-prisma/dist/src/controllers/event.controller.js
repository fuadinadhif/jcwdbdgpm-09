import {} from "express";
import { PrismaClient } from "../generated/prisma/client.js";
const prisma = new PrismaClient();
export async function getAllEvent(req, res) {
    const { page = 1, limit = 10 } = req.query;
    const skip = (Number(page) - 1) * Number(limit);
    const totalData = await prisma.event.count({ where: { deletedAt: null } });
    const totalPages = Math.ceil(totalData / Number(limit));
    const events = await prisma.event.findMany({
        where: { deletedAt: null },
        include: { eventOrganizer: { select: { name: true, email: true } } },
        orderBy: { price: "desc" },
        skip,
        take: Number(limit),
    });
    res
        .status(200)
        .json({ data: events, totalData, totalPages, currentPage: +page });
}
export async function createEvent(req, res) {
    const { eventOrganizerId, name, price, totalSeats, availableSeats } = req.body;
    const event = await prisma.event.create({
        data: {
            name,
            price,
            totalSeats,
            availableSeats,
            eventOrganizer: { connect: { id: eventOrganizerId } },
        },
    });
    res.status(201).json(event);
}
export async function softDeleteEvent(req, res) {
    const id = req.params.id;
    if (!id)
        return res.status(400).json({ message: "id is missing" });
    const event = await prisma.event.update({
        where: { id },
        data: { deletedAt: new Date() },
    });
    res.status(200).json({ message: "Event soft deleted", event });
}
export async function hardDeleteEvent(req, res) {
    const id = req.params.id;
    if (!id)
        return res.status(400).json({ message: "id is missing" });
    const event = await prisma.event.delete({ where: { id } });
    res.status(200).json({ message: "Event hard deleted", event });
}
//# sourceMappingURL=event.controller.js.map