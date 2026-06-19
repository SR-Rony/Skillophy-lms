"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormField } from "./form-field";
import { PasswordInput } from "./password-input";
import {
  authCardClassName,
  authFieldClassName,
  authGoBackClassName,
  authLabelClassName,
  authSubtextClassName,
} from "@/components/auth/auth-form-styles";
import { Heading } from "@/components/shared/heading";
import { AuthSocialLoginSection } from "@/components/auth/auth-social-login-section";
import { loginSchema, type LoginFormValues } from "@/validations";
import { authService } from "@/services";
import { useAuthStore } from "@/store";
import { roleHomeRoutes } from "@/permissions";
import { ROUTES } from "@/constants";

export function LoginForm() {
  const router = useRouter();
  const setUser = useAuthStore((s) => s.setUser);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { mobileNumber: "", password: "" },
  });

  const onSubmit = async (data: LoginFormValues) => {
    const user = await authService.login(data);
    setUser(user);
    router.push(roleHomeRoutes[user.role]);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="[&_label]:font-semibold [&_label]:text-[#24201f]">
        <FormField label="Mobile Number" htmlFor="mobileNumber" error={errors.mobileNumber?.message}>
          <Input
            id="mobileNumber"
            type="tel"
            placeholder="Enter your mobile number"
            className={authFieldClassName}
            {...register("mobileNumber")}
          />
        </FormField>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between gap-3">
          <Label htmlFor="password" className={authLabelClassName}>
            Password
          </Label>
          <Link
            href={ROUTES.auth.forgotPassword}
            className="text-[13px] font-semibold text-primary transition hover:text-primary/90"
          >
            Forgot Password?
          </Link>
        </div>
        <PasswordInput
          id="password"
          placeholder="Enter your password"
          className={authFieldClassName}
          {...register("password")}
        />
        {errors.password?.message ? (
          <p className="text-sm text-destructive">{errors.password.message}</p>
        ) : null}
      </div>

      <Button
        type="submit"
        variant="publicCta"
        size="publicCta"
        disabled={isSubmitting}
        className="w-full rounded-lg"
      >
        {isSubmitting ? "Signing in..." : "Sign in"}
      </Button>
    </form>
  );
}

export function LoginPageContent() {
  return (
    <div className={authCardClassName}>
      <Link href={ROUTES.home} className={authGoBackClassName}>
        <ArrowLeft className="h-4 w-4" aria-hidden />
        Go Back
      </Link>

      <div className="mt-6">
        <Heading as="h1" variant="auth">Welcome back</Heading>
        <p className={`mt-3 ${authSubtextClassName}`}>
          Sign in to your Skillophy account to continue learning.
        </p>
      </div>

      <div className="mt-8">
        <LoginForm />
        <AuthSocialLoginSection className="mt-6" />
      </div>

      <p className="mt-6 text-center text-[14px] text-[#6f6562]">
        Don&apos;t have an account?{" "}
        <Link href={ROUTES.auth.register} className="font-semibold text-primary hover:text-primary/90">
          Register
        </Link>
      </p>
    </div>
  );
}
