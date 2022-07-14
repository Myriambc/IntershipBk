import { Router } from "express";
import { createUser, getUsers } from "../controller/user.controller";

const router = Router();
// router.use(protect)
router.route("/").get(getUsers).post(createUser);
// router
//   .route("/:id")
//   .get(SchemaValidator(userSchema.userById, ValidationSource.PARAM), getUser)
//   .put(
//     uploadMedia("users", "avatar"),
//     SchemaValidator(userSchema.userById, ValidationSource.PARAM),
//     SchemaValidator(userSchema.putUser),
//     updateUser
//   )
//   .delete(
//     SchemaValidator(userSchema.userById, ValidationSource.PARAM),
//     deleteUser
//   );
export default router;
