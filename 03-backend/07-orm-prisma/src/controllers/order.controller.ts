import { PrismaClient } from "../generated/prisma/client.js";
import { type Request, type Response } from "express";

const prisma = new PrismaClient();

export async function createOrder(req: Request, res: Response) {
  const { customerId, eventId, quantity } = req.body;

  const order = await prisma.$transaction(async (tx) => {
    // 1. Get event
    const event = await prisma.event.findUnique({ where: { id: eventId } });

    if (!event) throw new Error("Event not found");

    if (event.deletedAt) throw new Error("Event has ended");

    if (event.availableSeats < quantity) throw new Error("No available seats");

    // 2. Update event available seats
    await tx.event.update({
      where: { id: eventId },
      data: { availableSeats: { decrement: quantity } },
    });

    // 3. Deduct customer wallet
    const totalAmount = event.price * quantity;
    const customerWallet = await tx.wallet.findUnique({
      where: { userId: customerId },
    });

    if (!customerWallet) throw new Error("Wallet not found");

    if (customerWallet.balance < totalAmount)
      throw new Error("Balance not sufficient");

    await tx.wallet.update({
      where: { userId: customerId },
      data: { balance: { decrement: totalAmount } },
    });

    // 4. Add eo wallet
    const eoWallet = await tx.wallet.findUnique({
      where: { userId: event.eventOrganizerId },
    });

    if (!eoWallet) throw new Error("Wallet not found");

    await tx.wallet.update({
      where: { userId: event.eventOrganizerId },
      data: { balance: { increment: totalAmount } },
    });

    // 5. Create order
    const order = await tx.order.create({
      data: { customerId, eventId, quantity, totalAmount },
    });

    return order;
  });

  res.status(200).json(order);
}
