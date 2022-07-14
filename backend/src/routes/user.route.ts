import { Router } from "express";
import { protect, restrictTo } from "../controller/auth.controller";
import { createUser, getUsers } from "../controller/user.controller";

const router = Router();
router.use(protect, restrictTo("WORKER"));
router.route("/").get(getUsers).post(createUser);

export default router;
