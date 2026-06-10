import { z } from "zod";

const mobileNumberField = z
  .string()
  .min(10, "Enter a valid mobile number")
  .max(15, "Enter a valid mobile number");

export const loginSchema = z.object({
  mobileNumber: mobileNumberField,
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export const forgotPasswordSchema = z.object({
  mobileNumber: mobileNumberField,
});

export const registerSchema = loginSchema.extend({
  name: z.string().min(2, "Name must be at least 2 characters"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export const registerPageSchema = z
  .object({
    fullName: z.string().min(2, "Full name must be at least 2 characters"),
    mobileNumber: mobileNumberField,
    gender: z.enum(["male", "female", "other"], {
      required_error: "Select your gender",
    }),
    age: z
      .string()
      .min(1, "Age is required")
      .regex(/^\d+$/, "Enter a valid age")
      .refine((value) => Number(value) >= 10 && Number(value) <= 100, {
        message: "Enter a valid age",
      }),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const resetPasswordSchema = z
  .object({
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type LoginFormValues = z.infer<typeof loginSchema>;
export type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;
export type RegisterFormValues = z.infer<typeof registerSchema>;
export type RegisterPageFormValues = z.infer<typeof registerPageSchema>;
export type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;
