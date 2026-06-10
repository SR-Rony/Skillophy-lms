"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authService } from "@/services";
import { useAuthStore } from "@/store";
import { roleHomeRoutes } from "@/permissions";
import { cn } from "@/utils";
import { FacebookIcon, GoogleIcon } from "@/components/auth/auth-social-icons";

type SocialProvider = "google" | "facebook";

const providers: Array<{
  id: SocialProvider;
  label: string;
  icon: typeof GoogleIcon;
}> = [
  { id: "google", label: "Continue with Google", icon: GoogleIcon },
  { id: "facebook", label: "Continue with Facebook", icon: FacebookIcon },
];

export function AuthSocialLoginSection({ className }: { className?: string }) {
  const router = useRouter();
  const setUser = useAuthStore((state) => state.setUser);
  const [loadingProvider, setLoadingProvider] = useState<SocialProvider | null>(null);

  const handleSocialLogin = async (provider: SocialProvider) => {
    setLoadingProvider(provider);

    try {
      const user = await authService.socialLogin(provider);
      setUser(user);
      router.push(roleHomeRoutes[user.role]);
    } finally {
      setLoadingProvider(null);
    }
  };

  return (
    <div className={cn("space-y-5", className)}>
      <div className="flex items-center gap-3">
        <span className="h-px flex-1 bg-[#efb0aa]/70" aria-hidden />
        <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#8f3f35]">
          Or Continue With
        </span>
        <span className="h-px flex-1 bg-[#efb0aa]/70" aria-hidden />
      </div>

      <div className="flex items-center justify-center gap-4">
        {providers.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            type="button"
            aria-label={label}
            disabled={loadingProvider !== null}
            onClick={() => handleSocialLogin(id)}
            className={cn(
              "flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-[#ece6e3] bg-white shadow-[0_4px_14px_rgba(80,37,31,0.08)] transition hover:border-primary/30 hover:shadow-[0_6px_18px_rgba(80,37,31,0.12)] disabled:cursor-not-allowed disabled:opacity-60",
              loadingProvider === id && "border-primary/40",
            )}
          >
            <Icon className="h-6 w-6" />
          </button>
        ))}
      </div>
    </div>
  );
}
