import { Suspense } from "react";
import { OtpVerificationPageContent } from "@/components/auth/otp-verification-page-content";

export const metadata = {
  title: "OTP Verification",
  description: "Verify your mobile number with the one-time password sent to you.",
};

function OtpVerificationFallback() {
  return (
    <div className="w-full max-w-[560px] rounded-[28px] border border-[#f3e8e4] bg-[#fff9f8] p-6 shadow-[0_24px_60px_rgba(80,37,31,0.12)] sm:p-8">
      <div className="h-[320px] animate-pulse rounded-2xl bg-[#f3e8e4]/60" />
    </div>
  );
}

export default function VerifyOtpPage() {
  return (
    <Suspense fallback={<OtpVerificationFallback />}>
      <OtpVerificationPageContent />
    </Suspense>
  );
}
