import { createUserService } from "./user.service.js";

export const createUser = async (req, res) => {
  try {
    const user = await createUserService(req.body);

    return res.status(201).json({
      ok: true,
      message: "User successfully created",
      user,
    });

  } catch (error) {
    console.log(error);

    return res.status(error.status || 500).json({
      ok: false,
      message: error.message,
    });
  }
};
