import { z } from "zod";

const UserLoginSchema = z.object({
  agentCode: z.string().length(4),
  password: z.string().length(6),
});

export default UserLoginSchema;
