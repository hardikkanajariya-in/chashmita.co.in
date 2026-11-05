import { cn } from "@/lib/cn";

type PageHeroProps = {
  kicker?: string;
  title: string;
  description?: string;
  className?: string;
};

export function PageHero({
  kicker,
  title,
  description,
  className,
}: PageHeroProps) {
  return (
    <section className={cn("band-paper border-b border-ink", className)}>
      <div className="container section-pad">
        {kicker ? (
          <p className="mb-3 text-sm font-medium text-muted">{kicker}</p>
        ) : null}
        <h1 className="max-w-[20ch] font-display text-display leading-none text-ink">
          {title}
        </h1>
        {description ? (
          <p className="lead mt-5 max-w-[52ch] text-muted">{description}</p>
        ) : null}
      </div>
    </section>
  );
}
