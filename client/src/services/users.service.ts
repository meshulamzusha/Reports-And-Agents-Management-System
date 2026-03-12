import { User } from "../types/user.types";

export const fetchUsers = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch("http://localhost:3000/admin/users", {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    const { users } = await response.json();
    return users;
  } catch (error) {
    throw error;
  }
};

export const createUser = async (user: User) => {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch("http://localhost:3000/admin/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(user)
    });

    const result = await response.json()
    return result.user
  } catch (error) {
    throw error;
  }
};
