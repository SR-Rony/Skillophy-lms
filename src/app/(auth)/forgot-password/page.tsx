export const metadata = { title: "Forgot password" };

export default function ForgotPasswordPage() {
  return (
    <div className="space-y-6 text-center">
      <h1 className="text-2xl font-bold">Reset password</h1>
      <p className="text-sm text-muted-foreground">
        Password reset flow — connect to auth service when backend is ready.
      </p>
    </div>
  );
}
