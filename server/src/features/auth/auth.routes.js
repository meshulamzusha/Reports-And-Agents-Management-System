import express from "express";

import { login } from "./auth.controller.js";
import UserLoginSchema from "./auth.schema.js";
import { validate } from "../../middleware/validationMiddleware.js";

const router = express.Router();

router.post("/auth/login", validate(UserLoginSchema), login);

export default router;
