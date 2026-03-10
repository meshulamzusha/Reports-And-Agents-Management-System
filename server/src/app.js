import express from "express";
import cors from "cors";

import authRouter from "./features/auth/auth.routes.js"

const app = express();

app.use(express.json(), cors());

app.use("/", authRouter)

export default app;
