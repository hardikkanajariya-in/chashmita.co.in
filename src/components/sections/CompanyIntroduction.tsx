import Image from "next/image";
import { companyIntro } from "@/data/company";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { asset } from "@/lib/site";

export function CompanyIntroduction() {
  return (
    <section className="relative bg-white py-16 lg:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <div className="image-zoom relative aspect-[3/4] max-h-[32rem] overflow-hidden border border-border">
            <Image
              src={asset("photo3.jpg")}
              alt="CCTV controls installation at LNG Hazira project"
              fill
              className="image-zoom-inner object-cover"
              sizes="(max-width: 1024px) 100vw, 38vw"
            />
            <div className="absolute left-0 top-8 bg-amber px-3 py-1 text-xs font-semibold uppercase tracking-widest text-ink">
              Field execution
            </div>
          </div>
        </Reveal>
        <Reveal className="lg:col-span-7" delay={120}>
          <SectionHeading
            eyebrow="Company"
            title={companyIntro.headline}
            description={`Established in ${companyIntro.established}. ${companyIntro.summary}`}
          />
        </Reveal>
      </Container>
    </section>
  );
}
