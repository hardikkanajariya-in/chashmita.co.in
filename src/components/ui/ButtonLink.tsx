import Link from "next/link";
import { cn } from "@/lib/cn";

const base =
  "btn-interact btn-liquid inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "onInk";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  if (variant === "ghost") {
    return (
      <Link
        href={href}
        className={cn(
          "btn-interact inline-flex items-center justify-center gap-2 px-2 py-2 text-sm font-medium text-ink underline decoration-ink/30 underline-offset-[0.2em] hover:decoration-accent active:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]",
          className,
        )}
      >
        <span className="relative z-1 inline-flex items-center gap-2">
          {children}
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        base,
        variant === "primary" &&
          "bg-ink text-paper [--btn-liquid-bg:var(--color-accent)] hover:text-paper",
        variant === "secondary" &&
          "bg-plate text-ink shadow-[inset_0_0_0_var(--rule-bar)_var(--color-ink)] [--btn-liquid-bg:var(--color-ink)] hover:text-paper",
        variant === "onInk" &&
          "bg-plate text-ink [--btn-liquid-bg:var(--color-accent)] hover:text-paper",
        className,
      )}
    >
      <span className="relative z-1 flex w-full items-center justify-inherit gap-2">
        {children}
      </span>
    </Link>
  );
}
