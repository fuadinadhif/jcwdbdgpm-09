-- DropForeignKey
ALTER TABLE "public"."orders" DROP CONSTRAINT "orders_eventId_fkey";

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "events"("id") ON DELETE CASCADE ON UPDATE CASCADE;
