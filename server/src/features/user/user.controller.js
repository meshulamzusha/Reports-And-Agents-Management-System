import { createUserService, getAllService } from "./user.service.js";

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

export const getAll = async (req, res) => {
  try {
    const users = await getAllService();

    return res.status(200).json({
      ok: true,
      users,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      message: "Internal server error.",
    });
  }
};
