import Image from "next/image";
import { companyIntro } from "@/data/company";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { asset } from "@/lib/site";

export function CompanyIntroduction() {
  return (
    <section className="section-pad bg-plate">
      <Container className="grid min-w-0 items-start gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="min-w-0 lg:col-span-5">
          <figure className="photo-card">
            <div className="relative aspect-[3/4] max-h-[32rem] min-h-[16rem]">
              <Image
                src={asset("project-lng-cctv.jpg")}
                alt="CCTV and telemetry control systems installation at LNG Hazira project"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 38vw"
              />
            </div>
            <figcaption>
              LNG Hazira, CCTV and telemetry systems installation
            </figcaption>
          </figure>
        </Reveal>
        <Reveal className="min-w-0 lg:col-span-7" delay={120}>
          <SectionHeading
            kicker="Company profile"
            title={companyIntro.headline}
            description={`Established in ${companyIntro.established}. ${companyIntro.summary}`}
          />
        </Reveal>
      </Container>
    </section>
  );
}
