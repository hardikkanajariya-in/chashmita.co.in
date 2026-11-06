"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { headerNav, isNavGroup, NavItemGroup } from "@/data/navigation";
import { site, asset } from "@/lib/site";
import { cn } from "@/lib/cn";
import { ButtonLink } from "@/components/ui/ButtonLink";
import Image from "next/image";

export function Header() {
  const pathname = usePathname();
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  // Close dropdown on route change or click outside
  useEffect(() => {
    setOpenGroup(null);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenGroup(null);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenGroup(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const toggleGroup = (groupLabel: string) => {
    setOpenGroup((current) => (current === groupLabel ? null : groupLabel));
  };

  return (
    <header className="nav-slab sticky top-0 z-[var(--z-sticky-nav)]">
      <div className="container flex items-center justify-between gap-6 py-3">
        {/* Brand Logo & Name */}
        <Link
          href="/"
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
          <span className="hidden min-w-0 flex-col sm:flex">
            <span className="truncate font-display text-sm font-bold text-ink sm:text-base">
              {site.shortName}
            </span>
            <span className="truncate font-outlier text-xs text-muted">
              Est. {site.established}
            </span>
          </span>
        </Link>

        {/* Grouped Primary Navigation */}
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
                  onMouseEnter={() => setOpenGroup(item.label)}
                  onMouseLeave={() => setOpenGroup(null)}
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
                    <div className="absolute left-0 top-full mt-1 w-64 border border-ink bg-paper p-2 shadow-lg animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                      <div className="border-b border-rule/50 px-3 py-1.5">
                        <span className="font-outlier text-[10px] uppercase tracking-widest text-accent">
                          {item.label} Section
                        </span>
                      </div>
                      <div className="mt-1 space-y-0.5">
                        {item.children.map((child) => {
                          const childActive = pathname === child.href;
                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setOpenGroup(null)}
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
                  ) : null}
                </div>
              );
            }

            // Direct standalone link
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

        {/* Action Button */}
        <ButtonLink href="/contact/" variant="primary">
          Enquire
        </ButtonLink>
      </div>
    </header>
  );
}
