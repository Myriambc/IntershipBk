import { Router } from "express";
import { protect, restrictTo } from "../controller/auth.controller";
import { createModele, getModeles } from "../controller/modele.controller";

const router = Router();
router.use(protect);
router.route("/").get(getModeles).post(createModele);

export default router;
