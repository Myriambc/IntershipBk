import { Router } from "express";
import { protect, restrictTo } from "../controller/auth.controller";
import {
  createLigneProduit,
  getLigneProduits,
} from "../controller/ligneProduit.controller";

const router = Router();
router.use(protect);
router.route("/").get(getLigneProduits).post(createLigneProduit);

export default router;
