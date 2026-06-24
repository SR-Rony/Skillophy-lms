import { create } from "zustand";

interface UIState {
  sidebarCollapsed: boolean;
  mobileSidebarOpen: boolean;
  headerTitleOverride: string | null;
  toggleSidebar: () => void;
  setMobileSidebarOpen: (open: boolean) => void;
  setHeaderTitleOverride: (title: string | null) => void;
}

/** Ephemeral UI state — sidebar, modals, drawers (not server data) */
export const useUIStore = create<UIState>((set) => ({
  sidebarCollapsed: false,
  mobileSidebarOpen: false,
  headerTitleOverride: null,
  toggleSidebar: () => set((s) => ({ sidebarCollapsed: !s.sidebarCollapsed })),
  setMobileSidebarOpen: (open) => set({ mobileSidebarOpen: open }),
  setHeaderTitleOverride: (title) => set({ headerTitleOverride: title }),
}));
