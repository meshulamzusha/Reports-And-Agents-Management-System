import express from "express";
import { CreateReportSchema } from "./report.schema.js";
import { validate } from "../../middleware/validationMiddleware.js";
import { jwtGuard } from "../../middleware/jwtMiddleware.js";
import { handelCreateReport } from "./report.controller.js";
import { upload } from "./fileUpload.js";

const router = express.Router();

router.post(
  "/",
  jwtGuard,
  upload.single("image"),
  validate(CreateReportSchema),
  handelCreateReport,
);

export default router;
