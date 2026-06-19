"use client";

import { Heading } from "@/components/shared/heading";

import Link from "next/link";
import { useState } from "react";
import {
  BookOpen,
  CalendarDays,
  CircleHelp,
  Clock,
  Clapperboard,
  Phone,
  Tag,
  Users,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants";
import type {
  CourseDetailsSidebar,
  CourseDetailsSidebarInclude,
  CourseDetailsSidebarPromo,
  CourseDetailsSidebarStat,
  CourseDetailsWorkshopSidebar,
} from "@/components/public/course-details/types";
import { WorkshopBookingConfirmedModal } from "@/components/public/course-details/workshop-booking-confirmed-modal";
import { cn } from "@/utils";

const CARD_CLASS =
  "rounded-[24px] border border-[#f0d5cf] bg-[#fce8e3] p-6 shadow-[0_4px_12px_rgba(80,37,31,0.06),0_16px_36px_rgba(80,37,31,0.10)] sm:p-8";

const includeThemes = {
  learners: {
    icon: Users,
    iconBg: "bg-[#e8f0ff]",
    iconColor: "text-[#4f8cff]",
  },
  video: {
    icon: Clapperboard,
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  duration: {
    icon: Clock,
    iconBg: "bg-[#fff0e3]",
    iconColor: "text-[#f97316]",
  },
  files: {
    icon: BookOpen,
    iconBg: "bg-[#e8f8ef]",
    iconColor: "text-[#22c55e]",
  },
} as const;

const statThemes = {
  testTime: {
    icon: Clock,
    iconBg: "bg-[#fff0e3]",
    iconColor: "text-[#f97316]",
  },
  questions: {
    icon: CircleHelp,
    iconBg: "bg-[#e8f8ef]",
    iconColor: "text-[#22c55e]",
  },
  date: {
    icon: CalendarDays,
    iconBg: "bg-[#e8f0ff]",
    iconColor: "text-[#4f8cff]",
  },
  time: {
    icon: Clock,
    iconBg: "bg-[#fff0e3]",
    iconColor: "text-[#f97316]",
  },
} as const;

type StatThemeKey = keyof typeof statThemes;

function SidebarIncludeItem({ item }: { item: CourseDetailsSidebarInclude }) {
  const theme = includeThemes[item.icon];
  const Icon = theme.icon;

  return (
    <div className="flex items-center gap-3.5">
      <span
        className={cn(
          "flex h-12 w-12 shrink-0 items-center justify-center rounded-full",
          theme.iconBg
        )}
      >
        <Icon className={cn("h-5 w-5", theme.iconColor)} aria-hidden />
      </span>
      <div className="min-w-0">
        <p className="text-[18px] font-black leading-none tracking-[-0.02em] text-[#1a1a1a] sm:text-[20px]">
          {item.value}
        </p>
        <p className="mt-1.5 text-[13px] font-medium text-[#6f6562]">{item.label}</p>
      </div>
    </div>
  );
}

function SidebarStatItem({
  stat,
  themeKey,
}: {
  stat: CourseDetailsSidebarStat;
  themeKey: StatThemeKey;
}) {
  const theme = statThemes[themeKey];
  const Icon = theme.icon;

  return (
    <div className="flex items-center gap-3.5">
      <span
        className={cn(
          "flex h-12 w-12 shrink-0 items-center justify-center rounded-full",
          theme.iconBg
        )}
      >
        <Icon className={cn("h-5 w-5", theme.iconColor)} aria-hidden />
      </span>
      <div className="min-w-0">
        <p className="text-[18px] font-black leading-none tracking-[-0.02em] text-[#1a1a1a] sm:text-[20px]">
          {stat.value}
        </p>
        <p className="mt-1.5 text-[13px] font-medium text-[#6f6562]">{stat.label}</p>
      </div>
    </div>
  );
}

function SidebarContactFooter({
  contact,
}: {
  contact: NonNullable<CourseDetailsSidebar["contact"]>;
}) {
  return (
    <div className="mt-5 flex items-start gap-3 px-1">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e8f8ef]">
        <Phone className="h-4 w-4 text-[#22c55e]" aria-hidden />
      </span>
      <p className="pt-1.5 text-[13px] leading-[1.55] text-[#6f6562]">
        For any requirement about the course call{" "}
        <span className="font-bold text-[#3c3332]">{contact.phone}</span> ({contact.hours})
      </p>
    </div>
  );
}

function usePromoPricing(sidebar: {
  price: number;
  originalPrice?: number;
  appliedPromo?: CourseDetailsSidebarPromo;
}) {
  const listPrice = sidebar.originalPrice ?? sidebar.price;
  const [appliedPromo, setAppliedPromo] = useState(sidebar.appliedPromo ?? null);
  const hasPromo = appliedPromo != null && sidebar.originalPrice != null;
  const displayPrice = hasPromo ? sidebar.price : listPrice;

  return {
    appliedPromo,
    hasPromo,
    displayPrice,
    removePromo: () => setAppliedPromo(null),
  };
}

function SidebarPricingBlock({
  price,
  originalPrice,
  appliedPromo: initialPromo,
}: {
  price: number;
  originalPrice?: number;
  appliedPromo?: CourseDetailsSidebarPromo;
}) {
  const { appliedPromo, hasPromo, displayPrice, removePromo } = usePromoPricing({
    price,
    originalPrice,
    appliedPromo: initialPromo,
  });

  return (
    <>
      <div className="flex flex-wrap items-end gap-x-3 gap-y-1">
        <p className="text-[36px] font-black leading-none tracking-[-0.03em] text-primary sm:text-[40px]">
          ৳{displayPrice}
        </p>
        {hasPromo && originalPrice != null && (
          <p className="pb-1.5 text-[18px] font-medium text-[#9a908c] line-through sm:text-[20px]">
            ৳{originalPrice}
          </p>
        )}
      </div>

      {hasPromo && appliedPromo && (
        <div className="mt-4 flex items-center justify-between gap-3 rounded-[12px] bg-white px-4 py-3 shadow-[0_2px_8px_rgba(80,37,31,0.06)]">
          <div className="flex min-w-0 items-center gap-2.5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e8f8ef]">
              <Tag className="h-4 w-4 text-[#22c55e]" aria-hidden />
            </span>
            <p className="truncate text-[13px] text-[#4a4a4a] sm:text-[14px]">
              <span className="font-bold text-[#1a1a1a]">{appliedPromo.code}</span> promo is applied
            </p>
          </div>
          <button
            type="button"
            onClick={removePromo}
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[#9a908c] transition hover:bg-[#faf9f8] hover:text-[#1a1a1a]"
            aria-label={`Remove promo code ${appliedPromo.code}`}
          >
            <X className="h-4 w-4" aria-hidden />
          </button>
        </div>
      )}

      <div className="mt-5 space-y-3">
        <Button variant="publicCta" size="publicCta" className="w-full rounded-[14px]">
          Enroll Now
        </Button>
        <Button
          asChild
          variant="outline"
          className="h-[52px] w-full rounded-[14px] border border-[#1a1a1a] bg-white text-[13px] font-black text-[#1a1a1a] shadow-none hover:bg-[#faf9f8]"
        >
              <Link href={ROUTES.cart}>Add to Cart</Link>
        </Button>
      </div>
    </>
  );
}

interface CourseDetailsSidebarCardProps {
  sidebar: CourseDetailsSidebar;
}

function WorkshopSidebarCard({ sidebar }: { sidebar: CourseDetailsWorkshopSidebar }) {
  const [isConfirmedOpen, setIsConfirmedOpen] = useState(false);

  const scheduleLabel =
    sidebar.scheduleLabel ?? `${sidebar.date.value} at ${sidebar.time.value}`;

  return (
    <>
      <aside id="enroll" className="mt-10 lg:sticky lg:top-24 lg:mt-0 lg:self-start">
        <div className={CARD_CLASS}>
          <Heading as="h3" variant="course-detail-sidebar">
            Free Workshop
          </Heading>

          <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-6">
            <SidebarStatItem stat={sidebar.date} themeKey="date" />
            <SidebarStatItem stat={sidebar.time} themeKey="time" />
          </div>

          <div className="mt-7">
            <Button
              type="button"
              variant="publicCta"
              size="publicCta"
              className="w-full rounded-[14px]"
              onClick={() => setIsConfirmedOpen(true)}
            >
              Book Now
            </Button>
          </div>
        </div>

        {sidebar.contact && <SidebarContactFooter contact={sidebar.contact} />}
      </aside>

      <WorkshopBookingConfirmedModal
        open={isConfirmedOpen}
        onOpenChange={setIsConfirmedOpen}
        scheduleLabel={scheduleLabel}
        goToWorkshopHref={sidebar.goToWorkshopHref}
      />
    </>
  );
}

export function CourseDetailsSidebarCard({ sidebar }: CourseDetailsSidebarCardProps) {
  if (sidebar.variant === "model-test") {
    return (
      <aside id="enroll" className="mt-10 lg:sticky lg:top-24 lg:mt-0 lg:self-start">
        <div className={CARD_CLASS}>
          <Heading as="h3" variant="course-detail-sidebar">
            This Model Test Include
          </Heading>

          <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-6">
            <SidebarStatItem stat={sidebar.testTime} themeKey="testTime" />
            <SidebarStatItem stat={sidebar.questions} themeKey="questions" />
          </div>

          <div className="mt-7 border-t border-[#e8cfc8] pt-7">
            <SidebarPricingBlock
              price={sidebar.price}
              originalPrice={sidebar.originalPrice}
              appliedPromo={sidebar.appliedPromo}
            />
          </div>
        </div>

        {sidebar.contact && <SidebarContactFooter contact={sidebar.contact} />}
      </aside>
    );
  }

  if (sidebar.variant === "workshop") {
    return <WorkshopSidebarCard sidebar={sidebar} />;
  }

  return (
    <aside id="enroll" className="mt-10 lg:sticky lg:top-24 lg:mt-0 lg:self-start">
      <div className={CARD_CLASS}>
        <Heading as="h3" variant="course-detail-sidebar">
          This Course Include
        </Heading>

        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-6 sm:gap-y-7">
          {sidebar.includes.map((item) => (
            <SidebarIncludeItem key={`${item.icon}-${item.label}`} item={item} />
          ))}
        </div>

        <div className="mt-7 border-t border-[#e8cfc8] pt-7">
          <SidebarPricingBlock
            price={sidebar.price}
            originalPrice={sidebar.originalPrice}
            appliedPromo={sidebar.appliedPromo}
          />
        </div>
      </div>

      {sidebar.contact && <SidebarContactFooter contact={sidebar.contact} />}
    </aside>
  );
}
