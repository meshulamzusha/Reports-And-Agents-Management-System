import bcrypt from "bcrypt";
import User from "./user.model.js";

export const createUserService = async (userData) => {
  const passwordHash = await bcrypt.hash("123456", 10);

  try {
    const { agentCode, fullName, role, createdAt } = await User.create({
      agentCode: userData.agentCode,
      fullName: userData.fullName,
      passwordHash: passwordHash,
      role: userData.role,
    });

    return {
      agentCode,
      fullName,
      role,
      createdAt,
    };
  } catch (error) {
    if (error.code === 11000) {
      const conflictError = new Error(
        `User with agent code ${userData.agentCode} already exist`,
      );
      conflictError.status = 409;
      throw conflictError;
    }

    throw error;
  }
};

export const getAllService = async () => {
  try {
    const users = await User.find().select("-_id agentCode fullName role createdAt");
    return users;
  } catch (error) {
    throw error;
  }
};
