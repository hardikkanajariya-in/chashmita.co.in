import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  className,
}: PageHeroProps) {
  return (
    <section className={cn("border-b border-border bg-white", className)}>
      <Container className="py-14 lg:py-20">
        {eyebrow ? (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-copper">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="max-w-3xl font-display text-4xl font-semibold leading-tight text-graphite sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            {description}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
