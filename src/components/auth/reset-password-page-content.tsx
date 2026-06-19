"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/forms/form-field";
import { PasswordInput } from "@/components/forms/password-input";
import {
  authCardClassName,
  authFieldClassName,
  authGoBackClassName,
  authSubtextClassName,
} from "@/components/auth/auth-form-styles";
import { Heading } from "@/components/shared/heading";
import { ROUTES } from "@/constants";
import { resetPasswordSchema, type ResetPasswordFormValues } from "@/validations/auth.schema";

function ResetPasswordForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    router.push(ROUTES.auth.login);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="[&_label]:font-semibold [&_label]:text-[#24201f]">
        <FormField label="Password" htmlFor="password" error={errors.password?.message}>
          <PasswordInput
            id="password"
            placeholder="Enter your password"
            className={authFieldClassName}
            {...register("password")}
          />
        </FormField>
      </div>

      <div className="[&_label]:font-semibold [&_label]:text-[#24201f]">
        <FormField
          label="Confirm Password"
          htmlFor="confirmPassword"
          error={errors.confirmPassword?.message}
        >
          <PasswordInput
            id="confirmPassword"
            placeholder="Rewrite your password"
            className={authFieldClassName}
            {...register("confirmPassword")}
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
        {isSubmitting ? "Updating..." : "Update Password"}
      </Button>
    </form>
  );
}

export function ResetPasswordPageContent() {
  const searchParams = useSearchParams();
  const mobile = searchParams.get("mobile") ?? "";
  const verifyOtpHref = mobile
    ? `${ROUTES.auth.verifyOtp}?mobile=${encodeURIComponent(mobile)}&flow=reset`
    : `${ROUTES.auth.verifyOtp}?flow=reset`;

  return (
    <div className={authCardClassName}>
      <Link href={verifyOtpHref} className={authGoBackClassName}>
        <ArrowLeft className="h-4 w-4" aria-hidden />
        Go Back
      </Link>

      <div className="mt-6">
        <Heading as="h1" variant="auth">Reset Password</Heading>
        <p className={`mt-3 ${authSubtextClassName}`}>
          Enter new password &amp; confirm new password to reset your account password
        </p>
      </div>

      <div className="mt-8">
        <ResetPasswordForm />
      </div>
    </div>
  );
}
