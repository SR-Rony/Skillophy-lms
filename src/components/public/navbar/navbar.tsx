"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Globe,
  Menu,
  Search,
  ShoppingCart,
} from "lucide-react";
import { ROUTES } from "@/constants";
import { Container, Logo } from "@/components/shared";
import { cn } from "@/utils";
import { CourseMegaMenu } from "./course-mega-menu";
import { MobileNavbarDrawer } from "./mobile-navbar-drawer";

export function Navbar() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const closeMegaMenu = useCallback(() => setIsMegaMenuOpen(false), []);

  const toggleMegaMenu = () => {
    setIsMegaMenuOpen((prev) => !prev);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMegaMenuOpen(false);
      }
    };

    if (isMegaMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isMegaMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <nav
      ref={navRef}
      className="relative border-b border-gray-200 bg-white shadow-sm"
      aria-label="Main navigation"
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Logo priority className="min-w-0" imageClassName="h-8 sm:h-9" />

          <div className="hidden flex-1 items-center gap-6 md:flex md:ml-6">
            <div className="relative">
              <button
                type="button"
                onClick={toggleMegaMenu}
                aria-expanded={isMegaMenuOpen}
                aria-controls="course-mega-menu"
                className={cn(
                  "flex items-center gap-1 font-medium transition-colors cursor-pointer hover:text-primary",
                  isMegaMenuOpen ? "text-primary" : "text-gray-700"
                )}
              >
                All Courses
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform",
                    isMegaMenuOpen && "rotate-180"
                  )}
                />
              </button>
            </div>

            <label className="hidden max-w-sm flex-1 items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 lg:flex">
              <Search size={18} className="shrink-0 text-gray-400" aria-hidden />
              <input
                type="search"
                placeholder="Search courses..."
                className="w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
                aria-label="Search courses"
              />
            </label>
          </div>

          <div className="hidden items-center gap-3 md:flex lg:gap-4">
            <button
              type="button"
              className="flex items-center gap-1 text-sm text-gray-700 transition-colors hover:text-gray-900"
              aria-label="Change language"
            >
              <Globe size={18} aria-hidden />
              <span>EN</span>
              <ChevronDown className="h-4 w-4" aria-hidden />
            </button>

            <Link
              href={ROUTES.student.wishlist}
              className="relative text-gray-700 transition-colors hover:text-gray-900"
              aria-label="Cart, 2 items"
            >
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                2
              </span>
            </Link>

            <Link
              href={ROUTES.pricing}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
            >
              Business
            </Link>

            <Link
              href={ROUTES.auth.register}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
            >
              Join as Teacher
            </Link>

            <Link
              href={ROUTES.auth.register}
              className="rounded bg-gray-900 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800"
            >
              Get Started
            </Link>
          </div>

          <button
            type="button"
            onClick={() => {
              setIsMobileMenuOpen((prev) => !prev);
              setIsMegaMenuOpen(false);
            }}
            className="text-gray-700 hover:text-gray-900 md:hidden"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <Menu size={24} />
          </button>
        </div>
      </Container>

      <CourseMegaMenu isOpen={isMegaMenuOpen} onClose={closeMegaMenu} />

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileNavbarDrawer
            onClose={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </nav>
  );
}
