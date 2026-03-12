import { CreateUserSchema, CreateUserFormData } from "./createUser.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUsersStore } from "../../stores/usersStore";

const CreateUserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(CreateUserSchema),
  });

  const addUser = useUsersStore((state) => state.addUser);
  const onSubmit = (data: CreateUserFormData) => addUser(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder={"Agent Code"} type="text" {...register("agentCode")} />
        {errors.agentCode && <p>{errors.agentCode.message}</p>}

        <input placeholder={"Full Name"} type="text" {...register("fullName")} />
        {errors.fullName && <p>{errors.fullName.message}</p>}

        <input placeholder={"Password"} type="text" {...register("password")} />
        {errors.password && <p>{errors.password.message}</p>}

        <input placeholder={"Role"} type="text" {...register("role")} />
        {errors.role && <p>{errors.role.message}</p>}

        <input type="submit"/>
      </form>
    </div>
  );
};

export default CreateUserForm;
