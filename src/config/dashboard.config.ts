/**
 * Dashboard shell configuration: breakpoints, sidebar widths, header height.
 * Used by layout components for consistent responsive behavior.
 */
export const dashboardConfig = {
  sidebar: {
    width: "16rem",
    collapsedWidth: "4rem",
    mobileBreakpoint: "lg",
  },
  header: {
    height: "4rem",
  },
  content: {
    maxWidth: "1400px",
    padding: "1.5rem",
  },
} as const;
