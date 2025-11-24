import express from "express";
import {
  getAllEvent,
  getEventRevenue,
} from "../controllers/event.controller.js";

const router = express.Router();

router.route("/").get(getAllEvent);
router.route("/revenue").get(getEventRevenue);

export default router;
