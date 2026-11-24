const ACCESS_TOKEN_COOKIE = "skillophy-access-token";
const TOKEN_MAX_AGE_SECONDS = 60 * 60 * 24 * 7;

export function setAccessTokenCookie(token: string) {
  if (typeof document === "undefined") {
    return;
  }

  document.cookie = `${ACCESS_TOKEN_COOKIE}=${encodeURIComponent(token)}; path=/; max-age=${TOKEN_MAX_AGE_SECONDS}; SameSite=Lax`;
}

export function clearAccessTokenCookie() {
  if (typeof document === "undefined") {
    return;
  }

  document.cookie = `${ACCESS_TOKEN_COOKIE}=; path=/; max-age=0; SameSite=Lax`;
}

export function getClientAccessToken(): string | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const raw = localStorage.getItem("skillophy-auth");
    if (!raw) {
      return null;
    }

    const parsed = JSON.parse(raw) as {
      state?: { accessToken?: string | null };
    };

    return parsed.state?.accessToken ?? null;
  } catch {
    return null;
  }
}

export async function getServerAccessToken(): Promise<string | null> {
  if (typeof window !== "undefined") {
    return getClientAccessToken();
  }

  try {
    const { cookies } = await import("next/headers");
    const cookieStore = await cookies();
    const value = cookieStore.get(ACCESS_TOKEN_COOKIE)?.value;
    return value ? decodeURIComponent(value) : null;
  } catch {
    return null;
  }
}
