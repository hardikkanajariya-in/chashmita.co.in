import Image from "next/image";
import Link from "next/link";
import { industrySectors } from "@/data/industries";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { asset } from "@/lib/site";

export function Industries() {
  return (
    <section className="section-pad bg-plate">
      <Container>
        <Reveal>
          <div className="flex min-w-0 flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              kicker="Sectors"
              title="Industries served"
              description="Industrial and infrastructure sectors referenced across the company customer profile."
            />
            <Link
              href="/industries/"
              className="text-sm font-medium text-ink underline decoration-rule underline-offset-[0.2em] hover:decoration-accent"
            >
              View all industries
            </Link>
          </div>
        </Reveal>
        <ul className="mt-12 grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industrySectors.map((sector, index) => (
            <li key={sector.id} className="min-w-0">
              <Reveal delay={index * 50}>
                <Link href={`/industries/#${sector.id}`} className="spec-card block">
                  <figure>
                    <div className="relative aspect-[5/4] bg-paper-2">
                      {sector.image ? (
                        <Image
                          src={asset(sector.image)}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      ) : null}
                    </div>
                    <figcaption className="flex items-baseline justify-between gap-2">
                      <span className="font-display text-lg text-ink">
                        {sector.name}
                      </span>
                      <span className="font-outlier text-xs text-muted">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </figcaption>
                  </figure>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
