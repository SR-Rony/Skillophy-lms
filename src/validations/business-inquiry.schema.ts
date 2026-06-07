import { z } from "zod";

export const businessInquirySchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  companyName: z.string().min(2, "Company name is required"),
  email: z.string().email("Enter a valid email"),
  companySize: z.string().min(1, "Company size is required"),
  peopleToTrain: z.string().min(1, "Number of people to train is required"),
  phone: z.string().min(6, "Phone number is required"),
  location: z.string().min(2, "Location is required"),
  description: z.string().optional(),
});

export type BusinessInquiryFormValues = z.infer<typeof businessInquirySchema>;
