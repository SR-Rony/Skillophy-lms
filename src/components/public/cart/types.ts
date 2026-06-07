export type CartItemBadge = "live";

export interface CartItem {
  id: string;
  title: string;
  slug: string;
  image: string;
  price: number | "free";
  originalPrice?: number;
  badge?: CartItemBadge;
  promoApplied?: boolean;
}

export interface CartAppliedPromo {
  code: string;
  discount: number;
}

export interface CartPageData {
  items: CartItem[];
  appliedPromo?: CartAppliedPromo;
}
