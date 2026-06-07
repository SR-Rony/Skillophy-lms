import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import type { CartItem } from "@/components/public/cart/types";
import { ROUTES } from "@/constants";
import { cn } from "@/utils";

interface CartItemCardProps {
  item: CartItem;
  onRemove?: (id: string) => void;
}

function formatTaka(amount: number) {
  return `৳${amount}`;
}

export function CartItemCard({ item, onRemove }: CartItemCardProps) {
  return (
    <article className="flex overflow-hidden rounded-[16px] border border-[#ece6e3] bg-white shadow-[0_8px_24px_rgba(80,37,31,0.06)]">
      <Link
        href={`${ROUTES.courses}/${item.slug}`}
        className="relative block h-[112px] w-[148px] shrink-0 sm:h-[128px] sm:w-[168px]"
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          sizes="168px"
        />
        {item.badge === "live" && (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-[6px] bg-primary px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden />
            Live
          </span>
        )}
      </Link>

      <div className="flex min-w-0 flex-1 items-center justify-between gap-3 px-4 py-4 sm:px-5 sm:py-5">
        <div className="min-w-0 flex-1">
          <Link
            href={`${ROUTES.courses}/${item.slug}`}
            className="line-clamp-2 text-[15px] font-bold leading-snug text-[#1a1a1a] transition hover:text-primary sm:text-[16px]"
          >
            {item.title}
          </Link>

          <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1">
            {item.price === "free" ? (
              <span className="text-[15px] font-bold text-[#22c55e] sm:text-[16px]">Free</span>
            ) : (
              <>
                <span className="text-[15px] font-black text-primary sm:text-[16px]">
                  {formatTaka(item.price)}
                </span>
                {item.originalPrice != null && (
                  <span className="text-[13px] font-medium text-[#9a908c] line-through sm:text-[14px]">
                    {formatTaka(item.originalPrice)}
                  </span>
                )}
              </>
            )}
          </div>
        </div>

        <div className="flex shrink-0 flex-col items-end gap-3">
          {item.promoApplied && (
            <span className="text-[12px] font-semibold text-[#22c55e] sm:text-[13px]">
              Promo Applied
            </span>
          )}
          <button
            type="button"
            onClick={() => onRemove?.(item.id)}
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-full text-[#9a908c] transition",
              "hover:bg-[#faf9f8] hover:text-[#1a1a1a]"
            )}
            aria-label={`Remove ${item.title} from cart`}
          >
            <ChevronLeft className="h-4 w-4" aria-hidden />
          </button>
        </div>
      </div>
    </article>
  );
}
