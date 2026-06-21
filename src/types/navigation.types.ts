export type NavIconName =
  | "analytics"
  | "book"
  | "calendar"
  | "card"
  | "dashboard"
  | "graduation"
  | "messages"
  | "resources"
  | "settings"
  | "support"
  | "users"
  | "video"
  | "wallet"
  | "workshop";

export interface NavItem {
  title: string;
  href: string;
  iconName?: NavIconName;
  badge?: string | number;
  disabled?: boolean;
  external?: boolean;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}
