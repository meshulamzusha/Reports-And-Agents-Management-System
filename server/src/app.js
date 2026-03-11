import express from "express";
import cors from "cors";

import authRouter from "./features/auth/auth.routes.js"
import userRouter from "./features/user/user.routes.js"

const app = express();

app.use(express.json(), cors());

app.use("/", authRouter)
app.use("/", userRouter)

export default app;
