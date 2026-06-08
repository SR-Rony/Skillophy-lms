"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  Briefcase,
  CalendarClock,
  ChevronRight,
  CircleHelp,
  Grid2X2,
  MessageCircle,
  Play,
  Settings,
  SlidersHorizontal,
  User,
  WalletCards,
  Wrench,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ROUTES } from "@/constants";
import {
  megaMenuCategories,
  type MegaMenuCategory,
} from "@/data/mock/mega-menu-courses.mock";
import { CourseCategoryItem } from "./course-category-item";
import {
  isBusinessRoute,
  isTeachersRoute,
  navItemClassNameMobile,
} from "./nav-item-classes";

const categoryIcons: Record<MegaMenuCategory["iconName"], LucideIcon> = {
  play: Play,
  briefcase: Briefcase,
  wrench: Wrench,
  zap: Zap,
  star: SlidersHorizontal,
  "book-open": BookOpen,
};

const studentMenuItems = [
  { label: "Dashboard", href: ROUTES.student.root, icon: Grid2X2 },
  { label: "My Courses", href: ROUTES.student.courses, icon: CalendarClock },
  { label: "Class Schedule", href: ROUTES.student.live, icon: CalendarClock },
  { label: "My Workshop", href: ROUTES.student.assignments, icon: SlidersHorizontal },
  { label: "Messages", href: ROUTES.student.chat, icon: MessageCircle },
  { label: "Payment History", href: ROUTES.student.payments, icon: WalletCards },
  { label: "My Certificate", href: ROUTES.student.certificates, icon: SlidersHorizontal },
];

interface MobileNavbarDrawerProps {
  onClose: () => void;
  isLoggedIn?: boolean;
}

export function MobileNavbarDrawer({
  onClose,
  isLoggedIn = false,
}: MobileNavbarDrawerProps) {
  const pathname = usePathname();
  const [activeCategory, setActiveCategory] = useState("skill");
  const [view, setView] = useState<"main" | "account">("main");

  const isBusinessActive = isBusinessRoute(pathname);
  const isTeachersActive = isTeachersRoute(pathname);

  const closeDrawer = () => {
    setView("main");
    onClose();
  };

  const user = {
    name: "Nushrat Jahan",
    email: "nushrat5789@gmail.com",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop",
  };

  return (
    <>
      <motion.button
        type="button"
        aria-label="Close mobile menu"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] bg-black/70 md:hidden"
        onClick={closeDrawer}
      />

      <motion.aside
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.24, ease: "easeOut" }}
        className="fixed inset-y-0 left-0 z-[70] flex w-[315px] max-w-[calc(100vw-64px)] flex-col bg-white shadow-[24px_0_60px_rgba(0,0,0,0.22)] md:hidden"
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={closeDrawer}
          className="absolute -right-10 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#302927] shadow-[0_8px_18px_rgba(0,0,0,0.18)]"
        >
          <X className="h-5 w-5" />
        </button>

        {view === "account" ? (
          <AccountMenuView onBack={() => setView("main")} onClose={closeDrawer} />
        ) : (
          <>
            <div className="shrink-0 bg-[#f5f5f4] px-4 py-5">
              {isLoggedIn ? (
                <button
                  type="button"
                  onClick={() => setView("account")}
                  className="flex w-full items-center gap-3 text-left"
                >
                  <Image
                    src={user.avatar}
                    alt=""
                    width={45}
                    height={45}
                    className="rounded-full object-cover"
                  />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[15px] font-black text-[#25201f]">
                      {user.name}
                    </span>
                    <span className="mt-1 block truncate text-[13px] font-medium text-[#6f6562]">
                      {user.email}
                    </span>
                  </span>
                  <ChevronRight className="h-5 w-5 shrink-0 text-[#554a47]" />
                </button>
              ) : (
                <Link
                  href={ROUTES.auth.register}
                  onClick={closeDrawer}
                  className="inline-flex min-h-[40px] items-center justify-center rounded-[10px] bg-[#252323] px-5 text-[14px] font-bold text-white shadow-[0_10px_22px_rgba(0,0,0,0.16)]"
                >
                  Get Started
                </Link>
              )}
            </div>

            <div className="shrink-0 space-y-5 border-b border-[#e9e4e1] px-4 py-4">
              <button
                type="button"
                className="flex items-center gap-2 text-[15px] font-medium text-[#25201f]"
              >
                <span className="text-[20px]">🇺🇸</span>
                EN
              </button>

              {isLoggedIn ? (
                <div className="space-y-5">
                  <Link
                    href={ROUTES.student.courses}
                    onClick={closeDrawer}
                    className="block text-[15px] font-medium text-[#25201f]"
                  >
                    My Courses
                  </Link>
                  <Link
                    href={ROUTES.student.chat}
                    onClick={closeDrawer}
                    className="block text-[15px] font-medium text-[#25201f]"
                  >
                    Notifications
                  </Link>
                </div>
              ) : (
                <div className="space-y-5">
                  <Link
                    href={ROUTES.business}
                    onClick={closeDrawer}
                    className={navItemClassNameMobile(isBusinessActive, "block text-[15px]")}
                  >
                    Business
                  </Link>
                  <Link
                    href={ROUTES.teachers}
                    onClick={closeDrawer}
                    className={navItemClassNameMobile(isTeachersActive, "block text-[15px]")}
                  >
                    Join as Teacher
                  </Link>
                </div>
              )}
            </div>

            <div className="min-h-0 flex-1 overflow-hidden px-4 py-4">
              <h2 className="mb-4 text-[21px] font-black tracking-[-0.03em] text-[#25201f]">
                Course Categories
              </h2>
              <div className="h-full space-y-4 overflow-y-auto pr-3 [scrollbar-color:#2e2b2a_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#2e2b2a] [&::-webkit-scrollbar-track]:bg-transparent">
                {megaMenuCategories.map((category) => {
                  const Icon = categoryIcons[category.iconName] ?? BookOpen;
                  return (
                    <CourseCategoryItem
                      key={category.id}
                      id={category.id}
                      label={category.label}
                      courseCount={category.courseCount}
                      icon={Icon}
                      isActive={activeCategory === category.id}
                      onClick={setActiveCategory}
                      size="large"
                    />
                  );
                })}
              </div>
            </div>
          </>
        )}
      </motion.aside>
    </>
  );
}

