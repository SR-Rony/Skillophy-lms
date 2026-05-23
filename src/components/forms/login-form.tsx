"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormField } from "./form-field";
import { loginSchema, type LoginFormValues } from "@/validations";
import { authService } from "@/services";
import { useAuthStore } from "@/store";
import { roleHomeRoutes } from "@/permissions";

export function LoginForm() {
  const router = useRouter();
  const setUser = useAuthStore((s) => s.setUser);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (data: LoginFormValues) => {
    const user = await authService.login(data);
    setUser(user);
    router.push(roleHomeRoutes[user.role]);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <FormField label="Email" htmlFor="email" error={errors.email?.message}>
        <Input id="email" type="email" placeholder="you@example.com" {...register("email")} />
      </FormField>
      <FormField label="Password" htmlFor="password" error={errors.password?.message}>
        <Input id="password" type="password" {...register("password")} />
      </FormField>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Signing in..." : "Sign in"}
      </Button>
    </form>
  );
}
