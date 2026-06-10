import { Suspense } from "react";
import { ResetPasswordPageContent } from "@/components/auth/reset-password-page-content";

export const metadata = {
  title: "Reset Password",
  description: "Set a new password for your Skillophy account.",
};

function ResetPasswordFallback() {
  return (
    <div className="w-full max-w-[560px] rounded-[28px] border border-[#f3e8e4] bg-[#fff9f8] p-6 shadow-[0_24px_60px_rgba(80,37,31,0.12)] sm:p-8">
      <div className="h-[280px] animate-pulse rounded-2xl bg-[#f3e8e4]/60" />
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<ResetPasswordFallback />}>
      <ResetPasswordPageContent />
    </Suspense>
  );
}
