import Link from "next/link";
import { LoginForm } from "@/components/forms/login-form";
import { ROUTES } from "@/constants";

export const metadata = { title: "Sign in" };

export default function LoginPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold">Welcome back</h1>
        <p className="text-sm text-muted-foreground">Sign in to your account</p>
      </div>
      <LoginForm />
      <p className="text-center text-sm text-muted-foreground">
        Don&apos;t have an account?{" "}
        <Link href={ROUTES.auth.register} className="text-primary hover:underline">
          Register
        </Link>
      </p>
    </div>
  );
}
