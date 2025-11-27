import express from "express";
import {
  createEvent,
  getAllEvent,
  hardDeleteEvent,
  softDeleteEvent,
} from "../controllers/event.controller.js";
import { verifyToken, roleGuard } from "../middlewares/auth.middleware.js";

const router = express.Router();

router
  .route("/")
  .get(getAllEvent)
  .post(verifyToken, roleGuard("EVENT_ORGANIZER"), createEvent);
router
  .route("/:id")
  .put(verifyToken, roleGuard("EVENT_ORGANIZER"), softDeleteEvent)
  .delete(verifyToken, roleGuard("ADMIN"), hardDeleteEvent);

export default router;
