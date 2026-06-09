import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Enter a valid email"),
  description: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
