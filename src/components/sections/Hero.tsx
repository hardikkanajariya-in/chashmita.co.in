import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { site, asset } from "@/lib/site";

export function Hero() {
  return (
    <section className="border-b border-border bg-ivory">
      <Container className="grid gap-10 py-14 lg:grid-cols-12 lg:items-end lg:gap-8 lg:py-20">
        <div className="lg:col-span-5 lg:pb-4">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-copper">
            Established {site.established}
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.05] text-graphite sm:text-5xl lg:text-6xl">
            {site.tagline}
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg">
            Turnkey design, engineering, supply, installation, testing,
            commissioning and maintenance for industrial electrical, lighting,
            communication and CCTV systems.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="/services/">Explore our capabilities</ButtonLink>
            <ButtonLink href="/contact/" variant="secondary">
              Contact us
            </ButtonLink>
          </div>
        </div>
        <div className="relative lg:col-span-7">
          <div className="relative aspect-[4/3] overflow-hidden bg-graphite/5 lg:aspect-[16/11]">
            <Image
              src={asset("photo5.jpg")}
              alt="Industrial CCTV and check post installation"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 58vw"
              priority
            />
          </div>
          <p className="mt-3 max-w-prose text-xs leading-relaxed text-muted">
            Project photograph from company profile — R.T.O. check post
            installation.
          </p>
        </div>
      </Container>
    </section>
  );
}
