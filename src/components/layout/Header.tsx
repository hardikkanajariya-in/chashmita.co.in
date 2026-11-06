"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "@/data/navigation";
import { site, asset } from "@/lib/site";
import { cn } from "@/lib/cn";
import { ButtonLink } from "@/components/ui/ButtonLink";
import Image from "next/image";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="nav-slab sticky top-0 z-[var(--z-sticky-nav)]">
      <div className="container flex items-center justify-between gap-6 py-3">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-focus)]"
        >
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

        <ButtonLink href="/contact/" variant="primary">
          Enquire
        </ButtonLink>
      </div>
    </header>
  );
}
