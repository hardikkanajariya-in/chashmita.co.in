"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { headerNav, isNavGroup } from "@/data/navigation";
import { site, asset } from "@/lib/site";
import { cn } from "@/lib/cn";
import { ButtonLink } from "@/components/ui/ButtonLink";
import Image from "next/image";

export function Header() {
  const pathname = usePathname();
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimer = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const handleMouseEnter = (label: string) => {
    clearCloseTimer();
    setOpenGroup(label);
  };

  const handleMouseLeave = () => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => {
      setOpenGroup(null);
    }, 220);
  };

  // Close menus on route change
  useEffect(() => {
    clearCloseTimer();
    setOpenGroup(null);
    setMobileMenuOpen(false);
  }, [pathname, clearCloseTimer]);

  // Handle outside click & escape key
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        clearCloseTimer();
        setOpenGroup(null);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        clearCloseTimer();
        setOpenGroup(null);
        setMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      clearCloseTimer();
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [clearCloseTimer]);

  // Lock background scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const toggleGroup = (groupLabel: string) => {
    clearCloseTimer();
    setOpenGroup((current) => (current === groupLabel ? null : groupLabel));
  };

  return (
    <header className="nav-slab sticky top-0 z-[var(--z-sticky-nav)]">
      <div className="container flex items-center justify-between gap-4 py-3">
        {/* Brand Logo & Name */}
        <Link
          href="/"
          onClick={() => setMobileMenuOpen(false)}
          className="flex min-w-0 items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-focus)]"
        >
          <Image
            src={asset("logo.png")}
            alt={site.name}
            width={48}
            height={28}
            className="h-7 w-auto shrink-0"
            priority
          />
          <span className="flex min-w-0 flex-col">
            <span className="truncate font-display text-sm font-bold text-ink sm:text-base">
              {site.shortName}
            </span>
            <span className="truncate font-outlier text-[11px] text-muted sm:text-xs">
              Est. {site.established}
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          ref={navRef}
          className="hidden items-center gap-1 md:flex lg:gap-2"
          aria-label="Primary"
        >
          {headerNav.map((item) => {
            if (isNavGroup(item)) {
              const isGroupActive = item.children.some((child) =>
                pathname.startsWith(child.href),
              );
              const isOpen = openGroup === item.label;

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    onClick={() => toggleGroup(item.label)}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    data-active={isGroupActive ? "true" : "false"}
                    className={cn(
                      "nav-link inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors",
                      isGroupActive || isOpen
                        ? "text-ink font-semibold"
                        : "text-muted hover:text-ink",
                    )}
                  >
                    <span>{item.label}</span>
                    <svg
                      className={cn(
                        "h-3.5 w-3.5 transition-transform duration-200",
                        isOpen && "rotate-180 text-accent",
                      )}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  {isOpen ? (
                    <div
                      className="absolute left-0 top-full pt-2 w-64 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="border border-ink bg-paper p-2 shadow-xl">
                        <div className="border-b border-rule/50 px-3 py-1.5">
                          <span className="font-outlier text-[10px] uppercase tracking-widest text-accent">
                            {item.label}
                          </span>
                        </div>
                        <div className="mt-1 space-y-0.5">
                          {item.children.map((child) => {
                            const childActive = pathname === child.href;
                            return (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => {
                                  clearCloseTimer();
                                  setOpenGroup(null);
                                }}
                                className={cn(
                                  "block px-3 py-2 text-left transition-colors",
                                  childActive
                                    ? "bg-paper-2 border-l-2 border-accent text-ink"
                                    : "hover:bg-paper-2 hover:text-ink text-ink/90",
                                )}
                              >
                                <div className="font-display text-xs font-bold">
                                  {child.label}
                                </div>
                                {child.description ? (
                                  <p className="mt-0.5 text-[11px] leading-tight text-muted">
                                    {child.description}
                                  </p>
                                ) : null}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            }

            // Direct standalone desktop link
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                data-active={active ? "true" : "false"}
                className={cn(
                  "nav-link px-3 py-2 text-sm font-medium transition-colors",
                  active ? "text-ink font-semibold" : "text-muted hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Controls & Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <ButtonLink href="/contact/" variant="primary" className="text-xs sm:text-sm px-4 py-2 sm:px-6 sm:py-2.5">
            Enquire
          </ButtonLink>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="flex h-9 w-9 items-center justify-center border border-ink bg-paper text-ink transition-colors hover:bg-paper-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)] md:hidden"
          >
            {mobileMenuOpen ? (
              // Close (X) icon
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // 3-bar Hamburger icon
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Full-Width Mobile Navigation Drawer */}
      {mobileMenuOpen ? (
        <div className="border-t border-ink bg-paper shadow-2xl animate-in fade-in slide-in-from-top-2 duration-150 md:hidden max-h-[calc(100vh-60px)] overflow-y-auto">
          <div className="container py-6 space-y-6">
            {/* Quick Home Link */}
            <div>
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block py-2 text-base font-display font-bold border-b border-rule/50",
                  pathname === "/" ? "text-accent" : "text-ink",
                )}
              >
                Home
              </Link>
            </div>

            {/* Company Section */}
            <div>
              <span className="font-outlier text-[11px] font-bold uppercase tracking-widest text-accent">
                Company
              </span>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <Link
                  href="/about/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "border border-rule bg-plate p-2.5 text-xs font-semibold text-ink",
                    pathname.startsWith("/about/") && "border-accent bg-paper-2",
                  )}
                >
                  About Us
                </Link>
                <Link
                  href="/certifications/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "border border-rule bg-plate p-2.5 text-xs font-semibold text-ink",
                    pathname.startsWith("/certifications/") && "border-accent bg-paper-2",
                  )}
                >
                  ISO & Awards
                </Link>
                <Link
                  href="/financials/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "border border-rule bg-plate p-2.5 text-xs font-semibold text-ink",
                    pathname.startsWith("/financials/") && "border-accent bg-paper-2",
                  )}
                >
                  Financials
                </Link>
                <Link
                  href="/careers/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "border border-rule bg-plate p-2.5 text-xs font-semibold text-ink",
                    pathname.startsWith("/careers/") && "border-accent bg-paper-2",
                  )}
                >
                  Careers
                </Link>
              </div>
            </div>

            {/* Capabilities Section */}
            <div>
              <span className="font-outlier text-[11px] font-bold uppercase tracking-widest text-accent">
                Capabilities & Work
              </span>
              <div className="mt-2 grid grid-cols-3 gap-2">
                <Link
                  href="/services/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "border border-rule bg-plate p-2.5 text-xs font-semibold text-ink text-center",
                    pathname.startsWith("/services/") && "border-accent bg-paper-2",
                  )}
                >
                  Services
                </Link>
                <Link
                  href="/industries/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "border border-rule bg-plate p-2.5 text-xs font-semibold text-ink text-center",
                    pathname.startsWith("/industries/") && "border-accent bg-paper-2",
                  )}
                >
                  Industries
                </Link>
                <Link
                  href="/projects/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "border border-rule bg-plate p-2.5 text-xs font-semibold text-ink text-center",
                    pathname.startsWith("/projects/") && "border-accent bg-paper-2",
                  )}
                >
                  Projects
                </Link>
              </div>
            </div>

            {/* Partners Section */}
            <div>
              <span className="font-outlier text-[11px] font-bold uppercase tracking-widest text-accent">
                Partners & Associations
              </span>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <Link
                  href="/principals/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "border border-rule bg-plate p-2.5 text-xs font-semibold text-ink",
                    pathname.startsWith("/principals/") && "border-accent bg-paper-2",
                  )}
                >
                  Our Principals
                </Link>
                <Link
                  href="/clients/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "border border-rule bg-plate p-2.5 text-xs font-semibold text-ink",
                    pathname.startsWith("/clients/") && "border-accent bg-paper-2",
                  )}
                >
                  Customers & List
                </Link>
              </div>
            </div>

            {/* Bottom Contact / Direct Help */}
            <div className="pt-2 border-t border-rule/60">
              <Link
                href="/contact/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between border border-ink bg-ink px-4 py-3 text-xs font-outlier font-semibold uppercase tracking-wider text-paper"
              >
                <span>Direct Contact Desk</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
