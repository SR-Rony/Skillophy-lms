import type { CartPageData } from "@/components/public/cart/types";

export const cartPageMockData: CartPageData = {
  items: [
    {
      id: "cart-1",
      title: "Web Design & Development with PHP & Laravel",
      slug: "web-design-development-php-laravel",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&auto=format&fit=crop",
      price: 3000,
      originalPrice: 3600,
      badge: "live",
      promoApplied: true,
    },
    {
      id: "cart-2",
      title: "Quran Learning",
      slug: "quran-learning",
      image:
        "https://images.unsplash.com/photo-1609599006353-e629aaabfe9a?w=900&auto=format&fit=crop",
      price: "free",
    },
    {
      id: "cart-3",
      title: "Negotiation Skills",
      slug: "negotiation-skills",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&auto=format&fit=crop",
      price: 600,
    },
    {
      id: "cart-4",
      title: "Foundations of User Experience (UX) Design",
      slug: "foundations-user-experience-ux-design",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900&auto=format&fit=crop",
      price: "free",
    },
    {
      id: "cart-5",
      title: "English for Every Day",
      slug: "english-for-every-day",
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=900&auto=format&fit=crop",
      price: "free",
    },
  ],
  appliedPromo: {
    code: "WEBDESIGN453",
    discount: 600,
  },
};
