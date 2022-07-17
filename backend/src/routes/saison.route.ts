import { Router } from "express";
import { protect, restrictTo } from "../controller/auth.controller";
import { createSaison, getSaisons } from "../controller/saison.controller";

const router = Router();
router.use(protect);
router.route("/").get(getSaisons).post(createSaison);

export default router;
