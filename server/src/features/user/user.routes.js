import express from "express";

import { createUser } from "./user.controller.js";
import CreateUserSchema from "./user.schema.js";
import { validate } from "../../middleware/validationMiddleware.js";
import { jwtGuard } from "../../middleware/jwtMiddleware.js";
import { roleGuard } from "../../middleware/roleMiddleware.js";

const router = express.Router();

router.post(
  "/admin/users",
  jwtGuard,
  roleGuard,
  validate(CreateUserSchema),
  createUser,
);

export default router;
