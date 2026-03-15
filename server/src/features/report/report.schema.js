import { z } from "zod";

export const CreateReportSchema = z.object({
  category: z.enum(["intelligence", "logistics", "alert"]),
  urgency: z.enum(["low", "medium", "high"]),
  message: z.string().min(10).max(1000),
});
