import express from "express";
import { getAllUser } from "../controllers/user.controller.js";

const router = express.Router();

router.route("/").get(getAllUser);

export default router;
