import { create } from "zustand";
import { persist } from "zustand/middleware";
import { clearAccessTokenCookie, setAccessTokenCookie } from "@/lib/auth-session";
import type { User } from "@/types";

interface AuthState {
  user: User | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  setSession: (user: User, accessToken: string) => void;
  setUser: (user: User | null) => void;
  logout: () => void;
}

/**
 * Client auth state — session UI, role-based nav, optimistic updates.
 * Server components read the JWT from the `skillophy-access-token` cookie.
 */
export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      isAuthenticated: false,
      setSession: (user, accessToken) => {
        setAccessTokenCookie(accessToken);
        set({ user, accessToken, isAuthenticated: true });
      },
      setUser: (user) => set({ user, isAuthenticated: !!user }),
      logout: () => {
        clearAccessTokenCookie();
        set({ user: null, accessToken: null, isAuthenticated: false });
      },
    }),
    { name: "skillophy-auth" }
  )
);
