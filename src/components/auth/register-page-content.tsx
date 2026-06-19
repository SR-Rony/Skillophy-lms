"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormField } from "@/components/forms/form-field";
import { PasswordInput } from "@/components/forms/password-input";
import { AuthSocialLoginSection } from "@/components/auth/auth-social-login-section";
import { ROUTES } from "@/constants";
import { registerPageSchema, type RegisterPageFormValues } from "@/validations/auth.schema";
import { cn } from "@/utils";
import { Heading } from "@/components/shared/heading";

const authFieldClassName =
  "h-[52px] rounded-lg border-[#ece6e3] bg-white px-4 text-[14px] font-medium text-[#24201f] shadow-none placeholder:text-[#b8b0ad] focus-visible:ring-primary/20";

function AuthFormField({
  label,
  htmlFor,
  error,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <FormField
      label={label}
      htmlFor={htmlFor}
      error={error}
      className={className}
    >
      <div className="[&_label]:font-semibold [&_label]:text-[#24201f]">{children}</div>
    </FormField>
  );
}

export function RegisterForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterPageFormValues>({
    resolver: zodResolver(registerPageSchema),
    defaultValues: {
      fullName: "",
      mobileNumber: "",
      gender: "male",
      age: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: RegisterPageFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    router.push(
      `${ROUTES.auth.verifyOtp}?mobile=${encodeURIComponent(data.mobileNumber)}`,
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <AuthFormField label="Full Name" htmlFor="fullName" error={errors.fullName?.message}>
        <Input
          id="fullName"
          placeholder="Enter your full name"
          className={authFieldClassName}
          {...register("fullName")}
        />
      </AuthFormField>

      <AuthFormField
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
      </AuthFormField>

      <div className="grid gap-5 sm:grid-cols-2">
        <AuthFormField label="Gender" htmlFor="gender" error={errors.gender?.message}>
          <div className="relative">
            <select
              id="gender"
              className={cn(authFieldClassName, "appearance-none pr-10")}
              {...register("gender")}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6f6562]"
              aria-hidden
            />
          </div>
        </AuthFormField>

        <AuthFormField label="Age" htmlFor="age" error={errors.age?.message}>
          <Input
            id="age"
            inputMode="numeric"
            placeholder="ex.30"
            className={authFieldClassName}
            {...register("age")}
          />
        </AuthFormField>
      </div>

      <AuthFormField label="Password" htmlFor="password" error={errors.password?.message}>
        <PasswordInput
          id="password"
          placeholder="Enter your password"
          className={authFieldClassName}
          {...register("password")}
        />
      </AuthFormField>

      <AuthFormField
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
      </AuthFormField>

      <p className="text-[13px] leading-[1.6] text-[#6f6562] sm:text-[14px]">
        By signing up you agree to our{" "}
        <Link href="/support" className="font-bold text-[#24201f] underline decoration-[#24201f]/30 underline-offset-4 hover:text-primary">
          Terms &amp; Conditions
        </Link>
      </p>

      <Button
        type="submit"
        variant="publicCta"
        size="publicCta"
        disabled={isSubmitting}
        className="w-full rounded-lg"
      >
        {isSubmitting ? "Creating account..." : "Sign Up"}
      </Button>
    </form>
  );
}

export function RegisterPageContent() {
  return (
    <div className="w-full max-w-[560px] rounded-[28px] border border-[#f3e8e4] bg-[#fff9f8] p-6 shadow-[0_24px_60px_rgba(80,37,31,0.12)] sm:p-8">
      <Link
        href={ROUTES.home}
        className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#6f6562] transition hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        Go Back
      </Link>

      <div className="mt-6">
        <Heading as="h1" variant="auth">Create Account in Skillophy</Heading>
        <p className="mt-3 text-[14px] leading-[1.65] text-[#6f6562] sm:text-[15px]">
          Let&apos;s begin setting up your Skillophy account. It all starts with creating one!
        </p>
      </div>

      <div className="mt-8">
        <RegisterForm />
        <AuthSocialLoginSection className="mt-6" />
      </div>

      <p className="mt-6 text-center text-[14px] text-[#6f6562]">
        Already have an account?{" "}
        <Link href={ROUTES.auth.login} className="font-semibold text-primary hover:text-primary/90">
          Sign in
        </Link>
      </p>
    </div>
  );
}
