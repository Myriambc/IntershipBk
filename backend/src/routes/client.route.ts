import { Router } from "express";
import { protect, restrictTo } from "../controller/auth.controller";
import { createClient, getClients } from "../controller/client.controller";

const router = Router();
router.use(protect);
router.route("/").get(getClients).post(createClient);

export default router;
