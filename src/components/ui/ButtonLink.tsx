import Link from "next/link";
import { cn } from "@/lib/cn";

const base =
  "inline-flex items-center justify-center gap-2 text-sm font-semibold tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b56e45]";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        base,
        variant === "primary" &&
          "bg-navy px-6 py-3.5 text-ivory hover:bg-graphite",
        variant === "secondary" &&
          "border border-border bg-white px-6 py-3.5 text-graphite hover:border-navy/30",
        variant === "ghost" &&
          "px-2 py-2 text-navy underline-offset-4 hover:underline",
        className,
      )}
    >
      {children}
    </Link>
  );
}
