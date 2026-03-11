import { z } from "zod";

const CreateUserSchema = z.object({
    agentCode: z.string().length(4),
    fullName: z.string().min(6).max(20),
    role: z.enum(["admin", "agent"]),
    password: z.string().length(6)
})

export default CreateUserSchema