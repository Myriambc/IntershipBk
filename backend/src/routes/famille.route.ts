import { Router } from "express";
import { protect, restrictTo } from "../controller/auth.controller";
import { createFamille, getFamilles } from "../controller/famille.controller";

const router = Router();
router.use(protect);
router.route("/").get(getFamilles).post(createFamille);

export default router;
