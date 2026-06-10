"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormField } from "@/components/forms/form-field";
import {
  authCardClassName,
  authFieldClassName,
  authGoBackClassName,
  authHeadingClassName,
  authSubtextClassName,
} from "@/components/auth/auth-form-styles";
import { ROUTES } from "@/constants";
import { forgotPasswordSchema, type ForgotPasswordFormValues } from "@/validations/auth.schema";

function ForgotPasswordForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { mobileNumber: "" },
  });

  const onSubmit = async (data: ForgotPasswordFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    router.push(
      `${ROUTES.auth.verifyOtp}?mobile=${encodeURIComponent(data.mobileNumber)}&flow=reset`,
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="[&_label]:font-semibold [&_label]:text-[#24201f]">
        <FormField
          label="Mobile Number"
          htmlFor="mobileNumber"
          error={errors.mobileNumber?.message}
        >
          <Input
            id="mobileNumber"
            type="tel"
            placeholder="Enter your mobile number"
            className={authFieldClassName}
            {...register("mobileNumber")}
          />
        </FormField>
      </div>

      <Button
        type="submit"
        variant="publicCta"
        size="publicCta"
        disabled={isSubmitting}
        className="w-full rounded-lg"
      >
        {isSubmitting ? "Sending..." : "Send OTP"}
      </Button>
    </form>
  );
}

export function ForgotPasswordPageContent() {
  return (
    <div className={authCardClassName}>
      <Link href={ROUTES.auth.login} className={authGoBackClassName}>
        <ArrowLeft className="h-4 w-4" aria-hidden />
        Go Back
      </Link>

      <div className="mt-6">
        <h1 className={authHeadingClassName}>Forgot Password</h1>
        <p className={`mt-3 ${authSubtextClassName}`}>
          Enter your mobile number and we&apos;ll send you a 4-digit code to reset your password.
        </p>
      </div>

      <div className="mt-8">
        <ForgotPasswordForm />
      </div>

      <p className="mt-6 text-center text-[14px] text-[#6f6562]">
        Remember your password?{" "}
        <Link href={ROUTES.auth.login} className="font-semibold text-primary hover:text-primary/90">
          Sign in
        </Link>
      </p>
    </div>
  );
}
