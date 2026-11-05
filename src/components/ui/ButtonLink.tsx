import Link from "next/link";
import { cn } from "@/lib/cn";

const base =
  "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium transition-[background-color,color,box-shadow,transform] duration-[var(--dur-short)] ease-[var(--ease-out)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)] active:translate-y-px";

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
  return (
    <Link
      href={href}
      className={cn(
        base,
        variant === "primary" &&
          "bg-ink text-paper hover:bg-ink-2 active:bg-ink-2",
        variant === "secondary" &&
          "bg-plate text-ink shadow-[inset_0_0_0_var(--rule-bar)_var(--color-ink)] hover:shadow-[inset_0_0_0_var(--rule-bar)_var(--color-accent)] active:bg-paper-2",
        variant === "ghost" &&
          "px-2 py-2 text-ink underline decoration-ink/30 underline-offset-[0.2em] hover:decoration-accent active:text-accent",
        variant === "onInk" &&
          "bg-plate text-ink hover:bg-paper active:bg-paper-2",
        className,
      )}
    >
      {children}
    </Link>
  );
}
