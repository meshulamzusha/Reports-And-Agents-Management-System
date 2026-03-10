import { loginService } from "./auth.service.js";

export const login = async (req, res) => {
  try {
    const { password, agentCode } = req.body;

    const data = await loginService(agentCode, password);

    return res.status(200).json({
      ok: true,
      message: "You have successfully connected.",
      ...data,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      ok: false,
      message: error.message,
    });
  }
};
