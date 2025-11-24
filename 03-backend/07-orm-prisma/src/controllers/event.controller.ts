import { type Request, type Response } from "express";
import { PrismaClient } from "../generated/prisma/client.js";

const prisma = new PrismaClient();

export async function getAllEvent(req: Request, res: Response) {
  const events = await prisma.event.findMany({
    include: { eventOrganizer: { select: { name: true, email: true } } },
  });
  res.status(200).json(events);
}

export async function getEventRevenue(req: Request, res: Response) {
  const summaries = await prisma.order.groupBy({
    by: ["eventId"],
    _sum: { totalAmount: true, quantity: true },
  });

  const results = await Promise.all(
    summaries.map(async (summary) => {
      const event = await prisma.event.findUnique({
        where: { id: summary.eventId },
        select: { name: true, price: true },
      });

      return {
        eventId: summary.eventId,
        eventName: event?.name,
        revenue: summary._sum.totalAmount,
      };
    })
  );

  res.status(200).json(results);
}
