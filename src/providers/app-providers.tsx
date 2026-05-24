"use client";

import type { ReactNode } from "react";
import { QueryProvider } from "./query-provider";

/**
 * Root provider composition — add auth/session providers here when backend connects.
 */
export function AppProviders({ children }: { children: ReactNode }) {
  return <QueryProvider>{children}</QueryProvider>;
}
