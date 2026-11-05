"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { mainNav } from "@/data/navigation";
import { site, asset, contact } from "@/lib/site";
import { cn } from "@/lib/cn";
import { ButtonLink } from "@/components/ui/ButtonLink";
import Image from "next/image";

function MenuIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
    </svg>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    document.body.style.overflow = open ? "clip" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="nav-slab sticky top-0 z-[var(--z-sticky-nav)]">
      <div className="container flex items-center justify-between gap-6 py-3">
        <Link href="/" className="flex min-w-0 items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-focus)]">
          <Image
            src={asset("index_r1_c1.gif")}
            alt=""
            width={48}
            height={28}
            className="h-7 w-auto shrink-0"
            priority
          />
          <span className="hidden min-w-0 flex-col sm:flex">
            <span className="truncate font-display text-sm text-ink sm:text-base">
              {site.shortName}
            </span>
            <span className="truncate font-outlier text-xs text-muted">
              Est. {site.established}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
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
                  "nav-link px-3 py-2.5 text-sm font-medium",
                  active ? "text-ink" : "text-muted hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a
            href={`tel:${contact.phones[0].replace(/\s/g, "")}`}
            className="text-sm text-muted underline decoration-rule underline-offset-[0.2em] hover:text-ink hover:decoration-accent"
          >
            {contact.phoneDisplay[0]}
          </a>
          <ButtonLink href="/contact/" variant="primary">
            Enquire
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center border border-ink bg-plate p-2.5 text-ink transition hover:shadow-[inset_0_0_0_var(--rule-bar)_var(--color-accent)] active:bg-paper-2 lg:hidden"
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
        className="mobile-drawer border-t border-ink bg-plate lg:hidden"
        data-open={open ? "true" : "false"}
        aria-hidden={!open}
      >
        <div>
          <nav className="container flex flex-col py-4" aria-label="Mobile">
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
                    "border-b border-rule py-3.5 text-base font-medium",
                    active ? "text-ink" : "text-muted hover:text-ink",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="flex flex-col gap-3 pt-4">
              <a
                href={`tel:${contact.phones[0].replace(/\s/g, "")}`}
                className="text-sm text-muted"
              >
                {contact.phoneDisplay[0]}
              </a>
              <ButtonLink href="/contact/" variant="primary" className="w-full">
                Enquire
              </ButtonLink>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
