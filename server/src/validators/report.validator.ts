import { z } from "zod";

const currentYear = new Date().getFullYear();

export const uploadReportSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Title must be at least 3 characters")
    .max(150),

  companyName: z
    .string()
    .trim()
    .min(2, "Company name is required")
    .max(100),

  financialYear: z
    .number({
      error: "Financial year is required",
    })
    .int()
    .min(2000)
    .max(currentYear + 1),
});