import Image from "next/image";
import Link from "next/link";
import { industrySectors } from "@/data/industries";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { asset } from "@/lib/site";

export function Industries() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Industries"
              title="Sectors served"
              description="Industrial and infrastructure sectors referenced across the company customer profile."
            />
            <Link
              href="/industries/"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-cobalt underline-offset-4 hover:text-brand hover:underline"
            >
              View all industries
              <span className="cta-arrow inline-block">→</span>
            </Link>
          </div>
        </Reveal>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industrySectors.map((sector, index) => (
            <li key={sector.id}>
              <Reveal delay={index * 60}>
                <Link
                  href={`/industries/#${sector.id}`}
                  className="group card-lift block overflow-hidden border border-border bg-surface"
                >
                  <div className="image-zoom relative aspect-[5/4] bg-brand/10">
                    {sector.image ? (
                      <Image
                        src={asset(sector.image)}
                        alt=""
                        fill
                        className="image-zoom-inner object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    ) : null}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand/90 via-brand/25 to-transparent transition-opacity duration-300 group-hover:from-brand" />
                    <div className="absolute inset-x-0 bottom-0 p-5 transition-transform duration-300 group-hover:translate-y-[-2px]">
                      <p className="font-display text-xl font-semibold text-white">
                        {sector.name}
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-widest text-turquoise">
                        Sector {String(index + 1).padStart(2, "0")}
                      </p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
