export type NavIconName =
  | "analytics"
  | "book"
  | "card"
  | "dashboard"
  | "graduation"
  | "messages"
  | "settings"
  | "users"
  | "video";

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
