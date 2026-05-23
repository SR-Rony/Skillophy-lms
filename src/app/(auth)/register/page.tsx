import Link from "next/link";
import { ROUTES } from "@/constants";

export const metadata = { title: "Register" };

export default function RegisterPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold">Create an account</h1>
        <p className="text-sm text-muted-foreground">Start your learning journey</p>
      </div>
      <p className="text-center text-sm text-muted-foreground">
        Register form — extend from auth feature module.
      </p>
      <p className="text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link href={ROUTES.auth.login} className="text-primary hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}