function AccountMenuView({
  onBack,
  onClose,
}: {
  onBack: () => void;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const isBusinessActive = isBusinessRoute(pathname);
  const isTeachersActive = isTeachersRoute(pathname);

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="flex h-[73px] shrink-0 items-center gap-3 bg-[#f5f5f4] px-4">
        <button
          type="button"
          aria-label="Back to menu"
          onClick={onBack}
          className="text-[#554a47]"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <span className="text-[15px] font-black text-[#25201f]">Menu</span>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto py-3">
        <nav className="space-y-1 px-4">
          {studentMenuItems.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              onClick={onClose}
              className="flex min-h-[52px] items-center gap-3 text-[15px] font-medium text-[#25201f]"
            >
              <Icon className="h-5 w-5 stroke-[1.7] text-[#554a47]" />
              {label}
            </Link>
          ))}
        </nav>

        <div className="my-3 border-t border-[#e9e4e1]" />

        <nav className="space-y-1 px-4">
          <Link
            href={ROUTES.student.settings}
            onClick={onClose}
            className="flex min-h-[52px] items-center gap-3 text-[15px] font-medium text-[#25201f]"
          >
            <Settings className="h-5 w-5 stroke-[1.7] text-[#554a47]" />
            Account Settings
          </Link>
          <Link
            href={ROUTES.admin.support}
            onClick={onClose}
            className="flex min-h-[52px] items-center gap-3 text-[15px] font-medium text-[#25201f]"
          >
            <CircleHelp className="h-5 w-5 stroke-[1.7] text-[#554a47]" />
            Help Center
          </Link>
        </nav>

        <div className="my-3 border-t border-[#e9e4e1]" />

        <nav className="space-y-1 px-4">
          <Link
            href={ROUTES.business}
            onClick={onClose}
            className={navItemClassNameMobile(
              isBusinessActive,
              "flex min-h-[52px] items-center justify-between text-[15px]"
            )}
          >
            <span className="flex items-center gap-3">
              <Briefcase className="h-5 w-5 stroke-[1.7] text-[#554a47]" />
              Skillophy Business
            </span>
            <ArrowUpRight className="h-4 w-4 text-[#554a47]" />
          </Link>
          <Link
            href={ROUTES.teachers}
            onClick={onClose}
            className={navItemClassNameMobile(
              isTeachersActive,
              "flex min-h-[52px] items-center justify-between text-[15px]"
            )}
          >
            <span className="flex items-center gap-3">
              <User className="h-5 w-5 stroke-[1.7] text-[#554a47]" />
              Join as Teacher
            </span>
            <ArrowUpRight className="h-4 w-4 text-[#554a47]" />
          </Link>
        </nav>
      </div>
    </div>
  );
}
