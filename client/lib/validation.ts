import { z } from "zod";

export const assignmentSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),

  subject: z.string().min(2, "Subject is required"),

  dueDate: z.string().min(1, "Due date is required"),

  instructions: z
    .string()
    .min(10, "Instructions should be at least 10 characters"),
});

export type AssignmentFormData = z.infer<
  typeof assignmentSchema
>;