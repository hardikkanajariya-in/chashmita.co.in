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
  const panelId = useId();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-ivory/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[88rem] items-center justify-between gap-6 px-5 py-4 sm:px-8 lg:px-12">
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
            <span className="truncate font-display text-sm font-semibold tracking-tight text-graphite sm:text-base">
              {site.shortName}
            </span>
            <span className="truncate text-xs text-muted">Est. {site.established}</span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {mainNav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-sm px-3 py-2 text-sm font-medium text-graphite/80 transition-colors hover:text-navy",
                  active && "text-navy",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/contact/" variant="primary">
            Enquire
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-sm border border-border bg-white p-2.5 text-graphite lg:hidden"
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
        hidden={!open}
        className="border-t border-border bg-ivory lg:hidden"
      >
        <nav className="flex flex-col px-5 py-4 sm:px-8" aria-label="Mobile">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-border/60 py-3.5 text-base font-medium text-graphite"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4">
            <ButtonLink href="/contact/" className="w-full">
              Enquire
            </ButtonLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
