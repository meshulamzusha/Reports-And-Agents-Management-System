import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router";
import { LoginSchema, LoginFormData } from "./loginForm.schema";
import { loginService } from "../../services/login.service";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data: LoginFormData) => {
    const result = await loginService(data);

    if (result.ok) {
      navigate("/dashboard");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input placeholder="Agent Code" {...register("agentCode")} />
          {errors.agentCode && <p>{errors.agentCode.message}</p>}
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <button type="submit" disabled={isSubmitting}>
          Login
        </button>
      </form>
    </>
  );
};
