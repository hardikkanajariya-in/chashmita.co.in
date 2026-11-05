import Image from "next/image";
import Link from "next/link";
import { industrySectors } from "@/data/industries";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { asset } from "@/lib/site";

export function Industries() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Industries"
            title="Sectors served"
            description="Industrial and infrastructure sectors referenced across the company customer profile."
          />
          <Link
            href="/industries/"
            className="text-sm font-semibold text-navy underline-offset-4 hover:underline"
          >
            View all industries
          </Link>
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industrySectors.map((sector, index) => (
            <li key={sector.id} className="group relative overflow-hidden">
              <div className="relative aspect-[5/4] bg-graphite/10">
                {sector.image ? (
                  <Image
                    src={asset(sector.image)}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-t from-graphite/80 via-graphite/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-display text-xl font-semibold text-white">
                    {sector.name}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-white/70">
                    Sector {String(index + 1).padStart(2, "0")}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
