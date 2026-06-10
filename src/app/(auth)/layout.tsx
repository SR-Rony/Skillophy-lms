import { AuthSeamBackground } from "@/components/auth/auth-seam-background";

/** Centered auth layout — login, register, OTP verification, password reset */
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      <AuthSeamBackground />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-10 sm:px-6">
        {children}
      </div>
    </div>
  );
}
