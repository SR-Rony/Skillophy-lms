export type NavIconName =
  | "account"
  | "analytics"
  | "book"
  | "calendar"
  | "card"
  | "categories"
  | "clapperboard"
  | "dashboard"
  | "graduation"
  | "grid"
  | "messages"
  | "promo"
  | "quiz"
  | "resources"
  | "settings"
  | "support"
  | "transaction"
  | "userCog"
  | "users"
  | "video"
  | "wallet"
  | "workshop";

export interface NavItem {
  title: string;
  href?: string;
  iconName?: NavIconName;
  badge?: string | number;
  disabled?: boolean;
  external?: boolean;
  children?: NavItem[];
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}
