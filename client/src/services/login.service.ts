import { LoginInputs } from "../types/loginForm";

export const loginService = async (data: LoginInputs) => {
  try {
    const res = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (res.ok) {
      localStorage.setItem("token", result.token);
      console.log("Logged in:", result);
    }

    return result
  } catch (err) {
    console.error(err);
  }
};
