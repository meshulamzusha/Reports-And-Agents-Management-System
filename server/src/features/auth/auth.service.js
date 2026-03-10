import User from "../user/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const loginService = async (agentCode, password) => {
  const user = await User.findOne({ agentCode });

  if (!user) {
    const error = new Error("Unauthorized");
    error.status = 401;
    throw error;
  }

  const correct = await bcrypt.compare(password, user.passwordHash);

  if (!correct) {
    const error = new Error("Unauthorized");
    error.status = 401;
    throw error;
  }

  const token = jwt.sign(
    {
      userId: user._id,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    },
  );

  return {
    token,
    user: {
      id: user._id,
      agentCode: user.agentCode,
      fullName: user.fullName,
      role: user.role,
    },
  };
};
