import Link from "next/link";
import { cn } from "@/lib/cn";

function CtaArrow({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 16 16"
      className={cn("cta-arrow h-4 w-4 shrink-0", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const base =
  "group inline-flex items-center justify-center gap-2 text-sm font-semibold tracking-wide transition-[color,background-color,border-color,transform,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt active:scale-[0.98]";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "accent";
  className?: string;
  showArrow?: boolean;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  showArrow = false,
}: ButtonProps) {
  const arrow = showArrow || variant === "primary" || variant === "accent";

  return (
    <Link
      href={href}
      className={cn(
        base,
        variant === "primary" &&
          "bg-brand px-6 py-3.5 text-white shadow-sm hover:bg-[#1e4a6b] hover:shadow-md",
        variant === "accent" &&
          "bg-amber px-6 py-3.5 text-ink hover:bg-[#e09a00] hover:shadow-md",
        variant === "secondary" &&
          "border border-border bg-white px-6 py-3.5 text-ink hover:border-cobalt/40 hover:text-brand",
        variant === "ghost" &&
          "px-2 py-2 text-cobalt underline-offset-4 hover:text-brand hover:underline",
        className,
      )}
    >
      {children}
      {arrow ? <CtaArrow /> : null}
    </Link>
  );
}

export { CtaArrow };
