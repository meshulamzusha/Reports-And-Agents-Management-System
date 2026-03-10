import mongoose from "mongoose";
import bcrypt from "bcrypt";
import "dotenv/config"
import User from "./user.model.js";

const createUser = async () => {
  await mongoose.connect(process.env.MONGODB_URI);

  const passwordHash = await bcrypt.hash("123456", 10);

  const user = await User.create({
    agentCode: "1001",
    fullName: "Alice Mckinley",
    passwordHash: passwordHash,
    role: "admin"
  });

  console.log("User created:", user);

  process.exit();
};

createUser();
