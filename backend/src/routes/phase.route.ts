import { Router } from "express";
import { protect, restrictTo } from "../controller/auth.controller";
import { createPhase, getPhases } from "../controller/phase.controller";

const router = Router();
router.use(protect);
router.route("/").get(getPhases).post(createPhase);

export default router;
