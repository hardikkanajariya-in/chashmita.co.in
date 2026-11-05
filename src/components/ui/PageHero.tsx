import { cn } from "@/lib/cn";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  tone?: "light" | "alt";
};

export function PageHero({
  eyebrow,
  title,
  description,
  className,
  tone = "alt",
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "border-b border-border",
        tone === "alt" ? "bg-surface-alt" : "bg-white",
        className,
      )}
    >
      <div className="mx-auto max-w-[88rem] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        {eyebrow ? (
          <>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-turquoise">
              {eyebrow}
            </p>
            <div className="section-rule mb-5 w-16" />
          </>
        ) : null}
        <h1 className="max-w-3xl font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
