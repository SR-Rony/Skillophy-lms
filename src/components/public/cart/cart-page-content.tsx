"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/shared";
import { CartItemCard } from "@/components/public/cart/cart-item-card";
import { CartPageHero } from "@/components/public/cart/cart-page-hero";
import { CartPaymentDetails } from "@/components/public/cart/cart-payment-details";
import { cartPageMockData } from "@/components/public/cart/data/cart.mock";
import type { CartAppliedPromo, CartItem, CartPageData } from "@/components/public/cart/types";

const VALID_PROMO_CODES: Record<string, number> = {
  WEBDESIGN453: 600,
};

function getItemListPrice(item: CartItem) {
  if (item.price === "free") return 0;
  return item.originalPrice ?? item.price;
}

function calculateSubtotal(items: CartItem[]) {
  return items.reduce((sum, item) => sum + getItemListPrice(item), 0);
}

interface CartPageContentProps {
  initialData?: CartPageData;
}

export function CartPageContent({ initialData = cartPageMockData }: CartPageContentProps) {
  const [items, setItems] = useState(initialData.items);
  const [appliedPromo, setAppliedPromo] = useState<CartAppliedPromo | null>(
    initialData.appliedPromo ?? null
  );

  const subtotal = useMemo(() => calculateSubtotal(items), [items]);
  const total = Math.max(0, subtotal - (appliedPromo?.discount ?? 0));

  const handleRemoveItem = (id: string) => {
    setItems((current) => current.filter((item) => item.id !== id));
  };

  const handleApplyPromo = (code: string) => {
    const normalizedCode = code.toUpperCase();
    const discount = VALID_PROMO_CODES[normalizedCode];

    if (!discount) {
      return false;
    }

    setAppliedPromo({ code: normalizedCode, discount });
    return true;
  };

  const handleRemovePromo = () => {
    setAppliedPromo(null);
  };

  return (
    <>
      <CartPageHero itemCount={items.length} />

      <section className="bg-white py-10 sm:py-12 lg:py-14">
        <Container>
          {items.length === 0 ? (
            <div className="rounded-[20px] border border-[#ece6e3] bg-white px-6 py-16 text-center shadow-[0_8px_24px_rgba(80,37,31,0.06)]">
              <p className="text-[18px] font-bold text-[#1a1a1a]">Your cart is empty</p>
              <p className="mt-2 text-[14px] text-[#6f6562]">
                Browse courses and add them to your cart to continue.
              </p>
            </div>
          ) : (
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start lg:gap-10">
              <div className="space-y-4 sm:space-y-5">
                {items.map((item) => (
                  <CartItemCard key={item.id} item={item} onRemove={handleRemoveItem} />
                ))}
              </div>

              <CartPaymentDetails
                subtotal={subtotal}
                total={total}
                appliedPromo={appliedPromo}
                onApplyPromo={handleApplyPromo}
                onRemovePromo={handleRemovePromo}
              />
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
