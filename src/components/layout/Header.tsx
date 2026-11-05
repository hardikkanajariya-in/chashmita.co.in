"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { mainNav } from "@/data/navigation";
import { site, asset } from "@/lib/site";
import { cn } from "@/lib/cn";
import { ButtonLink } from "@/components/ui/ButtonLink";
import Image from "next/image";

function MenuIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
    </svg>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-[background-color,box-shadow,border-color] duration-300",
        scrolled
          ? "border-border/90 bg-white/95 shadow-sm shadow-brand/5 backdrop-blur-md"
          : "border-border/60 bg-surface/90 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex max-w-[88rem] items-center justify-between gap-6 px-5 py-3.5 sm:px-8 lg:px-12">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <Image
            src={asset("index_r1_c1.gif")}
            alt=""
            width={48}
            height={28}
            className="h-7 w-auto shrink-0"
            priority
          />
          <span className="hidden min-w-0 flex-col sm:flex">
            <span className="truncate font-display text-sm font-semibold tracking-tight text-ink sm:text-base">
              {site.shortName}
            </span>
            <span className="truncate text-xs text-ink-muted">
              Est. {site.established}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {mainNav.map((item) => {
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
                  "nav-link rounded-sm px-3 py-2.5 text-sm font-medium transition-colors duration-200",
                  active ? "text-brand" : "text-ink/75 hover:text-brand",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/contact/" variant="accent">
            Enquire
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-sm border border-border bg-white p-2.5 text-ink transition hover:border-cobalt/40 lg:hidden"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <div
        id={panelId}
        className="mobile-drawer border-t border-border bg-white lg:hidden"
        data-open={open ? "true" : "false"}
        aria-hidden={!open}
      >
        <div>
          <nav className="flex flex-col px-5 py-4 sm:px-8" aria-label="Mobile">
            {mainNav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "border-b border-border/60 py-3.5 text-base font-medium transition-colors",
                    active ? "text-brand" : "text-ink hover:text-cobalt",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-4">
              <ButtonLink href="/contact/" variant="accent" className="w-full">
                Enquire
              </ButtonLink>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
